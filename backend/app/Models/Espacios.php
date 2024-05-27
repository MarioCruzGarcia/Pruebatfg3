<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Espacios extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'nombre',
        'localizacion',
        'imagen',
        'aforo',
        'contacto',
        'estado_id',
        'fecha',
    ];
}
