<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::name('top')
    ->get('/', 'PagesController@top');

Route::name('mens')
    ->get('/mens', 'PagesController@mens');

Route::name('womens')
    ->get('/womens', 'PagesController@womens');

Route::name('products')
    ->get('/products', 'PagesController@products');

Route::group(['middleware' => ['auth']], function () {

    Route::name('mycart')
        ->get('/mycart', 'PagesController@myCart');

    Route::name('mycart')
        ->post('/mycart', 'PagesController@addMycart');

    Route::name('caltdelete')
        ->post('/cartdelete','PagesController@deleteCart');

    Route::name('checkout')
        ->post('/checkout', 'PagesController@checkout');

});

Route::name('lookbook')
    ->get('/lookbook', 'PagesController@lookbook');

Route::name('store')
    ->get('/store', 'PagesController@store');

Route::name('brand')
    ->get('/brand', 'PagesController@brand');

Route::name('feature')
    ->get('/feature', 'PagesController@feature');

Route::name('styling')
    ->get('/styling', 'PagesController@styling');

Route::name('news')
    ->get('/news', 'PagesController@news');

Route::name('blog')
    ->get('/blog', 'PagesController@blog');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


