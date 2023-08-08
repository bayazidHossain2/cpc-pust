<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Models\User;
use App\Http\Controllers\Api\AuthController;
use Carbon\Carbon;

use App\Mail\varificationSuccessMail;

use App\Http\Resources\UserResource;
use App\Mail\simpleMail;
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
    MailController::signup_approve_mail('bh.190140@s.pust.ac.bd');
});

Route::get('/vmail', function(){
    $mail = 'bayazid204@gmail.com';
    $v_code = '121223';
    MailController::email_varification($v_code,$mail);
    dd('Mail send successfully.');
});