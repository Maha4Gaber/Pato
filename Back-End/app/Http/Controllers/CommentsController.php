<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use App\Http\Requests\StoreCommentsRequest;
use App\Http\Requests\UpdateCommentsRequest;
use App\Http\Resources\CommentsResource;
use Illuminate\Http\Response;

class CommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $coments =Comments::all();
        //
        return response()->json([
            'message' => 'Ok',
            'status' => Response::HTTP_OK,
            'data' => CommentsResource::collection($coments)
        ]);
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
    public function store(StoreCommentsRequest $request)
    {
        Comments::create($request->all());
        return response()->json([
            'message' => 'Ok',
            'status' => Response::HTTP_OK,

        ]);
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Comments $comments,$id)
    {
        $comment=Comments::findOrFail($id);
        if ($comment) {
            return response()->json([
                'message' => 'ok',
                'status' => Response::HTTP_OK,
                'data' => [
                    new CommentsResource($comment)
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
    public function edit(Comments $comments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentsRequest $request, Comments $comments,$id)
    {
        $comment = Comments::findOrFail($id);
        $comment->update($request->all());
        return response()->json([
            'message' => 'Update',
            'status' => Response::HTTP_NO_CONTENT
        ]);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comments $comments,$id)
    {
        $comment = Comments::findOrFail($id);
        $comment->delete();
        return response()->json([
            'message' => 'Delete',
            'status' => Response::HTTP_NO_CONTENT
        ]);
        //
    }
}
