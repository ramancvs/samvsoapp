import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-survey-list',
    templateUrl: './survey-list.component.html',
    styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {
    dtOptions: DataTables.Settings = {};

    surveyList: any;
    public user: any;
    toggle = false;
    constructor(private router: Router, private surveyService: SurveyService, private userService: UserService, ) {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.toggle = false;
    }

    ngOnInit() {
        this.user = this.userService.getUserInfo();
        this.surveyService.getAll().subscribe((surveyList) => {
            this.surveyList = surveyList;
        });

    }
    createSurvey() {
        this.router.navigate(['/survey/create']);
    }
    approveSurvey(id: any, brandName: any) {
        this.toggle = false;
        const filteredSurvey = this.surveyList.filter(list => list.Id === id)[0];
        filteredSurvey.BrandName = brandName;
        this.surveyService.create(filteredSurvey).subscribe((surveyList) => {
            $("#openModal").click();
            this.ngOnInit();
        });
    }
}
