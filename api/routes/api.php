<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PersonController;
use Illuminate\Support\Facades\Route;

Route::apiResource('people', PersonController::class);
Route::apiResource('contact', ContactController::class)->except('index');