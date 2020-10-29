<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    public function store(CategoryRequest $request)
    {
        $image = $request->file('thumbnail');
        $thumbnail = Str::uuid()->toString() . '.' . $image->getClientOriginalExtension();
        $request->file('thumbnail')->storeAs('categories', $thumbnail);

        return Category::create([
            'name'                => $request->name,
            'thumbnail'           => $thumbnail,
            'thumbnail_mime_type' => $image->getMimeType()
        ]);
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
