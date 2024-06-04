<?php

namespace App\Http\Controllers;

use App\Models\Estado;
use Illuminate\Http\Request;

class EstadoController extends Controller
{

    public function estado(Request $request){
        $estado = Estado::all();
        return response()->json($estado);
    }
    
    public function getEstado(Request $request, $id)
    {
        $estado = Estado::findOrFail($id);
        return response()->json($estado);
    }
}
