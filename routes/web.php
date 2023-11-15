<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/home', function () {
    return view('frontend.src.home.home');
});
Route::get('/about', function () {
    return view('frontend.src.about.about');
});
Route::get('/services', function () {
    return view('frontend.src.services.services');
});
Route::get('/book', function () {
    return view('frontend.src.book.book');
});
Route::get('/contact', function () {
    return view('frontend.src.contact.contact');
});
Route::get('/appointments', function () {
    return view('frontend.src.appointments.appointments');
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!api|tenancy|laravel-websockets|landlord-telescope-login).*$');

