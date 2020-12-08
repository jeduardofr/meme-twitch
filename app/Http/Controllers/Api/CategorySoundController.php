<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\CategorySound;
use App\Http\Resources\SoundResource;

class CategorySoundController extends Controller
{
    public function index(Category $category)
    {
        $category->load("sounds");
        return new CategoryResource($category);
    }

    public function update()
    {

    }
}