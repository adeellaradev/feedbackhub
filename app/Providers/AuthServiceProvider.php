<?php

namespace App\Providers;

use App\Models\Comment;
use App\Models\Feedback;
use App\Policies\CommentPolicy;
use App\Policies\FeedbackPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        Comment::class => CommentPolicy::class,
        Feedback::class => FeedbackPolicy::class,
    ];

    public function boot(): void
    {
        $this->registerPolicies();
    }
}
