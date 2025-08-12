<?php

namespace App\Policies;

use App\Models\Feedback;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class FeedbackPolicy
{
    public function update(User $u, Feedback $f): bool { return $u->id === $f->user_id; }
    public function delete(User $u, Feedback $f): bool { return $u->id === $f->user_id; }
    public function create(User $u): bool { return true; }
}
