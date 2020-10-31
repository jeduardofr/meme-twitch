<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Services\FileService;
use Illuminate\Support\Str;

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
        $data = [ 'name' => $request->name ];
        if ($request->hasFile('thumbnail')) {
            $image = $request->file('thumbnail');
            $thumbnail = Str::uuid()->toString() . '.' . $image->getClientOriginalExtension();
            $request->file('thumbnail')->storeAs('categories', $thumbnail);
            $data['thumbnail'] = $thumbnail;
            $data['thumbnail_mime_type'] = $image->getMimeType();
        }

        $category->update($data);

        return $category;
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json();
    }
}
