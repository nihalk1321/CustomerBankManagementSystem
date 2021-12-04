import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGaurdGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private router: Router) {
    console.log("Inisde appguard");
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isUser = sessionStorage.getItem('loginId')
    if (isUser) {
      console.log("Inisde if of canActivate of appguard ")
      return true;
    }
    else {
      console.log("Inisde else of canActivate of appguard ")
      this.router.navigate(['login'])
      return false
    }
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
