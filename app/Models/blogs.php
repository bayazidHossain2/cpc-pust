<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class blogs extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_title',
        'blog_content',
        'catagory_id',
        'down_vote',
        'up_vote',
        'writter_id',
        'is_varified'
    ];
}
