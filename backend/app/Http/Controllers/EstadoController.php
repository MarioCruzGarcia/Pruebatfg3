<?php

namespace App\Http\Controllers;

use App\Models\Estado;
use Illuminate\Http\Request;

class EstadoController extends Controller
{
    public function getEstado(Request $request, $id)
    {
        $estado = Estado::findOrFail($id);
        return response()->json($estado);
    }
}
