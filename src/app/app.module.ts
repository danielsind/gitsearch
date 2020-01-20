import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import{NgProgressHttpClientModule} from '@ngx-progressbar/http-client';

import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
import { GitService } from './git/git.service';
import { RepoComponent } from './repo/repo.component';
import { AppRoutingModule} from './app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';


// const routes:Routes = [
//   {path:"git",component:GitComponent},
//   {path:"repo",component:RepoComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    RepoComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
