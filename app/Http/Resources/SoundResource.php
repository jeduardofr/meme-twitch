<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SoundResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'keyword'           => $this->keyword,
            'author'            => $this->author,
            'audioUrl'          => $this->audiourl,
            'audioMimeType'     => $this->audio_mime_type,
            'thumbnailUrl'      => $this->thumbnailurl,
            'thumbnailMimeType' => $this->thumbnail_mime_type,
            'createdAt'         => $this->created_at,
            'updatedAt'         => $this->updated_at,
        ];
    }
}
