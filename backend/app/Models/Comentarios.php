<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentarios extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'evento_id',
        'user_id',
        'comentario',
        'fecha'
    ];
}
