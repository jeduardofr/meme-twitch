<?php

use App\Http\Controllers\Api\SoundController;
use App\Http\Controllers\Api\CategoryController;
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
    Route::get('/{sound}', [SoundController::class, "show"]);
    Route::post('/', [SoundController::class, "store"]);
});

Route::resource('categories', CategoryController::class)->except(['show', 'create', 'edit']);
