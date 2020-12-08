<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\CategorySound;
use App\Http\Resources\SoundResource;

class CategorySoundController extends Controller
{
    public function index(Category $category)
    {
        return SoundResource::collection($category->sounds);
    }
}