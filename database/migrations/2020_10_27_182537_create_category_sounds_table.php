<?php

use App\Models\Sound;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategorySoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_sounds', function (Blueprint $table) {
            $table->unsignedBigInteger("sound_id");
            $table->unsignedBigInteger("category_id");
            $table->timestamps();
            $table->primary(["sound_id", "category_id"]);
            $table->foreign("sound_id")->references("id")->on("sounds");
            $table->foreign("category_id")->references("id")->on("categories");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_sounds');
    }
}
