<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Models\User;

use App\Http\Controllers\Api\AuthController;

// use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/ff', function () {
/** @var User $user */
    $user = User::create([
        'name' => 'name',
        'email' => '$data',
        'department' =>' $data',
        's_id' => '1234',
        'session' => '$data[]',
        'password' => '$data[]',
        'v_code' => '123412',
    ]);

    echo $user;
});

Route::get('/vmail', function(){
    MailController::email_varification('123123','bayazid204@gmail.com');
});