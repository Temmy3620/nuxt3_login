<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        
        
        $state = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            //$token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'access_token' => $user,
                'token_type' => 'Bearer',
                'refresh_token' => 'dummy_refresh_token' // 本番環境では適切なリフレッシュトークンを生成してください
            ]);
        }
        

        return response()->json([
            'status' => $state
        ], 401); // 401 Unauthorized status code
        
    }

    public function registre(Request $request){

        $state = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::create($request->all());
        
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            //$token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'access_token' => $user,
                'token_type' => 'Bearer',
                'refresh_token' => 'dummy_refresh_token' // 本番環境では適切なリフレッシュトークンを生成してください
            ]);
        }

        return response()->json([
            'status' => $state
        ], 401); // 401 Unauthorized status code


    }
        

}
