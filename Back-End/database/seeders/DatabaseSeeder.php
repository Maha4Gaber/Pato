<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Blogs;
use App\Models\Comments;
use App\Models\MENU;
use App\Models\Rests;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        MENU::create([
            'name'=> "STARTERS"
        ]);
        MENU::create([
            'name' => "MAIN"
        ]);
        MENU::create([
            'name' => "DRINKS"
        ]);
        MENU::create([
            'name' => "DESSERT"
        ]);
        MENU::create([
            'name' => "LUNCH"
        ]);
        MENU::create([
            'name' => "DINNER"
        ]);
        Rests::factory(30)->create();
        Blogs::factory(15)->create();
        Comments::factory(50)->create();
    }
}