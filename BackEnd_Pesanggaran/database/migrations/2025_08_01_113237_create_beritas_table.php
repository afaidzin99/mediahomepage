<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('beritas', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('slug')->unique();
        $table->string('author')->nullable();
        $table->string('editor')->nullable();
        $table->string('category')->nullable();
        $table->text('content'); // HTML atau Markdown
        $table->string('image_url')->nullable();
        $table->string('original_source')->nullable();
        $table->timestamp('published_at')->nullable();
        $table->timestamps(); // created_at dan updated_at
    });
}



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('beritas');
    }
};
