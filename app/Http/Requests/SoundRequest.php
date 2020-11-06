<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SoundRequest extends FormRequest
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
        // Hay que cambiar lo de unique para cuando se necesite editar
        return [
            'keyword'   => 'required|max:20|min:4',
            'audio'     => 'required',
            'thumbnail' => 'required',
        ];
    }
}
