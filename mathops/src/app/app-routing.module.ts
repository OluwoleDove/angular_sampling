import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathComponent } from './math/math.component';

const routes: Routes = [
  { path: 'math', component: MathComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
