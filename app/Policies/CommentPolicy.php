<?php

namespace App\Policies;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CommentPolicy
{
    public function delete(User $u, Comment $c): bool { return $u->id === $c->user_id; }
    public function create(User $u): bool { return true; }
}
