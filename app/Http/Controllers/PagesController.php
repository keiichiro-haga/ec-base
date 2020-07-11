<?php

namespace App\Http\Controllers;

use App\Models\Stock; 
use App\Models\Cart; 

use Illuminate\Support\Facades\Mail; 
use App\Mail\Thanks;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function top() {
        return view('Object.Project.pages.top');
    }

    public function products() {
        $stocks = Stock::Paginate(6);
        return view('Object.Project.pages.products',compact('stocks'));
    }

    public function myCart(Cart $cart) {
        $data = $cart->showCart();
        return view('Object.Project.pages.mycart',$data);
    }

    public function addMycart(Request $request,Cart $cart) {
        $stock_id=$request->stock_id;
        $message = $cart->addCart($stock_id);

        $data = $cart->showCart();

        return view('Object.Project.pages.mycart',$data)->with('message',$message);
    }

    public function deleteCart(Request $request,Cart $cart) {

       //カートから削除の処理
        $stock_id=$request->stock_id;
        $message = $cart->deleteCart($stock_id);

       //追加後の情報を取得
        $data = $cart->showCart();

        return view('Object.Project.pages.mycart',$data)->with('message',$message);

    }

    public function checkout(Cart $cart) {
        $user = Auth::user();
        $mail_data['user']=$user->name;
        $mail_data['checkout_items']=$cart->checkoutCart();
        Mail::to($user->email)->send(new Thanks($mail_data));
        return view('Object.Project.pages.checkout');
    }

    public function lookbook() {
        return view('Object.Project.pages.lookbook');
    }

    public function mens() {
        return view('Object.Project.pages.mens');
    }

    public function womens() {
        return view('Object.Project.pages.womens');
    }

    public function store() {
        return view('Object.Project.pages.store');
    }

    public function brand() {
        return view('Object.Project.pages.brand');
    }

    public function feature() {
        return view('Object.Project.pages.feature');
    }

    public function styling() {
        return view('Object.Project.pages.styling');
    }

    public function news() {
        return view('Object.Project.pages.news');
    }

    public function blog() {
        return view('Object.Project.pages.blog');
    }
}
