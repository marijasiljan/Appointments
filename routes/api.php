<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [Backend\Auth\AuthController::class, 'logout']);
});

Route::post('/register', [Backend\Auth\AuthController::class, 'register']);
Route::post('/login', [Backend\Auth\AuthController::class, 'login']);

Route::group(['prefix' => '/password'], function () {
    Route::post('/reset', [Backend\Auth\PasswordController::class, 'resetPassword']);
    Route::post('/email', [Backend\Auth\PasswordController::class, 'sendResetLinkEmail']);
    Route::post('/verify', [Backend\Auth\VerifyController::class, 'verifyCode']);
});

Route::group(['prefix' => '/services'], function () {
    Route::get('/', [Backend\ServiceController::class, 'index']);
    Route::post('/store', [Backend\ServiceController::class, 'store']);
    Route::delete('/{id}/delete', [Backend\ServiceController::class, 'destroy']);
});

Route::post('/getUser', [Backend\UsersController::class, 'getUser']);

Route::group(['prefix' => '/users'], function () {
    Route::get('/', [Backend\UsersController::class, 'index']);
    Route::get('/employee', [Backend\UsersController::class, 'getEmployee']);
    Route::get('/client', [Backend\UsersController::class, 'getClient']);
    Route::get('/{id}', [Backend\UsersController::class, 'getUser']);
    Route::post('/store', [Backend\UsersController::class, 'store']);
    Route::delete('/{id}/delete', [Backend\UsersController::class, 'destroy']);
    Route::put('/{id}/delete', [Backend\UsersController::class, 'destroy']);
    Route::put('/changeStatus', [Backend\UsersController::class, 'changeStatus']);
});

Route::get('/unreadChats', [Backend\UsersController::class, 'index']);

Route::group(['prefix' => '/price'], function () {
    Route::get('/', [Backend\PriceController::class, 'index']);
    Route::post('/store', [Backend\PriceController::class, 'store']);
    Route::delete('/{id}/delete', [Backend\PriceController::class, 'destroy']);
    Route::put('/{id}/delete', [Backend\PriceController::class, 'destroy']);
    Route::put('/changeStatus', [Backend\PriceController::class, 'changeStatus']);

});

Route::group(['prefix' => '/booking'], function () {
    Route::get('/', [Backend\BookingTimeController::class, 'index']);
    Route::post('/store', [Backend\BookingTimeController::class, 'store']);
    Route::post('/{id}/delete', [Backend\BookingTimeController::class, 'destroy']);
});

Route::group(['prefix' => '/appointments'], function () {
    Route::get('/', [Backend\AppointmentController::class, 'index']);
    Route::post('/store', [Backend\AppointmentController::class, 'store']);
    Route::post('/{id}/delete', [Backend\AppointmentController::class, 'destroy']);
});

Route::group(['prefix' => '/affiliates'], function () {
    Route::get('/', [Backend\AffiliateController::class, 'index']);
    Route::post('/store', [Backend\AffiliateController::class, 'store']);
    Route::delete('/{id}/delete', [Backend\AffiliateController::class, 'destroy']);
});

Route::group(['prefix' => '/availability'], function () {
    Route::get('/', [Backend\AvailabilityController::class, 'index']);
    Route::post('/store', [Backend\AvailabilityController::class, 'store']);
    Route::delete('/{id}/delete', [Backend\AvailabilityController::class, 'destroy']);
});
