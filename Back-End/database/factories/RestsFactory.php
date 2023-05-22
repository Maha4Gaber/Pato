<?php

namespace Database\Factories;

use App\Models\MENU;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rests>
 */
class RestsFactory extends Factory
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
            'img' => fake()->numberBetween(1,6),
            'price' => fake()->numberBetween(30,300),
            'star' => fake()->numberBetween(0,5),
            'menu_id'=>function(){
                return MENU::all()->random();
            }
            //
        ];
    }
}