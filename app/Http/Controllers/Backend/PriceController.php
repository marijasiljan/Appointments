<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BaseController;
use App\Models\Price;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PriceController extends BaseController {

    public function indexAdmin(){

        $prices = Price::with('service')->get();

        return $this->ResponseSuccess($prices);
    }

    public function index(){

        $prices = Price::with('service')->whereStatus(1)->get();

        return $this->ResponseSuccess($prices);
    }

    public function changeStatus(Request $request) {

        $id = $request->input('id');
        $newStatus = $request->input('status');

        $price = Price::find($id);

        if (!$price) {
            return $this->ResponseError(0,'Price not found!', 404);
        }

        $price->status = $newStatus;
        $price->save();

        return $this->ResponseSuccess($price);
    }

    public function store(Request $request){

        $validator = Validator::make(request()->all(), [
            'service_id' => 'required',
            'value' => 'required',
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->ResponseError(0,'Invalid data.', 404);
        }
        if($request->input('id')){
            $price = Price::find($request->input('id'));
        }else{
            $price = new Price();
        }

        $price->service_id = $request->input('service_id');
        $price->value = $request->input('value');
        $price->status = $request->input('status');

        $price->save();

        return $this->ResponseSuccess($price, '', 'Price added successfully!');
    }

    public function destroy($id)
    {
        $price = Price::findOrFail($id);
        $price->status = -1;
        $price->save();

        return $this->ResponseSuccess($price, '', 'User deleted successfully!');
    }
}
