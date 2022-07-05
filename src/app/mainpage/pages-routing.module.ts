import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index2Component } from './index2/index2.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '3217321736213',
        pathMatch: 'full'
    },
    {
        path: '3217321736213',
        component: Index2Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
