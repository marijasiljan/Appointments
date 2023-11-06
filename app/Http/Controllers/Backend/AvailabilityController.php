<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BaseController;
use App\Models\Availability;
use Illuminate\Http\Request;
use Validator;

class AvailabilityController extends BaseController
{
    public function index() {

        $availableSlots = Availability::whereStatus(1)->get();

        return $this->ResponseSuccess($availableSlots);
    }

    public function store(Request $request)
    {
        $validator = Validator::make(request()->all(), [
            'date' => 'required',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
            'status' => 'required',
            'employee_id' => 'required',
            'affiliate_id' => 'required',

        ]);

        if ($validator->fails()) {
            return $this->ResponseError($validator->errors(),'Invalid data.', 422);
        }

        if($request->input('id')){
            $available = Availability::find($request->input('id'));
        }else {
            $available = new Availability();
        }
            $available->start_time = $request->input('start_time');
            $available->end_time = $request->input('end_time');
            $available->status = $request->input('status');
            $available->employee_id = $request->input('employee_id');
            $available->affiliate_id = $request->input('affiliate_id');


        return $this->ResponseSuccess($available, '', 'Available Slot created successfully!');
    }

    public function destroy($id)
    {
        $available = Availability::findOrFail($id);
        $available->status = -1;
        $available->save();

        return $this->ResponseSuccess($available, '', 'Available Slot deleted successfully!');
    }
}
