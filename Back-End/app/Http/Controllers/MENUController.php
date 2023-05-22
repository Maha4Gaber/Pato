<?php

namespace App\Http\Controllers;

use App\Models\MENU;
use App\Http\Requests\StoreMENURequest;
use App\Http\Requests\UpdateMENURequest;
use App\Http\Resources\RestsResource;
use App\Models\Rests;
use Illuminate\Http\Response;

class MENUController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
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
    public function store(StoreMENURequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(MENU $mENU,$id)
    {
        $rests = Rests::all()->where('menu_id',$id);

        return response()->json([
            'message' => 'Ok',
            'status' => Response::HTTP_OK,
            'data' => RestsResource::collection($rests)
        ]);

        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MENU $mENU)
    {

        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMENURequest $request, MENU $mENU)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MENU $mENU)
    {
        //
    }
}