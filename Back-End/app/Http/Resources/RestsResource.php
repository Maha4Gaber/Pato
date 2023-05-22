<?php

namespace App\Http\Resources;

use App\Models\Comments;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RestsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'name' => $this->name,
            'decs' => $this->decs,
            'img' => $this->img,
            'price' => $this->price,
            'star' => $this->star,
            'menu_id' => $this->menu_id,
            //     return count(Comments::all()->where());
            // } 'Comments_num'=> function () {
            //
        ];
    }
}