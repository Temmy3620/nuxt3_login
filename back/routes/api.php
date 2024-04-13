<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/check', function(Request $request){
    $apiKey = $request->header('Api-Key');

    $validApiKey = config('api.key');

    if ($apiKey !== $validApiKey) {
        return response()->json([
            'status' => false,
            'message' => 'Invalid API Key'
        ], 401); // 401 Unauthorized status code
    }


    return response()->json([
        'status' => true,
        'message' => "Product Created successfully!",
        'product' => "sss"
    ], 200);

});

Route::apiResource('/tests', 'App\Http\Controllers\TestController');
Route::apiResource('/users', 'App\Http\Controllers\UserController');