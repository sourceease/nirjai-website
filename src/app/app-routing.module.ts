import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NjHomeComponent } from './nirjai-web/nj-home/nj-home.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: NjHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
