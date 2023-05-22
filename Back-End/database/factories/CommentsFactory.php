<?php

namespace Database\Factories;

use App\Models\Blogs;
use App\Models\Comments;
use App\Models\Rests;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comments>
 */
class CommentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'comment' => fake()->paragraph(),
            'name' => fake()->name(),
            'email' => fake()->email(),
            'blog_id' => function () {
                return Blogs::all()->random();
            }
            //
        ];
    }
}