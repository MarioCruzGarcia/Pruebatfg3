<?php

namespace App\Http\Controllers;

use App\Models\Categorias_evento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriasEventoController extends Controller
{
    public function categorias_evento(Request $request){
        $categorias_evento = Categorias_evento::all();
        return response()->json($categorias_evento);
    }
    public function getCategoriasEvento(Request $request, $id)
    {
        $categoria_evento = Categorias_evento::findOrFail($id);
        return response()->json($categoria_evento);
    }

    public function addCategoriasEvento(Request $request)
    {
        // Validar los datos de entrada
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        // Crear un nuevo usuario
        $categoriaEvento = new Categorias_evento();
        $categoriaEvento->nombre = $request->input('nombre');
        $categoriaEvento->save();

        return response()->json($categoriaEvento, 201);
    }

    public function updateCategoriasEvento(Request $request, $id)
{
    // Buscar el usuario por su ID
    $categorias_evento = categorias_evento::findOrFail($id);

    // Validar los datos de entrada
    $validator = Validator::make($request->all(), [
        'nombre' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Actualizar los campos del usuario
    $categorias_evento->nombre = $request->input('nombre');
    $categorias_evento->save();

    return response()->json($categorias_evento, 200);
}


    // Eliminar un usuario existente
    public function deleteCategoriasEvento(Request $request, $id)
    {
        // Buscar el usuario por su ID
        $categorias_evento = categorias_evento::findOrFail($id);

        // Eliminar el usuario
        $categorias_evento->delete();

        return response()->json(null, 204);
    }

}
