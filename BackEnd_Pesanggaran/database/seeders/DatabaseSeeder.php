<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Jalankan semua seeder.
     */
    public function run(): void
    {
        // Tambahkan seeder lain jika perlu
        $this->call([
            BeritaSeeder::class,
        ]);
        $this->call([
            AdminSeeder::class,
        ]);
        

    }
}
