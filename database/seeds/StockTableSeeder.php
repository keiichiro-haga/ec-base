<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StockTableSeeder extends Seeder
{
    /**
        * Run the database seeds.
        *
        * @return void
        */
    public function run()
    {
        DB::table('stocks')->truncate(); //2回目実行の際にシーダー情報をクリア
        DB::table('stocks')->insert([
            'name' => 'フィルムカメラ',
            'fee' => 200000,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'イヤホン',
            'fee' => 20000,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => '時計',
            'fee' => 120000,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => '地球儀',
            'fee' => 120000,
            'imgpath' => 'size_300.png',
        ]);


        DB::table('stocks')->insert([
            'name' => '腕時計',
            'fee' => 9800,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'カメラレンズ35mm',
            'fee' => 79800,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'シャンパン',
            'fee' => 800,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'ビール',
            'fee' => 200,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'やかん',
            'fee' => 1200,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => '精米',
            'fee' => 11200,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'パソコン',
            'fee' => 11200,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'アコースティックギター',
            'fee' => 25600,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'エレキギター',
            'fee' => 15600,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => '加湿器',
            'fee' => 3200,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'マウス',
            'fee' => 4200,
            'imgpath' => 'size_300.png',
        ]);

        DB::table('stocks')->insert([
            'name' => 'Android Garxy10',
            'fee' => 84200,
            'imgpath' => 'size_300.png',
        ]);
    }
}