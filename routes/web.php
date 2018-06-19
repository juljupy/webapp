<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('home');

// Route::get('/hola', function () {
//     echo $_GET['nombre'] . ' ' . $_GET['apellido'];
// });

// Route::post('/holatu', function () {
//     echo $_POST['nombre'] . ' ' . $_POST['apellido'];
// });

Route::get('/hola', 'HolaController@hola');

Route::post('/holatu', 'HolaController@holatu');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
