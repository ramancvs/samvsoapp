import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ApiEndpoints } from '../config/api.endpoints';

@Injectable()
export class NavigationService {
    constructor(private dataService: DataService) {

    }

    get(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {

            // this.dataService.get(ApiEndpoints.GET_NAVIGATION).subscribe((notifications) => {
            //     observer.next(notifications);
            // });

            this.dataService.get('./assets/navigation.config.json').subscribe((notifications) => {
                observer.next(notifications);
            });
        });
    }
}
