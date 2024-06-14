<?php

namespace App\Http\Controllers;

use App\Http\Requests\{StorePersonRequest, UpdatePersonRequest};
use App\Models\Person;
use App\Services\PersonService;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __construct(
        protected PersonService $service
    ) { }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Person::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePersonRequest $request)
    {
        return $this->service->create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(Person $person)
    {
        return Person::with('contacts')->find($person->id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePersonRequest $request, Person $person)
    {
        return $this->service->update($request->validated(), $person);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Person $person)
    {
        return $this->service->destroy($person);
    }

    public function getContacts(Request $request, Person $person)
    {   
        return $person->contacts()->get();
    }
}
