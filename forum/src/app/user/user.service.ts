import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type User = {
  id:number,
  name:string,
  email:string,
  admin:boolean,
  statement:string
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  loggedUser;

  constructor(public http: HttpClient) {
  }

  users: User[] = [];

  fetchUsers() {

    this.http.get<any[]>('http://localhost:8000/api/users')
      .subscribe((r: any[]) => {
        this.users = r.map(user => mapAnyToUser(user));
        console.log(this.users);
      })

  };


  loggedIn(user){
    return this.loggedUser = user;
  }

}

function mapAnyToUser(user: any): User {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    admin: user.admin,
    statement: user.statement
  }
}
