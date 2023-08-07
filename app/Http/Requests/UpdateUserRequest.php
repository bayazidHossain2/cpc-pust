<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
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
            'email' => 'required|email|unique:users,email,'.$this->id,
            'department' => 'required',
            'sid' => 'required|max:6|min:6',
            'session' => 'required|min:7',
            'password' => [
                'confirmed',
                Password::min(4)
                ->letters()
            ]
        ];
    }
}
