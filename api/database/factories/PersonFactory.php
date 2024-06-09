<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Person>
 */
class PersonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'       => fake('pt_BR')->name(),
            'email'      => fake('pt_BR')->unique()->safeEmail(),
            'cpf'        => fake('pt_BR')->unique()->numerify('###########'),
            'birth_date' => fake('pt_BR')->date('Y-m-d', '-18 years'),
            'phone'      => fake('pt_BR')->phoneNumberCleared()
        ];
    }
}
