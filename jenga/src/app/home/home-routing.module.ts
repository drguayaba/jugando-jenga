import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/home/components/home/home.component';

const routes: Routes = [
	{ path: 'home', redirectTo: '/home' },
	{ path: 'home',  component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
