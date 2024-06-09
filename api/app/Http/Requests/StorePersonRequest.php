<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePersonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'       => 'required|string|max:150',
            'cpf'        => 'required|cpf|unique:App\Models\Person,cpf',
            'email'      => 'required|email|max:150|unique:App\Models\Person,email',
            'phone'      => 'nullable|celular_com_ddd',
            'birth_date' => 'nullable|date'
        ];
    }
}
