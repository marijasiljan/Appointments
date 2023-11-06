<?php

namespace App\Http\Controllers\Backend\Auth;

use App\Events\UserRegistered;
use App\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Ramsey\Uuid\Type\Integer;
use Validator;

class AuthController extends BaseController
{
    public function register(Request $request)
    {

        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'surname' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'birthday' => 'required',
            'role' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->ResponseError($validator->errors(),'Invalid data!', 404);
        }
        try {
         //   $verificationCode = Str::random(4);
            $verificationCode = strval(random_int(100000, 999999));

            $user = new User([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'surname' => $request->input('surname'),
                'birthday' => $request->input('birthday'),
                'role' => $request->input('role'),
                'verificationCode' => $verificationCode,
            ]);

            $user->save();

            event(new UserRegistered($user, $verificationCode));


            return $this->ResponseSuccess($user, $verificationCode, 'User created successfully!');
        }catch (\Exception $e){
            return $this->ResponseError($e->getTrace(),'Invalid data!', 500);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {
            $user = Auth::user();
            $token = $user->createToken('LoginToken')->plainTextToken;
            $user->remember_token = $token;
            $user->save();


            return $this->ResponseSuccess( $user, '', 'User logged in successfully!', 200);
        }
        return $this->ResponseError(null, 'Invalid Credentials', 401);
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        $user->tokens()->delete();

        return $this->ResponseSuccess(null, '', 'User logged out successfully!', 200);
    }
}
