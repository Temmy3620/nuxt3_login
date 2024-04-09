<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        return response()->json([
            'message' => 'Test created successfully',
            'data' => $user,
        ], 201, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = User::create($request->all());
        return response()->json([
            'message' => 'User created successfully',
            'data' => $user,
        ], 200, [], JSON_UNESCAPED_UNICODE);
    }

        /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::where('id', $id)->delete();
        if ($user) {
            return response()->json([
                'message' => 'User deleted successfully',
                'id' => $id,
            ], 200);
        }
        return response()->json([
            'message' => 'User not found',
        ], 404);
    }
}
