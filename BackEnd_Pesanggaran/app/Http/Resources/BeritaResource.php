<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BeritaResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'author' => $this->author,
            'content' => $this->content,
            'image_url' => $this->image_url ? url('storage/' . $this->image_url) : null,
            'published_at' => $this->published_at,
            'created_at' => $this->created_at,
        ];
    }
}
