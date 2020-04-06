import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { GamesModule } from './games/games.module';

const routes: Routes = [
	{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
	{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
