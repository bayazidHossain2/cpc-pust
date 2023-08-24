<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class blog_catagory extends Model
{
    use HasFactory;

    protected $fillable = [
        'catagory'
    ];
}
