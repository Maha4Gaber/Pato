<?php

namespace App\Models;

use App\Http\Controllers\CommentsController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blogs extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function comments()
    {
        return $this->hasMany(CommentsController::class);
        # code...
    }
}
