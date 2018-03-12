import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LogoutComponent } from './logout/logout.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: CommonLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]
            },
            {
                path: 'survey',
                loadChildren: './survey/survey.module#SurveyModule', canActivate: [AuthGuard]
            }
        ]
    },
    { path: 'id_token', component: AuthenticationComponent },
    { path: 'auth', component: AuthenticationComponent },
    { path: 'Unauthorized', component: UnauthorizedComponent },
    { path: 'logout', component: LogoutComponent }
];

