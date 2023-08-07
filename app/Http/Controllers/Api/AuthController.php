<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Auth;
use Illuminate\Support\Str;
use App\Http\Controllers\MailController;


class AuthController extends Controller
{
    
    public function signup(SignupRequest $request){
        
        $data = $request->validated();
        
        /** @var User $user */
        
        // $user = User::create([
        //     'name' => $data['name'],
        //     'email' => $data['email'],
        //     'department' => $data['department'],
        //     's_id' => $data['sid'],
        //     'session' => $data['session'],
        //     'password' => $data['password'],
        // ]);

        $v_code = rand(100000,999999);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'department' => $data['department'],
            's_id' => $data['sid'],
            'session' => $data['session'],
            'password' => bcrypt($data['password']),
            'v_code' => $v_code,
        ]);
        $token = $user->createToken('main')->plainTextToken;
        // $user = 'str';
        // $token = 'token';
        MailController::email_varification($v_code,$data['email']);
        
        return response([
            'user' => $user,
            'token' => $token,
        ]);
    }
    
    public function login(LoginRequest $request){
        
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Provided email or password is incorrect'
            ],422);
        }

         /** @var \App\Models\User $user */
         $user = Auth::user();
         $token = $user->createToken('main')->plainTextToken;
         

         if($user['v_code'] != null){
            return response([
                'message' => 'Your email is not varified. First farify your email.'
            ],422);
         }

         if($user['cpc_position'] == null){
            return response([
                'message' => 'Your are not approved by admin. Wait for admin approval.'
            ],422);
         }

        //  $user->update(['remember_token' => $token]);

         return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function varify(Request $request){
        $credentials = [
            'email' => $request['email'],
            'password' => $request['password'],
        ];
        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Provided email or password is incorrect'
            ],422);
        }

         /** @var \App\Models\User $user */
         $user = Auth::user();
         // $user = 'str';
         // $token = 'token';
         // MailController::email_varification($v_code,$data['email']);
         if($request['v_code'] === null){
            return response([
                'message' => 'Empty Varification Code.'
            ],422);
         }
         if($user['v_code'] === null){
            return response([
                'message' => 'This Email already Varified.'
            ],422);
         }
         
         if($user['v_code'] == $request['v_code']){
            $c_time = date('Y-m-d H:i:s');
            $user->update(['v_code' => null,'email_verified_at' => $c_time]);

            MailController::email_varification_success($user['email']);
            return response([
                'user' => 'user',
                'token' => 'token',
            ]);
         }else{
            return response([
                'message' => 'Invalid Varification Code.',
                'cd' => $request['v_code'],
            ],422);
         }
    }
    
    public function logout(Request $request){
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->update(['remember_token' => null]);

        return response('', 204);
    }
}
