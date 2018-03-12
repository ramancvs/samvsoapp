import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { SurveyService } from './survey.service';
import { SurveyRoutingModule } from './survey.routes';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { DataTablesModule } from 'angular-datatables';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { FormWizardModule } from 'angular2-wizard';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    declarations: [
        SurveyComponent,
        SurveyListComponent,
        NewSurveyComponent,
        
    ],
    imports: [CommonModule, SurveyRoutingModule, DataTablesModule,
        FormWizardModule, FormsModule, ReactiveFormsModule
    
    ],
    exports: [],
    providers: [SurveyService],
})
export class SurveyModule { }
