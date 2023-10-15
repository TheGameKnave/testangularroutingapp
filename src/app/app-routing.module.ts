import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Component1} from 'src/app/component/comp1/comp1.component';
import {Component2} from 'src/app/component/comp2/comp2.component';

const routes: Routes = [
  {path:'comp1', component: Component1},
  {path:'comp2', component: Component2},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
