import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(private router: Router) {

  }

  canLoad(route: Route): boolean {

    
    let val: string = localStorage.getItem('isUserLoggedIn')!!;
    let url: string = route.path!!;
    console.log('Url:' + url);

    console.log(val)
    if ((url == 'products' || url == 'product-list') && val != "true") {
      alert('You are not authorised to visit this page');
      return false;
    }
    

    return true;
  }

}

