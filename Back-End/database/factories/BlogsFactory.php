<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blogs>
 */
class BlogsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'decs' => fake()->sentence(),
            'img' => fake()->
            numberBetween(1, 15),
            'type' => fake()->word(),
            'star' => fake()->numberBetween(0, 5),
            //
        ];
    }
}