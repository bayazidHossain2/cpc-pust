<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Models\User;
use App\Http\Controllers\Api\AuthController;
use Carbon\Carbon;

use App\Mail\varificationSuccessMail;

use App\Http\Resources\UserResource;
use App\Mail\simpleMail;
use App\Models\emails;
use App\Models\emailed_users;
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
    $user_id = DB::table('emailed_users')
            ->where('email_id','9')
            ->orderBy('id', 'desc')
            ->get();
    echo 'Delete success';
    echo $user_id;
    $users = array();
    foreach($user_id as $id){
        print_r($id);
        echo $id->user_id;
        $user = User::find($id->user_id);
        echo '<br />';
        echo $user;
        array_push($users, $user);
    }
    echo '<br />';echo '<br />';
    // print_r($users);
    echo gettype($user_id);
    echo gettype((object)$users);
    echo gettype($user_id[0]);
    // echo (object)$users;
});

Route::get('/vmail', function(){
    $mail = 'bayazid204@gmail.com';
    $v_code = '121223';
    MailController::email_varification($v_code,$mail);
    dd('Mail send successfully.');
});