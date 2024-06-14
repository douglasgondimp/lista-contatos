<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Person extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'people';
    protected $fillable = [
        'name', 
        'email', 
        'cpf', 
        'birth_date', 
        'phone'
    ];

    public function cpf(): Attribute
    {
        return new Attribute(
            set: fn($value) => trim( preg_replace('/[^0-9]/', '', $value) )
        );
    }

    public function phone(): Attribute
    {
        return new Attribute(
            set: fn($value) => trim( preg_replace('/[^0-9]/', '', $value) )
        );
    }

    public function contacts(): HasMany
    {
        return $this->hasMany(Contact::class);
    }
}
