<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\BeritaController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::get('/berita', [BeritaController::class, 'index']); // untuk ambil daftar berita
Route::post('/berita', [BeritaController::class, 'store']); // untuk menyimpan berita
Route::get('/berita/{slug}', [BeritaController::class, 'show']);
Route::delete('/berita/{slug}', [BeritaController::class, 'destroy']);
Route::get('/berita/{slug}', [BeritaController::class, 'show']);
Route::put('/berita/{slug}', [BeritaController::class, 'update']);
