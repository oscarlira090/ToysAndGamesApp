import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  user?: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {

    this.user = this.fb.group({
      email:    ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  logIn() {

    this.auth.login(this.user?.get('email')?.value, this.user?.get('password')?.value)
      .subscribe(data => {
        console.log("Is Login Success: " + data);

        if (data) this.router.navigate(['/products']);
      });
  }

}
