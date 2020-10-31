<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;

class SPAController extends Controller
{
    public function index()
    {
        return view('index');
    }
}
