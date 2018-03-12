import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastyModule } from 'ng2-toasty';

// Layout Modules
import { CommonLayoutComponent } from './common/common-layout.component';

// Directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Sidebar_Directives } from './shared/directives/side-nav.directive';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Cards_Directives } from './shared/directives/cards.directive';

// Routing Module
import { AppRoutes } from './app.routing';

// App Component
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './guards/auth.guard';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';

import { LogoutComponent } from './logout/logout.component';

// services
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
import { SurveyService } from './survey/survey.service';
import { NavigationService } from './services/navigation.service';
import { NotificationService } from './services/notification.service';
import { BRRFEndpoints } from './config/brrf.config';
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { useHash: true }),
        NgbModule.forRoot(),
        OAuthModule.forRoot(),
        PerfectScrollbarModule,
        HttpClientModule,
        HttpModule,
        ToastyModule
    ],
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        Sidebar_Directives,
        Cards_Directives,
        AuthenticationComponent,
        UnauthorizedComponent,
        LogoutComponent
    ],
    providers: [AuthGuard, UserService, DataService, SurveyService, NavigationService, NotificationService,BRRFEndpoints],
    bootstrap: [AppComponent]
})


export class AppModule { }
