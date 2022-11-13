import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChrisComponent } from './pages/chris/chris.component';
import { LaurentComponent } from './pages/laurent/laurent.component';

const routes: Routes = [
  { path: 'chris', component: ChrisComponent },
  { path: 'laurent', component: LaurentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
