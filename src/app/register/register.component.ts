import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService  } from '../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  isSubmitted : boolean = false;
  inValid : false;
  register_obj ;
  constructor(private form_builder : FormBuilder, private router : Router, private user_service : UserService) { }

  ngOnInit() {
    this.registerForm = this.form_builder.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
      email : ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    this.register_obj = { username : this.registerForm.value.username, password : this.registerForm.value.password, email : this.registerForm.value.email }

    this.user_service.createUser(this.register_obj);
    console.log(this.register_obj);
  }

}
