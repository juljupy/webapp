<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Cliente extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'nombres' => $this->nombre . ' ' . $this->apellido,
            'email' => $this->email,
            'telefono' => $this->telefono
        ];
    }
}
