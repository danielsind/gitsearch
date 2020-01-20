import { Component, OnInit } from '@angular/core';
import { GitService } from '../git/git.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  users: any=[];
  repos: any=[];
  username: string;

  constructor(private gitService: GitService) { }

  ngOnInit() {
    this.gitService.gitProfile()
      .subscribe(res => {
        //console.log(res)
        this.users = res;
      })

    this.gitService.gitRepos()
      .subscribe(data => {
        //console.log(data)
        this.repos = data;
      })
  }

  searchUser() {
    this.gitService.updateUser(this.username);

    this.gitService.gitProfile()
      .subscribe(res => {
        //console.log(res)
        this.users = res;
      })

    this.gitService.gitRepos()
      .subscribe(data => {
        //console.log(data)
        this.repos = data;
      })
  }

}