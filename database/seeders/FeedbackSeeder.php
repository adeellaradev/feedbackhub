<?php

namespace Database\Seeders;

use App\Models\Feedback;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = [
            'bug' => '🐛 Bug report',
            'feature' => '✨ Feature request',
            'improvement' => '🚀 Improvement',
            'other' => '💭 Other',
        ];
        $users = User::pluck('id')->toArray();

        foreach (range(1, 10) as $i) {
            Feedback::create([
                'user_id' => $users[array_rand($users)],
                'title' => 'Sample Feedback ' . $i,
                'category' => array_rand($categories),
                'description' => 'This is a sample description for feedback #' . $i,
            ]);
        }
    }
}
