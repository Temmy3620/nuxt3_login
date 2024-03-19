<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/check', function(Request $request){
    return response()->json([
        'status' => true,
        'message' => "Product Created successfully!",
        'product' => "sss"
    ], 200);

});

Route::apiResource('/tests', 'App\Http\Controllers\TestController');