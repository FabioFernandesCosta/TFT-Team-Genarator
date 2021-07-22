<?php

use Illuminate\Support\Facades\Route;

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
function getSin(){
    return [DB::table('origins') ->select('*') ->get(), DB::table('classes') ->select('*') ->get()];

}

Route::get('/', function () {
    return view('welcome');
});

Route::get('/genSelect', function () {
    return view('genSelector');
});

Route::get('/fullRandom', function () {
    return view('fullRandom', ['sinergias' => getSin()]);
});

Route::get('/OriOrCla', function () {
    return view('OorC');
});

Route::get('/genOrigin', function () {
    return view('genWOrigin', ['sinergias' => getSin()]);
});

Route::get('/genClass', function () {
    return view('genWClass', ['sinergias' => getSin()]);
});

Route::get('/randomPicker', function () {
    return view('randomPicker', ['sinergias' => getSin()]);
});
