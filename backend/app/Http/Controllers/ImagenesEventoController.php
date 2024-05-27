<?php

namespace App\Http\Controllers;

use App\Models\Imagenes_evento;
use Illuminate\Http\Request;

class ImagenesEventoController extends Controller
{
    public function imagenes_evento(Request $request){
        $imagenes_evento = Imagenes_evento::all();
        return response()->json($imagenes_evento);
    }
}
