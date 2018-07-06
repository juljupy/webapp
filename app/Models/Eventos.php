<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    protected $table = 'eventos';

    protected $fillable = [
        'titulo', 'fecha_inicio', 'fecha_fin', 'descripcion'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}
