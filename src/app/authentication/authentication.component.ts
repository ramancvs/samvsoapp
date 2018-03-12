import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private oauthService: OAuthService, private router: Router) {
    if (!this.oauthService.hasValidAccessToken()) {
      this.oauthService.initImplicitFlow();
    } else {

      this.router.navigate(['/']);
    }
  }
  ngOnInit() {

  }

}
