<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
            'status' => $state,
            'user' => Auth::attempt($request->only('email', 'password')),
            'message' => $request->all()
        ], 401); // 401 Unauthorized status code
        
    }
        

}
