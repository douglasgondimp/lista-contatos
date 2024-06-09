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
            'name'       => $this->faker->name,
            'email'      => $this->faker->unique()->safeEmail,
            'cpf'        => $this->faker->unique()->cpf(false),
            'birth_date' => $this->faker->date('Y-m-d', '-18 years'),
            'phone'      => $this->faker->phoneNumber
        ];
    }
}
