import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  usser : any [];
   angular: any;
  fakeUser : User[] = [
    {id : 1, name : "ashok", password : 'ashok', email : "as@gmail.com"},
    {id : 2, name : "kumar", password : 'kumar', email : "ku@gmail.com"},
  ]
  constructor(private http : HttpClient) { }

  getUser(){
    return of(this.fakeUser);
  }

  loginUser(login_value){
    // this.usser = this.getUser();
    this.getUser().subscribe(data => {
      this.usser = data;
    });

    this.usser.forEach(userData => {
      console.log(userData.name);
    });

    console.log( this.usser);
    return of(this.getUser())
  }
}
