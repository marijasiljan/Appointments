<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BaseController;
use App\Models\Price;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ServiceController extends BaseController {

    public function indexAdmin(){

        $services = Service::with('price')->get();

        return $this->ResponseSuccess($services);
    }

    public function index(){

        $services = Service::with('price')->whereStatus(1)->get();

        return $this->ResponseSuccess($services);
    }

    public function changeStatus(Request $request) {

        $id = $request->input('id');
        $newStatus = $request->input('status');

        $service = Service::find($id);

        if (!$service) {
            return $this->ResponseError(0,'Service not found!', 404);
        }

        $service->status = $newStatus;
        $service->save();

        return $this->ResponseSuccess($service);
    }

    public function store(Request $request){

        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'category' => 'required',
            'price_id' => 'required',
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->ResponseError($validator->errors(),'Invalid data.', 422);
        }

        if($request->input('id')){
            $service = Service::find($request->input('id'));
        }
        else
        {
            $service = new Service();

        }

        $service->name = $request->input('name');
        $service->category = $request->input('category');
        $service->price_id = $request->input('price_id');
        $service->status = $request->input('status');

        $service->save();

        return $this->ResponseSuccess($service, '', 'Service added successfully!');
    }

    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $service->status = -1;
        $service->save();

        return $this->ResponseSuccess($service, '', 'Service deleted successfully!');
    }
}
