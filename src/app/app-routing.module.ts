import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
    {path: '', redirectTo: '/1', pathMatch: 'full' },
    {path: '', loadChildren: () => import('./mainpage/pages.module').then(m => m.PagesModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
