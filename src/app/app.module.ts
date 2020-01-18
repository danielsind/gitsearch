import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { GitService } from './git/git.service';
import { RepoComponent } from './repo/repo.component';

const routes:Routes = [
  {path:"git",component:GitComponent},
  {path:"repo",component:RepoComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
