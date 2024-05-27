<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorias_evento extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'categorias_evento';
    protected $fillable = [
        'nombre'
    ];
}
