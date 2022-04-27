import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
      let val: string = localStorage.getItem('isUserLoggedIn')!!;
      if (val != "true") {
        alert('You are not authorised to visit this page');
        this.router.navigate(["login"], { queryParams: { retUrl: route.url } });
        return false;
      }
      return true;
    }

  /*
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
  }*/

}

