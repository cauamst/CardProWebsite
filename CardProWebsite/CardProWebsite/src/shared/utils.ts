import { Directive, AfterViewChecked, Injectable, ErrorHandler, ViewChild } from '@angular/core';
import { JsonServiceClient } from 'servicestack-client';
import { Subject } from "rxjs/Subject";

declare var global; //populated from package.json/karma/globals

export var client = new JsonServiceClient(global.BaseUrl || '/');

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})
        
export class MDL implements AfterViewChecked {
    ngAfterViewChecked() {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    }
}

@Injectable()
export class NotificationService {
    private notify = new Subject<any>();
    private needToTopNotify = new Subject<any>();
    private moveToNotify = new Subject<any>();
    /**
     * Observable string streams
     */
    notifyObservable$ = this.notify.asObservable();
    needToTopObservable$ = this.needToTopNotify.asObservable();
    moveToObservable$ = this.moveToNotify.asObservable();

    constructor() { }

    public notifyOther(data: any) {
        if (data) {
            this.notify.next(data);
        }
    }

    public needToTop(data) {
        if (data) {
            this.needToTopNotify.next(data);
        }
    }
    public moveTo(data) {
        if (data)
        {
            this.moveToNotify.next(data);
        }
    }
}

export class CardProErrorHandler implements ErrorHandler {
    handleError(error) {
        alert(error);
        throw error;
    }
}