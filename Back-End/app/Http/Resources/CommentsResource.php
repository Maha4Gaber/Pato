<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return
        [
            'id' => $this->id,
            'comment' => $this->comment,
            'name' => $this->name,
            'email' => $this->email,
            'blog_id' => $this->blog_id,
        ];

    }
}