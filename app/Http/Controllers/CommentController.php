<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $r, Feedback $feedback)
    {
    //  $this->authorize('create', Comment::class);
        
        $data = $r->validate([
            'content' => ['required','string','max:10000'],
            'mention_ids' => ['array'],               // from frontend
            'mention_ids.*' => ['integer','exists:users,id'],
        ]);
        
        $comment = $feedback->comments()->create([
            'user_id' => Auth::user()->id,
            'content' => $data['content'],
        ]);
       

        if (!empty($data['mention_ids'])) {
            $comment->mentions()->sync($data['mention_ids']);
        }

        return back()->with('success','Comment added.');
    }

    public function destroy(Comment $comment)
    {  
        $comment->delete();
        return back()->with('success','Comment deleted.');
    }
}
