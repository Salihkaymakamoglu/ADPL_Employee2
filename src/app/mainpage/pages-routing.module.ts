import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index2Component } from './index2/index2.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'adpl',
        pathMatch: 'full'
    },
    {
        path: ':id',
        component: Index2Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { 

}
