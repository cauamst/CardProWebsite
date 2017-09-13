import "./app.css";
import './assets/css/material-design-icons.css';
import "./assets/css/material.min.css";
import "./assets/css/styles.css";
import "material-design-lite/material.min.js";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './main.module';

import { enableProdMode } from '@angular/core';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(MainModule);