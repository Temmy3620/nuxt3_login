<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckApiKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $apiKey = $request->header('Api-Key');
        $validApiKey = config('api.key');  // api.php 設定ファイルからAPIキーを取得

        if ($apiKey !== $validApiKey) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid API Key'
            ], 401);  // Unauthorized status code
        }

        return $next($request);
    }
}
