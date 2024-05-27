<?php

namespace App\Http\Controllers;

use App\Models\Espacios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EspaciosController extends Controller
{
    public function espacios(Request $request){
        $espacios = Espacios::all();
        return response()->json($espacios);
    }

    public function getEspacio(Request $request, $id)
{
    $espacio = Espacios::findOrFail($id);
    return response()->json($espacio);
}

// Agregar un nuevo espacio
public function addEspacio(Request $request)
{
    // Validar los datos de entrada
    $validator = Validator::make($request->all(), [
        'nombre' => 'required|string',
        'localizacion' => 'required|string',
        'imagen' => 'required|string',
        'aforo' => 'required|integer',
        'contacto' => 'required|string',
        'estado_id' => 'required|integer',
        'fecha' => 'required|date',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }
    // Crear un nuevo espacio
    $espacio = new Espacios();
    $espacio->nombre = $request->input('nombre');
    $espacio->localizacion = $request->input('localizacion');
    $espacio->imagen = $request->input('imagen');
    $espacio->aforo = $request->input('aforo');
    $espacio->contacto = $request->input('contacto');
    $espacio->estado_id = $request->input('estado_id');
    $espacio->fecha = $request->input('fecha');
    $espacio->save();

    return response()->json($espacio, 201);
}

// Actualizar los detalles de un espacio existente
public function updateEspacio(Request $request, $id)
{
    // Buscar el espacio por su ID
    $espacio = Espacios::findOrFail($id);

    // Validar los datos de entrada
    $validator = Validator::make($request->all(), [
        'nombre' => 'required|string',
        'localizacion' => 'required|string',
        'imagen' => 'required|string',
        'aforo' => 'required|integer',
        'contacto' => 'required|string',
        'estado_id' => 'required|integer',
        'fecha' => 'required|date',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Actualizar los campos del espacio
    $espacio->nombre = $request->input('nombre');
    $espacio->localizacion = $request->input('localizacion');
    $espacio->imagen = $request->input('imagen');
    $espacio->aforo = $request->input('aforo');
    $espacio->contacto = $request->input('contacto');
    $espacio->estado_id = $request->input('estado_id');
    $espacio->fecha = $request->input('fecha');
    $espacio->save();

    return response()->json($espacio, 200);
}

// Eliminar un espacio existente
public function deleteEspacio(Request $request, $id)
{
    // Buscar el espacio por su ID
    $espacio = Espacios::findOrFail($id);

    // Eliminar el espacio
    $espacio->delete();

    return response()->json(null, 204);
}

}
