<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('blog_title');
            $table->TEXT('blog_content');
            $table->string('catagory_id');
            $table->string('down_vote');
            $table->string('up_vote');
            $table->string('writter_id');
            $table->string('is_varified');
            $table->timestamps();
            $table->foreign('catagory_id')->references('id')->on('blog_catagories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}
