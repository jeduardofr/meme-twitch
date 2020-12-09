<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;

class CategorySoundController extends Controller
{
    public function index(Category $category)
    {
        $category->load("sounds");

        return new CategoryResource($category);
    }
}
