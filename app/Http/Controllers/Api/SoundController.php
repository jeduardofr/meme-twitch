<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SoundRequest;
use App\Http\Resources\SoundResource;
use App\Models\Sound;
use App\Services\FileService;

class SoundController extends Controller
{
    protected $fileService;


    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;
    }

    // Read
    public function index()
    {
        //Necesita paginacion  es un desmadre
        return SoundResource::collection(Sound::all());
    }

    // Create
    public function store(SoundRequest $request)
    {
        if ($request->hasFile('thumbnail')) {
            $image = $this->fileService->upload('public/images', $request->file('thumbnail'));
        }
        $audio = $this->fileService->upload('public/sounds', $request->file('audio'));


        $sound = Sound::create([
            'keyword'               => $request->keyword,
            'author'                => $request->author,
            'audio'                 => $audio->name,
            'audio_mime_type'       => $audio->mime_type,
            'thumbnail'             => $request->hasFile('thumbnail') ? $image->name: $request->thumbnail,
            'thumbnail_mime_type'   => $request->hasFile('thumbnail') ? $image->mime_type : null,
        ]);

        $sound->categories()->sync($request->categories);


        return new SoundResource($sound);
    }

    // update
    public function update(SoundRequest $request, Sound $sound)
    {
        if ($request->hasFile('thumbnail')) {
            $this->fileService->removeIfExists('public/images/'. $sound->thumbnail);
            $image = $this->fileService->upload('public/images/', $request->file('thumbnail'));
            $sound->thumbnail = $image->name;
            $sound->thumbnail_mime_type = $image->mime_type;
        } else {
            $this->fileService->removeIfExists('public/images/'. $sound->thumbnail);
            $sound->thumbnail = $request->thumbnail;
        }

        $this->fileService->removeIfExists('public/sounds/' . $sound->audio);
        $audio = $this->fileService->upload('public/sounds', $request->file('audio'));
        $sound->audio = $audio->name;
        $sound->audio_mime_type = $audio->mime_type;

        $sound->keyword = $request->keyword;

        $sound->save();

        $sound->categories()->sync($request->categories);

        return (new SoundResource($sound))
            ->response()
            ->setStatusCode(200);
    }

    // Destroy
    public function destroy(Sound $sound)
    {
        $sound->categories()->detach();

        $this->fileService->removeIfExists('public/images/' . $sound->thumbnail);
        $this->fileService->removeIfExists('public/sounds/' . $sound->audio);
        $sound->delete();

        return response()-> json();
    }
}
