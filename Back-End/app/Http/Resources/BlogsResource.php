<?php

namespace App\Http\Resources;

use App\Models\Comments;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogsResource extends JsonResource
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
            'name' => $this->name,
            'decs' => $this->decs,
            'img' => $this->img,
            'price' => $this->price,
            'star' => $this->star,
            'created_at'=>$this->created_at,
            'updated_at' => $this->updated_at,
            'Comments_num' => count(Comments::all()->where('blog_id', $this->id)),
        ];
    }
}