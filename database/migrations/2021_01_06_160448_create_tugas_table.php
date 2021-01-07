<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTugasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tugas', function (Blueprint $table) {
            $table->id();
            $table->integer('account_id');
            $table->string('subject', 50)->unique();
            $table->string('abbrev', 150)->unique();
            $table->string('deadline_date');
            $table->string('deadline_time');
            $table->string('group', 50)->nullable();
            $table->string('file_attachments', 100)->nullable();
            $table->string('details', 150)->nullable();
            $table->string('contributor_id', 50)->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tugas');
    }
}
