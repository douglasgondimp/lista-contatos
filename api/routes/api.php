<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PersonController;
use Illuminate\Support\Facades\Route;

Route::get('people/{person}/contacts', [PersonController::class, 'getContacts']);
Route::apiResource('people', PersonController::class);
Route::apiResource('contacts', ContactController::class)->except('index');