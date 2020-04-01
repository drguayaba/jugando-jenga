import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from '@app/home/components/home/home.component';

// path: 'crisis-center',
// loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
// data: { preload: true }

const appRoutes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }