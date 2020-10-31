<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Services\FileService;

class CategoryController extends Controller
{
    protected $fileService;

    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;
    }

    public function index()
    {
        return CategoryResource::collection(Category::all());
    }

    public function store(CategoryRequest $request)
    {
        if ($request->hasFile('thumbnail')) {
            $image = $this->fileService->upload('public/categories', $request->file('thumbnail'));
        }

        $category = Category::create([
            'name'                => $request->name,
            'thumbnail'           => $request->url ?? $image->name,
            'thumbnail_mime_type' => $request->has('url') ? null : $image->mime_type,
            'is_url'              => $request->has('url')
        ]);

        return new CategoryResource($category);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        if ($request->hasFile('thumbnail')) {
            $this->fileService->removeIfExists('public/categories/'. $category->thumbnail);
            $image = $this->fileService->upload('public/categories', $request->file('thumbnail'));
        }

        $thumbnail = $request->has('url')
            ? $request->url
            : ($request->hasFile('thumbnail')
                ? $image->name
                : $category->thumbnail);

        $is_url = $request->has('url')
            ? true
            : ($request->hasFile('thumbnail')
                ? false
                : $category->is_url);

        $category->update([
            'name'                => $request->name ?? $category->name,
            'thumbnail'           => $thumbnail,
            'thumbnail_mime_type' => $request->hasFile('thumbnail') ? $image->mime_type : $request->mime_type,
            'is_url'              => $is_url
        ]);

        return (new CategoryResource($category))
            ->response()
            ->setStatusCode(200);
    }

    public function destroy(Category $category)
    {
        $this->fileService->removeIfExists('public/categories/' . $category->thumbnail);
        $category->delete();

        return response()->json();
    }
}
