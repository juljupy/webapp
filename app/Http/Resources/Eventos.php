<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class Eventos extends JsonResource
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
            'titulo' => $this->titulo,
            //'fecha_inicio' => Carbon::createFromTimeString($this->fecha_inicio)->format('d/m/Y h:m:s'),
            'fecha_inicio' => Carbon::createFromTimeString($this->fecha_inicio)->format('Y/m/d'),
            //'fecha_fin' => Carbon::createFromTimeString($this->fecha_fin)->format('d/m/Y h:m:s'),
            'fecha_fin' => Carbon::createFromTimeString($this->fecha_fin)->format('Y/m/d'),
            'descripcion' => $this->descripcion
        ];
    }
}
