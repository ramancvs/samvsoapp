import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Component({
    selector: 'app-new-survey',
    templateUrl: './new-survey.component.html',
    styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent implements OnInit {
    surveyForm: FormGroup = new FormGroup({
        'firstName': new FormControl('', [Validators.required]),
        'email': new FormControl('', [Validators.required]),
        'notes': new FormControl('', [Validators.required]),
    });

    constructor(private route: Router, private toastyService: ToastyService) {

    }
    ngOnInit() {
    }

    create() {
        this.surveyForm.reset();
        this.newToast();
        this.route.navigate(['/survey/list']);
    }

    newToast() {
        const toastOptions: ToastOptions = {
            title: 'Survey',
            msg: 'Survey have been successfully added',
            showClose: true,
            timeout: 15000,
            theme: 'success',

            onAdd: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast: ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        this.toastyService.success(toastOptions);
    }
}

