import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
   
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['/login']);
    console.log('logout')
  }

}
