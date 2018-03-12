import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ApiEndpoints } from '../config/api.endpoints';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class NotificationService {
    constructor(private dataService: DataService) {

    }

    get(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            this.dataService.get(ApiEndpoints.GET_NOTIFICATIONS).subscribe((notifications) => {
                observer.next(notifications);
            });
        });
    }
}
