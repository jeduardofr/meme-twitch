<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignInRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SignInController extends Controller
{
    public function store(SignInRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([ 'errors' => [ 'password' => [ 'The credentials are invalid.' ] ] ], 401);
        }

        $user->tokens()->delete();
        $token = $user->createToken('spa');

        return response()->json([ 'token' => $token->plainTextToken ], 200);
    }
}
