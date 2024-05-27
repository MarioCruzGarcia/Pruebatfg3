<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public function users(Request $request){
        $users = User::all();
        return response()->json($users);
    }

    public function register (Request $request) {
        $user = User::where('correo', $request['correo'])->first();
        if ($user) {
            $response[ 'status'] = 0;
            $response ['message '] = 'Email ya existe ';
            $response ['code'] = 409;
        } else {
            $user = User:: create([
                'nombre' => $request[ 'nombre'],
                'correo' => $request[ 'correo'],
                'password' => bcrypt($request[ 'password']),
                'rol_id' => $request['rol_id']
            ]);
            $response['status'] = 1;
            $response[ 'message'] = 'Usuario registrado';
            $response[' code'] = 200;
        }
        
        return response()->json($response);
    }
    public function login(Request $request){
        $credentials = $request->only('correo', 'password');
        try {
            if (!JWTAuth::attempt($credentials)) {
                $response['status'] = 0;
                $response['message'] = 'Correo o contraseña incorrecto';
                $response['code'] = 401;
                return response()->json($response);
            }
        } catch (JWTException $e) {
            $response['data'] = null;
            $response['message'] = 'Could not create token';
            $response['code'] = 500;
            return response()->json($response);
        }

        $user = auth()->user();
        $data['token'] = auth()->claims([
            'user_id' => $user->id,
            'nombre' => $user->nombre,
            'email' => $user->correo,
            'rol_id' => $user->rol_id,
        ])->attempt($credentials);

        $response['data'] = $data;
        $response['status'] = 1;
        $response['code'] = 200;
        $response['message'] = 'Inicio de sesion correcto';
        return response()->json($response);
    }

    public function getUser(Request $request, $id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    // Agregar un nuevo usuario
    public function addUser(Request $request)
    {
        // Validar los datos de entrada
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string',
            'correo' => 'required|unique:users',
            'password' => 'required|string',
            'rol_id' => 'required|integer',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        // Crear un nuevo usuario
        $user = new User();
        $user->nombre = $request->input('nombre');
        $user->correo = $request->input('correo');
        $user->password = bcrypt($request->input('password')); 
        $user->rol_id = $request->input('rol_id');
        $user->save();

        return response()->json($user, 201);
    }

    // Actualizar los detalles de un usuario existente
public function updateUser(Request $request, $id)
{
    // Buscar el usuario por su ID
    $user = User::findOrFail($id);

    // Validar los datos de entrada
    $validator = Validator::make($request->all(), [
        'nombre' => 'required|string',
        'correo' => 'required|unique:users,correo,' . $user->id, 
        'password' => 'required|string',
        'rol_id' => 'required|integer',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Actualizar los campos del usuario
    $user->nombre = $request->input('nombre');
    $user->correo = $request->input('correo');
    $user->password = bcrypt($request->input('password'));
    $user->rol_id = $request->input('rol_id');
    $user->save();

    return response()->json($user, 200);
}


    // Eliminar un usuario existente
    public function deleteUser(Request $request, $id)
    {
        // Buscar el usuario por su ID
        $user = User::findOrFail($id);

        // Eliminar el usuario
        $user->delete();

        return response()->json(null, 204);
    }

}
