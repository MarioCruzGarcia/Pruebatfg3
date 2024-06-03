<?php

namespace App\Http\Controllers;
use App\Models\Eventos;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;

class EventosController extends Controller
{
    public function eventos(Request $request){
        $eventos = Eventos::all();
        return response()->json($eventos);
    }

    public function getEvento(Request $request, $id)
{
    $evento = Eventos::findOrFail($id);
    return response()->json($evento);
}

// Agregar un nuevo evento
public function addEvento(Request $request)
{
    // Validar los datos de entrada
    $validator = Validator::make($request->all(), [
        'nombre' => 'required|string',
        'localizacion' => 'required|string',
        'aforo' => 'required|integer',
        'descripcion' => 'required|string',
        'fecha_hora' => 'required|date',
        'duracion' => 'required|integer',
        'imagen' => 'required|string',
        'organizador_id' => 'required|integer',
        'categoria_id' => 'required|integer',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }
    // Crear un nuevo evento
    $evento = new Eventos();
    $evento->nombre = $request->input('nombre');
    $evento->localizacion = $request->input('localizacion');
    $evento->aforo = $request->input('aforo');
    $evento->descripcion = $request->input('descripcion');
    $evento->fecha_hora = $request->input('fecha_hora');
    $evento->duracion = $request->input('duracion');
    $evento->imagen = $request->input('imagen');
    $evento->organizador_id = $request->input('organizador_id');
    $evento->categoria_id = $request->input('categoria_id');
    $evento->save();

    return response()->json($evento, 201);
}

// Actualizar los detalles de un evento existente
public function updateEvento(Request $request, $id)
{
    // Buscar el evento por su ID
    $evento = Eventos::findOrFail($id);

    // Validar los datos de entrada
    $validator = Validator::make($request->all(), [
        'nombre' => 'required|string',
        'localizacion' => 'required|string',
        'aforo' => 'required|integer',
        'descripcion' => 'required|string',
        'fecha_hora' => 'required|date',
        'duracion' => 'required|integer',
        'imagen' => 'required|string',
        'organizador_id' => 'required|integer',
        'categoria_id' => 'required|integer',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Actualizar los campos del evento
    $evento->nombre = $request->input('nombre');
    $evento->localizacion = $request->input('localizacion');
    $evento->aforo = $request->input('aforo');
    $evento->descripcion = $request->input('descripcion');
    $evento->fecha_hora = $request->input('fecha_hora');
    $evento->duracion = $request->input('duracion');
    $evento->imagen = $request->input('imagen');
    $evento->organizador_id = $request->input('organizador_id');
    $evento->categoria_id = $request->input('categoria_id');
    $evento->save();

    return response()->json($evento, 200);
}

// Eliminar un evento existente
public function deleteEvento(Request $request, $id)
{
    // Buscar el evento por su ID
    $evento = Eventos::findOrFail($id);

    // Eliminar el evento
    $evento->delete();

    return response()->json(null, 204);
}

}
