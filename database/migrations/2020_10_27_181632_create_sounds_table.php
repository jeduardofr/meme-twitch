<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sounds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("keyword", 90)->unique();
            $table->string("author", 45);
            $table->string("audio", 45);
            $table->string("audio_mime_type", 30);
            $table->boolean("is_url");
            $table->longText("thumbnail");
            $table->string("thumbnail_mime_type", 30)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sounds');
    }
}
