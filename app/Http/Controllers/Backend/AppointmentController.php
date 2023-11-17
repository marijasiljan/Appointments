<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AppointmentController extends BaseController {
    public function indexAdmin(){

        $appointments = Appointment::with('employee', 'client', 'service')
            ->get();

        return $this->ResponseSuccess($appointments);
    }

    public function index(){

        $appointments = Appointment::with('employee', 'client', 'service')
            ->whereStatus(1)
            ->get();

        return $this->ResponseSuccess($appointments);
    }

    public function changeStatus(Request $request) {

        $id = $request->input('id');
        $newStatus = $request->input('status');

        $appointment = Appointment::find($id);

        if (!$appointment) {
            return $this->ResponseError(0,'Service not found!', 404);
        }

        $appointment->status = $newStatus;
        $appointment->save();

        return $this->ResponseSuccess($appointment);
    }

    public function store(Request $request){

        $validator = Validator::make(request()->all(), [
            'start_time' => 'required',
            'end_time' => 'required',
            'client_id' => 'required',
            'employee_id' => 'required',
            'price' => 'required',
            'date' => 'required',
            'service_id' => 'required',
            'status' => ''
        ]);

        if ($validator->fails()) {
            return $this->ResponseError(0,'Invalid data.', 404);
        }
        if($request->input('id')){
            $appointment = Appointment::find($request->input('id'));
        }else{
            $appointment = new Appointment();
        }

        $appointment->start_time = $request->input('start_time');
        $appointment->end_time = $request->input('end_time');
        $appointment->client_id = $request->input('client_id');
        $appointment->employee_id = $request->input('employee_id');
        $appointment->price = $request->input('price');
        $appointment->date = date('Y-m-d', strtotime(request('date')));//Carbon::parse($request->input('date'))->format('Y-m-d');
        $appointment->service_id = $request->input('service_id');
        $appointment->status = $request->input('status');

        $appointment->save();

        return $this->ResponseSuccess($appointment, '', 'Appointment created successfully!');
    }

    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->status = -1;
        $appointment->save();

        return $this->ResponseSuccess($appointment, '', 'User deleted successfully!');
    }
}
