<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    protected $fillable = [
    'title',
    'slug',
    'author',
    'content',
    'image_url',
    'published_at',
];

}
