import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SurveyComponent } from './survey.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { AuthGuard } from '../guards/auth.guard';
import { NewSurveyComponent } from './new-survey/new-survey.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'list',
                component: SurveyListComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'create',
                component: NewSurveyComponent,
                canActivate: [AuthGuard]
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SurveyRoutingModule { }
