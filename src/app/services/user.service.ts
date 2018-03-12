import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class UserService {
    constructor(private oauthService: OAuthService) {

    }
    getUserInfo() {
        const claims = this.oauthService.getIdentityClaims();
        return claims;
    }
 }


