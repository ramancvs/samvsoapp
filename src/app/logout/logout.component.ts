import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {
    constructor(private router: Router, private oauthService: OAuthService) { }

    ngOnInit() { 
        //// this.oauthService.logoutUrl = 'http://localhost:5000/connect/endsession';
        this.oauthService.logOut(true);
        window.location.href = 'http://localhost:5000/connect/endsession';
        // window.location.href = 'https://brrfid4.sesatsolutions.loc/connect/endsession';
        
    }
    login() {
        this.router.navigate(['/']);
    }
}
