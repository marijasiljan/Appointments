<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Validator;

class UsersController extends BaseController {


    public function index(){

        $users = User::whereStatus(1)->get();

        return $this->ResponseSuccess($users);
    }

    public function getUser(Request $request) {

        $user = $request->user();

        if($user){
            return $this->ResponseSuccess($user);

        }
        else{
            return $this->ResponseError(0,'User not found!', 404);
        }
    }

    public function getEmployee() {

        $users = User::whereRole('admin')->whereStatus(1)->get();

        return $this->ResponseSuccess($users);
    }

    public function getClient() {

        $users = User::whereRole('client')->whereStatus(1)->get();

        return $this->ResponseSuccess($users);
    }

    public function changeStatus(Request $request) {

        $id = $request->input('id');
        $newStatus = $request->input('status');

        $user = User::find($id);

        if (!$user) {
            return $this->ResponseError(0,'User not found!', 404);
        }

        $user->status = $newStatus;
        $user->save();

        return $this->ResponseSuccess($user);
    }

    public function store(Request $request){

        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'surname' => 'required',
            'email' => 'required|email',
            'password' => '',
            'birthday' => 'required',
            'status' => 'required',
            'role' => '',
            'affiliate_id' => '',
        ]);

        if ($validator->fails()) {
            return $this->ResponseError($validator->errors(),'Invalid data.', 422);
        }

        if($request->input('id')){
            $user = User::find($request->input('id'));
        }else{
            $user = new User();
            $user->email = $request->input('email');
        }

        $user->name = $request->input('name');
        $user->surname = $request->input('surname');
        $user->password = Hash::make($request->input('password'));
        $user->birthday = $request->input('birthday');
        $user->status = $request->input('status');
        $user->role = $request->input('role');
        $user->affiliate_id = $request->input('affiliate_id');
        $user->save();

        return $this->ResponseSuccess($user, '', 'User created successfully!');
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->status = -1;
        $user->save();

        return $this->ResponseSuccess($user, '', 'User deleted successfully!');
    }
}
