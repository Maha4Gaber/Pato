<?php

namespace App\Models;

use App\Http\Controllers\MENUController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rests extends Model
{
    use HasFactory;
    protected $table = 'rests';
    protected $guarded=[];


    public function menu()
    {
        return $this->belongsTo(MENUController::class);
        # code...
    }


}