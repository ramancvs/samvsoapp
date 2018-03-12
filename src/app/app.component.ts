import { Component } from '@angular/core';
import { OAuthConfig } from './config/oauth.config';
import { OAuthService } from 'angular-oauth2-oidc';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'SAM';
    constructor(private oauthService: OAuthService) {
        this.configureWithNewConfigApi();
    }
    private configureWithNewConfigApi() {
        this.oauthService.configure(OAuthConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
        this.oauthService.tryLogin({});
    }

}
