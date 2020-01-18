import { Injectable } from "@angular/core";
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import  'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class GitService {
    private username: string;
    private apiUrl: string = "https://api.github.com/users/";
    private apiKey: string = environment.accessToken;


      //Git profiles
  gitProfile(){
    return this.http.get(this.apiUrl + this.username + "?access_token=" + this.apiKey)
  }

  //Git Repos
  gitRepos() {
    return this.http.get(this.apiUrl + this.username + "/repos" + "?access_token=" + this.apiKey)
  }
  constructor(private http: HttpClient) {
    console.log("GitService Ready");
    this.username = "danielsind"
  }
  updateUser(username: string) {
    this.username = username;
  }
}