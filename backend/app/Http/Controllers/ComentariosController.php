<?php

namespace App\Http\Controllers;

use App\Models\Comentarios;
use Illuminate\Http\Request;

class ComentariosController extends Controller
{
    public function comentarios(Request $request){
        $comentarios = Comentarios::all();
        return response()->json($comentarios);
    }
}
