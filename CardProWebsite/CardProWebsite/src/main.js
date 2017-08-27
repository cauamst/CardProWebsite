"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import "material-design-lite/dist/material.deep_purple-pink.min.css";
require("./app.css");
//import "material-design-lite/material.min.js";
require("zone.js");
require("reflect-metadata");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var main_module_1 = require("./main.module");
var core_1 = require("@angular/core");
if (process.env.NODE_ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(main_module_1.MainModule);
//# sourceMappingURL=main.js.map