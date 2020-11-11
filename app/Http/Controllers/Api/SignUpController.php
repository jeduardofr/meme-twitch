<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use App\Models\User;

class SignUpController extends Controller
{
    public function store(SignUpRequest $request)
    {
        User::create($request->only('name', 'password', 'email'));

        return response()->json(['success' => true], 201);
    }
}
