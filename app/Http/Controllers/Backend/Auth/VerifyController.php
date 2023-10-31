<?php

namespace App\Http\Controllers\Backend\Auth;

use App\Http\Controllers\BaseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VerifyController extends BaseController
{
    public function verifyCode(Request $request)
    {

        $user = User::where('email', $request->input('email'))->first();
        $verificationCode = $request->input('verificationCode');

        if (!$user) {
            return $this->ResponseError(0, 'User not found', 404);
        }

        if ($user->verificationCode === $verificationCode) {
            return $this->ResponseSuccess($user, '', 'User verified successfully!');
        } else {
            return $this->ResponseError(0,'Invalid data!', 500);
        }
    }


}
