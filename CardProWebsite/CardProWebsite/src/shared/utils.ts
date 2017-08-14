import { Directive, AfterViewChecked } from '@angular/core';
import { JsonServiceClient } from 'servicestack-client';

declare var global; //populated from package.json/karma/globals

export var client = new JsonServiceClient(global.BaseUrl || '/');

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewChecked  {
   ngAfterViewChecked() {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    }
}