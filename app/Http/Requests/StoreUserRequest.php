<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:55',
            'email' => 'required|email|unique:users,email',
            'department' => 'required',
            'sid' => 'required|max:6|min:6',
            'session' => 'required|min:7',
            'password' => [
                'required',
                'confirmed',
                Password::min(4)
                ->letters()
            ]
        ];
    }
}
