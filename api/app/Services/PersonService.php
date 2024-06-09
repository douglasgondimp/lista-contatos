<?php

namespace App\Services;

use App\Models\Person;
use PhpParser\Node\Expr\FuncCall;

class PersonService
{
    protected $model = Person::class;

    public function index()
    {
        return $this->model::all();
    }

    public function create(array $request)
    {
        return $this->model::create($request);
    }

    public function update(array $request, Person $person)
    {
        $person->update($request);

        return $person;
    }

    public function destroy(Person $person)
    {
        $person->delete();

        return $person;
    }
}
