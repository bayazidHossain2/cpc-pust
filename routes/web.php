<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Models\User;
use App\Http\Controllers\Api\AuthController;


use App\Mail\varificationSuccessMail;
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


    $credentials = [
        'email' => 'bh.190140@s.pust.ac.bd',
        'password' => 'asdff'
    ];

        if(!Auth::attempt($credentials)){
            echo 'Provided email or password is incorrect';
        }

         /** @var \App\Models\User $user */
         $user = Auth::user();
        //  $token = $user->createToken('main')->plainTextToken;

         echo $user;

        

         echo $user;
        //  echo $token;
});

Route::get('/vmail', function(){
    $mail = 'bayazid204@gmail.com';
    $mailData = [
        'title' => 'Varification Mail from CPC, PUST',
    ];

    Mail::to($mail)->send(new varificationSuccessMail($mailData));
    dd('Mail send successfully.');
});