<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Auth;



class AuthController extends Controller
{
    
    public function signup(SignupRequest $request){
        
        $data = $request->validated();
        
        /** @var User $user */
        
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'department' => $data['department'],
            'sid' => $data['sid'],
            'session' => $data['session'],
            'password' => $data['password'],
        ]);
        $token = $user->createToken('main')->plainTextToken;
        // $user = User::create([
        //         'name' => 'demo',
        //         'email' => 'demo@demo.d',
        //         'department' => 'dept',
        //         'sid' => '123456',
        //         'session' => '1234567',
        //         'password' => 'passw',
        //     ]);
        // $user = 'str';
        // $token = 'token';
        
        return response([
            'user' => $user,
            'token' => $token
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
