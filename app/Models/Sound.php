<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sound extends Model
{
    use HasFactory;

    protected $fillable = ['keyword', 'author', 'audio', 'audio_mime_type', 'id_url', 'thumbnail', 'thumbnail_mime_type'];
    protected $with = ['appaerances'];

    public function getUrlAttribute()
    {
        if ($this->is_url) {
            return $this->thumbnail;
        }

        return asset('storage/sounds/' . $this->thumbnail);
    }

    public function setThumbnailAttribute($value)
    {
        $this->attributes['thumbnail'] = $value;

        $this->attributes['is_url'] = filter_var($value, FILTER_VALIDATE_URL) ? true : false;
    }
}
