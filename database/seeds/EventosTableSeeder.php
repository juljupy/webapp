<?php

use Illuminate\Database\Seeder;
use App\Models\Eventos;

class EventosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Eventos::create([
            'titulo' => 'Evento 2',
            'fecha_inicio' => date('Y-m-d h:i:s'),
            'fecha_fin' => date('Y-m-d h:i:s'),
            'descripcion' => 'Evento de ejemplo 2'
        ]);
    }
}
