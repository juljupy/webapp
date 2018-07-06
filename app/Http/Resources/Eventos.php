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
        $fechaInicio = Carbon::createFromTimeString($this->fecha_inicio);
        $fechaFin = Carbon::createFromTimeString($this->fecha_fin);

        return [
            'titulo' => $this->titulo,
            'fecha_inicio' => $fechaInicio->format('Y-m-d'). 'T' . $fechaInicio->format('h:m:s'),
            'fecha_inicio_vc' => $fechaInicio->format('Y/m/d'),
            'fecha_fin' => $fechaFin->format('Y-m-d'). 'T' . $fechaFin->format('h:m:s'),
            'fecha_fin_vc' => $fechaFin->format('Y/m/d'),
            'descripcion' => $this->descripcion
        ];
    }
}
