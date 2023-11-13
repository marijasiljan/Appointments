<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BaseController;
use App\Models\Appointment;
use App\Models\Availability;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Validator;

class AvailabilityController extends BaseController
{
    public function getIntervals() {

        $availableSlots = Availability::with('employee')->whereStatus(1)->get();

        return $this->ResponseSuccess($availableSlots);
    }

    public function store(Request $request)
    {
        $validator = Validator::make(request()->all(), [
            'date' => 'nullable',
            'hours' => 'required',
            'status' => '',
            'employee_id' => 'required',
            'affiliate_id' => '',
            'days' => function ($attribute, $value, $fail) {
                if (empty(request('date'))) {
                    if (empty($value)) {
                        $fail($attribute.' is required when date is not provided.');
                    }
                }
            },
        ]);

        if ($validator->fails()) {
            return $this->ResponseError($validator->errors(),'Invalid data.', 422);
        }

        if($request->input('id')){
            $available = Availability::find($request->input('id'));
        }else {
            $available = new Availability();
        }
            $available->date = $request->input('date');
            $available->hours = json_encode($request->input('hours'));
            $available->status = $request->input('status') ?? 1;
            $available->employee_id = $request->input('employee_id');
            $available->affiliate_id = $request->input('affiliate_id');
            $available->days = json_encode($request->input('days'));

            $available->save();

        return $this->ResponseSuccess($available, '', 'Available Slot created successfully!');
    }

    public function destroy($id)
    {
        $available = Availability::findOrFail($id);
        $available->status = -1;
        $available->save();

        return $this->ResponseSuccess($available, '', 'Available Slot deleted successfully!');
    }

    public function history() {

        $availableSlots = Availability::whereStatus(0)->get();

        return $this->ResponseSuccess($availableSlots);
    }

    public function generateTimeSlots(Request $request)
    {
        $validator = Validator::make(request()->all(), [
            'date' => 'required',
            'employee_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->ResponseError($validator->errors(), 'Invalid data.', 422);
        }

        $employeeId = $request->input('employee_id');
        $date = Carbon::parse($request->input('date'));
        $day = $date->format('l');

        $availableSlots = Availability::where('employee_id', $employeeId)
            ->where(function ($q) use ($day) {
                $q->where('date', request('date'))->orWhere(function ($query) use ($day) {
                    $query->where('days', 'like', '%' . $day . '%')->where('date', null);
                });
            })
            ->where('status', 1)
            ->latest()
            ->first();

        if ($availableSlots) {
            $hours = json_decode($availableSlots->hours, true);

            if (!empty($hours)) {
                $slots = [];

                foreach ($hours as $hour) {
                    $startPeriod = Carbon::parse($hour['start_time']);
                    $endPeriod = Carbon::parse($hour['end_time']);

                    $period = CarbonPeriod::create($startPeriod, '30 minutes', $endPeriod);
                    foreach ($period as $h) {
                        $endDateTime = $h->copy()->addMinutes(30);
                        $appointmentsExist = Appointment::whereStatus(1)
                            ->where(function ($q) use ($date,$endDateTime,$h) {
                                $q->where('date', $date->format('Y-m-d'))
                                    ->where('employee_id', request("employee_id"))
                                    ->where(function ($q) use ($h, $endDateTime) {
                                            $q->where('start_time', $h->format('H:i:s'))
                                                ->where('end_time',  $endDateTime->format('H:i:s'));
                                    });
                            })
                            ->exists();
                        if (!$appointmentsExist) {
                            $slots[] = [
                                'start_time' => $h->format('H:i'),
                                'end_time' => $endDateTime->format('H:i')
                            ];
                        }
                    }
                }

                 array_pop($slots);

                return $this->ResponseSuccess($slots);
            } else {
                return $this->ResponseError("No available slots found");
            }
        } else {
            return $this->ResponseError(null, 'No available time slots for that employee.', 400);
        }
    }

}

