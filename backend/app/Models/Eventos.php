<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'nombre',
        'localizacion',
        'aforo',
        'descripcion',
        'fecha_hora',
        'duracion',
        'imagen',
        'organizador_id',
        'categoria_id',
    ];
}
