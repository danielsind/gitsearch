import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepoComponent} from '../app/repo/repo.component';
import {GitComponent} from '../app/git/git.component';


const routes: Routes = [
  {path:'repo', component:RepoComponent},
  {path:'git',component:GitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
