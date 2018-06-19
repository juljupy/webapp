<?php

namespace App\Http\Controllers;

class HolaController extends Controller
{
    //
    public function hola()
    {
        echo 'Datos recibidos y procesados por el controlador: ' . $_GET['nombre'] . ' ' . $_GET['apellido'];
    }

    public function holatu()
    {
        echo 'Datos recibidos y procesados por el controlador: ' . $_POST['nombre'] . ' ' . $_POST['apellido'];
    }
}
