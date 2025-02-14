<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Services\FileService;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    protected $fileService;

    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;

        $this->middleware('auth:sanctum')->except('index');
    }

    public function index()
    {
        return CategoryResource::collection(Category::all());
    }

    public function store(CategoryRequest $request)
    {
        if ($request->hasFile('thumbnail')) {
            $image = $this->fileService->upload('public/images', $request->file('thumbnail'));
        }

        $category = Category::create([
            'name'                => $request->name,
            'thumbnail'           => $request->hasFile('thumbnail') ? $image->name : $request->thumbnail,
            'thumbnail_mime_type' => $request->hasFile('thumbnail') ? $image->mime_type : null,
        ]);

        return new CategoryResource($category);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        if (!$request->user()->can('update', $category)) {
            // @@@ Centralize this in a class maybe
            return response()->json([ 'error' => true, 'message' => 'No eres el dueño de este recurso, no puedes actualizarlo.' ], 403);
        }

        if ($request->hasFile('thumbnail')) {
            $this->fileService->removeIfExists('public/images/'. $category->thumbnail);
            $image = $this->fileService->upload('public/images', $request->file('thumbnail'));
            $category->thumbnail = $image->name;
            $category->thumbnail_mime_type = $image->mime_type;
        } elseif ($request->has('thumbnail')) {
            $this->fileService->removeIfExists('public/images/'. $category->thumbnail);
            $category->thumbnail = $request->thumbnail;
        }

        $category->name = $request->name ?? $category->name;
        $category->save();


        return (new CategoryResource($category))
            ->response()
            ->setStatusCode(200);
    }

    public function destroy(Request $request, Category $category)
    {
        if (!$request->user()->can('delete', $category)) {
            return response()->json([ 'error' => true, 'message' => 'No eres el dueño de este recurso, no puedes eliminarlo.' ], 403);
        }

        $this->fileService->removeIfExists('public/images/' . $category->thumbnail);
        $category->delete();

        return response()->json();
    }
}
