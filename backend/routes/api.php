<?php
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventosController;
use App\Http\Controllers\EspaciosController;
use App\Http\Controllers\ImagenesEventoController;
use App\Http\Controllers\CategoriasEventoController;
use App\Http\Controllers\EstadoController;
use App\Http\Controllers\ComentariosController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//USERS
Route::get('/users', [UserController::class, 'users']);
Route:: get ('/getUser/{id}', [UserController::class, 'getUser']);
Route:: post ('/addUser', [UserController::class, 'addUser']);
Route:: put ('/updateUser/{id}', [UserController::class, 'updateUser']);
Route:: delete('/deleteUser/{id}', [UserController::class, 'deleteUser']);

// LOGIN USERS
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

//EVENTOS
Route::get('/eventos', [EventosController::class, 'eventos']);
Route:: get ('/getEvento/{id}', [EventosController::class, 'getEvento']);
Route:: post ('/addEvento', [EventosController::class, 'addEvento']);
Route:: put ('/updateEvento/{id}', [EventosController::class, 'updateEvento']);
Route:: delete('/deleteEvento/{id}', [EventosController::class, 'deleteEvento']);

//ESPACIOS
Route::get('/espacios', [EspaciosController::class, 'espacios']);
Route:: get ('/getEspacio/{id}', [EspaciosController::class, 'getEspacio']);
Route:: post ('/addEspacio', [EspaciosController::class, 'addEspacio']);
Route:: put ('/updateEspacio/{id}', [EspaciosController::class, 'updateEspacio']);
Route:: delete('/deleteEspacio/{id}', [EspaciosController::class, 'deleteEspacio']);

//CATEGORIAS EVENTO
Route::get('/categorias_evento', [CategoriasEventoController::class, 'categorias_evento']);
Route:: get ('/getCategoriasEvento/{id}', [CategoriasEventoController::class, 'getCategoriasEvento']);
Route:: post ('/addCategoriasEvento', [CategoriasEventoController::class, 'addCategoriasEvento']);
Route:: put ('/updateCategoriasEvento/{id}', [CategoriasEventoController::class, 'updateCategoriasEvento']);
Route:: delete('/deleteCategoriasEvento/{id}', [CategoriasEventoController::class, 'deleteCategoriasEvento']);

//Estado
Route::get('/estado', [EstadoController::class, 'estado']);
Route:: get ('/getEstado/{id}', [EstadoController::class, 'getEstado']);
Route:: post ('/addEstado', [EstadoController::class, 'addEstado']);
Route:: put ('/updateEstado/{id}', [EstadoController::class, 'updateEstado']);
Route:: delete('/deleteEstado/{id}', [EstadoController::class, 'deleteEstado']);

//COMENTARIOS
Route::get('/comentarios', [ComentariosController::class, 'comentarios']);
Route:: get ('/getComentarios/{id}', [ComentariosController::class, 'getComentarios']);
Route:: post ('/addComentarios', [ComentariosController::class, 'addComentarios']);
Route:: put ('/updateComentarios/{id}', [ComentariosController::class, 'updateComentarios']);
Route:: delete('/deleteComentarios/{id}', [ComentariosController::class, 'deleteComentarios']);
