import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpGuard implements CanActivate {
  constructor(private router: Router) {
    console.log("Inisde appguard");
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAdmin = sessionStorage.getItem('AdminId')
    if (sessionStorage.getItem('AdminId')!=null) {
      console.log("Inside emploee guard - "+sessionStorage.getItem('AdminId'));
      console.log("Inisde if of canActivate of appguard ")
      return true;
    }
    else {
      console.log("Inisde else of canActivate of appguard ")
      this.router.navigate(['login'])
      return false
    }
  }
  
}
