<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

class FileService
{
    public function upload(
        string $directory,
        UploadedFile $file
    ) {
        $name = Str::uuid()->toString() . '.' . $file->extension();
        $file->storeAs($directory, $name);

        return ((object)['name' => $name, 'mime_type' => $file->getMimeType()]);
    }
}
