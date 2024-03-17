<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;

class TestController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        dd($request);
        $test = Test::create($request->all());
        return response()->json([
            'message' => 'Test created successfully',
            'data' => $test
        ], 201, [], JSON_UNESCAPED_UNICODE);
    }
}
