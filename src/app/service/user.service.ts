import { Injectable } from '@angular/core';
import { User } from '../user.model';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  usser : any;
   angular: any;
   inValid = false;
   login_status : boolean ;
  fakeUser : User[] = [
    {id : 1, name : "ashok", password : 'ashok', email : "as@gmail.com"},
    {id : 2, name : "kumar", password : 'kumar', email : "ku@gmail.com"},
  ]
  constructor(private http : HttpClient) { }

  getUser(){
    return of(this.fakeUser);
  }

  loginUser(login_value){
    this.login_status = false;
    // this.usser = this.getUser();
    this.usser = this.getAllUsers();
    this.usser.forEach(userData => {
      if(userData.username == login_value.username && userData.password == login_value.password){
        this.login_status = true;
      }
    });
    console.log(this.login_status);
    return of(this.login_status)
  }

  getAllUsers(){
    if(localStorage.getItem('user_details')){
      return (JSON.parse(localStorage.getItem('user_details')));
    } else {
      return ([]);
    }
    
  }

  createUser(register_value){
   this.usser = this.getAllUsers();
   this.usser.push(register_value);
    if(this.usser.length){
      localStorage.setItem('user_details', JSON.stringify(this.usser));
    }
  }
}
