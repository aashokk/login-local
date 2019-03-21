import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted : boolean = false;
  constructor(private form_builder : FormBuilder, private userService : UserService,  private router : Router) { }

  ngOnInit() {
    this.loginForm = this.form_builder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    //console.log(this.loginForm.invalid);
    //console.log(this.loginForm.value);
    this.userService.loginUser(this.loginForm.value);

    // this.userService.loginUser(this.loginForm.value).subscribe(data => {
    //   this.router.navigate(['register'])
    // });
  }

}
