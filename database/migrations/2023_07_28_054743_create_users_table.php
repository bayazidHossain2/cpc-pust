<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
            $table->string('department');
            $table->integer('s_id');
            $table->string('session');
            $table->integer('v_code')->nullable();
            $table->string('profile_image')->nullable();
            $table->string('profession')->nullable();
            $table->string('cpc_position')->nullable();
            $table->string('passing_year')->nullable();
            $table->unsignedBigInteger('current_job_id')->nullable();
            $table->string('phone')->nullable();
            $table->string('linked_in')->nullable();
            $table->string('git')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
