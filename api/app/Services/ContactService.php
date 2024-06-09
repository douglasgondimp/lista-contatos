<?php

namespace App\Services;

use App\Models\Contact;

class ContactService
{
    protected $model = Contact::class;

    public function create(array $request)
    {
        return $this->model::create($request);
    }

    public function update(array $request, Contact $contact)
    {
        return $contact->update($request);
    }

    public function delete(Contact $contact)
    {
        return $contact->delete();
    }
}
