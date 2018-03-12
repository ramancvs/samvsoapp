import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs/Observable';
import { BRRFEndpoints } from '../config/brrf.config';

@Injectable()
export class SurveyService {
    constructor(private dataService: DataService, private endpoint: BRRFEndpoints) {

    }

    getAll(): Observable<any> {
        return Observable.create((observer: any) => {
            const url = this.endpoint.GET_SURVEY();
            this.dataService.get(url).subscribe(surveyList => {
                observer.next(surveyList);
                observer.complete();
            });
        });
    }

    create(surveyData: any): Observable<boolean> {
        return Observable.create((observer: any) => {
            const url = this.endpoint.APPROVE_SURVEY();
            this.dataService.post(url, surveyData).subscribe(() => {
                observer.next(true);
                observer.complete();
            });
        });
    }
}
