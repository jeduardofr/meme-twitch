<?php

use App\Http\Controllers\Api\CategoryController;
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

Route::group(['prefix'=>'sounds'], function () {
    Route::get('/', [SoundController::class, "index"]);
    Route::put('/{sound}', [SoundController::class, "update"]);
    Route::delete('/{sound}', [SoundController::class, "destroy"]);
    Route::post('/', [SoundController::class, "store"]);
});

Route::resource('categories', CategoryController::class)->except(['show', 'create', 'edit']);
