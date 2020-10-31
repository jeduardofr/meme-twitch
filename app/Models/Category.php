<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Category
 *
 * @property-read int $id
 * @property string $name
 * @property string $thumbnail
 * @property string $thumbnail_mime_type
 * @property bool   $is_url
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'thumbnail', 'thumbnail_mime_type', 'is_url'];

    public function getUrlAttribute()
    {
        if ($this->is_url) {
            return $this->thumbnail;
        }

        return asset('storage/categories/' . $this->thumbnail);
    }
}
