<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Berita;
use Illuminate\Support\Str;

class BeritaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Berita::create([
            'title' => 'Pembangunan Jalan Baru di Dusun Sumberjati',
            'slug' => Str::slug('Pembangunan Jalan Baru di Dusun Sumberjati'),
            'author' => 'Kades Sawocangkring',
            'content' => '<p>Pembangunan jalan baru dimulai pada tanggal...</p>',
            'image_url' => 'https://via.placeholder.com/800x400',
            'published_at' => now(),
        ]);
    }
}
