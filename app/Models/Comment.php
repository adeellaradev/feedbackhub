<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['content','user_id'];
    public function user()     { return $this->belongsTo(User::class); }
    public function feedback() { return $this->belongsTo(Feedback::class); }
    public function mentions() {
        return $this->belongsToMany(User::class, 'comment_mentions', 'comment_id', 'mentioned_user_id')
                    ->withTimestamps();
    }
}
