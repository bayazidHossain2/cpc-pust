<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class emailed_users extends Model
{
    use HasFactory;

    protected $fillable = [
        'email_id',
        'user_id'
    ];
}

