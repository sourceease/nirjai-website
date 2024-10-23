import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NjHomeComponent } from './nirjai-web/nj-home/nj-home.component';
import { NjItTraningComponent } from './nirjai-web/nj-home/nj-it-traning/nj-it-traning.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: NjHomeComponent },
  { path: 'it-traning', component: NjItTraningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
