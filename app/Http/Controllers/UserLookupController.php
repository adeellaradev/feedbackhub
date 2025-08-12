<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserLookupController extends Controller
{
     public function index(Request $r)
    {
        $q = trim((string)$r->get('q',''));
        $users = User::query()
            ->when($q, fn($qq) =>
                $qq->where('name','like',"%{$q}%")->orWhere('email','like',"%{$q}%")
            )
            ->limit(10)
            ->get(['id','name','email']);

        return response()->json($users);
    }
}
