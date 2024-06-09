<?php

namespace Database\Factories;

use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'person_id' => Person::factory(),
            'name'      => fake('pt_BR')->name(),
            'email'     => fake('pt_BR')->safeEmail(),
            'phone'     => fake('pt_BR')->phoneNumberCleared(),
            'whatsapp'  => fake('pt_BR')->phoneNumberCleared(),
        ];
    }
}
