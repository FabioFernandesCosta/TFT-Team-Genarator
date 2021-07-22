<?php
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use JavaScript;
 
class VarController extends Controller
{
 
 
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $sinergias = getSin()
        return view('sinergias.index', compact('sinergias'));

    }

    function getSin(){
        return [DB::table('origins') ->select('*') ->get(), DB::table('classes') ->select('*') ->get()];
    
    }
}