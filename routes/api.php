<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\SignInController;
use App\Http\Controllers\Api\SignUpController;
use App\Http\Controllers\Api\SoundController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::group(['prefix'=>'sounds'], function () {
//     Route::get('/', [SoundController::class, "index"]);
//     Route::post('/', [SoundController::class, "store"]);
//     Route::put('/{sound}', [SoundController::class, "update"]);
//     Route::delete('/{sound}', [SoundController::class, "destroy"]);
// });

Route::post('auth/sign-up', [SignUpController::class, 'store']);
Route::post('auth/sign-in', [SignInController::class, 'store']);
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/profile/me', [ProfileController::class, 'index']);
});

Route::resource('sounds', SoundController::class)->except(['edit', 'show', 'create']);
Route::resource('categories', CategoryController::class)->except(['show', 'create', 'edit']);
