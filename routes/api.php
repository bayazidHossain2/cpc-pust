<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

use App\Models\User;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class,'logout']);

    Route::get('/requested-user', function () {
    
        $users = DB::table('users')
            ->where('cpc_position','=',null)
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
    });

    Route::get('/team-user', function () {
    
        $users = DB::table('users')
            ->where('cpc_position','=','Team')
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
    });
    Route::get('/advisor-user', function () {
    
        $users = DB::table('users')
            ->where('cpc_position','=','Advisor')
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
    });

    Route::get('/member-user', function () {
    
        $users = DB::table('users')
            ->where('cpc_position','!=','Advisor')
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
        
        // ->where('s_id','NOT LIKE','19____')
    });
    Route::post('/member-user-query', function (Request $request) {
        $yy = $request['year'];
        $dd = $request['dept'];
        $ss = $request['serial'];
        $qq = '';
        if($yy == null){
            $qq = '__';
        }else{
            $qq = $yy;
        }
        if($dd == null){
            $qq = $qq.'__';
        }else{
            $qq = $qq.$dd;
        }
        if($ss == null){
            $qq = $qq.'__';
        }else{
            $qq = $qq.$ss;
        }

        $users = DB::table('users')
            ->where('cpc_position','!=','Advisor')
            ->where('s_id','LIKE',$qq)
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
        
    });
    // User Query common
    Route::post('/user-query', function (Request $request) {
        $uu = $request['u_type'];
        $yy = $request['year'];
        $dd = $request['dept'];
        $ss = $request['serial'];
        $qq = '';
        if($yy == null){
            $qq = '__';
        }else{
            $qq = $yy;
        }
        if($dd == null){
            $qq = $qq.'__';
        }else{
            $qq = $qq.$dd;
        }
        if($ss == null){
            $qq = $qq.'__';
        }else{
            $qq = $qq.$ss;
        }

        $users = DB::table('users')
            ->where('cpc_position','LIKE',$uu)
            ->where('s_id','LIKE',$qq)
            ->orderBy('id', 'desc')
            ->get();
    
        return $users;
        
    });

    Route::post('/approve-user', function(Request $request){
        $user = User::find($request['id']);
        $user->fill(['cpc_position'=>$request['position']])->save();
        MailController::signup_approve_mail($request['email']);
    });
    Route::post('/remove-from-team', function(Request $request){
        $user = User::find($request['id']);
        $user->fill(['cpc_position'=>$request['position']])->save();
        // MailController::signup_approve_mail($request['email']);
    });
});

Route::apiResource('/users', UserController::class);


Route::post('/signup', [AuthController::class,'signup']);

Route::get('/dept-name', function () {
    
    $users = DB::table('dept_name')
        ->orderBy('id', 'asc')
        ->get();

    return $users;
});
Route::post('/login', [AuthController::class,'login']);

Route::post('/varify', [AuthController::class, 'varify']);

Route::post('/send-mail',[MailController::class,'email_varification']);
Route::post('/common-mail',[MailController::class,'common_mail']);
Route::post('/send-mail-success',[MailController::class,'email_varification_success']);
Route::post('/send-mail-rejected',[MailController::class,'signup_rejected_mail']);