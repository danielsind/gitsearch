import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  users: any = [];
  repos: any = [];
  username: string;
  
  constructor() { }

  ngOnInit() {
  }

}
