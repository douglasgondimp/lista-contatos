<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'contacts';
    protected $fillable = [
        'person_id',
        'name',
        'email',
        'phone',
        'whatsapp'
    ];

    public function whatsapp(): Attribute
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

    public function person(): BelongsTo
    {
        return $this->belongsTo(Person::class);
    }
}
