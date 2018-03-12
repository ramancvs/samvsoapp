import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OAuthService } from 'angular-oauth2-oidc';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: OAuthService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const url: string = state.url;

    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    console.log(route);
    const url = `/${route}`;

    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    try {
      if (this.authService.hasValidAccessToken()) {
        const claims: any = this.authService.getIdentityClaims();
        if (claims != null) {

        } else { this.router.navigate(['/Unauthorized']); }

        return true;
      }
      // Navigate to the login page with extras
      this.router.navigate(['/auth']);
      return false;
    } catch (error) {
      console.error(error);
    }

  }
}
