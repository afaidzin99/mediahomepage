<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('beritas', function (Blueprint $table) {
            $table->dropColumn(['editor', 'original_source', 'category']);
        });
    }

    public function down(): void
    {
        Schema::table('beritas', function (Blueprint $table) {
            $table->string('editor')->nullable();
            $table->string('original_source')->nullable();
            $table->string('category')->nullable();
        });
    }
};

