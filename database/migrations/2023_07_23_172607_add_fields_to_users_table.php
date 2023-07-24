<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('profile_image')->nullable();
            $table->string('profession')->nullable();
            $table->string('cpc_position')->nullable();
            $table->string('passing_year')->nullable();
            $table->unsignedBigInteger('current_job_id')->nullable();
            $table->foreign('current_job_id')->references('job_id')->on('job_history');
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
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('profile_image');
            $table->dropColumn('profession');
            $table->dropColumn('cpc_position');
            $table->dropColumn('passing_year');
            $table->dropColumn('current_job');
            $table->dropColumn('phone');
            $table->dropColumn('linked_in');
            $table->dropColumn('git');

        });
    }
}
