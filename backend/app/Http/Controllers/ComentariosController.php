<?php

namespace App\Http\Controllers;

use App\Models\Comentarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ComentariosController extends Controller
{
    public function comentarios(Request $request)
    {
        $comentarios = Comentarios::all();
        return response()->json($comentarios);
    }

    public function comentariosPorEvento(Request $request, $eventoId)
    {
        // Filtrar los comentarios por el ID del evento
        $comentarios = Comentarios::where('evento_id', $eventoId)->get();
        return response()->json($comentarios);
    }

    public function addComentario(Request $request)
    {
        // Validar los datos de entrada
        $validator = Validator::make($request->all(), [
            'evento_id' => 'required|integer',
            'user_id' => 'required|integer',
            'comentario' => 'required|string',
            'fecha' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $comentario = new Comentarios();
        $comentario->evento_id = $request->input('evento_id');
        $comentario->user_id = $request->input('user_id');
        $comentario->comentario = $request->input('comentario');
        $comentario->fecha = $request->input('fecha');
        $comentario->save();

        return response()->json($comentario, 201);
    }

    public function deleteComentario(Request $request, $id)
    {
        $comentario = Comentarios::findOrFail($id);

        $comentario->delete();

        return response()->json(null, 204);
    }

}