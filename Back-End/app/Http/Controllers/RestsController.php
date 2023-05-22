<?php

namespace App\Http\Controllers;

use App\Models\Rests;
use App\Http\Requests\StoreRestsRequest;
use App\Http\Requests\UpdateRestsRequest;
use App\Http\Resources\RestsResource;
use App\Models\MENU;
use Illuminate\Http\Response;

class RestsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $rests = Rests::all();
        return response()->json([
            'message' => 'Ok',
            'status' => Response::HTTP_OK,
            'data' => RestsResource::collection(Rests::all())
        ]);

        //
    }

    public function popular()
    {
        $rests = Rests::orderBy('star', 'desc')->offset(0)->limit(5)->get();
        $menu = MENU::all();
        return response()->json([
            'message' => 'Ok',
            'status' => Response::HTTP_OK,
            'data' => RestsResource::collection($rests)
        ]);
        # code...
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
    public function store(StoreRestsRequest $request)
    {
        Rests::create([
            'name'=>$request->name,
            'decs'=>$request->decs,
            'price'=>$request->price,
            'img' => $request->img,
            'menu_id' => $request->menu_id,
            'star'=>0
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
    public function show(Rests $rests,$id)
    {
        $rest =Rests::find($id);
        if ($rest) {
            return response()->json([
                'message' => 'ok',
                'status' => Response::HTTP_OK,
                'data' => new RestsResource($rest)
            ]);
        } else {
            return response()->json([
                'message' => 'Not Found',
                'status' => Response::HTTP_NOT_FOUND
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rests $rests)
    {

        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRestsRequest $request, Rests $rests , $id)
    {
        $rest = rests::findOrFail($id);
        $rest->update($request->all());
        return response()->json([
            'message' => 'Update',
            'status' => Response::HTTP_NO_CONTENT
        ]);
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rests $rests ,$id )
    {
        $rest = rests::findOrFail($id);
        $rest->delete();
        return response()->json([
            'message' => 'delete',
            'status' => Response::HTTP_NO_CONTENT
        ]);
        //
    }
}
