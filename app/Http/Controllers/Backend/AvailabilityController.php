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
            'date' => '',
            'hours' => '',
            'status' => '',
            'employee_id' => '',
            'affiliate_id' => '',
            'days' => 'required'

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

    public function generateTimeSlots(Request $request) {

        $validator = Validator::make(request()->all(), [
            'date' => 'required',
            'employee_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->ResponseError($validator->errors(),'Invalid data.', 422);
        }

        $employeeId = $request->input('employee_id');
        $date = Carbon::parse($request->input('date'));
        $day = $date->format('l');

        $availableSlots = Availability::where('employee_id', $employeeId)  //site availabilities za toj employee
            ->where(function($q) use ($day){
                $q->where('date' , request('date'))->orWhere(function($query) use ($day){  //ako imat datum vrati gi site availabilities za datumot, ako nemat
                    $query->where('days','like','%'.$day.'%')->where('date',null);              // sporedi go denot od input datumot so site days vo availability
                });
            })
            ->where('status', 1)
            ->latest()->first();

        if($availableSlots){



        $hours = json_decode($availableSlots->hours, true);
        if (!empty($hours)) {
            $slots = [];

            foreach ($hours as $hour) {
                $startPeriod = Carbon::parse($hour['start_time']);
                $endPeriod = Carbon::parse($hour['end_time']);

                $period = CarbonPeriod::create($startPeriod, '30 minutes', $endPeriod);

                foreach ($period as $date) {
                    $endDateTime = $date->copy()->addMinutes(30);

                    $appointments = Appointment::whereStatus(1)
                        ->where(function($q) use ($date, $endDateTime){
                            $q->where('start_time', 'like', '%'.$date->format('H:i').'%')
                                ->where('start_time', '<', $endDateTime)
                                ->where('end_time', '>', $date);
                        })
                        ->exists();
                    if(!$appointments){
                        $slots[] = [
                            'start_time' => $date->format('H:i'),
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
        }
        else{
            return $this->ResponseError(null, 'No available time slots for that employee.', 400);
        }

    }
}
