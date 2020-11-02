<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SoundResource;
use App\Models\Sound;
use App\Services\FileService;
use Illuminate\Http\Request;

class SoundController extends Controller
{
    protected $fileService;


    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;
    }

    public function index()
    {
        //Necesita paginacion  es un desmadre
        return SoundResource::collection(Sound::all());
    }

    // Donde se llama a la base de datos para mostrar
    public function store(Request $request)
    {
        $sound = Sound::create([
            'keyword'               => $request->keyword,
            'author'                => $request->author,
            'audio'                 => $request->audio,
            'audio_mime_type'       => $request->audio_mime_type,
            'thumbnail'             => $request->thumnail,
            'thumbnail_mime_type'   => $request->thumbnail_mime_type,
        ]);

        return new SoundResource($sound);
    }

    public function update(Request $request, Sound $sound)
    {
        if ($request->hasFile('thumbnail')) {
            $this->fileService->removeIfExists('public/sounds/'. $sound->thumbnail);
            $image = $this->fileService->upload('public/sounds/', $request->file('thumbnail'));
            $sound->thumbnail = $image->name;
            $sound->thumbnail_mime_type = $image->mime_type;
        }

        if ($request->has('url')) {
            $this->fileService->removeIfExists('public/sounds/'. $sound->thumbnail);
            $sound->thumbnail = $request->url;
        }

        $sound->name = $request->name ?? $sound->name;
        $sound->audio = $request->audio ?? $sound->audio;
        $sound->save();

        return (new SoundResource($sound))->response()->setStatusCode(200);
    }

    public function destroy($sound)
    {
        $this->fileService->removeIfExists('public/sounds/' . $sound->thumnail);
        $sound->delete();

        return response()-> json();
    }
}
