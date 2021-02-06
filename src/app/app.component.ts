import { Component, OnInit } from '@angular/core';

import { UserService } from "./user/user.service";
import { IUser } from "./user/interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'random-user';
  users: IUser[] = [];
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.results;
    });
  }
}
