<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([ 'name' => 'Malcolm', 'thumbnail' => 'https://assets.show.news/__export/1596145336573/sites/debate/img/2020/07/30/malcolm_serie_fb_crop1596145046379.jpg_943222218.jpg', 'user_id' => 1 ]);
        Category::create([ 'name' => 'Fedelobo', 'thumbnail' => 'https://i.pinimg.com/280x280_RS/3c/a5/db/3ca5dbcdd6c30053dbb75471e0931bcd.jpg', 'user_id' => 1]);
        Category::create([ 'name' => 'Asco mil amiga', 'thumbnail' => 'https://assets.elimparcial.com/__export/1594752172717/sites/elimparcial/img/2020/07/14/galatzia-covid-2020_1.jpg_1359985867.jpg', 'user_id' => 1]);
        Category::create([ 'name' => 'Crew', 'thumbnail' => 'https://pbs.twimg.com/media/D7HYsdSWsAAdBsV.jpg', 'user_id' => 1]);
        Category::create([ 'name' => 'Amigos', 'thumbnail' => 'https://static.comunicae.com.mx/photos/notas/127155/Mini1598538216_Captura_de_pantalla_2020_08_27_a_la_s_09.22.27.png', 'user_id' => 1]);
        Category::create([ 'name' => 'Pipa de la amistad', 'thumbnail' => 'https://i.pinimg.com/236x/41/14/d2/4114d21be743a0646b10372c2d9701f2--hilarious-memes-scary-movies.jpg', 'user_id' => 1]);
        Category::create([ 'name' => 'Odio la vida', 'thumbnail' => 'https://img.increible.co/id-427c0c81-a660-41c9-8d5e-ade159889edc/w-620/s-ze4AigyfSfFwyyAOHq0WwmLHrLA.jpg', 'user_id' => 1]);
        Category::create([ 'name' => 'Ando filoso', 'thumbnail' => 'https://i.ytimg.com/vi/06GAPHI__dU/maxresdefault.jpg', 'user_id' => 1 ]);
        Category::create([ 'name' => 'Motivación', 'thumbnail' => 'https://difundir.org/wp-content/uploads/2016/01/grid-cell-16235-1416256688-5.jpg' , 'user_id' => 1]);
        Category::create([ 'name' => 'Mente de tiburón',  'thumbnail' => 'https://static.vix.com/es/sites/default/files/styles/large/public/btg/6-personajes-por-los-que-aun-recordamos-a-dolph-lundgren-7.jpg', 'user_id' => 1 ]);
        Category::create([ 'name' => 'SIUUUUUU', 'thumbnail' => 'https://images.daznservices.com/di/library/GOAL/f/9c/cristiano-ronaldo-ballon-dor-2014-si_1riqseteo8whd13r0125xzrc67.jpg?t=-1548069316&w=1920&h=1080', 'user_id' => 1 ]);
    }
}
