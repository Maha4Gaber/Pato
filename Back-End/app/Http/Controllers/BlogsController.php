<?php

namespace App\Http\Controllers;

use App\Models\Blogs;
use App\Http\Requests\StoreBlogsRequest;
use App\Http\Requests\UpdateBlogsRequest;
use App\Http\Resources\BlogsResource;
use App\Http\Resources\CommentsResource;
use App\Models\Comments;
use Illuminate\Http\Response;

class BlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs=Blogs::all();
        return response()->json([
            'message' => 'Ok',
            'status' => Response::HTTP_OK,
            'data' => BlogsResource::collection(Blogs::all())
        ]);
        return $blogs;
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogsRequest $request)
    {
        Blogs::create([
            'name' => $request->name,
            'decs' => $request->decs,
            'type' => $request->type,
            'img' => $request->img,
            'star' => 0
        ]);
        return response()->json([
            'message' => 'Ok',
            'status' => Response::HTTP_OK,
        ]);
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Blogs $blogs,$id)
    {
        $blog = Blogs::find($id);
        $comments = Comments::all()->where('blog_id',$id);
        if ($blog) {
            return response()->json([
                'message' => 'ok',
                'status' => Response::HTTP_OK,
                'data' =>[
                    'blog'=> new BlogsResource($blog),
                    'comments'=> CommentsResource::collection($comments)
                ]
            ]);
        } else {
            return response()->json([
                'message' => 'Not Found',
                'status' => Response::HTTP_NOT_FOUND
            ]);
        }
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blogs $blogs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogsRequest $request, $id)
    {
        $blog=Blogs::findOrFail($id);
        $blog->update($request->all());
        return response()->json([
            'message' => 'Update',
            'status' => Response::HTTP_NO_CONTENT
        ]);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blogs $blogs,$id)
    {
        $blog = Blogs::findOrFail($id);
        $blog->delete();
        return response()->json([
            'message' => 'Delete',
            'status' => Response::HTTP_NO_CONTENT,
        ]);
    }
}
