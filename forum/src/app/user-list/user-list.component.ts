import {Component, Input, OnInit} from '@angular/core';
import {User, UserService} from "../user/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  current:any;

  constructor(public service:UserService) {
    this.service.fetchUsers();
  }

  //userLogged:string;

  ngOnInit() {
  }

  onClick(user){
   this.current = this.service.loggedIn(user);
   console.log(this.current);
  }
}
