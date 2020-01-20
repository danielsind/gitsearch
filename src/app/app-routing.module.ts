import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepoComponent} from '../app/repo/repo.component';
import {GitComponent} from '../app/git/git.component';
import {NotFoundComponent} from '../app/not-found/not-found.component';


const routes: Routes = [
  {path:'repo', component:RepoComponent},
  {path:'git',component:GitComponent},
  {path:'',component:GitComponent},
  {path:'**',component:NotFoundComponent},
  {path:'',redirectTo:'/git',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
