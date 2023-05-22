<?php

namespace App\Models;

use App\Http\Controllers\RestsController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MENU extends Model
{

    use HasFactory;

    public function rests()
    {
        return $this->hasMany(RestsController::class);
        # code...
    }
}