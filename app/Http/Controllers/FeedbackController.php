<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function index(Request $r)
    {
        $feedback = Feedback::query()
            ->with('user:id,name')
            ->when($r->get('category'), fn($q,$cat) => $q->where('category', $cat))
            ->latest()->paginate(10)->withQueryString();

        return Inertia::render('Feedback/Index', ['feedback' => $feedback]);
    }

    public function create() { return Inertia::render('Feedback/Create'); }

    public function store(Request $r)
    {
        $data = $r->validate([
            'title' => ['required','string','max:255'],
            'category' => ['required','in:bug,feature,improvement,other'],
            'description' => ['required','string'],
        ]);

        $feedback = $r->user()->feedback()->create($data);

        return to_route('feedback.show', $feedback)->with('success','Feedback created.');
    }

    public function show(Feedback $feedback)
    {
        $feedback->load(['user:id,name','comments.user:id,name']);
        return Inertia::render('Feedback/Show', ['item' => $feedback]);
    }

    public function edit(Feedback $feedback)
    {
        // $this->authorize('update', $feedback);
        return Inertia::render('Feedback/Edit', ['item' => $feedback]);
    }

    public function update(Request $r, Feedback $feedback)
    {
        // $this->authorize('update', $feedback);
        $data = $r->validate([
            'title' => ['required','string','max:255'],
            'category' => ['required','in:bug,feature,improvement,other'],
            'description' => ['required','string'],
        ]);
        $feedback->update($data);
        return back()->with('success','Updated.');
    }

    public function destroy(Feedback $feedback)
    {
        // $this->authorize('delete', $feedback);
        $feedback->delete();
        return to_route('feedback.index')->with('success','Deleted.');
    }
}
