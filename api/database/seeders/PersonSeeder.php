<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Person;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Person::factory()
            ->count(10)
            ->has(Contact::factory()->count(30))
            ->create();
    }
}
