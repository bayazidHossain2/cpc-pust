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
            'password' => $data['password'],
            'v_code' => $v_code,
        ]);
        $token = Str::random(16);
        // $user = 'str';
        // $token = 'token';
        // MailController::email_varification($v_code,$data['email']);
        
        return response([
            'user' => $user,
            'token' => $token,
            'v_code' => $v_code
        ]);
    }
    
    public function login(LoginRequest $request){
        
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Provided email or password is incorrect'
            ]);
        }

         /** @var \App\Models\User $user */
         $user = Auth::user();
         $token = $user->createToken('main')->plainTextToken;

         return response([
            'user' => $user,
            'token' => $token
        ]);
    }
    
    public function logout(Request $request){
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }
}
