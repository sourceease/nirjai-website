import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NjHomeComponent } from './nirjai-web/nj-home/nj-home.component';
import { NjItTraningComponent } from './nirjai-web/nj-home/nj-it-traning/nj-it-traning.component';
import { ItProgramComponent } from './nirjai-web/nj-home/it-program/it-program.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: NjHomeComponent },
  { path: 'IT-Training-Program', component: NjItTraningComponent },
  { path: 'Aarambh-Program', component: ItProgramComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
