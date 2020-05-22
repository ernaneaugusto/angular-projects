import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn(state.url);
  }

  canLoad(route: Route): boolean {
    return this.checkLoggedIn(route.path);
  }

  public checkLoggedIn(url: string): boolean {
    if(this.authService.isLoggedIn) {      
      return true;
    }

    this.authService.redirectUrl = url; // url de redirecionamento apos checar login
    this.router.navigate(['/login']);
    return false;
  }
}
