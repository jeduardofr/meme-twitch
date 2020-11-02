<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sound extends Model
{
    use HasFactory;

    protected $fillable = ['keyword', 'author', 'audio', 'audio_mime_type', 'is_url', 'thumbnail', 'thumbnail_mime_type'];

    public function getThumbnailUrlAttribute()
    {
        if ($this->is_url) {
            return $this->thumbnail;
        }

        return asset('storage/images/' . $this->thumbnail);
    }

    public function getAudioUrlAttribute()
    {
        return asset('storage/sounds/' . $this->audio);
    }

    public function setThumbnailAttribute($value)
    {
        $this->attributes['thumbnail'] = $value;

        $this->attributes['is_url'] = filter_var($value, FILTER_VALIDATE_URL) ? true : false;
    }
}
