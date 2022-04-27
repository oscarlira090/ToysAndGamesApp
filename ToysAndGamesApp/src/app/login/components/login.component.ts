import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';
import { User } from '../models/User';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  title:string = 'Login'
  userForm?: FormGroup;
  user?: User
  authRes: boolean = false

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {

    this.userForm = this.fb.group({
      name:    ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  logIn() {

    let name = this.userForm?.get('name')?.value;
    let pass = this.userForm?.get('password')?.value;
    //this.user = { name: 'admin', password: 'admin' }
    this.authRes = true
    this.auth.login(this.userForm?.get('name')?.value, this.userForm?.get('password')?.value)
      .subscribe(data => {
       
        console.log("Is Login Success: " + data);
        //this.user = { name: name, password:pass}
        if (data) this.router.navigate(['/products']);
      });
  }

}
