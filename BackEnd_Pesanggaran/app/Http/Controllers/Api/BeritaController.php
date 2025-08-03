<?php

namespace App\Http\Controllers\Api;

use App\Models\Berita;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Resources\BeritaResource;
use Illuminate\Http\Request;

class BeritaController extends Controller
{
    public function index()
    {
        $berita = Berita::latest()->get();
        return BeritaResource::collection($berita);
    }



    public function show($slug)
    {
        $berita = Berita::where('slug', $slug)->first();

        if (!$berita) {
            return response()->json(['message' => 'Berita tidak ditemukan'], 404);
        }

        return new BeritaResource($berita);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'slug' => 'required|unique:beritas',
            'content' => 'required|string',
            'author' => 'nullable|string',
            'published_at' => 'nullable|date',
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);


        if ($request->hasFile('image')) {
    $path = $request->file('image')->store('berita', 'public'); // simpan file ke storage/app/public/berita
    $validated['image_url'] = $path; // hanya simpan 'berita/image.jpg'
    }



        $berita = Berita::create($validated);

        return response()->json(['data' => $berita], 201);
    }



    public function update(Request $request, $slug)
    {
        $berita = Berita::where('slug', $slug)->first();

        if (!$berita) {
            return response()->json(['message' => 'Berita tidak ditemukan'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'published_at' => 'nullable|date',
        ]);

        $berita->update($validated);

        return response()->json(['message' => 'Berita diperbarui']);
    }

    public function destroy($slug)
    {
        $berita = Berita::where('slug', $slug)->first();

        if (!$berita) {
            return response()->json([
                'message' => 'Berita tidak ditemukan.',
            ], 404);
        }

        $berita->delete();

        return response()->json([
            'message' => 'Berita berhasil dihapus.',
        ]);
    }
}
