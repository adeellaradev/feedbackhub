<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $r)
    {
        
        $feedback = Feedback::query()
            ->with('user:id,name')
            ->when($r->get('category'), fn($q,$cat) => $q->where('category', $cat))
            ->latest()->paginate(10)->withQueryString();

        return Inertia::render('Dashboard', ['feedback' => $feedback]);
    }

}
