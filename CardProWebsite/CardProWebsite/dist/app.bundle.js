webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Options:
Date: 2017-01-01 12:00:00
Version: 4
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:56109/

//GlobalNamespace:
ExportAsTypes: True
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
//IncludeTypes:
//ExcludeTypes:
//DefaultImports:
*/
Object.defineProperty(exports, "__esModule", { value: true });
var HelloResponse = (function () {
    function HelloResponse() {
    }
    return HelloResponse;
}());
exports.HelloResponse = HelloResponse;
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.createResponse = function () { return new HelloResponse(); };
    Hello.prototype.getTypeName = function () { return "Hello"; };
    return Hello;
}());
exports.Hello = Hello;


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(54);
var http_1 = __webpack_require__(47);
var router_1 = __webpack_require__(19);
var app_component_1 = __webpack_require__(99);
var header_1 = __webpack_require__(107);
var footer_1 = __webpack_require__(106);
var app_module_1 = __webpack_require__(52);
var utils_1 = __webpack_require__(53);
var routes = [
    { path: '', redirectTo: 'main/0', pathMatch: 'full' },
];
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                utils_1.MDL,
                app_component_1.AppComponent,
                header_1.HeaderComponent,
                footer_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes),
                app_module_1.AppModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var utils_1 = __webpack_require__(53);
var dtos_1 = __webpack_require__(100);
var HelloComponent = (function () {
    function HelloComponent(cdref) {
        this.cdref = cdref;
    }
    HelloComponent.prototype.ngOnInit = function () {
        this.nameChanged(this.name);
    };
    HelloComponent.prototype.nameChanged = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var req, r;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!name) return [3 /*break*/, 2];
                        req = new dtos_1.Hello();
                        req.name = name;
                        return [4 /*yield*/, utils_1.client.get(req)];
                    case 1:
                        r = _a.sent();
                        this.result = r.result;
                        return [3 /*break*/, 3];
                    case 2:
                        this.result = '';
                        _a.label = 3;
                    case 3:
                        this.cdref.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], HelloComponent.prototype, "name", void 0);
    HelloComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'hello',
            template: __webpack_require__(111),
            styles: [__webpack_require__(113)]
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var router_1 = __webpack_require__(19);
var HomeComponent = (function () {
    function HomeComponent(route) {
        this.route = route;
        this.heading = "Home";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (x) { return _this.name = x.name; });
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'home',
            template: "\n        <section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\n            <header class=\"section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white\">\n                <i class=\"material-icons\">play_circle_filled</i>\n            </header>\n\n            <div class=\"mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone\">\n\n                <hello [name]=\"name\"></hello> \n\n                <div class=\"mdl-card__actions\">\n                    <a href=\"http://docs.servicestack.net/typescript-add-servicestack-reference\" class=\"mdl-button\">More info on TypeScript ServiceStack Reference</a>\n                </div>\n            </div>\n        </section>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var ProductsComponent = (function () {
    function ProductsComponent() {
        this.heading = "Products";
    }
    ProductsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'products',
            template: __webpack_require__(112),
            styles: [__webpack_require__(114)]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var TechnologyComponent = (function () {
    function TechnologyComponent() {
        this.heading = "Technology";
    }
    TechnologyComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'technology',
            template: "\n        <section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\n            <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\n                <div class=\"mdl-card__supporting-text\">\n                    <h4>{{heading}}</h4>\n                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. \n                    Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse. \n                    Pariatur occaecat nisi laboris tempor laboris eiusmod qui id Lorem esse commodo in. \n                    Exercitation aute dolore deserunt culpa consequat elit labore incididunt elit anim.\n                </div>\n                <div class=\"mdl-card__actions\">\n                    <a href=\"#\" class=\"mdl-button\">Read our features</a>\n                </div>\n            </div>\n        </section>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TechnologyComponent);
    return TechnologyComponent;
}());
exports.TechnologyComponent = TechnologyComponent;


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-footer',
            template: "\n        <section class=\"section--footer mdl-grid\"></section>\n        <footer class=\"mdl-mega-footer\">\n            <div class=\"mdl-mega-footer--middle-section\">\n                <div class=\"mdl-mega-footer--drop-down-section\">\n                    <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n                    <h1 class=\"mdl-mega-footer--heading\">Features</h1>\n                    <ul class=\"mdl-mega-footer--link-list\">\n                        <li><a href=\"#\">About</a></li>\n                        <li><a href=\"#\">Terms</a></li>\n                        <li><a href=\"#\">Partners</a></li>\n                        <li><a href=\"#\">Updates</a></li>\n                    </ul>\n                </div>\n                <div class=\"mdl-mega-footer--drop-down-section\">\n                    <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n                    <h1 class=\"mdl-mega-footer--heading\">Details</h1>\n                    <ul class=\"mdl-mega-footer--link-list\">\n                        <li><a href=\"#\">Spec</a></li>\n                        <li><a href=\"#\">Tools</a></li>\n                        <li><a href=\"#\">Resources</a></li>\n                    </ul>\n                </div>\n                <div class=\"mdl-mega-footer--drop-down-section\">\n                    <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n                    <h1 class=\"mdl-mega-footer--heading\">Technology</h1>\n                    <ul class=\"mdl-mega-footer--link-list\">\n                        <li><a href=\"#\">How it works</a></li>\n                        <li><a href=\"#\">Patterns</a></li>\n                        <li><a href=\"#\">Usage</a></li>\n                        <li><a href=\"#\">Products</a></li>\n                        <li><a href=\"#\">Contracts</a></li>\n                    </ul>\n                </div>\n                <div class=\"mdl-mega-footer--drop-down-section\">\n                    <input class=\"mdl-mega-footer--heading-checkbox\" type=\"checkbox\" checked>\n                    <h1 class=\"mdl-mega-footer--heading\">FAQ</h1>\n                    <ul class=\"mdl-mega-footer--link-list\">\n                        <li><a href=\"#\">Questions</a></li>\n                        <li><a href=\"#\">Answers</a></li>\n                        <li><a href=\"#\">Contact us</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"mdl-mega-footer--bottom-section\">\n                <div class=\"mdl-logo\">\n                    More Information\n                </div>\n                <ul class=\"mdl-mega-footer--link-list\">\n                    <li><a href=\"https://github.com/ServiceStack/ServiceStackVS\">ServiceStack VS.NET Templates</a></li>\n                </ul>\n            </div>\n        </footer>\n    "
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var router_1 = __webpack_require__(19);
var app_module_1 = __webpack_require__(52);
var HeaderComponent = (function () {
    function HeaderComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'CardProWebsite';
        this.routes = app_module_1.routes.filter(function (val) { return val.path != ''; });
    }
    HeaderComponent.prototype.isActive = function (path) {
        return this.router.url.substring(1) === path;
    };
    HeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n        <header class=\"mdl-layout__header mdl-layout__header--scroll mdl-color--primary\">\n            <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\n            <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\">\n                <h3>{{title}}</h3>\n            </div>\n            <div class=\"mdl-layout--large-screen-only mdl-layout__header-row\"></div>\n            <div class=\"mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark\">\n\n                <span *ngFor=\"let route of routes\">\n                    <a *ngIf=\"route.data\" class=\"mdl-layout__tab\" [class.is-active]=\"isActive(route.path)\"\n                        routerLink=\"{{route.path}}\">{{route.data.title}}</a>\n                </span>\n\n                <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent\" id=\"add\">\n                    <i class=\"material-icons\" role=\"presentation\">add</i>\n                    <span class=\"visuallyhidden\">Add</span>\n                </button>\n            </div>\n        </header>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-card__supporting-text\">\n    <h4>Welcome</h4>\n\n    Ajax request using ServiceStack's TypeScript JsonServiceClient and Typed DTOs:\n\n    <div class=\"mdl-textfield mdl-js-textfield\" style=\"width:auto\">\n\n        <input type=\"text\" class=\"mdl-textfield__input\" id=\"Name\"\n               placeholder=\"Type your name\" autocomplete=\"off\"\n               [(ngModel)]=\"name\"\n               (ngModelChange)=\"nameChanged($event)\" />\n\n        <span class=\"result\">{{result}}</span>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports = "<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">\r\n    <div class=\"mdl-card mdl-cell mdl-cell--12-col\">\r\n        <div class=\"mdl-card__supporting-text mdl-grid mdl-grid--no-spacing\">\r\n            <h4 class=\"mdl-cell mdl-cell--12-col\">{{heading}}</h4>\r\n            <div class=\"section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone\">\r\n                <div class=\"section__circle-container__circle mdl-color--primary\"></div>\r\n            </div>\r\n            <div class=\"section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone\">\r\n                <h5>Lorem ipsum dolor sit amet</h5>\r\n                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href=\"#\">proident minim</a>.\r\n            </div>\r\n            <div class=\"section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone\">\r\n                <div class=\"section__circle-container__circle mdl-color--primary\"></div>\r\n            </div>\r\n            <div class=\"section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone\">\r\n                <h5>Lorem ipsum dolor sit amet</h5>\r\n                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href=\"#\">proident minim</a>.\r\n            </div>\r\n            <div class=\"section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone\">\r\n                <div class=\"section__circle-container__circle mdl-color--primary\"></div>\r\n            </div>\r\n            <div class=\"section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone\">\r\n                <h5>Lorem ipsum dolor sit amet</h5>\r\n                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href=\"#\">proident minim</a>.\r\n            </div>\r\n        </div>\r\n        <div class=\"mdl-card__actions\">\r\n            <a href=\"#\" class=\"mdl-button\">Read our features</a>\r\n        </div>\r\n    </div>\r\n</section>";

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = "input[type=text] {\n  display: inline-block;\n  width: auto;\n  margin: 0 10px 0 0; }\n\n.result {\n  font-size: 20px;\n  color: #7a1ea1; }\n"

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports = "div {\n  background: #3e2280;\n  color: #fff; }\n\na {\n  color: #ff73a3; }\n"

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * @version v1.3.0
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/google/material-design-lite
 */
!function(){"use strict";function e(e,t){if(e){if(t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var s=document.createElement("span");s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER),s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(t.CssClasses_.MDL_RIPPLE),s.appendChild(i),e.appendChild(s)}e.addEventListener("click",function(s){if("#"===e.getAttribute("href").charAt(0)){s.preventDefault();var i=e.href.split("#")[1],n=t.element_.querySelector("#"+i);t.resetTabState_(),t.resetPanelState_(),e.classList.add(t.CssClasses_.ACTIVE_CLASS),n.classList.add(t.CssClasses_.ACTIVE_CLASS)}})}}function t(e,t,s,i){function n(){var n=e.href.split("#")[1],a=i.content_.querySelector("#"+n);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),a.classList.add(i.CssClasses_.IS_ACTIVE)}if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE_CONTAINER),a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var l=document.createElement("span");l.classList.add(i.CssClasses_.RIPPLE),a.appendChild(l),e.appendChild(a)}i.tabBar_.classList.contains(i.CssClasses_.TAB_MANUAL_SWITCH)||e.addEventListener("click",function(t){"#"===e.getAttribute("href").charAt(0)&&(t.preventDefault(),n())}),e.show=n}var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};s=function(){function e(e,t){for(var s=0;s<c.length;s++)if(c[s].className===e)return"undefined"!=typeof t&&(c[s]=t),c[s];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,s){var i=t(e);return i.indexOf(s)!==-1}function i(e,t,s){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:s});var i=document.createEvent("Events");return i.initEvent(e,t,s),i}function n(t,s){if("undefined"==typeof t&&"undefined"==typeof s)for(var i=0;i<c.length;i++)n(c[i].className,c[i].cssClass);else{var l=t;if("undefined"==typeof s){var o=e(l);o&&(s=o.cssClass)}for(var r=document.querySelectorAll("."+s),_=0;_<r.length;_++)a(r[_],l)}}function a(n,a){if(!("object"==typeof n&&n instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=i("mdl-componentupgrading",!0,!0);if(n.dispatchEvent(l),!l.defaultPrevented){var o=t(n),r=[];if(a)s(n,a)||r.push(e(a));else{var _=n.classList;c.forEach(function(e){_.contains(e.cssClass)&&r.indexOf(e)===-1&&!s(n,e.className)&&r.push(e)})}for(var d,h=0,u=r.length;h<u;h++){if(d=r[h],!d)throw new Error("Unable to find a registered component for the given class.");o.push(d.className),n.setAttribute("data-upgraded",o.join(","));var E=new d.classConstructor(n);E[C]=d,p.push(E);for(var m=0,L=d.callbacks.length;m<L;m++)d.callbacks[m](n);d.widget&&(n[d.className]=E);var I=i("mdl-componentupgraded",!0,!1);n.dispatchEvent(I)}}}function l(e){Array.isArray(e)||(e=e instanceof Element?[e]:Array.prototype.slice.call(e));for(var t,s=0,i=e.length;s<i;s++)t=e[s],t instanceof HTMLElement&&(a(t),t.children.length>0&&l(t.children))}function o(t){var s="undefined"==typeof t.widget&&"undefined"==typeof t.widget,i=!0;s||(i=t.widget||t.widget);var n={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(c.forEach(function(e){if(e.cssClass===n.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===n.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(C))throw new Error("MDL component classes must not have "+C+" defined as a property.");var a=e(t.classAsString,n);a||c.push(n)}function r(t,s){var i=e(t);i&&i.callbacks.push(s)}function _(){for(var e=0;e<c.length;e++)n(c[e].className)}function d(e){if(e){var t=p.indexOf(e);p.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),n=s.indexOf(e[C].classAsString);s.splice(n,1),e.element_.setAttribute("data-upgraded",s.join(","));var a=i("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}function h(e){var t=function(e){p.filter(function(t){return t.element_===e}).forEach(d)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)t(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var c=[],p=[],C="mdlComponentConfigInternal_";return{upgradeDom:n,upgradeElement:a,upgradeElements:l,upgradeAllRegistered:_,registerUpgradedCallback:r,register:o,downgradeElements:h}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})}),Date.now||(Date.now=function(){return(new Date).getTime()},Date.now=Date.now);for(var i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n){var a=i[n];window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"],window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var l=0;window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(l+16,t);return setTimeout(function(){e(l=s)},s-t)},window.cancelAnimationFrame=clearTimeout,window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}var o=function(e){this.element_=e,this.init()};window.MaterialButton=o,o.prototype.Constant_={},o.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},o.prototype.blurHandler_=function(e){e&&this.element_.blur()},o.prototype.disable=function(){this.element_.disabled=!0},o.prototype.disable=o.prototype.disable,o.prototype.enable=function(){this.element_.disabled=!1},o.prototype.enable=o.prototype.enable,o.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},s.register({constructor:o,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var r=function(e){this.element_=e,this.init()};window.MaterialCheckbox=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},r.prototype.onChange_=function(e){this.updateClasses_()},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},r.prototype.onMouseUp_=function(e){this.blur_()},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},r.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},r.prototype.checkToggleState=r.prototype.checkToggleState,r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},r.prototype.checkDisabled=r.prototype.checkDisabled,r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},r.prototype.disable=r.prototype.disable,r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},r.prototype.enable=r.prototype.enable,r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},r.prototype.check=r.prototype.check,r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},r.prototype.uncheck=r.prototype.uncheck,r.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(s),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:r,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var _=function(e){this.element_=e,this.init()};window.MaterialIconToggle=_,_.prototype.Constant_={TINY_TIMEOUT:.001},_.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},_.prototype.onChange_=function(e){this.updateClasses_()},_.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},_.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},_.prototype.onMouseUp_=function(e){this.blur_()},_.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},_.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},_.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},_.prototype.checkToggleState=_.prototype.checkToggleState,_.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},_.prototype.checkDisabled=_.prototype.checkDisabled,_.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},_.prototype.disable=_.prototype.disable,_.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},_.prototype.enable=_.prototype.enable,_.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},_.prototype.check=_.prototype.check,_.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},_.prototype.uncheck=_.prototype.uncheck,_.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:_,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var d=function(e){this.element_=e,this.init()};window.MaterialMenu=d,d.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},d.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},d.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},d.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),i=null;s&&(i=document.getElementById(s),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++)n[a].addEventListener("click",this.boundItemClick_),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},d.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},d.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},d.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},d.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},d.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},d.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(d.prototype.CssClasses_.IS_ANIMATING)},d.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},d.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-n[a].offsetTop-n[a].offsetHeight)/t*i+"s":n[a].offsetTop/t*i+"s",n[a].style.transitionDelay=l}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var o=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",o),this.hide())}.bind(this);document.addEventListener("click",o)}},d.prototype.show=d.prototype.show,d.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var s=this.element_.getBoundingClientRect(),i=s.height,n=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(i,n),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},d.prototype.hide=d.prototype.hide,d.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},d.prototype.toggle=d.prototype.toggle,s.register({constructor:d,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var h=function(e){this.element_=e,this.init()};window.MaterialProgress=h,h.prototype.Constant_={},h.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},h.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},h.prototype.setProgress=h.prototype.setProgress,h.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},h.prototype.setBuffer=h.prototype.setBuffer,h.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},s.register({constructor:h,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var c=function(e){this.element_=e,this.init()};window.MaterialRadio=c,c.prototype.Constant_={TINY_TIMEOUT:.001},c.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},c.prototype.onChange_=function(e){for(var t=document.getElementsByClassName(this.CssClasses_.JS_RADIO),s=0;s<t.length;s++){var i=t[s].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&"undefined"!=typeof t[s].MaterialRadio&&t[s].MaterialRadio.updateClasses_()}},c.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},c.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},c.prototype.onMouseup_=function(e){this.blur_()},c.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},c.prototype.blur_=function(){window.setTimeout(function(){this.btnElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},c.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},c.prototype.checkDisabled=c.prototype.checkDisabled,c.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},c.prototype.checkToggleState=c.prototype.checkToggleState,c.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_()},c.prototype.disable=c.prototype.disable,c.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_()},c.prototype.enable=c.prototype.enable,c.prototype.check=function(){this.btnElement_.checked=!0,this.onChange_(null)},c.prototype.check=c.prototype.check,c.prototype.uncheck=function(){this.btnElement_.checked=!1,this.onChange_(null)},c.prototype.uncheck=c.prototype.uncheck,c.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN),this.boundChangeHandler_=this.onChange_.bind(this),this.boundFocusHandler_=this.onChange_.bind(this),this.boundBlurHandler_=this.onBlur_.bind(this),this.boundMouseUpHandler_=this.onMouseup_.bind(this);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var t=document.createElement("span");t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(t);var s;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),s=document.createElement("span"),s.classList.add(this.CssClasses_.RIPPLE_CONTAINER),s.classList.add(this.CssClasses_.RIPPLE_EFFECT),s.classList.add(this.CssClasses_.RIPPLE_CENTER),s.addEventListener("mouseup",this.boundMouseUpHandler_);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),s.appendChild(i),this.element_.appendChild(s)}this.btnElement_.addEventListener("change",this.boundChangeHandler_),this.btnElement_.addEventListener("focus",this.boundFocusHandler_),this.btnElement_.addEventListener("blur",this.boundBlurHandler_),this.element_.addEventListener("mouseup",this.boundMouseUpHandler_),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:c,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var p=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=p,p.prototype.Constant_={},p.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},p.prototype.onInput_=function(e){this.updateValueStyles_()},p.prototype.onChange_=function(e){this.updateValueStyles_()},p.prototype.onMouseUp_=function(e){e.target.blur()},p.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t)}},p.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e)},p.prototype.disable=function(){this.element_.disabled=!0},p.prototype.disable=p.prototype.disable,p.prototype.enable=function(){this.element_.disabled=!1},p.prototype.enable=p.prototype.enable,p.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_()},p.prototype.change=p.prototype.change,p.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var s=document.createElement("div");s.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(s),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),s.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),s.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:p,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var C=function(e){if(this.element_=e,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=C,C.prototype.Constant_={ANIMATION_LENGTH:250},C.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},C.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),
this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},C.prototype.showSnackbar=function(e){if(void 0===e)throw new Error("Please provide a data object with at least a message to display.");if(void 0===e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(e):(this.active=!0,this.message_=e.message,e.timeout?this.timeout_=e.timeout:this.timeout_=2750,e.actionHandler&&(this.actionHandler_=e.actionHandler),e.actionText&&(this.actionText_=e.actionText),this.displaySnackbar_())},C.prototype.showSnackbar=C.prototype.showSnackbar,C.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},C.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},C.prototype.setActionHidden_=function(e){e?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},s.register({constructor:C,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0});var u=function(e){this.element_=e,this.init()};window.MaterialSpinner=u,u.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},u.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},u.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[s,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o)}t.appendChild(s),t.appendChild(i),t.appendChild(n),this.element_.appendChild(t)},u.prototype.createLayer=u.prototype.createLayer,u.prototype.stop=function(){this.element_.classList.remove("is-active")},u.prototype.stop=u.prototype.stop,u.prototype.start=function(){this.element_.classList.add("is-active")},u.prototype.start=u.prototype.start,u.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},s.register({constructor:u,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var E=function(e){this.element_=e,this.init()};window.MaterialSwitch=E,E.prototype.Constant_={TINY_TIMEOUT:.001},E.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},E.prototype.onChange_=function(e){this.updateClasses_()},E.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},E.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},E.prototype.onMouseUp_=function(e){this.blur_()},E.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},E.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},E.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},E.prototype.checkDisabled=E.prototype.checkDisabled,E.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},E.prototype.checkToggleState=E.prototype.checkToggleState,E.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},E.prototype.disable=E.prototype.disable,E.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},E.prototype.enable=E.prototype.enable,E.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},E.prototype.on=E.prototype.on,E.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},E.prototype.off=E.prototype.off,E.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:E,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var m=function(e){this.element_=e,this.init()};window.MaterialTabs=m,m.prototype.Constant_={},m.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},m.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var t=0;t<this.tabs_.length;t++)new e(this.tabs_[t],this);this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)},m.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++)this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++)this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.init=function(){this.element_&&this.initTabs_()},s.register({constructor:m,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var L=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=L,L.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},L.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},L.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},L.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},L.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.onReset_=function(e){this.updateClasses_()},L.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},L.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},L.prototype.checkDisabled=L.prototype.checkDisabled,L.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.checkFocus=L.prototype.checkFocus,L.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},L.prototype.checkValidity=L.prototype.checkValidity,L.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},L.prototype.checkDirty=L.prototype.checkDirty,L.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},L.prototype.disable=L.prototype.disable,L.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},L.prototype.enable=L.prototype.enable,L.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},L.prototype.change=L.prototype.change,L.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},s.register({constructor:L,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var I=function(e){this.element_=e,this.init()};window.MaterialTooltip=I,I.prototype.Constant_={},I.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},I.prototype.handleMouseEnter_=function(e){var t=e.target.getBoundingClientRect(),s=t.left+t.width/2,i=t.top+t.height/2,n=-1*(this.element_.offsetWidth/2),a=-1*(this.element_.offsetHeight/2);this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(s=t.width/2,i+a<0?(this.element_.style.top="0",this.element_.style.marginTop="0"):(this.element_.style.top=i+"px",this.element_.style.marginTop=a+"px")):s+n<0?(this.element_.style.left="0",this.element_.style.marginLeft="0"):(this.element_.style.left=s+"px",this.element_.style.marginLeft=n+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=t.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=t.left+t.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=t.left-this.element_.offsetWidth-10+"px":this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},I.prototype.hideTooltip_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},I.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveAndScrollHandler=this.hideTooltip_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveAndScrollHandler,!1),window.addEventListener("scroll",this.boundMouseLeaveAndScrollHandler,!0),window.addEventListener("touchstart",this.boundMouseLeaveAndScrollHandler))}},s.register({constructor:I,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var f=function(e){this.element_=e,this.init()};window.MaterialLayout=f,f.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},f.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},f.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},f.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",TAB_MANUAL_SWITCH:"mdl-layout__tab-manual-switch",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},f.prototype.contentScrollHandler_=function(){if(!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){var e=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING))}},f.prototype.keyboardEventHandler_=function(e){e.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)&&this.toggleDrawer()},f.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},f.prototype.drawerToggleHandler_=function(e){if(e&&"keydown"===e.type){if(e.keyCode!==this.Keycodes_.SPACE&&e.keyCode!==this.Keycodes_.ENTER)return;e.preventDefault()}this.toggleDrawer()},f.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},f.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},f.prototype.resetTabState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.resetPanelState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.toggleDrawer=function(){var e=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"))},f.prototype.toggleDrawer=f.prototype.toggleDrawer,f.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER);var s=this.element_.querySelector(":focus");this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),s&&s.focus();for(var i=this.element_.childNodes,n=i.length,a=0;a<n;a++){var l=i[a];l.classList&&l.classList.contains(this.CssClasses_.HEADER)&&(this.header_=l),l.classList&&l.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=l),l.classList&&l.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=l)}window.addEventListener("pageshow",function(e){e.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var o=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?o=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(o=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(o=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),o===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.SEAMED||o===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var r=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!r){r=document.createElement("div"),r.setAttribute("aria-expanded","false"),r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.classList.add(this.CssClasses_.DRAWER_BTN);var _=document.createElement("i");_.classList.add(this.CssClasses_.ICON),_.innerHTML=this.Constant_.MENU_ICON,r.appendChild(_)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?r.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&r.classList.add(this.CssClasses_.ON_SMALL_SCREEN),r.addEventListener("click",this.drawerToggleHandler_.bind(this)),r.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(r,this.header_.firstChild):this.element_.insertBefore(r,this.content_);var d=document.createElement("div");d.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(d),d.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=d,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(h,this.tabBar_),this.header_.removeChild(this.tabBar_);var c=document.createElement("div");c.classList.add(this.CssClasses_.TAB_BAR_BUTTON),c.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var p=document.createElement("i");p.classList.add(this.CssClasses_.ICON),p.textContent=this.Constant_.CHEVRON_LEFT,c.appendChild(p),c.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var C=document.createElement("div");C.classList.add(this.CssClasses_.TAB_BAR_BUTTON),C.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var u=document.createElement("i");u.classList.add(this.CssClasses_.ICON),u.textContent=this.Constant_.CHEVRON_RIGHT,C.appendChild(u),C.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),h.appendChild(c),h.appendChild(this.tabBar_),h.appendChild(C);var E=function(){this.tabBar_.scrollLeft>0?c.classList.add(this.CssClasses_.IS_ACTIVE):c.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?C.classList.add(this.CssClasses_.IS_ACTIVE):C.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",E),E();var m=function(){this.resizeTimeoutId_&&clearTimeout(this.resizeTimeoutId_),this.resizeTimeoutId_=setTimeout(function(){E(),this.resizeTimeoutId_=null}.bind(this),this.Constant_.RESIZE_TIMEOUT)}.bind(this);window.addEventListener("resize",m),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var L=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),I=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),f=0;f<L.length;f++)new t(L[f],L,I,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=t,s.register({constructor:f,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var b=function(e){this.element_=e,this.init()};window.MaterialDataTable=b,b.prototype.Constant_={},b.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",SELECT_ELEMENT:"mdl-data-table__select",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},b.prototype.selectRow_=function(e,t,s){return t?function(){e.checked?t.classList.add(this.CssClasses_.IS_SELECTED):t.classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):s?function(){var t,i;if(e.checked)for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),s[t].classList.add(this.CssClasses_.IS_SELECTED);else for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),s[t].classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):void 0},b.prototype.createCheckbox_=function(e,t){var i=document.createElement("label"),n=["mdl-checkbox","mdl-js-checkbox","mdl-js-ripple-effect",this.CssClasses_.SELECT_ELEMENT];i.className=n.join(" ");var a=document.createElement("input");return a.type="checkbox",a.classList.add("mdl-checkbox__input"),e?(a.checked=e.classList.contains(this.CssClasses_.IS_SELECTED),a.addEventListener("change",this.selectRow_(a,e))):t&&a.addEventListener("change",this.selectRow_(a,null,t)),i.appendChild(a),s.upgradeElement(i,"MaterialCheckbox"),i},b.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),t=Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),s=Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")),i=t.concat(s);if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var n=document.createElement("th"),a=this.createCheckbox_(null,i);n.appendChild(a),e.parentElement.insertBefore(n,e);for(var l=0;l<i.length;l++){var o=i[l].querySelector("td");if(o){var r=document.createElement("td");if("TBODY"===i[l].parentNode.nodeName.toUpperCase()){var _=this.createCheckbox_(i[l]);r.appendChild(_)}i[l].insertBefore(r,o)}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}}},s.register({constructor:b,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var S=function(e){this.element_=e,this.init()};window.MaterialRipple=S,S.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},S.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},S.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var s=this.getFrameCount();if(s>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=void 0!==e.clientX?e.clientX:e.touches[0].clientX,o=void 0!==e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top)}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},S.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},S.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},s.register({constructor:S,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}();


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var platform_browser_1 = __webpack_require__(17);
var forms_1 = __webpack_require__(54);
var router_1 = __webpack_require__(19);
var home_1 = __webpack_require__(103);
var hello_1 = __webpack_require__(102);
var products_1 = __webpack_require__(104);
var technology_1 = __webpack_require__(105);
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: home_1.HomeComponent, data: { title: 'Home', name: 'Angular4' } },
    { path: 'products', component: products_1.ProductsComponent, data: { title: 'Products' } },
    { path: 'technology', component: technology_1.TechnologyComponent, data: { title: 'Technology' } },
    { path: '**', redirectTo: 'home' },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                home_1.HomeComponent,
                hello_1.HelloComponent,
                products_1.ProductsComponent,
                technology_1.TechnologyComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(exports.routes)
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var servicestack_client_1 = __webpack_require__(50);
exports.client = new servicestack_client_1.JsonServiceClient(global.BaseUrl || '/');
var MDL = (function () {
    function MDL() {
    }
    MDL.prototype.ngAfterViewInit = function () {
        if (typeof componentHandler !== "undefined") {
            componentHandler.upgradeDom();
        }
    };
    MDL = tslib_1.__decorate([
        core_1.Directive({
            selector: '[mdl]'
        })
    ], MDL);
    return MDL;
}());
exports.MDL = MDL;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return REQUIRED_VALIDATOR; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(17);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.0.3
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * \@stable
 * @abstract
 */
var AbstractControlDirective = (function () {
    function AbstractControlDirective() {
    }
    Object.defineProperty(AbstractControlDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('unimplemented'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.statusChanges : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.valueChanges : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} value
     * @return {?}
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A directive that contains multiple {\@link NgControl}s.
 *
 * Only used by the forms module.
 *
 * \@stable
 */
var ControlContainer = (function (_super) {
    __extends(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * Get the form to which this container belongs.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * Get the path to this container.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __assign = (undefined && undefined.__assign) || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * Providers for validators to be used for {\@link FormControl}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * ### Example
 *
 * {\@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
 * \@stable
 */
var NG_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValidators');
/**
 * Providers for asynchronous validators to be used for {\@link FormControl}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {\@link NG_VALIDATORS} for more details.
 *
 * \@stable
 */
var NG_ASYNC_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {\@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", Validators.required)
 * ```
 *
 * \@stable
 */
var Validators = (function () {
    function Validators() {
    }
    /**
     * Validator that requires controls to have a non-empty value.
     * @param {?} control
     * @return {?}
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * Validator that requires control value to be true.
     * @param {?} control
     * @return {?}
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * Validator that performs email validation.
     * @param {?} control
     * @return {?}
     */
    Validators.email = function (control) {
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * Validator that requires controls to have a value of a minimum length.
     * @param {?} minLength
     * @return {?}
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires controls to have a value of a maximum length.
     * @param {?} maxLength
     * @return {?}
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires a control to match a regex to its value.
     * @param {?} pattern
     * @return {?}
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var /** @type {?} */ regex;
        var /** @type {?} */ regexStr;
        if (typeof pattern === 'string') {
            regexStr = "^" + pattern + "$";
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * No-op validator.
     * @param {?} c
     * @return {?}
     */
    Validators.nullValidator = function (c) { return null; };
    /**
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps.
     * @param {?} validators
     * @return {?}
     */
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__["forkJoin"])(observables), _mergeErrors);
        };
    };
    return Validators;
}());
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} r
 * @return {?}
 */
function toObservable(r) {
    var /** @type {?} */ obs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisPromise"])(r) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__["fromPromise"])(r) : r;
    if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? __assign({}, res, errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a {\@link ControlValueAccessor} for form controls.
 *
 * See {\@link DefaultValueAccessor} for how to implement one.
 * \@stable
 */
var NG_VALUE_ACCESSOR = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValueAccessor');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" name="rememberLogin" ngModel>
 *  ```
 *
 *  \@stable
 */
var CheckboxControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return CheckboxControlValueAccessor;
}());
CheckboxControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
CheckboxControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */
function _isAndroid() {
    var /** @type {?} */ userAgent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["ɵgetDOM"])() ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * \@experimental
 */
var COMPOSITION_BUFFER_MODE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('CompositionEventMode');
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  \@stable
 */
var DefaultValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    return DefaultValueAccessor;
}());
DefaultValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngModel],[formControl],[formControlName]',
                host: {
                    '(input)': '_handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '_compositionStart()',
                    '(compositionend)': '_compositionEnd($event.target.value)'
                },
                providers: [DEFAULT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
DefaultValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [COMPOSITION_BUFFER_MODE,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="number" [(ngModel)]="age">
 *  ```
 */
var NumberValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return NumberValueAccessor;
}());
NumberValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [NUMBER_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
NumberValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * A base class that all control directive extend.
 * It binds a {\@link FormControl} object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 * \@stable
 * @abstract
 */
var NgControl = (function (_super) {
    __extends(NgControl, _super);
    function NgControl() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * \@internal
         */
        _this._parent = null;
        _this.name = null;
        _this.valueAccessor = null;
        /**
         * \@internal
         */
        _this._rawValidators = [];
        /**
         * \@internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    /**
     * @abstract
     * @param {?} newValue
     * @return {?}
     */
    NgControl.prototype.viewToModelUpdate = function (newValue) { };
    return NgControl;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */
var RadioControlRegistry = (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    /**
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    /**
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    return RadioControlRegistry;
}());
RadioControlRegistry.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
RadioControlRegistry.ctorParameters = function () { return []; };
/**
 * \@whatItDoes Writes radio control values and listens to radio control changes.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  \@stable
 */
var RadioControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    return RadioControlValueAccessor;
}());
RadioControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RadioControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: RadioControlRegistry, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
]; };
RadioControlValueAccessor.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'formControlName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="range" [(ngModel)]="age" >
 *  ```
 */
var RangeValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return RangeValueAccessor;
}());
RangeValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RangeValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * \@whatItDoes Writes values and listens to changes on a select element.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var SelectControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var /** @type {?} */ id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var /** @type {?} */ valueString = _buildValueString(id, value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = valueString;
            fn(_this._getOptionValue(valueString));
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @return {?}
     */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    return SelectControlValueAccessor;
}());
SelectControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * \@howToUse
 *
 * See docs for {\@link SelectControlValueAccessor} for usage examples.
 *
 * \@stable
 */
var NgSelectOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * @return {?}
     */
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectOption;
}());
NgSelectOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: SelectControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSelectOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 *  ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * \@stable
 */
var SelectMultipleControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var /** @type {?} */ optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var /** @type {?} */ selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var /** @type {?} */ options = _.selectedOptions;
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    var /** @type {?} */ val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            else {
                var /** @type {?} */ options = (_.options);
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    if (opt.selected) {
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var /** @type {?} */ id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id)._value, value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    };
    return SelectMultipleControlValueAccessor;
}());
SelectMultipleControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectMultipleControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectMultipleControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 */
var NgSelectMultipleOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
    };
    /**
     * @return {?}
     */
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectMultipleOption;
}());
NgSelectMultipleOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectMultipleOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: SelectMultipleControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSelectMultipleOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    return parent.path.concat([name]);
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    // view -> model
    dir.valueAccessor.registerOnChange(function (newValue) {
        dir.viewToModelUpdate(newValue);
        control.markAsDirty();
        control.setValue(newValue, { emitModelToViewChange: false });
    });
    // touched
    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
    control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
    if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
    dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    var /** @type {?} */ messageEnd;
    if (dir.path.length > 1) {
        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
    }
    else if (dir.path[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var /** @type {?} */ change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    var /** @type {?} */ defaultAccessor;
    var /** @type {?} */ builtinAccessor;
    var /** @type {?} */ customAccessor;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
 *
 * \@stable
 */
var AbstractFormGroupDirective = (function (_super) {
    __extends(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
    };
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * Get the {\@link FormGroup} backing this binding.
         * @return {?}
         */
        get: function () { return this.formDirective.getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * Get the path to this control group.
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * Get the {\@link Form} to which this group belongs.
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return composeAsyncValidators(this._asyncValidators); },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @return {?}
     */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = (function () {
    /**
     * @param {?} cd
     */
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatus = (function (_super) {
    __extends(NgControlStatus, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatus;
}(AbstractControlStatus));
NgControlStatus.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
];
/**
 * @nocollapse
 */
NgControlStatus.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatusGroup = (function (_super) {
    __extends(NgControlStatusGroup, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatusGroup;
}(AbstractControlStatus));
NgControlStatusGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngControlStatusHost
            },] },
];
/**
 * @nocollapse
 */
NgControlStatusGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */
var VALID = 'VALID';
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
var INVALID = 'INVALID';
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
var PENDING = 'PENDING';
/**
 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
 * calculations of validity or value.
 */
var DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = ((path)).split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return ((path)).reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls[name] || null;
        }
        if (v instanceof FormArray) {
            return v.at(/** @type {?} */ (name)) || null;
        }
        return null;
    }, control);
}
/**
 * @param {?} validator
 * @return {?}
 */
function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator;
}
/**
 * @param {?} asyncValidator
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
}
/**
 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
 * {\@link FormArray}.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * \@stable
 * @abstract
 */
var AbstractControl = (function () {
    /**
     * @param {?} validator
     * @param {?} asyncValidator
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = function () { };
        this._pristine = true;
        this._touched = false;
        /**
         * \@internal
         */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "value", {
        /**
         * The value of the control.
         * @return {?}
         */
        get: function () { return this._value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         * @return {?}
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "status", {
        /**
         * The validation status of the control. There are four possible
         * validation statuses:
         *
         * * **VALID**:  control has passed all validation checks
         * * **INVALID**: control has failed at least one validation check
         * * **PENDING**: control is in the midst of conducting a validation check
         * * **DISABLED**: control is exempt from validation checks
         *
         * These statuses are mutually exclusive, so a control cannot be
         * both valid AND invalid or invalid AND disabled.
         * @return {?}
         */
        get: function () { return this._status; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         * @return {?}
         */
        get: function () { return this._status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         * @return {?}
         */
        get: function () { return this._status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         * @return {?}
         */
        get: function () { return this._status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         * @return {?}
         */
        get: function () { return this._status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         * @return {?}
         */
        get: function () { return this._status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "errors", {
        /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         * @return {?}
         */
        get: function () { return this._errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pristine", {
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return this._pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "touched", {
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return !this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
        /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         * @return {?}
         */
        get: function () { return this._valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
        /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         * @return {?}
         */
        get: function () { return this._statusChanges; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsTouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = true;
        if (this._parent && !onlySelf) {
            this._parent.markAsTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsUntouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !onlySelf) {
            this._parent._updateTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsDirty = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = false;
        if (this._parent && !onlySelf) {
            this._parent.markAsDirty({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsPristine = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = true;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !onlySelf) {
            this._parent._updatePristine({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `pending`.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsPending = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._status = PENDING;
        if (this._parent && !onlySelf) {
            this._parent.markAsPending({ onlySelf: onlySelf });
        }
    };
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.disable = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._status = DISABLED;
        this._errors = null;
        this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
        this._updateValue();
        if (emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        this._updateAncestors(onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.enable = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._status = VALID;
        this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
        this._updateAncestors(onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    /**
     * @param {?} onlySelf
     * @return {?}
     */
    AbstractControl.prototype._updateAncestors = function (onlySelf) {
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity();
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.setValue = function (value, options) { };
    /**
     * Patches the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.patchValue = function (value, options) { };
    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.reset = function (value, options) { };
    /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.updateValueAndValidity = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this._errors = this._runValidator();
            this._status = this._calculateStatus();
            if (this._status === VALID || this._status === PENDING) {
                this._runAsyncValidator(emitEvent);
            }
        }
        if (emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updateTreeValidity = function (_a) {
        var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
    /**
     * @return {?}
     */
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    /**
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this._status = PENDING;
            var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} __1
     * @return {?}
     */
    AbstractControl.prototype.setErrors = function (errors, _a) {
        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
        this._errors = errors;
        this._updateControlsErrors(emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path
     * @return {?}
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        var /** @type {?} */ control = path ? this.get(path) : this;
        return control && control._errors ? control._errors[errorCode] : null;
    };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.hasError = function (errorCode, path) {
        if (path === void 0) { path = null; }
        return !!this.getError(errorCode, path);
    };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this._status = this._calculateStatus();
        if (emitEvent) {
            this._statusChanges.emit(this._status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initObservables = function () {
        this._valueChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._statusChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this._errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @abstract
     * @param {?} cb
     * @return {?}
     */
    AbstractControl.prototype._forEachChild = function (cb) { };
    /**
     * \@internal
     * @abstract
     * @param {?} condition
     * @return {?}
     */
    AbstractControl.prototype._anyControls = function (condition) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._allControlsDisabled = function () { };
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updatePristine = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = !this._anyControlsDirty();
        if (this._parent && !onlySelf) {
            this._parent._updatePristine({ onlySelf: onlySelf });
        }
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updateTouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = this._anyControlsTouched();
        if (this._parent && !onlySelf) {
            this._parent._updateTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    return AbstractControl;
}());
/**
 * \@whatItDoes Tracks the value and validation status of an individual form control.
 *
 * It is one of the three fundamental building blocks of Angular forms, along with
 * {\@link FormGroup} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
 * first argument. Example:
 *
 * ```ts
 * const ctrl = new FormControl('some value');
 * console.log(ctrl.value);     // 'some value'
 * ```
 *
 * You can also initialize the control with a form state object on instantiation,
 * which includes both the value and whether or not the control is disabled.
 * You can't use the value key without the disabled key; both are required
 * to use this way of initialization.
 *
 * ```ts
 * const ctrl = new FormControl({value: 'n/a', disabled: true});
 * console.log(ctrl.value);     // 'n/a'
 * console.log(ctrl.status);   // 'DISABLED'
 * ```
 *
 * To include a sync validator (or an array of sync validators) with the control,
 * pass it in as the second argument. Async validators are also supported, but
 * have to be passed in separately as the third arg.
 *
 * ```ts
 * const ctrl = new FormControl('', Validators.required);
 * console.log(ctrl.value);     // ''
 * console.log(ctrl.status);   // 'INVALID'
 * ```
 *
 * See its superclass, {\@link AbstractControl}, for more properties and methods.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormControl = (function (_super) {
    __extends(FormControl, _super);
    /**
     * @param {?=} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormControl(formState, validator, asyncValidator) {
        if (formState === void 0) { formState = null; }
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)) || this;
        /**
         * \@internal
         */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormControl.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
        this._value = value;
        if (this._onChange.length && emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl.setValue} at this level.
     * It exists for symmetry with {\@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
     * where it does behave differently.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     * @param {?=} formState
     * @param {?=} __1
     * @return {?}
     */
    FormControl.prototype.reset = function (formState, _a) {
        if (formState === void 0) { formState = null; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._applyFormState(formState);
        this.markAsPristine({ onlySelf: onlySelf });
        this.markAsUntouched({ onlySelf: onlySelf });
        this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /**
     * @param {?} formState
     * @return {?}
     */
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this._value = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this._value = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
 * instances.
 *
 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
 * with each control name as the key.  It calculates its status by reducing the statuses
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
 * argument. The key for each child will be the name under which it is registered.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * You can also include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormGroup = (function (_super) {
    __extends(FormGroup, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormGroup(controls, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, validator, asyncValidator) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update value or validity of the control, so for
     * most cases you'll want to use {\@link FormGroup.addControl} instead.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for
     * existence in the group only, use {\@link AbstractControl.get} instead.
     * @param {?} controlName
     * @return {?}
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.patchValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
            }
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Resets the {\@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} __1
     * @return {?}
     */
    FormGroup.prototype.reset = function (value, _a) {
        if (value === void 0) { value = {}; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        this._updatePristine({ onlySelf: onlySelf });
        this._updateTouched({ onlySelf: onlySelf });
    };
    /**
     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     * @return {?}
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var /** @type {?} */ res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var /** @type {?} */ res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
            var controlName = _a[_i];
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
 * {\@link FormGroup} or {\@link FormArray} instances.
 *
 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
 * It calculates its status by reducing the statuses of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormGroup}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
 * argument.
 *
 * ### Example
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * You can also include array-level validators as the second arg, or array-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormArray = (function (_super) {
    __extends(FormArray, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormArray(controls, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var _this = _super.call(this, validator, asyncValidator) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new {\@link AbstractControl} at the end of the array.
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove the control at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         * @return {?}
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.setValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     * @param {?} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.patchValue = function (value, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
            }
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    };
    /**
     * Resets the {\@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} __1
     * @return {?}
     */
    FormArray.prototype.reset = function (value, _a) {
        if (value === void 0) { value = []; }
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
        });
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        this._updatePristine({ onlySelf: onlySelf });
        this._updateTouched({ onlySelf: onlySelf });
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : ((control)).getRawValue();
        });
    };
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
            .map(function (control) { return control.value; });
    };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * \@howToUse
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use {\@link NgModel} with a
 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgForm = (function (_super) {
    __extends(NgForm, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._submitted = false;
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    Object.defineProperty(NgForm.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        /**
         * @return {?}
         */
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            dir._control = (container.registerControl(dir.name, dir.control));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            var /** @type {?} */ group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ ctrl = (_this.form.get(dir.path));
            ctrl.setValue(value);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgForm.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    NgForm.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? (this.form.get(path)) : this.form;
    };
    return NgForm;
}(ControlContainer));
NgForm.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
NgForm.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = (function () {
    function TemplateDrivenErrors() {
    }
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    return TemplateDrivenErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used as a child of {\@link NgForm} (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 * \@stable
 */
var NgModelGroup = (function (_super) {
    __extends(NgModelGroup, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    return NgModelGroup;
}(AbstractFormGroupDirective));
NgModelGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
];
/**
 * @nocollapse
 */
NgModelGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
NgModelGroup.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelGroup',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
 * to a form control element.
 *
 * The {\@link FormControl} instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * \@howToUse
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional {\@link \@Input}. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated {\@link FormControl} (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in {\@link AbstractControlDirective}.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgModel = (function (_super) {
    __extends(NgModel, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        /**
         * \@internal
         */
        _this._control = new FormControl();
        /**
         * \@internal
         */
        _this._registered = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpControl = function () {
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    /**
     * @return {?}
     */
    NgModel.prototype._isStandalone = function () {
        return !this._parent || (this.options && this.options.standalone);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this._control, this);
        this._control.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
        var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    return NgModel;
}(NgControl));
NgModel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            },] },
];
/**
 * @nocollapse
 */
NgModel.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
NgModel.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelOptions',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = (function () {
    function ReactiveErrors() {
    }
    /**
     * @return {?}
     */
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    return ReactiveErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
 * {\@link FormControlDirective}.
 *
 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
 * it does not require that your {\@link FormControl} instance be part of any parent
 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormControl} instance. See a full list of available properties in
 * {\@link AbstractControl}.
 *
 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
 * or you can set it programmatically later using {\@link AbstractControl.setValue} or
 * {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *  \@stable
 */
var FormControlDirective = (function (_super) {
    __extends(FormControlDirective, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlDirective(validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    return FormControlDirective;
}(NgControl));
FormControlDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
];
/**
 * @nocollapse
 */
FormControlDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControl',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
 * and {\@link FormArrayName} directives.
 *
 * **Set value**: You can set the form's initial value when instantiating the
 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the {\@link FormGroup}'s {\@link AbstractControl.valueChanges} event.  You can also listen to
 * its {\@link AbstractControl.statusChanges} event to be notified when the validation status is
 * re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormGroupDirective = (function (_super) {
    __extends(FormGroupDirective, _super);
    /**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this._submitted = false;
        _this.directives = [];
        _this.form = null;
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addControl = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeControl = function (dir) { remove(this.directives, dir); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var /** @type {?} */ ctrl = (this.form.get(dir.path));
        ctrl.setValue(value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var /** @type {?} */ newCtrl = _this.form.get(dir.path);
            if (dir._control !== newCtrl) {
                cleanUpControl(dir._control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir._control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateValidators = function () {
        var /** @type {?} */ sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([this.form.validator, sync]);
        var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    return FormGroupDirective;
}(ControlContainer));
FormGroupDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
FormGroupDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroup',] },],
    'ngSubmit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function remove(list, el) {
    var /** @type {?} */ index = list.indexOf(el);
    if (index > -1) {
        list.splice(index, 1);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
 * will look for a {\@link FormGroup} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * **Access the group**: You can access the associated {\@link FormGroup} using the
 * {\@link AbstractControl.get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormGroup}, or you can set it programmatically later using
 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormGroupName = (function (_super) {
    __extends(FormGroupName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    return FormGroupName;
}(AbstractFormGroupDirective));
FormGroupName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
];
/**
 * @nocollapse
 */
FormGroupName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroupName',] },],
};
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormArray} you want to link, and
 * will look for a {\@link FormArray} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * **Access the array**: You can access the associated {\@link FormArray} using the
 * {\@link AbstractControl.get} method on the parent {\@link FormGroup}.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormArray}, or you can set the value programmatically later using the
 * {\@link FormArray}'s {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the {\@link FormArray}'s {\@link AbstractControl.valueChanges} event.  You can also
 * listen to its {\@link AbstractControl.statusChanges} event to be notified when the validation
 * status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
 * calling its {\@link FormArray.push} method.
 *  Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormArrayName = (function (_super) {
    __extends(FormArrayName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    };
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.formDirective.getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? (this._parent.formDirective) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return composeAsyncValidators(this._asyncValidators); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    return FormArrayName;
}(ControlContainer));
FormArrayName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
];
/**
 * @nocollapse
 */
FormArrayName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormArrayName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formArrayName',] },],
};
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormControlName; })
};
/**
 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
 * element by name.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the {\@link FormControl} instance you want to
 * link, and will look for a {\@link FormControl} registered with that name in the
 * closest {\@link FormGroup} or {\@link FormArray} above it.
 *
 * **Access the control**: You can access the {\@link FormControl} associated with
 * this directive by using the {\@link AbstractControl.get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
 * See a full list of available properties in {\@link AbstractControl}.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  {\@link FormControl}, or you can set it programmatically later using
 *  {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormControlName = (function (_super) {
    __extends(FormControlName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this._added = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this._control = this.formDirective.addControl(this);
        if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
        }
        this._added = true;
    };
    return FormControlName;
}(NgControl));
FormControlName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
];
/**
 * @nocollapse
 */
FormControlName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControlName',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@stable
 */
var RequiredValidator = (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        /**
         * @return {?}
         */
        get: function () { return this._required; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    RequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.required(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return RequiredValidator;
}());
RequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
RequiredValidator.ctorParameters = function () { return []; };
RequiredValidator.propDecorators = {
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@experimental
 */
var CheckboxRequiredValidator = (function (_super) {
    __extends(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CheckboxRequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.requiredTrue(c) : null;
    };
    return CheckboxRequiredValidator;
}(RequiredValidator));
CheckboxRequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
CheckboxRequiredValidator.ctorParameters = function () { return []; };
/**
 * Provider which adds {@link EmailValidator} to {@link NG_VALIDATORS}.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@experimental
 */
var EmailValidator = (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EmailValidator.prototype.validate = function (c) {
        return this._enabled ? Validators.email(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return EmailValidator;
}());
EmailValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EmailValidator.ctorParameters = function () { return []; };
EmailValidator.propDecorators = {
    'email': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * \@stable
 */
var MinLengthValidator = (function () {
    function MinLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinLengthValidator.prototype.validate = function (c) {
        return this.minlength == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    return MinLengthValidator;
}());
MinLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'minlength ? minlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MinLengthValidator.ctorParameters = function () { return []; };
MinLengthValidator.propDecorators = {
    'minlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `maxlength` attribute.
 *
 * \@stable
 */
var MaxLengthValidator = (function () {
    function MaxLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxLengthValidator.prototype.validate = function (c) {
        return this.maxlength != null ? this._validator(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    return MaxLengthValidator;
}());
MaxLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MaxLengthValidator.ctorParameters = function () { return []; };
MaxLengthValidator.propDecorators = {
    'maxlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 * \@stable
 */
var PatternValidator = (function () {
    function PatternValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
    /**
     * @param {?} fn
     * @return {?}
     */
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    return PatternValidator;
}());
PatternValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            },] },
];
/**
 * @nocollapse
 */
PatternValidator.ctorParameters = function () { return []; };
PatternValidator.propDecorators = {
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
 *
 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
 * forms.
 *
 * \@howToUse
 *
 * To use, inject `FormBuilder` into your component class. You can then call its methods
 * directly.
 *
 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  * **NgModule**: {\@link ReactiveFormsModule}
 *
 * \@stable
 */
var FormBuilder = (function () {
    function FormBuilder() {
    }
    /**
     * Construct a new {\@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {\@link FormGroup} constructor for more details.
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilder.prototype.group = function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var /** @type {?} */ controls = this._reduceControls(controlsConfig);
        var /** @type {?} */ validator = extra != null ? extra['validator'] : null;
        var /** @type {?} */ asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     * @param {?} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * Construct a {\@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     * @param {?} controlsConfig
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        if (validator === void 0) { validator = null; }
        if (asyncValidator === void 0) { asyncValidator = null; }
        var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var /** @type {?} */ controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var /** @type {?} */ value = controlConfig[0];
            var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    return FormBuilder;
}());
FormBuilder.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
FormBuilder.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('4.0.3');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@experimental
 */
var NgNoValidate = (function () {
    function NgNoValidate() {
    }
    return NgNoValidate;
}());
NgNoValidate.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            },] },
];
/**
 * @nocollapse
 */
NgNoValidate.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = (function () {
    function InternalFormsSharedModule() {
    }
    return InternalFormsSharedModule;
}());
InternalFormsSharedModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            },] },
];
/**
 * @nocollapse
 */
InternalFormsSharedModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The ng module for forms.
 * \@stable
 */
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                providers: [RadioControlRegistry],
                exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
FormsModule.ctorParameters = function () { return []; };
/**
 * The ng module for reactive forms.
 * \@stable
 */
var ReactiveFormsModule = (function () {
    function ReactiveFormsModule() {
    }
    return ReactiveFormsModule;
}());
ReactiveFormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                providers: [FormBuilder, RadioControlRegistry],
                exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
ReactiveFormsModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a {@link FormGroup} that
 * consists of {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl}
 * objects can then be used to read information from the form DOM elements.
 *
 * Forms providers are not included in default providers; you must import these providers
 * explicitly.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the forms package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(122);
__webpack_require__(51);
__webpack_require__(49);
var platform_browser_dynamic_1 = __webpack_require__(48);
var main_module_1 = __webpack_require__(101);
var core_1 = __webpack_require__(4);
if (false) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(main_module_1.MainModule).then(function (MODULE_REF) { if (false) {
    module["hot"]["accept"]();
    if (MODULE_REF.instance["hmrOnInit"]) {
        module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
        module["hot"]["apply"](function (status) { MODULE_REF.instance["hmrOnStatus"](status); });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
        module["hot"]["check"](function (err, outdatedModules) { MODULE_REF.instance["hmrOnCheck"](err, outdatedModules); });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
        module["hot"]["decline"](function (dependencies) { MODULE_REF.instance["hmrOnDecline"](dependencies); });
    }
    module["hot"]["dispose"](function (store) { MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store); MODULE_REF.destroy(); MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store); });
} return MODULE_REF; });


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(12);
var core_1 = __webpack_require__(4);
var AppComponent = (function () {
    function AppComponent() {
        this.logoUrl = __webpack_require__(110);
        this.url = 'https://servicestack.net/vs-templates/AngularApp';
    }
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n    <div mdl class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n\n        <app-header></app-header>\n\n        <main class=\"mdl-layout__content\">\n\n            <div class=\"mdl-layout__tab-panel is-active\" id=\"overview\">\n                <router-outlet></router-outlet>\n            </div>\n\n            <h4 style=\"text-align: center\">\n                <img [src]=\"logoUrl\" />\n                <a [href]=\"url\">Learn about this Angular4 VS.NET template</a>\n            </h4>\n\n            <app-footer></app-footer>\n\n        </main>\n    </div>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ })

},[387]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZHRvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL3RlY2hub2xvZ3kvdGVjaG5vbG9neS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuZGVlcF9wdXJwbGUtcGluay5taW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwcC9ob21lL2hlbGxvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8uY3NzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5zY3NzIiwid2VicGFjazovLy8uL34vdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy90YWJzLmpzIiwid2VicGFjazovLy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vL21kbENvbXBvbmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL3JBRi5qcyIsIndlYnBhY2s6Ly8vYnV0dG9uLmpzIiwid2VicGFjazovLy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vaWNvbi10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vL21lbnUuanMiLCJ3ZWJwYWNrOi8vL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy9yYWRpby5qcyIsIndlYnBhY2s6Ly8vc2xpZGVyLmpzIiwid2VicGFjazovLy9zbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vc3dpdGNoLmpzIiwid2VicGFjazovLy90ZXh0ZmllbGQuanMiLCJ3ZWJwYWNrOi8vL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vL2RhdGEtdGFibGUuanMiLCJ3ZWJwYWNrOi8vL3JpcHBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3V0aWxzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy92YWxpZGF0b3JzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbm9ybWFsaXplX3ZhbGlkYXRvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbnVtYmVyX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19jb250cm9sLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYW5nZV92YWx1ZV9hY2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9zaGFyZWQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL21vZGVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19mb3JtLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9lcnJvcl9leGFtcGxlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvdGVtcGxhdGVfZHJpdmVuX2Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX21vZGVsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX25hbWUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3JtX2J1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy92ZXJzaW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19ub192YWxpZGF0ZV9kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZm9ybV9wcm92aWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3Jtcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvcHVibGljX2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJNYXRlcmlhbFRhYiIsInRhYiIsImN0eCIsImVsZW1lbnRfIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJDc3NDbGFzc2VzXyIsIk1ETF9KU19SSVBQTEVfRUZGRUNUIiwicmlwcGxlQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwiTURMX1JJUFBMRV9DT05UQUlORVIiLCJyaXBwbGUiLCJNRExfUklQUExFIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImdldEF0dHJpYnV0ZSIsImNoYXJBdCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsInNwbGl0IiwicGFuZWwiLCJxdWVyeVNlbGVjdG9yIiwicmVzZXRUYWJTdGF0ZV8iLCJyZXNldFBhbmVsU3RhdGVfIiwiQUNUSVZFX0NMQVNTIiwiTWF0ZXJpYWxMYXlvdXRUYWIiLCJ0YWJzIiwicGFuZWxzIiwibGF5b3V0Iiwic2VsZWN0VGFiIiwiY29udGVudF8iLCJJU19BQ1RJVkUiLCJ0YWJCYXJfIiwiSlNfUklQUExFX0VGRkVDVCIsIlJJUFBMRV9DT05UQUlORVIiLCJSSVBQTEUiLCJUQUJfTUFOVUFMX1NXSVRDSCIsInNob3ciLCJjb21wb25lbnRIYW5kbGVyIiwidXBncmFkZURvbSIsIm9wdEpzQ2xhc3MiLCJvcHRDc3NDbGFzcyIsInVwZ3JhZGVFbGVtZW50IiwiZWxlbWVudCIsInVwZ3JhZGVFbGVtZW50cyIsImVsZW1lbnRzIiwidXBncmFkZUFsbFJlZ2lzdGVyZWQiLCJyZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2siLCJqc0NsYXNzIiwiY2FsbGJhY2siLCJyZWdpc3RlciIsImNvbmZpZyIsImRvd25ncmFkZUVsZW1lbnRzIiwibm9kZXMiLCJmaW5kUmVnaXN0ZXJlZENsYXNzXyIsIm5hbWUiLCJvcHRSZXBsYWNlIiwiaSIsInJlZ2lzdGVyZWRDb21wb25lbnRzXyIsImxlbmd0aCIsImNsYXNzTmFtZSIsImdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8iLCJkYXRhVXBncmFkZWQiLCJpc0VsZW1lbnRVcGdyYWRlZF8iLCJ1cGdyYWRlZExpc3QiLCJpbmRleE9mIiwiY3JlYXRlRXZlbnRfIiwiZXZlbnRUeXBlIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJ3aW5kb3ciLCJDdXN0b21FdmVudCIsImV2IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJ1cGdyYWRlRG9tSW50ZXJuYWwiLCJjc3NDbGFzcyIsInJlZ2lzdGVyZWRDbGFzcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuIiwidXBncmFkZUVsZW1lbnRJbnRlcm5hbCIsIkVsZW1lbnQiLCJFcnJvciIsInVwZ3JhZGluZ0V2IiwiZGlzcGF0Y2hFdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjbGFzc2VzVG9VcGdyYWRlIiwicHVzaCIsImZvckVhY2giLCJjb21wb25lbnQiLCJzZXRBdHRyaWJ1dGUiLCJqb2luIiwiaW5zdGFuY2UiLCJjbGFzc0NvbnN0cnVjdG9yIiwiY29tcG9uZW50Q29uZmlnUHJvcGVydHlfIiwiY3JlYXRlZENvbXBvbmVudHNfIiwiaiIsIm0iLCJjYWxsYmFja3MiLCJ3aWRnZXQiLCJ1cGdyYWRlZEV2IiwidXBncmFkZUVsZW1lbnRzSW50ZXJuYWwiLCJBcnJheSIsImlzQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJIVE1MRWxlbWVudCIsImNoaWxkcmVuIiwicmVnaXN0ZXJJbnRlcm5hbCIsIndpZGdldE1pc3NpbmciLCJuZXdDb25maWciLCJjb25zdHJ1Y3RvciIsImNsYXNzQXNTdHJpbmciLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJmb3VuZCIsInJlZ2lzdGVyVXBncmFkZWRDYWxsYmFja0ludGVybmFsIiwicmVnQ2xhc3MiLCJ1cGdyYWRlQWxsUmVnaXN0ZXJlZEludGVybmFsIiwiZGVjb25zdHJ1Y3RDb21wb25lbnRJbnRlcm5hbCIsImNvbXBvbmVudEluZGV4Iiwic3BsaWNlIiwidXBncmFkZXMiLCJjb21wb25lbnRQbGFjZSIsImRvd25ncmFkZU5vZGVzSW50ZXJuYWwiLCJkb3duZ3JhZGVOb2RlIiwibm9kZSIsImZpbHRlciIsIk5vZGVMaXN0IiwiTm9kZSIsIkNvbXBvbmVudENvbmZpZ1B1YmxpYyIsIkNvbXBvbmVudENvbmZpZyIsIkNvbXBvbmVudCIsImRvY3VtZW50RWxlbWVudCIsIkRhdGUiLCJub3ciLCJnZXRUaW1lIiwidmVuZG9ycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInZwIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibGFzdFRpbWUiLCJuZXh0VGltZSIsIk1hdGgiLCJtYXgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiTWF0ZXJpYWxCdXR0b24iLCJ0aGlzIiwiaW5pdCIsIkNvbnN0YW50XyIsIlJJUFBMRV9FRkZFQ1QiLCJibHVySGFuZGxlcl8iLCJldmVudCIsImJsdXIiLCJkaXNhYmxlIiwiZGlzYWJsZWQiLCJlbmFibGUiLCJyaXBwbGVFbGVtZW50XyIsImJvdW5kUmlwcGxlQmx1ckhhbmRsZXIiLCJiaW5kIiwiYm91bmRCdXR0b25CbHVySGFuZGxlciIsIk1hdGVyaWFsQ2hlY2tib3giLCJUSU5ZX1RJTUVPVVQiLCJJTlBVVCIsIkJPWF9PVVRMSU5FIiwiRk9DVVNfSEVMUEVSIiwiVElDS19PVVRMSU5FIiwiUklQUExFX0lHTk9SRV9FVkVOVFMiLCJSSVBQTEVfQ0VOVEVSIiwiSVNfRk9DVVNFRCIsIklTX0RJU0FCTEVEIiwiSVNfQ0hFQ0tFRCIsIklTX1VQR1JBREVEIiwib25DaGFuZ2VfIiwidXBkYXRlQ2xhc3Nlc18iLCJvbkZvY3VzXyIsIm9uQmx1cl8iLCJyZW1vdmUiLCJvbk1vdXNlVXBfIiwiYmx1cl8iLCJjaGVja0Rpc2FibGVkIiwiY2hlY2tUb2dnbGVTdGF0ZSIsImlucHV0RWxlbWVudF8iLCJjaGVja2VkIiwiY2hlY2siLCJ1bmNoZWNrIiwiYm94T3V0bGluZSIsInRpY2tDb250YWluZXIiLCJ0aWNrT3V0bGluZSIsInJpcHBsZUNvbnRhaW5lckVsZW1lbnRfIiwiYm91bmRSaXBwbGVNb3VzZVVwIiwiYm91bmRJbnB1dE9uQ2hhbmdlIiwiYm91bmRJbnB1dE9uRm9jdXMiLCJib3VuZElucHV0T25CbHVyIiwiYm91bmRFbGVtZW50TW91c2VVcCIsIk1hdGVyaWFsSWNvblRvZ2dsZSIsImJvdW5kRWxlbWVudE9uTW91c2VVcCIsIk1hdGVyaWFsTWVudSIsIlRSQU5TSVRJT05fRFVSQVRJT05fU0VDT05EUyIsIlRSQU5TSVRJT05fRFVSQVRJT05fRlJBQ1RJT04iLCJDTE9TRV9USU1FT1VUIiwiS2V5Y29kZXNfIiwiRU5URVIiLCJFU0NBUEUiLCJTUEFDRSIsIlVQX0FSUk9XIiwiRE9XTl9BUlJPVyIsIkNPTlRBSU5FUiIsIk9VVExJTkUiLCJJVEVNIiwiSVRFTV9SSVBQTEVfQ09OVEFJTkVSIiwiSVNfVklTSUJMRSIsIklTX0FOSU1BVElORyIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJVTkFMSUdORUQiLCJjb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJjb250YWluZXJfIiwib3V0bGluZSIsIm91dGxpbmVfIiwiZm9yRWxJZCIsImZvckVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JFbGVtZW50XyIsImhhbmRsZUZvckNsaWNrXyIsImhhbmRsZUZvcktleWJvYXJkRXZlbnRfIiwiaXRlbXMiLCJib3VuZEl0ZW1LZXlkb3duXyIsImhhbmRsZUl0ZW1LZXlib2FyZEV2ZW50XyIsImJvdW5kSXRlbUNsaWNrXyIsImhhbmRsZUl0ZW1DbGlja18iLCJ0YWJJbmRleCIsImV2dCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmb3JSZWN0Iiwic3R5bGUiLCJyaWdodCIsInRvcCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImxlZnQiLCJvZmZzZXRMZWZ0IiwiYm90dG9tIiwidG9nZ2xlIiwia2V5Q29kZSIsImZvY3VzIiwiY3VycmVudEluZGV4IiwidGFyZ2V0IiwiTW91c2VFdmVudCIsImNsaWNrIiwiaGlkZSIsImhhc0F0dHJpYnV0ZSIsInN0b3BQcm9wYWdhdGlvbiIsImNsb3NpbmdfIiwiYXBwbHlDbGlwXyIsImhlaWdodCIsIndpZHRoIiwiY2xpcCIsInJlbW92ZUFuaW1hdGlvbkVuZExpc3RlbmVyXyIsImFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXyIsInRyYW5zaXRpb25EdXJhdGlvbiIsIml0ZW1EZWxheSIsInRyYW5zaXRpb25EZWxheSIsInBhcmVudE5vZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlUHJvcGVydHkiLCJNYXRlcmlhbFByb2dyZXNzIiwiSU5ERVRFUk1JTkFURV9DTEFTUyIsInNldFByb2dyZXNzIiwicCIsInByb2dyZXNzYmFyXyIsInNldEJ1ZmZlciIsImJ1ZmZlcmJhcl8iLCJhdXhiYXJfIiwiZWwiLCJNYXRlcmlhbFJhZGlvIiwiSlNfUkFESU8iLCJSQURJT19CVE4iLCJSQURJT19PVVRFUl9DSVJDTEUiLCJSQURJT19JTk5FUl9DSVJDTEUiLCJyYWRpb3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnV0dG9uIiwiYnRuRWxlbWVudF8iLCJvbk1vdXNldXBfIiwiYm91bmRDaGFuZ2VIYW5kbGVyXyIsImJvdW5kRm9jdXNIYW5kbGVyXyIsImJvdW5kQmx1ckhhbmRsZXJfIiwiYm91bmRNb3VzZVVwSGFuZGxlcl8iLCJvdXRlckNpcmNsZSIsImlubmVyQ2lyY2xlIiwiTWF0ZXJpYWxTbGlkZXIiLCJpc0lFXyIsIm1zUG9pbnRlckVuYWJsZWQiLCJJRV9DT05UQUlORVIiLCJTTElERVJfQ09OVEFJTkVSIiwiQkFDS0dST1VORF9GTEVYIiwiQkFDS0dST1VORF9MT1dFUiIsIkJBQ0tHUk9VTkRfVVBQRVIiLCJJU19MT1dFU1RfVkFMVUUiLCJvbklucHV0XyIsInVwZGF0ZVZhbHVlU3R5bGVzXyIsIm9uQ29udGFpbmVyTW91c2VEb3duXyIsIm5ld0V2ZW50IiwiYnV0dG9ucyIsImNsaWVudFgiLCJjbGllbnRZIiwieSIsImZyYWN0aW9uIiwidmFsdWUiLCJtaW4iLCJiYWNrZ3JvdW5kTG93ZXJfIiwiZmxleCIsIndlYmtpdEZsZXgiLCJiYWNrZ3JvdW5kVXBwZXJfIiwiY2hhbmdlIiwiY29udGFpbmVySUUiLCJiYWNrZ3JvdW5kRmxleCIsImJvdW5kSW5wdXRIYW5kbGVyIiwiYm91bmRDaGFuZ2VIYW5kbGVyIiwiYm91bmRNb3VzZVVwSGFuZGxlciIsImJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlciIsIk1hdGVyaWFsU25hY2tiYXIiLCJ0ZXh0RWxlbWVudF8iLCJjc3NDbGFzc2VzXyIsIk1FU1NBR0UiLCJhY3Rpb25FbGVtZW50XyIsIkFDVElPTiIsImFjdGl2ZSIsImFjdGlvbkhhbmRsZXJfIiwidW5kZWZpbmVkIiwibWVzc2FnZV8iLCJhY3Rpb25UZXh0XyIsInF1ZXVlZE5vdGlmaWNhdGlvbnNfIiwic2V0QWN0aW9uSGlkZGVuXyIsIkFOSU1BVElPTl9MRU5HVEgiLCJTTkFDS0JBUiIsIkFDVElWRSIsImRpc3BsYXlTbmFja2Jhcl8iLCJ0ZXh0Q29udGVudCIsImNsZWFudXBfIiwidGltZW91dF8iLCJzaG93U25hY2tiYXIiLCJkYXRhIiwiY2hlY2tRdWV1ZV8iLCJzaGlmdCIsIkJvb2xlYW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJNYXRlcmlhbFNwaW5uZXIiLCJNRExfU1BJTk5FUl9MQVlFUl9DT1VOVCIsIk1ETF9TUElOTkVSX0xBWUVSIiwiTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVIiLCJNRExfU1BJTk5FUl9DSVJDTEUiLCJNRExfU1BJTk5FUl9HQVBfUEFUQ0giLCJNRExfU1BJTk5FUl9MRUZUIiwiTURMX1NQSU5ORVJfUklHSFQiLCJjcmVhdGVMYXllciIsImluZGV4IiwibGF5ZXIiLCJsZWZ0Q2xpcHBlciIsImdhcFBhdGNoIiwicmlnaHRDbGlwcGVyIiwiY2lyY2xlT3duZXJzIiwiY2lyY2xlIiwic3RvcCIsInN0YXJ0IiwiTWF0ZXJpYWxTd2l0Y2giLCJUUkFDSyIsIlRIVU1CIiwib24iLCJvZmYiLCJ0cmFjayIsInRodW1iIiwiZm9jdXNIZWxwZXIiLCJib3VuZEZvY3VzSGFuZGxlciIsImJvdW5kQmx1ckhhbmRsZXIiLCJNYXRlcmlhbFRhYnMiLCJUQUJfQ0xBU1MiLCJQQU5FTF9DTEFTUyIsIlVQR1JBREVEX0NMQVNTIiwiTURMX0pTX1JJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUyIsImluaXRUYWJzXyIsInRhYnNfIiwicGFuZWxzXyIsImsiLCJNYXRlcmlhbFRleHRmaWVsZCIsIm1heFJvd3MiLCJOT19NQVhfUk9XUyIsIk1BWF9ST1dTX0FUVFJJQlVURSIsIkxBQkVMIiwiSVNfRElSVFkiLCJJU19JTlZBTElEIiwiSEFTX1BMQUNFSE9MREVSIiwib25LZXlEb3duXyIsImN1cnJlbnRSb3dDb3VudCIsIm9uUmVzZXRfIiwiY2hlY2tWYWxpZGl0eSIsImNoZWNrRGlydHkiLCJjaGVja0ZvY3VzIiwiaW5wdXRfIiwidmFsaWRpdHkiLCJ2YWxpZCIsImxhYmVsXyIsInBhcnNlSW50IiwiaXNOYU4iLCJib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyIiwiYm91bmRSZXNldEhhbmRsZXIiLCJib3VuZEtleURvd25IYW5kbGVyIiwiaW52YWxpZCIsIk1hdGVyaWFsVG9vbHRpcCIsIkJPVFRPTSIsIkxFRlQiLCJSSUdIVCIsIlRPUCIsImhhbmRsZU1vdXNlRW50ZXJfIiwicHJvcHMiLCJtYXJnaW5MZWZ0Iiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5Ub3AiLCJoaWRlVG9vbHRpcF8iLCJib3VuZE1vdXNlRW50ZXJIYW5kbGVyIiwiYm91bmRNb3VzZUxlYXZlQW5kU2Nyb2xsSGFuZGxlciIsIk1hdGVyaWFsTGF5b3V0IiwiTUFYX1dJRFRIIiwiVEFCX1NDUk9MTF9QSVhFTFMiLCJSRVNJWkVfVElNRU9VVCIsIk1FTlVfSUNPTiIsIkNIRVZST05fTEVGVCIsIkNIRVZST05fUklHSFQiLCJNb2RlXyIsIlNUQU5EQVJEIiwiU0VBTUVEIiwiV0FURVJGQUxMIiwiU0NST0xMIiwiSEVBREVSIiwiRFJBV0VSIiwiQ09OVEVOVCIsIkRSQVdFUl9CVE4iLCJJQ09OIiwiSEVBREVSX1NFQU1FRCIsIkhFQURFUl9XQVRFUkZBTEwiLCJIRUFERVJfU0NST0xMIiwiRklYRURfSEVBREVSIiwiT0JGVVNDQVRPUiIsIlRBQl9CQVIiLCJUQUJfQ09OVEFJTkVSIiwiVEFCIiwiVEFCX0JBUl9CVVRUT04iLCJUQUJfQkFSX0xFRlRfQlVUVE9OIiwiVEFCX0JBUl9SSUdIVF9CVVRUT04iLCJQQU5FTCIsIkhBU19EUkFXRVIiLCJIQVNfVEFCUyIsIkhBU19TQ1JPTExJTkdfSEVBREVSIiwiQ0FTVElOR19TSEFET1ciLCJJU19DT01QQUNUIiwiSVNfU01BTExfU0NSRUVOIiwiSVNfRFJBV0VSX09QRU4iLCJPTl9MQVJHRV9TQ1JFRU4iLCJPTl9TTUFMTF9TQ1JFRU4iLCJjb250ZW50U2Nyb2xsSGFuZGxlcl8iLCJoZWFkZXJfIiwiaGVhZGVyVmlzaWJsZSIsInNjcm9sbFRvcCIsImtleWJvYXJkRXZlbnRIYW5kbGVyXyIsImRyYXdlcl8iLCJ0b2dnbGVEcmF3ZXIiLCJzY3JlZW5TaXplSGFuZGxlcl8iLCJzY3JlZW5TaXplTWVkaWFRdWVyeV8iLCJtYXRjaGVzIiwib2JmdXNjYXRvcl8iLCJkcmF3ZXJUb2dnbGVIYW5kbGVyXyIsInR5cGUiLCJoZWFkZXJUcmFuc2l0aW9uRW5kSGFuZGxlcl8iLCJoZWFkZXJDbGlja0hhbmRsZXJfIiwidGFiQmFyIiwiZHJhd2VyQnV0dG9uIiwiZm9jdXNlZEVsZW1lbnQiLCJkaXJlY3RDaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJudW1DaGlsZHJlbiIsImMiLCJjaGlsZCIsInBlcnNpc3RlZCIsIm92ZXJmbG93WSIsIm1vZGUiLCJkcmF3ZXJCdXR0b25JY29uIiwiaW5uZXJIVE1MIiwiZmlyc3RDaGlsZCIsIm9iZnVzY2F0b3IiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ0YWJDb250YWluZXIiLCJsZWZ0QnV0dG9uIiwibGVmdEJ1dHRvbkljb24iLCJzY3JvbGxMZWZ0IiwicmlnaHRCdXR0b24iLCJyaWdodEJ1dHRvbkljb24iLCJ0YWJVcGRhdGVIYW5kbGVyIiwic2Nyb2xsV2lkdGgiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwicmVzaXplVGltZW91dElkXyIsIk1hdGVyaWFsRGF0YVRhYmxlIiwiREFUQV9UQUJMRSIsIlNFTEVDVEFCTEUiLCJTRUxFQ1RfRUxFTUVOVCIsIklTX1NFTEVDVEVEIiwic2VsZWN0Um93XyIsImNoZWNrYm94Iiwicm93Iiwib3B0X3Jvd3MiLCJjcmVhdGVDaGVja2JveF8iLCJsYWJlbCIsImxhYmVsQ2xhc3NlcyIsImZpcnN0SGVhZGVyIiwiYm9keVJvd3MiLCJmb290Um93cyIsInJvd3MiLCJjb25jYXQiLCJ0aCIsImhlYWRlckNoZWNrYm94IiwiZmlyc3RDZWxsIiwidGQiLCJub2RlTmFtZSIsInRvVXBwZXJDYXNlIiwicm93Q2hlY2tib3giLCJNYXRlcmlhbFJpcHBsZSIsIklOSVRJQUxfU0NBTEUiLCJJTklUSUFMX1NJWkUiLCJJTklUSUFMX09QQUNJVFkiLCJGSU5BTF9PUEFDSVRZIiwiRklOQUxfU0NBTEUiLCJSSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFMiLCJkb3duSGFuZGxlcl8iLCJib3VuZEhlaWdodCIsImJvdW5kV2lkdGgiLCJyaXBwbGVTaXplXyIsInNxcnQiLCJpZ25vcmluZ01vdXNlRG93bl8iLCJmcmFtZUNvdW50IiwiZ2V0RnJhbWVDb3VudCIsInNldEZyYW1lQ291bnQiLCJ4IiwiYm91bmQiLCJjdXJyZW50VGFyZ2V0Iiwicm91bmQiLCJ0b3VjaGVzIiwic2V0UmlwcGxlWFkiLCJzZXRSaXBwbGVTdHlsZXMiLCJhbmltRnJhbWVIYW5kbGVyIiwidXBIYW5kbGVyXyIsImRldGFpbCIsInJlY2VudGVyaW5nIiwiZnJhbWVDb3VudF8iLCJ4XyIsInlfIiwiYm91bmREb3duSGFuZGxlciIsImJvdW5kVXBIYW5kbGVyIiwiZkMiLCJnZXRSaXBwbGVFbGVtZW50IiwibmV3WCIsIm5ld1kiLCJ0cmFuc2Zvcm1TdHJpbmciLCJzY2FsZSIsInNpemUiLCJvZmZzZXQiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsIkV4YW1wbGVzIiwicmVzb2x2ZWRQcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBTUY7SUFBQTtJQUVBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUM7QUFGWSxzQ0FBYTtBQUkxQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCO0lBQUE7SUFLQSxDQUFDO0lBRkcsOEJBQWMsR0FBZCxjQUFtQixNQUFNLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsMkJBQVcsR0FBWCxjQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNyQyxZQUFDO0FBQUQsQ0FBQztBQUxZLHNCQUFLOzs7Ozs7Ozs7Ozs7QUM1QmxCLG9DQUF5QztBQUN6QyxpREFBMEQ7QUFDMUQsc0NBQTZDO0FBQzdDLHFDQUEyQztBQUMzQyx1Q0FBdUQ7QUFFdkQsOENBQStDO0FBQy9DLHdDQUFrRDtBQUNsRCx3Q0FBa0Q7QUFDbEQsMkNBQXFEO0FBRXJELHNDQUFxQztBQUVyQyxJ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QUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxVQUFVLElBQU0sRUFBRSxDQUFDLENBQUMsS0FBYSxDQUFDLENBQUMsQ0FBQztJQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUFLLENBQUM7SUFBSyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFTLE1BQU0sSUFBWSxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQU8sQ0FBQyxDQUFDLENBQUM7SUFBSyxDQUFDO0lBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBUyxHQUFHLEVBQUUsZUFBZSxJQUFZLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQU8sQ0FBQyxDQUFDLENBQUM7SUFBSyxDQUFDO0lBQUssRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBUyxZQUFZLElBQVksVUFBVSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFPLENBQUMsQ0FBQyxDQUFDO0lBQUssQ0FBQztJQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFTLEtBQUssSUFBVSxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBTyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUssQ0FBQyxDQUFDLENBQUM7QUFBRyxDQUFDLENBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNoQjdrQyxvQ0FBMEM7QUEwQjFDO0lBSUk7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFPLENBQUMsR0FBdUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLEdBQUcsa0RBQWtELENBQUM7SUFDbEUsQ0FBQztJQVBRLFlBQVk7UUF4QnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsb2tCQW9CVDtTQUNKLENBQUM7O09BQ1csWUFBWSxDQVF4QjtJQUFELG1CQUFDO0NBQUE7QUFSWSxvQ0FBWSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogT3B0aW9uczpcbkRhdGU6IDIwMTctMDEtMDEgMTI6MDA6MDBcblZlcnNpb246IDRcblRpcDogVG8gb3ZlcnJpZGUgYSBEVE8gb3B0aW9uLCByZW1vdmUgXCIvL1wiIHByZWZpeCBiZWZvcmUgdXBkYXRpbmdcbkJhc2VVcmw6IGh0dHA6Ly9sb2NhbGhvc3Q6NTYxMDkvXG5cbi8vR2xvYmFsTmFtZXNwYWNlOiBcbkV4cG9ydEFzVHlwZXM6IFRydWVcbi8vTWFrZVByb3BlcnRpZXNPcHRpb25hbDogVHJ1ZVxuLy9BZGRTZXJ2aWNlU3RhY2tUeXBlczogVHJ1ZVxuLy9BZGRSZXNwb25zZVN0YXR1czogRmFsc2Vcbi8vQWRkSW1wbGljaXRWZXJzaW9uOiBcbi8vQWRkRGVzY3JpcHRpb25Bc0NvbW1lbnRzOiBUcnVlXG4vL0luY2x1ZGVUeXBlczogXG4vL0V4Y2x1ZGVUeXBlczogXG4vL0RlZmF1bHRJbXBvcnRzOiBcbiovXG5cblxuZXhwb3J0IGludGVyZmFjZSBJUmV0dXJuPFQ+IHtcbn1cblxuZXhwb3J0IGNsYXNzIEhlbGxvUmVzcG9uc2Uge1xuICAgIHJlc3VsdDogc3RyaW5nO1xufVxuXG4vLyBAUm91dGUoXCIvaGVsbG9cIilcbi8vIEBSb3V0ZShcIi9oZWxsby97TmFtZX1cIilcbmV4cG9ydCBjbGFzcyBIZWxsbyBpbXBsZW1lbnRzIElSZXR1cm48SGVsbG9SZXNwb25zZT5cbntcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3JlYXRlUmVzcG9uc2UoKSB7IHJldHVybiBuZXcgSGVsbG9SZXNwb25zZSgpOyB9XG4gICAgZ2V0VHlwZU5hbWUoKSB7IHJldHVybiBcIkhlbGxvXCI7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvZHRvcy50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2hlYWRlcic7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9mb290ZXInO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2FwcC9hcHAubW9kdWxlJztcblxuaW1wb3J0IHsgTURMIH0gZnJvbSAnLi9zaGFyZWQvdXRpbHMnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnbWFpbi8wJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1ETCxcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgICAgIEZvb3RlckNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICAgICAgQXBwTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWFpbk1vZHVsZSB7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L0Bhbmd1bGFyY2xhc3MvaG1yLWxvYWRlciEuL3NyYy9tYWluLm1vZHVsZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMnO1xuaW1wb3J0IHsgSGVsbG8gfSBmcm9tICcuLi8uLi8uLi9kdG9zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdoZWxsbycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaGVsbG8uaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vaGVsbG8uY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEhlbGxvQ29tcG9uZW50IHtcbiAgICByZXN1bHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5hbWVDaGFuZ2VkKHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbmFtZUNoYW5nZWQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgcmVxID0gbmV3IEhlbGxvKCk7XG4gICAgICAgICAgICByZXEubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB2YXIgciA9IGF3YWl0IGNsaWVudC5nZXQocmVxKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gci5yZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2RyZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8udHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlbGxvQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxsbyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLS1jZW50ZXIgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmcgbWRsLXNoYWRvdy0tMmRwXCI+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwic2VjdGlvbl9fcGxheS1idG4gbWRsLWNlbGwgbWRsLWNlbGwtLTMtY29sLWRlc2t0b3AgbWRsLWNlbGwtLTItY29sLXRhYmxldCBtZGwtY2VsbC0tNC1jb2wtcGhvbmUgbWRsLWNvbG9yLS10ZWFsLTEwMCBtZGwtY29sb3ItdGV4dC0td2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cGxheV9jaXJjbGVfZmlsbGVkPC9pPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZCBtZGwtY2VsbCBtZGwtY2VsbC0tOS1jb2wtZGVza3RvcCBtZGwtY2VsbC0tNi1jb2wtdGFibGV0IG1kbC1jZWxsLS00LWNvbC1waG9uZVwiPlxuXG4gICAgICAgICAgICAgICAgPGhlbGxvIFtuYW1lXT1cIm5hbWVcIj48L2hlbGxvPiBcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2RvY3Muc2VydmljZXN0YWNrLm5ldC90eXBlc2NyaXB0LWFkZC1zZXJ2aWNlc3RhY2stcmVmZXJlbmNlXCIgY2xhc3M9XCJtZGwtYnV0dG9uXCI+TW9yZSBpbmZvIG9uIFR5cGVTY3JpcHQgU2VydmljZVN0YWNrIFJlZmVyZW5jZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaGVhZGluZzogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gXCJIb21lXCI7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoeCA9PiB0aGlzLm5hbWUgPSB4Lm5hbWUpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaG9tZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Byb2R1Y3RzJywgXG4gICAgdGVtcGxhdGU6cmVxdWlyZSgnLi9wcm9kdWN0cy5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9wcm9kdWN0cy5zY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzQ29tcG9uZW50IHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gXCJQcm9kdWN0c1wiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL21vZHVsZXMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGVjaG5vbG9neScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLS1jZW50ZXIgbWRsLWdyaWQgbWRsLWdyaWQtLW5vLXNwYWNpbmcgbWRsLXNoYWRvdy0tMmRwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmQgbWRsLWNlbGwgbWRsLWNlbGwtLTEyLWNvbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND57e2hlYWRpbmd9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIERvbG9yZSBleCBkZXNlcnVudCBhdXRlIGZ1Z2lhdCBhdXRlIG51bGxhIGVhIHN1bnQgYWxpcXVhIG5pc2kgY3VwaWRhdGF0IGV1LiBcbiAgICAgICAgICAgICAgICAgICAgTm9zdHJ1ZCBpbiBsYWJvcmlzIGxhYm9yZSBuaXNpIGFtZXQgZG8gZG9sb3IgZXUgZnVnaWF0IGNvbnNlY3RldHVyIGVsaXQgY2lsbHVtIGVzc2UuIFxuICAgICAgICAgICAgICAgICAgICBQYXJpYXR1ciBvY2NhZWNhdCBuaXNpIGxhYm9yaXMgdGVtcG9yIGxhYm9yaXMgZWl1c21vZCBxdWkgaWQgTG9yZW0gZXNzZSBjb21tb2RvIGluLiBcbiAgICAgICAgICAgICAgICAgICAgRXhlcmNpdGF0aW9uIGF1dGUgZG9sb3JlIGRlc2VydW50IGN1bHBhIGNvbnNlcXVhdCBlbGl0IGxhYm9yZSBpbmNpZGlkdW50IGVsaXQgYW5pbS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWNhcmRfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm1kbC1idXR0b25cIj5SZWFkIG91ciBmZWF0dXJlczwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZWNobm9sb2d5Q29tcG9uZW50IHtcbiAgICBoZWFkaW5nOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gXCJUZWNobm9sb2d5XCI7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvbW9kdWxlcy9hcHAvdGVjaG5vbG9neS90ZWNobm9sb2d5LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uLS1mb290ZXIgbWRsLWdyaWRcIj48L3NlY3Rpb24+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLW1pZGRsZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0tZHJvcC1kb3duLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1oZWFkaW5nXCI+RmVhdHVyZXM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWxpbmstbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlRlcm1zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5QYXJ0bmVyczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VXBkYXRlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWRyb3AtZG93bi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0taGVhZGluZy1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0taGVhZGluZ1wiPkRldGFpbHM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWxpbmstbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U3BlYzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VG9vbHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlJlc291cmNlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWRyb3AtZG93bi1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0taGVhZGluZy1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm1kbC1tZWdhLWZvb3Rlci0taGVhZGluZ1wiPlRlY2hub2xvZ3k8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWxpbmstbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SG93IGl0IHdvcmtzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5QYXR0ZXJuczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VXNhZ2U8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2R1Y3RzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250cmFjdHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLW1lZ2EtZm9vdGVyLS1kcm9wLWRvd24tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWhlYWRpbmctY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWhlYWRpbmdcIj5GQVE8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWxpbmstbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UXVlc3Rpb25zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BbnN3ZXJzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0IHVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWJvdHRvbS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgIE1vcmUgSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtZGwtbWVnYS1mb290ZXItLWxpbmstbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TZXJ2aWNlU3RhY2svU2VydmljZVN0YWNrVlNcIj5TZXJ2aWNlU3RhY2sgVlMuTkVUIFRlbXBsYXRlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vQGFuZ3VsYXJjbGFzcy9obXItbG9hZGVyIS4vc3JjL3NoYXJlZC9mb290ZXIudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuLi9tb2R1bGVzL2FwcC9hcHAubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibWRsLWxheW91dF9faGVhZGVyIG1kbC1sYXlvdXRfX2hlYWRlci0tc2Nyb2xsIG1kbC1jb2xvci0tcHJpbWFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXQtLWxhcmdlLXNjcmVlbi1vbmx5IG1kbC1sYXlvdXRfX2hlYWRlci1yb3dcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LS1sYXJnZS1zY3JlZW4tb25seSBtZGwtbGF5b3V0X19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICAgPGgzPnt7dGl0bGV9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGwtbGF5b3V0LS1sYXJnZS1zY3JlZW4tb25seSBtZGwtbGF5b3V0X19oZWFkZXItcm93XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRsLWxheW91dF9fdGFiLWJhciBtZGwtanMtcmlwcGxlLWVmZmVjdCBtZGwtY29sb3ItLXByaW1hcnktZGFya1wiPlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHJvdXRlIG9mIHJvdXRlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSAqbmdJZj1cInJvdXRlLmRhdGFcIiBjbGFzcz1cIm1kbC1sYXlvdXRfX3RhYlwiIFtjbGFzcy5pcy1hY3RpdmVdPVwiaXNBY3RpdmUocm91dGUucGF0aClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7cm91dGUucGF0aH19XCI+e3tyb3V0ZS5kYXRhLnRpdGxlfX08L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1mYWIgbWRsLWpzLXJpcHBsZS1lZmZlY3QgbWRsLWJ1dHRvbi0tY29sb3JlZCBtZGwtc2hhZG93LS00ZHAgbWRsLWNvbG9yLS1hY2NlbnRcIiBpZD1cImFkZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPmFkZDwvaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPkFkZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gICAgdGl0bGUgPSAnQ2FyZFByb1dlYnNpdGUnO1xuICAgIHJvdXRlcyA9IHJvdXRlcy5maWx0ZXIoKHZhbCkgPT4gdmFsLnBhdGggIT0gJycpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBpc0FjdGl2ZShwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnVybC5zdWJzdHJpbmcoMSkgPT09IHBhdGg7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvc2hhcmVkL2hlYWRlci50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuZGVlcF9wdXJwbGUtcGluay5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xvZ28ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL2ltZy9sb2dvLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0XFxcIj5cXG4gICAgPGg0PldlbGNvbWU8L2g0PlxcblxcbiAgICBBamF4IHJlcXVlc3QgdXNpbmcgU2VydmljZVN0YWNrJ3MgVHlwZVNjcmlwdCBKc29uU2VydmljZUNsaWVudCBhbmQgVHlwZWQgRFRPczpcXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXFxcIiBzdHlsZT1cXFwid2lkdGg6YXV0b1xcXCI+XFxuXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcIm1kbC10ZXh0ZmllbGRfX2lucHV0XFxcIiBpZD1cXFwiTmFtZVxcXCJcXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiVHlwZSB5b3VyIG5hbWVcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJuYW1lXFxcIlxcbiAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cXFwibmFtZUNoYW5nZWQoJGV2ZW50KVxcXCIgLz5cXG5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJyZXN1bHRcXFwiPnt7cmVzdWx0fX08L3NwYW4+XFxuICAgIDwvZGl2PlxcblxcbjwvZGl2PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8uaHRtbFxuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2VjdGlvbiBjbGFzcz1cXFwic2VjdGlvbi0tY2VudGVyIG1kbC1ncmlkIG1kbC1ncmlkLS1uby1zcGFjaW5nIG1kbC1zaGFkb3ctLTJkcFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkIG1kbC1jZWxsIG1kbC1jZWxsLS0xMi1jb2xcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBtZGwtZ3JpZCBtZGwtZ3JpZC0tbm8tc3BhY2luZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtZGwtY2VsbCBtZGwtY2VsbC0tMTItY29sXFxcIj57e2hlYWRpbmd9fTwvaDQ+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lciBtZGwtY2VsbCBtZGwtY2VsbC0tMi1jb2wgbWRsLWNlbGwtLTEtY29sLXBob25lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIG1kbC1jb2xvci0tcHJpbWFyeVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9fdGV4dCBtZGwtY2VsbCBtZGwtY2VsbC0tMTAtY29sLWRlc2t0b3AgbWRsLWNlbGwtLTYtY29sLXRhYmxldCBtZGwtY2VsbC0tMy1jb2wtcGhvbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDU+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQ8L2g1PlxcclxcbiAgICAgICAgICAgICAgICBEb2xvcmUgZXggZGVzZXJ1bnQgYXV0ZSBmdWdpYXQgYXV0ZSBudWxsYSBlYSBzdW50IGFsaXF1YSBuaXNpIGN1cGlkYXRhdCBldS4gRHVpcyBudWxsYSB0ZW1wb3IgZG8gYXV0ZSBldCBlaXVzbW9kIHZlbGl0IGV4ZXJjaXRhdGlvbiBub3N0cnVkIHF1aXMgPGEgaHJlZj1cXFwiI1xcXCI+cHJvaWRlbnQgbWluaW08L2E+LlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgbWRsLWNlbGwgbWRsLWNlbGwtLTItY29sIG1kbC1jZWxsLS0xLWNvbC1waG9uZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2NpcmNsZS1jb250YWluZXJfX2NpcmNsZSBtZGwtY29sb3ItLXByaW1hcnlcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX3RleHQgbWRsLWNlbGwgbWRsLWNlbGwtLTEwLWNvbC1kZXNrdG9wIG1kbC1jZWxsLS02LWNvbC10YWJsZXQgbWRsLWNlbGwtLTMtY29sLXBob25lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg1PkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9oNT5cXHJcXG4gICAgICAgICAgICAgICAgRG9sb3JlIGV4IGRlc2VydW50IGF1dGUgZnVnaWF0IGF1dGUgbnVsbGEgZWEgc3VudCBhbGlxdWEgbmlzaSBjdXBpZGF0YXQgZXUuIER1aXMgbnVsbGEgdGVtcG9yIGRvIGF1dGUgZXQgZWl1c21vZCB2ZWxpdCBleGVyY2l0YXRpb24gbm9zdHJ1ZCBxdWlzIDxhIGhyZWY9XFxcIiNcXFwiPnByb2lkZW50IG1pbmltPC9hPi5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19jaXJjbGUtY29udGFpbmVyIG1kbC1jZWxsIG1kbC1jZWxsLS0yLWNvbCBtZGwtY2VsbC0tMS1jb2wtcGhvbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19jaXJjbGUtY29udGFpbmVyX19jaXJjbGUgbWRsLWNvbG9yLS1wcmltYXJ5XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX190ZXh0IG1kbC1jZWxsIG1kbC1jZWxsLS0xMC1jb2wtZGVza3RvcCBtZGwtY2VsbC0tNi1jb2wtdGFibGV0IG1kbC1jZWxsLS0zLWNvbC1waG9uZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoNT5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldDwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIERvbG9yZSBleCBkZXNlcnVudCBhdXRlIGZ1Z2lhdCBhdXRlIG51bGxhIGVhIHN1bnQgYWxpcXVhIG5pc2kgY3VwaWRhdGF0IGV1LiBEdWlzIG51bGxhIHRlbXBvciBkbyBhdXRlIGV0IGVpdXNtb2QgdmVsaXQgZXhlcmNpdGF0aW9uIG5vc3RydWQgcXVpcyA8YSBocmVmPVxcXCIjXFxcIj5wcm9pZGVudCBtaW5pbTwvYT4uXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1kbC1jYXJkX19hY3Rpb25zXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibWRsLWJ1dHRvblxcXCI+UmVhZCBvdXIgZmVhdHVyZXM8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9zZWN0aW9uPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogMCAxMHB4IDAgMDsgfVxcblxcbi5yZXN1bHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6ICM3YTFlYTE7IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvYXBwL2hvbWUvaGVsbG8uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRpdiB7XFxuICBiYWNrZ3JvdW5kOiAjM2UyMjgwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjZmY3M2EzOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7ICB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpZiAob1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RzbGliL3RzbGliLmVzNi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFRhYnMgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsVGFicyA9IGZ1bmN0aW9uIE1hdGVyaWFsVGFicyhlbGVtZW50KSB7XG4gICAgLy8gU3RvcmVzIHRoZSBIVE1MIGVsZW1lbnQuXG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsVGFicyddID0gTWF0ZXJpYWxUYWJzO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgVEFCX0NMQVNTOiAnbWRsLXRhYnNfX3RhYicsXG4gICAgUEFORUxfQ0xBU1M6ICdtZGwtdGFic19fcGFuZWwnLFxuICAgIEFDVElWRV9DTEFTUzogJ2lzLWFjdGl2ZScsXG4gICAgVVBHUkFERURfQ0xBU1M6ICdpcy11cGdyYWRlZCcsXG4gICAgTURMX0pTX1JJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgTURMX1JJUFBMRV9DT05UQUlORVI6ICdtZGwtdGFic19fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgTURMX1JJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIE1ETF9KU19SSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cydcbn07XG4vKipcbiAgICogSGFuZGxlIGNsaWNrcyB0byBhIHRhYnMgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5pbml0VGFic18gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9KU19SSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFMpO1xuICAgIH1cbiAgICAvLyBTZWxlY3QgZWxlbWVudCB0YWJzLCBkb2N1bWVudCBwYW5lbHNcbiAgICB0aGlzLnRhYnNfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0NMQVNTKTtcbiAgICB0aGlzLnBhbmVsc18gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5QQU5FTF9DTEFTUyk7XG4gICAgLy8gQ3JlYXRlIG5ldyB0YWJzIGZvciBlYWNoIHRhYiBlbGVtZW50XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ldyBNYXRlcmlhbFRhYih0aGlzLnRhYnNfW2ldLCB0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVVBHUkFERURfQ0xBU1MpO1xufTtcbi8qKlxuICAgKiBSZXNldCB0YWIgc3RhdGUsIGRyb3BwaW5nIGFjdGl2ZSBjbGFzc2VzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5yZXNldFRhYlN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMudGFic18ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdGhpcy50YWJzX1trXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIFJlc2V0IHBhbmVsIHN0YXRlLCBkcm9waW5nIGFjdGl2ZSBjbGFzc2VzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5yZXNldFBhbmVsU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5wYW5lbHNfLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMucGFuZWxzX1tqXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5pbml0VGFic18oKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBhbiBpbmRpdmlkdWFsIHRhYi5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFiIFRoZSBIVE1MIGVsZW1lbnQgZm9yIHRoZSB0YWIuXG4gICAqIEBwYXJhbSB7TWF0ZXJpYWxUYWJzfSBjdHggVGhlIE1hdGVyaWFsVGFicyBvYmplY3QgdGhhdCBvd25zIHRoZSB0YWIuXG4gICAqL1xuZnVuY3Rpb24gTWF0ZXJpYWxUYWIodGFiLCBjdHgpIHtcbiAgICBpZiAodGFiKSB7XG4gICAgICAgIGlmIChjdHguZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKGN0eC5Dc3NDbGFzc2VzXy5NRExfSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChjdHguQ3NzQ2xhc3Nlc18uTURMX1JJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLk1ETF9KU19SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZChjdHguQ3NzQ2xhc3Nlc18uTURMX1JJUFBMRSk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRhYi5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAodGFiLmdldEF0dHJpYnV0ZSgnaHJlZicpLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBocmVmID0gdGFiLmhyZWYuc3BsaXQoJyMnKVsxXTtcbiAgICAgICAgICAgICAgICB2YXIgcGFuZWwgPSBjdHguZWxlbWVudF8ucXVlcnlTZWxlY3RvcignIycgKyBocmVmKTtcbiAgICAgICAgICAgICAgICBjdHgucmVzZXRUYWJTdGF0ZV8oKTtcbiAgICAgICAgICAgICAgICBjdHgucmVzZXRQYW5lbFN0YXRlXygpO1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFRhYnMsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsVGFicycsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtdGFicydcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0YWJzLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIExheW91dCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsTGF5b3V0ID0gZnVuY3Rpb24gTWF0ZXJpYWxMYXlvdXQoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbExheW91dCddID0gTWF0ZXJpYWxMYXlvdXQ7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIE1BWF9XSURUSDogJyhtYXgtd2lkdGg6IDEwMjRweCknLFxuICAgIFRBQl9TQ1JPTExfUElYRUxTOiAxMDAsXG4gICAgUkVTSVpFX1RJTUVPVVQ6IDEwMCxcbiAgICBNRU5VX0lDT046ICcmI3hFNUQyOycsXG4gICAgQ0hFVlJPTl9MRUZUOiAnY2hldnJvbl9sZWZ0JyxcbiAgICBDSEVWUk9OX1JJR0hUOiAnY2hldnJvbl9yaWdodCdcbn07XG4vKipcbiAgICogS2V5Y29kZXMsIGZvciBjb2RlIHJlYWRhYmlsaXR5LlxuICAgKlxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5LZXljb2Rlc18gPSB7XG4gICAgRU5URVI6IDEzLFxuICAgIEVTQ0FQRTogMjcsXG4gICAgU1BBQ0U6IDMyXG59O1xuLyoqXG4gICAqIE1vZGVzLlxuICAgKlxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5Nb2RlXyA9IHtcbiAgICBTVEFOREFSRDogMCxcbiAgICBTRUFNRUQ6IDEsXG4gICAgV0FURVJGQUxMOiAyLFxuICAgIFNDUk9MTDogM1xufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBDT05UQUlORVI6ICdtZGwtbGF5b3V0X19jb250YWluZXInLFxuICAgIEhFQURFUjogJ21kbC1sYXlvdXRfX2hlYWRlcicsXG4gICAgRFJBV0VSOiAnbWRsLWxheW91dF9fZHJhd2VyJyxcbiAgICBDT05URU5UOiAnbWRsLWxheW91dF9fY29udGVudCcsXG4gICAgRFJBV0VSX0JUTjogJ21kbC1sYXlvdXRfX2RyYXdlci1idXR0b24nLFxuICAgIElDT046ICdtYXRlcmlhbC1pY29ucycsXG4gICAgSlNfUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWxheW91dF9fdGFiLXJpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIEhFQURFUl9TRUFNRUQ6ICdtZGwtbGF5b3V0X19oZWFkZXItLXNlYW1lZCcsXG4gICAgSEVBREVSX1dBVEVSRkFMTDogJ21kbC1sYXlvdXRfX2hlYWRlci0td2F0ZXJmYWxsJyxcbiAgICBIRUFERVJfU0NST0xMOiAnbWRsLWxheW91dF9faGVhZGVyLS1zY3JvbGwnLFxuICAgIEZJWEVEX0hFQURFUjogJ21kbC1sYXlvdXQtLWZpeGVkLWhlYWRlcicsXG4gICAgT0JGVVNDQVRPUjogJ21kbC1sYXlvdXRfX29iZnVzY2F0b3InLFxuICAgIFRBQl9CQVI6ICdtZGwtbGF5b3V0X190YWItYmFyJyxcbiAgICBUQUJfQ09OVEFJTkVSOiAnbWRsLWxheW91dF9fdGFiLWJhci1jb250YWluZXInLFxuICAgIFRBQjogJ21kbC1sYXlvdXRfX3RhYicsXG4gICAgVEFCX0JBUl9CVVRUT046ICdtZGwtbGF5b3V0X190YWItYmFyLWJ1dHRvbicsXG4gICAgVEFCX0JBUl9MRUZUX0JVVFRPTjogJ21kbC1sYXlvdXRfX3RhYi1iYXItbGVmdC1idXR0b24nLFxuICAgIFRBQl9CQVJfUklHSFRfQlVUVE9OOiAnbWRsLWxheW91dF9fdGFiLWJhci1yaWdodC1idXR0b24nLFxuICAgIFRBQl9NQU5VQUxfU1dJVENIOiAnbWRsLWxheW91dF9fdGFiLW1hbnVhbC1zd2l0Y2gnLFxuICAgIFBBTkVMOiAnbWRsLWxheW91dF9fdGFiLXBhbmVsJyxcbiAgICBIQVNfRFJBV0VSOiAnaGFzLWRyYXdlcicsXG4gICAgSEFTX1RBQlM6ICdoYXMtdGFicycsXG4gICAgSEFTX1NDUk9MTElOR19IRUFERVI6ICdoYXMtc2Nyb2xsaW5nLWhlYWRlcicsXG4gICAgQ0FTVElOR19TSEFET1c6ICdpcy1jYXN0aW5nLXNoYWRvdycsXG4gICAgSVNfQ09NUEFDVDogJ2lzLWNvbXBhY3QnLFxuICAgIElTX1NNQUxMX1NDUkVFTjogJ2lzLXNtYWxsLXNjcmVlbicsXG4gICAgSVNfRFJBV0VSX09QRU46ICdpcy12aXNpYmxlJyxcbiAgICBJU19BQ1RJVkU6ICdpcy1hY3RpdmUnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICAgIElTX0FOSU1BVElORzogJ2lzLWFuaW1hdGluZycsXG4gICAgT05fTEFSR0VfU0NSRUVOOiAnbWRsLWxheW91dC0tbGFyZ2Utc2NyZWVuLW9ubHknLFxuICAgIE9OX1NNQUxMX1NDUkVFTjogJ21kbC1sYXlvdXQtLXNtYWxsLXNjcmVlbi1vbmx5J1xufTtcbi8qKlxuICAgKiBIYW5kbGVzIHNjcm9sbGluZyBvbiB0aGUgY29udGVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuY29udGVudFNjcm9sbEhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBoZWFkZXJWaXNpYmxlID0gIXRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU01BTExfU0NSRUVOKSB8fCB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkZJWEVEX0hFQURFUik7XG4gICAgaWYgKHRoaXMuY29udGVudF8uc2Nyb2xsVG9wID4gMCAmJiAhdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpO1xuICAgICAgICBpZiAoaGVhZGVyVmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRfLnNjcm9sbFRvcCA8PSAwICYmIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKSkge1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKTtcbiAgICAgICAgaWYgKGhlYWRlclZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGtleWJvYXJkIGV2ZW50IG9uIHRoZSBkcmF3ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUua2V5Ym9hcmRFdmVudEhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIC8vIE9ubHkgcmVhY3Qgd2hlbiB0aGUgZHJhd2VyIGlzIG9wZW4uXG4gICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FU0NBUEUgJiYgdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKSkge1xuICAgICAgICB0aGlzLnRvZ2dsZURyYXdlcigpO1xuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBjaGFuZ2VzIGluIHNjcmVlbiBzaXplLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5zY3JlZW5TaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc2NyZWVuU2l6ZU1lZGlhUXVlcnlfLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU01BTExfU0NSRUVOKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19TTUFMTF9TQ1JFRU4pO1xuICAgICAgICAvLyBDb2xsYXBzZSBkcmF3ZXIgKGlmIGFueSkgd2hlbiBtb3ZpbmcgdG8gYSBsYXJnZSBzY3JlZW4gc2l6ZS5cbiAgICAgICAgaWYgKHRoaXMuZHJhd2VyXykge1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG4gICAgICAgICAgICB0aGlzLm9iZnVzY2F0b3JfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgZXZlbnRzIG9mIGRyYXdlciBidXR0b24uXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuZHJhd2VyVG9nZ2xlSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uU1BBQ0UgfHwgZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkVOVEVSKSB7XG4gICAgICAgICAgICAvLyBwcmV2ZW50IHNjcm9sbGluZyBpbiBkcmF3ZXIgbmF2XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHByZXZlbnQgb3RoZXIga2V5c1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlRHJhd2VyKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgKHVuKXNldHRpbmcgdGhlIGBpcy1hbmltYXRpbmdgIGNsYXNzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmhlYWRlclRyYW5zaXRpb25FbmRIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgZXhwYW5kaW5nIHRoZSBoZWFkZXIgb24gY2xpY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuaGVhZGVyQ2xpY2tIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIFJlc2V0IHRhYiBzdGF0ZSwgZHJvcHBpbmcgYWN0aXZlIGNsYXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUucmVzZXRUYWJTdGF0ZV8gPSBmdW5jdGlvbiAodGFiQmFyKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCB0YWJCYXIubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdGFiQmFyW2tdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgIH1cbn07XG4vKipcbiAgICogUmVzZXQgcGFuZWwgc3RhdGUsIGRyb3BpbmcgYWN0aXZlIGNsYXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUucmVzZXRQYW5lbFN0YXRlXyA9IGZ1bmN0aW9uIChwYW5lbHMpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhbmVscy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYW5lbHNbal0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgfVxufTtcbi8qKlxuICAqIFRvZ2dsZSBkcmF3ZXIgc3RhdGVcbiAgKlxuICAqIEBwdWJsaWNcbiAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS50b2dnbGVEcmF3ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRyYXdlckJ1dHRvbiA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLkRSQVdFUl9CVE4pO1xuICAgIHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pO1xuICAgIHRoaXMub2JmdXNjYXRvcl8uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICAvLyBTZXQgYWNjZXNzaWJpbGl0eSBwcm9wZXJ0aWVzLlxuICAgIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICAgIGRyYXdlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhd2VyXy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgZHJhd2VyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH1cbn07XG5NYXRlcmlhbExheW91dC5wcm90b3R5cGVbJ3RvZ2dsZURyYXdlciddID0gTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLnRvZ2dsZURyYXdlcjtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNPTlRBSU5FUik7XG4gICAgICAgIHZhciBmb2N1c2VkRWxlbWVudCA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignOmZvY3VzJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIGlmIChmb2N1c2VkRWxlbWVudCkge1xuICAgICAgICAgICAgZm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlyZWN0Q2hpbGRyZW4gPSB0aGlzLmVsZW1lbnRfLmNoaWxkTm9kZXM7XG4gICAgICAgIHZhciBudW1DaGlsZHJlbiA9IGRpcmVjdENoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBudW1DaGlsZHJlbjsgYysrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBkaXJlY3RDaGlsZHJlbltjXTtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXyA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXJfID0gY2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkNPTlRFTlQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50XyA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5wZXJzaXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHBhZ2UgaXMgbG9hZGVkIGZyb20gYmFjay9mb3J3YXJkIGNhY2hlXG4gICAgICAgICAgICAgICAgLy8gdHJpZ2dlciByZXBhaW50IHRvIGxldCBsYXlvdXQgc2Nyb2xsIGluIHNhZmFyaVxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5vdmVyZmxvd1kgPSAnJztcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyXykge1xuICAgICAgICAgICAgdGhpcy50YWJCYXJfID0gdGhpcy5oZWFkZXJfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5UQUJfQkFSKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9kZSA9IHRoaXMuTW9kZV8uU1RBTkRBUkQ7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcl8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSX1NFQU1FRCkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gdGhpcy5Nb2RlXy5TRUFNRUQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5IRUFERVJfV0FURVJGQUxMKSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSB0aGlzLk1vZGVfLldBVEVSRkFMTDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuaGVhZGVyVHJhbnNpdGlvbkVuZEhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGVhZGVyQ2xpY2tIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUl9TQ1JPTEwpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMuTW9kZV8uU0NST0xMO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSEFTX1NDUk9MTElOR19IRUFERVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IHRoaXMuTW9kZV8uU1RBTkRBUkQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJCYXJfKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gdGhpcy5Nb2RlXy5TRUFNRUQgfHwgbW9kZSA9PT0gdGhpcy5Nb2RlXy5TQ1JPTEwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJCYXJfKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gdGhpcy5Nb2RlXy5XQVRFUkZBTEwpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgYW5kIHJlbW92ZSBzaGFkb3dzIGRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uXG4gICAgICAgICAgICAgICAgLy8gQWxzbyBhZGQvcmVtb3ZlIGF1eGlsaWFyeSBjbGFzcyBmb3Igc3R5bGluZyBvZiB0aGUgY29tcGFjdCB2ZXJzaW9uIG9mXG4gICAgICAgICAgICAgICAgLy8gdGhlIGhlYWRlci5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbEhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFNjcm9sbEhhbmRsZXJfKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGRyYXdlciB0b2dnbGluZyBidXR0b24gdG8gb3VyIGxheW91dCwgaWYgd2UgaGF2ZSBhbiBvcGVuYWJsZSBkcmF3ZXIuXG4gICAgICAgIGlmICh0aGlzLmRyYXdlcl8pIHtcbiAgICAgICAgICAgIHZhciBkcmF3ZXJCdXR0b24gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVJfQlROKTtcbiAgICAgICAgICAgIGlmICghZHJhd2VyQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uRFJBV0VSX0JUTik7XG4gICAgICAgICAgICAgICAgdmFyIGRyYXdlckJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSUNPTik7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uSWNvbi5pbm5lckhUTUwgPSB0aGlzLkNvbnN0YW50Xy5NRU5VX0lDT047XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmFwcGVuZENoaWxkKGRyYXdlckJ1dHRvbkljb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5PTl9MQVJHRV9TQ1JFRU4pKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBkcmF3ZXIgaGFzIE9OX0xBUkdFX1NDUkVFTiBjbGFzcyB0aGVuIGFkZCBpdCB0byB0aGUgZHJhd2VyIHRvZ2dsZSBidXR0b24gYXMgd2VsbC5cbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk9OX0xBUkdFX1NDUkVFTik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5PTl9TTUFMTF9TQ1JFRU4pKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBkcmF3ZXIgaGFzIE9OX1NNQUxMX1NDUkVFTiBjbGFzcyB0aGVuIGFkZCBpdCB0byB0aGUgZHJhd2VyIHRvZ2dsZSBidXR0b24gYXMgd2VsbC5cbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk9OX1NNQUxMX1NDUkVFTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmF3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRyYXdlclRvZ2dsZUhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmRyYXdlclRvZ2dsZUhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgLy8gQWRkIGEgY2xhc3MgaWYgdGhlIGxheW91dCBoYXMgYSBkcmF3ZXIsIGZvciBhbHRlcmluZyB0aGUgbGVmdCBwYWRkaW5nLlxuICAgICAgICAgICAgLy8gQWRkcyB0aGUgSEFTX0RSQVdFUiB0byB0aGUgZWxlbWVudHMgc2luY2UgdGhpcy5oZWFkZXJfIG1heSBvciBtYXlcbiAgICAgICAgICAgIC8vIG5vdCBiZSBwcmVzZW50LlxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSEFTX0RSQVdFUik7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgZml4ZWQgaGVhZGVyLCBhZGQgdGhlIGJ1dHRvbiB0byB0aGUgaGVhZGVyIHJhdGhlciB0aGFuXG4gICAgICAgICAgICAvLyB0aGUgbGF5b3V0LlxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uRklYRURfSEVBREVSKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5pbnNlcnRCZWZvcmUoZHJhd2VyQnV0dG9uLCB0aGlzLmhlYWRlcl8uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uaW5zZXJ0QmVmb3JlKGRyYXdlckJ1dHRvbiwgdGhpcy5jb250ZW50Xyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb2JmdXNjYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgb2JmdXNjYXRvci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uT0JGVVNDQVRPUik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKG9iZnVzY2F0b3IpO1xuICAgICAgICAgICAgb2JmdXNjYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZHJhd2VyVG9nZ2xlSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLm9iZnVzY2F0b3JfID0gb2JmdXNjYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyXy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlib2FyZEV2ZW50SGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLmRyYXdlcl8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gS2VlcCBhbiBleWUgb24gc2NyZWVuIHNpemUsIGFuZCBhZGQvcmVtb3ZlIGF1eGlsaWFyeSBjbGFzcyBmb3Igc3R5bGluZ1xuICAgICAgICAvLyBvZiBzbWFsbCBzY3JlZW5zLlxuICAgICAgICB0aGlzLnNjcmVlblNpemVNZWRpYVF1ZXJ5XyA9IHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMuQ29uc3RhbnRfLk1BWF9XSURUSCk7XG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZU1lZGlhUXVlcnlfLmFkZExpc3RlbmVyKHRoaXMuc2NyZWVuU2l6ZUhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNjcmVlblNpemVIYW5kbGVyXygpO1xuICAgICAgICAvLyBJbml0aWFsaXplIHRhYnMsIGlmIGFueS5cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyXyAmJiB0aGlzLnRhYkJhcl8pIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19UQUJTKTtcbiAgICAgICAgICAgIHZhciB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcl8uaW5zZXJ0QmVmb3JlKHRhYkNvbnRhaW5lciwgdGhpcy50YWJCYXJfKTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5yZW1vdmVDaGlsZCh0aGlzLnRhYkJhcl8pO1xuICAgICAgICAgICAgdmFyIGxlZnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfQlVUVE9OKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfTEVGVF9CVVRUT04pO1xuICAgICAgICAgICAgdmFyIGxlZnRCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT04pO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbkljb24udGV4dENvbnRlbnQgPSB0aGlzLkNvbnN0YW50Xy5DSEVWUk9OX0xFRlQ7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmFwcGVuZENoaWxkKGxlZnRCdXR0b25JY29uKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLnNjcm9sbExlZnQgLT0gdGhpcy5Db25zdGFudF8uVEFCX1NDUk9MTF9QSVhFTFM7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUl9CVVRUT04pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfUklHSFRfQlVUVE9OKTtcbiAgICAgICAgICAgIHZhciByaWdodEJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICByaWdodEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT04pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b25JY29uLnRleHRDb250ZW50ID0gdGhpcy5Db25zdGFudF8uQ0hFVlJPTl9SSUdIVDtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uSWNvbik7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uc2Nyb2xsTGVmdCArPSB0aGlzLkNvbnN0YW50Xy5UQUJfU0NST0xMX1BJWEVMUztcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJ1dHRvbik7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50YWJCYXJfKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEJ1dHRvbik7XG4gICAgICAgICAgICAvLyBBZGQgYW5kIHJlbW92ZSB0YWIgYnV0dG9ucyBkZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uIGFuZCB0b3RhbFxuICAgICAgICAgICAgLy8gd2luZG93IHNpemUuXG4gICAgICAgICAgICB2YXIgdGFiVXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJCYXJfLnNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0IDwgdGhpcy50YWJCYXJfLnNjcm9sbFdpZHRoIC0gdGhpcy50YWJCYXJfLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudGFiQmFyXy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0YWJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgIHRhYlVwZGF0ZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0YWJzIHdoZW4gdGhlIHdpbmRvdyByZXNpemVzLlxuICAgICAgICAgICAgdmFyIHdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIHRpbWVvdXRzIHRvIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGhhcHBlbiB0b28gb2Z0ZW4uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVzaXplVGltZW91dElkXykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0SWRfKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVUaW1lb3V0SWRfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYlVwZGF0ZUhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVUaW1lb3V0SWRfID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlJFU0laRV9USU1FT1VUKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB3aW5kb3dSZXNpemVIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlbGVjdCBlbGVtZW50IHRhYnMsIGRvY3VtZW50IHBhbmVsc1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYkJhcl8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLlRBQik7XG4gICAgICAgICAgICB2YXIgcGFuZWxzID0gdGhpcy5jb250ZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUEFORUwpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB0YWJzIGZvciBlYWNoIHRhYiBlbGVtZW50XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXcgTWF0ZXJpYWxMYXlvdXRUYWIodGFic1tpXSwgdGFicywgcGFuZWxzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgYW4gaW5kaXZpZHVhbCB0YWIuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWIgVGhlIEhUTUwgZWxlbWVudCBmb3IgdGhlIHRhYi5cbiAgICogQHBhcmFtIHshQXJyYXk8SFRNTEVsZW1lbnQ+fSB0YWJzIEFycmF5IHdpdGggSFRNTCBlbGVtZW50cyBmb3IgYWxsIHRhYnMuXG4gICAqIEBwYXJhbSB7IUFycmF5PEhUTUxFbGVtZW50Pn0gcGFuZWxzIEFycmF5IHdpdGggSFRNTCBlbGVtZW50cyBmb3IgYWxsIHBhbmVscy5cbiAgICogQHBhcmFtIHtNYXRlcmlhbExheW91dH0gbGF5b3V0IFRoZSBNYXRlcmlhbExheW91dCBvYmplY3QgdGhhdCBvd25zIHRoZSB0YWIuXG4gICAqL1xuZnVuY3Rpb24gTWF0ZXJpYWxMYXlvdXRUYWIodGFiLCB0YWJzLCBwYW5lbHMsIGxheW91dCkge1xuICAgIC8qKlxuICAgICAqIEF1eGlsaWFyeSBtZXRob2QgdG8gcHJvZ3JhbW1hdGljYWxseSBzZWxlY3QgYSB0YWIgaW4gdGhlIFVJLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNlbGVjdFRhYigpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB0YWIuaHJlZi5zcGxpdCgnIycpWzFdO1xuICAgICAgICB2YXIgcGFuZWwgPSBsYXlvdXQuY29udGVudF8ucXVlcnlTZWxlY3RvcignIycgKyBocmVmKTtcbiAgICAgICAgbGF5b3V0LnJlc2V0VGFiU3RhdGVfKHRhYnMpO1xuICAgICAgICBsYXlvdXQucmVzZXRQYW5lbFN0YXRlXyhwYW5lbHMpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICB9XG4gICAgaWYgKGxheW91dC50YWJCYXJfLmNsYXNzTGlzdC5jb250YWlucyhsYXlvdXQuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCk7XG4gICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKGxheW91dC5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgdGFiLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgfVxuICAgIGlmICghbGF5b3V0LnRhYkJhcl8uY2xhc3NMaXN0LmNvbnRhaW5zKGxheW91dC5Dc3NDbGFzc2VzXy5UQUJfTUFOVUFMX1NXSVRDSCkpIHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0YWIuZ2V0QXR0cmlidXRlKCdocmVmJykuY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0VGFiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0YWIuc2hvdyA9IHNlbGVjdFRhYjtcbn1cbndpbmRvd1snTWF0ZXJpYWxMYXlvdXRUYWInXSA9IE1hdGVyaWFsTGF5b3V0VGFiO1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsTGF5b3V0LFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbExheW91dCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtbGF5b3V0J1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxheW91dC5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEEgY29tcG9uZW50IGhhbmRsZXIgaW50ZXJmYWNlIHVzaW5nIHRoZSByZXZlYWxpbmcgbW9kdWxlIGRlc2lnbiBwYXR0ZXJuLlxuICogTW9yZSBkZXRhaWxzIG9uIHRoaXMgZGVzaWduIHBhdHRlcm4gaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAqXG4gKiBAYXV0aG9yIEphc29uIE1heWVzLlxuICovXG4vKiBleHBvcnRlZCBjb21wb25lbnRIYW5kbGVyICovXG5cbi8vIFByZS1kZWZpbmluZyB0aGUgY29tcG9uZW50SGFuZGxlciBpbnRlcmZhY2UsIGZvciBjbG9zdXJlIGRvY3VtZW50YXRpb24gYW5kXG4vLyBzdGF0aWMgdmVyaWZpY2F0aW9uLlxudmFyIGNvbXBvbmVudEhhbmRsZXIgPSB7XG4gIC8qKlxuICAgKiBTZWFyY2hlcyBleGlzdGluZyBET00gZm9yIGVsZW1lbnRzIG9mIG91ciBjb21wb25lbnQgdHlwZSBhbmQgdXBncmFkZXMgdGhlbVxuICAgKiBpZiB0aGV5IGhhdmUgbm90IGFscmVhZHkgYmVlbiB1cGdyYWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRKc0NsYXNzIHRoZSBwcm9ncmFtYXRpYyBuYW1lIG9mIHRoZSBlbGVtZW50IGNsYXNzIHdlXG4gICAqIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdENzc0NsYXNzIHRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZWxlbWVudHMgb2YgdGhpc1xuICAgKiB0eXBlIHdpbGwgaGF2ZS5cbiAgICovXG4gIHVwZ3JhZGVEb206IGZ1bmN0aW9uKG9wdEpzQ2xhc3MsIG9wdENzc0NsYXNzKSB7fSxcbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGEgc3BlY2lmaWMgZWxlbWVudCByYXRoZXIgdGhhbiBhbGwgaW4gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3aXNoIHRvIHVwZ3JhZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyBPcHRpb25hbCBuYW1lIG9mIHRoZSBjbGFzcyB3ZSB3YW50IHRvIHVwZ3JhZGVcbiAgICogdGhlIGVsZW1lbnQgdG8uXG4gICAqL1xuICB1cGdyYWRlRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgb3B0SnNDbGFzcykge30sXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGxpc3Qgb2YgZWxlbWVudHMgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR8IUFycmF5PCFFbGVtZW50PnwhTm9kZUxpc3R8IUhUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgKiBUaGUgZWxlbWVudHMgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKi9cbiAgdXBncmFkZUVsZW1lbnRzOiBmdW5jdGlvbihlbGVtZW50cykge30sXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhbGwgcmVnaXN0ZXJlZCBjb21wb25lbnRzIGZvdW5kIGluIHRoZSBjdXJyZW50IERPTS4gVGhpcyBpc1xuICAgKiBhdXRvbWF0aWNhbGx5IGNhbGxlZCBvbiB3aW5kb3cgbG9hZC5cbiAgICovXG4gIHVwZ3JhZGVBbGxSZWdpc3RlcmVkOiBmdW5jdGlvbigpIHt9LFxuICAvKipcbiAgICogQWxsb3dzIHVzZXIgdG8gYmUgYWxlcnRlZCB0byBhbnkgdXBncmFkZXMgdGhhdCBhcmUgcGVyZm9ybWVkIGZvciBhIGdpdmVuXG4gICAqIGNvbXBvbmVudCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBqc0NsYXNzIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBNREwgY29tcG9uZW50IHdlIHdpc2hcbiAgICogdG8gaG9vayBpbnRvIGZvciBhbnkgdXBncmFkZXMgcGVyZm9ybWVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFIVE1MRWxlbWVudCl9IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHVwb24gYW5cbiAgICogdXBncmFkZS4gVGhpcyBmdW5jdGlvbiBzaG91bGQgZXhwZWN0IDEgcGFyYW1ldGVyIC0gdGhlIEhUTUxFbGVtZW50IHdoaWNoXG4gICAqIGdvdCB1cGdyYWRlZC5cbiAgICovXG4gIHJlZ2lzdGVyVXBncmFkZWRDYWxsYmFjazogZnVuY3Rpb24oanNDbGFzcywgY2FsbGJhY2spIHt9LFxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2xhc3MgZm9yIGZ1dHVyZSB1c2UgYW5kIGF0dGVtcHRzIHRvIHVwZ3JhZGUgZXhpc3RpbmcgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0ge2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnUHVibGljfSBjb25maWcgdGhlIHJlZ2lzdHJhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqL1xuICByZWdpc3RlcjogZnVuY3Rpb24oY29uZmlnKSB7fSxcbiAgLyoqXG4gICAqIERvd25ncmFkZSBlaXRoZXIgYSBnaXZlbiBub2RlLCBhbiBhcnJheSBvZiBub2Rlcywgb3IgYSBOb2RlTGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHshTm9kZXwhQXJyYXk8IU5vZGU+fCFOb2RlTGlzdH0gbm9kZXNcbiAgICovXG4gIGRvd25ncmFkZUVsZW1lbnRzOiBmdW5jdGlvbihub2Rlcykge31cbn07XG5cbmNvbXBvbmVudEhhbmRsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiogQHR5cGUgeyFBcnJheTxjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZz59ICovXG4gIHZhciByZWdpc3RlcmVkQ29tcG9uZW50c18gPSBbXTtcblxuICAvKiogQHR5cGUgeyFBcnJheTxjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudD59ICovXG4gIHZhciBjcmVhdGVkQ29tcG9uZW50c18gPSBbXTtcblxuICB2YXIgY29tcG9uZW50Q29uZmlnUHJvcGVydHlfID0gJ21kbENvbXBvbmVudENvbmZpZ0ludGVybmFsXyc7XG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIHJlZ2lzdGVyZWQgY29tcG9uZW50cyBmb3IgYSBjbGFzcyB3ZSBhcmUgaW50ZXJlc3RlZCBpbiB1c2luZy5cbiAgICogT3B0aW9uYWxseSByZXBsYWNlcyBhIG1hdGNoIHdpdGggcGFzc2VkIG9iamVjdCBpZiBzcGVjaWZpZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIGEgY2xhc3Mgd2Ugd2FudCB0byB1c2UuXG4gICAqIEBwYXJhbSB7Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWc9fSBvcHRSZXBsYWNlIE9wdGlvbmFsIG9iamVjdCB0byByZXBsYWNlIG1hdGNoIHdpdGguXG4gICAqIEByZXR1cm4geyFPYmplY3R8Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRSZWdpc3RlcmVkQ2xhc3NfKG5hbWUsIG9wdFJlcGxhY2UpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRDb21wb25lbnRzXy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlZ2lzdGVyZWRDb21wb25lbnRzX1tpXS5jbGFzc05hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRSZXBsYWNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzX1tpXSA9IG9wdFJlcGxhY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRDb21wb25lbnRzX1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGNsYXNzTmFtZXMgb2YgdGhlIHVwZ3JhZGVkIGNsYXNzZXMgb24gdGhlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gZmV0Y2ggZGF0YSBmcm9tLlxuICAgKiBAcmV0dXJuIHshQXJyYXk8c3RyaW5nPn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8oZWxlbWVudCkge1xuICAgIHZhciBkYXRhVXBncmFkZWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS11cGdyYWRlZCcpO1xuICAgIC8vIFVzZSBgWycnXWAgYXMgZGVmYXVsdCB2YWx1ZSB0byBjb25mb3JtIHRoZSBgLG5hbWUsbmFtZS4uLmAgc3R5bGUuXG4gICAgcmV0dXJuIGRhdGFVcGdyYWRlZCA9PT0gbnVsbCA/IFsnJ10gOiBkYXRhVXBncmFkZWQuc3BsaXQoJywnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiB1cGdyYWRlZCBmb3IgdGhlIGdpdmVuXG4gICAqIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHdlIHdhbnQgdG8gY2hlY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBqc0NsYXNzIFRoZSBjbGFzcyB0byBjaGVjayBmb3IuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gaXNFbGVtZW50VXBncmFkZWRfKGVsZW1lbnQsIGpzQ2xhc3MpIHtcbiAgICB2YXIgdXBncmFkZWRMaXN0ID0gZ2V0VXBncmFkZWRMaXN0T2ZFbGVtZW50XyhlbGVtZW50KTtcbiAgICByZXR1cm4gdXBncmFkZWRMaXN0LmluZGV4T2YoanNDbGFzcykgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBldmVudCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgVGhlIHR5cGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnViYmxlcyBXaGV0aGVyIHRoZSBldmVudCBzaG91bGQgYnViYmxlIHVwIHRoZSBET00uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FuY2VsYWJsZSBXaGV0aGVyIHRoZSBldmVudCBjYW4gYmUgY2FuY2VsZWQuXG4gICAqIEByZXR1cm5zIHshRXZlbnR9XG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVFdmVudF8oZXZlbnRUeXBlLCBidWJibGVzLCBjYW5jZWxhYmxlKSB7XG4gICAgaWYgKCdDdXN0b21FdmVudCcgaW4gd2luZG93ICYmIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoZXZlbnRUeXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IGJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IGNhbmNlbGFibGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnRzJyk7XG4gICAgICBldi5pbml0RXZlbnQoZXZlbnRUeXBlLCBidWJibGVzLCBjYW5jZWxhYmxlKTtcbiAgICAgIHJldHVybiBldjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgZXhpc3RpbmcgRE9NIGZvciBlbGVtZW50cyBvZiBvdXIgY29tcG9uZW50IHR5cGUgYW5kIHVwZ3JhZGVzIHRoZW1cbiAgICogaWYgdGhleSBoYXZlIG5vdCBhbHJlYWR5IGJlZW4gdXBncmFkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyB0aGUgcHJvZ3JhbWF0aWMgbmFtZSBvZiB0aGUgZWxlbWVudCBjbGFzcyB3ZVxuICAgKiBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZi5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRDc3NDbGFzcyB0aGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGVsZW1lbnRzIG9mIHRoaXNcbiAgICogdHlwZSB3aWxsIGhhdmUuXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlRG9tSW50ZXJuYWwob3B0SnNDbGFzcywgb3B0Q3NzQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIG9wdEpzQ2xhc3MgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBvcHRDc3NDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVwZ3JhZGVEb21JbnRlcm5hbChyZWdpc3RlcmVkQ29tcG9uZW50c19baV0uY2xhc3NOYW1lLFxuICAgICAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldLmNzc0NsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGpzQ2xhc3MgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKG9wdEpzQ2xhc3MpO1xuICAgICAgaWYgKHR5cGVvZiBvcHRDc3NDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIHJlZ2lzdGVyZWRDbGFzcyA9IGZpbmRSZWdpc3RlcmVkQ2xhc3NfKGpzQ2xhc3MpO1xuICAgICAgICBpZiAocmVnaXN0ZXJlZENsYXNzKSB7XG4gICAgICAgICAgb3B0Q3NzQ2xhc3MgPSByZWdpc3RlcmVkQ2xhc3MuY3NzQ2xhc3M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBvcHRDc3NDbGFzcyk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGVsZW1lbnRzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIHVwZ3JhZGVFbGVtZW50SW50ZXJuYWwoZWxlbWVudHNbbl0sIGpzQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGVsZW1lbnQgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdEpzQ2xhc3MgT3B0aW9uYWwgbmFtZSBvZiB0aGUgY2xhc3Mgd2Ugd2FudCB0byB1cGdyYWRlXG4gICAqIHRoZSBlbGVtZW50IHRvLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZUVsZW1lbnRJbnRlcm5hbChlbGVtZW50LCBvcHRKc0NsYXNzKSB7XG4gICAgLy8gVmVyaWZ5IGFyZ3VtZW50IHR5cGUuXG4gICAgaWYgKCEodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHByb3ZpZGVkIHRvIHVwZ3JhZGUgTURMIGVsZW1lbnQuJyk7XG4gICAgfVxuICAgIC8vIEFsbG93IHVwZ3JhZGUgdG8gYmUgY2FuY2VsZWQgYnkgY2FuY2VsaW5nIGVtaXR0ZWQgZXZlbnQuXG4gICAgdmFyIHVwZ3JhZGluZ0V2ID0gY3JlYXRlRXZlbnRfKCdtZGwtY29tcG9uZW50dXBncmFkaW5nJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KHVwZ3JhZGluZ0V2KTtcbiAgICBpZiAodXBncmFkaW5nRXYuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB1cGdyYWRlZExpc3QgPSBnZXRVcGdyYWRlZExpc3RPZkVsZW1lbnRfKGVsZW1lbnQpO1xuICAgIHZhciBjbGFzc2VzVG9VcGdyYWRlID0gW107XG4gICAgLy8gSWYganNDbGFzcyBpcyBub3QgcHJvdmlkZWQgc2NhbiB0aGUgcmVnaXN0ZXJlZCBjb21wb25lbnRzIHRvIGZpbmQgdGhlXG4gICAgLy8gb25lcyBtYXRjaGluZyB0aGUgZWxlbWVudCdzIENTUyBjbGFzc0xpc3QuXG4gICAgaWYgKCFvcHRKc0NsYXNzKSB7XG4gICAgICB2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICByZWdpc3RlcmVkQ29tcG9uZW50c18uZm9yRWFjaChmdW5jdGlvbihjb21wb25lbnQpIHtcbiAgICAgICAgLy8gTWF0Y2ggQ1NTICYgTm90IHRvIGJlIHVwZ3JhZGVkICYgTm90IHVwZ3JhZGVkLlxuICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKGNvbXBvbmVudC5jc3NDbGFzcykgJiZcbiAgICAgICAgICAgIGNsYXNzZXNUb1VwZ3JhZGUuaW5kZXhPZihjb21wb25lbnQpID09PSAtMSAmJlxuICAgICAgICAgICAgIWlzRWxlbWVudFVwZ3JhZGVkXyhlbGVtZW50LCBjb21wb25lbnQuY2xhc3NOYW1lKSkge1xuICAgICAgICAgIGNsYXNzZXNUb1VwZ3JhZGUucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc0VsZW1lbnRVcGdyYWRlZF8oZWxlbWVudCwgb3B0SnNDbGFzcykpIHtcbiAgICAgIGNsYXNzZXNUb1VwZ3JhZGUucHVzaChmaW5kUmVnaXN0ZXJlZENsYXNzXyhvcHRKc0NsYXNzKSk7XG4gICAgfVxuXG4gICAgLy8gVXBncmFkZSB0aGUgZWxlbWVudCBmb3IgZWFjaCBjbGFzc2VzLlxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gY2xhc3Nlc1RvVXBncmFkZS5sZW5ndGgsIHJlZ2lzdGVyZWRDbGFzczsgaSA8IG47IGkrKykge1xuICAgICAgcmVnaXN0ZXJlZENsYXNzID0gY2xhc3Nlc1RvVXBncmFkZVtpXTtcbiAgICAgIGlmIChyZWdpc3RlcmVkQ2xhc3MpIHtcbiAgICAgICAgLy8gTWFyayBlbGVtZW50IGFzIHVwZ3JhZGVkLlxuICAgICAgICB1cGdyYWRlZExpc3QucHVzaChyZWdpc3RlcmVkQ2xhc3MuY2xhc3NOYW1lKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnLCB1cGdyYWRlZExpc3Quam9pbignLCcpKTtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHJlZ2lzdGVyZWRDbGFzcy5jbGFzc0NvbnN0cnVjdG9yKGVsZW1lbnQpO1xuICAgICAgICBpbnN0YW5jZVtjb21wb25lbnRDb25maWdQcm9wZXJ0eV9dID0gcmVnaXN0ZXJlZENsYXNzO1xuICAgICAgICBjcmVhdGVkQ29tcG9uZW50c18ucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIC8vIENhbGwgYW55IGNhbGxiYWNrcyB0aGUgdXNlciBoYXMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgY29tcG9uZW50IHR5cGUuXG4gICAgICAgIGZvciAodmFyIGogPSAwLCBtID0gcmVnaXN0ZXJlZENsYXNzLmNhbGxiYWNrcy5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICByZWdpc3RlcmVkQ2xhc3MuY2FsbGJhY2tzW2pdKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWRDbGFzcy53aWRnZXQpIHtcbiAgICAgICAgICAvLyBBc3NpZ24gcGVyIGVsZW1lbnQgaW5zdGFuY2UgZm9yIGNvbnRyb2wgb3ZlciBBUElcbiAgICAgICAgICBlbGVtZW50W3JlZ2lzdGVyZWRDbGFzcy5jbGFzc05hbWVdID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnVW5hYmxlIHRvIGZpbmQgYSByZWdpc3RlcmVkIGNvbXBvbmVudCBmb3IgdGhlIGdpdmVuIGNsYXNzLicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdXBncmFkZWRFdiA9IGNyZWF0ZUV2ZW50XygnbWRsLWNvbXBvbmVudHVwZ3JhZGVkJywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KHVwZ3JhZGVkRXYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGxpc3Qgb2YgZWxlbWVudHMgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR8IUFycmF5PCFFbGVtZW50PnwhTm9kZUxpc3R8IUhUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgKiBUaGUgZWxlbWVudHMgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZUVsZW1lbnRzSW50ZXJuYWwoZWxlbWVudHMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IGVsZW1lbnRzLmxlbmd0aCwgZWxlbWVudDsgaSA8IG47IGkrKykge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB1cGdyYWRlRWxlbWVudEludGVybmFsKGVsZW1lbnQpO1xuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdXBncmFkZUVsZW1lbnRzSW50ZXJuYWwoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2xhc3MgZm9yIGZ1dHVyZSB1c2UgYW5kIGF0dGVtcHRzIHRvIHVwZ3JhZGUgZXhpc3RpbmcgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0ge2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnUHVibGljfSBjb25maWdcbiAgICovXG4gIGZ1bmN0aW9uIHJlZ2lzdGVySW50ZXJuYWwoY29uZmlnKSB7XG4gICAgLy8gSW4gb3JkZXIgdG8gc3VwcG9ydCBib3RoIENsb3N1cmUtY29tcGlsZWQgYW5kIHVuY29tcGlsZWQgY29kZSBhY2Nlc3NpbmdcbiAgICAvLyB0aGlzIG1ldGhvZCwgd2UgbmVlZCB0byBhbGxvdyBmb3IgYm90aCB0aGUgZG90IGFuZCBhcnJheSBzeW50YXggZm9yXG4gICAgLy8gcHJvcGVydHkgYWNjZXNzLiBZb3UnbGwgdGhlcmVmb3JlIHNlZSB0aGUgYGZvby5iYXIgfHwgZm9vWydiYXInXWBcbiAgICAvLyBwYXR0ZXJuIHJlcGVhdGVkIGFjcm9zcyB0aGlzIG1ldGhvZC5cbiAgICB2YXIgd2lkZ2V0TWlzc2luZyA9ICh0eXBlb2YgY29uZmlnLndpZGdldCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIGNvbmZpZ1snd2lkZ2V0J10gPT09ICd1bmRlZmluZWQnKTtcbiAgICB2YXIgd2lkZ2V0ID0gdHJ1ZTtcblxuICAgIGlmICghd2lkZ2V0TWlzc2luZykge1xuICAgICAgd2lkZ2V0ID0gY29uZmlnLndpZGdldCB8fCBjb25maWdbJ3dpZGdldCddO1xuICAgIH1cblxuICAgIHZhciBuZXdDb25maWcgPSAvKiogQHR5cGUge2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnfSAqLyAoe1xuICAgICAgY2xhc3NDb25zdHJ1Y3RvcjogY29uZmlnLmNvbnN0cnVjdG9yIHx8IGNvbmZpZ1snY29uc3RydWN0b3InXSxcbiAgICAgIGNsYXNzTmFtZTogY29uZmlnLmNsYXNzQXNTdHJpbmcgfHwgY29uZmlnWydjbGFzc0FzU3RyaW5nJ10sXG4gICAgICBjc3NDbGFzczogY29uZmlnLmNzc0NsYXNzIHx8IGNvbmZpZ1snY3NzQ2xhc3MnXSxcbiAgICAgIHdpZGdldDogd2lkZ2V0LFxuICAgICAgY2FsbGJhY2tzOiBbXVxuICAgIH0pO1xuXG4gICAgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uY3NzQ2xhc3MgPT09IG5ld0NvbmZpZy5jc3NDbGFzcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwcm92aWRlZCBjc3NDbGFzcyBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQ6ICcgKyBpdGVtLmNzc0NsYXNzKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmNsYXNzTmFtZSA9PT0gbmV3Q29uZmlnLmNsYXNzTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwcm92aWRlZCBjbGFzc05hbWUgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLmNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICAgICAgICAuaGFzT3duUHJvcGVydHkoY29tcG9uZW50Q29uZmlnUHJvcGVydHlfKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdNREwgY29tcG9uZW50IGNsYXNzZXMgbXVzdCBub3QgaGF2ZSAnICsgY29tcG9uZW50Q29uZmlnUHJvcGVydHlfICtcbiAgICAgICAgICAnIGRlZmluZWQgYXMgYSBwcm9wZXJ0eS4nKTtcbiAgICB9XG5cbiAgICB2YXIgZm91bmQgPSBmaW5kUmVnaXN0ZXJlZENsYXNzXyhjb25maWcuY2xhc3NBc1N0cmluZywgbmV3Q29uZmlnKTtcblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzXy5wdXNoKG5ld0NvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB1c2VyIHRvIGJlIGFsZXJ0ZWQgdG8gYW55IHVwZ3JhZGVzIHRoYXQgYXJlIHBlcmZvcm1lZCBmb3IgYSBnaXZlblxuICAgKiBjb21wb25lbnQgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ganNDbGFzcyBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgTURMIGNvbXBvbmVudCB3ZSB3aXNoXG4gICAqIHRvIGhvb2sgaW50byBmb3IgYW55IHVwZ3JhZGVzIHBlcmZvcm1lZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbighSFRNTEVsZW1lbnQpfSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB1cG9uIGFuXG4gICAqIHVwZ3JhZGUuIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGV4cGVjdCAxIHBhcmFtZXRlciAtIHRoZSBIVE1MRWxlbWVudCB3aGljaFxuICAgKiBnb3QgdXBncmFkZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2tJbnRlcm5hbChqc0NsYXNzLCBjYWxsYmFjaykge1xuICAgIHZhciByZWdDbGFzcyA9IGZpbmRSZWdpc3RlcmVkQ2xhc3NfKGpzQ2xhc3MpO1xuICAgIGlmIChyZWdDbGFzcykge1xuICAgICAgcmVnQ2xhc3MuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhbGwgcmVnaXN0ZXJlZCBjb21wb25lbnRzIGZvdW5kIGluIHRoZSBjdXJyZW50IERPTS4gVGhpcyBpc1xuICAgKiBhdXRvbWF0aWNhbGx5IGNhbGxlZCBvbiB3aW5kb3cgbG9hZC5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZ3JhZGVBbGxSZWdpc3RlcmVkSW50ZXJuYWwoKSB7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCByZWdpc3RlcmVkQ29tcG9uZW50c18ubGVuZ3RoOyBuKyspIHtcbiAgICAgIHVwZ3JhZGVEb21JbnRlcm5hbChyZWdpc3RlcmVkQ29tcG9uZW50c19bbl0uY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGRvd25ncmFkZSBtZXRob2QuXG4gICAqIEV4ZWN1dGUgaWYgZm91bmQuXG4gICAqIFJlbW92ZSBjb21wb25lbnQgZnJvbSBjcmVhdGVkQ29tcG9uZW50cyBsaXN0LlxuICAgKlxuICAgKiBAcGFyYW0gez9jb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudH0gY29tcG9uZW50XG4gICAqL1xuICBmdW5jdGlvbiBkZWNvbnN0cnVjdENvbXBvbmVudEludGVybmFsKGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIHZhciBjb21wb25lbnRJbmRleCA9IGNyZWF0ZWRDb21wb25lbnRzXy5pbmRleE9mKGNvbXBvbmVudCk7XG4gICAgICBjcmVhdGVkQ29tcG9uZW50c18uc3BsaWNlKGNvbXBvbmVudEluZGV4LCAxKTtcblxuICAgICAgdmFyIHVwZ3JhZGVzID0gY29tcG9uZW50LmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnZGF0YS11cGdyYWRlZCcpLnNwbGl0KCcsJyk7XG4gICAgICB2YXIgY29tcG9uZW50UGxhY2UgPSB1cGdyYWRlcy5pbmRleE9mKGNvbXBvbmVudFtjb21wb25lbnRDb25maWdQcm9wZXJ0eV9dLmNsYXNzQXNTdHJpbmcpO1xuICAgICAgdXBncmFkZXMuc3BsaWNlKGNvbXBvbmVudFBsYWNlLCAxKTtcbiAgICAgIGNvbXBvbmVudC5lbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnLCB1cGdyYWRlcy5qb2luKCcsJykpO1xuXG4gICAgICB2YXIgZXYgPSBjcmVhdGVFdmVudF8oJ21kbC1jb21wb25lbnRkb3duZ3JhZGVkJywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgY29tcG9uZW50LmVsZW1lbnRfLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb3duZ3JhZGUgZWl0aGVyIGEgZ2l2ZW4gbm9kZSwgYW4gYXJyYXkgb2Ygbm9kZXMsIG9yIGEgTm9kZUxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7IU5vZGV8IUFycmF5PCFOb2RlPnwhTm9kZUxpc3R9IG5vZGVzXG4gICAqL1xuICBmdW5jdGlvbiBkb3duZ3JhZGVOb2Rlc0ludGVybmFsKG5vZGVzKSB7XG4gICAgLyoqXG4gICAgICogQXV4aWxpYXJ5IGZ1bmN0aW9uIHRvIGRvd25ncmFkZSBhIHNpbmdsZSBub2RlLlxuICAgICAqIEBwYXJhbSAgeyFOb2RlfSBub2RlIHRoZSBub2RlIHRvIGJlIGRvd25ncmFkZWRcbiAgICAgKi9cbiAgICB2YXIgZG93bmdyYWRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGNyZWF0ZWRDb21wb25lbnRzXy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5lbGVtZW50XyA9PT0gbm9kZTtcbiAgICAgIH0pLmZvckVhY2goZGVjb25zdHJ1Y3RDb21wb25lbnRJbnRlcm5hbCk7XG4gICAgfTtcbiAgICBpZiAobm9kZXMgaW5zdGFuY2VvZiBBcnJheSB8fCBub2RlcyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG5vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGRvd25ncmFkZU5vZGUobm9kZXNbbl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBkb3duZ3JhZGVOb2RlKG5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHByb3ZpZGVkIHRvIGRvd25ncmFkZSBNREwgbm9kZXMuJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm93IHJldHVybiB0aGUgZnVuY3Rpb25zIHRoYXQgc2hvdWxkIGJlIG1hZGUgcHVibGljIHdpdGggdGhlaXIgcHVibGljbHlcbiAgLy8gZmFjaW5nIG5hbWVzLi4uXG4gIHJldHVybiB7XG4gICAgdXBncmFkZURvbTogdXBncmFkZURvbUludGVybmFsLFxuICAgIHVwZ3JhZGVFbGVtZW50OiB1cGdyYWRlRWxlbWVudEludGVybmFsLFxuICAgIHVwZ3JhZGVFbGVtZW50czogdXBncmFkZUVsZW1lbnRzSW50ZXJuYWwsXG4gICAgdXBncmFkZUFsbFJlZ2lzdGVyZWQ6IHVwZ3JhZGVBbGxSZWdpc3RlcmVkSW50ZXJuYWwsXG4gICAgcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrOiByZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2tJbnRlcm5hbCxcbiAgICByZWdpc3RlcjogcmVnaXN0ZXJJbnRlcm5hbCxcbiAgICBkb3duZ3JhZGVFbGVtZW50czogZG93bmdyYWRlTm9kZXNJbnRlcm5hbFxuICB9O1xufSkoKTtcblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHR5cGUgb2YgYSByZWdpc3RlcmVkIGNvbXBvbmVudCB0eXBlIG1hbmFnZWQgYnlcbiAqIGNvbXBvbmVudEhhbmRsZXIuIFByb3ZpZGVkIGZvciBiZW5lZml0IG9mIHRoZSBDbG9zdXJlIGNvbXBpbGVyLlxuICpcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGNvbnN0cnVjdG9yOiBGdW5jdGlvbixcbiAqICAgY2xhc3NBc1N0cmluZzogc3RyaW5nLFxuICogICBjc3NDbGFzczogc3RyaW5nLFxuICogICB3aWRnZXQ6IChzdHJpbmd8Ym9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5jb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ1B1YmxpYzsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgdHlwZSBvZiBhIHJlZ2lzdGVyZWQgY29tcG9uZW50IHR5cGUgbWFuYWdlZCBieVxuICogY29tcG9uZW50SGFuZGxlci4gUHJvdmlkZWQgZm9yIGJlbmVmaXQgb2YgdGhlIENsb3N1cmUgY29tcGlsZXIuXG4gKlxuICogQHR5cGVkZWYge3tcbiAqICAgY29uc3RydWN0b3I6ICFGdW5jdGlvbixcbiAqICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gKiAgIGNzc0NsYXNzOiBzdHJpbmcsXG4gKiAgIHdpZGdldDogKHN0cmluZ3xib29sZWFuKSxcbiAqICAgY2FsbGJhY2tzOiAhQXJyYXk8ZnVuY3Rpb24oIUhUTUxFbGVtZW50KT5cbiAqIH19XG4gKi9cbmNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnOyAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbi8qKlxuICogQ3JlYXRlZCBjb21wb25lbnQgKGkuZS4sIHVwZ3JhZGVkIGVsZW1lbnQpIHR5cGUgYXMgbWFuYWdlZCBieVxuICogY29tcG9uZW50SGFuZGxlci4gUHJvdmlkZWQgZm9yIGJlbmVmaXQgb2YgdGhlIENsb3N1cmUgY29tcGlsZXIuXG4gKlxuICogQHR5cGVkZWYge3tcbiAqICAgZWxlbWVudF86ICFIVE1MRWxlbWVudCxcbiAqICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gKiAgIGNsYXNzQXNTdHJpbmc6IHN0cmluZyxcbiAqICAgY3NzQ2xhc3M6IHN0cmluZyxcbiAqICAgd2lkZ2V0OiBzdHJpbmdcbiAqIH19XG4gKi9cbmNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50OyAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbi8vIEV4cG9ydCBhbGwgc3ltYm9scywgZm9yIHRoZSBiZW5lZml0IG9mIENsb3N1cmUgY29tcGlsZXIuXG4vLyBObyBlZmZlY3Qgb24gdW5jb21waWxlZCBjb2RlLlxuY29tcG9uZW50SGFuZGxlclsndXBncmFkZURvbSddID0gY29tcG9uZW50SGFuZGxlci51cGdyYWRlRG9tO1xuY29tcG9uZW50SGFuZGxlclsndXBncmFkZUVsZW1lbnQnXSA9IGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQ7XG5jb21wb25lbnRIYW5kbGVyWyd1cGdyYWRlRWxlbWVudHMnXSA9IGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzO1xuY29tcG9uZW50SGFuZGxlclsndXBncmFkZUFsbFJlZ2lzdGVyZWQnXSA9XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlQWxsUmVnaXN0ZXJlZDtcbmNvbXBvbmVudEhhbmRsZXJbJ3JlZ2lzdGVyVXBncmFkZWRDYWxsYmFjayddID1cbiAgICBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyVXBncmFkZWRDYWxsYmFjaztcbmNvbXBvbmVudEhhbmRsZXJbJ3JlZ2lzdGVyJ10gPSBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyO1xuY29tcG9uZW50SGFuZGxlclsnZG93bmdyYWRlRWxlbWVudHMnXSA9IGNvbXBvbmVudEhhbmRsZXIuZG93bmdyYWRlRWxlbWVudHM7XG53aW5kb3cuY29tcG9uZW50SGFuZGxlciA9IGNvbXBvbmVudEhhbmRsZXI7XG53aW5kb3dbJ2NvbXBvbmVudEhhbmRsZXInXSA9IGNvbXBvbmVudEhhbmRsZXI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBcIkN1dHRpbmcgdGhlIG11c3RhcmRcIiB0ZXN0LiBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgZmVhdHVyZXNcbiAgICogdGVzdGVkLCBhZGRzIGEgbWRsLWpzIGNsYXNzIHRvIHRoZSA8aHRtbD4gZWxlbWVudC4gSXQgdGhlbiB1cGdyYWRlcyBhbGwgTURMXG4gICAqIGNvbXBvbmVudHMgcmVxdWlyaW5nIEphdmFTY3JpcHQuXG4gICAqL1xuICBpZiAoJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgJiZcbiAgICAgICdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCAmJlxuICAgICAgJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdyAmJiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZGwtanMnKTtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVBbGxSZWdpc3RlcmVkKCk7XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogRHVtbXkgZnVuY3Rpb24gdG8gYXZvaWQgSlMgZXJyb3JzLlxuICAgICAqL1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQgPSBmdW5jdGlvbigpIHt9O1xuICAgIC8qKlxuICAgICAqIER1bW15IGZ1bmN0aW9uIHRvIGF2b2lkIEpTIGVycm9ycy5cbiAgICAgKi9cbiAgICBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyID0gZnVuY3Rpb24oKSB7fTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbWRsQ29tcG9uZW50SGFuZGxlci5qcyIsIi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2Rhcml1cy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUvYmxvYi9tYXN0ZXIvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzEgd2hpY2ggZGVyaXZlZCBmcm9tXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci5cbi8vIEZpeGVzIGZyb20gUGF1bCBJcmlzaCwgVGlubyBaaWpkZWwsIEFuZHJldyBNYW8sIEtsZW1lbiBTbGF2acSNLCBEYXJpdXMgQmFjb25cbi8vIE1JVCBsaWNlbnNlXG5pZiAoIURhdGUubm93KSB7XG4gICAgLyoqXG4gICAgICogRGF0ZS5ub3cgcG9seWZpbGwuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgY3VycmVudCBEYXRlXG4gICAgICovXG4gICAgRGF0ZS5ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xuICAgIERhdGVbJ25vdyddID0gRGF0ZS5ub3c7XG59XG52YXIgdmVuZG9ycyA9IFtcbiAgICAnd2Via2l0JyxcbiAgICAnbW96J1xuXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsraSkge1xuICAgIHZhciB2cCA9IHZlbmRvcnNbaV07XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2cCArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnAgKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdnAgKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgd2luZG93WydjYW5jZWxBbmltYXRpb25GcmFtZSddID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufVxuaWYgKC9pUChhZHxob25lfG9kKS4qT1MgNi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgLyoqXG4gICAgICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsLlxuICAgICAqIEBwYXJhbSAgeyFGdW5jdGlvbn0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpO1xuICAgICAgICB9LCBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gICAgd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgd2luZG93WydjYW5jZWxBbmltYXRpb25GcmFtZSddID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByQUYuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgQnV0dG9uIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbEJ1dHRvbiA9IGZ1bmN0aW9uIE1hdGVyaWFsQnV0dG9uKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxCdXR0b24nXSA9IE1hdGVyaWFsQnV0dG9uO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIFJJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1idXR0b25fX3JpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBibHVyIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5ibHVyKCk7XG4gICAgfVxufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIERpc2FibGUgYnV0dG9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG59O1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgYnV0dG9uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG59O1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucmlwcGxlRWxlbWVudF8pO1xuICAgICAgICAgICAgdGhpcy5ib3VuZFJpcHBsZUJsdXJIYW5kbGVyID0gdGhpcy5ibHVySGFuZGxlcl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRSaXBwbGVCbHVySGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZEJ1dHRvbkJsdXJIYW5kbGVyID0gdGhpcy5ibHVySGFuZGxlcl8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEJ1dHRvbkJsdXJIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZEJ1dHRvbkJsdXJIYW5kbGVyKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsQnV0dG9uLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbEJ1dHRvbicsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtYnV0dG9uJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBidXR0b24uanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgQ2hlY2tib3ggTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbENoZWNrYm94ID0gZnVuY3Rpb24gTWF0ZXJpYWxDaGVja2JveChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsQ2hlY2tib3gnXSA9IE1hdGVyaWFsQ2hlY2tib3g7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5Db25zdGFudF8gPSB7IFRJTllfVElNRU9VVDogMC4wMDEgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElOUFVUOiAnbWRsLWNoZWNrYm94X19pbnB1dCcsXG4gICAgQk9YX09VVExJTkU6ICdtZGwtY2hlY2tib3hfX2JveC1vdXRsaW5lJyxcbiAgICBGT0NVU19IRUxQRVI6ICdtZGwtY2hlY2tib3hfX2ZvY3VzLWhlbHBlcicsXG4gICAgVElDS19PVVRMSU5FOiAnbWRsLWNoZWNrYm94X190aWNrLW91dGxpbmUnLFxuICAgIFJJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1jaGVja2JveF9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0NIRUNLRUQ6ICdpcy1jaGVja2VkJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbkJsdXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS51cGRhdGVDbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVG9nZ2xlU3RhdGUoKTtcbn07XG4vKipcbiAgICogQWRkIGJsdXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuYmx1cl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgdG9nZ2xlIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBDaGVjayB0aGUgaW5wdXRzIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBEaXNhYmxlIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBDaGVjayBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ2NoZWNrJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVjaztcbi8qKlxuICAgKiBVbmNoZWNrIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsndW5jaGVjayddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUudW5jaGVjaztcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG4gICAgICAgIHZhciBib3hPdXRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBib3hPdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CT1hfT1VUTElORSk7XG4gICAgICAgIHZhciB0aWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aWNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5GT0NVU19IRUxQRVIpO1xuICAgICAgICB2YXIgdGlja091dGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRpY2tPdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5USUNLX09VVExJTkUpO1xuICAgICAgICBib3hPdXRsaW5lLmFwcGVuZENoaWxkKHRpY2tPdXRsaW5lKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aWNrQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChib3hPdXRsaW5lKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NFTlRFUik7XG4gICAgICAgICAgICB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXApO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkJsdXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEVsZW1lbnRNb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRJbnB1dE9uQmx1cik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRFbGVtZW50TW91c2VVcCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxDaGVja2JveCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxDaGVja2JveCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtY2hlY2tib3gnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNoZWNrYm94LmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIGljb24gdG9nZ2xlIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxJY29uVG9nZ2xlID0gZnVuY3Rpb24gTWF0ZXJpYWxJY29uVG9nZ2xlKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxJY29uVG9nZ2xlJ10gPSBNYXRlcmlhbEljb25Ub2dnbGU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgVElOWV9USU1FT1VUOiAwLjAwMSB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJTlBVVDogJ21kbC1pY29uLXRvZ2dsZV9faW5wdXQnLFxuICAgIEpTX1JJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1pY29uLXRvZ2dsZV9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0NIRUNLRUQ6ICdpcy1jaGVja2VkJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5vbkJsdXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uTW91c2VVcF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG59O1xuLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuYmx1cl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgdG9nZ2xlIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2NoZWNrVG9nZ2xlU3RhdGUnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBDaGVjayB0aGUgaW5wdXRzIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2NoZWNrRGlzYWJsZWQnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBEaXNhYmxlIGljb24gdG9nZ2xlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBDaGVjayBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydjaGVjayddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVjaztcbi8qKlxuICAgKiBVbmNoZWNrIGljb24gdG9nZ2xlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS51bmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ3VuY2hlY2snXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUudW5jaGVjaztcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkpTX1JJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NFTlRFUik7XG4gICAgICAgICAgICB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXApO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkJsdXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEVsZW1lbnRPbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZElucHV0T25Gb2N1cyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZElucHV0T25CbHVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRPbk1vdXNlVXApO1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtdXBncmFkZWQnKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsSWNvblRvZ2dsZSxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxJY29uVG9nZ2xlJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1pY29uLXRvZ2dsZScsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaWNvbi10b2dnbGUuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgZHJvcGRvd24gTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbE1lbnUgPSBmdW5jdGlvbiBNYXRlcmlhbE1lbnUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbE1lbnUnXSA9IE1hdGVyaWFsTWVudTtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIC8vIFRvdGFsIGR1cmF0aW9uIG9mIHRoZSBtZW51IGFuaW1hdGlvbi5cbiAgICBUUkFOU0lUSU9OX0RVUkFUSU9OX1NFQ09ORFM6IDAuMyxcbiAgICAvLyBUaGUgZnJhY3Rpb24gb2YgdGhlIHRvdGFsIGR1cmF0aW9uIHdlIHdhbnQgdG8gdXNlIGZvciBtZW51IGl0ZW0gYW5pbWF0aW9ucy5cbiAgICBUUkFOU0lUSU9OX0RVUkFUSU9OX0ZSQUNUSU9OOiAwLjgsXG4gICAgLy8gSG93IGxvbmcgdGhlIG1lbnUgc3RheXMgb3BlbiBhZnRlciBjaG9vc2luZyBhbiBvcHRpb24gKHNvIHRoZSB1c2VyIGNhbiBzZWVcbiAgICAvLyB0aGUgcmlwcGxlKS5cbiAgICBDTE9TRV9USU1FT1VUOiAxNTBcbn07XG4vKipcbiAgICogS2V5Y29kZXMsIGZvciBjb2RlIHJlYWRhYmlsaXR5LlxuICAgKlxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuS2V5Y29kZXNfID0ge1xuICAgIEVOVEVSOiAxMyxcbiAgICBFU0NBUEU6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBVUF9BUlJPVzogMzgsXG4gICAgRE9XTl9BUlJPVzogNDBcbn07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIENPTlRBSU5FUjogJ21kbC1tZW51X19jb250YWluZXInLFxuICAgIE9VVExJTkU6ICdtZGwtbWVudV9fb3V0bGluZScsXG4gICAgSVRFTTogJ21kbC1tZW51X19pdGVtJyxcbiAgICBJVEVNX1JJUFBMRV9DT05UQUlORVI6ICdtZGwtbWVudV9faXRlbS1yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIC8vIFN0YXR1c2VzXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCcsXG4gICAgSVNfVklTSUJMRTogJ2lzLXZpc2libGUnLFxuICAgIElTX0FOSU1BVElORzogJ2lzLWFuaW1hdGluZycsXG4gICAgLy8gQWxpZ25tZW50IG9wdGlvbnNcbiAgICBCT1RUT01fTEVGVDogJ21kbC1tZW51LS1ib3R0b20tbGVmdCcsXG4gICAgLy8gVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAgICBCT1RUT01fUklHSFQ6ICdtZGwtbWVudS0tYm90dG9tLXJpZ2h0JyxcbiAgICBUT1BfTEVGVDogJ21kbC1tZW51LS10b3AtbGVmdCcsXG4gICAgVE9QX1JJR0hUOiAnbWRsLW1lbnUtLXRvcC1yaWdodCcsXG4gICAgVU5BTElHTkVEOiAnbWRsLW1lbnUtLXVuYWxpZ25lZCdcbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciB0aGUgbWVudS5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNPTlRBSU5FUik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyXyA9IGNvbnRhaW5lcjtcbiAgICAgICAgLy8gQ3JlYXRlIG91dGxpbmUgZm9yIHRoZSBtZW51IChzaGFkb3cgYW5kIGJhY2tncm91bmQpLlxuICAgICAgICB2YXIgb3V0bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PVVRMSU5FKTtcbiAgICAgICAgdGhpcy5vdXRsaW5lXyA9IG91dGxpbmU7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUob3V0bGluZSwgdGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIC8vIEZpbmQgdGhlIFwiZm9yXCIgZWxlbWVudCBhbmQgYmluZCBldmVudHMgdG8gaXQuXG4gICAgICAgIHZhciBmb3JFbElkID0gdGhpcy5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2ZvcicpIHx8IHRoaXMuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdkYXRhLW1kbC1mb3InKTtcbiAgICAgICAgdmFyIGZvckVsID0gbnVsbDtcbiAgICAgICAgaWYgKGZvckVsSWQpIHtcbiAgICAgICAgICAgIGZvckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9yRWxJZCk7XG4gICAgICAgICAgICBpZiAoZm9yRWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfID0gZm9yRWw7XG4gICAgICAgICAgICAgICAgZm9yRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUZvckNsaWNrXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBmb3JFbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVGb3JLZXlib2FyZEV2ZW50Xy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNKTtcbiAgICAgICAgdGhpcy5ib3VuZEl0ZW1LZXlkb3duXyA9IHRoaXMuaGFuZGxlSXRlbUtleWJvYXJkRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJdGVtQ2xpY2tfID0gdGhpcy5oYW5kbGVJdGVtQ2xpY2tfLmJpbmQodGhpcyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGVhY2ggbWVudSBpdGVtLlxuICAgICAgICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kSXRlbUNsaWNrXyk7XG4gICAgICAgICAgICAvLyBBZGQgYSB0YWIgaW5kZXggdG8gZWFjaCBtZW51IGl0ZW0uXG4gICAgICAgICAgICBpdGVtc1tpXS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgICAgICAvLyBBZGQgYSBrZXlib2FyZCBsaXN0ZW5lciB0byBlYWNoIG1lbnUgaXRlbS5cbiAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kSXRlbUtleWRvd25fKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgcmlwcGxlIGNsYXNzZXMgdG8gZWFjaCBpdGVtLCBpZiB0aGUgdXNlciBoYXMgZW5hYmxlZCByaXBwbGVzLlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTV9SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29weSBhbGlnbm1lbnQgY2xhc3NlcyB0byB0aGUgY29udGFpbmVyLCBzbyB0aGUgb3V0bGluZSBjYW4gdXNlIHRoZW0uXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9MRUZUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX0xFRlQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIG9uIHRoZSBcImZvclwiIGVsZW1lbnQsIGJ5IHBvc2l0aW9uaW5nIHRoZSBtZW51IGFuZCB0aGVuXG4gICAqIHRvZ2dsaW5nIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oYW5kbGVGb3JDbGlja18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5mb3JFbGVtZW50Xykge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZm9yRWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBmb3JSZWN0ID0gdGhpcy5mb3JFbGVtZW50Xy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fUklHSFQpKSB7XG4gICAgICAgICAgICAvLyBQb3NpdGlvbiBiZWxvdyB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyByaWdodC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5yaWdodCA9IGZvclJlY3QucmlnaHQgLSByZWN0LnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS50b3AgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldFRvcCArIHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSkge1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gYWJvdmUgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgbGVmdC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5sZWZ0ID0gdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5ib3R0b20gPSBmb3JSZWN0LmJvdHRvbSAtIHJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIGFib3ZlIHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIHJpZ2h0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnJpZ2h0ID0gZm9yUmVjdC5yaWdodCAtIHJlY3QucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmJvdHRvbSA9IGZvclJlY3QuYm90dG9tIC0gcmVjdC50b3AgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGVmYXVsdDogcG9zaXRpb24gYmVsb3cgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgbGVmdC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5sZWZ0ID0gdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS50b3AgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldFRvcCArIHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZShldnQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEga2V5Ym9hcmQgZXZlbnQgb24gdGhlIFwiZm9yXCIgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlRm9yS2V5Ym9hcmRFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMuZm9yRWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSArICc6bm90KFtkaXNhYmxlZF0pJyk7XG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKSkge1xuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5VUF9BUlJPVykge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5ET1dOX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGtleWJvYXJkIGV2ZW50IG9uIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUl0ZW1LZXlib2FyZEV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSArICc6bm90KFtkaXNhYmxlZF0pJyk7XG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZW1zKS5pbmRleE9mKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5VUF9BUlJPVykge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2N1cnJlbnRJbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5ET1dOX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IGN1cnJlbnRJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbY3VycmVudEluZGV4ICsgMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlNQQUNFIHx8IGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FTlRFUikge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIFNlbmQgbW91c2Vkb3duIGFuZCBtb3VzZXVwIHRvIHRyaWdnZXIgcmlwcGxlLlxuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNlZG93bicpO1xuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICBlID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNldXAnKTtcbiAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCBjbGljay5cbiAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FU0NBUEUpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIGV2ZW50IG9uIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUl0ZW1DbGlja18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dC50YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXYWl0IHNvbWUgdGltZSBiZWZvcmUgY2xvc2luZyBtZW51LCBzbyB0aGUgdXNlciBjYW4gc2VlIHRoZSByaXBwbGUuXG4gICAgICAgIHRoaXMuY2xvc2luZ18gPSB0cnVlO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2luZ18gPSBmYWxzZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5DTE9TRV9USU1FT1VUKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGluaXRpYWwgY2xpcCAoZm9yIG9wZW5pbmcgdGhlIG1lbnUpIG9yIGZpbmFsIGNsaXAgKGZvciBjbG9zaW5nXG4gICAqIGl0KSwgYW5kIGFwcGxpZXMgaXQuIFRoaXMgYWxsb3dzIHVzIHRvIGFuaW1hdGUgZnJvbSBvciB0byB0aGUgY29ycmVjdCBwb2ludCxcbiAgICogdGhhdCBpcywgdGhlIHBvaW50IGl0J3MgYWxpZ25lZCB0byBpbiB0aGUgXCJmb3JcIiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgY2xpcCByZWN0YW5nbGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHRoZSBjbGlwIHJlY3RhbmdsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuYXBwbHlDbGlwXyA9IGZ1bmN0aW9uIChoZWlnaHQsIHdpZHRoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVU5BTElHTkVEKSkge1xuICAgICAgICAvLyBEbyBub3QgY2xpcC5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgbWVudS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJ3JlY3QoMCAnICsgd2lkdGggKyAncHggJyArICcwICcgKyB3aWR0aCArICdweCknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgYm90dG9tIGxlZnQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgnICsgaGVpZ2h0ICsgJ3B4IDAgJyArIGhlaWdodCArICdweCAwKSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lciBvZiB0aGUgbWVudS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJ3JlY3QoJyArIGhlaWdodCArICdweCAnICsgd2lkdGggKyAncHggJyArIGhlaWdodCArICdweCAnICsgd2lkdGggKyAncHgpJztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZWZhdWx0OiBkbyBub3QgY2xpcCAoc2FtZSBhcyBjbGlwcGluZyB0byB0aGUgdG9wIGxlZnQgY29ybmVyKS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJyc7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBhbmltYXRpb24gbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnRcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLnJlbW92ZUFuaW1hdGlvbkVuZExpc3RlbmVyXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xufTtcbi8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGNsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gZW5kcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnJlbW92ZUFuaW1hdGlvbkVuZExpc3RlbmVyXyk7XG4gICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgdGhpcy5yZW1vdmVBbmltYXRpb25FbmRMaXN0ZW5lcl8pO1xufTtcbi8qKlxuICAgKiBEaXNwbGF5cyB0aGUgbWVudS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8gJiYgdGhpcy5vdXRsaW5lXykge1xuICAgICAgICAvLyBNZWFzdXJlIHRoZSBpbm5lciBlbGVtZW50LlxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIC8vIEFwcGx5IHRoZSBpbm5lciBlbGVtZW50J3Mgc2l6ZSB0byB0aGUgY29udGFpbmVyIGFuZCBvdXRsaW5lLlxuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLm91dGxpbmVfLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLm91dGxpbmVfLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLkNvbnN0YW50Xy5UUkFOU0lUSU9OX0RVUkFUSU9OX1NFQ09ORFMgKiB0aGlzLkNvbnN0YW50Xy5UUkFOU0lUSU9OX0RVUkFUSU9OX0ZSQUNUSU9OO1xuICAgICAgICAvLyBDYWxjdWxhdGUgdHJhbnNpdGlvbiBkZWxheXMgZm9yIGluZGl2aWR1YWwgbWVudSBpdGVtcywgc28gdGhhdCB0aGV5IGZhZGVcbiAgICAgICAgLy8gaW4gb25lIGF0IGEgdGltZS5cbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtRGVsYXkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpIHx8IHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1EZWxheSA9IChoZWlnaHQgLSBpdGVtc1tpXS5vZmZzZXRUb3AgLSBpdGVtc1tpXS5vZmZzZXRIZWlnaHQpIC8gaGVpZ2h0ICogdHJhbnNpdGlvbkR1cmF0aW9uICsgJ3MnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtRGVsYXkgPSBpdGVtc1tpXS5vZmZzZXRUb3AgLyBoZWlnaHQgKiB0cmFuc2l0aW9uRHVyYXRpb24gKyAncyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtc1tpXS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBpdGVtRGVsYXk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwbHkgdGhlIGluaXRpYWwgY2xpcCB0byB0aGUgdGV4dCBiZWZvcmUgd2Ugc3RhcnQgYW5pbWF0aW5nLlxuICAgICAgICB0aGlzLmFwcGx5Q2xpcF8oaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBuZXh0IGZyYW1lLCB0dXJuIG9uIGFuaW1hdGlvbiwgYW5kIGFwcGx5IHRoZSBmaW5hbCBjbGlwLlxuICAgICAgICAvLyBBbHNvIG1ha2UgaXQgdmlzaWJsZS4gVGhpcyB0cmlnZ2VycyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICdyZWN0KDAgJyArIHdpZHRoICsgJ3B4ICcgKyBoZWlnaHQgKyAncHggMCknO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgICAgdGhpcy5hZGRBbmltYXRpb25FbmRMaXN0ZW5lcl8oKTtcbiAgICAgICAgLy8gQWRkIGEgY2xpY2sgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50LCB0byBjbG9zZSB0aGUgbWVudS5cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZG9jdW1lbnQgaXMgcHJvY2Vzc2luZyB0aGUgc2FtZSBldmVudCB0aGF0XG4gICAgICAgICAgICAvLyBkaXNwbGF5ZWQgdGhlIG1lbnUgaW4gdGhlIGZpcnN0IHBsYWNlLiBJZiBzbywgZG8gbm90aGluZy5cbiAgICAgICAgICAgIC8vIEFsc28gY2hlY2sgdG8gc2VlIGlmIHRoZSBtZW51IGlzIGluIHRoZSBwcm9jZXNzIG9mIGNsb3NpbmcgaXRzZWxmLCBhbmRcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmcgaW4gdGhhdCBjYXNlLlxuICAgICAgICAgICAgLy8gQWxzbyBjaGVjayBpZiB0aGUgY2xpY2tlZCBlbGVtZW50IGlzIGEgbWVudSBpdGVtXG4gICAgICAgICAgICAvLyBpZiBzbywgZG8gbm90aGluZy5cbiAgICAgICAgICAgIGlmIChlICE9PSBldnQgJiYgIXRoaXMuY2xvc2luZ18gJiYgZS50YXJnZXQucGFyZW50Tm9kZSAhPT0gdGhpcy5lbGVtZW50Xykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgIH1cbn07XG5NYXRlcmlhbE1lbnUucHJvdG90eXBlWydzaG93J10gPSBNYXRlcmlhbE1lbnUucHJvdG90eXBlLnNob3c7XG4vKipcbiAgICogSGlkZXMgdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMub3V0bGluZV8pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSk7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgdHJhbnNpdGlvbiBkZWxheXM7IG1lbnUgaXRlbXMgZmFkZSBvdXQgY29uY3VycmVudGx5LlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtc1tpXS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kZWxheScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1lYXN1cmUgdGhlIGlubmVyIGVsZW1lbnQuXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xuICAgICAgICAvLyBUdXJuIG9uIGFuaW1hdGlvbiwgYW5kIGFwcGx5IHRoZSBmaW5hbCBjbGlwLiBBbHNvIG1ha2UgaW52aXNpYmxlLlxuICAgICAgICAvLyBUaGlzIHRyaWdnZXJzIHRoZSB0cmFuc2l0aW9ucy5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICAgICAgdGhpcy5hcHBseUNsaXBfKGhlaWdodCwgd2lkdGgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpO1xuICAgICAgICAvLyBDbGVhbiB1cCBhZnRlciB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAgICB0aGlzLmFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXygpO1xuICAgIH1cbn07XG5NYXRlcmlhbE1lbnUucHJvdG90eXBlWydoaWRlJ10gPSBNYXRlcmlhbE1lbnUucHJvdG90eXBlLmhpZGU7XG4vKipcbiAgICogRGlzcGxheXMgb3IgaGlkZXMgdGhlIG1lbnUsIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coZXZ0KTtcbiAgICB9XG59O1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZVsndG9nZ2xlJ10gPSBNYXRlcmlhbE1lbnUucHJvdG90eXBlLnRvZ2dsZTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbE1lbnUsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsTWVudScsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtbWVudScsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbWVudS5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBQcm9ncmVzcyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsUHJvZ3Jlc3MgPSBmdW5jdGlvbiBNYXRlcmlhbFByb2dyZXNzKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxQcm9ncmVzcyddID0gTWF0ZXJpYWxQcm9ncmVzcztcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7IElOREVURVJNSU5BVEVfQ0xBU1M6ICdtZGwtcHJvZ3Jlc3NfX2luZGV0ZXJtaW5hdGUnIH07XG4vKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBwcm9ncmVzc2Jhci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHAgUGVyY2VudGFnZSBvZiB0aGUgcHJvZ3Jlc3MgKDAtMTAwKVxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAocCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklOREVURVJNSU5BVEVfQ0xBU1MpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9ncmVzc2Jhcl8uc3R5bGUud2lkdGggPSBwICsgJyUnO1xufTtcbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlWydzZXRQcm9ncmVzcyddID0gTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0UHJvZ3Jlc3M7XG4vKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBidWZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwIFBlcmNlbnRhZ2Ugb2YgdGhlIGJ1ZmZlciAoMC0xMDApXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5zZXRCdWZmZXIgPSBmdW5jdGlvbiAocCkge1xuICAgIHRoaXMuYnVmZmVyYmFyXy5zdHlsZS53aWR0aCA9IHAgKyAnJSc7XG4gICAgdGhpcy5hdXhiYXJfLnN0eWxlLndpZHRoID0gMTAwIC0gcCArICclJztcbn07XG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZVsnc2V0QnVmZmVyJ10gPSBNYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5zZXRCdWZmZXI7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwcm9ncmVzc2JhciBiYXIgYmFyMSc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLnByb2dyZXNzYmFyXyA9IGVsO1xuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSAnYnVmZmVyYmFyIGJhciBiYXIyJztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuYnVmZmVyYmFyXyA9IGVsO1xuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSAnYXV4YmFyIGJhciBiYXIzJztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuYXV4YmFyXyA9IGVsO1xuICAgICAgICB0aGlzLnByb2dyZXNzYmFyXy5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgICAgIHRoaXMuYnVmZmVyYmFyXy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5hdXhiYXJfLnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxQcm9ncmVzcyxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxQcm9ncmVzcycsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtcHJvZ3Jlc3MnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHByb2dyZXNzLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFJhZGlvIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxSYWRpbyA9IGZ1bmN0aW9uIE1hdGVyaWFsUmFkaW8oZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFJhZGlvJ10gPSBNYXRlcmlhbFJhZGlvO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICAgIEpTX1JBRElPOiAnbWRsLWpzLXJhZGlvJyxcbiAgICBSQURJT19CVE46ICdtZGwtcmFkaW9fX2J1dHRvbicsXG4gICAgUkFESU9fT1VURVJfQ0lSQ0xFOiAnbWRsLXJhZGlvX19vdXRlci1jaXJjbGUnLFxuICAgIFJBRElPX0lOTkVSX0NJUkNMRTogJ21kbC1yYWRpb19faW5uZXItY2lyY2xlJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtcmFkaW9fX3JpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFNpbmNlIG90aGVyIHJhZGlvIGJ1dHRvbnMgZG9uJ3QgZ2V0IGNoYW5nZSBldmVudHMsIHdlIG5lZWQgdG8gbG9vayBmb3JcbiAgICAvLyB0aGVtIHRvIHVwZGF0ZSB0aGVpciBjbGFzc2VzLlxuICAgIHZhciByYWRpb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUkFESU8pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBidXR0b24gPSByYWRpb3NbaV0ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0JUTik7XG4gICAgICAgIC8vIERpZmZlcmVudCBuYW1lID09IGRpZmZlcmVudCBncm91cCwgc28gbm8gcG9pbnQgdXBkYXRpbmcgdGhvc2UuXG4gICAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCduYW1lJykgPT09IHRoaXMuYnRuRWxlbWVudF8uZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmFkaW9zW2ldWydNYXRlcmlhbFJhZGlvJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmFkaW9zW2ldWydNYXRlcmlhbFJhZGlvJ10udXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25Nb3VzZXVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuYmx1cl8oKTtcbn07XG4vKipcbiAgICogVXBkYXRlIGNsYXNzZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG59O1xuLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmJsdXJfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgd2h5IHRoZXJlJ3MgYSBmb2N1cyBldmVudCBiZWluZyBmaXJlZCBhZnRlciBvdXIgYmx1cixcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGhhY2suXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgZGlzYWJsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmJ0bkVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIHRvZ2dsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmJ0bkVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlO1xuLyoqXG4gICAqIERpc2FibGUgcmFkaW8uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgcmFkaW8uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5FbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogQ2hlY2sgcmFkaW8uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMub25DaGFuZ2VfKG51bGwpO1xufTtcbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlWydjaGVjayddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2s7XG4vKipcbiAgICogVW5jaGVjayByYWRpby5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLnVuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5FbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5vbkNoYW5nZV8obnVsbCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ3VuY2hlY2snXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLnVuY2hlY2s7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0JUTik7XG4gICAgICAgIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyXyA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRGb2N1c0hhbmRsZXJfID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEJsdXJIYW5kbGVyXyA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXJfID0gdGhpcy5vbk1vdXNldXBfLmJpbmQodGhpcyk7XG4gICAgICAgIHZhciBvdXRlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPX09VVEVSX0NJUkNMRSk7XG4gICAgICAgIHZhciBpbm5lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0lOTkVSX0NJUkNMRSk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQob3V0ZXJDaXJjbGUpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcbiAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lcjtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyXyk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idG5FbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxSYWRpbyxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxSYWRpbycsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtcmFkaW8nLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJhZGlvLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFNsaWRlciBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsU2xpZGVyID0gZnVuY3Rpb24gTWF0ZXJpYWxTbGlkZXIoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEJyb3dzZXIgZmVhdHVyZSBkZXRlY3Rpb24uXG4gICAgdGhpcy5pc0lFXyA9IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxTbGlkZXInXSA9IE1hdGVyaWFsU2xpZGVyO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElFX0NPTlRBSU5FUjogJ21kbC1zbGlkZXJfX2llLWNvbnRhaW5lcicsXG4gICAgU0xJREVSX0NPTlRBSU5FUjogJ21kbC1zbGlkZXJfX2NvbnRhaW5lcicsXG4gICAgQkFDS0dST1VORF9GTEVYOiAnbWRsLXNsaWRlcl9fYmFja2dyb3VuZC1mbGV4JyxcbiAgICBCQUNLR1JPVU5EX0xPV0VSOiAnbWRsLXNsaWRlcl9fYmFja2dyb3VuZC1sb3dlcicsXG4gICAgQkFDS0dST1VORF9VUFBFUjogJ21kbC1zbGlkZXJfX2JhY2tncm91bmQtdXBwZXInLFxuICAgIElTX0xPV0VTVF9WQUxVRTogJ2lzLWxvd2VzdC12YWx1ZScsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCdcbn07XG4vKipcbiAgICogSGFuZGxlIGlucHV0IG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbklucHV0XyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlVmFsdWVTdHlsZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlVmFsdWVTdHlsZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LmJsdXIoKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlZG93biBvbiBjb250YWluZXIgZWxlbWVudC5cbiAgICogVGhpcyBoYW5kbGVyIGlzIHB1cnBvc2UgaXMgdG8gbm90IHJlcXVpcmUgdGhlIHVzZSB0byBjbGlja1xuICAgKiBleGFjdGx5IG9uIHRoZSAycHggc2xpZGVyIGVsZW1lbnQsIGFzIEZpcmVGb3ggc2VlbXMgdG8gYmUgdmVyeVxuICAgKiBzdHJpY3QgYWJvdXQgdGhpcy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdXBwcmVzcyB7bWlzc2luZ1Byb3BlcnRpZXN9XG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLm9uQ29udGFpbmVyTW91c2VEb3duXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIElmIHRoaXMgY2xpY2sgaXMgbm90IG9uIHRoZSBwYXJlbnQgZWxlbWVudCAoYnV0IHJhdGhlciBzb21lIGNoaWxkKVxuICAgIC8vIGlnbm9yZS4gSXQgbWF5IHN0aWxsIGJ1YmJsZSB1cC5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBEaXNjYXJkIHRoZSBvcmlnaW5hbCBldmVudCBhbmQgY3JlYXRlIGEgbmV3IGV2ZW50IHRoYXRcbiAgICAvLyBpcyBvbiB0aGUgc2xpZGVyIGVsZW1lbnQuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudCgnbW91c2Vkb3duJywge1xuICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55XG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KTtcbn07XG4vKipcbiAgICogSGFuZGxlIHVwZGF0aW5nIG9mIHZhbHVlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUudXBkYXRlVmFsdWVTdHlsZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIENhbGN1bGF0ZSBhbmQgYXBwbHkgcGVyY2VudGFnZXMgdG8gZGl2IHN0cnVjdHVyZSBiZWhpbmQgc2xpZGVyLlxuICAgIHZhciBmcmFjdGlvbiA9ICh0aGlzLmVsZW1lbnRfLnZhbHVlIC0gdGhpcy5lbGVtZW50Xy5taW4pIC8gKHRoaXMuZWxlbWVudF8ubWF4IC0gdGhpcy5lbGVtZW50Xy5taW4pO1xuICAgIGlmIChmcmFjdGlvbiA9PT0gMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19MT1dFU1RfVkFMVUUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0xPV0VTVF9WQUxVRSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0lFXykge1xuICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8uc3R5bGUuZmxleCA9IGZyYWN0aW9uO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8uc3R5bGUud2Via2l0RmxleCA9IGZyYWN0aW9uO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRVcHBlcl8uc3R5bGUuZmxleCA9IDEgLSBmcmFjdGlvbjtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfLnN0eWxlLndlYmtpdEZsZXggPSAxIC0gZnJhY3Rpb247XG4gICAgfVxufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIERpc2FibGUgc2xpZGVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG59O1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgc2xpZGVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG59O1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogVXBkYXRlIHNsaWRlciB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB3aGljaCB0byBzZXQgdGhlIGNvbnRyb2wgKG9wdGlvbmFsKS5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVTdHlsZXNfKCk7XG59O1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlWydjaGFuZ2UnXSA9IE1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5jaGFuZ2U7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSUVfKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB3ZSBuZWVkIHRvIHNwZWNpZnkgYSB2ZXJ5IGxhcmdlIGhlaWdodCBpbiBJRSBkdWUgdG9cbiAgICAgICAgICAgIC8vIGltcGxlbWVudGF0aW9uIGxpbWl0YXRpb25zLCB3ZSBhZGQgYSBwYXJlbnQgaGVyZSB0aGF0IHRyaW1zIGl0IGRvd24gdG9cbiAgICAgICAgICAgIC8vIGEgcmVhc29uYWJsZSBzaXplLlxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250YWluZXJJRS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSUVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVySUUsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgY29udGFpbmVySUUuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3Igbm9uLUlFIGJyb3dzZXJzLCB3ZSBuZWVkIGEgZGl2IHN0cnVjdHVyZSB0aGF0IHNpdHMgYmVoaW5kIHRoZVxuICAgICAgICAgICAgLy8gc2xpZGVyIGFuZCBhbGxvd3MgdXMgdG8gc3R5bGUgdGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGVzIG9mIGl0IHdpdGhcbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBjb2xvcnMuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlNMSURFUl9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjb250YWluZXIsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgdmFyIGJhY2tncm91bmRGbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmxleC5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQkFDS0dST1VORF9GTEVYKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kRmxleCk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZExvd2VyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQkFDS0dST1VORF9MT1dFUik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmxleC5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmRMb3dlcl8pO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRVcHBlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJBQ0tHUk9VTkRfVVBQRVIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZEZsZXguYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kVXBwZXJfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kSW5wdXRIYW5kbGVyID0gdGhpcy5vbklucHV0Xy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlciA9IHRoaXMub25Db250YWluZXJNb3VzZURvd25fLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmJvdW5kSW5wdXRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlcik7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVTdHlsZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsU2xpZGVyLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFNsaWRlcicsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc2xpZGVyJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzbGlkZXIuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBTbmFja2JhciBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsU25hY2tiYXIgPSBmdW5jdGlvbiBNYXRlcmlhbFNuYWNrYmFyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICB0aGlzLnRleHRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLmNzc0NsYXNzZXNfLk1FU1NBR0UpO1xuICAgIHRoaXMuYWN0aW9uRWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5jc3NDbGFzc2VzXy5BQ1RJT04pO1xuICAgIGlmICghdGhpcy50ZXh0RWxlbWVudF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGEgbWVzc2FnZSBlbGVtZW50IGZvciBhIHNuYWNrYmFyLicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYWN0aW9uRWxlbWVudF8pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBtdXN0IGJlIGFuIGFjdGlvbiBlbGVtZW50IGZvciBhIHNuYWNrYmFyLicpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aW9uSGFuZGxlcl8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlXyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGlvblRleHRfID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucXVldWVkTm90aWZpY2F0aW9uc18gPSBbXTtcbiAgICB0aGlzLnNldEFjdGlvbkhpZGRlbl8odHJ1ZSk7XG59O1xud2luZG93WydNYXRlcmlhbFNuYWNrYmFyJ10gPSBNYXRlcmlhbFNuYWNrYmFyO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIC8vIFRoZSBkdXJhdGlvbiBvZiB0aGUgc25hY2tiYXIgc2hvdy9oaWRlIGFuaW1hdGlvbiwgaW4gbXMuXG4gICAgQU5JTUFUSU9OX0xFTkdUSDogMjUwXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuY3NzQ2xhc3Nlc18gPSB7XG4gICAgU05BQ0tCQVI6ICdtZGwtc25hY2tiYXInLFxuICAgIE1FU1NBR0U6ICdtZGwtc25hY2tiYXJfX3RleHQnLFxuICAgIEFDVElPTjogJ21kbC1zbmFja2Jhcl9fYWN0aW9uJyxcbiAgICBBQ1RJVkU6ICdtZGwtc25hY2tiYXItLWFjdGl2ZSdcbn07XG4vKipcbiAgICogRGlzcGxheSB0aGUgc25hY2tiYXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuZGlzcGxheVNuYWNrYmFyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmICh0aGlzLmFjdGlvbkhhbmRsZXJfKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8udGV4dENvbnRlbnQgPSB0aGlzLmFjdGlvblRleHRfO1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY3Rpb25IYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9uSGlkZGVuXyhmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMudGV4dEVsZW1lbnRfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXztcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5jc3NDbGFzc2VzXy5BQ1RJVkUpO1xuICAgIHRoaXMuZWxlbWVudF8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIHNldFRpbWVvdXQodGhpcy5jbGVhbnVwXy5iaW5kKHRoaXMpLCB0aGlzLnRpbWVvdXRfKTtcbn07XG4vKipcbiAgICogU2hvdyB0aGUgc25hY2tiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuc2hvd1NuYWNrYmFyID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBkYXRhIG9iamVjdCB3aXRoIGF0IGxlYXN0IGEgbWVzc2FnZSB0byBkaXNwbGF5LicpO1xuICAgIH1cbiAgICBpZiAoZGF0YVsnbWVzc2FnZSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkLicpO1xuICAgIH1cbiAgICBpZiAoZGF0YVsnYWN0aW9uSGFuZGxlciddICYmICFkYXRhWydhY3Rpb25UZXh0J10pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhY3Rpb24gdGV4dCB3aXRoIHRoZSBoYW5kbGVyLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5xdWV1ZWROb3RpZmljYXRpb25zXy5wdXNoKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlXyA9IGRhdGFbJ21lc3NhZ2UnXTtcbiAgICAgICAgaWYgKGRhdGFbJ3RpbWVvdXQnXSkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0XyA9IGRhdGFbJ3RpbWVvdXQnXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGltZW91dF8gPSAyNzUwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhWydhY3Rpb25IYW5kbGVyJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcl8gPSBkYXRhWydhY3Rpb25IYW5kbGVyJ107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbJ2FjdGlvblRleHQnXSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25UZXh0XyA9IGRhdGFbJ2FjdGlvblRleHQnXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BsYXlTbmFja2Jhcl8oKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGVbJ3Nob3dTbmFja2JhciddID0gTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuc2hvd1NuYWNrYmFyO1xuLyoqXG4gICAqIENoZWNrIGlmIHRoZSBxdWV1ZSBoYXMgaXRlbXMgd2l0aGluIGl0LlxuICAgKiBJZiBpdCBkb2VzLCBkaXNwbGF5IHRoZSBuZXh0IGVudHJ5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLmNoZWNrUXVldWVfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnF1ZXVlZE5vdGlmaWNhdGlvbnNfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zaG93U25hY2tiYXIodGhpcy5xdWV1ZWROb3RpZmljYXRpb25zXy5zaGlmdCgpKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENsZWFudXAgdGhlIHNuYWNrYmFyIGV2ZW50IGxpc3RlbmVycyBhbmQgYWNjZXNzaWJsaXR5IGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuY2xlYW51cF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY3NzQ2xhc3Nlc18uQUNUSVZFKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy50ZXh0RWxlbWVudF8udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgaWYgKCFCb29sZWFuKHRoaXMuYWN0aW9uRWxlbWVudF8uZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb25IaWRkZW5fKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25FbGVtZW50Xy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25FbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWN0aW9uSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcl8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWVzc2FnZV8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYWN0aW9uVGV4dF8gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hlY2tRdWV1ZV8oKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLkFOSU1BVElPTl9MRU5HVEgpO1xufTtcbi8qKlxuICAgKiBTZXQgdGhlIGFjdGlvbiBoYW5kbGVyIGhpZGRlbiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLnNldEFjdGlvbkhpZGRlbl8gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25FbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsU25hY2tiYXIsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU25hY2tiYXInLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXNuYWNrYmFyJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzbmFja2Jhci5qcyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBTcGlubmVyIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG52YXIgTWF0ZXJpYWxTcGlubmVyID0gZnVuY3Rpb24gTWF0ZXJpYWxTcGlubmVyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxTcGlubmVyJ10gPSBNYXRlcmlhbFNwaW5uZXI7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgTURMX1NQSU5ORVJfTEFZRVJfQ09VTlQ6IDQgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgTURMX1NQSU5ORVJfTEFZRVI6ICdtZGwtc3Bpbm5lcl9fbGF5ZXInLFxuICAgIE1ETF9TUElOTkVSX0NJUkNMRV9DTElQUEVSOiAnbWRsLXNwaW5uZXJfX2NpcmNsZS1jbGlwcGVyJyxcbiAgICBNRExfU1BJTk5FUl9DSVJDTEU6ICdtZGwtc3Bpbm5lcl9fY2lyY2xlJyxcbiAgICBNRExfU1BJTk5FUl9HQVBfUEFUQ0g6ICdtZGwtc3Bpbm5lcl9fZ2FwLXBhdGNoJyxcbiAgICBNRExfU1BJTk5FUl9MRUZUOiAnbWRsLXNwaW5uZXJfX2xlZnQnLFxuICAgIE1ETF9TUElOTkVSX1JJR0hUOiAnbWRsLXNwaW5uZXJfX3JpZ2h0J1xufTtcbi8qKlxuICAgKiBBdXhpbGlhcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIHNwaW5uZXIgbGF5ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCBvZiB0aGUgbGF5ZXIgdG8gYmUgY3JlYXRlZC5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuY3JlYXRlTGF5ZXIgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB2YXIgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfTEFZRVIpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9MQVlFUiArICctJyArIGluZGV4KTtcbiAgICB2YXIgbGVmdENsaXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0Q2xpcHBlci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVIpO1xuICAgIGxlZnRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9MRUZUKTtcbiAgICB2YXIgZ2FwUGF0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYXBQYXRjaC5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfR0FQX1BBVENIKTtcbiAgICB2YXIgcmlnaHRDbGlwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUik7XG4gICAgcmlnaHRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9SSUdIVCk7XG4gICAgdmFyIGNpcmNsZU93bmVycyA9IFtcbiAgICAgICAgbGVmdENsaXBwZXIsXG4gICAgICAgIGdhcFBhdGNoLFxuICAgICAgICByaWdodENsaXBwZXJcbiAgICBdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlT3duZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEUpO1xuICAgICAgICBjaXJjbGVPd25lcnNbaV0uYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICB9XG4gICAgbGF5ZXIuYXBwZW5kQ2hpbGQobGVmdENsaXBwZXIpO1xuICAgIGxheWVyLmFwcGVuZENoaWxkKGdhcFBhdGNoKTtcbiAgICBsYXllci5hcHBlbmRDaGlsZChyaWdodENsaXBwZXIpO1xuICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQobGF5ZXIpO1xufTtcbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGVbJ2NyZWF0ZUxheWVyJ10gPSBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLmNyZWF0ZUxheWVyO1xuLyoqXG4gICAqIFN0b3BzIHRoZSBzcGlubmVyIGFuaW1hdGlvbi5cbiAgICogUHVibGljIG1ldGhvZCBmb3IgdXNlcnMgd2hvIG5lZWQgdG8gc3RvcCB0aGUgc3Bpbm5lciBmb3IgYW55IHJlYXNvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xufTtcbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGVbJ3N0b3AnXSA9IE1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuc3RvcDtcbi8qKlxuICAgKiBTdGFydHMgdGhlIHNwaW5uZXIgYW5pbWF0aW9uLlxuICAgKiBQdWJsaWMgbWV0aG9kIGZvciB1c2VycyB3aG8gbmVlZCB0byBtYW51YWxseSBzdGFydCB0aGUgc3Bpbm5lciBmb3IgYW55IHJlYXNvblxuICAgKiAoaW5zdGVhZCBvZiBqdXN0IGFkZGluZyB0aGUgJ2lzLWFjdGl2ZScgY2xhc3MgdG8gdGhlaXIgbWFya3VwKS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbn07XG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlWydzdGFydCddID0gTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdGFydDtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMuQ29uc3RhbnRfLk1ETF9TUElOTkVSX0xBWUVSX0NPVU5UOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGF5ZXIoaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxTcGlubmVyLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFNwaW5uZXInLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXNwaW5uZXInLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNwaW5uZXIuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgQ2hlY2tib3ggTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFN3aXRjaCA9IGZ1bmN0aW9uIE1hdGVyaWFsU3dpdGNoKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxTd2l0Y2gnXSA9IE1hdGVyaWFsU3dpdGNoO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgVElOWV9USU1FT1VUOiAwLjAwMSB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElOUFVUOiAnbWRsLXN3aXRjaF9faW5wdXQnLFxuICAgIFRSQUNLOiAnbWRsLXN3aXRjaF9fdHJhY2snLFxuICAgIFRIVU1COiAnbWRsLXN3aXRjaF9fdGh1bWInLFxuICAgIEZPQ1VTX0hFTFBFUjogJ21kbC1zd2l0Y2hfX2ZvY3VzLWhlbHBlcicsXG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLXN3aXRjaF9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0NIRUNLRUQ6ICdpcy1jaGVja2VkJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25DaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbkJsdXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25Nb3VzZVVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuYmx1cl8oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuYmx1cl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIGRpc2FibGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ2NoZWNrRGlzYWJsZWQnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIHRvZ2dsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGU7XG4vKipcbiAgICogRGlzYWJsZSBzd2l0Y2guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBzd2l0Y2guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBBY3RpdmF0ZSBzd2l0Y2guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ29uJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub247XG4vKipcbiAgICogRGVhY3RpdmF0ZSBzd2l0Y2guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnb2ZmJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub2ZmO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG4gICAgICAgIHZhciB0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0cmFjay5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVFJBQ0spO1xuICAgICAgICB2YXIgdGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGh1bWIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRIVU1CKTtcbiAgICAgICAgdmFyIGZvY3VzSGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBmb2N1c0hlbHBlci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uRk9DVVNfSEVMUEVSKTtcbiAgICAgICAgdGh1bWIuYXBwZW5kQ2hpbGQoZm9jdXNIZWxwZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRyYWNrKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aHVtYik7XG4gICAgICAgIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRCbHVySGFuZGxlciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtdXBncmFkZWQnKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsU3dpdGNoLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFN3aXRjaCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc3dpdGNoJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzd2l0Y2guanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgVGV4dGZpZWxkIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxUZXh0ZmllbGQgPSBmdW5jdGlvbiBNYXRlcmlhbFRleHRmaWVsZChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgdGhpcy5tYXhSb3dzID0gdGhpcy5Db25zdGFudF8uTk9fTUFYX1JPV1M7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsVGV4dGZpZWxkJ10gPSBNYXRlcmlhbFRleHRmaWVsZDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgTk9fTUFYX1JPV1M6IC0xLFxuICAgIE1BWF9ST1dTX0FUVFJJQlVURTogJ21heHJvd3MnXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIExBQkVMOiAnbWRsLXRleHRmaWVsZF9fbGFiZWwnLFxuICAgIElOUFVUOiAnbWRsLXRleHRmaWVsZF9faW5wdXQnLFxuICAgIElTX0RJUlRZOiAnaXMtZGlydHknLFxuICAgIElTX0ZPQ1VTRUQ6ICdpcy1mb2N1c2VkJyxcbiAgICBJU19ESVNBQkxFRDogJ2lzLWRpc2FibGVkJyxcbiAgICBJU19JTlZBTElEOiAnaXMtaW52YWxpZCcsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCcsXG4gICAgSEFTX1BMQUNFSE9MREVSOiAnaGFzLXBsYWNlaG9sZGVyJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgaW5wdXQgYmVpbmcgZW50ZXJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uS2V5RG93bl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgY3VycmVudFJvd0NvdW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KCdcXG4nKS5sZW5ndGg7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGlmIChjdXJyZW50Um93Q291bnQgPj0gdGhpcy5tYXhSb3dzKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGUgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIHJlc2V0IGV2ZW50IGZyb20gb3V0IHNpZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5vblJlc2V0XyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuICAgIHRoaXMuY2hlY2tEaXJ0eSgpO1xuICAgIHRoaXMuY2hlY2tGb2N1cygpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBkaXNhYmxlZCBzdGF0ZSBhbmQgdXBkYXRlIGZpZWxkIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgKiBDaGVjayB0aGUgZm9jdXMgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgKlxuICAqIEBwdWJsaWNcbiAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0ZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChCb29sZWFuKHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignOmZvY3VzJykpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2NoZWNrRm9jdXMnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0ZvY3VzO1xuLyoqXG4gICAqIENoZWNrIHRoZSB2YWxpZGl0eSBzdGF0ZSBhbmQgdXBkYXRlIGZpZWxkIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRfLnZhbGlkaXR5KSB7XG4gICAgICAgIGlmICh0aGlzLmlucHV0Xy52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfSU5WQUxJRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2NoZWNrVmFsaWRpdHknXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5O1xuLyoqXG4gICAqIENoZWNrIHRoZSBkaXJ0eSBzdGF0ZSBhbmQgdXBkYXRlIGZpZWxkIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRGlydHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRfLnZhbHVlICYmIHRoaXMuaW5wdXRfLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElSVFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJUlRZKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGVja0RpcnR5J10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXJ0eTtcbi8qKlxuICAgKiBEaXNhYmxlIHRleHQgZmllbGQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHRleHQgZmllbGQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIFVwZGF0ZSB0ZXh0IGZpZWxkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHdoaWNoIHRvIHNldCB0aGUgY29udHJvbCAob3B0aW9uYWwpLlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuaW5wdXRfLnZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hhbmdlJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hhbmdlO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmxhYmVsXyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLkxBQkVMKTtcbiAgICAgICAgdGhpcy5pbnB1dF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG4gICAgICAgIGlmICh0aGlzLmlucHV0Xykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRfLmhhc0F0dHJpYnV0ZSh0aGlzLkNvbnN0YW50Xy5NQVhfUk9XU19BVFRSSUJVVEUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhSb3dzID0gcGFyc2VJbnQodGhpcy5pbnB1dF8uZ2V0QXR0cmlidXRlKHRoaXMuQ29uc3RhbnRfLk1BWF9ST1dTX0FUVFJJQlVURSksIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5tYXhSb3dzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heFJvd3MgPSB0aGlzLkNvbnN0YW50Xy5OT19NQVhfUk9XUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dF8uaGFzQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSEFTX1BMQUNFSE9MREVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm91bmRVcGRhdGVDbGFzc2VzSGFuZGxlciA9IHRoaXMudXBkYXRlQ2xhc3Nlc18uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kQmx1ckhhbmRsZXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSZXNldEhhbmRsZXIgPSB0aGlzLm9uUmVzZXRfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYm91bmRVcGRhdGVDbGFzc2VzSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIHRoaXMuYm91bmRSZXNldEhhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWF4Um93cyAhPT0gdGhpcy5Db25zdGFudF8uTk9fTUFYX1JPV1MpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIHNob3VsZCBoYW5kbGUgcGFzdGluZyBtdWx0aSBsaW5lIHRleHQuXG4gICAgICAgICAgICAgICAgLy8gQ3VycmVudGx5IGRvZXNuJ3QuXG4gICAgICAgICAgICAgICAgdGhpcy5ib3VuZEtleURvd25IYW5kbGVyID0gdGhpcy5vbktleURvd25fLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlEb3duSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW52YWxpZCA9IHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfSU5WQUxJRCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0lOVkFMSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRfLmhhc0F0dHJpYnV0ZSgnYXV0b2ZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsVGV4dGZpZWxkLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFRleHRmaWVsZCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtdGV4dGZpZWxkJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0ZXh0ZmllbGQuanMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgVG9vbHRpcCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsVG9vbHRpcCA9IGZ1bmN0aW9uIE1hdGVyaWFsVG9vbHRpcChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsVG9vbHRpcCddID0gTWF0ZXJpYWxUb29sdGlwO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSVNfQUNUSVZFOiAnaXMtYWN0aXZlJyxcbiAgICBCT1RUT006ICdtZGwtdG9vbHRpcC0tYm90dG9tJyxcbiAgICBMRUZUOiAnbWRsLXRvb2x0aXAtLWxlZnQnLFxuICAgIFJJR0hUOiAnbWRsLXRvb2x0aXAtLXJpZ2h0JyxcbiAgICBUT1A6ICdtZGwtdG9vbHRpcC0tdG9wJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2VlbnRlciBmb3IgdG9vbHRpcC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5oYW5kbGVNb3VzZUVudGVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwcm9wcyA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgbGVmdCA9IHByb3BzLmxlZnQgKyBwcm9wcy53aWR0aCAvIDI7XG4gICAgdmFyIHRvcCA9IHByb3BzLnRvcCArIHByb3BzLmhlaWdodCAvIDI7XG4gICAgdmFyIG1hcmdpbkxlZnQgPSAtMSAqICh0aGlzLmVsZW1lbnRfLm9mZnNldFdpZHRoIC8gMik7XG4gICAgdmFyIG1hcmdpblRvcCA9IC0xICogKHRoaXMuZWxlbWVudF8ub2Zmc2V0SGVpZ2h0IC8gMik7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uTEVGVCkgfHwgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSUdIVCkpIHtcbiAgICAgICAgbGVmdCA9IHByb3BzLndpZHRoIC8gMjtcbiAgICAgICAgaWYgKHRvcCArIG1hcmdpblRvcCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUudG9wID0gJzAnO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm1hcmdpblRvcCA9IG1hcmdpblRvcCArICdweCc7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGVmdCArIG1hcmdpbkxlZnQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm1hcmdpbkxlZnQgPSAnMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUCkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS50b3AgPSBwcm9wcy50b3AgLSB0aGlzLmVsZW1lbnRfLm9mZnNldEhlaWdodCAtIDEwICsgJ3B4JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklHSFQpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9IHByb3BzLmxlZnQgKyBwcm9wcy53aWR0aCArIDEwICsgJ3B4JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uTEVGVCkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5sZWZ0ID0gcHJvcHMubGVmdCAtIHRoaXMuZWxlbWVudF8ub2Zmc2V0V2lkdGggLSAxMCArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS50b3AgPSBwcm9wcy50b3AgKyBwcm9wcy5oZWlnaHQgKyAxMCArICdweCc7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG59O1xuLyoqXG4gICAqIEhpZGUgdG9vbHRpcCBvbiBtb3VzZWxlYXZlIG9yIHNjcm9sbFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuaGlkZVRvb2x0aXBfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGZvckVsSWQgPSB0aGlzLmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnZm9yJykgfHwgdGhpcy5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWRsLWZvcicpO1xuICAgICAgICBpZiAoZm9yRWxJZCkge1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50XyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvckVsSWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvckVsZW1lbnRfKSB7XG4gICAgICAgICAgICAvLyBJdCdzIGxlZnQgaGVyZSBiZWNhdXNlIGl0IHByZXZlbnRzIGFjY2lkZW50YWwgdGV4dCBzZWxlY3Rpb24gb24gQW5kcm9pZFxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvckVsZW1lbnRfLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIgPSB0aGlzLmhhbmRsZU1vdXNlRW50ZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kTW91c2VMZWF2ZUFuZFNjcm9sbEhhbmRsZXIgPSB0aGlzLmhpZGVUb29sdGlwXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUFuZFNjcm9sbEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUFuZFNjcm9sbEhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUFuZFNjcm9sbEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFRvb2x0aXAsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsVG9vbHRpcCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtdG9vbHRpcCdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0b29sdGlwLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIERhdGEgVGFibGUgQ2FyZCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxEYXRhVGFibGUgPSBmdW5jdGlvbiBNYXRlcmlhbERhdGFUYWJsZShlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsRGF0YVRhYmxlJ10gPSBNYXRlcmlhbERhdGFUYWJsZTtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsRGF0YVRhYmxlLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsRGF0YVRhYmxlLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBEQVRBX1RBQkxFOiAnbWRsLWRhdGEtdGFibGUnLFxuICAgIFNFTEVDVEFCTEU6ICdtZGwtZGF0YS10YWJsZS0tc2VsZWN0YWJsZScsXG4gICAgU0VMRUNUX0VMRU1FTlQ6ICdtZGwtZGF0YS10YWJsZV9fc2VsZWN0JyxcbiAgICBJU19TRUxFQ1RFRDogJ2lzLXNlbGVjdGVkJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJ1xufTtcbi8qKlxuICAgKiBHZW5lcmF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiBhXG4gICAqIHNpbmdsZSByb3cgKG9yIG11bHRpcGxlIHJvd3MpLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNoZWNrYm94IENoZWNrYm94IHRoYXQgdG9nZ2xlcyB0aGUgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHJvdyBSb3cgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxOb2RlTGlzdCk9fSBvcHRfcm93cyBSb3dzIHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLnNlbGVjdFJvd18gPSBmdW5jdGlvbiAoY2hlY2tib3gsIHJvdywgb3B0X3Jvd3MpIHtcbiAgICBpZiAocm93KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0X3Jvd3MpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGVsO1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3B0X3Jvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBvcHRfcm93c1tpXS5xdWVyeVNlbGVjdG9yKCd0ZCcpLnF1ZXJ5U2VsZWN0b3IoJy5tZGwtY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxbJ01hdGVyaWFsQ2hlY2tib3gnXS5jaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICBvcHRfcm93c1tpXS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdF9yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gb3B0X3Jvd3NbaV0ucXVlcnlTZWxlY3RvcigndGQnKS5xdWVyeVNlbGVjdG9yKCcubWRsLWNoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsWydNYXRlcmlhbENoZWNrYm94J10udW5jaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICBvcHRfcm93c1tpXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ3JlYXRlcyBhIGNoZWNrYm94IGZvciBhIHNpbmdsZSBvciBvciBtdWx0aXBsZSByb3dzIGFuZCBob29rcyB1cCB0aGVcbiAgICogZXZlbnQgaGFuZGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcm93IFJvdyB0byB0b2dnbGUgd2hlbiBjaGVja2JveCBjaGFuZ2VzLlxuICAgKiBAcGFyYW0geyhBcnJheTxPYmplY3Q+fE5vZGVMaXN0KT19IG9wdF9yb3dzIFJvd3MgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuY3JlYXRlQ2hlY2tib3hfID0gZnVuY3Rpb24gKHJvdywgb3B0X3Jvd3MpIHtcbiAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHZhciBsYWJlbENsYXNzZXMgPSBbXG4gICAgICAgICdtZGwtY2hlY2tib3gnLFxuICAgICAgICAnbWRsLWpzLWNoZWNrYm94JyxcbiAgICAgICAgJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICAgICAgdGhpcy5Dc3NDbGFzc2VzXy5TRUxFQ1RfRUxFTUVOVFxuICAgIF07XG4gICAgbGFiZWwuY2xhc3NOYW1lID0gbGFiZWxDbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ21kbC1jaGVja2JveF9faW5wdXQnKTtcbiAgICBpZiAocm93KSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSByb3cuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNlbGVjdFJvd18oY2hlY2tib3gsIHJvdykpO1xuICAgIH0gZWxzZSBpZiAob3B0X3Jvd3MpIHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zZWxlY3RSb3dfKGNoZWNrYm94LCBudWxsLCBvcHRfcm93cykpO1xuICAgIH1cbiAgICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudChsYWJlbCwgJ01hdGVyaWFsQ2hlY2tib3gnKTtcbiAgICByZXR1cm4gbGFiZWw7XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB2YXIgZmlyc3RIZWFkZXIgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJ3RoJyk7XG4gICAgICAgIHZhciBib2R5Um93cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKSk7XG4gICAgICAgIHZhciBmb290Um93cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgndGZvb3QgdHInKSk7XG4gICAgICAgIHZhciByb3dzID0gYm9keVJvd3MuY29uY2F0KGZvb3RSb3dzKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uU0VMRUNUQUJMRSkpIHtcbiAgICAgICAgICAgIHZhciB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyQ2hlY2tib3ggPSB0aGlzLmNyZWF0ZUNoZWNrYm94XyhudWxsLCByb3dzKTtcbiAgICAgICAgICAgIHRoLmFwcGVuZENoaWxkKGhlYWRlckNoZWNrYm94KTtcbiAgICAgICAgICAgIGZpcnN0SGVhZGVyLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoLCBmaXJzdEhlYWRlcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RDZWxsID0gcm93c1tpXS5xdWVyeVNlbGVjdG9yKCd0ZCcpO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdENlbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3NbaV0ucGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnVEJPRFknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm93Q2hlY2tib3ggPSB0aGlzLmNyZWF0ZUNoZWNrYm94Xyhyb3dzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKHJvd0NoZWNrYm94KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3dzW2ldLmluc2VydEJlZm9yZSh0ZCwgZmlyc3RDZWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsRGF0YVRhYmxlLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbERhdGFUYWJsZScsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtZGF0YS10YWJsZSdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkYXRhLXRhYmxlLmpzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFJpcHBsZSBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsUmlwcGxlID0gZnVuY3Rpb24gTWF0ZXJpYWxSaXBwbGUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFJpcHBsZSddID0gTWF0ZXJpYWxSaXBwbGU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIElOSVRJQUxfU0NBTEU6ICdzY2FsZSgwLjAwMDEsIDAuMDAwMSknLFxuICAgIElOSVRJQUxfU0laRTogJzFweCcsXG4gICAgSU5JVElBTF9PUEFDSVRZOiAnMC40JyxcbiAgICBGSU5BTF9PUEFDSVRZOiAnMCcsXG4gICAgRklOQUxfU0NBTEU6ICcnXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICAgIElTX1ZJU0lCTEU6ICdpcy12aXNpYmxlJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2UgLyBmaW5nZXIgZG93biBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuZG93bkhhbmRsZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndpZHRoICYmICF0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLmhlaWdodCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuYm91bmRIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZFdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgdGhpcy5yaXBwbGVTaXplXyA9IE1hdGguc3FydChyZWN0LndpZHRoICogcmVjdC53aWR0aCArIHJlY3QuaGVpZ2h0ICogcmVjdC5oZWlnaHQpICogMiArIDI7XG4gICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUud2lkdGggPSB0aGlzLnJpcHBsZVNpemVfICsgJ3B4JztcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS5oZWlnaHQgPSB0aGlzLnJpcHBsZVNpemVfICsgJ3B4JztcbiAgICB9XG4gICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMuaWdub3JpbmdNb3VzZURvd25fKSB7XG4gICAgICAgIHRoaXMuaWdub3JpbmdNb3VzZURvd25fID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAgICAgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmcmFtZUNvdW50ID0gdGhpcy5nZXRGcmFtZUNvdW50KCk7XG4gICAgICAgIGlmIChmcmFtZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RnJhbWVDb3VudCgxKTtcbiAgICAgICAgdmFyIGJvdW5kID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHg7XG4gICAgICAgIHZhciB5O1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgaGFuZGxpbmcgYSBrZXlib2FyZCBjbGljay5cbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgICAgICAgeCA9IE1hdGgucm91bmQoYm91bmQud2lkdGggLyAyKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKGJvdW5kLmhlaWdodCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYICE9PSB1bmRlZmluZWQgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgdmFyIGNsaWVudFkgPSBldmVudC5jbGllbnRZICE9PSB1bmRlZmluZWQgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgeCA9IE1hdGgucm91bmQoY2xpZW50WCAtIGJvdW5kLmxlZnQpO1xuICAgICAgICAgICAgeSA9IE1hdGgucm91bmQoY2xpZW50WSAtIGJvdW5kLnRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRSaXBwbGVYWSh4LCB5KTtcbiAgICAgICAgdGhpcy5zZXRSaXBwbGVTdHlsZXModHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltRnJhbWVIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlIC8gZmluZ2VyIHVwIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS51cEhhbmRsZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gRG9uJ3QgZmlyZSBmb3IgdGhlIGFydGlmaWNpYWwgXCJtb3VzZXVwXCIgZ2VuZXJhdGVkIGJ5IGEgZG91YmxlLWNsaWNrLlxuICAgIGlmIChldmVudCAmJiBldmVudC5kZXRhaWwgIT09IDIpIHtcbiAgICAgICAgLy8gQWxsb3cgYSByZXBhaW50IHRvIG9jY3VyIGJlZm9yZSByZW1vdmluZyB0aGlzIGNsYXNzLCBzbyB0aGUgYW5pbWF0aW9uXG4gICAgICAgIC8vIHNob3dzIGZvciB0YXAgZXZlbnRzLCB3aGljaCBzZWVtIHRvIHRyaWdnZXIgYSBtb3VzZXVwIHRvbyBzb29uIGFmdGVyXG4gICAgICAgIC8vIG1vdXNlZG93bi5cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIHJlY2VudGVyaW5nID0gdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUykpIHtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50XyA9IDA7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZVNpemVfID0gMDtcbiAgICAgICAgICAgIHRoaXMueF8gPSAwO1xuICAgICAgICAgICAgdGhpcy55XyA9IDA7XG4gICAgICAgICAgICAvLyBUb3VjaCBzdGFydCBwcm9kdWNlcyBhIGNvbXBhdCBtb3VzZSBkb3duIGV2ZW50LCB3aGljaCB3b3VsZCBjYXVzZSBhXG4gICAgICAgICAgICAvLyBzZWNvbmQgcmlwcGxlcy4gVG8gYXZvaWQgdGhhdCwgd2UgdXNlIHRoaXMgcHJvcGVydHkgdG8gaWdub3JlIHRoZSBmaXJzdFxuICAgICAgICAgICAgLy8gbW91c2UgZG93biBhZnRlciBhIHRvdWNoIHN0YXJ0LlxuICAgICAgICAgICAgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm91bmREb3duSGFuZGxlciA9IHRoaXMuZG93bkhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmREb3duSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZFVwSGFuZGxlciA9IHRoaXMudXBIYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHRlciBmb3IgZnJhbWVDb3VudF8uXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGZyYW1lIGNvdW50LlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZ2V0RnJhbWVDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mcmFtZUNvdW50XztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogU2V0dGVyIGZvciBmcmFtZUNvdW50Xy5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGZDIHRoZSBmcmFtZSBjb3VudC5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNldEZyYW1lQ291bnQgPSBmdW5jdGlvbiAoZkMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lQ291bnRfID0gZkM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHRlciBmb3IgcmlwcGxlRWxlbWVudF8uXG4gICAgICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IHRoZSByaXBwbGUgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmdldFJpcHBsZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlwcGxlRWxlbWVudF87XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHJpcHBsZSBYIGFuZCBZIGNvb3JkaW5hdGVzLlxuICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IG5ld1ggdGhlIG5ldyBYIGNvb3JkaW5hdGVcbiAgICAgICAgICogQHBhcmFtICB7bnVtYmVyfSBuZXdZIHRoZSBuZXcgWSBjb29yZGluYXRlXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zZXRSaXBwbGVYWSA9IGZ1bmN0aW9uIChuZXdYLCBuZXdZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54XyA9IG5ld1g7XG4gICAgICAgICAgICAgICAgdGhpcy55XyA9IG5ld1k7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHJpcHBsZSBzdHlsZXMuXG4gICAgICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IHN0YXJ0IHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIHN0YXJ0IGZyYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc2V0UmlwcGxlU3R5bGVzID0gZnVuY3Rpb24gKHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmlwcGxlRWxlbWVudF8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9ICd0cmFuc2xhdGUoJyArIHRoaXMueF8gKyAncHgsICcgKyB0aGlzLnlfICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSB0aGlzLkNvbnN0YW50Xy5JTklUSUFMX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMuQ29uc3RhbnRfLklOSVRJQUxfU0laRTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gdGhpcy5Db25zdGFudF8uRklOQUxfU0NBTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAndHJhbnNsYXRlKCcgKyB0aGlzLmJvdW5kV2lkdGggLyAyICsgJ3B4LCAnICsgdGhpcy5ib3VuZEhlaWdodCAvIDIgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlKC01MCUsIC01MCUpICcgKyBvZmZzZXQgKyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIGFuIGFuaW1hdGlvbiBmcmFtZS5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmFuaW1GcmFtZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudF8tLSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRSaXBwbGVTdHlsZXMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsUmlwcGxlLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFJpcHBsZScsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgd2lkZ2V0OiBmYWxzZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJpcHBsZS5qcyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lJztcbmltcG9ydCB7IEhlbGxvQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hlbGxvJztcbmltcG9ydCB7IFByb2R1Y3RzQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0cyc7XG5pbXBvcnQgeyBUZWNobm9sb2d5Q29tcG9uZW50IH0gZnJvbSAnLi90ZWNobm9sb2d5L3RlY2hub2xvZ3knO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgcmVkaXJlY3RUbzogJy9ob21lJyxcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgICB9LFxuICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIGRhdGE6IHsgdGl0bGU6ICdIb21lJywgbmFtZTogJ0FuZ3VsYXI0JyB9IH0sXG4gICAgeyBwYXRoOiAncHJvZHVjdHMnLCBjb21wb25lbnQ6IFByb2R1Y3RzQ29tcG9uZW50LCBkYXRhOiB7IHRpdGxlOiAnUHJvZHVjdHMnIH0gfSxcbiAgICB7IHBhdGg6ICd0ZWNobm9sb2d5JywgY29tcG9uZW50OiBUZWNobm9sb2d5Q29tcG9uZW50LCBkYXRhOiB7IHRpdGxlOiAnVGVjaG5vbG9neScgfSB9LFxuICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBIZWxsb0NvbXBvbmVudCxcbiAgICAgICAgUHJvZHVjdHNDb21wb25lbnQsXG4gICAgICAgIFRlY2hub2xvZ3lDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvbW9kdWxlcy9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvblNlcnZpY2VDbGllbnQgfSBmcm9tICdzZXJ2aWNlc3RhY2stY2xpZW50JztcblxuZGVjbGFyZSB2YXIgZ2xvYmFsOyAvL3BvcHVsYXRlZCBmcm9tIHBhY2thZ2UuanNvbi9rYXJtYS9nbG9iYWxzXG5cbmV4cG9ydCB2YXIgY2xpZW50ID0gbmV3IEpzb25TZXJ2aWNlQ2xpZW50KGdsb2JhbC5CYXNlVXJsIHx8ICcvJyk7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbWRsXSdcbn0pXG5leHBvcnQgY2xhc3MgTURMIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudEhhbmRsZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZURvbSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvc2hhcmVkL3V0aWxzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQge1ZhbGlkYXRpb25FcnJvcnN9IGZyb20gJy4vdmFsaWRhdG9ycyc7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbnRyb2wgZGlyZWN0aXZlcy5cbiAqIFxuICogT25seSB1c2VkIGludGVybmFsbHkgaW4gdGhlIGZvcm1zIG1vZHVsZS5cbiAqIFxuICogXFxAc3RhYmxlXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB7XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9sKCk6IEFic3RyYWN0Q29udHJvbCB7IHRocm93IG5ldyBFcnJvcigndW5pbXBsZW1lbnRlZCcpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnZhbHVlIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsaWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wudmFsaWQgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBpbnZhbGlkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmludmFsaWQgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwZW5kaW5nKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnBlbmRpbmcgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBlcnJvcnMoKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5lcnJvcnMgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwcmlzdGluZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5wcmlzdGluZSA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGRpcnR5KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmRpcnR5IDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdG91Y2hlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC50b3VjaGVkIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdW50b3VjaGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnVudG91Y2hlZCA6IG51bGw7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLmRpc2FibGVkIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5lbmFibGVkIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgc3RhdHVzQ2hhbmdlcygpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gdGhpcy5jb250cm9sID8gdGhpcy5jb250cm9sLnN0YXR1c0NoYW5nZXMgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWx1ZUNoYW5nZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIG51bGw7IH1cbi8qKlxuICogQHBhcmFtIHs/PX0gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlc2V0KHZhbHVlOiBhbnkgPSB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sKSB0aGlzLmNvbnRyb2wucmVzZXQodmFsdWUpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gKiBAcGFyYW0gez89fSBwYXRoXG4gKiBAcmV0dXJuIHs/fVxuICovXG5oYXNFcnJvcihlcnJvckNvZGU6IHN0cmluZywgcGF0aDogc3RyaW5nW10gPSBudWxsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbCA/IHRoaXMuY29udHJvbC5oYXNFcnJvcihlcnJvckNvZGUsIHBhdGgpIDogZmFsc2U7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBlcnJvckNvZGVcbiAqIEBwYXJhbSB7Pz19IHBhdGhcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldEVycm9yKGVycm9yQ29kZTogc3RyaW5nLCBwYXRoOiBzdHJpbmdbXSA9IG51bGwpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wgPyB0aGlzLmNvbnRyb2wuZ2V0RXJyb3IoZXJyb3JDb2RlLCBwYXRoKSA6IG51bGw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZS50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdF9jb250cm9sX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0Zvcm19IGZyb20gJy4vZm9ybV9pbnRlcmZhY2UnO1xuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGNvbnRhaW5zIG11bHRpcGxlIHtcXEBsaW5rIE5nQ29udHJvbH1zLlxuICogXG4gKiBPbmx5IHVzZWQgYnkgdGhlIGZvcm1zIG1vZHVsZS5cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250cm9sQ29udGFpbmVyIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlIHtcbiAgbmFtZTogc3RyaW5nO1xuLyoqXG4gKiBHZXQgdGhlIGZvcm0gdG8gd2hpY2ggdGhpcyBjb250YWluZXIgYmVsb25ncy5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBmb3JtRGlyZWN0aXZlKCk6IEZvcm0geyByZXR1cm4gbnVsbDsgfVxuLyoqXG4gKiBHZXQgdGhlIHBhdGggdG8gdGhpcyBjb250YWluZXIuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7IHJldHVybiBudWxsOyB9XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xDb250YWluZXJfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkNvbnRyb2xDb250YWluZXIucHJvdG90eXBlLm5hbWU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9jb250cm9sX2NvbnRhaW5lci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0luamVjdGlvblRva2VuLCDJtWlzT2JzZXJ2YWJsZSBhcyBpc09ic2VydmFibGUsIMm1aXNQcm9taXNlIGFzIGlzUHJvbWlzZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge2ZvcmtKb2lufSBmcm9tICdyeGpzL29ic2VydmFibGUvZm9ya0pvaW4nO1xuaW1wb3J0IHtmcm9tUHJvbWlzZX0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9yL21hcCc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbH0gZnJvbSAnLi9tb2RlbCc7XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHlJbnB1dFZhbHVlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgLy8gd2UgZG9uJ3QgY2hlY2sgZm9yIHN0cmluZyBoZXJlIHNvIGl0IGFsc28gd29ya3Mgd2l0aCBhcnJheXNcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xufVxuLyoqXG4gKiBQcm92aWRlcnMgZm9yIHZhbGlkYXRvcnMgdG8gYmUgdXNlZCBmb3Ige1xcQGxpbmsgRm9ybUNvbnRyb2x9cyBpbiBhIGZvcm0uXG4gKiBcbiAqIFByb3ZpZGUgdGhpcyB1c2luZyBgbXVsdGk6IHRydWVgIHRvIGFkZCB2YWxpZGF0b3JzLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiB7XFxAZXhhbXBsZSBjb3JlL2Zvcm1zL3RzL25nX3ZhbGlkYXRvcnMvbmdfdmFsaWRhdG9ycy50cyByZWdpb249J25nX3ZhbGlkYXRvcnMnfVxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBOR19WQUxJREFUT1JTID0gbmV3IEluamVjdGlvblRva2VuPEFycmF5PFZhbGlkYXRvcnxGdW5jdGlvbj4+KCdOZ1ZhbGlkYXRvcnMnKTtcbi8qKlxuICogUHJvdmlkZXJzIGZvciBhc3luY2hyb25vdXMgdmFsaWRhdG9ycyB0byBiZSB1c2VkIGZvciB7XFxAbGluayBGb3JtQ29udHJvbH1zXG4gKiBpbiBhIGZvcm0uXG4gKiBcbiAqIFByb3ZpZGUgdGhpcyB1c2luZyBgbXVsdGk6IHRydWVgIHRvIGFkZCB2YWxpZGF0b3JzLlxuICogXG4gKiBTZWUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gZm9yIG1vcmUgZGV0YWlscy5cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBOR19BU1lOQ19WQUxJREFUT1JTID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48QXJyYXk8VmFsaWRhdG9yfEZ1bmN0aW9uPj4oJ05nQXN5bmNWYWxpZGF0b3JzJyk7XG5cbmNvbnN0IC8qKiBAdHlwZSB7P30gKi8gRU1BSUxfUkVHRVhQID1cbiAgICAvXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKFxcLlstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSspKkBbQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KFxcLltBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8pKiQvO1xuLyoqXG4gKiBQcm92aWRlcyBhIHNldCBvZiB2YWxpZGF0b3JzIHVzZWQgYnkgZm9ybSBjb250cm9scy5cbiAqIFxuICogQSB2YWxpZGF0b3IgaXMgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSBvciBjb2xsZWN0aW9uIG9mXG4gKiBjb250cm9scyBhbmQgcmV0dXJucyBhIG1hcCBvZiBlcnJvcnMuIEEgbnVsbCBtYXAgbWVhbnMgdGhhdCB2YWxpZGF0aW9uIGhhcyBwYXNzZWQuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHZhciBsb2dpbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAqIGBgYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRvcnMge1xuLyoqXG4gKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgbm9uLWVtcHR5IHZhbHVlLlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgcmVxdWlyZWQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkgPyB7J3JlcXVpcmVkJzogdHJ1ZX0gOiBudWxsO1xuICB9XG4vKipcbiAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2wgdmFsdWUgdG8gYmUgdHJ1ZS5cbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIHJlcXVpcmVkVHJ1ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiBjb250cm9sLnZhbHVlID09PSB0cnVlID8gbnVsbCA6IHsncmVxdWlyZWQnOiB0cnVlfTtcbiAgfVxuLyoqXG4gKiBWYWxpZGF0b3IgdGhhdCBwZXJmb3JtcyBlbWFpbCB2YWxpZGF0aW9uLlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgZW1haWwoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeydlbWFpbCc6IHRydWV9O1xuICB9XG4vKipcbiAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGNvbnRyb2xzIHRvIGhhdmUgYSB2YWx1ZSBvZiBhIG1pbmltdW0gbGVuZ3RoLlxuICogQHBhcmFtIHs/fSBtaW5MZW5ndGhcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBtaW5MZW5ndGgobWluTGVuZ3RoOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7ICAvLyBkb24ndCB2YWxpZGF0ZSBlbXB0eSB2YWx1ZXMgdG8gYWxsb3cgb3B0aW9uYWwgY29udHJvbHNcbiAgICAgIH1cbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gbGVuZ3RoOiBudW1iZXIgPSBjb250cm9sLnZhbHVlID8gY29udHJvbC52YWx1ZS5sZW5ndGggOiAwO1xuICAgICAgcmV0dXJuIGxlbmd0aCA8IG1pbkxlbmd0aCA/XG4gICAgICAgICAgeydtaW5sZW5ndGgnOiB7J3JlcXVpcmVkTGVuZ3RoJzogbWluTGVuZ3RoLCAnYWN0dWFsTGVuZ3RoJzogbGVuZ3RofX0gOlxuICAgICAgICAgIG51bGw7XG4gICAgfTtcbiAgfVxuLyoqXG4gKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyBjb250cm9scyB0byBoYXZlIGEgdmFsdWUgb2YgYSBtYXhpbXVtIGxlbmd0aC5cbiAqIEBwYXJhbSB7P30gbWF4TGVuZ3RoXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgbWF4TGVuZ3RoKG1heExlbmd0aDogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBsZW5ndGg6IG51bWJlciA9IGNvbnRyb2wudmFsdWUgPyBjb250cm9sLnZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICByZXR1cm4gbGVuZ3RoID4gbWF4TGVuZ3RoID9cbiAgICAgICAgICB7J21heGxlbmd0aCc6IHsncmVxdWlyZWRMZW5ndGgnOiBtYXhMZW5ndGgsICdhY3R1YWxMZW5ndGgnOiBsZW5ndGh9fSA6XG4gICAgICAgICAgbnVsbDtcbiAgICB9O1xuICB9XG4vKipcbiAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIGEgY29udHJvbCB0byBtYXRjaCBhIHJlZ2V4IHRvIGl0cyB2YWx1ZS5cbiAqIEBwYXJhbSB7P30gcGF0dGVyblxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIHBhdHRlcm4ocGF0dGVybjogc3RyaW5nfFJlZ0V4cCk6IFZhbGlkYXRvckZuIHtcbiAgICBpZiAoIXBhdHRlcm4pIHJldHVybiBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG4gICAgbGV0IC8qKiBAdHlwZSB7P30gKi8gcmVnZXg6IFJlZ0V4cDtcbiAgICBsZXQgLyoqIEB0eXBlIHs/fSAqLyByZWdleFN0cjogc3RyaW5nO1xuICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlZ2V4U3RyID0gYF4ke3BhdHRlcm59JGA7XG4gICAgICByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWdleFN0ciA9IHBhdHRlcm4udG9TdHJpbmcoKTtcbiAgICAgIHJlZ2V4ID0gcGF0dGVybjtcbiAgICB9XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7ICAvLyBkb24ndCB2YWxpZGF0ZSBlbXB0eSB2YWx1ZXMgdG8gYWxsb3cgb3B0aW9uYWwgY29udHJvbHNcbiAgICAgIH1cbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdmFsdWU6IHN0cmluZyA9IGNvbnRyb2wudmFsdWU7XG4gICAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSkgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsncGF0dGVybic6IHsncmVxdWlyZWRQYXR0ZXJuJzogcmVnZXhTdHIsICdhY3R1YWxWYWx1ZSc6IHZhbHVlfX07XG4gICAgfTtcbiAgfVxuLyoqXG4gKiBOby1vcCB2YWxpZGF0b3IuXG4gKiBAcGFyYW0gez99IGNcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBudWxsVmFsaWRhdG9yKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7IHJldHVybiBudWxsOyB9XG4vKipcbiAqIENvbXBvc2UgbXVsdGlwbGUgdmFsaWRhdG9ycyBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdW5pb25cbiAqIG9mIHRoZSBpbmRpdmlkdWFsIGVycm9yIG1hcHMuXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBjb21wb3NlKHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10pOiBWYWxpZGF0b3JGbiB7XG4gICAgaWYgKCF2YWxpZGF0b3JzKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHByZXNlbnRWYWxpZGF0b3JzID0gdmFsaWRhdG9ycy5maWx0ZXIoaXNQcmVzZW50KTtcbiAgICBpZiAocHJlc2VudFZhbGlkYXRvcnMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgICAgcmV0dXJuIF9tZXJnZUVycm9ycyhfZXhlY3V0ZVZhbGlkYXRvcnMoY29udHJvbCwgcHJlc2VudFZhbGlkYXRvcnMpKTtcbiAgICB9O1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIGNvbXBvc2VBc3luYyh2YWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10pOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgICBpZiAoIXZhbGlkYXRvcnMpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gcHJlc2VudFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpO1xuICAgIGlmIChwcmVzZW50VmFsaWRhdG9ycy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG9ic2VydmFibGVzID0gX2V4ZWN1dGVBc3luY1ZhbGlkYXRvcnMoY29udHJvbCwgcHJlc2VudFZhbGlkYXRvcnMpLm1hcCh0b09ic2VydmFibGUpO1xuICAgICAgcmV0dXJuIG1hcC5jYWxsKGZvcmtKb2luKG9ic2VydmFibGVzKSwgX21lcmdlRXJyb3JzKTtcbiAgICB9O1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7P30gb1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gaXNQcmVzZW50KG86IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbyAhPSBudWxsO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHJcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09ic2VydmFibGUocjogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBvYnMgPSBpc1Byb21pc2UocikgPyBmcm9tUHJvbWlzZShyKSA6IHI7XG4gIGlmICghKGlzT2JzZXJ2YWJsZShvYnMpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgdmFsaWRhdG9yIHRvIHJldHVybiBQcm9taXNlIG9yIE9ic2VydmFibGUuYCk7XG4gIH1cbiAgcmV0dXJuIG9icztcbn1cbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10pOiBhbnlbXSB7XG4gIHJldHVybiB2YWxpZGF0b3JzLm1hcCh2ID0+IHYoY29udHJvbCkpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2V4ZWN1dGVBc3luY1ZhbGlkYXRvcnMoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCB2YWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10pOiBhbnlbXSB7XG4gIHJldHVybiB2YWxpZGF0b3JzLm1hcCh2ID0+IHYoY29udHJvbCkpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGFycmF5T2ZFcnJvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9tZXJnZUVycm9ycyhhcnJheU9mRXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzW10pOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICBjb25zdCAvKiogQHR5cGUgez99ICovIHJlczoge1trZXk6IHN0cmluZ106IGFueX0gPVxuICAgICAgYXJyYXlPZkVycm9ycy5yZWR1Y2UoKHJlczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwsIGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpID0+IHtcbiAgICAgICAgcmV0dXJuIGVycm9ycyAhPSBudWxsID8gey4uLnJlcywgLi4uZXJyb3JzfSA6IHJlcztcbiAgICAgIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHJlcykubGVuZ3RoID09PSAwID8gbnVsbCA6IHJlcztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvdmFsaWRhdG9ycy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIGJyaWRnZSBiZXR3ZWVuIGEgY29udHJvbCBhbmQgYSBuYXRpdmUgZWxlbWVudC5cbiAqXG4gKiBBIGBDb250cm9sVmFsdWVBY2Nlc3NvcmAgYWJzdHJhY3RzIHRoZSBvcGVyYXRpb25zIG9mIHdyaXRpbmcgYSBuZXcgdmFsdWUgdG8gYVxuICogRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIGFuIGlucHV0IGNvbnRyb2wuXG4gKlxuICogUGxlYXNlIHNlZSB7QGxpbmsgRGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8qKlxuICAgKiBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cbiAgICovXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgY2hhbmdlIGV2ZW50LlxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZDtcblxuICAvKipcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgc3RhdHVzIGNoYW5nZXMgdG8gb3IgZnJvbSBcIkRJU0FCTEVEXCIuXG4gICAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUsIGl0IHdpbGwgZW5hYmxlIG9yIGRpc2FibGUgdGhlIGFwcHJvcHJpYXRlIERPTSBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZFxuICAgKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQ7XG59XG4vKipcbiAqIFVzZWQgdG8gcHJvdmlkZSBhIHtcXEBsaW5rIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmb3IgZm9ybSBjb250cm9scy5cbiAqIFxuICogU2VlIHtcXEBsaW5rIERlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmb3IgaG93IHRvIGltcGxlbWVudCBvbmUuXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNvbnN0IE5HX1ZBTFVFX0FDQ0VTU09SID0gbmV3IEluamVjdGlvblRva2VuPENvbnRyb2xWYWx1ZUFjY2Vzc29yPignTmdWYWx1ZUFjY2Vzc29yJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvY29udHJvbF92YWx1ZV9hY2Nlc3Nvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG4vKipcbiAqIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyBvbiBhIGNoZWNrYm94IGlucHV0IGVsZW1lbnQuXG4gKiBcbiAqICAjIyMgRXhhbXBsZVxuICogIGBgYFxuICogIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVtZW1iZXJMb2dpblwiIG5nTW9kZWw+XG4gKiAgYGBgXG4gKiBcbiAqICBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuLyoqXG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICovXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG53cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2hlY2tlZCcsIHZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdpbnB1dFt0eXBlPWNoZWNrYm94XVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9Y2hlY2tib3hdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPWNoZWNrYm94XVtuZ01vZGVsXScsXG4gIGhvc3Q6IHsnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC5jaGVja2VkKScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknfSxcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1JdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xufVxuXG5mdW5jdGlvbiBDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5DaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbkNoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25Ub3VjaGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2VsZW1lbnRSZWY7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL2NoZWNrYm94X3ZhbHVlX2FjY2Vzc29yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXIsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHvJtWdldERPTSBhcyBnZXRET019IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIERFRkFVTFRfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERlZmF1bHRWYWx1ZUFjY2Vzc29yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIFdlIG11c3QgY2hlY2sgd2hldGhlciB0aGUgYWdlbnQgaXMgQW5kcm9pZCBiZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50c1xuICogYmVoYXZlIGRpZmZlcmVudGx5IGJldHdlZW4gaU9TIGFuZCBBbmRyb2lkLlxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX2lzQW5kcm9pZCgpOiBib29sZWFuIHtcbiAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyB1c2VyQWdlbnQgPSBnZXRET00oKSA/IGdldERPTSgpLmdldFVzZXJBZ2VudCgpIDogJyc7XG4gIHJldHVybiAvYW5kcm9pZCAoXFxkKykvLnRlc3QodXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xufVxuLyoqXG4gKiBUdXJuIHRoaXMgbW9kZSBvbiBpZiB5b3Ugd2FudCBmb3JtIGRpcmVjdGl2ZXMgdG8gYnVmZmVyIElNRSBpbnB1dCB1bnRpbCBjb21wb3NpdGlvbmVuZFxuICogXFxAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBjb25zdCBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignQ29tcG9zaXRpb25FdmVudE1vZGUnKTtcbi8qKlxuICogVGhlIGRlZmF1bHQgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgdGhhdCBpcyB1c2VkIGJ5IHRoZVxuICoge1xcQGxpbmsgTmdNb2RlbH0sIHtcXEBsaW5rIEZvcm1Db250cm9sRGlyZWN0aXZlfSwgYW5kIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0gZGlyZWN0aXZlcy5cbiAqIFxuICogICMjIyBFeGFtcGxlXG4gKiAgYGBgXG4gKiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFF1ZXJ5XCIgbmdNb2RlbD5cbiAqICBgYGBcbiAqIFxuICogIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xucHJpdmF0ZSBfY29tcG9zaW5nID0gZmFsc2U7XG4vKipcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gKiBAcGFyYW0gez99IF9jb21wb3NpdGlvbk1vZGVcbiAqL1xuY29uc3RydWN0b3IoXG5wcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxucHJpdmF0ZSBfY29tcG9zaXRpb25Nb2RlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX2NvbXBvc2l0aW9uTW9kZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9jb21wb3NpdGlvbk1vZGUgPSAhX2lzQW5kcm9pZCgpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG53cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9oYW5kbGVJbnB1dCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb21wb3NpdGlvbk1vZGUgfHwgKHRoaXMuX2NvbXBvc2l0aW9uTW9kZSAmJiAhdGhpcy5fY29tcG9zaW5nKSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jb21wb3NpdGlvblN0YXJ0KCk6IHZvaWQgeyB0aGlzLl9jb21wb3NpbmcgPSB0cnVlOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jb21wb3NpdGlvbkVuZCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fY29tcG9zaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fY29tcG9zaXRpb25Nb2RlICYmIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0Om5vdChbdHlwZT1jaGVja2JveF0pW2Zvcm1Db250cm9sTmFtZV0sdGV4dGFyZWFbZm9ybUNvbnRyb2xOYW1lXSxpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKVtmb3JtQ29udHJvbF0sdGV4dGFyZWFbZm9ybUNvbnRyb2xdLGlucHV0Om5vdChbdHlwZT1jaGVja2JveF0pW25nTW9kZWxdLHRleHRhcmVhW25nTW9kZWxdLFtuZ0RlZmF1bHRDb250cm9sXScsXG4gIC8vIFRPRE86IHZzYXZraW4gcmVwbGFjZSB0aGUgYWJvdmUgc2VsZWN0b3Igd2l0aCB0aGUgb25lIGJlbG93IGl0IG9uY2VcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzAxMSBpcyBpbXBsZW1lbnRlZFxuICAvLyBzZWxlY3RvcjogJ1tuZ01vZGVsXSxbZm9ybUNvbnRyb2xdLFtmb3JtQ29udHJvbE5hbWVdJyxcbiAgaG9zdDoge1xuICAgICcoaW5wdXQpJzogJ19oYW5kbGVJbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKScsXG4gICAgJyhibHVyKSc6ICdvblRvdWNoZWQoKScsXG4gICAgJyhjb21wb3NpdGlvbnN0YXJ0KSc6ICdfY29tcG9zaXRpb25TdGFydCgpJyxcbiAgICAnKGNvbXBvc2l0aW9uZW5kKSc6ICdfY29tcG9zaXRpb25FbmQoJGV2ZW50LnRhcmdldC52YWx1ZSknXG4gIH0sXG4gIHByb3ZpZGVyczogW0RFRkFVTFRfVkFMVUVfQUNDRVNTT1JdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW0NPTVBPU0lUSU9OX0JVRkZFUl9NT0RFLCBdIH0sIF19LFxuXTtcbn1cblxuZnVuY3Rpb24gRGVmYXVsdFZhbHVlQWNjZXNzb3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRGVmYXVsdFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25Ub3VjaGVkO1xuLyoqXG4gKiBXaGV0aGVyIHRoZSB1c2VyIGlzIGNyZWF0aW5nIGEgY29tcG9zaXRpb24gc3RyaW5nIChJTUUgZXZlbnRzKS5cbiAqIEB0eXBlIHs/fVxuICovXG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2NvbXBvc2luZztcbi8qKiBAdHlwZSB7P30gKi9cbkRlZmF1bHRWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2VsZW1lbnRSZWY7XG4vKiogQHR5cGUgez99ICovXG5EZWZhdWx0VmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2NvbXBvc2l0aW9uTW9kZTtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvZGVmYXVsdF92YWx1ZV9hY2Nlc3Nvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi92YWxpZGF0b3JzJztcbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVWYWxpZGF0b3IodmFsaWRhdG9yOiBWYWxpZGF0b3JGbiB8IFZhbGlkYXRvcik6IFZhbGlkYXRvckZuIHtcbiAgaWYgKCggLyoqIEB0eXBlIHs/fSAqLygoPFZhbGlkYXRvcj52YWxpZGF0b3IpKSkudmFsaWRhdGUpIHtcbiAgICByZXR1cm4gKGM6IEFic3RyYWN0Q29udHJvbCkgPT4gKCAvKiogQHR5cGUgez99ICovKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikpKS52YWxpZGF0ZShjKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxWYWxpZGF0b3JGbj52YWxpZGF0b3IpKTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yKHZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yKTpcbiAgICBBc3luY1ZhbGlkYXRvckZuIHtcbiAgaWYgKCggLyoqIEB0eXBlIHs/fSAqLygoPEFzeW5jVmFsaWRhdG9yPnZhbGlkYXRvcikpKS52YWxpZGF0ZSkge1xuICAgIHJldHVybiAoYzogQWJzdHJhY3RDb250cm9sKSA9PiAoIC8qKiBAdHlwZSB7P30gKi8oKDxBc3luY1ZhbGlkYXRvcj52YWxpZGF0b3IpKSkudmFsaWRhdGUoYyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8QXN5bmNWYWxpZGF0b3JGbj52YWxpZGF0b3IpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25vcm1hbGl6ZV92YWxpZGF0b3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIE5VTUJFUl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVtYmVyVmFsdWVBY2Nlc3NvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSBudW1iZXIgdmFsdWUgYW5kIGxpc3RlbmluZyB0byBjaGFuZ2VzIHRoYXQgaXMgdXNlZCBieSB0aGVcbiAqIHtcXEBsaW5rIE5nTW9kZWx9LCB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9IGRpcmVjdGl2ZXMuXG4gKiBcbiAqICAjIyMgRXhhbXBsZVxuICogIGBgYFxuICogIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJhZ2VcIj5cbiAqICBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIE51bWJlclZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuLyoqXG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICovXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG53cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyBUaGUgdmFsdWUgbmVlZHMgdG8gYmUgbm9ybWFsaXplZCBmb3IgSUU5LCBvdGhlcndpc2UgaXQgaXMgc2V0IHRvICdudWxsJyB3aGVuIG51bGxcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSAodmFsdWUpID0+IHsgZm4odmFsdWUgPT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpOyB9O1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdpbnB1dFt0eXBlPW51bWJlcl1bZm9ybUNvbnRyb2xOYW1lXSxpbnB1dFt0eXBlPW51bWJlcl1bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9bnVtYmVyXVtuZ01vZGVsXScsXG4gIGhvc3Q6IHtcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtOVU1CRVJfVkFMVUVfQUNDRVNTT1JdXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xufVxuXG5mdW5jdGlvbiBOdW1iZXJWYWx1ZUFjY2Vzc29yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OdW1iZXJWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTnVtYmVyVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cbk51bWJlclZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25Ub3VjaGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuTnVtYmVyVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2VsZW1lbnRSZWY7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL251bWJlcl92YWx1ZV9hY2Nlc3Nvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5cbmltcG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi92YWxpZGF0b3JzJztcbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gdW5pbXBsZW1lbnRlZCgpOiBhbnkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3VuaW1wbGVtZW50ZWQnKTtcbn1cbi8qKlxuICogQSBiYXNlIGNsYXNzIHRoYXQgYWxsIGNvbnRyb2wgZGlyZWN0aXZlIGV4dGVuZC5cbiAqIEl0IGJpbmRzIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG9iamVjdCB0byBhIERPTSBlbGVtZW50LlxuICogXG4gKiBVc2VkIGludGVybmFsbHkgYnkgQW5ndWxhciBmb3Jtcy5cbiAqIFxuICogXFxAc3RhYmxlXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nQ29udHJvbCBleHRlbmRzIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9wYXJlbnQ6IENvbnRyb2xDb250YWluZXIgPSBudWxsO1xuICBuYW1lOiBzdHJpbmcgPSBudWxsO1xuICB2YWx1ZUFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3NvciA9IG51bGw7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9yYXdWYWxpZGF0b3JzOiBBcnJheTxWYWxpZGF0b3J8VmFsaWRhdG9yRm4+ID0gW107XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9yYXdBc3luY1ZhbGlkYXRvcnM6IEFycmF5PEFzeW5jVmFsaWRhdG9yfEFzeW5jVmFsaWRhdG9yRm4+ID0gW107XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4geyByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxWYWxpZGF0b3JGbj51bmltcGxlbWVudGVkKCkpKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgYXN5bmNWYWxpZGF0b3IoKTogQXN5bmNWYWxpZGF0b3JGbiB7IHJldHVybiAvKiogQHR5cGUgez99ICovKCggPEFzeW5jVmFsaWRhdG9yRm4+dW5pbXBsZW1lbnRlZCgpKSk7IH1cbi8qKlxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0gez99IG5ld1ZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZTogYW55KSB7fVxufVxuXG5mdW5jdGlvbiBOZ0NvbnRyb2xfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5OZ0NvbnRyb2wucHJvdG90eXBlLl9wYXJlbnQ7XG4vKiogQHR5cGUgez99ICovXG5OZ0NvbnRyb2wucHJvdG90eXBlLm5hbWU7XG4vKiogQHR5cGUgez99ICovXG5OZ0NvbnRyb2wucHJvdG90eXBlLnZhbHVlQWNjZXNzb3I7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdDb250cm9sLnByb3RvdHlwZS5fcmF3VmFsaWRhdG9ycztcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5OZ0NvbnRyb2wucHJvdG90eXBlLl9yYXdBc3luY1ZhbGlkYXRvcnM7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9uZ19jb250cm9sLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlciwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICcuL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vbmdfY29udHJvbCc7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFJBRElPX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEludGVybmFsIGNsYXNzIHVzZWQgYnkgQW5ndWxhciB0byB1bmNoZWNrIHJhZGlvIGJ1dHRvbnMgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQ29udHJvbFJlZ2lzdHJ5IHtcbnByaXZhdGUgX2FjY2Vzc29yczogYW55W10gPSBbXTtcbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5hZGQoY29udHJvbDogTmdDb250cm9sLCBhY2Nlc3NvcjogUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcikge1xuICAgIHRoaXMuX2FjY2Vzc29ycy5wdXNoKFtjb250cm9sLCBhY2Nlc3Nvcl0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gYWNjZXNzb3JcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlbW92ZShhY2Nlc3NvcjogUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcikge1xuICAgIGZvciAobGV0IC8qKiBAdHlwZSB7P30gKi8gaSA9IHRoaXMuX2FjY2Vzc29ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgaWYgKHRoaXMuX2FjY2Vzc29yc1tpXVsxXSA9PT0gYWNjZXNzb3IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZWxlY3QoYWNjZXNzb3I6IFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IpIHtcbiAgICB0aGlzLl9hY2Nlc3NvcnMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzU2FtZUdyb3VwKGMsIGFjY2Vzc29yKSAmJiBjWzFdICE9PSBhY2Nlc3Nvcikge1xuICAgICAgICBjWzFdLmZpcmVVbmNoZWNrKGFjY2Vzc29yLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xQYWlyXG4gKiBAcGFyYW0gez99IGFjY2Vzc29yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9pc1NhbWVHcm91cChcbiAgICAgIGNvbnRyb2xQYWlyOiBbTmdDb250cm9sLCBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yXSxcbiAgICAgIGFjY2Vzc29yOiBSYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yKTogYm9vbGVhbiB7XG4gICAgaWYgKCFjb250cm9sUGFpclswXS5jb250cm9sKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnRyb2xQYWlyWzBdLl9wYXJlbnQgPT09IGFjY2Vzc29yLl9jb250cm9sLl9wYXJlbnQgJiZcbiAgICAgICAgY29udHJvbFBhaXJbMV0ubmFtZSA9PT0gYWNjZXNzb3IubmFtZTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmZ1bmN0aW9uIFJhZGlvQ29udHJvbFJlZ2lzdHJ5X3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xSZWdpc3RyeS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cblJhZGlvQ29udHJvbFJlZ2lzdHJ5LmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sUmVnaXN0cnkucHJvdG90eXBlLl9hY2Nlc3NvcnM7XG59XG5cbi8qKlxuICogXFxAd2hhdEl0RG9lcyBXcml0ZXMgcmFkaW8gY29udHJvbCB2YWx1ZXMgYW5kIGxpc3RlbnMgdG8gcmFkaW8gY29udHJvbCBjaGFuZ2VzLlxuICogXG4gKiBVc2VkIGJ5IHtcXEBsaW5rIE5nTW9kZWx9LCB7XFxAbGluayBGb3JtQ29udHJvbERpcmVjdGl2ZX0sIGFuZCB7XFxAbGluayBGb3JtQ29udHJvbE5hbWV9XG4gKiB0byBrZWVwIHRoZSB2aWV3IHN5bmNlZCB3aXRoIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gbW9kZWwuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBJZiB5b3UgaGF2ZSBpbXBvcnRlZCB0aGUge1xcQGxpbmsgRm9ybXNNb2R1bGV9IG9yIHRoZSB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfSwgdGhpc1xuICogdmFsdWUgYWNjZXNzb3Igd2lsbCBiZSBhY3RpdmUgb24gYW55IHJhZGlvIGNvbnRyb2wgdGhhdCBoYXMgYSBmb3JtIGRpcmVjdGl2ZS4gWW91IGRvXG4gKiAqKm5vdCoqIG5lZWQgdG8gYWRkIGEgc3BlY2lhbCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAqIFxuICogIyMjIEhvdyB0byB1c2UgcmFkaW8gYnV0dG9ucyB3aXRoIGZvcm0gZGlyZWN0aXZlc1xuICogXG4gKiBUbyB1c2UgcmFkaW8gYnV0dG9ucyBpbiBhIHRlbXBsYXRlLWRyaXZlbiBmb3JtLCB5b3UnbGwgd2FudCB0byBlbnN1cmUgdGhhdCByYWRpbyBidXR0b25zXG4gKiBpbiB0aGUgc2FtZSBncm91cCBoYXZlIHRoZSBzYW1lIGBuYW1lYCBhdHRyaWJ1dGUuICBSYWRpbyBidXR0b25zIHdpdGggZGlmZmVyZW50IGBuYW1lYFxuICogYXR0cmlidXRlcyBkbyBub3QgYWZmZWN0IGVhY2ggb3RoZXIuXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3JhZGlvQnV0dG9ucy9yYWRpb19idXR0b25fZXhhbXBsZS50cyByZWdpb249J1RlbXBsYXRlRHJpdmVuJ31cbiAqIFxuICogV2hlbiB1c2luZyByYWRpbyBidXR0b25zIGluIGEgcmVhY3RpdmUgZm9ybSwgcmFkaW8gYnV0dG9ucyBpbiB0aGUgc2FtZSBncm91cCBzaG91bGQgaGF2ZSB0aGVcbiAqIHNhbWUgYGZvcm1Db250cm9sTmFtZWAuIFlvdSBjYW4gYWxzbyBhZGQgYSBgbmFtZWAgYXR0cmlidXRlLCBidXQgaXQncyBvcHRpb25hbC5cbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvcmVhY3RpdmVSYWRpb0J1dHRvbnMvcmVhY3RpdmVfcmFkaW9fYnV0dG9uX2V4YW1wbGUudHMgcmVnaW9uPSdSZWFjdGl2ZSd9XG4gKiBcbiAqICAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgICBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9zdGF0ZTogYm9vbGVhbjtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX2NvbnRyb2w6IE5nQ29udHJvbDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX2ZuOiBGdW5jdGlvbjtcbiAgb25DaGFuZ2UgPSAoKSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgIG5hbWU6IHN0cmluZztcbiAgIGZvcm1Db250cm9sTmFtZTogc3RyaW5nO1xuICAgdmFsdWU6IGFueTtcbi8qKlxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAqIEBwYXJhbSB7P30gX3JlZ2lzdHJ5XG4gKiBAcGFyYW0gez99IF9pbmplY3RvclxuICovXG5jb25zdHJ1Y3RvcihcbnByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5wcml2YXRlIF9yZWdpc3RyeTogUmFkaW9Db250cm9sUmVnaXN0cnksXG5wcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHt9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLl9pbmplY3Rvci5nZXQoTmdDb250cm9sKTtcbiAgICB0aGlzLl9jaGVja05hbWUoKTtcbiAgICB0aGlzLl9yZWdpc3RyeS5hZGQodGhpcy5fY29udHJvbCwgdGhpcyk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkRlc3Ryb3koKTogdm9pZCB7IHRoaXMuX3JlZ2lzdHJ5LnJlbW92ZSh0aGlzKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG53cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0ZSA9IHZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdGhpcy5fc3RhdGUpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgZm4odGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLl9yZWdpc3RyeS5zZWxlY3QodGhpcyk7XG4gICAgfTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5maXJlVW5jaGVjayh2YWx1ZTogYW55KTogdm9pZCB7IHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jaGVja05hbWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZSAmJiB0aGlzLm5hbWUgIT09IHRoaXMuZm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgICB0aGlzLl90aHJvd05hbWVFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubmFtZSAmJiB0aGlzLmZvcm1Db250cm9sTmFtZSkgdGhpcy5uYW1lID0gdGhpcy5mb3JtQ29udHJvbE5hbWU7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfdGhyb3dOYW1lRXJyb3IoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgIElmIHlvdSBkZWZpbmUgYm90aCBhIG5hbWUgYW5kIGEgZm9ybUNvbnRyb2xOYW1lIGF0dHJpYnV0ZSBvbiB5b3VyIHJhZGlvIGJ1dHRvbiwgdGhlaXIgdmFsdWVzXG4gICAgICBtdXN0IG1hdGNoLiBFeDogPGlucHV0IHR5cGU9XCJyYWRpb1wiIGZvcm1Db250cm9sTmFtZT1cImZvb2RcIiBuYW1lPVwiZm9vZFwiPlxuICAgIGApO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0W3R5cGU9cmFkaW9dW2Zvcm1Db250cm9sTmFtZV0saW5wdXRbdHlwZT1yYWRpb11bZm9ybUNvbnRyb2xdLGlucHV0W3R5cGU9cmFkaW9dW25nTW9kZWxdJyxcbiAgaG9zdDogeycoY2hhbmdlKSc6ICdvbkNoYW5nZSgpJywgJyhibHVyKSc6ICdvblRvdWNoZWQoKSd9LFxuICBwcm92aWRlcnM6IFtSQURJT19WQUxVRV9BQ0NFU1NPUl1cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBSYWRpb0NvbnRyb2xSZWdpc3RyeSwgfSxcbnt0eXBlOiBJbmplY3RvciwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25hbWUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nZm9ybUNvbnRyb2xOYW1lJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3ZhbHVlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3BEZWNvcmF0b3JzO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9zdGF0ZTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fY29udHJvbDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZm47XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uVG91Y2hlZDtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm5hbWU7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5mb3JtQ29udHJvbE5hbWU7XG4vKiogQHR5cGUgez99ICovXG5SYWRpb0NvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS52YWx1ZTtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cblJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9lbGVtZW50UmVmO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX3JlZ2lzdHJ5O1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2luamVjdG9yO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBQcm92aWRlciwgUmVuZGVyZXIsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gUkFOR0VfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFuZ2VWYWx1ZUFjY2Vzc29yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIFRoZSBhY2Nlc3NvciBmb3Igd3JpdGluZyBhIHJhbmdlIHZhbHVlIGFuZCBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0aGF0IGlzIHVzZWQgYnkgdGhlXG4gKiB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfSBkaXJlY3RpdmVzLlxuICogXG4gKiAgIyMjIEV4YW1wbGVcbiAqICBgYGBcbiAqICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgWyhuZ01vZGVsKV09XCJhZ2VcIiA+XG4gKiAgYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSYW5nZVZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuLyoqXG4gKiBAcGFyYW0gez99IF9yZW5kZXJlclxuICogQHBhcmFtIHs/fSBfZWxlbWVudFJlZlxuICovXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG53cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBwYXJzZUZsb2F0KHZhbHVlKSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSAodmFsdWUpID0+IHsgZm4odmFsdWUgPT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpOyB9O1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMub25Ub3VjaGVkID0gZm47IH1cbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdpbnB1dFt0eXBlPXJhbmdlXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9cmFuZ2VdW2Zvcm1Db250cm9sXSxpbnB1dFt0eXBlPXJhbmdlXVtuZ01vZGVsXScsXG4gIGhvc3Q6IHtcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLFxuICAgICcoaW5wdXQpJzogJ29uQ2hhbmdlKCRldmVudC50YXJnZXQudmFsdWUpJyxcbiAgICAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtSQU5HRV9WQUxVRV9BQ0NFU1NPUl1cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG59XG5cbmZ1bmN0aW9uIFJhbmdlVmFsdWVBY2Nlc3Nvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFuZ2VWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuUmFuZ2VWYWx1ZUFjY2Vzc29yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cblJhbmdlVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUub25Ub3VjaGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmFuZ2VWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5SYW5nZVZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9lbGVtZW50UmVmO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yYW5nZV92YWx1ZV9hY2Nlc3Nvci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBSZW5kZXJlciwgZm9yd2FyZFJlZiwgybVsb29zZUlkZW50aWNhbCBhcyBsb29zZUlkZW50aWNhbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gU0VMRUNUX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEBwYXJhbSB7P30gaWRcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICBpZiAoaWQgPT0gbnVsbCkgcmV0dXJuIGAke3ZhbHVlfWA7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB2YWx1ZSA9ICdPYmplY3QnO1xuICByZXR1cm4gYCR7aWR9OiAke3ZhbHVlfWAuc2xpY2UoMCwgNTApO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfZXh0cmFjdElkKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWVTdHJpbmcuc3BsaXQoJzonKVswXTtcbn1cbi8qKlxuICogXFxAd2hhdEl0RG9lcyBXcml0ZXMgdmFsdWVzIGFuZCBsaXN0ZW5zIHRvIGNoYW5nZXMgb24gYSBzZWxlY3QgZWxlbWVudC5cbiAqIFxuICogVXNlZCBieSB7XFxAbGluayBOZ01vZGVsfSwge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LCBhbmQge1xcQGxpbmsgRm9ybUNvbnRyb2xOYW1lfVxuICogdG8ga2VlcCB0aGUgdmlldyBzeW5jZWQgd2l0aCB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IG1vZGVsLlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogSWYgeW91IGhhdmUgaW1wb3J0ZWQgdGhlIHtcXEBsaW5rIEZvcm1zTW9kdWxlfSBvciB0aGUge1xcQGxpbmsgUmVhY3RpdmVGb3Jtc01vZHVsZX0sIHRoaXNcbiAqIHZhbHVlIGFjY2Vzc29yIHdpbGwgYmUgYWN0aXZlIG9uIGFueSBzZWxlY3QgY29udHJvbCB0aGF0IGhhcyBhIGZvcm0gZGlyZWN0aXZlLiBZb3UgZG9cbiAqICoqbm90KiogbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yIHRvIGFjdGl2YXRlIGl0LlxuICogXG4gKiAjIyMgSG93IHRvIHVzZSBzZWxlY3QgY29udHJvbHMgd2l0aCBmb3JtIGRpcmVjdGl2ZXNcbiAqIFxuICogVG8gdXNlIGEgc2VsZWN0IGluIGEgdGVtcGxhdGUtZHJpdmVuIGZvcm0sIHNpbXBseSBhZGQgYW4gYG5nTW9kZWxgIGFuZCBhIGBuYW1lYFxuICogYXR0cmlidXRlIHRvIHRoZSBtYWluIGA8c2VsZWN0PmAgdGFnLlxuICogXG4gKiBJZiB5b3VyIG9wdGlvbiB2YWx1ZXMgYXJlIHNpbXBsZSBzdHJpbmdzLCB5b3UgY2FuIGJpbmQgdG8gdGhlIG5vcm1hbCBgdmFsdWVgIHByb3BlcnR5XG4gKiBvbiB0aGUgb3B0aW9uLiAgSWYgeW91ciBvcHRpb24gdmFsdWVzIGhhcHBlbiB0byBiZSBvYmplY3RzIChhbmQgeW91J2QgbGlrZSB0byBzYXZlIHRoZVxuICogc2VsZWN0aW9uIGluIHlvdXIgZm9ybSBhcyBhbiBvYmplY3QpLCB1c2UgYG5nVmFsdWVgIGluc3RlYWQ6XG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NlbGVjdENvbnRyb2wvc2VsZWN0X2NvbnRyb2xfZXhhbXBsZS50cyByZWdpb249J0NvbXBvbmVudCd9XG4gKiBcbiAqIEluIHJlYWN0aXZlIGZvcm1zLCB5b3UnbGwgYWxzbyB3YW50IHRvIGFkZCB5b3VyIGZvcm0gZGlyZWN0aXZlIChgZm9ybUNvbnRyb2xOYW1lYCBvclxuICogYGZvcm1Db250cm9sYCkgb24gdGhlIG1haW4gYDxzZWxlY3Q+YCB0YWcuIExpa2UgaW4gdGhlIGZvcm1lciBleGFtcGxlLCB5b3UgaGF2ZSB0aGVcbiAqIGNob2ljZSBvZiBiaW5kaW5nIHRvIHRoZSAgYHZhbHVlYCBvciBgbmdWYWx1ZWAgcHJvcGVydHkgb24gdGhlIHNlbGVjdCdzIG9wdGlvbnMuXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3JlYWN0aXZlU2VsZWN0Q29udHJvbC9yZWFjdGl2ZV9zZWxlY3RfY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogIyMjIENhdmVhdDogT3B0aW9uIHNlbGVjdGlvblxuICogXG4gKiBBbmd1bGFyIHVzZXMgb2JqZWN0IGlkZW50aXR5IHRvIHNlbGVjdCBvcHRpb24uIEl0J3MgcG9zc2libGUgZm9yIHRoZSBpZGVudGl0aWVzIG9mIGl0ZW1zXG4gKiB0byBjaGFuZ2Ugd2hpbGUgdGhlIGRhdGEgZG9lcyBub3QuIFRoaXMgY2FuIGhhcHBlbiwgZm9yIGV4YW1wbGUsIGlmIHRoZSBpdGVtcyBhcmUgcHJvZHVjZWRcbiAqIGZyb20gYW4gUlBDIHRvIHRoZSBzZXJ2ZXIsIGFuZCB0aGF0IFJQQyBpcyByZS1ydW4uIEV2ZW4gaWYgdGhlIGRhdGEgaGFzbid0IGNoYW5nZWQsIHRoZVxuICogc2Vjb25kIHJlc3BvbnNlIHdpbGwgcHJvZHVjZSBvYmplY3RzIHdpdGggZGlmZmVyZW50IGlkZW50aXRpZXMuXG4gKiBcbiAqIFRvIGN1c3RvbWl6ZSB0aGUgZGVmYXVsdCBvcHRpb24gY29tcGFyaXNvbiBhbGdvcml0aG0sIGA8c2VsZWN0PmAgc3VwcG9ydHMgYGNvbXBhcmVXaXRoYCBpbnB1dC5cbiAqIGBjb21wYXJlV2l0aGAgdGFrZXMgYSAqKmZ1bmN0aW9uKiogd2hpY2ggaGFzIHR3byBhcmd1bWVudHM6IGBvcHRpb24xYCBhbmQgYG9wdGlvbjJgLlxuICogSWYgYGNvbXBhcmVXaXRoYCBpcyBnaXZlbiwgQW5ndWxhciBzZWxlY3RzIG9wdGlvbiBieSB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbi5cbiAqIFxuICogIyMjIyBTeW50YXhcbiAqIFxuICogYGBgXG4gKiA8c2VsZWN0IFtjb21wYXJlV2l0aF09XCJjb21wYXJlRm5cIiAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZENvdW50cmllc1wiPlxuICogICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdW50cnkgb2YgY291bnRyaWVzXCIgW25nVmFsdWVdPVwiY291bnRyeVwiPlxuICogICAgICAgICB7e2NvdW50cnkubmFtZX19XG4gKiAgICAgPC9vcHRpb24+XG4gKiA8L3NlbGVjdD5cbiAqIFxuICogY29tcGFyZUZuKGMxOiBDb3VudHJ5LCBjMjogQ291bnRyeSk6IGJvb2xlYW4ge1xuICogICAgIHJldHVybiBjMSAmJiBjMiA/IGMxLmlkID09PSBjMi5pZCA6IGMxID09PSBjMjtcbiAqIH1cbiAqIGBgYFxuICogXG4gKiBOb3RlOiBXZSBsaXN0ZW4gdG8gdGhlICdjaGFuZ2UnIGV2ZW50IGJlY2F1c2UgJ2lucHV0JyBldmVudHMgYXJlbid0IGZpcmVkXG4gKiBmb3Igc2VsZWN0cyBpbiBGaXJlZm94IGFuZCBJRTpcbiAqIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwMjQzNTBcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzQ2NjAwNDUvXG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgdmFsdWU6IGFueTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX29wdGlvbk1hcDogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9pZENvdW50ZXI6IG51bWJlciA9IDA7XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCBjb21wYXJlV2l0aChmbjogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGNvbXBhcmVXaXRoIG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfWApO1xuICAgIH1cbiAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICB9XG5wcml2YXRlIF9jb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4gPSBsb29zZUlkZW50aWNhbDtcbi8qKlxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX2VsZW1lbnRSZWZcbiAqL1xuY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyLFxucHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xud3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaWQ6IHN0cmluZyA9IHRoaXMuX2dldE9wdGlvbklkKHZhbHVlKTtcbiAgICBpZiAoaWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkSW5kZXgnLCAtMSk7XG4gICAgfVxuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdmFsdWVTdHJpbmcgPSBfYnVpbGRWYWx1ZVN0cmluZyhpZCwgdmFsdWUpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHZhbHVlU3RyaW5nKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9ICh2YWx1ZVN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVTdHJpbmc7XG4gICAgICBmbih0aGlzLl9nZXRPcHRpb25WYWx1ZSh2YWx1ZVN0cmluZykpO1xuICAgIH07XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gaXNEaXNhYmxlZFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9yZWdpc3Rlck9wdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gKHRoaXMuX2lkQ291bnRlcisrKS50b1N0cmluZygpOyB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZ2V0T3B0aW9uSWQodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgZm9yIChjb25zdCAvKiogQHR5cGUgez99ICovIGlkIG9mIEFycmF5LmZyb20odGhpcy5fb3B0aW9uTWFwLmtleXMoKSkpIHtcbiAgICAgIGlmICh0aGlzLl9jb21wYXJlV2l0aCh0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKSwgdmFsdWUpKSByZXR1cm4gaWQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlU3RyaW5nXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZ2V0T3B0aW9uVmFsdWUodmFsdWVTdHJpbmc6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpZDogc3RyaW5nID0gX2V4dHJhY3RJZCh2YWx1ZVN0cmluZyk7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbk1hcC5oYXMoaWQpID8gdGhpcy5fb3B0aW9uTWFwLmdldChpZCkgOiB2YWx1ZVN0cmluZztcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjpcbiAgICAgICdzZWxlY3Q6bm90KFttdWx0aXBsZV0pW2Zvcm1Db250cm9sTmFtZV0sc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtmb3JtQ29udHJvbF0sc2VsZWN0Om5vdChbbXVsdGlwbGVdKVtuZ01vZGVsXScsXG4gIGhvc3Q6IHsnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50LnRhcmdldC52YWx1ZSknLCAnKGJsdXIpJzogJ29uVG91Y2hlZCgpJ30sXG4gIHByb3ZpZGVyczogW1NFTEVDVF9WQUxVRV9BQ0NFU1NPUl1cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2NvbXBhcmVXaXRoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS52YWx1ZTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX29wdGlvbk1hcDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2lkQ291bnRlcjtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vblRvdWNoZWQ7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvci5wcm90b3R5cGUuX2NvbXBhcmVXaXRoO1xuLyoqIEB0eXBlIHs/fSAqL1xuU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fZWxlbWVudFJlZjtcbn1cblxuLyoqXG4gKiBcXEB3aGF0SXREb2VzIE1hcmtzIGA8b3B0aW9uPmAgYXMgZHluYW1pYywgc28gQW5ndWxhciBjYW4gYmUgbm90aWZpZWQgd2hlbiBvcHRpb25zIGNoYW5nZS5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFNlZSBkb2NzIGZvciB7XFxAbGluayBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZm9yIHVzYWdlIGV4YW1wbGVzLlxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE5nU2VsZWN0T3B0aW9uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgaWQ6IHN0cmluZztcbi8qKlxuICogQHBhcmFtIHs/fSBfZWxlbWVudFxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX3NlbGVjdFxuICovXG5jb25zdHJ1Y3RvcihcbnByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG5wcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9zZWxlY3Q6IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdCkgdGhpcy5pZCA9IHRoaXMuX3NlbGVjdC5fcmVnaXN0ZXJPcHRpb24oKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgbmdWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdCA9PSBudWxsKSByZXR1cm47XG4gICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuc2V0KHRoaXMuaWQsIHZhbHVlKTtcbiAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmcodGhpcy5pZCwgdmFsdWUpKTtcbiAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2VsZWN0KSB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fc2V0RWxlbWVudFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdCkge1xuICAgICAgdGhpcy5fc2VsZWN0Ll9vcHRpb25NYXAuZGVsZXRlKHRoaXMuaWQpO1xuICAgICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgICB9XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tzZWxlY3RvcjogJ29wdGlvbid9LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSG9zdCB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25nVmFsdWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ1ZhbHVlJywgXSB9LF0sXG4ndmFsdWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyd2YWx1ZScsIF0gfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gTmdTZWxlY3RPcHRpb25fdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0T3B0aW9uLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdTZWxlY3RPcHRpb24uY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE9wdGlvbi5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5pZDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5fZWxlbWVudDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0T3B0aW9uLnByb3RvdHlwZS5fcmVuZGVyZXI7XG4vKiogQHR5cGUgez99ICovXG5OZ1NlbGVjdE9wdGlvbi5wcm90b3R5cGUuX3NlbGVjdDtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBQcm92aWRlciwgUmVuZGVyZXIsIGZvcndhcmRSZWYsIMm1bG9vc2VJZGVudGljYWwgYXMgbG9vc2VJZGVudGljYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFNFTEVDVF9NVUxUSVBMRV9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEBwYXJhbSB7P30gaWRcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9idWlsZFZhbHVlU3RyaW5nKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICBpZiAoaWQgPT0gbnVsbCkgcmV0dXJuIGAke3ZhbHVlfWA7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB2YWx1ZSA9IGAnJHt2YWx1ZX0nYDtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHZhbHVlID0gJ09iamVjdCc7XG4gIHJldHVybiBgJHtpZH06ICR7dmFsdWV9YC5zbGljZSgwLCA1MCk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVTdHJpbmdcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9leHRyYWN0SWQodmFsdWVTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZVN0cmluZy5zcGxpdCgnOicpWzBdO1xufVxuXG4vKiogTW9jayBpbnRlcmZhY2UgZm9yIEhUTUwgT3B0aW9ucyAqL1xuaW50ZXJmYWNlIEhUTUxPcHRpb24ge1xuICB2YWx1ZTogc3RyaW5nO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbn1cbi8qKlxuICogTW9jayBpbnRlcmZhY2UgZm9yIEhUTUxDb2xsZWN0aW9uXG4gKiBAYWJzdHJhY3RcbiAqL1xuYWJzdHJhY3QgY2xhc3MgSFRNTENvbGxlY3Rpb24ge1xuICBsZW5ndGg6IG51bWJlcjtcbi8qKlxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0gez99IF9cbiAqIEByZXR1cm4gez99XG4gKi9cbml0ZW0oXzogbnVtYmVyKSB7fVxufVxuXG5mdW5jdGlvbiBIVE1MQ29sbGVjdGlvbl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmxlbmd0aDtcbn1cblxuLyoqXG4gKiBUaGUgYWNjZXNzb3IgZm9yIHdyaXRpbmcgYSB2YWx1ZSBhbmQgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gYSBzZWxlY3QgZWxlbWVudC5cbiAqIFxuICogICMjIyBDYXZlYXQ6IE9wdGlvbnMgc2VsZWN0aW9uXG4gKiBcbiAqIEFuZ3VsYXIgdXNlcyBvYmplY3QgaWRlbnRpdHkgdG8gc2VsZWN0IG9wdGlvbnMuIEl0J3MgcG9zc2libGUgZm9yIHRoZSBpZGVudGl0aWVzIG9mIGl0ZW1zXG4gKiB0byBjaGFuZ2Ugd2hpbGUgdGhlIGRhdGEgZG9lcyBub3QuIFRoaXMgY2FuIGhhcHBlbiwgZm9yIGV4YW1wbGUsIGlmIHRoZSBpdGVtcyBhcmUgcHJvZHVjZWRcbiAqIGZyb20gYW4gUlBDIHRvIHRoZSBzZXJ2ZXIsIGFuZCB0aGF0IFJQQyBpcyByZS1ydW4uIEV2ZW4gaWYgdGhlIGRhdGEgaGFzbid0IGNoYW5nZWQsIHRoZVxuICogc2Vjb25kIHJlc3BvbnNlIHdpbGwgcHJvZHVjZSBvYmplY3RzIHdpdGggZGlmZmVyZW50IGlkZW50aXRpZXMuXG4gKiBcbiAqIFRvIGN1c3RvbWl6ZSB0aGUgZGVmYXVsdCBvcHRpb24gY29tcGFyaXNvbiBhbGdvcml0aG0sIGA8c2VsZWN0IG11bHRpcGxlPmAgc3VwcG9ydHMgYGNvbXBhcmVXaXRoYFxuICogaW5wdXQuIGBjb21wYXJlV2l0aGAgdGFrZXMgYSAqKmZ1bmN0aW9uKiogd2hpY2ggaGFzIHR3byBhcmd1bWVudHM6IGBvcHRpb24xYCBhbmQgYG9wdGlvbjJgLlxuICogSWYgYGNvbXBhcmVXaXRoYCBpcyBnaXZlbiwgQW5ndWxhciBzZWxlY3RzIG9wdGlvbnMgYnkgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24uXG4gKiBcbiAqICMjIyMgU3ludGF4XG4gKiBcbiAqIGBgYFxuICogPHNlbGVjdCBtdWx0aXBsZSBbY29tcGFyZVdpdGhdPVwiY29tcGFyZUZuXCIgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRDb3VudHJpZXNcIj5cbiAqICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjb3VudHJ5IG9mIGNvdW50cmllc1wiIFtuZ1ZhbHVlXT1cImNvdW50cnlcIj5cbiAqICAgICAgICAge3tjb3VudHJ5Lm5hbWV9fVxuICogICAgIDwvb3B0aW9uPlxuICogPC9zZWxlY3Q+XG4gKiBcbiAqIGNvbXBhcmVGbihjMTogQ291bnRyeSwgYzI6IENvdW50cnkpOiBib29sZWFuIHtcbiAqICAgICByZXR1cm4gYzEgJiYgYzIgPyBjMS5pZCA9PT0gYzIuaWQgOiBjMSA9PT0gYzI7XG4gKiB9XG4gKiBgYGBcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICB2YWx1ZTogYW55O1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fb3B0aW9uTWFwOiBNYXA8c3RyaW5nLCBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uPiA9IG5ldyBNYXA8c3RyaW5nLCBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uPigpO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5faWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgY29tcGFyZVdpdGgoZm46IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBjb21wYXJlV2l0aCBtdXN0IGJlIGEgZnVuY3Rpb24sIGJ1dCByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KGZuKX1gKTtcbiAgICB9XG4gICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcbiAgfVxucHJpdmF0ZSBfY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuID0gbG9vc2VJZGVudGljYWw7XG4vKipcbiAqIEBwYXJhbSB7P30gX3JlbmRlcmVyXG4gKiBAcGFyYW0gez99IF9lbGVtZW50UmVmXG4gKi9cbmNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcixcbnByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbndyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBsZXQgLyoqIEB0eXBlIHs/fSAqLyBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyOiAob3B0OiBOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLCBvOiBhbnkpID0+IHZvaWQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAvLyBjb252ZXJ0IHZhbHVlcyB0byBpZHNcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaWRzID0gdmFsdWUubWFwKCh2KSA9PiB0aGlzLl9nZXRPcHRpb25JZCh2KSk7XG4gICAgICBvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyID0gKG9wdCwgbykgPT4geyBvcHQuX3NldFNlbGVjdGVkKGlkcy5pbmRleE9mKG8udG9TdHJpbmcoKSkgPiAtMSk7IH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvblNlbGVjdGVkU3RhdGVTZXR0ZXIgPSAob3B0LCBvKSA9PiB7IG9wdC5fc2V0U2VsZWN0ZWQoZmFsc2UpOyB9O1xuICAgIH1cbiAgICB0aGlzLl9vcHRpb25NYXAuZm9yRWFjaChvcHRpb25TZWxlY3RlZFN0YXRlU2V0dGVyKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGZuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgICAgIGlmIChfLmhhc093blByb3BlcnR5KCdzZWxlY3RlZE9wdGlvbnMnKSkge1xuICAgICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG9wdGlvbnM6IEhUTUxDb2xsZWN0aW9uID0gXy5zZWxlY3RlZE9wdGlvbnM7XG4gICAgICAgIGZvciAobGV0IC8qKiBAdHlwZSB7P30gKi8gaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBvcHQ6IGFueSA9IG9wdGlvbnMuaXRlbShpKTtcbiAgICAgICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHZhbDogYW55ID0gdGhpcy5fZ2V0T3B0aW9uVmFsdWUob3B0LnZhbHVlKTtcbiAgICAgICAgICBzZWxlY3RlZC5wdXNoKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIERlZ3JhZGUgb24gSUVcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG9wdGlvbnM6IEhUTUxDb2xsZWN0aW9uID0gLyoqIEB0eXBlIHs/fSAqLygoIDxIVE1MQ29sbGVjdGlvbj5fLm9wdGlvbnMpKTtcbiAgICAgICAgZm9yIChsZXQgLyoqIEB0eXBlIHs/fSAqLyBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG9wdDogSFRNTE9wdGlvbiA9IG9wdGlvbnMuaXRlbShpKTtcbiAgICAgICAgICBpZiAob3B0LnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHZhbDogYW55ID0gdGhpcy5fZ2V0T3B0aW9uVmFsdWUob3B0LnZhbHVlKTtcbiAgICAgICAgICAgIHNlbGVjdGVkLnB1c2godmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgIGZuKHNlbGVjdGVkKTtcbiAgICB9O1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fcmVnaXN0ZXJPcHRpb24odmFsdWU6IE5nU2VsZWN0TXVsdGlwbGVPcHRpb24pOiBzdHJpbmcge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaWQ6IHN0cmluZyA9ICh0aGlzLl9pZENvdW50ZXIrKykudG9TdHJpbmcoKTtcbiAgICB0aGlzLl9vcHRpb25NYXAuc2V0KGlkLCB2YWx1ZSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZ2V0T3B0aW9uSWQodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgZm9yIChjb25zdCAvKiogQHR5cGUgez99ICovIGlkIG9mIEFycmF5LmZyb20odGhpcy5fb3B0aW9uTWFwLmtleXMoKSkpIHtcbiAgICAgIGlmICh0aGlzLl9jb21wYXJlV2l0aCh0aGlzLl9vcHRpb25NYXAuZ2V0KGlkKS5fdmFsdWUsIHZhbHVlKSkgcmV0dXJuIGlkO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVN0cmluZ1xuICogQHJldHVybiB7P31cbiAqL1xuX2dldE9wdGlvblZhbHVlKHZhbHVlU3RyaW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaWQ6IHN0cmluZyA9IF9leHRyYWN0SWQodmFsdWVTdHJpbmcpO1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25NYXAuaGFzKGlkKSA/IHRoaXMuX29wdGlvbk1hcC5nZXQoaWQpLl92YWx1ZSA6IHZhbHVlU3RyaW5nO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ3NlbGVjdFttdWx0aXBsZV1bZm9ybUNvbnRyb2xOYW1lXSxzZWxlY3RbbXVsdGlwbGVdW2Zvcm1Db250cm9sXSxzZWxlY3RbbXVsdGlwbGVdW25nTW9kZWxdJyxcbiAgaG9zdDogeycoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQudGFyZ2V0KScsICcoYmx1ciknOiAnb25Ub3VjaGVkKCknfSxcbiAgcHJvdmlkZXJzOiBbU0VMRUNUX01VTFRJUExFX1ZBTFVFX0FDQ0VTU09SXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nY29tcGFyZVdpdGgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS52YWx1ZTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5fb3B0aW9uTWFwO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9pZENvdW50ZXI7XG4vKiogQHR5cGUgez99ICovXG5TZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLnByb3RvdHlwZS5vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLm9uVG91Y2hlZDtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9jb21wYXJlV2l0aDtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9yZW5kZXJlcjtcbi8qKiBAdHlwZSB7P30gKi9cblNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IucHJvdG90eXBlLl9lbGVtZW50UmVmO1xufVxuXG4vKipcbiAqIE1hcmtzIGA8b3B0aW9uPmAgYXMgZHluYW1pYywgc28gQW5ndWxhciBjYW4gYmUgbm90aWZpZWQgd2hlbiBvcHRpb25zIGNoYW5nZS5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiA8c2VsZWN0IG11bHRpcGxlIG5hbWU9XCJjaXR5XCIgbmdNb2RlbD5cbiAqICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgYyBvZiBjaXRpZXNcIiBbdmFsdWVdPVwiY1wiPjwvb3B0aW9uPlxuICogPC9zZWxlY3Q+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIE5nU2VsZWN0TXVsdGlwbGVPcHRpb24gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBpZDogc3RyaW5nO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fdmFsdWU6IGFueTtcbi8qKlxuICogQHBhcmFtIHs/fSBfZWxlbWVudFxuICogQHBhcmFtIHs/fSBfcmVuZGVyZXJcbiAqIEBwYXJhbSB7P30gX3NlbGVjdFxuICovXG5jb25zdHJ1Y3RvcihcbnByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG5wcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIsXG5wcml2YXRlIF9zZWxlY3Q6IFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5fc2VsZWN0Ll9yZWdpc3Rlck9wdGlvbih0aGlzKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IG5nVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl9zZWxlY3QgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fc2V0RWxlbWVudFZhbHVlKF9idWlsZFZhbHVlU3RyaW5nKHRoaXMuaWQsIHZhbHVlKSk7XG4gICAgdGhpcy5fc2VsZWN0LndyaXRlVmFsdWUodGhpcy5fc2VsZWN0LnZhbHVlKTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl9zZWxlY3QpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9zZXRFbGVtZW50VmFsdWUoX2J1aWxkVmFsdWVTdHJpbmcodGhpcy5pZCwgdmFsdWUpKTtcbiAgICAgIHRoaXMuX3NlbGVjdC53cml0ZVZhbHVlKHRoaXMuX3NlbGVjdC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldEVsZW1lbnRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fc2V0RWxlbWVudFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gc2VsZWN0ZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbl9zZXRTZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0KSB7XG4gICAgICB0aGlzLl9zZWxlY3QuX29wdGlvbk1hcC5kZWxldGUodGhpcy5pZCk7XG4gICAgICB0aGlzLl9zZWxlY3Qud3JpdGVWYWx1ZSh0aGlzLl9zZWxlY3QudmFsdWUpO1xuICAgIH1cbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe3NlbGVjdG9yOiAnb3B0aW9uJ30sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEhvc3QgfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbiduZ1ZhbHVlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdWYWx1ZScsIF0gfSxdLFxuJ3ZhbHVlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsndmFsdWUnLCBdIH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIE5nU2VsZWN0TXVsdGlwbGVPcHRpb25fdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24uZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OZ1NlbGVjdE11bHRpcGxlT3B0aW9uLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLmlkO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl92YWx1ZTtcbi8qKiBAdHlwZSB7P30gKi9cbk5nU2VsZWN0TXVsdGlwbGVPcHRpb24ucHJvdG90eXBlLl9lbGVtZW50O1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUuX3JlbmRlcmVyO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdTZWxlY3RNdWx0aXBsZU9wdGlvbi5wcm90b3R5cGUuX3NlbGVjdDtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvc2VsZWN0X211bHRpcGxlX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3IudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHvJtWxvb3NlSWRlbnRpY2FsIGFzIGxvb3NlSWRlbnRpY2FsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUFycmF5LCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQge1ZhbGlkYXRvcnN9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vYWJzdHJhY3RfY29udHJvbF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0NoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RlZmF1bHRfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vbmdfY29udHJvbCc7XG5pbXBvcnQge25vcm1hbGl6ZUFzeW5jVmFsaWRhdG9yLCBub3JtYWxpemVWYWxpZGF0b3J9IGZyb20gJy4vbm9ybWFsaXplX3ZhbGlkYXRvcic7XG5pbXBvcnQge051bWJlclZhbHVlQWNjZXNzb3J9IGZyb20gJy4vbnVtYmVyX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7UmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7UmFuZ2VWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL3JhbmdlX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7Rm9ybUFycmF5TmFtZX0gZnJvbSAnLi9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZSc7XG5pbXBvcnQge1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7U2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9zZWxlY3RfbXVsdGlwbGVfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZufSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuLyoqXG4gKiBAcGFyYW0gez99IG5hbWVcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbFBhdGgobmFtZTogc3RyaW5nLCBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBbLi4ucGFyZW50LnBhdGgsIG5hbWVdO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VXBDb250cm9sKGNvbnRyb2w6IEZvcm1Db250cm9sLCBkaXI6IE5nQ29udHJvbCk6IHZvaWQge1xuICBpZiAoIWNvbnRyb2wpIF90aHJvd0Vycm9yKGRpciwgJ0Nhbm5vdCBmaW5kIGNvbnRyb2wgd2l0aCcpO1xuICBpZiAoIWRpci52YWx1ZUFjY2Vzc29yKSBfdGhyb3dFcnJvcihkaXIsICdObyB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcblxuICBjb250cm9sLnZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZShbY29udHJvbC52YWxpZGF0b3IsIGRpci52YWxpZGF0b3JdKTtcbiAgY29udHJvbC5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFtjb250cm9sLmFzeW5jVmFsaWRhdG9yLCBkaXIuYXN5bmNWYWxpZGF0b3JdKTtcbiAgZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShjb250cm9sLnZhbHVlKTtcblxuICAvLyB2aWV3IC0+IG1vZGVsXG4gIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25DaGFuZ2UoKG5ld1ZhbHVlOiBhbnkpID0+IHtcbiAgICBkaXIudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWUpO1xuICAgIGNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICBjb250cm9sLnNldFZhbHVlKG5ld1ZhbHVlLCB7ZW1pdE1vZGVsVG9WaWV3Q2hhbmdlOiBmYWxzZX0pO1xuICB9KTtcblxuICAvLyB0b3VjaGVkXG4gIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25Ub3VjaGVkKCgpID0+IGNvbnRyb2wubWFya0FzVG91Y2hlZCgpKTtcblxuICBjb250cm9sLnJlZ2lzdGVyT25DaGFuZ2UoKG5ld1ZhbHVlOiBhbnksIGVtaXRNb2RlbEV2ZW50OiBib29sZWFuKSA9PiB7XG4gICAgLy8gY29udHJvbCAtPiB2aWV3XG4gICAgZGlyLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICAvLyBjb250cm9sIC0+IG5nTW9kZWxcbiAgICBpZiAoZW1pdE1vZGVsRXZlbnQpIGRpci52aWV3VG9Nb2RlbFVwZGF0ZShuZXdWYWx1ZSk7XG4gIH0pO1xuXG4gIGlmIChkaXIudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgY29udHJvbC5yZWdpc3Rlck9uRGlzYWJsZWRDaGFuZ2UoXG4gICAgICAgIChpc0Rpc2FibGVkOiBib29sZWFuKSA9PiB7IGRpci52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCk7IH0pO1xuICB9XG5cbiAgLy8gcmUtcnVuIHZhbGlkYXRpb24gd2hlbiB2YWxpZGF0b3IgYmluZGluZyBjaGFuZ2VzLCBlLmcuIG1pbmxlbmd0aD0zIC0+IG1pbmxlbmd0aD00XG4gIGRpci5fcmF3VmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3I6IFZhbGlkYXRvciB8IFZhbGlkYXRvckZuKSA9PiB7XG4gICAgaWYgKCggLyoqIEB0eXBlIHs/fSAqLygoPFZhbGlkYXRvcj52YWxpZGF0b3IpKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSlcbiAgICAgICggLyoqIEB0eXBlIHs/fSAqLygoPFZhbGlkYXRvcj52YWxpZGF0b3IpKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSgoKSA9PiBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKSk7XG4gIH0pO1xuXG4gIGRpci5fcmF3QXN5bmNWYWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3IgfCBBc3luY1ZhbGlkYXRvckZuKSA9PiB7XG4gICAgaWYgKCggLyoqIEB0eXBlIHs/fSAqLygoPFZhbGlkYXRvcj52YWxpZGF0b3IpKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSlcbiAgICAgICggLyoqIEB0eXBlIHs/fSAqLygoPFZhbGlkYXRvcj52YWxpZGF0b3IpKSkucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZSgoKSA9PiBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKSk7XG4gIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5VcENvbnRyb2woY29udHJvbDogRm9ybUNvbnRyb2wsIGRpcjogTmdDb250cm9sKSB7XG4gIGRpci52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25DaGFuZ2UoKCkgPT4gX25vQ29udHJvbEVycm9yKGRpcikpO1xuICBkaXIudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uVG91Y2hlZCgoKSA9PiBfbm9Db250cm9sRXJyb3IoZGlyKSk7XG5cbiAgZGlyLl9yYXdWYWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcjogYW55KSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSB7XG4gICAgICB2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShudWxsKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRpci5fcmF3QXN5bmNWYWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcjogYW55KSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvci5yZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKSB7XG4gICAgICB2YWxpZGF0b3IucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShudWxsKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjb250cm9sKSBjb250cm9sLl9jbGVhckNoYW5nZUZucygpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0VXBGb3JtQ29udGFpbmVyKFxuICAgIGNvbnRyb2w6IEZvcm1Hcm91cCB8IEZvcm1BcnJheSwgZGlyOiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSB8IEZvcm1BcnJheU5hbWUpIHtcbiAgaWYgKGNvbnRyb2wgPT0gbnVsbCkgX3Rocm93RXJyb3IoZGlyLCAnQ2Fubm90IGZpbmQgY29udHJvbCB3aXRoJyk7XG4gIGNvbnRyb2wudmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFtjb250cm9sLnZhbGlkYXRvciwgZGlyLnZhbGlkYXRvcl0pO1xuICBjb250cm9sLmFzeW5jVmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoW2NvbnRyb2wuYXN5bmNWYWxpZGF0b3IsIGRpci5hc3luY1ZhbGlkYXRvcl0pO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gX25vQ29udHJvbEVycm9yKGRpcjogTmdDb250cm9sKSB7XG4gIHJldHVybiBfdGhyb3dFcnJvcihkaXIsICdUaGVyZSBpcyBubyBGb3JtQ29udHJvbCBpbnN0YW5jZSBhdHRhY2hlZCB0byBmb3JtIGNvbnRyb2wgZWxlbWVudCB3aXRoJyk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcGFyYW0gez99IG1lc3NhZ2VcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF90aHJvd0Vycm9yKGRpcjogQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgbGV0IC8qKiBAdHlwZSB7P30gKi8gbWVzc2FnZUVuZDogc3RyaW5nO1xuICBpZiAoZGlyLnBhdGgubGVuZ3RoID4gMSkge1xuICAgIG1lc3NhZ2VFbmQgPSBgcGF0aDogJyR7ZGlyLnBhdGguam9pbignIC0+ICcpfSdgO1xuICB9IGVsc2UgaWYgKGRpci5wYXRoWzBdKSB7XG4gICAgbWVzc2FnZUVuZCA9IGBuYW1lOiAnJHtkaXIucGF0aH0nYDtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlRW5kID0gJ3Vuc3BlY2lmaWVkIG5hbWUgYXR0cmlidXRlJztcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYCR7bWVzc2FnZX0gJHttZXNzYWdlRW5kfWApO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3JzOiBBcnJheTxWYWxpZGF0b3J8RnVuY3Rpb24+KTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gdmFsaWRhdG9ycyAhPSBudWxsID8gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMubWFwKG5vcm1hbGl6ZVZhbGlkYXRvcikpIDogbnVsbDtcbn1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh2YWxpZGF0b3JzOiBBcnJheTxWYWxpZGF0b3J8RnVuY3Rpb24+KTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gIHJldHVybiB2YWxpZGF0b3JzICE9IG51bGwgPyBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyh2YWxpZGF0b3JzLm1hcChub3JtYWxpemVBc3luY1ZhbGlkYXRvcikpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHBhcmFtIHs/fSB2aWV3TW9kZWxcbiAqIEByZXR1cm4gez99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzOiB7W2tleTogc3RyaW5nXTogYW55fSwgdmlld01vZGVsOiBhbnkpOiBib29sZWFuIHtcbiAgaWYgKCFjaGFuZ2VzLmhhc093blByb3BlcnR5KCdtb2RlbCcpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY2hhbmdlID0gY2hhbmdlc1snbW9kZWwnXTtcblxuICBpZiAoY2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiAhbG9vc2VJZGVudGljYWwodmlld01vZGVsLCBjaGFuZ2UuY3VycmVudFZhbHVlKTtcbn1cblxuY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBCVUlMVElOX0FDQ0VTU09SUyA9IFtcbiAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgUmFuZ2VWYWx1ZUFjY2Vzc29yLFxuICBOdW1iZXJWYWx1ZUFjY2Vzc29yLFxuICBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgUmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcixcbl07XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVBY2Nlc3NvclxuICogQHJldHVybiB7P31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQnVpbHRJbkFjY2Vzc29yKHZhbHVlQWNjZXNzb3I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yKTogYm9vbGVhbiB7XG4gIHJldHVybiBCVUlMVElOX0FDQ0VTU09SUy5zb21lKGEgPT4gdmFsdWVBY2Nlc3Nvci5jb25zdHJ1Y3RvciA9PT0gYSk7XG59XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0VmFsdWVBY2Nlc3NvcihcbiAgICBkaXI6IE5nQ29udHJvbCwgdmFsdWVBY2Nlc3NvcnM6IENvbnRyb2xWYWx1ZUFjY2Vzc29yW10pOiBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIGlmICghdmFsdWVBY2Nlc3NvcnMpIHJldHVybiBudWxsO1xuXG4gIGxldCAvKiogQHR5cGUgez99ICovIGRlZmF1bHRBY2Nlc3NvcjogQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gIGxldCAvKiogQHR5cGUgez99ICovIGJ1aWx0aW5BY2Nlc3NvcjogQ29udHJvbFZhbHVlQWNjZXNzb3I7XG4gIGxldCAvKiogQHR5cGUgez99ICovIGN1c3RvbUFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3NvcjtcbiAgdmFsdWVBY2Nlc3NvcnMuZm9yRWFjaCgodjogQ29udHJvbFZhbHVlQWNjZXNzb3IpID0+IHtcbiAgICBpZiAodi5jb25zdHJ1Y3RvciA9PT0gRGVmYXVsdFZhbHVlQWNjZXNzb3IpIHtcbiAgICAgIGRlZmF1bHRBY2Nlc3NvciA9IHY7XG5cbiAgICB9IGVsc2UgaWYgKGlzQnVpbHRJbkFjY2Vzc29yKHYpKSB7XG4gICAgICBpZiAoYnVpbHRpbkFjY2Vzc29yKVxuICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGJ1aWx0LWluIHZhbHVlIGFjY2Vzc29yIG1hdGNoZXMgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgICAgIGJ1aWx0aW5BY2Nlc3NvciA9IHY7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1c3RvbUFjY2Vzc29yKVxuICAgICAgICBfdGhyb3dFcnJvcihkaXIsICdNb3JlIHRoYW4gb25lIGN1c3RvbSB2YWx1ZSBhY2Nlc3NvciBtYXRjaGVzIGZvcm0gY29udHJvbCB3aXRoJyk7XG4gICAgICBjdXN0b21BY2Nlc3NvciA9IHY7XG4gICAgfVxuICB9KTtcblxuICBpZiAoY3VzdG9tQWNjZXNzb3IpIHJldHVybiBjdXN0b21BY2Nlc3NvcjtcbiAgaWYgKGJ1aWx0aW5BY2Nlc3NvcikgcmV0dXJuIGJ1aWx0aW5BY2Nlc3NvcjtcbiAgaWYgKGRlZmF1bHRBY2Nlc3NvcikgcmV0dXJuIGRlZmF1bHRBY2Nlc3NvcjtcblxuICBfdGhyb3dFcnJvcihkaXIsICdObyB2YWxpZCB2YWx1ZSBhY2Nlc3NvciBmb3IgZm9ybSBjb250cm9sIHdpdGgnKTtcbiAgcmV0dXJuIG51bGw7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvc2hhcmVkLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7T25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnLi4vbW9kZWwnO1xuXG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtGb3JtfSBmcm9tICcuL2Zvcm1faW50ZXJmYWNlJztcbmltcG9ydCB7Y29tcG9zZUFzeW5jVmFsaWRhdG9ycywgY29tcG9zZVZhbGlkYXRvcnMsIGNvbnRyb2xQYXRofSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvckZufSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuLyoqXG4gKiBUaGlzIGlzIGEgYmFzZSBjbGFzcyBmb3IgY29kZSBzaGFyZWQgYmV0d2VlbiB7XFxAbGluayBOZ01vZGVsR3JvdXB9IGFuZCB7XFxAbGluayBGb3JtR3JvdXBOYW1lfS5cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSBleHRlbmRzIENvbnRyb2xDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9wYXJlbnQ6IENvbnRyb2xDb250YWluZXI7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl92YWxpZGF0b3JzOiBhbnlbXTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX2FzeW5jVmFsaWRhdG9yczogYW55W107XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRGb3JtR3JvdXAodGhpcyk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybURpcmVjdGl2ZSkge1xuICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUZvcm1Hcm91cCh0aGlzKTtcbiAgICB9XG4gIH1cbi8qKlxuICogR2V0IHRoZSB7XFxAbGluayBGb3JtR3JvdXB9IGJhY2tpbmcgdGhpcyBiaW5kaW5nLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2woKTogRm9ybUdyb3VwIHsgcmV0dXJuIHRoaXMuZm9ybURpcmVjdGl2ZS5nZXRGb3JtR3JvdXAodGhpcyk7IH1cbi8qKlxuICogR2V0IHRoZSBwYXRoIHRvIHRoaXMgY29udHJvbCBncm91cC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KTsgfVxuLyoqXG4gKiBHZXQgdGhlIHtcXEBsaW5rIEZvcm19IHRvIHdoaWNoIHRoaXMgZ3JvdXAgYmVsb25ncy5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBmb3JtRGlyZWN0aXZlKCk6IEZvcm0geyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4geyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fdmFsaWRhdG9ycyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGFzeW5jVmFsaWRhdG9yKCk6IEFzeW5jVmFsaWRhdG9yRm4geyByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpOyB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY2hlY2tQYXJlbnRUeXBlKCk6IHZvaWQge31cbn1cblxuZnVuY3Rpb24gQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmVfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5BYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3BhcmVudDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5BYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3ZhbGlkYXRvcnM7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9hc3luY1ZhbGlkYXRvcnM7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZS50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9uZ19jb250cm9sJztcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdENvbnRyb2xTdGF0dXMge1xucHJpdmF0ZSBfY2Q6IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZTtcbi8qKlxuICogQHBhcmFtIHs/fSBjZFxuICovXG5jb25zdHJ1Y3RvcihjZDogQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlKSB7IHRoaXMuX2NkID0gY2Q7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IG5nQ2xhc3NVbnRvdWNoZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC51bnRvdWNoZWQgOiBmYWxzZTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgbmdDbGFzc1RvdWNoZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9jZC5jb250cm9sID8gdGhpcy5fY2QuY29udHJvbC50b3VjaGVkIDogZmFsc2U7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IG5nQ2xhc3NQcmlzdGluZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnByaXN0aW5lIDogZmFsc2U7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IG5nQ2xhc3NEaXJ0eSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLmRpcnR5IDogZmFsc2U7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IG5nQ2xhc3NWYWxpZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnZhbGlkIDogZmFsc2U7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IG5nQ2xhc3NJbnZhbGlkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fY2QuY29udHJvbCA/IHRoaXMuX2NkLmNvbnRyb2wuaW52YWxpZCA6IGZhbHNlOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBuZ0NsYXNzUGVuZGluZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2NkLmNvbnRyb2wgPyB0aGlzLl9jZC5jb250cm9sLnBlbmRpbmcgOiBmYWxzZTsgfVxufVxuXG5mdW5jdGlvbiBBYnN0cmFjdENvbnRyb2xTdGF0dXNfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbFN0YXR1cy5wcm90b3R5cGUuX2NkO1xufVxuXG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIG5nQ29udHJvbFN0YXR1c0hvc3QgPSB7XG4gICdbY2xhc3MubmctdW50b3VjaGVkXSc6ICduZ0NsYXNzVW50b3VjaGVkJyxcbiAgJ1tjbGFzcy5uZy10b3VjaGVkXSc6ICduZ0NsYXNzVG91Y2hlZCcsXG4gICdbY2xhc3MubmctcHJpc3RpbmVdJzogJ25nQ2xhc3NQcmlzdGluZScsXG4gICdbY2xhc3MubmctZGlydHldJzogJ25nQ2xhc3NEaXJ0eScsXG4gICdbY2xhc3MubmctdmFsaWRdJzogJ25nQ2xhc3NWYWxpZCcsXG4gICdbY2xhc3MubmctaW52YWxpZF0nOiAnbmdDbGFzc0ludmFsaWQnLFxuICAnW2NsYXNzLm5nLXBlbmRpbmddJzogJ25nQ2xhc3NQZW5kaW5nJyxcbn07XG4vKipcbiAqIERpcmVjdGl2ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZWQgdG8gQW5ndWxhciBmb3JtIGNvbnRyb2xzIHRoYXQgc2V0cyBDU1MgY2xhc3Nlc1xuICogYmFzZWQgb24gY29udHJvbCBzdGF0dXMgKHZhbGlkL2ludmFsaWQvZGlydHkvZXRjKS5cbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0NvbnRyb2xTdGF0dXMgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xTdGF0dXMge1xuLyoqXG4gKiBAcGFyYW0gez99IGNkXG4gKi9cbmNvbnN0cnVjdG9yKCBjZDogTmdDb250cm9sKSB7IHN1cGVyKGNkKTsgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe3NlbGVjdG9yOiAnW2Zvcm1Db250cm9sTmFtZV0sW25nTW9kZWxdLFtmb3JtQ29udHJvbF0nLCBob3N0OiBuZ0NvbnRyb2xTdGF0dXNIb3N0fSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBOZ0NvbnRyb2wsIGRlY29yYXRvcnM6IFt7IHR5cGU6IFNlbGYgfSwgXX0sXG5dO1xufVxuXG5mdW5jdGlvbiBOZ0NvbnRyb2xTdGF0dXNfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbk5nQ29udHJvbFN0YXR1cy5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk5nQ29udHJvbFN0YXR1cy5jdG9yUGFyYW1ldGVycztcbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIEFuZ3VsYXIgZm9ybSBncm91cHMgdGhhdCBzZXRzIENTUyBjbGFzc2VzXG4gKiBiYXNlZCBvbiBjb250cm9sIHN0YXR1cyAodmFsaWQvaW52YWxpZC9kaXJ0eS9ldGMpLlxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE5nQ29udHJvbFN0YXR1c0dyb3VwIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sU3RhdHVzIHtcbi8qKlxuICogQHBhcmFtIHs/fSBjZFxuICovXG5jb25zdHJ1Y3RvciggY2Q6IENvbnRyb2xDb250YWluZXIpIHsgc3VwZXIoY2QpOyB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ1tmb3JtR3JvdXBOYW1lXSxbZm9ybUFycmF5TmFtZV0sW25nTW9kZWxHcm91cF0sW2Zvcm1Hcm91cF0sZm9ybTpub3QoW25nTm9Gb3JtXSksW25nRm9ybV0nLFxuICBob3N0OiBuZ0NvbnRyb2xTdGF0dXNIb3N0XG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IFNlbGYgfSwgXX0sXG5dO1xufVxuXG5mdW5jdGlvbiBOZ0NvbnRyb2xTdGF0dXNHcm91cF90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdDb250cm9sU3RhdHVzR3JvdXAuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OZ0NvbnRyb2xTdGF0dXNHcm91cC5jdG9yUGFyYW1ldGVycztcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9zdGF0dXMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9yc30gZnJvbSAnLi9kaXJlY3RpdmVzL3NoYXJlZCc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZufSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5pbXBvcnQge3RvT2JzZXJ2YWJsZX0gZnJvbSAnLi92YWxpZGF0b3JzJztcblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHZhbGlkLCBpLmUuIHRoYXQgbm8gZXJyb3JzIGV4aXN0IGluIHRoZSBpbnB1dCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gVkFMSUQgPSAnVkFMSUQnO1xuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgaW52YWxpZCwgaS5lLiB0aGF0IGFuIGVycm9yIGV4aXN0cyBpbiB0aGUgaW5wdXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIElOVkFMSUQgPSAnSU5WQUxJRCc7XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBwZW5kaW5nLCBpLmUuIHRoYXQgYXN5bmMgdmFsaWRhdGlvbiBpcyBvY2N1cnJpbmcgYW5kXG4gKiBlcnJvcnMgYXJlIG5vdCB5ZXQgYXZhaWxhYmxlIGZvciB0aGUgaW5wdXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFBFTkRJTkcgPSAnUEVORElORyc7XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBkaXNhYmxlZCwgaS5lLiB0aGF0IHRoZSBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIGFuY2VzdG9yXG4gKiBjYWxjdWxhdGlvbnMgb2YgdmFsaWRpdHkgb3IgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIERJU0FCTEVEID0gJ0RJU0FCTEVEJztcbi8qKlxuICogQHBhcmFtIHs/fSBjb250cm9sXG4gKiBAcGFyYW0gez99IHBhdGhcbiAqIEBwYXJhbSB7P30gZGVsaW1pdGVyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBfZmluZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIHBhdGg6IEFycmF5PHN0cmluZ3xudW1iZXI+fCBzdHJpbmcsIGRlbGltaXRlcjogc3RyaW5nKSB7XG4gIGlmIChwYXRoID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gIGlmICghKHBhdGggaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICBwYXRoID0gKCAvKiogQHR5cGUgez99ICovKCg8c3RyaW5nPnBhdGgpKSkuc3BsaXQoZGVsaW1pdGVyKTtcbiAgfVxuICBpZiAocGF0aCBpbnN0YW5jZW9mIEFycmF5ICYmIChwYXRoLmxlbmd0aCA9PT0gMCkpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoIC8qKiBAdHlwZSB7P30gKi8oKDxBcnJheTxzdHJpbmd8bnVtYmVyPj5wYXRoKSkpLnJlZHVjZSgodiwgbmFtZSkgPT4ge1xuICAgIGlmICh2IGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XG4gICAgICByZXR1cm4gdi5jb250cm9sc1tuYW1lXSB8fCBudWxsO1xuICAgIH1cblxuICAgIGlmICh2IGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICByZXR1cm4gdi5hdCggLyoqIEB0eXBlIHs/fSAqLygoPG51bWJlcj5uYW1lKSkpIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIGNvbnRyb2wpO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gY29lcmNlVG9WYWxpZGF0b3IodmFsaWRhdG9yOiBWYWxpZGF0b3JGbiB8IFZhbGlkYXRvckZuW10pOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbGlkYXRvcikgPyBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3IpIDogdmFsaWRhdG9yO1xufVxuLyoqXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5mdW5jdGlvbiBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuIHwgQXN5bmNWYWxpZGF0b3JGbltdKTpcbiAgICBBc3luY1ZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXN5bmNWYWxpZGF0b3IpID8gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcikgOiBhc3luY1ZhbGlkYXRvcjtcbn1cbi8qKlxuICogXFxAd2hhdEl0RG9lcyBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvciB7XFxAbGluayBGb3JtQ29udHJvbH0sIHtcXEBsaW5rIEZvcm1Hcm91cH0sIGFuZFxuICoge1xcQGxpbmsgRm9ybUFycmF5fS5cbiAqIFxuICogSXQgcHJvdmlkZXMgc29tZSBvZiB0aGUgc2hhcmVkIGJlaGF2aW9yIHRoYXQgYWxsIGNvbnRyb2xzIGFuZCBncm91cHMgb2YgY29udHJvbHMgaGF2ZSwgbGlrZVxuICogcnVubmluZyB2YWxpZGF0b3JzLCBjYWxjdWxhdGluZyBzdGF0dXMsIGFuZCByZXNldHRpbmcgc3RhdGUuIEl0IGFsc28gZGVmaW5lcyB0aGUgcHJvcGVydGllc1xuICogdGhhdCBhcmUgc2hhcmVkIGJldHdlZW4gYWxsIHN1Yi1jbGFzc2VzLCBsaWtlIGB2YWx1ZWAsIGB2YWxpZGAsIGFuZCBgZGlydHlgLiBJdCBzaG91bGRuJ3QgYmVcbiAqIGluc3RhbnRpYXRlZCBkaXJlY3RseS5cbiAqIFxuICogXFxAc3RhYmxlXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29udHJvbCB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl92YWx1ZTogYW55O1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fb25Db2xsZWN0aW9uQ2hhbmdlID0gKCkgPT4ge307XG5wcml2YXRlIF92YWx1ZUNoYW5nZXM6IEV2ZW50RW1pdHRlcjxhbnk+O1xucHJpdmF0ZSBfc3RhdHVzQ2hhbmdlczogRXZlbnRFbWl0dGVyPGFueT47XG5wcml2YXRlIF9zdGF0dXM6IHN0cmluZztcbnByaXZhdGUgX2Vycm9yczogVmFsaWRhdGlvbkVycm9yc3xudWxsO1xucHJpdmF0ZSBfcHJpc3RpbmU6IGJvb2xlYW4gPSB0cnVlO1xucHJpdmF0ZSBfdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xucHJpdmF0ZSBfcGFyZW50OiBGb3JtR3JvdXB8Rm9ybUFycmF5O1xucHJpdmF0ZSBfYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uOiBhbnk7XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yXG4gKi9cbmNvbnN0cnVjdG9yKHB1YmxpYyB2YWxpZGF0b3I6IFZhbGlkYXRvckZuLFxucHVibGljIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuKSB7fVxuLyoqXG4gKiBUaGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4vKipcbiAqIFRoZSBwYXJlbnQgY29udHJvbC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXJlbnQoKTogRm9ybUdyb3VwfEZvcm1BcnJheSB7IHJldHVybiB0aGlzLl9wYXJlbnQ7IH1cbi8qKlxuICogVGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLiBUaGVyZSBhcmUgZm91ciBwb3NzaWJsZVxuICogdmFsaWRhdGlvbiBzdGF0dXNlczpcbiAqIFxuICogKiAqKlZBTElEKio6ICBjb250cm9sIGhhcyBwYXNzZWQgYWxsIHZhbGlkYXRpb24gY2hlY2tzXG4gKiAqICoqSU5WQUxJRCoqOiBjb250cm9sIGhhcyBmYWlsZWQgYXQgbGVhc3Qgb25lIHZhbGlkYXRpb24gY2hlY2tcbiAqICogKipQRU5ESU5HKio6IGNvbnRyb2wgaXMgaW4gdGhlIG1pZHN0IG9mIGNvbmR1Y3RpbmcgYSB2YWxpZGF0aW9uIGNoZWNrXG4gKiAqICoqRElTQUJMRUQqKjogY29udHJvbCBpcyBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrc1xuICogXG4gKiBUaGVzZSBzdGF0dXNlcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLCBzbyBhIGNvbnRyb2wgY2Fubm90IGJlXG4gKiBib3RoIHZhbGlkIEFORCBpbnZhbGlkIG9yIGludmFsaWQgQU5EIGRpc2FibGVkLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHN0YXR1cygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc3RhdHVzOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBgdmFsaWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IFZBTElEYC5cbiAqIFxuICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBoYXZlIHBhc3NlZCBhbGwgaXRzXG4gKiB2YWxpZGF0aW9uIGNoZWNrcy5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWxpZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gVkFMSUQ7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIGBpbnZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzID09PSBJTlZBTElEYC5cbiAqIFxuICogSW4gb3JkZXIgdG8gaGF2ZSB0aGlzIHN0YXR1cywgdGhlIGNvbnRyb2wgbXVzdCBoYXZlIGZhaWxlZFxuICogYXQgbGVhc3Qgb25lIG9mIGl0cyB2YWxpZGF0aW9uIGNoZWNrcy5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBpbnZhbGlkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBJTlZBTElEOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBgcGVuZGluZ2Agd2hlbiBpdHMgYHN0YXR1cyA9PT0gUEVORElOR2AuXG4gKiBcbiAqIEluIG9yZGVyIHRvIGhhdmUgdGhpcyBzdGF0dXMsIHRoZSBjb250cm9sIG11c3QgYmUgaW4gdGhlXG4gKiBtaWRkbGUgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2suXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGVuZGluZygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PSBQRU5ESU5HOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBgZGlzYWJsZWRgIHdoZW4gaXRzIGBzdGF0dXMgPT09IERJU0FCTEVEYC5cbiAqIFxuICogRGlzYWJsZWQgY29udHJvbHMgYXJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxuICogYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZWlyIGFuY2VzdG9yXG4gKiBjb250cm9scy5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gRElTQUJMRUQ7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIGBlbmFibGVkYCBhcyBsb25nIGFzIGl0cyBgc3RhdHVzICE9PSBESVNBQkxFRGAuXG4gKiBcbiAqIEluIG90aGVyIHdvcmRzLCBpdCBoYXMgYSBzdGF0dXMgb2YgYFZBTElEYCwgYElOVkFMSURgLCBvclxuICogYFBFTkRJTkdgLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zdGF0dXMgIT09IERJU0FCTEVEOyB9XG4vKipcbiAqIFJldHVybnMgYW55IGVycm9ycyBnZW5lcmF0ZWQgYnkgZmFpbGluZyB2YWxpZGF0aW9uLiBJZiB0aGVyZVxuICogYXJlIG5vIGVycm9ycywgaXQgd2lsbCByZXR1cm4gbnVsbC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBlcnJvcnMoKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHsgcmV0dXJuIHRoaXMuX2Vycm9yczsgfVxuLyoqXG4gKiBBIGNvbnRyb2wgaXMgYHByaXN0aW5lYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCBjaGFuZ2VkXG4gKiB0aGUgdmFsdWUgaW4gdGhlIFVJLlxuICogXG4gKiBOb3RlIHRoYXQgcHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgd2lsbFxuICogKm5vdCogbWFyayBpdCBkaXJ0eS5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwcmlzdGluZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3ByaXN0aW5lOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBgZGlydHlgIGlmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZVxuICogaW4gdGhlIFVJLlxuICogXG4gKiBOb3RlIHRoYXQgcHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgd2lsbFxuICogKm5vdCogbWFyayBpdCBkaXJ0eS5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBkaXJ0eSgpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLnByaXN0aW5lOyB9XG4vKipcbiAqIEEgY29udHJvbCBpcyBtYXJrZWQgYHRvdWNoZWRgIG9uY2UgdGhlIHVzZXIgaGFzIHRyaWdnZXJlZFxuICogYSBgYmx1cmAgZXZlbnQgb24gaXQuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdG91Y2hlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3RvdWNoZWQ7IH1cbi8qKlxuICogQSBjb250cm9sIGlzIGB1bnRvdWNoZWRgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IHRyaWdnZXJlZFxuICogYSBgYmx1cmAgZXZlbnQgb24gaXQuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdW50b3VjaGVkKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuX3RvdWNoZWQ7IH1cbi8qKlxuICogRW1pdHMgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlcywgaW5cbiAqIHRoZSBVSSBvciBwcm9ncmFtbWF0aWNhbGx5LlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbHVlQ2hhbmdlcygpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzOyB9XG4vKipcbiAqIEVtaXRzIGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sXG4gKiBpcyByZS1jYWxjdWxhdGVkLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHN0YXR1c0NoYW5nZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIHRoaXMuX3N0YXR1c0NoYW5nZXM7IH1cbi8qKlxuICogU2V0cyB0aGUgc3luY2hyb25vdXMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiAgQ2FsbGluZ1xuICogdGhpcyB3aWxsIG92ZXJ3cml0ZSBhbnkgZXhpc3Rpbmcgc3luYyB2YWxpZGF0b3JzLlxuICogQHBhcmFtIHs/fSBuZXdWYWxpZGF0b3JcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldFZhbGlkYXRvcnMobmV3VmFsaWRhdG9yOiBWYWxpZGF0b3JGbnxWYWxpZGF0b3JGbltdKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBjb2VyY2VUb1ZhbGlkYXRvcihuZXdWYWxpZGF0b3IpO1xuICB9XG4vKipcbiAqIFNldHMgdGhlIGFzeW5jIHZhbGlkYXRvcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoaXMgY29udHJvbC4gQ2FsbGluZyB0aGlzXG4gKiB3aWxsIG92ZXJ3cml0ZSBhbnkgZXhpc3RpbmcgYXN5bmMgdmFsaWRhdG9ycy5cbiAqIEBwYXJhbSB7P30gbmV3VmFsaWRhdG9yXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRBc3luY1ZhbGlkYXRvcnMobmV3VmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZufEFzeW5jVmFsaWRhdG9yRm5bXSk6IHZvaWQge1xuICAgIHRoaXMuYXN5bmNWYWxpZGF0b3IgPSBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKG5ld1ZhbGlkYXRvcik7XG4gIH1cbi8qKlxuICogRW1wdGllcyBvdXQgdGhlIHN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5jbGVhclZhbGlkYXRvcnMoKTogdm9pZCB7IHRoaXMudmFsaWRhdG9yID0gbnVsbDsgfVxuLyoqXG4gKiBFbXB0aWVzIG91dCB0aGUgYXN5bmMgdmFsaWRhdG9yIGxpc3QuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5jbGVhckFzeW5jVmFsaWRhdG9ycygpOiB2b2lkIHsgdGhpcy5hc3luY1ZhbGlkYXRvciA9IG51bGw7IH1cbi8qKlxuICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHRvdWNoZWRgLlxuICogXG4gKiBUaGlzIHdpbGwgYWxzbyBtYXJrIGFsbCBkaXJlY3QgYW5jZXN0b3JzIGFzIGB0b3VjaGVkYCB0byBtYWludGFpblxuICogdGhlIG1vZGVsLlxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5tYXJrQXNUb3VjaGVkKHtvbmx5U2VsZn06IHtvbmx5U2VsZj86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl90b3VjaGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQubWFya0FzVG91Y2hlZCh7b25seVNlbGZ9KTtcbiAgICB9XG4gIH1cbi8qKlxuICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHVudG91Y2hlZGAuXG4gKiBcbiAqIElmIHRoZSBjb250cm9sIGhhcyBhbnkgY2hpbGRyZW4sIGl0IHdpbGwgYWxzbyBtYXJrIGFsbCBjaGlsZHJlbiBhcyBgdW50b3VjaGVkYFxuICogdG8gbWFpbnRhaW4gdGhlIG1vZGVsLCBhbmQgcmUtY2FsY3VsYXRlIHRoZSBgdG91Y2hlZGAgc3RhdHVzIG9mIGFsbCBwYXJlbnRcbiAqIGNvbnRyb2xzLlxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5tYXJrQXNVbnRvdWNoZWQoe29ubHlTZWxmfToge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3RvdWNoZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2ZvckVhY2hDaGlsZChcbiAgICAgICAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4geyBjb250cm9sLm1hcmtBc1VudG91Y2hlZCh7b25seVNlbGY6IHRydWV9KTsgfSk7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVUb3VjaGVkKHtvbmx5U2VsZn0pO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgZGlydHlgLlxuICogXG4gKiBUaGlzIHdpbGwgYWxzbyBtYXJrIGFsbCBkaXJlY3QgYW5jZXN0b3JzIGFzIGBkaXJ0eWAgdG8gbWFpbnRhaW5cbiAqIHRoZSBtb2RlbC5cbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xubWFya0FzRGlydHkoe29ubHlTZWxmfToge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3ByaXN0aW5lID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvbmx5U2VsZikge1xuICAgICAgdGhpcy5fcGFyZW50Lm1hcmtBc0RpcnR5KHtvbmx5U2VsZn0pO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgcHJpc3RpbmVgLlxuICogXG4gKiBJZiB0aGUgY29udHJvbCBoYXMgYW55IGNoaWxkcmVuLCBpdCB3aWxsIGFsc28gbWFyayBhbGwgY2hpbGRyZW4gYXMgYHByaXN0aW5lYFxuICogdG8gbWFpbnRhaW4gdGhlIG1vZGVsLCBhbmQgcmUtY2FsY3VsYXRlIHRoZSBgcHJpc3RpbmVgIHN0YXR1cyBvZiBhbGwgcGFyZW50XG4gKiBjb250cm9scy5cbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xubWFya0FzUHJpc3RpbmUoe29ubHlTZWxmfToge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3ByaXN0aW5lID0gdHJ1ZTtcblxuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7IGNvbnRyb2wubWFya0FzUHJpc3RpbmUoe29ubHlTZWxmOiB0cnVlfSk7IH0pO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlUHJpc3RpbmUoe29ubHlTZWxmfSk7XG4gICAgfVxuICB9XG4vKipcbiAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGBwZW5kaW5nYC5cbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xubWFya0FzUGVuZGluZyh7b25seVNlbGZ9OiB7b25seVNlbGY/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdHVzID0gUEVORElORztcblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQubWFya0FzUGVuZGluZyh7b25seVNlbGZ9KTtcbiAgICB9XG4gIH1cbi8qKlxuICogRGlzYWJsZXMgdGhlIGNvbnRyb2wuIFRoaXMgbWVhbnMgdGhlIGNvbnRyb2wgd2lsbCBiZSBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAqIGV4Y2x1ZGVkIGZyb20gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiBhbnkgcGFyZW50LiBJdHMgc3RhdHVzIGlzIGBESVNBQkxFRGAuXG4gKiBcbiAqIElmIHRoZSBjb250cm9sIGhhcyBjaGlsZHJlbiwgYWxsIGNoaWxkcmVuIHdpbGwgYmUgZGlzYWJsZWQgdG8gbWFpbnRhaW4gdGhlIG1vZGVsLlxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5kaXNhYmxlKHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXR1cyA9IERJU0FCTEVEO1xuICAgIHRoaXMuX2Vycm9ycyA9IG51bGw7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHsgY29udHJvbC5kaXNhYmxlKHtvbmx5U2VsZjogdHJ1ZX0pOyB9KTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKGVtaXRFdmVudCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlcy5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZUFuY2VzdG9ycyhvbmx5U2VsZik7XG4gICAgdGhpcy5fb25EaXNhYmxlZENoYW5nZS5mb3JFYWNoKChjaGFuZ2VGbikgPT4gY2hhbmdlRm4odHJ1ZSkpO1xuICB9XG4vKipcbiAqIEVuYWJsZXMgdGhlIGNvbnRyb2wuIFRoaXMgbWVhbnMgdGhlIGNvbnRyb2wgd2lsbCBiZSBpbmNsdWRlZCBpbiB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcbiAqIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgaXRzIHBhcmVudC4gSXRzIHN0YXR1cyBpcyByZS1jYWxjdWxhdGVkIGJhc2VkIG9uIGl0cyB2YWx1ZSBhbmRcbiAqIGl0cyB2YWxpZGF0b3JzLlxuICogXG4gKiBJZiB0aGUgY29udHJvbCBoYXMgY2hpbGRyZW4sIGFsbCBjaGlsZHJlbiB3aWxsIGJlIGVuYWJsZWQuXG4gKiBAcGFyYW0gez89fSBfXzBcbiAqIEByZXR1cm4gez99XG4gKi9cbmVuYWJsZSh7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0dXMgPSBWQUxJRDtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4geyBjb250cm9sLmVuYWJsZSh7b25seVNlbGY6IHRydWV9KTsgfSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50fSk7XG5cbiAgICB0aGlzLl91cGRhdGVBbmNlc3RvcnMob25seVNlbGYpO1xuICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UuZm9yRWFjaCgoY2hhbmdlRm4pID0+IGNoYW5nZUZuKGZhbHNlKSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBvbmx5U2VsZlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfdXBkYXRlQW5jZXN0b3JzKG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKCk7XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVRvdWNoZWQoKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBwYXJlbnRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldFBhcmVudChwYXJlbnQ6IEZvcm1Hcm91cHxGb3JtQXJyYXkpOiB2b2lkIHsgdGhpcy5fcGFyZW50ID0gcGFyZW50OyB9XG4vKipcbiAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICogQHJldHVybiB7P31cbiAqL1xuc2V0VmFsdWUodmFsdWU6IGFueSwgb3B0aW9ucz86IE9iamVjdCkge31cbi8qKlxuICogUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxuICogQGFic3RyYWN0XG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcGFyYW0gez89fSBvcHRpb25zXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wYXRjaFZhbHVlKHZhbHVlOiBhbnksIG9wdGlvbnM/OiBPYmplY3QpIHt9XG4vKipcbiAqIFJlc2V0cyB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gKiBAcGFyYW0gez89fSBvcHRpb25zXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZXNldCh2YWx1ZT86IGFueSwgb3B0aW9ucz86IE9iamVjdCkge31cbi8qKlxuICogUmUtY2FsY3VsYXRlcyB0aGUgdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLlxuICogXG4gKiBCeSBkZWZhdWx0LCBpdCB3aWxsIGFsc28gdXBkYXRlIHRoZSB2YWx1ZSBhbmQgdmFsaWRpdHkgb2YgaXRzIGFuY2VzdG9ycy5cbiAqIEBwYXJhbSB7Pz19IF9fMFxuICogQHJldHVybiB7P31cbiAqL1xudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOlxuICAgICAgdm9pZCB7XG4gICAgdGhpcy5fc2V0SW5pdGlhbFN0YXR1cygpO1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG5cbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLl9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbigpO1xuICAgICAgdGhpcy5fZXJyb3JzID0gdGhpcy5fcnVuVmFsaWRhdG9yKCk7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcblxuICAgICAgaWYgKHRoaXMuX3N0YXR1cyA9PT0gVkFMSUQgfHwgdGhpcy5fc3RhdHVzID09PSBQRU5ESU5HKSB7XG4gICAgICAgIHRoaXMuX3J1bkFzeW5jVmFsaWRhdG9yKGVtaXRFdmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtaXRFdmVudCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlcy5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuX3N0YXR1c0NoYW5nZXMuZW1pdCh0aGlzLl9zdGF0dXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlVHJlZVZhbGlkaXR5KHtlbWl0RXZlbnR9OiB7ZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7ZW1pdEV2ZW50OiB0cnVlfSkge1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY3RybDogQWJzdHJhY3RDb250cm9sKSA9PiBjdHJsLl91cGRhdGVUcmVlVmFsaWRpdHkoe2VtaXRFdmVudH0pKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnR9KTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9zZXRJbml0aWFsU3RhdHVzKCkgeyB0aGlzLl9zdGF0dXMgPSB0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkgPyBESVNBQkxFRCA6IFZBTElEOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3J1blZhbGlkYXRvcigpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvciA/IHRoaXMudmFsaWRhdG9yKHRoaXMpIDogbnVsbDtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGVtaXRFdmVudFxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfcnVuQXN5bmNWYWxpZGF0b3IoZW1pdEV2ZW50OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXN5bmNWYWxpZGF0b3IpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IFBFTkRJTkc7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIG9icyA9IHRvT2JzZXJ2YWJsZSh0aGlzLmFzeW5jVmFsaWRhdG9yKHRoaXMpKTtcbiAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbiA9XG4gICAgICAgICAgb2JzLnN1YnNjcmliZSgoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCkgPT4gdGhpcy5zZXRFcnJvcnMoZXJyb3JzLCB7ZW1pdEV2ZW50fSkpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbi8qKlxuICogU2V0cyBlcnJvcnMgb24gYSBmb3JtIGNvbnRyb2wuXG4gKiBcbiAqIFRoaXMgaXMgdXNlZCB3aGVuIHZhbGlkYXRpb25zIGFyZSBydW4gbWFudWFsbHkgYnkgdGhlIHVzZXIsIHJhdGhlciB0aGFuIGF1dG9tYXRpY2FsbHkuXG4gKiBcbiAqIENhbGxpbmcgYHNldEVycm9yc2Agd2lsbCBhbHNvIHVwZGF0ZSB0aGUgdmFsaWRpdHkgb2YgdGhlIHBhcmVudCBjb250cm9sLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGBcbiAqIGNvbnN0IGxvZ2luID0gbmV3IEZvcm1Db250cm9sKFwic29tZUxvZ2luXCIpO1xuICogbG9naW4uc2V0RXJyb3JzKHtcbiAqICAgXCJub3RVbmlxdWVcIjogdHJ1ZVxuICogfSk7XG4gKiBcbiAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbChmYWxzZSk7XG4gKiBleHBlY3QobG9naW4uZXJyb3JzKS50b0VxdWFsKHtcIm5vdFVuaXF1ZVwiOiB0cnVlfSk7XG4gKiBcbiAqIGxvZ2luLnNldFZhbHVlKFwic29tZU90aGVyTG9naW5cIik7XG4gKiBcbiAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbCh0cnVlKTtcbiAqIGBgYFxuICogQHBhcmFtIHs/fSBlcnJvcnNcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0RXJyb3JzKGVycm9yczogVmFsaWRhdGlvbkVycm9yc3xudWxsLCB7ZW1pdEV2ZW50fToge2VtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5fdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50ICE9PSBmYWxzZSk7XG4gIH1cbi8qKlxuICogUmV0cmlldmVzIGEgY2hpbGQgY29udHJvbCBnaXZlbiB0aGUgY29udHJvbCdzIG5hbWUgb3IgcGF0aC5cbiAqIFxuICogUGF0aHMgY2FuIGJlIHBhc3NlZCBpbiBhcyBhbiBhcnJheSBvciBhIHN0cmluZyBkZWxpbWl0ZWQgYnkgYSBkb3QuXG4gKiBcbiAqIFRvIGdldCBhIGNvbnRyb2wgbmVzdGVkIHdpdGhpbiBhIGBwZXJzb25gIHN1Yi1ncm91cDpcbiAqIFxuICogKiBgdGhpcy5mb3JtLmdldCgncGVyc29uLm5hbWUnKTtgXG4gKiBcbiAqIC1PUi1cbiAqIFxuICogKiBgdGhpcy5mb3JtLmdldChbJ3BlcnNvbicsICduYW1lJ10pO2BcbiAqIEBwYXJhbSB7P30gcGF0aFxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0KHBhdGg6IEFycmF5PHN0cmluZ3xudW1iZXI+fHN0cmluZyk6IEFic3RyYWN0Q29udHJvbCB7IHJldHVybiBfZmluZCh0aGlzLCBwYXRoLCAnLicpOyB9XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBwYXRoIGhhcyB0aGUgZXJyb3Igc3BlY2lmaWVkLiBPdGhlcndpc2VcbiAqIHJldHVybnMgbnVsbCBvciB1bmRlZmluZWQuXG4gKiBcbiAqIElmIG5vIHBhdGggaXMgZ2l2ZW4sIGl0IGNoZWNrcyBmb3IgdGhlIGVycm9yIG9uIHRoZSBwcmVzZW50IGNvbnRyb2wuXG4gKiBAcGFyYW0gez99IGVycm9yQ29kZVxuICogQHBhcmFtIHs/PX0gcGF0aFxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0RXJyb3IoZXJyb3JDb2RlOiBzdHJpbmcsIHBhdGg6IHN0cmluZ1tdID0gbnVsbCk6IGFueSB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sID0gcGF0aCA/IHRoaXMuZ2V0KHBhdGgpIDogdGhpcztcbiAgICByZXR1cm4gY29udHJvbCAmJiBjb250cm9sLl9lcnJvcnMgPyBjb250cm9sLl9lcnJvcnNbZXJyb3JDb2RlXSA6IG51bGw7XG4gIH1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBjb250cm9sIHdpdGggdGhlIGdpdmVuIHBhdGggaGFzIHRoZSBlcnJvciBzcGVjaWZpZWQuIE90aGVyd2lzZVxuICogcmV0dXJucyBmYWxzZS5cbiAqIFxuICogSWYgbm8gcGF0aCBpcyBnaXZlbiwgaXQgY2hlY2tzIGZvciB0aGUgZXJyb3Igb24gdGhlIHByZXNlbnQgY29udHJvbC5cbiAqIEBwYXJhbSB7P30gZXJyb3JDb2RlXG4gKiBAcGFyYW0gez89fSBwYXRoXG4gKiBAcmV0dXJuIHs/fVxuICovXG5oYXNFcnJvcihlcnJvckNvZGU6IHN0cmluZywgcGF0aDogc3RyaW5nW10gPSBudWxsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRFcnJvcihlcnJvckNvZGUsIHBhdGgpO1xuICB9XG4vKipcbiAqIFJldHJpZXZlcyB0aGUgdG9wLWxldmVsIGFuY2VzdG9yIG9mIHRoaXMgY29udHJvbC5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCByb290KCk6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgbGV0IC8qKiBAdHlwZSB7P30gKi8geDogQWJzdHJhY3RDb250cm9sID0gdGhpcztcblxuICAgIHdoaWxlICh4Ll9wYXJlbnQpIHtcbiAgICAgIHggPSB4Ll9wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHg7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gZW1pdEV2ZW50XG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fY2FsY3VsYXRlU3RhdHVzKCk7XG5cbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzLmVtaXQodGhpcy5fc3RhdHVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudCk7XG4gICAgfVxuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5faW5pdE9ic2VydmFibGVzKCkge1xuICAgIHRoaXMuX3ZhbHVlQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9zdGF0dXNDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NhbGN1bGF0ZVN0YXR1cygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkpIHJldHVybiBESVNBQkxFRDtcbiAgICBpZiAodGhpcy5fZXJyb3JzKSByZXR1cm4gSU5WQUxJRDtcbiAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKFBFTkRJTkcpKSByZXR1cm4gUEVORElORztcbiAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKElOVkFMSUQpKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gVkFMSUQ7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBhYnN0cmFjdFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZVZhbHVlKCkge31cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBhYnN0cmFjdFxuICogQHBhcmFtIHs/fSBjYlxuICogQHJldHVybiB7P31cbiAqL1xuX2ZvckVhY2hDaGlsZChjYjogRnVuY3Rpb24pIHt9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAYWJzdHJhY3RcbiAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYW55Q29udHJvbHMoY29uZGl0aW9uOiBGdW5jdGlvbikge31cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBhYnN0cmFjdFxuICogQHJldHVybiB7P31cbiAqL1xuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSB7fVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBzdGF0dXNcbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbnlDb250cm9sc0hhdmVTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gY29udHJvbC5zdGF0dXMgPT09IHN0YXR1cyk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbnlDb250cm9sc0RpcnR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbnlDb250cm9scygoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiBjb250cm9sLmRpcnR5KTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX2FueUNvbnRyb2xzVG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW55Q29udHJvbHMoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gY29udHJvbC50b3VjaGVkKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlUHJpc3RpbmUoe29ubHlTZWxmfToge29ubHlTZWxmPzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuX3ByaXN0aW5lID0gIXRoaXMuX2FueUNvbnRyb2xzRGlydHkoKTtcblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9ubHlTZWxmKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZVByaXN0aW5lKHtvbmx5U2VsZn0pO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/PX0gX18wXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdXBkYXRlVG91Y2hlZCh7b25seVNlbGZ9OiB7b25seVNlbGY/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fdG91Y2hlZCA9IHRoaXMuX2FueUNvbnRyb2xzVG91Y2hlZCgpO1xuXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlVG91Y2hlZCh7b25seVNlbGZ9KTtcbiAgICB9XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX29uRGlzYWJsZWRDaGFuZ2U6IEZ1bmN0aW9uW10gPSBbXTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gZm9ybVN0YXRlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5faXNCb3hlZFZhbHVlKGZvcm1TdGF0ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBmb3JtU3RhdGUgPT09ICdvYmplY3QnICYmIGZvcm1TdGF0ZSAhPT0gbnVsbCAmJlxuICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGUpLmxlbmd0aCA9PT0gMiAmJiAndmFsdWUnIGluIGZvcm1TdGF0ZSAmJiAnZGlzYWJsZWQnIGluIGZvcm1TdGF0ZTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSA9IGZuOyB9XG59XG5cbmZ1bmN0aW9uIEFic3RyYWN0Q29udHJvbF90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3ZhbHVlO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX29uQ29sbGVjdGlvbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3ZhbHVlQ2hhbmdlcztcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3N0YXR1c0NoYW5nZXM7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9zdGF0dXM7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9lcnJvcnM7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9wcmlzdGluZTtcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUuX3RvdWNoZWQ7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9wYXJlbnQ7XG4vKiogQHR5cGUgez99ICovXG5BYnN0cmFjdENvbnRyb2wucHJvdG90eXBlLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb247XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5fb25EaXNhYmxlZENoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cbkFic3RyYWN0Q29udHJvbC5wcm90b3R5cGUudmFsaWRhdG9yO1xuLyoqIEB0eXBlIHs/fSAqL1xuQWJzdHJhY3RDb250cm9sLnByb3RvdHlwZS5hc3luY1ZhbGlkYXRvcjtcbn1cblxuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzIG9mIGFuIGluZGl2aWR1YWwgZm9ybSBjb250cm9sLlxuICogXG4gKiBJdCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyBvZiBBbmd1bGFyIGZvcm1zLCBhbG9uZyB3aXRoXG4gKiB7XFxAbGluayBGb3JtR3JvdXB9IGFuZCB7XFxAbGluayBGb3JtQXJyYXl9LlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogV2hlbiBpbnN0YW50aWF0aW5nIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCB5b3UgY2FuIHBhc3MgaW4gYW4gaW5pdGlhbCB2YWx1ZSBhcyB0aGVcbiAqIGZpcnN0IGFyZ3VtZW50LiBFeGFtcGxlOlxuICogXG4gKiBgYGB0c1xuICogY29uc3QgY3RybCA9IG5ldyBGb3JtQ29udHJvbCgnc29tZSB2YWx1ZScpO1xuICogY29uc29sZS5sb2coY3RybC52YWx1ZSk7ICAgICAvLyAnc29tZSB2YWx1ZSdcbiAqIGBgYFxuICogXG4gKiBZb3UgY2FuIGFsc28gaW5pdGlhbGl6ZSB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBzdGF0ZSBvYmplY3Qgb24gaW5zdGFudGlhdGlvbixcbiAqIHdoaWNoIGluY2x1ZGVzIGJvdGggdGhlIHZhbHVlIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGUgY29udHJvbCBpcyBkaXNhYmxlZC5cbiAqIFlvdSBjYW4ndCB1c2UgdGhlIHZhbHVlIGtleSB3aXRob3V0IHRoZSBkaXNhYmxlZCBrZXk7IGJvdGggYXJlIHJlcXVpcmVkXG4gKiB0byB1c2UgdGhpcyB3YXkgb2YgaW5pdGlhbGl6YXRpb24uXG4gKiBcbiAqIGBgYHRzXG4gKiBjb25zdCBjdHJsID0gbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ24vYScsIGRpc2FibGVkOiB0cnVlfSk7XG4gKiBjb25zb2xlLmxvZyhjdHJsLnZhbHVlKTsgICAgIC8vICduL2EnXG4gKiBjb25zb2xlLmxvZyhjdHJsLnN0YXR1cyk7ICAgLy8gJ0RJU0FCTEVEJ1xuICogYGBgXG4gKiBcbiAqIFRvIGluY2x1ZGUgYSBzeW5jIHZhbGlkYXRvciAob3IgYW4gYXJyYXkgb2Ygc3luYyB2YWxpZGF0b3JzKSB3aXRoIHRoZSBjb250cm9sLFxuICogcGFzcyBpdCBpbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBBc3luYyB2YWxpZGF0b3JzIGFyZSBhbHNvIHN1cHBvcnRlZCwgYnV0XG4gKiBoYXZlIHRvIGJlIHBhc3NlZCBpbiBzZXBhcmF0ZWx5IGFzIHRoZSB0aGlyZCBhcmcuXG4gKiBcbiAqIGBgYHRzXG4gKiBjb25zdCBjdHJsID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAqIGNvbnNvbGUubG9nKGN0cmwudmFsdWUpOyAgICAgLy8gJydcbiAqIGNvbnNvbGUubG9nKGN0cmwuc3RhdHVzKTsgICAvLyAnSU5WQUxJRCdcbiAqIGBgYFxuICogXG4gKiBTZWUgaXRzIHN1cGVyY2xhc3MsIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0sIGZvciBtb3JlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9vbkNoYW5nZTogRnVuY3Rpb25bXSA9IFtdO1xuLyoqXG4gKiBAcGFyYW0gez89fSBmb3JtU3RhdGVcbiAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAqL1xuY29uc3RydWN0b3IoXG4gICAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsIHZhbGlkYXRvcjogVmFsaWRhdG9yRm58VmFsaWRhdG9yRm5bXSA9IG51bGwsXG4gICAgICBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbnxBc3luY1ZhbGlkYXRvckZuW10gPSBudWxsKSB7XG4gICAgc3VwZXIoY29lcmNlVG9WYWxpZGF0b3IodmFsaWRhdG9yKSwgY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihhc3luY1ZhbGlkYXRvcikpO1xuICAgIHRoaXMuX2FwcGx5Rm9ybVN0YXRlKGZvcm1TdGF0ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICB9XG4vKipcbiAqIFNldCB0aGUgdmFsdWUgb2YgdGhlIGZvcm0gY29udHJvbCB0byBgdmFsdWVgLlxuICogXG4gKiBJZiBgb25seVNlbGZgIGlzIGB0cnVlYCwgdGhpcyBjaGFuZ2Ugd2lsbCBvbmx5IGFmZmVjdCB0aGUgdmFsaWRhdGlvbiBvZiB0aGlzIGBGb3JtQ29udHJvbGBcbiAqIGFuZCBub3QgaXRzIHBhcmVudCBjb21wb25lbnQuIFRoaXMgZGVmYXVsdHMgdG8gZmFsc2UuXG4gKiBcbiAqIElmIGBlbWl0RXZlbnRgIGlzIGB0cnVlYCwgdGhpc1xuICogY2hhbmdlIHdpbGwgY2F1c2UgYSBgdmFsdWVDaGFuZ2VzYCBldmVudCBvbiB0aGUgYEZvcm1Db250cm9sYCB0byBiZSBlbWl0dGVkLiBUaGlzIGRlZmF1bHRzXG4gKiB0byB0cnVlIChhcyBpdCBmYWxscyB0aHJvdWdoIHRvIGB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5YCkuXG4gKiBcbiAqIElmIGBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VgIGlzIGB0cnVlYCwgdGhlIHZpZXcgd2lsbCBiZSBub3RpZmllZCBhYm91dCB0aGUgbmV3IHZhbHVlXG4gKiB2aWEgYW4gYG9uQ2hhbmdlYCBldmVudC4gVGhpcyBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBpZiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYCBpcyBub3RcbiAqIHNwZWNpZmllZC5cbiAqIFxuICogSWYgYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWAgaXMgYHRydWVgLCBhbiBuZ01vZGVsQ2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgdG8gdXBkYXRlIHRoZVxuICogbW9kZWwuICBUaGlzIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIGlmIGBlbWl0Vmlld1RvTW9kZWxDaGFuZ2VgIGlzIG5vdCBzcGVjaWZpZWQuXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldFZhbHVlKHZhbHVlOiBhbnksIHtvbmx5U2VsZiwgZW1pdEV2ZW50LCBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2UsIGVtaXRWaWV3VG9Nb2RlbENoYW5nZX06IHtcbiAgICBvbmx5U2VsZj86IGJvb2xlYW4sXG4gICAgZW1pdEV2ZW50PzogYm9vbGVhbixcbiAgICBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2U/OiBib29sZWFuLFxuICAgIGVtaXRWaWV3VG9Nb2RlbENoYW5nZT86IGJvb2xlYW5cbiAgfSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UubGVuZ3RoICYmIGVtaXRNb2RlbFRvVmlld0NoYW5nZSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlLmZvckVhY2goKGNoYW5nZUZuKSA9PiBjaGFuZ2VGbih0aGlzLl92YWx1ZSwgZW1pdFZpZXdUb01vZGVsQ2hhbmdlICE9PSBmYWxzZSkpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgfVxuLyoqXG4gKiBQYXRjaGVzIHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gKiBcbiAqIFRoaXMgZnVuY3Rpb24gaXMgZnVuY3Rpb25hbGx5IHRoZSBzYW1lIGFzIHtcXEBsaW5rIEZvcm1Db250cm9sLnNldFZhbHVlfSBhdCB0aGlzIGxldmVsLlxuICogSXQgZXhpc3RzIGZvciBzeW1tZXRyeSB3aXRoIHtcXEBsaW5rIEZvcm1Hcm91cC5wYXRjaFZhbHVlfSBvbiBgRm9ybUdyb3Vwc2AgYW5kIGBGb3JtQXJyYXlzYCxcbiAqIHdoZXJlIGl0IGRvZXMgYmVoYXZlIGRpZmZlcmVudGx5LlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gb3B0aW9uc1xuICogQHJldHVybiB7P31cbiAqL1xucGF0Y2hWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zOiB7XG4gICAgb25seVNlbGY/OiBib29sZWFuLFxuICAgIGVtaXRFdmVudD86IGJvb2xlYW4sXG4gICAgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlPzogYm9vbGVhbixcbiAgICBlbWl0Vmlld1RvTW9kZWxDaGFuZ2U/OiBib29sZWFuXG4gIH0gPSB7fSk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIG9wdGlvbnMpO1xuICB9XG4vKipcbiAqIFJlc2V0cyB0aGUgZm9ybSBjb250cm9sLiBUaGlzIG1lYW5zIGJ5IGRlZmF1bHQ6XG4gKiBcbiAqICogaXQgaXMgbWFya2VkIGFzIGBwcmlzdGluZWBcbiAqICogaXQgaXMgbWFya2VkIGFzIGB1bnRvdWNoZWRgXG4gKiAqIHZhbHVlIGlzIHNldCB0byBudWxsXG4gKiBcbiAqIFlvdSBjYW4gYWxzbyByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyB0aHJvdWdoIGEgc3RhbmRhbG9uZVxuICogdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0ZVxuICogKHRoZXNlIGFyZSB0aGUgb25seSB0d28gcHJvcGVydGllcyB0aGF0IGNhbm5vdCBiZSBjYWxjdWxhdGVkKS5cbiAqIFxuICogRXg6XG4gKiBcbiAqIGBgYHRzXG4gKiB0aGlzLmNvbnRyb2wucmVzZXQoJ05hbmN5Jyk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7ICAvLyAnTmFuY3knXG4gKiBgYGBcbiAqIFxuICogT1JcbiAqIFxuICogYGBgXG4gKiB0aGlzLmNvbnRyb2wucmVzZXQoe3ZhbHVlOiAnTmFuY3knLCBkaXNhYmxlZDogdHJ1ZX0pO1xuICogXG4gKiBjb25zb2xlLmxvZyh0aGlzLmNvbnRyb2wudmFsdWUpOyAgLy8gJ05hbmN5J1xuICogY29uc29sZS5sb2codGhpcy5jb250cm9sLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXG4gKiBgYGBcbiAqIEBwYXJhbSB7Pz19IGZvcm1TdGF0ZVxuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZXNldChmb3JtU3RhdGU6IGFueSA9IG51bGwsIHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fYXBwbHlGb3JtU3RhdGUoZm9ybVN0YXRlKTtcbiAgICB0aGlzLm1hcmtBc1ByaXN0aW5lKHtvbmx5U2VsZn0pO1xuICAgIHRoaXMubWFya0FzVW50b3VjaGVkKHtvbmx5U2VsZn0pO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWUsIHtvbmx5U2VsZiwgZW1pdEV2ZW50fSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVWYWx1ZSgpIHt9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICogQHJldHVybiB7P31cbiAqL1xuX2FueUNvbnRyb2xzKGNvbmRpdGlvbjogRnVuY3Rpb24pOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7IH1cbi8qKlxuICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgY2hhbmdlIGV2ZW50cy5cbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7IHRoaXMuX29uQ2hhbmdlLnB1c2goZm4pOyB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY2xlYXJDaGFuZ2VGbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBbXTtcbiAgICB0aGlzLl9vbkRpc2FibGVkQ2hhbmdlID0gW107XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlID0gKCkgPT4ge307XG4gIH1cbi8qKlxuICogUmVnaXN0ZXIgYSBsaXN0ZW5lciBmb3IgZGlzYWJsZWQgZXZlbnRzLlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPbkRpc2FibGVkQ2hhbmdlKGZuOiAoaXNEaXNhYmxlZDogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uRGlzYWJsZWRDaGFuZ2UucHVzaChmbik7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gY2JcbiAqIEByZXR1cm4gez99XG4gKi9cbl9mb3JFYWNoQ2hpbGQoY2I6IEZ1bmN0aW9uKTogdm9pZCB7fVxuLyoqXG4gKiBAcGFyYW0gez99IGZvcm1TdGF0ZVxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfYXBwbHlGb3JtU3RhdGUoZm9ybVN0YXRlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5faXNCb3hlZFZhbHVlKGZvcm1TdGF0ZSkpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybVN0YXRlLnZhbHVlO1xuICAgICAgZm9ybVN0YXRlLmRpc2FibGVkID8gdGhpcy5kaXNhYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IGZvcm1TdGF0ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gRm9ybUNvbnRyb2xfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQ29udHJvbC5wcm90b3R5cGUuX29uQ2hhbmdlO1xufVxuXG4vKipcbiAqIFxcQHdoYXRJdERvZXMgVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRpdHkgc3RhdGUgb2YgYSBncm91cCBvZiB7XFxAbGluayBGb3JtQ29udHJvbH1cbiAqIGluc3RhbmNlcy5cbiAqIFxuICogQSBgRm9ybUdyb3VwYCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCB7XFxAbGluayBGb3JtQ29udHJvbH0gaW50byBvbmUgb2JqZWN0LFxuICogd2l0aCBlYWNoIGNvbnRyb2wgbmFtZSBhcyB0aGUga2V5LiAgSXQgY2FsY3VsYXRlcyBpdHMgc3RhdHVzIGJ5IHJlZHVjaW5nIHRoZSBzdGF0dXNlc1xuICogb2YgaXRzIGNoaWxkcmVuLiBGb3IgZXhhbXBsZSwgaWYgb25lIG9mIHRoZSBjb250cm9scyBpbiBhIGdyb3VwIGlzIGludmFsaWQsIHRoZSBlbnRpcmVcbiAqIGdyb3VwIGJlY29tZXMgaW52YWxpZC5cbiAqIFxuICogYEZvcm1Hcm91cGAgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3MgdXNlZCB0byBkZWZpbmUgZm9ybXMgaW4gQW5ndWxhcixcbiAqIGFsb25nIHdpdGgge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGFuZCB7XFxAbGluayBGb3JtQXJyYXl9LlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogV2hlbiBpbnN0YW50aWF0aW5nIGEge1xcQGxpbmsgRm9ybUdyb3VwfSwgcGFzcyBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMgYXMgdGhlIGZpcnN0XG4gKiBhcmd1bWVudC4gVGhlIGtleSBmb3IgZWFjaCBjaGlsZCB3aWxsIGJlIHRoZSBuYW1lIHVuZGVyIHdoaWNoIGl0IGlzIHJlZ2lzdGVyZWQuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXG4gKiB9KTtcbiAqIFxuICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OyAnRHJldyd9XG4gKiBjb25zb2xlLmxvZyhmb3JtLnN0YXR1cyk7ICAvLyAnVkFMSUQnXG4gKiBgYGBcbiAqIFxuICogWW91IGNhbiBhbHNvIGluY2x1ZGUgZ3JvdXAtbGV2ZWwgdmFsaWRhdG9ycyBhcyB0aGUgc2Vjb25kIGFyZywgb3IgZ3JvdXAtbGV2ZWwgYXN5bmNcbiAqIHZhbGlkYXRvcnMgYXMgdGhlIHRoaXJkIGFyZy4gVGhlc2UgY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHBlcmZvcm0gdmFsaWRhdGlvblxuICogdGhhdCBjb25zaWRlcnMgdGhlIHZhbHVlIG9mIG1vcmUgdGhhbiBvbmUgY2hpbGQgY29udHJvbC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gKiAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqICAgcGFzc3dvcmRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcbiAqIH0sIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IpO1xuICogXG4gKiBcbiAqIGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoZzogRm9ybUdyb3VwKSB7XG4gKiAgICByZXR1cm4gZy5nZXQoJ3Bhc3N3b3JkJykudmFsdWUgPT09IGcuZ2V0KCdwYXNzd29yZENvbmZpcm0nKS52YWx1ZVxuICogICAgICAgPyBudWxsIDogeydtaXNtYXRjaCc6IHRydWV9O1xuICogfVxuICogYGBgXG4gKiBcbiAqICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXAgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xuLyoqXG4gKiBAcGFyYW0gez99IGNvbnRyb2xzXG4gKiBAcGFyYW0gez89fSB2YWxpZGF0b3JcbiAqIEBwYXJhbSB7Pz19IGFzeW5jVmFsaWRhdG9yXG4gKi9cbmNvbnN0cnVjdG9yKFxucHVibGljIGNvbnRyb2xzOiB7W2tleTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sfSwgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IG51bGwsXG4gICAgICBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiA9IG51bGwpIHtcbiAgICBzdXBlcih2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcbiAgICB0aGlzLl9zZXRVcENvbnRyb2xzKCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xuICB9XG4vKipcbiAqIFJlZ2lzdGVycyBhIGNvbnRyb2wgd2l0aCB0aGUgZ3JvdXAncyBsaXN0IG9mIGNvbnRyb2xzLlxuICogXG4gKiBUaGlzIG1ldGhvZCBkb2VzIG5vdCB1cGRhdGUgdmFsdWUgb3IgdmFsaWRpdHkgb2YgdGhlIGNvbnRyb2wsIHNvIGZvclxuICogbW9zdCBjYXNlcyB5b3UnbGwgd2FudCB0byB1c2Uge1xcQGxpbmsgRm9ybUdyb3VwLmFkZENvbnRyb2x9IGluc3RlYWQuXG4gKiBAcGFyYW0gez99IG5hbWVcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJDb250cm9sKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogQWJzdHJhY3RDb250cm9sIHtcbiAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSkgcmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XG4gICAgdGhpcy5jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XG4gICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XG4gICAgY29udHJvbC5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UodGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKTtcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuLyoqXG4gKiBBZGQgYSBjb250cm9sIHRvIHRoaXMgZ3JvdXAuXG4gKiBAcGFyYW0gez99IG5hbWVcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xuYWRkQ29udHJvbChuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIFJlbW92ZSBhIGNvbnRyb2wgZnJvbSB0aGlzIGdyb3VwLlxuICogQHBhcmFtIHs/fSBuYW1lXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZW1vdmVDb250cm9sKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKSB0aGlzLmNvbnRyb2xzW25hbWVdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSgoKSA9PiB7fSk7XG4gICAgZGVsZXRlICh0aGlzLmNvbnRyb2xzW25hbWVdKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBSZXBsYWNlIGFuIGV4aXN0aW5nIGNvbnRyb2wuXG4gKiBAcGFyYW0gez99IG5hbWVcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0Q29udHJvbChuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKSB0aGlzLmNvbnRyb2xzW25hbWVdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSgoKSA9PiB7fSk7XG4gICAgZGVsZXRlICh0aGlzLmNvbnRyb2xzW25hbWVdKTtcbiAgICBpZiAoY29udHJvbCkgdGhpcy5yZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGVyZSBpcyBhbiBlbmFibGVkIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBpbiB0aGUgZ3JvdXAuXG4gKiBcbiAqIEl0IHdpbGwgcmV0dXJuIGZhbHNlIGZvciBkaXNhYmxlZCBjb250cm9scy4gSWYgeW91J2QgbGlrZSB0byBjaGVjayBmb3JcbiAqIGV4aXN0ZW5jZSBpbiB0aGUgZ3JvdXAgb25seSwgdXNlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IGluc3RlYWQuXG4gKiBAcGFyYW0gez99IGNvbnRyb2xOYW1lXG4gKiBAcmV0dXJuIHs/fVxuICovXG5jb250YWlucyhjb250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbHMuaGFzT3duUHJvcGVydHkoY29udHJvbE5hbWUpICYmIHRoaXMuY29udHJvbHNbY29udHJvbE5hbWVdLmVuYWJsZWQ7XG4gIH1cbi8qKlxuICogIFNldHMgdGhlIHZhbHVlIG9mIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LiBJdCBhY2NlcHRzIGFuIG9iamVjdCB0aGF0IG1hdGNoZXNcbiAqICB0aGUgc3RydWN0dXJlIG9mIHRoZSBncm91cCwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuXG4gKiBcbiAqIFRoaXMgbWV0aG9kIHBlcmZvcm1zIHN0cmljdCBjaGVja3MsIHNvIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IHRyeVxuICogdG8gc2V0IHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wgdGhhdCBkb2Vzbid0IGV4aXN0IG9yIGlmIHlvdSBleGNsdWRlIHRoZVxuICogdmFsdWUgb2YgYSBjb250cm9sLlxuICogXG4gKiAgIyMjIEV4YW1wbGVcbiAqIFxuICogIGBgYFxuICogIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAqICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCksXG4gKiAgICAgbGFzdDogbmV3IEZvcm1Db250cm9sKClcbiAqICB9KTtcbiAqICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6IG51bGwsIGxhc3Q6IG51bGx9XG4gKiBcbiAqICBmb3JtLnNldFZhbHVlKHtmaXJzdDogJ05hbmN5JywgbGFzdDogJ0RyZXcnfSk7XG4gKiAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9XG4gKiBcbiAqICBgYGBcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0VmFsdWUoXG4gICAgICB2YWx1ZToge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgICB7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9jaGVja0FsbFZhbHVlc1ByZXNlbnQodmFsdWUpO1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKG5hbWUpO1xuICAgICAgdGhpcy5jb250cm9sc1tuYW1lXS5zZXRWYWx1ZSh2YWx1ZVtuYW1lXSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnR9KTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgfVxuLyoqXG4gKiAgUGF0Y2hlcyB0aGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1Hcm91cH0uIEl0IGFjY2VwdHMgYW4gb2JqZWN0IHdpdGggY29udHJvbFxuICogIG5hbWVzIGFzIGtleXMsIGFuZCB3aWxsIGRvIGl0cyBiZXN0IHRvIG1hdGNoIHRoZSB2YWx1ZXMgdG8gdGhlIGNvcnJlY3QgY29udHJvbHNcbiAqICBpbiB0aGUgZ3JvdXAuXG4gKiBcbiAqICBJdCBhY2NlcHRzIGJvdGggc3VwZXItc2V0cyBhbmQgc3ViLXNldHMgb2YgdGhlIGdyb3VwIHdpdGhvdXQgdGhyb3dpbmcgYW4gZXJyb3IuXG4gKiBcbiAqICAjIyMgRXhhbXBsZVxuICogXG4gKiAgYGBgXG4gKiAgY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICogICAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAqICAgICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woKVxuICogIH0pO1xuICogIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cbiAqIFxuICogIGZvcm0ucGF0Y2hWYWx1ZSh7Zmlyc3Q6ICdOYW5jeSd9KTtcbiAqICBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6IG51bGx9XG4gKiBcbiAqICBgYGBcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xucGF0Y2hWYWx1ZShcbiAgICAgIHZhbHVlOiB7W2tleTogc3RyaW5nXTogYW55fSxcbiAgICAgIHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pIHtcbiAgICAgICAgdGhpcy5jb250cm9sc1tuYW1lXS5wYXRjaFZhbHVlKHZhbHVlW25hbWVdLCB7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICB9XG4vKipcbiAqIFJlc2V0cyB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfS4gVGhpcyBtZWFucyBieSBkZWZhdWx0OlxuICogXG4gKiAqIFRoZSBncm91cCBhbmQgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYFxuICogKiBUaGUgZ3JvdXAgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGB1bnRvdWNoZWRgXG4gKiAqIFRoZSB2YWx1ZSBvZiBhbGwgZGVzY2VuZGFudHMgd2lsbCBiZSBudWxsIG9yIG51bGwgbWFwc1xuICogXG4gKiBZb3UgY2FuIGFsc28gcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgaW4gYSBtYXAgb2Ygc3RhdGVzXG4gKiB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGZvcm0sIHdpdGggY29udHJvbCBuYW1lcyBhcyBrZXlzLiBUaGUgc3RhdGVcbiAqIGNhbiBiZSBhIHN0YW5kYWxvbmUgdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZFxuICogc3RhdHVzLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBgYGB0c1xuICogdGhpcy5mb3JtLnJlc2V0KHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ30pO1xuICogXG4gKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxuICogYGBgXG4gKiBcbiAqIC0gT1IgLVxuICogXG4gKiBgYGBcbiAqIHRoaXMuZm9ybS5yZXNldCh7XG4gKiAgIGZpcnN0OiB7dmFsdWU6ICduYW1lJywgZGlzYWJsZWQ6IHRydWV9LFxuICogICBsYXN0OiAnbGFzdCdcbiAqIH0pO1xuICogXG4gKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxuICogY29uc29sZS5sb2codGhpcy5mb3JtLmdldCgnZmlyc3QnKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xuICogYGBgXG4gKiBAcGFyYW0gez89fSB2YWx1ZVxuICogQHBhcmFtIHs/PX0gX18xXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZXNldCh2YWx1ZTogYW55ID0ge30sIHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6XG4gICAgICB2b2lkIHtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb250cm9sLnJlc2V0KHZhbHVlW25hbWVdLCB7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudH0pO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICAgIHRoaXMuX3VwZGF0ZVByaXN0aW5lKHtvbmx5U2VsZn0pO1xuICAgIHRoaXMuX3VwZGF0ZVRvdWNoZWQoe29ubHlTZWxmfSk7XG4gIH1cbi8qKlxuICogVGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUdyb3VwfSwgaW5jbHVkaW5nIGFueSBkaXNhYmxlZCBjb250cm9scy5cbiAqIFxuICogSWYgeW91J2QgbGlrZSB0byBpbmNsdWRlIGFsbCB2YWx1ZXMgcmVnYXJkbGVzcyBvZiBkaXNhYmxlZCBzdGF0dXMsIHVzZSB0aGlzIG1ldGhvZC5cbiAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgdGhlIGJlc3Qgd2F5IHRvIGdldCB0aGUgdmFsdWUgb2YgdGhlIGdyb3VwLlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0UmF3VmFsdWUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fcmVkdWNlQ2hpbGRyZW4oXG4gICAgICAgIHt9LCAoYWNjOiB7W2s6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0sIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgYWNjW25hbWVdID0gY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sID8gY29udHJvbC52YWx1ZSA6ICggLyoqIEB0eXBlIHs/fSAqLygoPGFueT5jb250cm9sKSkpLmdldFJhd1ZhbHVlKCk7XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gbmFtZVxuICogQHJldHVybiB7P31cbiAqL1xuX3Rocm93SWZDb250cm9sTWlzc2luZyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgVGhlcmUgYXJlIG5vIGZvcm0gY29udHJvbHMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgZ3JvdXAgeWV0LiAgSWYgeW91J3JlIHVzaW5nIG5nTW9kZWwsXG4gICAgICAgIHlvdSBtYXkgd2FudCB0byBjaGVjayBuZXh0IHRpY2sgKGUuZy4gdXNlIHNldFRpbWVvdXQpLlxuICAgICAgYCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5jb250cm9sc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBmb3JtIGNvbnRyb2wgd2l0aCBuYW1lOiAke25hbWV9LmApO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBjYlxuICogQHJldHVybiB7P31cbiAqL1xuX2ZvckVhY2hDaGlsZChjYjogKHY6IGFueSwgazogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5jb250cm9scykuZm9yRWFjaChrID0+IGNiKHRoaXMuY29udHJvbHNba10sIGspKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX3NldFVwQ29udHJvbHMoKTogdm9pZCB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcbiAgICAgIGNvbnRyb2wuc2V0UGFyZW50KHRoaXMpO1xuICAgICAgY29udHJvbC5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UodGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKTtcbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZVZhbHVlKCk6IHZvaWQgeyB0aGlzLl92YWx1ZSA9IHRoaXMuX3JlZHVjZVZhbHVlKCk7IH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gY29uZGl0aW9uXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fYW55Q29udHJvbHMoY29uZGl0aW9uOiBGdW5jdGlvbik6IGJvb2xlYW4ge1xuICAgIGxldCAvKiogQHR5cGUgez99ICovIHJlcyA9IGZhbHNlO1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZCgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlcyA9IHJlcyB8fCAodGhpcy5jb250YWlucyhuYW1lKSAmJiBjb25kaXRpb24oY29udHJvbCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9yZWR1Y2VWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVkdWNlQ2hpbGRyZW4oXG4gICAgICAgIHt9LCAoYWNjOiB7W2s6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0sIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKGNvbnRyb2wuZW5hYmxlZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBhY2NbbmFtZV0gPSBjb250cm9sLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9KTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBpbml0VmFsdWVcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbl9yZWR1Y2VDaGlsZHJlbihpbml0VmFsdWU6IGFueSwgZm46IEZ1bmN0aW9uKSB7XG4gICAgbGV0IC8qKiBAdHlwZSB7P30gKi8gcmVzID0gaW5pdFZhbHVlO1xuICAgIHRoaXMuX2ZvckVhY2hDaGlsZChcbiAgICAgICAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7IHJlcyA9IGZuKHJlcywgY29udHJvbCwgbmFtZSk7IH0pO1xuICAgIHJldHVybiByZXM7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbGxDb250cm9sc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGZvciAoY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sTmFtZSBvZiBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2xzKSkge1xuICAgICAgaWYgKHRoaXMuY29udHJvbHNbY29udHJvbE5hbWVdLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb250cm9scykubGVuZ3RoID4gMCB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY2hlY2tBbGxWYWx1ZXNQcmVzZW50KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodmFsdWVbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11c3Qgc3VwcGx5IGEgdmFsdWUgZm9yIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6ICcke25hbWV9Jy5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBGb3JtR3JvdXBfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cC5wcm90b3R5cGUuY29udHJvbHM7XG59XG5cbi8qKlxuICogXFxAd2hhdEl0RG9lcyBUcmFja3MgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBzdGF0ZSBvZiBhbiBhcnJheSBvZiB7XFxAbGluayBGb3JtQ29udHJvbH0sXG4gKiB7XFxAbGluayBGb3JtR3JvdXB9IG9yIHtcXEBsaW5rIEZvcm1BcnJheX0gaW5zdGFuY2VzLlxuICogXG4gKiBBIGBGb3JtQXJyYXlgIGFnZ3JlZ2F0ZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGNoaWxkIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnRvIGFuIGFycmF5LlxuICogSXQgY2FsY3VsYXRlcyBpdHMgc3RhdHVzIGJ5IHJlZHVjaW5nIHRoZSBzdGF0dXNlcyBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2ZcbiAqIHRoZSBjb250cm9scyBpbiBhIGBGb3JtQXJyYXlgIGlzIGludmFsaWQsIHRoZSBlbnRpcmUgYXJyYXkgYmVjb21lcyBpbnZhbGlkLlxuICogXG4gKiBgRm9ybUFycmF5YCBpcyBvbmUgb2YgdGhlIHRocmVlIGZ1bmRhbWVudGFsIGJ1aWxkaW5nIGJsb2NrcyB1c2VkIHRvIGRlZmluZSBmb3JtcyBpbiBBbmd1bGFyLFxuICogYWxvbmcgd2l0aCB7XFxAbGluayBGb3JtQ29udHJvbH0gYW5kIHtcXEBsaW5rIEZvcm1Hcm91cH0uXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBXaGVuIGluc3RhbnRpYXRpbmcgYSB7XFxAbGluayBGb3JtQXJyYXl9LCBwYXNzIGluIGFuIGFycmF5IG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxuICogYXJndW1lbnQuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gKiAgIG5ldyBGb3JtQ29udHJvbCgnTmFuY3knLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXG4gKiAgIG5ldyBGb3JtQ29udHJvbCgnRHJldycpLFxuICogXSk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKGFyci52YWx1ZSk7ICAgLy8gWydOYW5jeScsICdEcmV3J11cbiAqIGNvbnNvbGUubG9nKGFyci5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xuICogYGBgXG4gKiBcbiAqIFlvdSBjYW4gYWxzbyBpbmNsdWRlIGFycmF5LWxldmVsIHZhbGlkYXRvcnMgYXMgdGhlIHNlY29uZCBhcmcsIG9yIGFycmF5LWxldmVsIGFzeW5jXG4gKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cbiAqIHRoYXQgY29uc2lkZXJzIHRoZSB2YWx1ZSBvZiBtb3JlIHRoYW4gb25lIGNoaWxkIGNvbnRyb2wuXG4gKiBcbiAqICMjIyBBZGRpbmcgb3IgcmVtb3ZpbmcgY29udHJvbHNcbiAqIFxuICogVG8gY2hhbmdlIHRoZSBjb250cm9scyBpbiB0aGUgYXJyYXksIHVzZSB0aGUgYHB1c2hgLCBgaW5zZXJ0YCwgb3IgYHJlbW92ZUF0YCBtZXRob2RzXG4gKiBpbiBgRm9ybUFycmF5YCBpdHNlbGYuIFRoZXNlIG1ldGhvZHMgZW5zdXJlIHRoZSBjb250cm9scyBhcmUgcHJvcGVybHkgdHJhY2tlZCBpbiB0aGVcbiAqIGZvcm0ncyBoaWVyYXJjaHkuIERvIG5vdCBtb2RpZnkgdGhlIGFycmF5IG9mIGBBYnN0cmFjdENvbnRyb2xgcyB1c2VkIHRvIGluc3RhbnRpYXRlXG4gKiB0aGUgYEZvcm1BcnJheWAgZGlyZWN0bHksIGFzIHRoYXQgd2lsbCByZXN1bHQgaW4gc3RyYW5nZSBhbmQgdW5leHBlY3RlZCBiZWhhdmlvciBzdWNoXG4gKiBhcyBicm9rZW4gY2hhbmdlIGRldGVjdGlvbi5cbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1BcnJheSBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbHNcbiAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAqL1xuY29uc3RydWN0b3IoXG5wdWJsaWMgY29udHJvbHM6IEFic3RyYWN0Q29udHJvbFtdLCB2YWxpZGF0b3I6IFZhbGlkYXRvckZuID0gbnVsbCxcbiAgICAgIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuID0gbnVsbCkge1xuICAgIHN1cGVyKHZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3IpO1xuICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xuICAgIHRoaXMuX3NldFVwQ29udHJvbHMoKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gIH1cbi8qKlxuICogR2V0IHRoZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9IGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSB7P30gaW5kZXhcbiAqIEByZXR1cm4gez99XG4gKi9cbmF0KGluZGV4OiBudW1iZXIpOiBBYnN0cmFjdENvbnRyb2wgeyByZXR1cm4gdGhpcy5jb250cm9sc1tpbmRleF07IH1cbi8qKlxuICogSW5zZXJ0IGEgbmV3IHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0gYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbnB1c2goY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICAgIHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBJbnNlcnQgYSBuZXcge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfSBhdCB0aGUgZ2l2ZW4gYGluZGV4YCBpbiB0aGUgYXJyYXkuXG4gKiBAcGFyYW0gez99IGluZGV4XG4gKiBAcGFyYW0gez99IGNvbnRyb2xcbiAqIEByZXR1cm4gez99XG4gKi9cbmluc2VydChpbmRleDogbnVtYmVyLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpbmRleCwgMCwgY29udHJvbCk7XG5cbiAgICB0aGlzLl9yZWdpc3RlckNvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgdGhpcy5fb25Db2xsZWN0aW9uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogUmVtb3ZlIHRoZSBjb250cm9sIGF0IHRoZSBnaXZlbiBgaW5kZXhgIGluIHRoZSBhcnJheS5cbiAqIEBwYXJhbSB7P30gaW5kZXhcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sc1tpbmRleF0pIHRoaXMuY29udHJvbHNbaW5kZXhdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSgoKSA9PiB7fSk7XG4gICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIFJlcGxhY2UgYW4gZXhpc3RpbmcgY29udHJvbC5cbiAqIEBwYXJhbSB7P30gaW5kZXhcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xuc2V0Q29udHJvbChpbmRleDogbnVtYmVyLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sc1tpbmRleF0pIHRoaXMuY29udHJvbHNbaW5kZXhdLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSgoKSA9PiB7fSk7XG4gICAgdGhpcy5jb250cm9scy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbHMuc3BsaWNlKGluZGV4LCAwLCBjb250cm9sKTtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyQ29udHJvbChjb250cm9sKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB0aGlzLl9vbkNvbGxlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuLyoqXG4gKiBMZW5ndGggb2YgdGhlIGNvbnRyb2wgYXJyYXkuXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgbGVuZ3RoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLmNvbnRyb2xzLmxlbmd0aDsgfVxuLyoqXG4gKiAgU2V0cyB0aGUgdmFsdWUgb2YgdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0uIEl0IGFjY2VwdHMgYW4gYXJyYXkgdGhhdCBtYXRjaGVzXG4gKiAgdGhlIHN0cnVjdHVyZSBvZiB0aGUgY29udHJvbC5cbiAqIFxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgc3RyaWN0IGNoZWNrcywgc28gaXQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB5b3UgdHJ5XG4gKiB0byBzZXQgdGhlIHZhbHVlIG9mIGEgY29udHJvbCB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGUgdGhlXG4gKiB2YWx1ZSBvZiBhIGNvbnRyb2wuXG4gKiBcbiAqICAjIyMgRXhhbXBsZVxuICogXG4gKiAgYGBgXG4gKiAgY29uc3QgYXJyID0gbmV3IEZvcm1BcnJheShbXG4gKiAgICAgbmV3IEZvcm1Db250cm9sKCksXG4gKiAgICAgbmV3IEZvcm1Db250cm9sKClcbiAqICBdKTtcbiAqICBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFtudWxsLCBudWxsXVxuICogXG4gKiAgYXJyLnNldFZhbHVlKFsnTmFuY3knLCAnRHJldyddKTtcbiAqICBjb25zb2xlLmxvZyhhcnIudmFsdWUpOyAgIC8vIFsnTmFuY3knLCAnRHJldyddXG4gKiAgYGBgXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcGFyYW0gez89fSBfXzFcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldFZhbHVlKHZhbHVlOiBhbnlbXSwge29ubHlTZWxmLCBlbWl0RXZlbnR9OiB7b25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFufSA9IHt9KTpcbiAgICAgIHZvaWQge1xuICAgIHRoaXMuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCh2YWx1ZSk7XG4gICAgdmFsdWUuZm9yRWFjaCgobmV3VmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKGluZGV4KTtcbiAgICAgIHRoaXMuYXQoaW5kZXgpLnNldFZhbHVlKG5ld1ZhbHVlLCB7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudH0pO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICB9XG4vKipcbiAqICBQYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUge1xcQGxpbmsgRm9ybUFycmF5fS4gSXQgYWNjZXB0cyBhbiBhcnJheSB0aGF0IG1hdGNoZXMgdGhlXG4gKiAgc3RydWN0dXJlIG9mIHRoZSBjb250cm9sLCBhbmQgd2lsbCBkbyBpdHMgYmVzdCB0byBtYXRjaCB0aGUgdmFsdWVzIHRvIHRoZSBjb3JyZWN0XG4gKiAgY29udHJvbHMgaW4gdGhlIGdyb3VwLlxuICogXG4gKiAgSXQgYWNjZXB0cyBib3RoIHN1cGVyLXNldHMgYW5kIHN1Yi1zZXRzIG9mIHRoZSBhcnJheSB3aXRob3V0IHRocm93aW5nIGFuIGVycm9yLlxuICogXG4gKiAgIyMjIEV4YW1wbGVcbiAqIFxuICogIGBgYFxuICogIGNvbnN0IGFyciA9IG5ldyBGb3JtQXJyYXkoW1xuICogICAgIG5ldyBGb3JtQ29udHJvbCgpLFxuICogICAgIG5ldyBGb3JtQ29udHJvbCgpXG4gKiAgXSk7XG4gKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbbnVsbCwgbnVsbF1cbiAqIFxuICogIGFyci5wYXRjaFZhbHVlKFsnTmFuY3knXSk7XG4gKiAgY29uc29sZS5sb2coYXJyLnZhbHVlKTsgICAvLyBbJ05hbmN5JywgbnVsbF1cbiAqICBgYGBcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xucGF0Y2hWYWx1ZSh2YWx1ZTogYW55W10sIHtvbmx5U2VsZiwgZW1pdEV2ZW50fToge29ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbn0gPSB7fSk6XG4gICAgICB2b2lkIHtcbiAgICB2YWx1ZS5mb3JFYWNoKChuZXdWYWx1ZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5hdChpbmRleCkpIHtcbiAgICAgICAgdGhpcy5hdChpbmRleCkucGF0Y2hWYWx1ZShuZXdWYWx1ZSwge29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnR9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmLCBlbWl0RXZlbnR9KTtcbiAgfVxuLyoqXG4gKiBSZXNldHMgdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0uIFRoaXMgbWVhbnMgYnkgZGVmYXVsdDpcbiAqIFxuICogKiBUaGUgYXJyYXkgYW5kIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWBcbiAqICogVGhlIGFycmF5IGFuZCBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgdW50b3VjaGVkYFxuICogKiBUaGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHdpbGwgYmUgbnVsbCBvciBudWxsIG1hcHNcbiAqIFxuICogWW91IGNhbiBhbHNvIHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGFuIGFycmF5IG9mIHN0YXRlc1xuICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGNvbnRyb2wuIFRoZSBzdGF0ZSBjYW4gYmUgYSBzdGFuZGFsb25lIHZhbHVlXG4gKiBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHdpdGggYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkIHN0YXR1cy5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgdHNcbiAqIHRoaXMuYXJyLnJlc2V0KFsnbmFtZScsICdsYXN0IG5hbWUnXSk7XG4gKiBcbiAqIGNvbnNvbGUubG9nKHRoaXMuYXJyLnZhbHVlKTsgIC8vIFsnbmFtZScsICdsYXN0IG5hbWUnXVxuICogYGBgXG4gKiBcbiAqIC0gT1IgLVxuICogXG4gKiBgYGBcbiAqIHRoaXMuYXJyLnJlc2V0KFtcbiAqICAge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcbiAqICAgJ2xhc3QnXG4gKiBdKTtcbiAqIFxuICogY29uc29sZS5sb2codGhpcy5hcnIudmFsdWUpOyAgLy8gWyduYW1lJywgJ2xhc3QgbmFtZSddXG4gKiBjb25zb2xlLmxvZyh0aGlzLmFyci5nZXQoMCkuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcbiAqIGBgYFxuICogQHBhcmFtIHs/PX0gdmFsdWVcbiAqIEBwYXJhbSB7Pz19IF9fMVxuICogQHJldHVybiB7P31cbiAqL1xucmVzZXQodmFsdWU6IGFueSA9IFtdLCB7b25seVNlbGYsIGVtaXRFdmVudH06IHtvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW59ID0ge30pOlxuICAgICAgdm9pZCB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnRyb2wucmVzZXQodmFsdWVbaW5kZXhdLCB7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudH0pO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7b25seVNlbGYsIGVtaXRFdmVudH0pO1xuICAgIHRoaXMuX3VwZGF0ZVByaXN0aW5lKHtvbmx5U2VsZn0pO1xuICAgIHRoaXMuX3VwZGF0ZVRvdWNoZWQoe29ubHlTZWxmfSk7XG4gIH1cbi8qKlxuICogVGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGUgYXJyYXksIGluY2x1ZGluZyBhbnkgZGlzYWJsZWQgY29udHJvbHMuXG4gKiBcbiAqIElmIHlvdSdkIGxpa2UgdG8gaW5jbHVkZSBhbGwgdmFsdWVzIHJlZ2FyZGxlc3Mgb2YgZGlzYWJsZWQgc3RhdHVzLCB1c2UgdGhpcyBtZXRob2QuXG4gKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIHRoZSBiZXN0IHdheSB0byBnZXQgdGhlIHZhbHVlIG9mIHRoZSBhcnJheS5cbiAqIEByZXR1cm4gez99XG4gKi9cbmdldFJhd1ZhbHVlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9scy5tYXAoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgICAgcmV0dXJuIGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCA/IGNvbnRyb2wudmFsdWUgOiAoIC8qKiBAdHlwZSB7P30gKi8oKDxhbnk+Y29udHJvbCkpKS5nZXRSYXdWYWx1ZSgpO1xuICAgIH0pO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGluZGV4XG4gKiBAcmV0dXJuIHs/fVxuICovXG5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbHMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICBUaGVyZSBhcmUgbm8gZm9ybSBjb250cm9scyByZWdpc3RlcmVkIHdpdGggdGhpcyBhcnJheSB5ZXQuICBJZiB5b3UncmUgdXNpbmcgbmdNb2RlbCxcbiAgICAgICAgeW91IG1heSB3YW50IHRvIGNoZWNrIG5leHQgdGljayAoZS5nLiB1c2Ugc2V0VGltZW91dCkuXG4gICAgICBgKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmF0KGluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBmb3JtIGNvbnRyb2wgYXQgaW5kZXggJHtpbmRleH1gKTtcbiAgICB9XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEBwYXJhbSB7P30gY2JcbiAqIEByZXR1cm4gez99XG4gKi9cbl9mb3JFYWNoQ2hpbGQoY2I6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9scy5mb3JFYWNoKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGluZGV4OiBudW1iZXIpID0+IHsgY2IoY29udHJvbCwgaW5kZXgpOyB9KTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHJldHVybiB7P31cbiAqL1xuX3VwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5jb250cm9scy5maWx0ZXIoKGNvbnRyb2wpID0+IGNvbnRyb2wuZW5hYmxlZCB8fCB0aGlzLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNvbnRyb2wpID0+IGNvbnRyb2wudmFsdWUpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGNvbmRpdGlvblxuICogQHJldHVybiB7P31cbiAqL1xuX2FueUNvbnRyb2xzKGNvbmRpdGlvbjogRnVuY3Rpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9scy5zb21lKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IGNvbnRyb2wuZW5hYmxlZCAmJiBjb25kaXRpb24oY29udHJvbCkpO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fc2V0VXBDb250cm9scygpOiB2b2lkIHtcbiAgICB0aGlzLl9mb3JFYWNoQ2hpbGQoKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gdGhpcy5fcmVnaXN0ZXJDb250cm9sKGNvbnRyb2wpKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuX2NoZWNrQWxsVmFsdWVzUHJlc2VudCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fZm9yRWFjaENoaWxkKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGk6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHZhbHVlW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdXN0IHN1cHBseSBhIHZhbHVlIGZvciBmb3JtIGNvbnRyb2wgYXQgaW5kZXg6ICR7aX0uYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl9hbGxDb250cm9sc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGZvciAoY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sIG9mIHRoaXMuY29udHJvbHMpIHtcbiAgICAgIGlmIChjb250cm9sLmVuYWJsZWQpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbHMubGVuZ3RoID4gMCB8fCB0aGlzLmRpc2FibGVkO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY29udHJvbFxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfcmVnaXN0ZXJDb250cm9sKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgIGNvbnRyb2wuc2V0UGFyZW50KHRoaXMpO1xuICAgIGNvbnRyb2wuX3JlZ2lzdGVyT25Db2xsZWN0aW9uQ2hhbmdlKHRoaXMuX29uQ29sbGVjdGlvbkNoYW5nZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRm9ybUFycmF5X3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQXJyYXkucHJvdG90eXBlLmNvbnRyb2xzO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL21vZGVsLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgT3B0aW9uYWwsIFNlbGYsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtOR19BU1lOQ19WQUxJREFUT1JTLCBOR19WQUxJREFUT1JTfSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7Rm9ybX0gZnJvbSAnLi9mb3JtX2ludGVyZmFjZSc7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9uZ19jb250cm9sJztcbmltcG9ydCB7TmdNb2RlbH0gZnJvbSAnLi9uZ19tb2RlbCc7XG5pbXBvcnQge05nTW9kZWxHcm91cH0gZnJvbSAnLi9uZ19tb2RlbF9ncm91cCc7XG5pbXBvcnQge2NvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzLCBzZXRVcENvbnRyb2wsIHNldFVwRm9ybUNvbnRhaW5lcn0gZnJvbSAnLi9zaGFyZWQnO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBmb3JtRGlyZWN0aXZlUHJvdmlkZXI6IGFueSA9IHtcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdGb3JtKVxufTtcblxuY29uc3QgLyoqIEB0eXBlIHs/fSAqLyByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgQ3JlYXRlcyBhIHRvcC1sZXZlbCB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIGFuZCBiaW5kcyBpdCB0byBhIGZvcm1cbiAqIHRvIHRyYWNrIGFnZ3JlZ2F0ZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cy5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIEFzIHNvb24gYXMgeW91IGltcG9ydCB0aGUgYEZvcm1zTW9kdWxlYCwgdGhpcyBkaXJlY3RpdmUgYmVjb21lcyBhY3RpdmUgYnkgZGVmYXVsdCBvblxuICogYWxsIGA8Zm9ybT5gIHRhZ3MuICBZb3UgZG9uJ3QgbmVlZCB0byBhZGQgYSBzcGVjaWFsIHNlbGVjdG9yLlxuICogXG4gKiBZb3UgY2FuIGV4cG9ydCB0aGUgZGlyZWN0aXZlIGludG8gYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdGb3JtYCBhcyB0aGUga2V5XG4gKiAoZXg6IGAjbXlGb3JtPVwibmdGb3JtXCJgKS4gVGhpcyBpcyBvcHRpb25hbCwgYnV0IHVzZWZ1bC4gIE1hbnkgcHJvcGVydGllcyBmcm9tIHRoZSB1bmRlcmx5aW5nXG4gKiB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIGFyZSBkdXBsaWNhdGVkIG9uIHRoZSBkaXJlY3RpdmUgaXRzZWxmLCBzbyBhIHJlZmVyZW5jZSB0byBpdFxuICogd2lsbCBnaXZlIHlvdSBhY2Nlc3MgdG8gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBhbmQgdmFsaWRpdHkgc3RhdHVzIG9mIHRoZSBmb3JtLCBhcyB3ZWxsIGFzXG4gKiB1c2VyIGludGVyYWN0aW9uIHByb3BlcnRpZXMgbGlrZSBgZGlydHlgIGFuZCBgdG91Y2hlZGAuXG4gKiBcbiAqIFRvIHJlZ2lzdGVyIGNoaWxkIGNvbnRyb2xzIHdpdGggdGhlIGZvcm0sIHlvdSdsbCB3YW50IHRvIHVzZSB7XFxAbGluayBOZ01vZGVsfSB3aXRoIGFcbiAqIGBuYW1lYCBhdHRyaWJ1dGUuICBZb3UgY2FuIGFsc28gdXNlIHtcXEBsaW5rIE5nTW9kZWxHcm91cH0gaWYgeW91J2QgbGlrZSB0byBjcmVhdGVcbiAqIHN1Yi1ncm91cHMgd2l0aGluIHRoZSBmb3JtLlxuICogXG4gKiBZb3UgY2FuIGxpc3RlbiB0byB0aGUgZGlyZWN0aXZlJ3MgYG5nU3VibWl0YCBldmVudCB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB1c2VyIGhhc1xuICogdHJpZ2dlcmVkIGEgZm9ybSBzdWJtaXNzaW9uLiBUaGUgYG5nU3VibWl0YCBldmVudCB3aWxsIGJlIGVtaXR0ZWQgd2l0aCB0aGUgb3JpZ2luYWwgZm9ybVxuICogc3VibWlzc2lvbiBldmVudC5cbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybS9zaW1wbGVfZm9ybV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAqICoqTmdNb2R1bGUqKjogYEZvcm1zTW9kdWxlYFxuICogXG4gKiAgXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0Zvcm0gZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgRm9ybSB7XG5wcml2YXRlIF9zdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBmb3JtOiBGb3JtR3JvdXA7XG4gIG5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gKi9cbmNvbnN0cnVjdG9yKFxuICAgICAgICAgdmFsaWRhdG9yczogYW55W10sXG4gICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IGFueVtdKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZvcm0gPVxuICAgICAgICBuZXcgRm9ybUdyb3VwKHt9LCBjb21wb3NlVmFsaWRhdG9ycyh2YWxpZGF0b3JzKSwgY29tcG9zZUFzeW5jVmFsaWRhdG9ycyhhc3luY1ZhbGlkYXRvcnMpKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgc3VibWl0dGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc3VibWl0dGVkOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBmb3JtRGlyZWN0aXZlKCk6IEZvcm0geyByZXR1cm4gdGhpczsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbCgpOiBGb3JtR3JvdXAgeyByZXR1cm4gdGhpcy5mb3JtOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIFtdOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBjb250cm9scygpOiB7W2tleTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sfSB7IHJldHVybiB0aGlzLmZvcm0uY29udHJvbHM7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmFkZENvbnRyb2woZGlyOiBOZ01vZGVsKTogdm9pZCB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSB0aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgIGRpci5fY29udHJvbCA9IC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUNvbnRyb2w+Y29udGFpbmVyLnJlZ2lzdGVyQ29udHJvbChkaXIubmFtZSwgZGlyLmNvbnRyb2wpKSk7XG4gICAgICBzZXRVcENvbnRyb2woZGlyLmNvbnRyb2wsIGRpcik7XG4gICAgICBkaXIuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgfSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldENvbnRyb2woZGlyOiBOZ01vZGVsKTogRm9ybUNvbnRyb2wgeyByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtQ29udHJvbD50aGlzLmZvcm0uZ2V0KGRpci5wYXRoKSkpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZW1vdmVDb250cm9sKGRpcjogTmdNb2RlbCk6IHZvaWQge1xuICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY29udGFpbmVyID0gdGhpcy5fZmluZENvbnRhaW5lcihkaXIucGF0aCk7XG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDb250cm9sKGRpci5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuYWRkRm9ybUdyb3VwKGRpcjogTmdNb2RlbEdyb3VwKTogdm9pZCB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSB0aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICAgIHNldFVwRm9ybUNvbnRhaW5lcihncm91cCwgZGlyKTtcbiAgICAgIGNvbnRhaW5lci5yZWdpc3RlckNvbnRyb2woZGlyLm5hbWUsIGdyb3VwKTtcbiAgICAgIGdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xucmVtb3ZlRm9ybUdyb3VwKGRpcjogTmdNb2RlbEdyb3VwKTogdm9pZCB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250YWluZXIgPSB0aGlzLl9maW5kQ29udGFpbmVyKGRpci5wYXRoKTtcbiAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNvbnRyb2woZGlyLm5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRGb3JtR3JvdXAoZGlyOiBOZ01vZGVsR3JvdXApOiBGb3JtR3JvdXAgeyByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtR3JvdXA+dGhpcy5mb3JtLmdldChkaXIucGF0aCkpKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xudXBkYXRlTW9kZWwoZGlyOiBOZ0NvbnRyb2wsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGN0cmwgPSAvKiogQHR5cGUgez99ICovKCggPEZvcm1Db250cm9sPnRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKSk7XG4gICAgICBjdHJsLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXRWYWx1ZSh2YWx1ZToge1trZXk6IHN0cmluZ106IGFueX0pOiB2b2lkIHsgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99ICRldmVudFxuICogQHJldHVybiB7P31cbiAqL1xub25TdWJtaXQoJGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuX3N1Ym1pdHRlZCA9IHRydWU7XG4gICAgdGhpcy5uZ1N1Ym1pdC5lbWl0KCRldmVudCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbm9uUmVzZXQoKTogdm9pZCB7IHRoaXMucmVzZXRGb3JtKCk7IH1cbi8qKlxuICogQHBhcmFtIHs/PX0gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlc2V0Rm9ybSh2YWx1ZTogYW55ID0gdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLnJlc2V0KHZhbHVlKTtcbiAgICB0aGlzLl9zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBwYXRoXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fZmluZENvbnRhaW5lcihwYXRoOiBzdHJpbmdbXSk6IEZvcm1Hcm91cCB7XG4gICAgcGF0aC5wb3AoKTtcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPyAvKiogQHR5cGUgez99ICovKCggPEZvcm1Hcm91cD50aGlzLmZvcm0uZ2V0KHBhdGgpKSkgOiB0aGlzLmZvcm07XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdmb3JtOm5vdChbbmdOb0Zvcm1dKTpub3QoW2Zvcm1Hcm91cF0pLG5nRm9ybSxbbmdGb3JtXScsXG4gIHByb3ZpZGVyczogW2Zvcm1EaXJlY3RpdmVQcm92aWRlcl0sXG4gIGhvc3Q6IHsnKHN1Ym1pdCknOiAnb25TdWJtaXQoJGV2ZW50KScsICcocmVzZXQpJzogJ29uUmVzZXQoKSd9LFxuICBvdXRwdXRzOiBbJ25nU3VibWl0J10sXG4gIGV4cG9ydEFzOiAnbmdGb3JtJ1xufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfVkFMSURBVE9SUywgXSB9LCBdfSxcbnt0eXBlOiBBcnJheSwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBTZWxmIH0sIHsgdHlwZTogSW5qZWN0LCBhcmdzOiBbTkdfQVNZTkNfVkFMSURBVE9SUywgXSB9LCBdfSxcbl07XG59XG5cbmZ1bmN0aW9uIE5nRm9ybV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdGb3JtLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTmdGb3JtLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdGb3JtLnByb3RvdHlwZS5fc3VibWl0dGVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdGb3JtLnByb3RvdHlwZS5mb3JtO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdGb3JtLnByb3RvdHlwZS5uZ1N1Ym1pdDtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvbmdfZm9ybS50cyIsIlxuLyoqXG4gKiBAbGljZW5zZSBcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5leHBvcnQgY29uc3QgRm9ybUVycm9yRXhhbXBsZXMgPSB7XG4gIGZvcm1Db250cm9sTmFtZTogYFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+XG4gICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3ROYW1lXCI+XG4gICAgPC9kaXY+XG5cbiAgICBJbiB5b3VyIGNsYXNzOlxuXG4gICAgdGhpcy5teUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKVxuICAgIH0pO2AsXG5cbiAgZm9ybUdyb3VwTmFtZTogYFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+XG4gICAgICAgPGRpdiBmb3JtR3JvdXBOYW1lPVwicGVyc29uXCI+XG4gICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cImZpcnN0TmFtZVwiPlxuICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgSW4geW91ciBjbGFzczpcblxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgIHBlcnNvbjogbmV3IEZvcm1Hcm91cCh7IGZpcnN0TmFtZTogbmV3IEZvcm1Db250cm9sKCkgfSlcbiAgICB9KTtgLFxuXG4gIGZvcm1BcnJheU5hbWU6IGBcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwibXlHcm91cFwiPlxuICAgICAgPGRpdiBmb3JtQXJyYXlOYW1lPVwiY2l0aWVzXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNpdHkgb2YgY2l0eUFycmF5LmNvbnRyb2xzOyBpbmRleCBhcyBpXCI+XG4gICAgICAgICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiaVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgSW4geW91ciBjbGFzczpcblxuICAgIHRoaXMuY2l0eUFycmF5ID0gbmV3IEZvcm1BcnJheShbbmV3IEZvcm1Db250cm9sKCdTRicpXSk7XG4gICAgdGhpcy5teUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBjaXRpZXM6IHRoaXMuY2l0eUFycmF5XG4gICAgfSk7YCxcblxuICBuZ01vZGVsR3JvdXA6IGBcbiAgICA8Zm9ybT5cbiAgICAgICA8ZGl2IG5nTW9kZWxHcm91cD1cInBlcnNvblwiPlxuICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInBlcnNvbi5uYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiPlxuICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5gLFxuXG4gIG5nTW9kZWxXaXRoRm9ybUdyb3VwOiBgXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIm15R3JvdXBcIj5cbiAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwic2hvd01vcmVDb250cm9sc1wiIFtuZ01vZGVsT3B0aW9uc109XCJ7c3RhbmRhbG9uZTogdHJ1ZX1cIj5cbiAgICA8L2Rpdj5cbiAgYFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9lcnJvcl9leGFtcGxlcy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0Zvcm1FcnJvckV4YW1wbGVzIGFzIEV4YW1wbGVzfSBmcm9tICcuL2Vycm9yX2V4YW1wbGVzJztcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZURyaXZlbkVycm9ycyB7XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBtb2RlbFBhcmVudEV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgbmdNb2RlbCBjYW5ub3QgYmUgdXNlZCB0byByZWdpc3RlciBmb3JtIGNvbnRyb2xzIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFRyeSB1c2luZ1xuICAgICAgZm9ybUdyb3VwJ3MgcGFydG5lciBkaXJlY3RpdmUgXCJmb3JtQ29udHJvbE5hbWVcIiBpbnN0ZWFkLiAgRXhhbXBsZTpcblxuICAgICAgJHtFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWV9XG5cbiAgICAgIE9yLCBpZiB5b3UnZCBsaWtlIHRvIGF2b2lkIHJlZ2lzdGVyaW5nIHRoaXMgZm9ybSBjb250cm9sLCBpbmRpY2F0ZSB0aGF0IGl0J3Mgc3RhbmRhbG9uZSBpbiBuZ01vZGVsT3B0aW9uczpcblxuICAgICAgRXhhbXBsZTpcblxuICAgICAgJHtFeGFtcGxlcy5uZ01vZGVsV2l0aEZvcm1Hcm91cH1gKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgZm9ybUdyb3VwTmFtZUV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgbmdNb2RlbCBjYW5ub3QgYmUgdXNlZCB0byByZWdpc3RlciBmb3JtIGNvbnRyb2xzIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwTmFtZSBvciBmb3JtQXJyYXlOYW1lIGRpcmVjdGl2ZS5cblxuICAgICAgT3B0aW9uIDE6IFVzZSBmb3JtQ29udHJvbE5hbWUgaW5zdGVhZCBvZiBuZ01vZGVsIChyZWFjdGl2ZSBzdHJhdGVneSk6XG5cbiAgICAgICR7RXhhbXBsZXMuZm9ybUdyb3VwTmFtZX1cblxuICAgICAgT3B0aW9uIDI6ICBVcGRhdGUgbmdNb2RlbCdzIHBhcmVudCBiZSBuZ01vZGVsR3JvdXAgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSk6XG5cbiAgICAgICR7RXhhbXBsZXMubmdNb2RlbEdyb3VwfWApO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBtaXNzaW5nTmFtZUV4Y2VwdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJZiBuZ01vZGVsIGlzIHVzZWQgd2l0aGluIGEgZm9ybSB0YWcsIGVpdGhlciB0aGUgbmFtZSBhdHRyaWJ1dGUgbXVzdCBiZSBzZXQgb3IgdGhlIGZvcm1cbiAgICAgIGNvbnRyb2wgbXVzdCBiZSBkZWZpbmVkIGFzICdzdGFuZGFsb25lJyBpbiBuZ01vZGVsT3B0aW9ucy5cblxuICAgICAgRXhhbXBsZSAxOiA8aW5wdXQgWyhuZ01vZGVsKV09XCJwZXJzb24uZmlyc3ROYW1lXCIgbmFtZT1cImZpcnN0XCI+XG4gICAgICBFeGFtcGxlIDI6IDxpbnB1dCBbKG5nTW9kZWwpXT1cInBlcnNvbi5maXJzdE5hbWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwie3N0YW5kYWxvbmU6IHRydWV9XCI+YCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIG1vZGVsR3JvdXBQYXJlbnRFeGNlcHRpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgIG5nTW9kZWxHcm91cCBjYW5ub3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuXG5cbiAgICAgIE9wdGlvbiAxOiBVc2UgZm9ybUdyb3VwTmFtZSBpbnN0ZWFkIG9mIG5nTW9kZWxHcm91cCAocmVhY3RpdmUgc3RyYXRlZ3kpOlxuXG4gICAgICAke0V4YW1wbGVzLmZvcm1Hcm91cE5hbWV9XG5cbiAgICAgIE9wdGlvbiAyOiAgVXNlIGEgcmVndWxhciBmb3JtIHRhZyBpbnN0ZWFkIG9mIHRoZSBmb3JtR3JvdXAgZGlyZWN0aXZlICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpOlxuXG4gICAgICAke0V4YW1wbGVzLm5nTW9kZWxHcm91cH1gKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL3RlbXBsYXRlX2RyaXZlbl9lcnJvcnMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3QsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgU2VsZiwgU2tpcFNlbGYsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlN9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7Q29udHJvbENvbnRhaW5lcn0gZnJvbSAnLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnLi9uZ19mb3JtJztcbmltcG9ydCB7VGVtcGxhdGVEcml2ZW5FcnJvcnN9IGZyb20gJy4vdGVtcGxhdGVfZHJpdmVuX2Vycm9ycyc7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIG1vZGVsR3JvdXBQcm92aWRlcjogYW55ID0ge1xuICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ01vZGVsR3JvdXApXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYW5kIGJpbmRzIGEge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB0byBhIERPTSBlbGVtZW50LlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogVGhpcyBkaXJlY3RpdmUgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGNoaWxkIG9mIHtcXEBsaW5rIE5nRm9ybX0gKG9yIGluIG90aGVyIHdvcmRzLFxuICogd2l0aGluIGA8Zm9ybT5gIHRhZ3MpLlxuICogXG4gKiBVc2UgdGhpcyBkaXJlY3RpdmUgaWYgeW91J2QgbGlrZSB0byBjcmVhdGUgYSBzdWItZ3JvdXAgd2l0aGluIGEgZm9ybS4gVGhpcyBjYW5cbiAqIGNvbWUgaW4gaGFuZHkgaWYgeW91IHdhbnQgdG8gdmFsaWRhdGUgYSBzdWItZ3JvdXAgb2YgeW91ciBmb3JtIHNlcGFyYXRlbHkgZnJvbVxuICogdGhlIHJlc3Qgb2YgeW91ciBmb3JtLCBvciBpZiBzb21lIHZhbHVlcyBpbiB5b3VyIGRvbWFpbiBtb2RlbCBtYWtlIG1vcmUgc2Vuc2UgdG9cbiAqIGNvbnN1bWUgdG9nZXRoZXIgaW4gYSBuZXN0ZWQgb2JqZWN0LlxuICogXG4gKiBQYXNzIGluIHRoZSBuYW1lIHlvdSdkIGxpa2UgdGhpcyBzdWItZ3JvdXAgdG8gaGF2ZSBhbmQgaXQgd2lsbCBiZWNvbWUgdGhlIGtleVxuICogZm9yIHRoZSBzdWItZ3JvdXAgaW4gdGhlIGZvcm0ncyBmdWxsIHZhbHVlLiBZb3UgY2FuIGFsc28gZXhwb3J0IHRoZSBkaXJlY3RpdmUgaW50b1xuICogYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdNb2RlbEdyb3VwYCAoZXg6IGAjbXlHcm91cD1cIm5nTW9kZWxHcm91cFwiYCkuXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL25nTW9kZWxHcm91cC9uZ19tb2RlbF9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAqICoqTmdNb2R1bGUqKjogYEZvcm1zTW9kdWxlYFxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE5nTW9kZWxHcm91cCBleHRlbmRzIEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgbmFtZTogc3RyaW5nO1xuLyoqXG4gKiBAcGFyYW0gez99IHBhcmVudFxuICogQHBhcmFtIHs/fSB2YWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IGFzeW5jVmFsaWRhdG9yc1xuICovXG5jb25zdHJ1Y3RvcihcbiAgICAgICAgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgdmFsaWRhdG9yczogYW55W10sXG4gICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IGFueVtdKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY2hlY2tQYXJlbnRUeXBlKCk6IHZvaWQge1xuICAgIGlmICghKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nTW9kZWxHcm91cCkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBOZ0Zvcm0pKSB7XG4gICAgICBUZW1wbGF0ZURyaXZlbkVycm9ycy5tb2RlbEdyb3VwUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7c2VsZWN0b3I6ICdbbmdNb2RlbEdyb3VwXScsIHByb3ZpZGVyczogW21vZGVsR3JvdXBQcm92aWRlcl0sIGV4cG9ydEFzOiAnbmdNb2RlbEdyb3VwJ30sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogSG9zdCB9LCB7IHR5cGU6IFNraXBTZWxmIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLCBdIH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbmFtZSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nTW9kZWxHcm91cCcsIF0gfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gTmdNb2RlbEdyb3VwX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsR3JvdXAuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OZ01vZGVsR3JvdXAuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsR3JvdXAucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsR3JvdXAucHJvdG90eXBlLm5hbWU7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX21vZGVsX2dyb3VwLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3QsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0LCBTZWxmLCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtOR19BU1lOQ19WQUxJREFUT1JTLCBOR19WQUxJREFUT1JTfSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuaW1wb3J0IHtBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vY29udHJvbF9jb250YWluZXInO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJy4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnLi9uZ19jb250cm9sJztcbmltcG9ydCB7TmdGb3JtfSBmcm9tICcuL25nX2Zvcm0nO1xuaW1wb3J0IHtOZ01vZGVsR3JvdXB9IGZyb20gJy4vbmdfbW9kZWxfZ3JvdXAnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgY29udHJvbFBhdGgsIGlzUHJvcGVydHlVcGRhdGVkLCBzZWxlY3RWYWx1ZUFjY2Vzc29yLCBzZXRVcENvbnRyb2x9IGZyb20gJy4vc2hhcmVkJztcbmltcG9ydCB7VGVtcGxhdGVEcml2ZW5FcnJvcnN9IGZyb20gJy4vdGVtcGxhdGVfZHJpdmVuX2Vycm9ycyc7XG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZufSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBmb3JtQ29udHJvbEJpbmRpbmc6IGFueSA9IHtcbiAgcHJvdmlkZTogTmdDb250cm9sLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ01vZGVsKVxufTtcblxuLyoqXG4gKiBgbmdNb2RlbGAgZm9yY2VzIGFuIGFkZGl0aW9uYWwgY2hhbmdlIGRldGVjdGlvbiBydW4gd2hlbiBpdHMgaW5wdXRzIGNoYW5nZTpcbiAqIEUuZy46XG4gKiBgYGBcbiAqIDxkaXY+e3tteU1vZGVsLnZhbGlkfX08L2Rpdj5cbiAqIDxpbnB1dCBbKG5nTW9kZWwpXT1cIm15VmFsdWVcIiAjbXlNb2RlbD1cIm5nTW9kZWxcIj5cbiAqIGBgYFxuICogSS5lLiBgbmdNb2RlbGAgY2FuIGV4cG9ydCBpdHNlbGYgb24gdGhlIGVsZW1lbnQgYW5kIHRoZW4gYmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUuXG4gKiBOb3JtYWxseSwgdGhpcyB3b3VsZCByZXN1bHQgaW4gZXhwcmVzc2lvbnMgYmVmb3JlIHRoZSBgaW5wdXRgIHRoYXQgdXNlIHRoZSBleHBvcnRlZCBkaXJlY3RpdmVcbiAqIHRvIGhhdmUgYW5kIG9sZCB2YWx1ZSBhcyB0aGV5IGhhdmUgYmVlblxuICogZGlydHkgY2hlY2tlZCBiZWZvcmUuIEFzIHRoaXMgaXMgYSB2ZXJ5IGNvbW1vbiBjYXNlIGZvciBgbmdNb2RlbGAsIHdlIGFkZGVkIHRoaXMgc2Vjb25kIGNoYW5nZVxuICogZGV0ZWN0aW9uIHJ1bi5cbiAqXG4gKiBOb3RlczpcbiAqIC0gdGhpcyBpcyBqdXN0IG9uZSBleHRyYSBydW4gbm8gbWF0dGVyIGhvdyBtYW55IGBuZ01vZGVsYCBoYXZlIGJlZW4gY2hhbmdlZC5cbiAqIC0gdGhpcyBpcyBhIGdlbmVyYWwgcHJvYmxlbSB3aGVuIHVzaW5nIGBleHBvcnRBc2AgZm9yIGRpcmVjdGl2ZXMhXG4gKi9cbmNvbnN0IC8qKiBAdHlwZSB7P30gKi8gcmVzb2x2ZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIENyZWF0ZXMgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgZnJvbSBhIGRvbWFpbiBtb2RlbCBhbmQgYmluZHMgaXRcbiAqIHRvIGEgZm9ybSBjb250cm9sIGVsZW1lbnQuXG4gKiBcbiAqIFRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2Ugd2lsbCB0cmFjayB0aGUgdmFsdWUsIHVzZXIgaW50ZXJhY3Rpb24sIGFuZFxuICogdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wgYW5kIGtlZXAgdGhlIHZpZXcgc3luY2VkIHdpdGggdGhlIG1vZGVsLiBJZiB1c2VkXG4gKiB3aXRoaW4gYSBwYXJlbnQgZm9ybSwgdGhlIGRpcmVjdGl2ZSB3aWxsIGFsc28gcmVnaXN0ZXIgaXRzZWxmIHdpdGggdGhlIGZvcm0gYXMgYSBjaGlsZFxuICogY29udHJvbC5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFRoaXMgZGlyZWN0aXZlIGNhbiBiZSB1c2VkIGJ5IGl0c2VsZiBvciBhcyBwYXJ0IG9mIGEgbGFyZ2VyIGZvcm0uIEFsbCB5b3UgbmVlZCBpcyB0aGVcbiAqIGBuZ01vZGVsYCBzZWxlY3RvciB0byBhY3RpdmF0ZSBpdC5cbiAqIFxuICogSXQgYWNjZXB0cyBhIGRvbWFpbiBtb2RlbCBhcyBhbiBvcHRpb25hbCB7XFxAbGluayBcXEBJbnB1dH0uIElmIHlvdSBoYXZlIGEgb25lLXdheSBiaW5kaW5nXG4gKiB0byBgbmdNb2RlbGAgd2l0aCBgW11gIHN5bnRheCwgY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBkb21haW4gbW9kZWwgaW4gdGhlIGNvbXBvbmVudFxuICogY2xhc3Mgd2lsbCBzZXQgdGhlIHZhbHVlIGluIHRoZSB2aWV3LiBJZiB5b3UgaGF2ZSBhIHR3by13YXkgYmluZGluZyB3aXRoIGBbKCldYCBzeW50YXhcbiAqIChhbHNvIGtub3duIGFzICdiYW5hbmEtYm94IHN5bnRheCcpLCB0aGUgdmFsdWUgaW4gdGhlIFVJIHdpbGwgYWx3YXlzIGJlIHN5bmNlZCBiYWNrIHRvXG4gKiB0aGUgZG9tYWluIG1vZGVsIGluIHlvdXIgY2xhc3MgYXMgd2VsbC5cbiAqIFxuICogSWYgeW91IHdpc2ggdG8gaW5zcGVjdCB0aGUgcHJvcGVydGllcyBvZiB0aGUgYXNzb2NpYXRlZCB7XFxAbGluayBGb3JtQ29udHJvbH0gKGxpa2VcbiAqIHZhbGlkaXR5IHN0YXRlKSwgeW91IGNhbiBhbHNvIGV4cG9ydCB0aGUgZGlyZWN0aXZlIGludG8gYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZ1xuICogYG5nTW9kZWxgIGFzIHRoZSBrZXkgKGV4OiBgI215VmFyPVwibmdNb2RlbFwiYCkuIFlvdSBjYW4gdGhlbiBhY2Nlc3MgdGhlIGNvbnRyb2wgdXNpbmcgdGhlXG4gKiBkaXJlY3RpdmUncyBgY29udHJvbGAgcHJvcGVydHksIGJ1dCBtb3N0IHByb3BlcnRpZXMgeW91J2xsIG5lZWQgKGxpa2UgYHZhbGlkYCBhbmQgYGRpcnR5YClcbiAqIHdpbGwgZmFsbCB0aHJvdWdoIHRvIHRoZSBjb250cm9sIGFueXdheSwgc28geW91IGNhbiBhY2Nlc3MgdGhlbSBkaXJlY3RseS4gWW91IGNhbiBzZWUgYVxuICogZnVsbCBsaXN0IG9mIHByb3BlcnRpZXMgZGlyZWN0bHkgYXZhaWxhYmxlIGluIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0uXG4gKiBcbiAqIFRoZSBmb2xsb3dpbmcgaXMgYW4gZXhhbXBsZSBvZiBhIHNpbXBsZSBzdGFuZGFsb25lIGNvbnRyb2wgdXNpbmcgYG5nTW9kZWxgOlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVOZ01vZGVsL3NpbXBsZV9uZ19tb2RlbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogV2hlbiB1c2luZyB0aGUgYG5nTW9kZWxgIHdpdGhpbiBgPGZvcm0+YCB0YWdzLCB5b3UnbGwgYWxzbyBuZWVkIHRvIHN1cHBseSBhIGBuYW1lYCBhdHRyaWJ1dGVcbiAqIHNvIHRoYXQgdGhlIGNvbnRyb2wgY2FuIGJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcGFyZW50IGZvcm0gdW5kZXIgdGhhdCBuYW1lLlxuICogXG4gKiBJdCdzIHdvcnRoIG5vdGluZyB0aGF0IGluIHRoZSBjb250ZXh0IG9mIGEgcGFyZW50IGZvcm0sIHlvdSBvZnRlbiBjYW4gc2tpcCBvbmUtd2F5IG9yXG4gKiB0d28td2F5IGJpbmRpbmcgYmVjYXVzZSB0aGUgcGFyZW50IGZvcm0gd2lsbCBzeW5jIHRoZSB2YWx1ZSBmb3IgeW91LiBZb3UgY2FuIGFjY2Vzc1xuICogaXRzIHByb3BlcnRpZXMgYnkgZXhwb3J0aW5nIGl0IGludG8gYSBsb2NhbCB0ZW1wbGF0ZSB2YXJpYWJsZSB1c2luZyBgbmdGb3JtYCAoZXg6XG4gKiBgI2Y9XCJuZ0Zvcm1cImApLiBUaGVuIHlvdSBjYW4gcGFzcyBpdCB3aGVyZSBpdCBuZWVkcyB0byBnbyBvbiBzdWJtaXQuXG4gKiBcbiAqIElmIHlvdSBkbyBuZWVkIHRvIHBvcHVsYXRlIGluaXRpYWwgdmFsdWVzIGludG8geW91ciBmb3JtLCB1c2luZyBhIG9uZS13YXkgYmluZGluZyBmb3JcbiAqIGBuZ01vZGVsYCB0ZW5kcyB0byBiZSBzdWZmaWNpZW50IGFzIGxvbmcgYXMgeW91IHVzZSB0aGUgZXhwb3J0ZWQgZm9ybSdzIHZhbHVlIHJhdGhlclxuICogdGhhbiB0aGUgZG9tYWluIG1vZGVsJ3MgdmFsdWUgb24gc3VibWl0LlxuICogXG4gKiBUYWtlIGEgbG9vayBhdCBhbiBleGFtcGxlIG9mIHVzaW5nIGBuZ01vZGVsYCB3aXRoaW4gYSBmb3JtOlxuICogXG4gKiB7XFxAZXhhbXBsZSBmb3Jtcy90cy9zaW1wbGVGb3JtL3NpbXBsZV9mb3JtX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiBUbyBzZWUgYG5nTW9kZWxgIGV4YW1wbGVzIHdpdGggZGlmZmVyZW50IGZvcm0gY29udHJvbCB0eXBlcywgc2VlOlxuICogXG4gKiAqIFJhZGlvIGJ1dHRvbnM6IHtcXEBsaW5rIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9XG4gKiAqIFNlbGVjdHM6IHtcXEBsaW5rIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICogXG4gKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAqKk5nTW9kdWxlKio6IGBGb3Jtc01vZHVsZWBcbiAqIFxuICogIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgTmdNb2RlbCBleHRlbmRzIE5nQ29udHJvbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3kge1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fcmVnaXN0ZXJlZCA9IGZhbHNlO1xuICB2aWV3TW9kZWw6IGFueTtcblxuICAgbmFtZTogc3RyaW5nO1xuICAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgIG1vZGVsOiBhbnk7XG4gICBvcHRpb25zOiB7bmFtZT86IHN0cmluZywgc3RhbmRhbG9uZT86IGJvb2xlYW59O1xuXG4gICB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4vKipcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gKi9cbmNvbnN0cnVjdG9yKCAgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiBBcnJheTxWYWxpZGF0b3J8VmFsaWRhdG9yRm4+LFxuICAgICAgICAgICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IEFycmF5PEFzeW5jVmFsaWRhdG9yfEFzeW5jVmFsaWRhdG9yRm4+LFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB2YWx1ZUFjY2Vzc29yczogQ29udHJvbFZhbHVlQWNjZXNzb3JbXSkge1xuICAgICAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jhd1ZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyA9IGFzeW5jVmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3IgPSBzZWxlY3RWYWx1ZUFjY2Vzc29yKHRoaXMsIHZhbHVlQWNjZXNzb3JzKTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0ZvckVycm9ycygpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fcmVnaXN0ZXJlZCkgdGhpcy5fc2V0VXBDb250cm9sKCk7XG4gICAgICAgICAgICAgICAgaWYgKCdpc0Rpc2FibGVkJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEaXNhYmxlZChjaGFuZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy52aWV3TW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkRlc3Ryb3koKTogdm9pZCB7IHRoaXMuZm9ybURpcmVjdGl2ZSAmJiB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlQ29udHJvbCh0aGlzKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7IHJldHVybiB0aGlzLl9jb250cm9sOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50ID8gY29udHJvbFBhdGgodGhpcy5uYW1lLCB0aGlzLl9wYXJlbnQpIDogW3RoaXMubmFtZV07XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGZvcm1EaXJlY3RpdmUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3BhcmVudCA/IHRoaXMuX3BhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHsgcmV0dXJuIGNvbXBvc2VWYWxpZGF0b3JzKHRoaXMuX3Jhd1ZhbGlkYXRvcnMpOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBhc3luY1ZhbGlkYXRvcigpOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3NldFVwQ29udHJvbCgpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1N0YW5kYWxvbmUoKSA/IHRoaXMuX3NldFVwU3RhbmRhbG9uZSgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5hZGRDb250cm9sKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2lzU3RhbmRhbG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuX3BhcmVudCB8fCAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5zdGFuZGFsb25lKTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9zZXRVcFN0YW5kYWxvbmUoKTogdm9pZCB7XG4gICAgICAgICAgICAgICAgc2V0VXBDb250cm9sKHRoaXMuX2NvbnRyb2wsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NoZWNrRm9yRXJyb3JzKCk6IHZvaWQge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNTdGFuZGFsb25lKCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja05hbWUoKTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jaGVja1BhcmVudFR5cGUoKTogdm9pZCB7XG4gICAgICAgICAgICAgICAgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMuZm9ybUdyb3VwTmFtZUV4Y2VwdGlvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgTmdNb2RlbEdyb3VwKSAmJiAhKHRoaXMuX3BhcmVudCBpbnN0YW5jZW9mIE5nRm9ybSkpIHtcbiAgICAgICAgICAgICAgICAgIFRlbXBsYXRlRHJpdmVuRXJyb3JzLm1vZGVsUGFyZW50RXhjZXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NoZWNrTmFtZSgpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5uYW1lKSB0aGlzLm5hbWUgPSB0aGlzLm9wdGlvbnMubmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNTdGFuZGFsb25lKCkgJiYgIXRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgICAgVGVtcGxhdGVEcml2ZW5FcnJvcnMubWlzc2luZ05hbWVFeGNlcHRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfdXBkYXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7IHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSwge2VtaXRWaWV3VG9Nb2RlbENoYW5nZTogZmFsc2V9KTsgfSk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF91cGRhdGVEaXNhYmxlZChjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBkaXNhYmxlZFZhbHVlID0gY2hhbmdlc1snaXNEaXNhYmxlZCddLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gaXNEaXNhYmxlZCA9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkVmFsdWUgPT09ICcnIHx8IChkaXNhYmxlZFZhbHVlICYmIGRpc2FibGVkVmFsdWUgIT09ICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzRGlzYWJsZWQgJiYgIXRoaXMuY29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNEaXNhYmxlZCAmJiB0aGlzLmNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW25nTW9kZWxdOm5vdChbZm9ybUNvbnRyb2xOYW1lXSk6bm90KFtmb3JtQ29udHJvbF0pJyxcbiAgcHJvdmlkZXJzOiBbZm9ybUNvbnRyb2xCaW5kaW5nXSxcbiAgZXhwb3J0QXM6ICduZ01vZGVsJ1xufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBDb250cm9sQ29udGFpbmVyLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEhvc3QgfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTFVFX0FDQ0VTU09SLCBdIH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbmFtZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidpc0Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZGlzYWJsZWQnLCBdIH0sXSxcbidtb2RlbCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nTW9kZWwnLCBdIH0sXSxcbidvcHRpb25zJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnbmdNb2RlbE9wdGlvbnMnLCBdIH0sXSxcbid1cGRhdGUnOiBbeyB0eXBlOiBPdXRwdXQsIGFyZ3M6IFsnbmdNb2RlbENoYW5nZScsIF0gfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gTmdNb2RlbF90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbC5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbk5nTW9kZWwuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsLnByb3BEZWNvcmF0b3JzO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbk5nTW9kZWwucHJvdG90eXBlLl9jb250cm9sO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbk5nTW9kZWwucHJvdG90eXBlLl9yZWdpc3RlcmVkO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbC5wcm90b3R5cGUudmlld01vZGVsO1xuLyoqIEB0eXBlIHs/fSAqL1xuTmdNb2RlbC5wcm90b3R5cGUubmFtZTtcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWwucHJvdG90eXBlLmlzRGlzYWJsZWQ7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsLnByb3RvdHlwZS5tb2RlbDtcbi8qKiBAdHlwZSB7P30gKi9cbk5nTW9kZWwucHJvdG90eXBlLm9wdGlvbnM7XG4vKiogQHR5cGUgez99ICovXG5OZ01vZGVsLnByb3RvdHlwZS51cGRhdGU7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX21vZGVsLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cblxuaW1wb3J0IHtGb3JtRXJyb3JFeGFtcGxlcyBhcyBFeGFtcGxlc30gZnJvbSAnLi9lcnJvcl9leGFtcGxlcyc7XG5leHBvcnQgY2xhc3MgUmVhY3RpdmVFcnJvcnMge1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgY29udHJvbFBhcmVudEV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBmb3JtQ29udHJvbE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cblxuICAgICAgRXhhbXBsZTpcblxuICAgICAgJHtFeGFtcGxlcy5mb3JtQ29udHJvbE5hbWV9YCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIG5nTW9kZWxHcm91cEV4Y2VwdGlvbigpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBmb3JtQ29udHJvbE5hbWUgY2Fubm90IGJlIHVzZWQgd2l0aCBhbiBuZ01vZGVsR3JvdXAgcGFyZW50LiBJdCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwYXJlbnRzXG4gICAgICAgdGhhdCBhbHNvIGhhdmUgYSBcImZvcm1cIiBwcmVmaXg6IGZvcm1Hcm91cE5hbWUsIGZvcm1BcnJheU5hbWUsIG9yIGZvcm1Hcm91cC5cblxuICAgICAgIE9wdGlvbiAxOiAgVXBkYXRlIHRoZSBwYXJlbnQgdG8gYmUgZm9ybUdyb3VwTmFtZSAocmVhY3RpdmUgZm9ybSBzdHJhdGVneSlcblxuICAgICAgICAke0V4YW1wbGVzLmZvcm1Hcm91cE5hbWV9XG5cbiAgICAgICAgT3B0aW9uIDI6IFVzZSBuZ01vZGVsIGluc3RlYWQgb2YgZm9ybUNvbnRyb2xOYW1lICh0ZW1wbGF0ZS1kcml2ZW4gc3RyYXRlZ3kpXG5cbiAgICAgICAgJHtFeGFtcGxlcy5uZ01vZGVsR3JvdXB9YCk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuc3RhdGljIG1pc3NpbmdGb3JtRXhjZXB0aW9uKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihgZm9ybUdyb3VwIGV4cGVjdHMgYSBGb3JtR3JvdXAgaW5zdGFuY2UuIFBsZWFzZSBwYXNzIG9uZSBpbi5cblxuICAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAke0V4YW1wbGVzLmZvcm1Db250cm9sTmFtZX1gKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgZ3JvdXBQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgZm9ybUdyb3VwTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXG4gICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXG5cbiAgICAgIEV4YW1wbGU6XG5cbiAgICAgICR7RXhhbXBsZXMuZm9ybUdyb3VwTmFtZX1gKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zdGF0aWMgYXJyYXlQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgZm9ybUFycmF5TmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxuXG4gICAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAgJHtFeGFtcGxlcy5mb3JtQXJyYXlOYW1lfWApO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnN0YXRpYyBkaXNhYmxlZEF0dHJXYXJuaW5nKCk6IHZvaWQge1xuICAgIGNvbnNvbGUud2FybihgXG4gICAgICBJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpdGggYSByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZS4gSWYgeW91IHNldCBkaXNhYmxlZCB0byB0cnVlXG4gICAgICB3aGVuIHlvdSBzZXQgdXAgdGhpcyBjb250cm9sIGluIHlvdXIgY29tcG9uZW50IGNsYXNzLCB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpbGwgYWN0dWFsbHkgYmUgc2V0IGluIHRoZSBET00gZm9yXG4gICAgICB5b3UuIFdlIHJlY29tbWVuZCB1c2luZyB0aGlzIGFwcHJvYWNoIHRvIGF2b2lkICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9ycy5cbiAgICAgICBcbiAgICAgIEV4YW1wbGU6IFxuICAgICAgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9LCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgIH0pO1xuICAgIGApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZXJyb3JzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiwgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SU30gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycyc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnLi4vbmdfY29udHJvbCc7XG5pbXBvcnQge1JlYWN0aXZlRXJyb3JzfSBmcm9tICcuLi9yZWFjdGl2ZV9lcnJvcnMnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgaXNQcm9wZXJ0eVVwZGF0ZWQsIHNlbGVjdFZhbHVlQWNjZXNzb3IsIHNldFVwQ29udHJvbH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3IsIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBmb3JtQ29udHJvbEJpbmRpbmc6IGFueSA9IHtcbiAgcHJvdmlkZTogTmdDb250cm9sLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtQ29udHJvbERpcmVjdGl2ZSlcbn07XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgU3luY3MgYSBzdGFuZGFsb25lIHtcXEBsaW5rIEZvcm1Db250cm9sfSBpbnN0YW5jZSB0byBhIGZvcm0gY29udHJvbCBlbGVtZW50LlxuICogXG4gKiBJbiBvdGhlciB3b3JkcywgdGhpcyBkaXJlY3RpdmUgZW5zdXJlcyB0aGF0IGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9XG4gKiBpbnN0YW5jZSBwcm9ncmFtbWF0aWNhbGx5IHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgKG1vZGVsIC0+IHZpZXcpLiBDb252ZXJzZWx5LFxuICogYW55IHZhbHVlcyB3cml0dGVuIHRvIHRoZSBET00gZWxlbWVudCB0aHJvdWdoIHVzZXIgaW5wdXQgd2lsbCBiZSByZWZsZWN0ZWQgaW4gdGhlXG4gKiB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgKHZpZXcgLT4gbW9kZWwpLlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogVXNlIHRoaXMgZGlyZWN0aXZlIGlmIHlvdSdkIGxpa2UgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgYSB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgZGlyZWN0bHkuXG4gKiBTaW1wbHkgY3JlYXRlIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCBzYXZlIGl0IHRvIHlvdXIgY29tcG9uZW50IGNsYXNzLCBhbmQgcGFzcyBpdCBpbnRvIHRoZVxuICoge1xcQGxpbmsgRm9ybUNvbnRyb2xEaXJlY3RpdmV9LlxuICogXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBkZXNpZ25lZCB0byBiZSB1c2VkIGFzIGEgc3RhbmRhbG9uZSBjb250cm9sLiAgVW5saWtlIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0sXG4gKiBpdCBkb2VzIG5vdCByZXF1aXJlIHRoYXQgeW91ciB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UgYmUgcGFydCBvZiBhbnkgcGFyZW50XG4gKiB7XFxAbGluayBGb3JtR3JvdXB9LCBhbmQgaXQgd29uJ3QgYmUgcmVnaXN0ZXJlZCB0byBhbnkge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSB0aGF0XG4gKiBleGlzdHMgYWJvdmUgaXQuXG4gKiBcbiAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gKiB7XFxAbGluayBGb3JtQ29udHJvbH0gaW5zdGFuY2UuIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpblxuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAqIFxuICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gcGFzcyBpbiBhbiBpbml0aWFsIHZhbHVlIHdoZW4gaW5zdGFudGlhdGluZyB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9LFxuICogb3IgeW91IGNhbiBzZXQgaXQgcHJvZ3JhbW1hdGljYWxseSBsYXRlciB1c2luZyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wucGF0Y2hWYWx1ZX0uXG4gKiBcbiAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCwgeW91IGNhblxuICogc3Vic2NyaWJlIHRvIHRoZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzbyBsaXN0ZW4gdG9cbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICogcmUtY2FsY3VsYXRlZC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUNvbnRyb2wvc2ltcGxlX2Zvcm1fY29udHJvbF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gKiBcbiAqICBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sRGlyZWN0aXZlIGV4dGVuZHMgTmdDb250cm9sIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgdmlld01vZGVsOiBhbnk7XG5cbiAgIGZvcm06IEZvcm1Db250cm9sO1xuICAgbW9kZWw6IGFueTtcbiAgIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbi8qKlxuICogQHBhcmFtIHs/fSBpc0Rpc2FibGVkXG4gKiBAcmV0dXJuIHs/fVxuICovXG5zZXQgaXNEaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKSB7IFJlYWN0aXZlRXJyb3JzLmRpc2FibGVkQXR0cldhcm5pbmcoKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gKi9cbmNvbnN0cnVjdG9yKCAgIHZhbGlkYXRvcnM6IEFycmF5PFZhbGlkYXRvcnxWYWxpZGF0b3JGbj4sXG4gICAgICAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9yczogQXJyYXk8QXN5bmNWYWxpZGF0b3J8QXN5bmNWYWxpZGF0b3JGbj4sXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHZhbHVlQWNjZXNzb3JzOiBDb250cm9sVmFsdWVBY2Nlc3NvcltdKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yYXdWYWxpZGF0b3JzID0gdmFsaWRhdG9ycyB8fCBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yYXdBc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yID0gc2VsZWN0VmFsdWVBY2Nlc3Nvcih0aGlzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzQ29udHJvbENoYW5nZWQoY2hhbmdlcykpIHtcbiAgICAgICAgICAgICAgICAgIHNldFVwQ29udHJvbCh0aGlzLmZvcm0sIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbC5kaXNhYmxlZCAmJiB0aGlzLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLnZpZXdNb2RlbCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zZXRWYWx1ZSh0aGlzLm1vZGVsKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHBhdGgoKTogc3RyaW5nW10geyByZXR1cm4gW107IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl9yYXdWYWxpZGF0b3JzKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgYXN5bmNWYWxpZGF0b3IoKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2VBc3luY1ZhbGlkYXRvcnModGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgICAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7IHJldHVybiB0aGlzLmZvcm07IH1cbi8qKlxuICogQHBhcmFtIHs/fSBuZXdWYWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xudmlld1RvTW9kZWxVcGRhdGUobmV3VmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdChuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9pc0NvbnRyb2xDaGFuZ2VkKGNoYW5nZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogYm9vbGVhbiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe3NlbGVjdG9yOiAnW2Zvcm1Db250cm9sXScsIHByb3ZpZGVyczogW2Zvcm1Db250cm9sQmluZGluZ10sIGV4cG9ydEFzOiAnbmdGb3JtJ30sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTFVFX0FDQ0VTU09SLCBdIH0sIF19LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nZm9ybSc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Zvcm1Db250cm9sJywgXSB9LF0sXG4nbW9kZWwnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyduZ01vZGVsJywgXSB9LF0sXG4ndXBkYXRlJzogW3sgdHlwZTogT3V0cHV0LCBhcmdzOiBbJ25nTW9kZWxDaGFuZ2UnLCBdIH0sXSxcbidpc0Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZGlzYWJsZWQnLCBdIH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIEZvcm1Db250cm9sRGlyZWN0aXZlX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbERpcmVjdGl2ZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkZvcm1Db250cm9sRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUudmlld01vZGVsO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xEaXJlY3RpdmUucHJvdG90eXBlLmZvcm07XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUubW9kZWw7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbERpcmVjdGl2ZS5wcm90b3R5cGUudXBkYXRlO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9kaXJlY3RpdmUudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBPcHRpb25hbCwgT3V0cHV0LCBTZWxmLCBTaW1wbGVDaGFuZ2VzLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUFycmF5LCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvcnN9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0Zvcm19IGZyb20gJy4uL2Zvcm1faW50ZXJmYWNlJztcbmltcG9ydCB7UmVhY3RpdmVFcnJvcnN9IGZyb20gJy4uL3JlYWN0aXZlX2Vycm9ycyc7XG5pbXBvcnQge2NsZWFuVXBDb250cm9sLCBjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgc2V0VXBDb250cm9sLCBzZXRVcEZvcm1Db250YWluZXJ9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7Rm9ybUNvbnRyb2xOYW1lfSBmcm9tICcuL2Zvcm1fY29udHJvbF9uYW1lJztcbmltcG9ydCB7Rm9ybUFycmF5TmFtZSwgRm9ybUdyb3VwTmFtZX0gZnJvbSAnLi9mb3JtX2dyb3VwX25hbWUnO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBmb3JtRGlyZWN0aXZlUHJvdmlkZXI6IGFueSA9IHtcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUdyb3VwRGlyZWN0aXZlKVxufTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBCaW5kcyBhbiBleGlzdGluZyB7XFxAbGluayBGb3JtR3JvdXB9IHRvIGEgRE9NIGVsZW1lbnQuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBUaGlzIGRpcmVjdGl2ZSBhY2NlcHRzIGFuIGV4aXN0aW5nIHtcXEBsaW5rIEZvcm1Hcm91cH0gaW5zdGFuY2UuIEl0IHdpbGwgdGhlbiB1c2UgdGhpc1xuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB0byBtYXRjaCBhbnkgY2hpbGQge1xcQGxpbmsgRm9ybUNvbnRyb2x9LCB7XFxAbGluayBGb3JtR3JvdXB9LFxuICogYW5kIHtcXEBsaW5rIEZvcm1BcnJheX0gaW5zdGFuY2VzIHRvIGNoaWxkIHtcXEBsaW5rIEZvcm1Db250cm9sTmFtZX0sIHtcXEBsaW5rIEZvcm1Hcm91cE5hbWV9LFxuICogYW5kIHtcXEBsaW5rIEZvcm1BcnJheU5hbWV9IGRpcmVjdGl2ZXMuXG4gKiBcbiAqICoqU2V0IHZhbHVlKio6IFlvdSBjYW4gc2V0IHRoZSBmb3JtJ3MgaW5pdGlhbCB2YWx1ZSB3aGVuIGluc3RhbnRpYXRpbmcgdGhlXG4gKiB7XFxAbGluayBGb3JtR3JvdXB9LCBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9J3NcbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9IG1ldGhvZHMuXG4gKiBcbiAqICoqTGlzdGVuIHRvIHZhbHVlKio6IElmIHlvdSB3YW50IHRvIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSwgeW91IGNhbiBzdWJzY3JpYmVcbiAqIHRvIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9J3Mge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnZhbHVlQ2hhbmdlc30gZXZlbnQuICBZb3UgY2FuIGFsc28gbGlzdGVuIHRvXG4gKiBpdHMge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IGV2ZW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gKiByZS1jYWxjdWxhdGVkLlxuICogXG4gKiBGdXJ0aGVybW9yZSwgeW91IGNhbiBsaXN0ZW4gdG8gdGhlIGRpcmVjdGl2ZSdzIGBuZ1N1Ym1pdGAgZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdXNlciBoYXNcbiAqIHRyaWdnZXJlZCBhIGZvcm0gc3VibWlzc2lvbi4gVGhlIGBuZ1N1Ym1pdGAgZXZlbnQgd2lsbCBiZSBlbWl0dGVkIHdpdGggdGhlIG9yaWdpbmFsIGZvcm1cbiAqIHN1Ym1pc3Npb24gZXZlbnQuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIEluIHRoaXMgZXhhbXBsZSwgd2UgY3JlYXRlIGZvcm0gY29udHJvbHMgZm9yIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZS5cbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvc2ltcGxlRm9ybUdyb3VwL3NpbXBsZV9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAqKk5nTW9kdWxlKio6IHtcXEBsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9XG4gKiBcbiAqICBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cERpcmVjdGl2ZSBleHRlbmRzIENvbnRyb2xDb250YWluZXIgaW1wbGVtZW50cyBGb3JtLFxuICAgIE9uQ2hhbmdlcyB7XG5wcml2YXRlIF9zdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbnByaXZhdGUgX29sZEZvcm06IEZvcm1Hcm91cDtcbiAgZGlyZWN0aXZlczogRm9ybUNvbnRyb2xOYW1lW10gPSBbXTtcblxuICAgZm9ybTogRm9ybUdyb3VwID0gbnVsbDtcbiAgIG5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuLyoqXG4gKiBAcGFyYW0gez99IF92YWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IF9hc3luY1ZhbGlkYXRvcnNcbiAqL1xuY29uc3RydWN0b3IoXG5wcml2YXRlIF92YWxpZGF0b3JzOiBhbnlbXSxcbnByaXZhdGUgX2FzeW5jVmFsaWRhdG9yczogYW55W10pIHtcbiAgICBzdXBlcigpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xubmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuX2NoZWNrRm9ybVByZXNlbnQoKTtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZm9ybScpKSB7XG4gICAgICB0aGlzLl91cGRhdGVWYWxpZGF0b3JzKCk7XG4gICAgICB0aGlzLl91cGRhdGVEb21WYWx1ZSgpO1xuICAgICAgdGhpcy5fdXBkYXRlUmVnaXN0cmF0aW9ucygpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgc3VibWl0dGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc3VibWl0dGVkOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBmb3JtRGlyZWN0aXZlKCk6IEZvcm0geyByZXR1cm4gdGhpczsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbCgpOiBGb3JtR3JvdXAgeyByZXR1cm4gdGhpcy5mb3JtOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIFtdOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5hZGRDb250cm9sKGRpcjogRm9ybUNvbnRyb2xOYW1lKTogRm9ybUNvbnRyb2wge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY3RybDogYW55ID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgc2V0VXBDb250cm9sKGN0cmwsIGRpcik7XG4gICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gICAgdGhpcy5kaXJlY3RpdmVzLnB1c2goZGlyKTtcbiAgICByZXR1cm4gY3RybDtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0Q29udHJvbChkaXI6IEZvcm1Db250cm9sTmFtZSk6IEZvcm1Db250cm9sIHsgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUNvbnRyb2w+dGhpcy5mb3JtLmdldChkaXIucGF0aCkpKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xucmVtb3ZlQ29udHJvbChkaXI6IEZvcm1Db250cm9sTmFtZSk6IHZvaWQgeyByZW1vdmUodGhpcy5kaXJlY3RpdmVzLCBkaXIpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5hZGRGb3JtR3JvdXAoZGlyOiBGb3JtR3JvdXBOYW1lKTogdm9pZCB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjdHJsOiBhbnkgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICBzZXRVcEZvcm1Db250YWluZXIoY3RybCwgZGlyKTtcbiAgICBjdHJsLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe2VtaXRFdmVudDogZmFsc2V9KTtcbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xucmVtb3ZlRm9ybUdyb3VwKGRpcjogRm9ybUdyb3VwTmFtZSk6IHZvaWQge31cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldEZvcm1Hcm91cChkaXI6IEZvcm1Hcm91cE5hbWUpOiBGb3JtR3JvdXAgeyByZXR1cm4gLyoqIEB0eXBlIHs/fSAqLygoIDxGb3JtR3JvdXA+dGhpcy5mb3JtLmdldChkaXIucGF0aCkpKTsgfVxuLyoqXG4gKiBAcGFyYW0gez99IGRpclxuICogQHJldHVybiB7P31cbiAqL1xuYWRkRm9ybUFycmF5KGRpcjogRm9ybUFycmF5TmFtZSk6IHZvaWQge1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gY3RybDogYW55ID0gdGhpcy5mb3JtLmdldChkaXIucGF0aCk7XG4gICAgc2V0VXBGb3JtQ29udGFpbmVyKGN0cmwsIGRpcik7XG4gICAgY3RybC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtlbWl0RXZlbnQ6IGZhbHNlfSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEByZXR1cm4gez99XG4gKi9cbnJlbW92ZUZvcm1BcnJheShkaXI6IEZvcm1BcnJheU5hbWUpOiB2b2lkIHt9XG4vKipcbiAqIEBwYXJhbSB7P30gZGlyXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXRGb3JtQXJyYXkoZGlyOiBGb3JtQXJyYXlOYW1lKTogRm9ybUFycmF5IHsgcmV0dXJuIC8qKiBAdHlwZSB7P30gKi8oKCA8Rm9ybUFycmF5PnRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKSk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBkaXJcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnVwZGF0ZU1vZGVsKGRpcjogRm9ybUNvbnRyb2xOYW1lLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjdHJswqAgPSAvKiogQHR5cGUgez99ICovKCggPEZvcm1Db250cm9sPnRoaXMuZm9ybS5nZXQoZGlyLnBhdGgpKSk7XG4gICAgY3RybC5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSAkZXZlbnRcbiAqIEByZXR1cm4gez99XG4gKi9cbm9uU3VibWl0KCRldmVudDogRXZlbnQpOiBib29sZWFuIHtcbiAgICB0aGlzLl9zdWJtaXR0ZWQgPSB0cnVlO1xuICAgIHRoaXMubmdTdWJtaXQuZW1pdCgkZXZlbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5vblJlc2V0KCk6IHZvaWQgeyB0aGlzLnJlc2V0Rm9ybSgpOyB9XG4vKipcbiAqIEBwYXJhbSB7Pz19IHZhbHVlXG4gKiBAcmV0dXJuIHs/fVxuICovXG5yZXNldEZvcm0odmFsdWU6IGFueSA9IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5yZXNldCh2YWx1ZSk7XG4gICAgdGhpcy5fc3VibWl0dGVkID0gZmFsc2U7XG4gIH1cbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEByZXR1cm4gez99XG4gKi9cbl91cGRhdGVEb21WYWx1ZSgpIHtcbiAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXIgPT4ge1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBuZXdDdHJsOiBhbnkgPSB0aGlzLmZvcm0uZ2V0KGRpci5wYXRoKTtcbiAgICAgIGlmIChkaXIuX2NvbnRyb2wgIT09IG5ld0N0cmwpIHtcbiAgICAgICAgY2xlYW5VcENvbnRyb2woZGlyLl9jb250cm9sLCBkaXIpO1xuICAgICAgICBpZiAobmV3Q3RybCkgc2V0VXBDb250cm9sKG5ld0N0cmwsIGRpcik7XG4gICAgICAgIGRpci5fY29udHJvbCA9IG5ld0N0cmw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uX3VwZGF0ZVRyZWVWYWxpZGl0eSh7ZW1pdEV2ZW50OiBmYWxzZX0pO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX3VwZGF0ZVJlZ2lzdHJhdGlvbnMoKSB7XG4gICAgdGhpcy5mb3JtLl9yZWdpc3Rlck9uQ29sbGVjdGlvbkNoYW5nZSgoKSA9PiB0aGlzLl91cGRhdGVEb21WYWx1ZSgpKTtcbiAgICBpZiAodGhpcy5fb2xkRm9ybSkgdGhpcy5fb2xkRm9ybS5fcmVnaXN0ZXJPbkNvbGxlY3Rpb25DaGFuZ2UoKCkgPT4ge30pO1xuICAgIHRoaXMuX29sZEZvcm0gPSB0aGlzLmZvcm07XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfdXBkYXRlVmFsaWRhdG9ycygpIHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHN5bmMgPSBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTtcbiAgICB0aGlzLmZvcm0udmFsaWRhdG9yID0gVmFsaWRhdG9ycy5jb21wb3NlKFt0aGlzLmZvcm0udmFsaWRhdG9yLCBzeW5jXSk7XG5cbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGFzeW5jID0gY29tcG9zZUFzeW5jVmFsaWRhdG9ycyh0aGlzLl9hc3luY1ZhbGlkYXRvcnMpO1xuICAgIHRoaXMuZm9ybS5hc3luY1ZhbGlkYXRvciA9IFZhbGlkYXRvcnMuY29tcG9zZUFzeW5jKFt0aGlzLmZvcm0uYXN5bmNWYWxpZGF0b3IsIGFzeW5jXSk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2hlY2tGb3JtUHJlc2VudCgpIHtcbiAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgUmVhY3RpdmVFcnJvcnMubWlzc2luZ0Zvcm1FeGNlcHRpb24oKTtcbiAgICB9XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdbZm9ybUdyb3VwXScsXG4gIHByb3ZpZGVyczogW2Zvcm1EaXJlY3RpdmVQcm92aWRlcl0sXG4gIGhvc3Q6IHsnKHN1Ym1pdCknOiAnb25TdWJtaXQoJGV2ZW50KScsICcocmVzZXQpJzogJ29uUmVzZXQoKSd9LFxuICBleHBvcnRBczogJ25nRm9ybSdcbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidmb3JtJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZm9ybUdyb3VwJywgXSB9LF0sXG4nbmdTdWJtaXQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gRm9ybUdyb3VwRGlyZWN0aXZlX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9zdWJtaXR0ZWQ7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9vbGRGb3JtO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5kaXJlY3RpdmVzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5mb3JtO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwRGlyZWN0aXZlLnByb3RvdHlwZS5uZ1N1Ym1pdDtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Hcm91cERpcmVjdGl2ZS5wcm90b3R5cGUuX3ZhbGlkYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBEaXJlY3RpdmUucHJvdG90eXBlLl9hc3luY1ZhbGlkYXRvcnM7XG59XG5cbi8qKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7P30gbGlzdFxuICogQHBhcmFtIHs/fSBlbFxuICogQHJldHVybiB7P31cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlPFQ+KGxpc3Q6IFRbXSwgZWw6IFQpOiB2b2lkIHtcbiAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBpbmRleCA9IGxpc3QuaW5kZXhPZihlbCk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfZGlyZWN0aXZlLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBIb3N0LCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFNlbGYsIFNraXBTZWxmLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtGb3JtQXJyYXl9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7TkdfQVNZTkNfVkFMSURBVE9SUywgTkdfVkFMSURBVE9SU30gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycyc7XG5pbXBvcnQge0Fic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuLi9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4uL2NvbnRyb2xfY29udGFpbmVyJztcbmltcG9ydCB7UmVhY3RpdmVFcnJvcnN9IGZyb20gJy4uL3JlYWN0aXZlX2Vycm9ycyc7XG5pbXBvcnQge2NvbXBvc2VBc3luY1ZhbGlkYXRvcnMsIGNvbXBvc2VWYWxpZGF0b3JzLCBjb250cm9sUGF0aH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7QXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yRm59IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5pbXBvcnQge0Zvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIGZvcm1Hcm91cE5hbWVQcm92aWRlcjogYW55ID0ge1xuICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtR3JvdXBOYW1lKVxufTtcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBTeW5jcyBhIG5lc3RlZCB7XFxAbGluayBGb3JtR3JvdXB9IHRvIGEgRE9NIGVsZW1lbnQuXG4gKiBcbiAqIFxcQGhvd1RvVXNlIFxuICogXG4gKiBUaGlzIGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIHdpdGggYSBwYXJlbnQge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfSAoc2VsZWN0b3I6XG4gKiBgW2Zvcm1Hcm91cF1gKS5cbiAqIFxuICogSXQgYWNjZXB0cyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIG5lc3RlZCB7XFxAbGluayBGb3JtR3JvdXB9IHlvdSB3YW50IHRvIGxpbmssIGFuZFxuICogd2lsbCBsb29rIGZvciBhIHtcXEBsaW5rIEZvcm1Hcm91cH0gcmVnaXN0ZXJlZCB3aXRoIHRoYXQgbmFtZSBpbiB0aGUgcGFyZW50XG4gKiB7XFxAbGluayBGb3JtR3JvdXB9IGluc3RhbmNlIHlvdSBwYXNzZWQgaW50byB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9LlxuICogXG4gKiBOZXN0ZWQgZm9ybSBncm91cHMgY2FuIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byB2YWxpZGF0ZSBhIHN1Yi1ncm91cCBvZiBhXG4gKiBmb3JtIHNlcGFyYXRlbHkgZnJvbSB0aGUgcmVzdCBvciB3aGVuIHlvdSdkIGxpa2UgdG8gZ3JvdXAgdGhlIHZhbHVlcyBvZiBjZXJ0YWluXG4gKiBjb250cm9scyBpbnRvIHRoZWlyIG93biBuZXN0ZWQgb2JqZWN0LlxuICogXG4gKiAqKkFjY2VzcyB0aGUgZ3JvdXAqKjogWW91IGNhbiBhY2Nlc3MgdGhlIGFzc29jaWF0ZWQge1xcQGxpbmsgRm9ybUdyb3VwfSB1c2luZyB0aGVcbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IG1ldGhvZC4gRXg6IGB0aGlzLmZvcm0uZ2V0KCduYW1lJylgLlxuICogXG4gKiBZb3UgY2FuIGFsc28gYWNjZXNzIGluZGl2aWR1YWwgY29udHJvbHMgd2l0aGluIHRoZSBncm91cCB1c2luZyBkb3Qgc3ludGF4LlxuICogRXg6IGB0aGlzLmZvcm0uZ2V0KCduYW1lLmZpcnN0JylgXG4gKiBcbiAqICoqR2V0IHRoZSB2YWx1ZSoqOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBpcyBhbHdheXMgc3luY2VkIGFuZCBhdmFpbGFibGUgb24gdGhlXG4gKiB7XFxAbGluayBGb3JtR3JvdXB9LiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAqIFxuICogKipTZXQgdGhlIHZhbHVlKio6IFlvdSBjYW4gc2V0IGFuIGluaXRpYWwgdmFsdWUgZm9yIGVhY2ggY2hpbGQgY29udHJvbCB3aGVuIGluc3RhbnRpYXRpbmdcbiAqIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9LCBvciB5b3UgY2FuIHNldCBpdCBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nXG4gKiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAqIFxuICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBncm91cCwgeW91IGNhblxuICogc3Vic2NyaWJlIHRvIHRoZSB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzbyBsaXN0ZW4gdG9cbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zdGF0dXNDaGFuZ2VzfSB0byBiZSBub3RpZmllZCB3aGVuIHRoZSB2YWxpZGF0aW9uIHN0YXR1cyBpc1xuICogcmUtY2FsY3VsYXRlZC5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICoge1xcQGV4YW1wbGUgZm9ybXMvdHMvbmVzdGVkRm9ybUdyb3VwL25lc3RlZF9mb3JtX2dyb3VwX2V4YW1wbGUudHMgcmVnaW9uPSdDb21wb25lbnQnfVxuICogXG4gKiAqICoqbnBtIHBhY2thZ2UqKjogYFxcQGFuZ3VsYXIvZm9ybXNgXG4gKiBcbiAqICogKipOZ01vZHVsZSoqOiBgUmVhY3RpdmVGb3Jtc01vZHVsZWBcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXBOYW1lIGV4dGVuZHMgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICBuYW1lOiBzdHJpbmc7XG4vKipcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gKi9cbmNvbnN0cnVjdG9yKFxuICAgICAgICAgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgdmFsaWRhdG9yczogYW55W10sXG4gICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IGFueVtdKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fdmFsaWRhdG9ycyA9IHZhbGlkYXRvcnM7XG4gICAgdGhpcy5fYXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcmV0dXJuIHs/fVxuICovXG5fY2hlY2tQYXJlbnRUeXBlKCk6IHZvaWQge1xuICAgIGlmIChfaGFzSW52YWxpZFBhcmVudCh0aGlzLl9wYXJlbnQpKSB7XG4gICAgICBSZWFjdGl2ZUVycm9ycy5ncm91cFBhcmVudEV4Y2VwdGlvbigpO1xuICAgIH1cbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe3NlbGVjdG9yOiAnW2Zvcm1Hcm91cE5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUdyb3VwTmFtZVByb3ZpZGVyXX0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sIHsgdHlwZTogU2tpcFNlbGYgfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbiduYW1lJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZm9ybUdyb3VwTmFtZScsIF0gfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gRm9ybUdyb3VwTmFtZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwTmFtZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkZvcm1Hcm91cE5hbWUuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtR3JvdXBOYW1lLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUdyb3VwTmFtZS5wcm90b3R5cGUubmFtZTtcbn1cblxuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBmb3JtQXJyYXlOYW1lUHJvdmlkZXI6IGFueSA9IHtcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUFycmF5TmFtZSlcbn07XG4vKipcbiAqIFxcQHdoYXRJdERvZXMgU3luY3MgYSBuZXN0ZWQge1xcQGxpbmsgRm9ybUFycmF5fSB0byBhIERPTSBlbGVtZW50LlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogVGhpcyBkaXJlY3RpdmUgaXMgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIGEgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cERpcmVjdGl2ZX0gKHNlbGVjdG9yOlxuICogYFtmb3JtR3JvdXBdYCkuXG4gKiBcbiAqIEl0IGFjY2VwdHMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBuZXN0ZWQge1xcQGxpbmsgRm9ybUFycmF5fSB5b3Ugd2FudCB0byBsaW5rLCBhbmRcbiAqIHdpbGwgbG9vayBmb3IgYSB7XFxAbGluayBGb3JtQXJyYXl9IHJlZ2lzdGVyZWQgd2l0aCB0aGF0IG5hbWUgaW4gdGhlIHBhcmVudFxuICoge1xcQGxpbmsgRm9ybUdyb3VwfSBpbnN0YW5jZSB5b3UgcGFzc2VkIGludG8ge1xcQGxpbmsgRm9ybUdyb3VwRGlyZWN0aXZlfS5cbiAqIFxuICogTmVzdGVkIGZvcm0gYXJyYXlzIGNhbiBjb21lIGluIGhhbmR5IHdoZW4geW91IGhhdmUgYSBncm91cCBvZiBmb3JtIGNvbnRyb2xzIGJ1dFxuICogeW91J3JlIG5vdCBzdXJlIGhvdyBtYW55IHRoZXJlIHdpbGwgYmUuIEZvcm0gYXJyYXlzIGFsbG93IHlvdSB0byBjcmVhdGUgbmV3XG4gKiBmb3JtIGNvbnRyb2xzIGR5bmFtaWNhbGx5LlxuICogXG4gKiAqKkFjY2VzcyB0aGUgYXJyYXkqKjogWW91IGNhbiBhY2Nlc3MgdGhlIGFzc29jaWF0ZWQge1xcQGxpbmsgRm9ybUFycmF5fSB1c2luZyB0aGVcbiAqIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5nZXR9IG1ldGhvZCBvbiB0aGUgcGFyZW50IHtcXEBsaW5rIEZvcm1Hcm91cH0uXG4gKiBFeDogYHRoaXMuZm9ybS5nZXQoJ2NpdGllcycpYC5cbiAqIFxuICogKipHZXQgdGhlIHZhbHVlKio6IHRoZSBgdmFsdWVgIHByb3BlcnR5IGlzIGFsd2F5cyBzeW5jZWQgYW5kIGF2YWlsYWJsZSBvbiB0aGVcbiAqIHtcXEBsaW5rIEZvcm1BcnJheX0uIFNlZSBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgcHJvcGVydGllcyBpbiB7XFxAbGluayBBYnN0cmFjdENvbnRyb2x9LlxuICogXG4gKiAqKlNldCB0aGUgdmFsdWUqKjogWW91IGNhbiBzZXQgYW4gaW5pdGlhbCB2YWx1ZSBmb3IgZWFjaCBjaGlsZCBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZ1xuICogdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0sIG9yIHlvdSBjYW4gc2V0IHRoZSB2YWx1ZSBwcm9ncmFtbWF0aWNhbGx5IGxhdGVyIHVzaW5nIHRoZVxuICoge1xcQGxpbmsgRm9ybUFycmF5fSdzIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5zZXRWYWx1ZX0gb3Ige1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnBhdGNoVmFsdWV9XG4gKiBtZXRob2RzLlxuICogXG4gKiAqKkxpc3RlbiB0byB2YWx1ZSoqOiBJZiB5b3Ugd2FudCB0byBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgdmFsdWUgb2YgdGhlIGFycmF5LCB5b3UgY2FuXG4gKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0ncyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wudmFsdWVDaGFuZ2VzfSBldmVudC4gIFlvdSBjYW4gYWxzb1xuICogbGlzdGVuIHRvIGl0cyB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc3RhdHVzQ2hhbmdlc30gZXZlbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGUgdmFsaWRhdGlvblxuICogc3RhdHVzIGlzIHJlLWNhbGN1bGF0ZWQuXG4gKiBcbiAqICoqQWRkIG5ldyBjb250cm9scyoqOiBZb3UgY2FuIGFkZCBuZXcgY29udHJvbHMgdG8gdGhlIHtcXEBsaW5rIEZvcm1BcnJheX0gZHluYW1pY2FsbHkgYnlcbiAqIGNhbGxpbmcgaXRzIHtcXEBsaW5rIEZvcm1BcnJheS5wdXNofSBtZXRob2QuXG4gKiAgRXg6IGB0aGlzLmZvcm0uZ2V0KCdjaXRpZXMnKS5wdXNoKG5ldyBGb3JtQ29udHJvbCgpKTtgXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL25lc3RlZEZvcm1BcnJheS9uZXN0ZWRfZm9ybV9hcnJheV9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAqICoqTmdNb2R1bGUqKjogYFJlYWN0aXZlRm9ybXNNb2R1bGVgXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5TmFtZSBleHRlbmRzIENvbnRyb2xDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl9wYXJlbnQ6IENvbnRyb2xDb250YWluZXI7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbl92YWxpZGF0b3JzOiBhbnlbXTtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqL1xuX2FzeW5jVmFsaWRhdG9yczogYW55W107XG5cbiAgIG5hbWU6IHN0cmluZztcbi8qKlxuICogQHBhcmFtIHs/fSBwYXJlbnRcbiAqIEBwYXJhbSB7P30gdmFsaWRhdG9yc1xuICogQHBhcmFtIHs/fSBhc3luY1ZhbGlkYXRvcnNcbiAqL1xuY29uc3RydWN0b3IoXG4gICAgICAgICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICB2YWxpZGF0b3JzOiBhbnlbXSxcbiAgICAgICAgIGFzeW5jVmFsaWRhdG9yczogYW55W10pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLl92YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbiAgICB0aGlzLl9hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tQYXJlbnRUeXBlKCk7XG4gICAgdGhpcy5mb3JtRGlyZWN0aXZlLmFkZEZvcm1BcnJheSh0aGlzKTtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtRGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVtb3ZlRm9ybUFycmF5KHRoaXMpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgY29udHJvbCgpOiBGb3JtQXJyYXkgeyByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlLmdldEZvcm1BcnJheSh0aGlzKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZm9ybURpcmVjdGl2ZSgpOiBGb3JtR3JvdXBEaXJlY3RpdmUge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQgPyAvKiogQHR5cGUgez99ICovKCggPEZvcm1Hcm91cERpcmVjdGl2ZT50aGlzLl9wYXJlbnQuZm9ybURpcmVjdGl2ZSkpIDogbnVsbDtcbiAgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcGF0aCgpOiBzdHJpbmdbXSB7IHJldHVybiBjb250cm9sUGF0aCh0aGlzLm5hbWUsIHRoaXMuX3BhcmVudCk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7IHJldHVybiBjb21wb3NlVmFsaWRhdG9ycyh0aGlzLl92YWxpZGF0b3JzKTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgYXN5bmNWYWxpZGF0b3IoKTogQXN5bmNWYWxpZGF0b3JGbiB7IHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX2FzeW5jVmFsaWRhdG9ycyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfY2hlY2tQYXJlbnRUeXBlKCk6IHZvaWQge1xuICAgIGlmIChfaGFzSW52YWxpZFBhcmVudCh0aGlzLl9wYXJlbnQpKSB7XG4gICAgICBSZWFjdGl2ZUVycm9ycy5hcnJheVBhcmVudEV4Y2VwdGlvbigpO1xuICAgIH1cbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe3NlbGVjdG9yOiAnW2Zvcm1BcnJheU5hbWVdJywgcHJvdmlkZXJzOiBbZm9ybUFycmF5TmFtZVByb3ZpZGVyXX0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogQ29udHJvbENvbnRhaW5lciwgZGVjb3JhdG9yczogW3sgdHlwZTogT3B0aW9uYWwgfSwgeyB0eXBlOiBIb3N0IH0sIHsgdHlwZTogU2tpcFNlbGYgfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG57dHlwZTogQXJyYXksIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogU2VsZiB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW05HX0FTWU5DX1ZBTElEQVRPUlMsIF0gfSwgXX0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbiduYW1lJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnZm9ybUFycmF5TmFtZScsIF0gfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gRm9ybUFycmF5TmFtZV90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUFycmF5TmFtZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkZvcm1BcnJheU5hbWUuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQXJyYXlOYW1lLnByb3BEZWNvcmF0b3JzO1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHR5cGUgez99XG4gKi9cbkZvcm1BcnJheU5hbWUucHJvdG90eXBlLl9wYXJlbnQ7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUFycmF5TmFtZS5wcm90b3R5cGUuX3ZhbGlkYXRvcnM7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAdHlwZSB7P31cbiAqL1xuRm9ybUFycmF5TmFtZS5wcm90b3R5cGUuX2FzeW5jVmFsaWRhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1BcnJheU5hbWUucHJvdG90eXBlLm5hbWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHs/fSBwYXJlbnRcbiAqIEByZXR1cm4gez99XG4gKi9cbmZ1bmN0aW9uIF9oYXNJbnZhbGlkUGFyZW50KHBhcmVudDogQ29udHJvbENvbnRhaW5lcik6IGJvb2xlYW4ge1xuICByZXR1cm4gIShwYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBOYW1lKSAmJiAhKHBhcmVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cERpcmVjdGl2ZSkgJiZcbiAgICAgICEocGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSk7XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZS50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0LCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiwgU2ltcGxlQ2hhbmdlcywgU2tpcFNlbGYsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQge05HX0FTWU5DX1ZBTElEQVRPUlMsIE5HX1ZBTElEQVRPUlN9IGZyb20gJy4uLy4uL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IHtBYnN0cmFjdEZvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi4vYWJzdHJhY3RfZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICcuLi9jb250cm9sX2NvbnRhaW5lcic7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi4vY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnLi4vbmdfY29udHJvbCc7XG5pbXBvcnQge1JlYWN0aXZlRXJyb3JzfSBmcm9tICcuLi9yZWFjdGl2ZV9lcnJvcnMnO1xuaW1wb3J0IHtjb21wb3NlQXN5bmNWYWxpZGF0b3JzLCBjb21wb3NlVmFsaWRhdG9ycywgY29udHJvbFBhdGgsIGlzUHJvcGVydHlVcGRhdGVkLCBzZWxlY3RWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvciwgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbn0gZnJvbSAnLi4vdmFsaWRhdG9ycyc7XG5cbmltcG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmltcG9ydCB7Rm9ybUFycmF5TmFtZSwgRm9ybUdyb3VwTmFtZX0gZnJvbSAnLi9mb3JtX2dyb3VwX25hbWUnO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sTmFtZUJpbmRpbmc6IGFueSA9IHtcbiAgcHJvdmlkZTogTmdDb250cm9sLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtQ29udHJvbE5hbWUpXG59O1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIFN5bmNzIGEge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluIGFuIGV4aXN0aW5nIHtcXEBsaW5rIEZvcm1Hcm91cH0gdG8gYSBmb3JtIGNvbnRyb2xcbiAqIGVsZW1lbnQgYnkgbmFtZS5cbiAqIFxuICogSW4gb3RoZXIgd29yZHMsIHRoaXMgZGlyZWN0aXZlIGVuc3VyZXMgdGhhdCBhbnkgdmFsdWVzIHdyaXR0ZW4gdG8gdGhlIHtcXEBsaW5rIEZvcm1Db250cm9sfVxuICogaW5zdGFuY2UgcHJvZ3JhbW1hdGljYWxseSB3aWxsIGJlIHdyaXR0ZW4gdG8gdGhlIERPTSBlbGVtZW50IChtb2RlbCAtPiB2aWV3KS4gQ29udmVyc2VseSxcbiAqIGFueSB2YWx1ZXMgd3JpdHRlbiB0byB0aGUgRE9NIGVsZW1lbnQgdGhyb3VnaCB1c2VyIGlucHV0IHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZVxuICoge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlICh2aWV3IC0+IG1vZGVsKS5cbiAqIFxuICogXFxAaG93VG9Vc2UgXG4gKiBcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBhIHBhcmVudCB7XFxAbGluayBGb3JtR3JvdXBEaXJlY3RpdmV9IChzZWxlY3RvcjpcbiAqIGBbZm9ybUdyb3VwXWApLlxuICogXG4gKiBJdCBhY2NlcHRzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUge1xcQGxpbmsgRm9ybUNvbnRyb2x9IGluc3RhbmNlIHlvdSB3YW50IHRvXG4gKiBsaW5rLCBhbmQgd2lsbCBsb29rIGZvciBhIHtcXEBsaW5rIEZvcm1Db250cm9sfSByZWdpc3RlcmVkIHdpdGggdGhhdCBuYW1lIGluIHRoZVxuICogY2xvc2VzdCB7XFxAbGluayBGb3JtR3JvdXB9IG9yIHtcXEBsaW5rIEZvcm1BcnJheX0gYWJvdmUgaXQuXG4gKiBcbiAqICoqQWNjZXNzIHRoZSBjb250cm9sKio6IFlvdSBjYW4gYWNjZXNzIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0gYXNzb2NpYXRlZCB3aXRoXG4gKiB0aGlzIGRpcmVjdGl2ZSBieSB1c2luZyB0aGUge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLmdldH0gbWV0aG9kLlxuICogRXg6IGB0aGlzLmZvcm0uZ2V0KCdmaXJzdCcpO2BcbiAqIFxuICogKipHZXQgdmFsdWUqKjogdGhlIGB2YWx1ZWAgcHJvcGVydHkgaXMgYWx3YXlzIHN5bmNlZCBhbmQgYXZhaWxhYmxlIG9uIHRoZSB7XFxAbGluayBGb3JtQ29udHJvbH0uXG4gKiBTZWUgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIHByb3BlcnRpZXMgaW4ge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sfS5cbiAqIFxuICogICoqU2V0IHZhbHVlKio6IFlvdSBjYW4gc2V0IGFuIGluaXRpYWwgdmFsdWUgZm9yIHRoZSBjb250cm9sIHdoZW4gaW5zdGFudGlhdGluZyB0aGVcbiAqICB7XFxAbGluayBGb3JtQ29udHJvbH0sIG9yIHlvdSBjYW4gc2V0IGl0IHByb2dyYW1tYXRpY2FsbHkgbGF0ZXIgdXNpbmdcbiAqICB7XFxAbGluayBBYnN0cmFjdENvbnRyb2wuc2V0VmFsdWV9IG9yIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC5wYXRjaFZhbHVlfS5cbiAqIFxuICogKipMaXN0ZW4gdG8gdmFsdWUqKjogSWYgeW91IHdhbnQgdG8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLCB5b3UgY2FuXG4gKiBzdWJzY3JpYmUgdG8gdGhlIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbC52YWx1ZUNoYW5nZXN9IGV2ZW50LiAgWW91IGNhbiBhbHNvIGxpc3RlbiB0b1xuICoge1xcQGxpbmsgQWJzdHJhY3RDb250cm9sLnN0YXR1c0NoYW5nZXN9IHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIGlzXG4gKiByZS1jYWxjdWxhdGVkLlxuICogXG4gKiAjIyMgRXhhbXBsZVxuICogXG4gKiBJbiB0aGlzIGV4YW1wbGUsIHdlIGNyZWF0ZSBmb3JtIGNvbnRyb2xzIGZvciBmaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWUuXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL3NpbXBsZUZvcm1Hcm91cC9zaW1wbGVfZm9ybV9ncm91cF9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogVG8gc2VlIGBmb3JtQ29udHJvbE5hbWVgIGV4YW1wbGVzIHdpdGggZGlmZmVyZW50IGZvcm0gY29udHJvbCB0eXBlcywgc2VlOlxuICogXG4gKiAqIFJhZGlvIGJ1dHRvbnM6IHtcXEBsaW5rIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9XG4gKiAqIFNlbGVjdHM6IHtcXEBsaW5rIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfVxuICogXG4gKiAqKm5wbSBwYWNrYWdlKio6IGBcXEBhbmd1bGFyL2Zvcm1zYFxuICogXG4gKiAqKk5nTW9kdWxlKio6IHtcXEBsaW5rIFJlYWN0aXZlRm9ybXNNb2R1bGV9XG4gKiBcbiAqICBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sTmFtZSBleHRlbmRzIE5nQ29udHJvbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbnByaXZhdGUgX2FkZGVkID0gZmFsc2U7XG4vKipcbiAqIFxcQGludGVybmFsXG4gKi9cbnZpZXdNb2RlbDogYW55O1xuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICovXG5fY29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgIG5hbWU6IHN0cmluZztcblxuICAvLyBUT0RPKGthcmEpOiAgUmVwbGFjZSBuZ01vZGVsIHdpdGggcmVhY3RpdmUgQVBJXG4gICBtb2RlbDogYW55O1xuICAgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuLyoqXG4gKiBAcGFyYW0gez99IGlzRGlzYWJsZWRcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCBpc0Rpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHsgUmVhY3RpdmVFcnJvcnMuZGlzYWJsZWRBdHRyV2FybmluZygpOyB9XG4vKipcbiAqIEBwYXJhbSB7P30gcGFyZW50XG4gKiBAcGFyYW0gez99IHZhbGlkYXRvcnNcbiAqIEBwYXJhbSB7P30gYXN5bmNWYWxpZGF0b3JzXG4gKiBAcGFyYW0gez99IHZhbHVlQWNjZXNzb3JzXG4gKi9cbmNvbnN0cnVjdG9yKFxuICAgICAgICAgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgdmFsaWRhdG9yczogQXJyYXk8VmFsaWRhdG9yfFZhbGlkYXRvckZuPixcbiAgICAgICAgIGFzeW5jVmFsaWRhdG9yczpcbiAgICAgICAgICBBcnJheTxBc3luY1ZhbGlkYXRvcnxBc3luY1ZhbGlkYXRvckZuPixcbiAgICAgICAgIHZhbHVlQWNjZXNzb3JzOiBDb250cm9sVmFsdWVBY2Nlc3NvcltdKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fcmF3VmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMgfHwgW107XG4gICAgdGhpcy5fcmF3QXN5bmNWYWxpZGF0b3JzID0gYXN5bmNWYWxpZGF0b3JzIHx8IFtdO1xuICAgIHRoaXMudmFsdWVBY2Nlc3NvciA9IHNlbGVjdFZhbHVlQWNjZXNzb3IodGhpcywgdmFsdWVBY2Nlc3NvcnMpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY2hhbmdlc1xuICogQHJldHVybiB7P31cbiAqL1xubmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5fYWRkZWQpIHRoaXMuX3NldFVwQ29udHJvbCgpO1xuICAgIGlmIChpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLnZpZXdNb2RlbCkpIHtcbiAgICAgIHRoaXMudmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS51cGRhdGVNb2RlbCh0aGlzLCB0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xubmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybURpcmVjdGl2ZSkge1xuICAgICAgdGhpcy5mb3JtRGlyZWN0aXZlLnJlbW92ZUNvbnRyb2wodGhpcyk7XG4gICAgfVxuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gbmV3VmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnZpZXdUb01vZGVsVXBkYXRlKG5ld1ZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdNb2RlbCA9IG5ld1ZhbHVlO1xuICAgIHRoaXMudXBkYXRlLmVtaXQobmV3VmFsdWUpO1xuICB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIGNvbnRyb2xQYXRoKHRoaXMubmFtZSwgdGhpcy5fcGFyZW50KTsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgZm9ybURpcmVjdGl2ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fcGFyZW50ID8gdGhpcy5fcGFyZW50LmZvcm1EaXJlY3RpdmUgOiBudWxsOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbmdldCB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4geyByZXR1cm4gY29tcG9zZVZhbGlkYXRvcnModGhpcy5fcmF3VmFsaWRhdG9ycyk7IH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGFzeW5jVmFsaWRhdG9yKCk6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiBjb21wb3NlQXN5bmNWYWxpZGF0b3JzKHRoaXMuX3Jhd0FzeW5jVmFsaWRhdG9ycyk7XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xuZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wgeyByZXR1cm4gdGhpcy5fY29udHJvbDsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jaGVja1BhcmVudFR5cGUoKTogdm9pZCB7XG4gICAgaWYgKCEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiZcbiAgICAgICAgdGhpcy5fcGFyZW50IGluc3RhbmNlb2YgQWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmUpIHtcbiAgICAgIFJlYWN0aXZlRXJyb3JzLm5nTW9kZWxHcm91cEV4Y2VwdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwTmFtZSkgJiYgISh0aGlzLl9wYXJlbnQgaW5zdGFuY2VvZiBGb3JtR3JvdXBEaXJlY3RpdmUpICYmXG4gICAgICAgICEodGhpcy5fcGFyZW50IGluc3RhbmNlb2YgRm9ybUFycmF5TmFtZSkpIHtcbiAgICAgIFJlYWN0aXZlRXJyb3JzLmNvbnRyb2xQYXJlbnRFeGNlcHRpb24oKTtcbiAgICB9XG4gIH1cbi8qKlxuICogQHJldHVybiB7P31cbiAqL1xucHJpdmF0ZSBfc2V0VXBDb250cm9sKCkge1xuICAgIHRoaXMuX2NoZWNrUGFyZW50VHlwZSgpO1xuICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLmZvcm1EaXJlY3RpdmUuYWRkQ29udHJvbCh0aGlzKTtcbiAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkICYmIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKSB7XG4gICAgICB0aGlzLnZhbHVlQWNjZXNzb3Iuc2V0RGlzYWJsZWRTdGF0ZSh0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5fYWRkZWQgPSB0cnVlO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7c2VsZWN0b3I6ICdbZm9ybUNvbnRyb2xOYW1lXScsIHByb3ZpZGVyczogW2NvbnRyb2xOYW1lQmluZGluZ119LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IENvbnRyb2xDb250YWluZXIsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sIHsgdHlwZTogSG9zdCB9LCB7IHR5cGU6IFNraXBTZWxmIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19BU1lOQ19WQUxJREFUT1JTLCBdIH0sIF19LFxue3R5cGU6IEFycmF5LCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IFNlbGYgfSwgeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtOR19WQUxVRV9BQ0NFU1NPUiwgXSB9LCBdfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25hbWUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydmb3JtQ29udHJvbE5hbWUnLCBdIH0sXSxcbidtb2RlbCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ25nTW9kZWwnLCBdIH0sXSxcbid1cGRhdGUnOiBbeyB0eXBlOiBPdXRwdXQsIGFyZ3M6IFsnbmdNb2RlbENoYW5nZScsIF0gfSxdLFxuJ2lzRGlzYWJsZWQnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydkaXNhYmxlZCcsIF0gfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gRm9ybUNvbnRyb2xOYW1lX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbE5hbWUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQ29udHJvbE5hbWUuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbE5hbWUucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5Gb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLl9hZGRlZDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLnZpZXdNb2RlbDtcbi8qKlxuICogXFxAaW50ZXJuYWxcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQ29udHJvbE5hbWUucHJvdG90eXBlLl9jb250cm9sO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5uYW1lO1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUNvbnRyb2xOYW1lLnByb3RvdHlwZS5tb2RlbDtcbi8qKiBAdHlwZSB7P30gKi9cbkZvcm1Db250cm9sTmFtZS5wcm90b3R5cGUudXBkYXRlO1xufVxuXG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3Jtcy9zcmMvZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9uYW1lLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBQcm92aWRlciwgU2ltcGxlQ2hhbmdlcywgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnLi4vbW9kZWwnO1xuaW1wb3J0IHtOR19WQUxJREFUT1JTLCBWYWxpZGF0b3JzfSBmcm9tICcuLi92YWxpZGF0b3JzJztcblxuLyoqIEBleHBlcmltZW50YWwgKi9cbmV4cG9ydCB0eXBlIFZhbGlkYXRpb25FcnJvcnMgPSB7XG4gIFtrZXk6IHN0cmluZ106IGFueVxufTtcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2UgdGhhdCBjYW4gYmUgaW1wbGVtZW50ZWQgYnkgY2xhc3NlcyB0aGF0IGNhbiBhY3QgYXMgdmFsaWRhdG9ycy5cbiAqXG4gKiAjIyBVc2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBEaXJlY3RpdmUoe1xuICogICBzZWxlY3RvcjogJ1tjdXN0b20tdmFsaWRhdG9yXScsXG4gKiAgIHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogQ3VzdG9tVmFsaWRhdG9yRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZX1dXG4gKiB9KVxuICogY2xhc3MgQ3VzdG9tVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAqICAgdmFsaWRhdGUoYzogQ29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAqICAgICByZXR1cm4ge1wiY3VzdG9tXCI6IHRydWV9O1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAc3RhYmxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsO1xuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlPyhmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XG59XG5cbi8qKiBAZXhwZXJpbWVudGFsICovXG5leHBvcnQgaW50ZXJmYWNlIEFzeW5jVmFsaWRhdG9yIGV4dGVuZHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzfG51bGw+fE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9yc3xudWxsPjtcbn1cblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gUkVRVUlSRURfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmVxdWlyZWRWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gQ0hFQ0tCT1hfUkVRVUlSRURfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBBIERpcmVjdGl2ZSB0aGF0IGFkZHMgdGhlIGByZXF1aXJlZGAgdmFsaWRhdG9yIHRvIGFueSBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAqIGByZXF1aXJlZGAgYXR0cmlidXRlLCB2aWEgdGhlIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogPGlucHV0IG5hbWU9XCJmdWxsTmFtZVwiIG5nTW9kZWwgcmVxdWlyZWQ+XG4gKiBgYGBcbiAqIFxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1aXJlZFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5wcml2YXRlIF9yZXF1aXJlZDogYm9vbGVhbjtcbnByaXZhdGUgX29uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5nZXQgcmVxdWlyZWQoKTogYm9vbGVhbnxzdHJpbmcgeyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cbi8qKlxuICogQHBhcmFtIHs/fSB2YWx1ZVxuICogQHJldHVybiB7P31cbiAqL1xuc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFufHN0cmluZykge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBjXG4gKiBAcmV0dXJuIHs/fVxuICovXG52YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkID8gVmFsaWRhdG9ycy5yZXF1aXJlZChjKSA6IG51bGw7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJzpub3QoW3R5cGU9Y2hlY2tib3hdKVtyZXF1aXJlZF1bZm9ybUNvbnRyb2xOYW1lXSw6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW2Zvcm1Db250cm9sXSw6bm90KFt0eXBlPWNoZWNrYm94XSlbcmVxdWlyZWRdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbUkVRVUlSRURfVkFMSURBVE9SXSxcbiAgaG9zdDogeydbYXR0ci5yZXF1aXJlZF0nOiAncmVxdWlyZWQgPyBcIlwiIDogbnVsbCd9XG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4ncmVxdWlyZWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBSZXF1aXJlZFZhbGlkYXRvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuUmVxdWlyZWRWYWxpZGF0b3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5SZXF1aXJlZFZhbGlkYXRvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cblJlcXVpcmVkVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuUmVxdWlyZWRWYWxpZGF0b3IucHJvdG90eXBlLl9yZXF1aXJlZDtcbi8qKiBAdHlwZSB7P30gKi9cblJlcXVpcmVkVmFsaWRhdG9yLnByb3RvdHlwZS5fb25DaGFuZ2U7XG59XG5cbi8qKlxuICogQSBEaXJlY3RpdmUgdGhhdCBhZGRzIHRoZSBgcmVxdWlyZWRgIHZhbGlkYXRvciB0byBjaGVja2JveCBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAqIGByZXF1aXJlZGAgYXR0cmlidXRlLCB2aWEgdGhlIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhY3RpdmVcIiBuZ01vZGVsIHJlcXVpcmVkPlxuICogYGBgXG4gKiBcbiAqIFxcQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvciBleHRlbmRzIFJlcXVpcmVkVmFsaWRhdG9yIHtcbi8qKlxuICogQHBhcmFtIHs/fSBjXG4gKiBAcmV0dXJuIHs/fVxuICovXG52YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkID8gVmFsaWRhdG9ycy5yZXF1aXJlZFRydWUoYykgOiBudWxsO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOlxuICAgICAgJ2lucHV0W3R5cGU9Y2hlY2tib3hdW3JlcXVpcmVkXVtmb3JtQ29udHJvbE5hbWVdLGlucHV0W3R5cGU9Y2hlY2tib3hdW3JlcXVpcmVkXVtmb3JtQ29udHJvbF0saW5wdXRbdHlwZT1jaGVja2JveF1bcmVxdWlyZWRdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfUkVRVUlSRURfVkFMSURBVE9SXSxcbiAgaG9zdDogeydbYXR0ci5yZXF1aXJlZF0nOiAncmVxdWlyZWQgPyBcIlwiIDogbnVsbCd9XG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuZnVuY3Rpb24gQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvci5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkNoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnM7XG59XG5cblxuLyoqXG4gKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBFbWFpbFZhbGlkYXRvcn0gdG8ge0BsaW5rIE5HX1ZBTElEQVRPUlN9LlxuICovXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBFTUFJTF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRW1haWxWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQSBEaXJlY3RpdmUgdGhhdCBhZGRzIHRoZSBgZW1haWxgIHZhbGlkYXRvciB0byBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAqIGBlbWFpbGAgYXR0cmlidXRlLCB2aWEgdGhlIHtcXEBsaW5rIE5HX1ZBTElEQVRPUlN9IGJpbmRpbmcuXG4gKiBcbiAqICMjIyBFeGFtcGxlXG4gKiBcbiAqIGBgYFxuICogPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG5nTW9kZWwgZW1haWw+XG4gKiA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgbmdNb2RlbCBlbWFpbD1cInRydWVcIj5cbiAqIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBuZ01vZGVsIFtlbWFpbF09XCJ0cnVlXCI+XG4gKiBgYGBcbiAqIFxuICogXFxAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG5wcml2YXRlIF9lbmFibGVkOiBib29sZWFuO1xucHJpdmF0ZSBfb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG4vKipcbiAqIEBwYXJhbSB7P30gdmFsdWVcbiAqIEByZXR1cm4gez99XG4gKi9cbnNldCBlbWFpbCh2YWx1ZTogYm9vbGVhbnxzdHJpbmcpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSAndHJ1ZSc7XG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB0aGlzLl9vbkNoYW5nZSgpO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY1xuICogQHJldHVybiB7P31cbiAqL1xudmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZCA/IFZhbGlkYXRvcnMuZW1haWwoYykgOiBudWxsO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1tlbWFpbF1bZm9ybUNvbnRyb2xOYW1lXSxbZW1haWxdW2Zvcm1Db250cm9sXSxbZW1haWxdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbRU1BSUxfVkFMSURBVE9SXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2VtYWlsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gRW1haWxWYWxpZGF0b3JfdHNpY2tsZV9DbG9zdXJlX2RlY2xhcmF0aW9ucygpIHtcbi8qKiBAdHlwZSB7P30gKi9cbkVtYWlsVmFsaWRhdG9yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuRW1haWxWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5FbWFpbFZhbGlkYXRvci5wcm9wRGVjb3JhdG9ycztcbi8qKiBAdHlwZSB7P30gKi9cbkVtYWlsVmFsaWRhdG9yLnByb3RvdHlwZS5fZW5hYmxlZDtcbi8qKiBAdHlwZSB7P30gKi9cbkVtYWlsVmFsaWRhdG9yLnByb3RvdHlwZS5fb25DaGFuZ2U7XG59XG5cblxuLyoqXG4gKiBAc3RhYmxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdG9yRm4geyAoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsOyB9XG5cbi8qKlxuICogQHN0YWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFzeW5jVmFsaWRhdG9yRm4ge1xuICAoYzogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzfG51bGw+fE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9yc3xudWxsPjtcbn1cblxuLyoqXG4gKiBQcm92aWRlciB3aGljaCBhZGRzIHtAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IHRvIHtAbGluayBOR19WQUxJREFUT1JTfS5cbiAqXG4gKiAjIyBFeGFtcGxlOlxuICpcbiAqIHtAZXhhbXBsZSBjb21tb24vZm9ybXMvdHMvdmFsaWRhdG9ycy92YWxpZGF0b3JzLnRzIHJlZ2lvbj0nbWluJ31cbiAqL1xuZXhwb3J0IGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gTUlOX0xFTkdUSF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWluTGVuZ3RoVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG4vKipcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIGluc3RhbGxzIHRoZSB7XFxAbGluayBNaW5MZW5ndGhWYWxpZGF0b3J9IGZvciBhbnkgYGZvcm1Db250cm9sTmFtZWAsXG4gKiBgZm9ybUNvbnRyb2xgLCBvciBjb250cm9sIHdpdGggYG5nTW9kZWxgIHRoYXQgYWxzbyBoYXMgYSBgbWlubGVuZ3RoYCBhdHRyaWJ1dGUuXG4gKiBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgTWluTGVuZ3RoVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLFxuICAgIE9uQ2hhbmdlcyB7XG5wcml2YXRlIF92YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xucHJpdmF0ZSBfb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgIG1pbmxlbmd0aDogc3RyaW5nO1xuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoJ21pbmxlbmd0aCcgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gY1xuICogQHJldHVybiB7P31cbiAqL1xudmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9yc3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5taW5sZW5ndGggPT0gbnVsbCA/IG51bGwgOiB0aGlzLl92YWxpZGF0b3IoYyk7XG4gIH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpOiB2b2lkIHtcbiAgICB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1pbkxlbmd0aChwYXJzZUludCh0aGlzLm1pbmxlbmd0aCwgMTApKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1ttaW5sZW5ndGhdW2Zvcm1Db250cm9sTmFtZV0sW21pbmxlbmd0aF1bZm9ybUNvbnRyb2xdLFttaW5sZW5ndGhdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbTUlOX0xFTkdUSF9WQUxJREFUT1JdLFxuICBob3N0OiB7J1thdHRyLm1pbmxlbmd0aF0nOiAnbWlubGVuZ3RoID8gbWlubGVuZ3RoIDogbnVsbCd9XG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbWlubGVuZ3RoJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuZnVuY3Rpb24gTWluTGVuZ3RoVmFsaWRhdG9yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5NaW5MZW5ndGhWYWxpZGF0b3IuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5NaW5MZW5ndGhWYWxpZGF0b3IuY3RvclBhcmFtZXRlcnM7XG4vKiogQHR5cGUgez99ICovXG5NaW5MZW5ndGhWYWxpZGF0b3IucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5NaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLl92YWxpZGF0b3I7XG4vKiogQHR5cGUgez99ICovXG5NaW5MZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLl9vbkNoYW5nZTtcbi8qKiBAdHlwZSB7P30gKi9cbk1pbkxlbmd0aFZhbGlkYXRvci5wcm90b3R5cGUubWlubGVuZ3RoO1xufVxuXG5cbi8qKlxuICogUHJvdmlkZXIgd2hpY2ggYWRkcyB7QGxpbmsgTWF4TGVuZ3RoVmFsaWRhdG9yfSB0byB7QGxpbmsgTkdfVkFMSURBVE9SU30uXG4gKlxuICogIyMgRXhhbXBsZTpcbiAqXG4gKiB7QGV4YW1wbGUgY29tbW9uL2Zvcm1zL3RzL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyByZWdpb249J21heCd9XG4gKi9cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIE1BWF9MRU5HVEhfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1heExlbmd0aFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuLyoqXG4gKiBBIGRpcmVjdGl2ZSB3aGljaCBpbnN0YWxscyB0aGUge1xcQGxpbmsgTWF4TGVuZ3RoVmFsaWRhdG9yfSBmb3IgYW55IGBmb3JtQ29udHJvbE5hbWUsXG4gKiBgZm9ybUNvbnRyb2xgLFxuICogb3IgY29udHJvbCB3aXRoIGBuZ01vZGVsYCB0aGF0IGFsc28gaGFzIGEgYG1heGxlbmd0aGAgYXR0cmlidXRlLlxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIE1heExlbmd0aFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvcixcbiAgICBPbkNoYW5nZXMge1xucHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbnByaXZhdGUgX29uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gICBtYXhsZW5ndGg6IHN0cmluZztcbi8qKlxuICogQHBhcmFtIHs/fSBjaGFuZ2VzXG4gKiBAcmV0dXJuIHs/fVxuICovXG5uZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCdtYXhsZW5ndGgnIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB0aGlzLl9vbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNcbiAqIEByZXR1cm4gez99XG4gKi9cbnZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubWF4bGVuZ3RoICE9IG51bGwgPyB0aGlzLl92YWxpZGF0b3IoYykgOiBudWxsO1xuICB9XG4vKipcbiAqIEBwYXJhbSB7P30gZm5cbiAqIEByZXR1cm4gez99XG4gKi9cbnJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHsgdGhpcy5fb25DaGFuZ2UgPSBmbjsgfVxuLyoqXG4gKiBAcmV0dXJuIHs/fVxuICovXG5wcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5tYXhMZW5ndGgocGFyc2VJbnQodGhpcy5tYXhsZW5ndGgsIDEwKSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdbbWF4bGVuZ3RoXVtmb3JtQ29udHJvbE5hbWVdLFttYXhsZW5ndGhdW2Zvcm1Db250cm9sXSxbbWF4bGVuZ3RoXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW01BWF9MRU5HVEhfVkFMSURBVE9SXSxcbiAgaG9zdDogeydbYXR0ci5tYXhsZW5ndGhdJzogJ21heGxlbmd0aCA/IG1heGxlbmd0aCA6IG51bGwnfVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ21heGxlbmd0aCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmZ1bmN0aW9uIE1heExlbmd0aFZhbGlkYXRvcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuTWF4TGVuZ3RoVmFsaWRhdG9yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuTWF4TGVuZ3RoVmFsaWRhdG9yLmN0b3JQYXJhbWV0ZXJzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3BEZWNvcmF0b3JzO1xuLyoqIEB0eXBlIHs/fSAqL1xuTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fdmFsaWRhdG9yO1xuLyoqIEB0eXBlIHs/fSAqL1xuTWF4TGVuZ3RoVmFsaWRhdG9yLnByb3RvdHlwZS5fb25DaGFuZ2U7XG4vKiogQHR5cGUgez99ICovXG5NYXhMZW5ndGhWYWxpZGF0b3IucHJvdG90eXBlLm1heGxlbmd0aDtcbn1cblxuXG5cbmV4cG9ydCBjb25zdCAvKiogQHR5cGUgez99ICovIFBBVFRFUk5fVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBhdHRlcm5WYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcbi8qKlxuICogQSBEaXJlY3RpdmUgdGhhdCBhZGRzIHRoZSBgcGF0dGVybmAgdmFsaWRhdG9yIHRvIGFueSBjb250cm9scyBtYXJrZWQgd2l0aCB0aGVcbiAqIGBwYXR0ZXJuYCBhdHRyaWJ1dGUsIHZpYSB0aGUge1xcQGxpbmsgTkdfVkFMSURBVE9SU30gYmluZGluZy4gVXNlcyBhdHRyaWJ1dGUgdmFsdWVcbiAqIGFzIHRoZSByZWdleCB0byB2YWxpZGF0ZSBDb250cm9sIHZhbHVlIGFnYWluc3QuICBGb2xsb3dzIHBhdHRlcm4gYXR0cmlidXRlXG4gKiBzZW1hbnRpY3M7IGkuZS4gcmVnZXggbXVzdCBtYXRjaCBlbnRpcmUgQ29udHJvbCB2YWx1ZS5cbiAqIFxuICogIyMjIEV4YW1wbGVcbiAqIFxuICogYGBgXG4gKiA8aW5wdXQgW25hbWVdPVwiZnVsbE5hbWVcIiBwYXR0ZXJuPVwiW2EtekEtWiBdKlwiIG5nTW9kZWw+XG4gKiBgYGBcbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgUGF0dGVyblZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvcixcbiAgICBPbkNoYW5nZXMge1xucHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbnByaXZhdGUgX29uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gICBwYXR0ZXJuOiBzdHJpbmd8UmVnRXhwO1xuLyoqXG4gKiBAcGFyYW0gez99IGNoYW5nZXNcbiAqIEByZXR1cm4gez99XG4gKi9cbm5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoJ3BhdHRlcm4nIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB0aGlzLl9vbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuLyoqXG4gKiBAcGFyYW0gez99IGNcbiAqIEByZXR1cm4gez99XG4gKi9cbnZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7IHJldHVybiB0aGlzLl92YWxpZGF0b3IoYyk7IH1cbi8qKlxuICogQHBhcmFtIHs/fSBmblxuICogQHJldHVybiB7P31cbiAqL1xucmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9XG4vKipcbiAqIEByZXR1cm4gez99XG4gKi9cbnByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpOiB2b2lkIHsgdGhpcy5fdmFsaWRhdG9yID0gVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMucGF0dGVybik7IH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdbcGF0dGVybl1bZm9ybUNvbnRyb2xOYW1lXSxbcGF0dGVybl1bZm9ybUNvbnRyb2xdLFtwYXR0ZXJuXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW1BBVFRFUk5fVkFMSURBVE9SXSxcbiAgaG9zdDogeydbYXR0ci5wYXR0ZXJuXSc6ICdwYXR0ZXJuID8gcGF0dGVybiA6IG51bGwnfVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ3BhdHRlcm4nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5mdW5jdGlvbiBQYXR0ZXJuVmFsaWRhdG9yX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5QYXR0ZXJuVmFsaWRhdG9yLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuUGF0dGVyblZhbGlkYXRvci5jdG9yUGFyYW1ldGVycztcbi8qKiBAdHlwZSB7P30gKi9cblBhdHRlcm5WYWxpZGF0b3IucHJvcERlY29yYXRvcnM7XG4vKiogQHR5cGUgez99ICovXG5QYXR0ZXJuVmFsaWRhdG9yLnByb3RvdHlwZS5fdmFsaWRhdG9yO1xuLyoqIEB0eXBlIHs/fSAqL1xuUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUuX29uQ2hhbmdlO1xuLyoqIEB0eXBlIHs/fSAqL1xuUGF0dGVyblZhbGlkYXRvci5wcm90b3R5cGUucGF0dGVybjtcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvckZufSBmcm9tICcuL2RpcmVjdGl2ZXMvdmFsaWRhdG9ycyc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICcuL21vZGVsJztcbi8qKlxuICogXFxAd2hhdEl0RG9lcyBDcmVhdGVzIGFuIHtcXEBsaW5rIEFic3RyYWN0Q29udHJvbH0gZnJvbSBhIHVzZXItc3BlY2lmaWVkIGNvbmZpZ3VyYXRpb24uXG4gKiBcbiAqIEl0IGlzIGVzc2VudGlhbGx5IHN5bnRhY3RpYyBzdWdhciB0aGF0IHNob3J0ZW5zIHRoZSBgbmV3IEZvcm1Hcm91cCgpYCxcbiAqIGBuZXcgRm9ybUNvbnRyb2woKWAsIGFuZCBgbmV3IEZvcm1BcnJheSgpYCBib2lsZXJwbGF0ZSB0aGF0IGNhbiBidWlsZCB1cCBpbiBsYXJnZXJcbiAqIGZvcm1zLlxuICogXG4gKiBcXEBob3dUb1VzZSBcbiAqIFxuICogVG8gdXNlLCBpbmplY3QgYEZvcm1CdWlsZGVyYCBpbnRvIHlvdXIgY29tcG9uZW50IGNsYXNzLiBZb3UgY2FuIHRoZW4gY2FsbCBpdHMgbWV0aG9kc1xuICogZGlyZWN0bHkuXG4gKiBcbiAqIHtcXEBleGFtcGxlIGZvcm1zL3RzL2Zvcm1CdWlsZGVyL2Zvcm1fYnVpbGRlcl9leGFtcGxlLnRzIHJlZ2lvbj0nQ29tcG9uZW50J31cbiAqIFxuICogICogKipucG0gcGFja2FnZSoqOiBgXFxAYW5ndWxhci9mb3Jtc2BcbiAqIFxuICogICogKipOZ01vZHVsZSoqOiB7XFxAbGluayBSZWFjdGl2ZUZvcm1zTW9kdWxlfVxuICogXG4gKiBcXEBzdGFibGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1CdWlsZGVyIHtcbi8qKlxuICogQ29uc3RydWN0IGEgbmV3IHtcXEBsaW5rIEZvcm1Hcm91cH0gd2l0aCB0aGUgZ2l2ZW4gbWFwIG9mIGNvbmZpZ3VyYXRpb24uXG4gKiBWYWxpZCBrZXlzIGZvciB0aGUgYGV4dHJhYCBwYXJhbWV0ZXIgbWFwIGFyZSBgdmFsaWRhdG9yYCBhbmQgYGFzeW5jVmFsaWRhdG9yYC5cbiAqIFxuICogU2VlIHRoZSB7XFxAbGluayBGb3JtR3JvdXB9IGNvbnN0cnVjdG9yIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0gez99IGNvbnRyb2xzQ29uZmlnXG4gKiBAcGFyYW0gez89fSBleHRyYVxuICogQHJldHVybiB7P31cbiAqL1xuZ3JvdXAoY29udHJvbHNDb25maWc6IHtba2V5OiBzdHJpbmddOiBhbnl9LCBleHRyYToge1trZXk6IHN0cmluZ106IGFueX0gPSBudWxsKTogRm9ybUdyb3VwIHtcbiAgICBjb25zdCAvKiogQHR5cGUgez99ICovIGNvbnRyb2xzID0gdGhpcy5fcmVkdWNlQ29udHJvbHMoY29udHJvbHNDb25maWcpO1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IGV4dHJhICE9IG51bGwgPyBleHRyYVsndmFsaWRhdG9yJ10gOiBudWxsO1xuICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm4gPSBleHRyYSAhPSBudWxsID8gZXh0cmFbJ2FzeW5jVmFsaWRhdG9yJ10gOiBudWxsO1xuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgfVxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBuZXcge1xcQGxpbmsgRm9ybUNvbnRyb2x9IHdpdGggdGhlIGdpdmVuIGBmb3JtU3RhdGVgLGB2YWxpZGF0b3JgLCBhbmRcbiAqIGBhc3luY1ZhbGlkYXRvcmAuXG4gKiBcbiAqIGBmb3JtU3RhdGVgIGNhbiBlaXRoZXIgYmUgYSBzdGFuZGFsb25lIHZhbHVlIGZvciB0aGUgZm9ybSBjb250cm9sIG9yIGFuIG9iamVjdFxuICogdGhhdCBjb250YWlucyBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdHVzLlxuICogXG4gKiBAcGFyYW0gez99IGZvcm1TdGF0ZVxuICogQHBhcmFtIHs/PX0gdmFsaWRhdG9yXG4gKiBAcGFyYW0gez89fSBhc3luY1ZhbGlkYXRvclxuICogQHJldHVybiB7P31cbiAqL1xuY29udHJvbChcbiAgICAgIGZvcm1TdGF0ZTogT2JqZWN0LCB2YWxpZGF0b3I6IFZhbGlkYXRvckZufFZhbGlkYXRvckZuW10gPSBudWxsLFxuICAgICAgYXN5bmNWYWxpZGF0b3I6IEFzeW5jVmFsaWRhdG9yRm58QXN5bmNWYWxpZGF0b3JGbltdID0gbnVsbCk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gbmV3IEZvcm1Db250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG4gIH1cbi8qKlxuICogQ29uc3RydWN0IGEge1xcQGxpbmsgRm9ybUFycmF5fSBmcm9tIHRoZSBnaXZlbiBgY29udHJvbHNDb25maWdgIGFycmF5IG9mXG4gKiBjb25maWd1cmF0aW9uLCB3aXRoIHRoZSBnaXZlbiBvcHRpb25hbCBgdmFsaWRhdG9yYCBhbmQgYGFzeW5jVmFsaWRhdG9yYC5cbiAqIEBwYXJhbSB7P30gY29udHJvbHNDb25maWdcbiAqIEBwYXJhbSB7Pz19IHZhbGlkYXRvclxuICogQHBhcmFtIHs/PX0gYXN5bmNWYWxpZGF0b3JcbiAqIEByZXR1cm4gez99XG4gKi9cbmFycmF5KFxuICAgICAgY29udHJvbHNDb25maWc6IGFueVtdLCB2YWxpZGF0b3I6IFZhbGlkYXRvckZuID0gbnVsbCxcbiAgICAgIGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuID0gbnVsbCk6IEZvcm1BcnJheSB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9scyA9IGNvbnRyb2xzQ29uZmlnLm1hcChjID0+IHRoaXMuX2NyZWF0ZUNvbnRyb2woYykpO1xuICAgIHJldHVybiBuZXcgRm9ybUFycmF5KGNvbnRyb2xzLCB2YWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yKTtcbiAgfVxuLyoqXG4gKiBcXEBpbnRlcm5hbFxuICogQHBhcmFtIHs/fSBjb250cm9sc0NvbmZpZ1xuICogQHJldHVybiB7P31cbiAqL1xuX3JlZHVjZUNvbnRyb2xzKGNvbnRyb2xzQ29uZmlnOiB7W2s6IHN0cmluZ106IGFueX0pOiB7W2tleTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sfSB7XG4gICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBjb250cm9sczoge1trZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbH0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhjb250cm9sc0NvbmZpZykuZm9yRWFjaChjb250cm9sTmFtZSA9PiB7XG4gICAgICBjb250cm9sc1tjb250cm9sTmFtZV0gPSB0aGlzLl9jcmVhdGVDb250cm9sKGNvbnRyb2xzQ29uZmlnW2NvbnRyb2xOYW1lXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRyb2xzO1xuICB9XG4vKipcbiAqIFxcQGludGVybmFsXG4gKiBAcGFyYW0gez99IGNvbnRyb2xDb25maWdcbiAqIEByZXR1cm4gez99XG4gKi9cbl9jcmVhdGVDb250cm9sKGNvbnRyb2xDb25maWc6IGFueSk6IEFic3RyYWN0Q29udHJvbCB7XG4gICAgaWYgKGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCB8fCBjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUdyb3VwIHx8XG4gICAgICAgIGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcbiAgICAgIHJldHVybiBjb250cm9sQ29uZmlnO1xuXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xDb25maWcpKSB7XG4gICAgICBjb25zdCAvKiogQHR5cGUgez99ICovIHZhbHVlID0gY29udHJvbENvbmZpZ1swXTtcbiAgICAgIGNvbnN0IC8qKiBAdHlwZSB7P30gKi8gdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IGNvbnRyb2xDb25maWcubGVuZ3RoID4gMSA/IGNvbnRyb2xDb25maWdbMV0gOiBudWxsO1xuICAgICAgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiA9IGNvbnRyb2xDb25maWcubGVuZ3RoID4gMiA/IGNvbnRyb2xDb25maWdbMl0gOiBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbCh2YWx1ZSwgdmFsaWRhdG9yLCBhc3luY1ZhbGlkYXRvcik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbChjb250cm9sQ29uZmlnKTtcbiAgICB9XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5mdW5jdGlvbiBGb3JtQnVpbGRlcl90c2lja2xlX0Nsb3N1cmVfZGVjbGFyYXRpb25zKCkge1xuLyoqIEB0eXBlIHs/fSAqL1xuRm9ybUJ1aWxkZXIuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5Gb3JtQnVpbGRlci5jdG9yUGFyYW1ldGVycztcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2Zvcm1fYnVpbGRlci50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVudHJ5IHBvaW50IGZvciBhbGwgcHVibGljIEFQSXMgb2YgdGhlIGNvbW1vbiBwYWNrYWdlLlxuICovXG5cblxuaW1wb3J0IHtWZXJzaW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzQuMC4zJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL3ZlcnNpb24udHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBcXEB3aGF0SXREb2VzIEFkZHMgYG5vdmFsaWRhdGVgIGF0dHJpYnV0ZSB0byBhbGwgZm9ybXMgYnkgZGVmYXVsdC5cbiAqIFxuICogYG5vdmFsaWRhdGVgIGlzIHVzZWQgdG8gZGlzYWJsZSBicm93c2VyJ3MgbmF0aXZlIGZvcm0gdmFsaWRhdGlvbi5cbiAqIFxuICogSWYgeW91IHdhbnQgdG8gdXNlIG5hdGl2ZSB2YWxpZGF0aW9uIHdpdGggQW5ndWxhciBmb3JtcywganVzdCBhZGQgYG5nTmF0aXZlVmFsaWRhdGVgIGF0dHJpYnV0ZTpcbiAqIFxuICogYGBgXG4gKiA8Zm9ybSBuZ05hdGl2ZVZhbGlkYXRlPjwvZm9ybT5cbiAqIGBgYFxuICogXG4gKiBcXEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGNsYXNzIE5nTm9WYWxpZGF0ZSB7XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnZm9ybTpub3QoW25nTm9Gb3JtXSk6bm90KFtuZ05hdGl2ZVZhbGlkYXRlXSknLFxuICBob3N0OiB7J25vdmFsaWRhdGUnOiAnJ30sXG59LCBdIH0sXG5dO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuZnVuY3Rpb24gTmdOb1ZhbGlkYXRlX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5OZ05vVmFsaWRhdGUuZGVjb3JhdG9ycztcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqIEB0eXBlIHs/fVxuICovXG5OZ05vVmFsaWRhdGUuY3RvclBhcmFtZXRlcnM7XG59XG5cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9kaXJlY3RpdmVzL25nX25vX3ZhbGlkYXRlX2RpcmVjdGl2ZS50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge05nTW9kdWxlLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2RlZmF1bHRfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtOZ0NvbnRyb2xTdGF0dXMsIE5nQ29udHJvbFN0YXR1c0dyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbF9zdGF0dXMnO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19mb3JtJztcbmltcG9ydCB7TmdNb2RlbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsJztcbmltcG9ydCB7TmdNb2RlbEdyb3VwfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWxfZ3JvdXAnO1xuaW1wb3J0IHtOZ05vVmFsaWRhdGV9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19ub192YWxpZGF0ZV9kaXJlY3RpdmUnO1xuaW1wb3J0IHtOdW1iZXJWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvbnVtYmVyX3ZhbHVlX2FjY2Vzc29yJztcbmltcG9ydCB7UmFkaW9Db250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtSYW5nZVZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9yYW5nZV92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0Zvcm1Db250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2NvbnRyb2xfZGlyZWN0aXZlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2xOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2NvbnRyb2xfbmFtZSc7XG5pbXBvcnQge0Zvcm1Hcm91cERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9kaXJlY3RpdmUnO1xuaW1wb3J0IHtGb3JtQXJyYXlOYW1lLCBGb3JtR3JvdXBOYW1lfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX25hbWUnO1xuaW1wb3J0IHtOZ1NlbGVjdE9wdGlvbiwgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge05nU2VsZWN0TXVsdGlwbGVPcHRpb24sIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3RfbXVsdGlwbGVfY29udHJvbF92YWx1ZV9hY2Nlc3Nvcic7XG5pbXBvcnQge0NoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsIEVtYWlsVmFsaWRhdG9yLCBNYXhMZW5ndGhWYWxpZGF0b3IsIE1pbkxlbmd0aFZhbGlkYXRvciwgUGF0dGVyblZhbGlkYXRvciwgUmVxdWlyZWRWYWxpZGF0b3J9IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcblxuZXhwb3J0IHtDaGVja2JveENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvY2hlY2tib3hfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL2RlZmF1bHRfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtOZ0NvbnRyb2x9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sJztcbmV4cG9ydCB7TmdDb250cm9sU3RhdHVzLCBOZ0NvbnRyb2xTdGF0dXNHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2NvbnRyb2xfc3RhdHVzJztcbmV4cG9ydCB7TmdGb3JtfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfZm9ybSc7XG5leHBvcnQge05nTW9kZWx9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbCc7XG5leHBvcnQge05nTW9kZWxHcm91cH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX21vZGVsX2dyb3VwJztcbmV4cG9ydCB7TnVtYmVyVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL251bWJlcl92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge1JhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7UmFuZ2VWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmFuZ2VfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtGb3JtQ29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Zvcm1Db250cm9sTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9jb250cm9sX25hbWUnO1xuZXhwb3J0IHtGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfZGlyZWN0aXZlJztcbmV4cG9ydCB7Rm9ybUFycmF5TmFtZSwgRm9ybUdyb3VwTmFtZX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JlYWN0aXZlX2RpcmVjdGl2ZXMvZm9ybV9ncm91cF9uYW1lJztcbmV4cG9ydCB7TmdTZWxlY3RPcHRpb24sIFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtOZ1NlbGVjdE11bHRpcGxlT3B0aW9uLCBTZWxlY3RNdWx0aXBsZUNvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0X211bHRpcGxlX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBTSEFSRURfRk9STV9ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9IFtcbiAgTmdOb1ZhbGlkYXRlLFxuICBOZ1NlbGVjdE9wdGlvbixcbiAgTmdTZWxlY3RNdWx0aXBsZU9wdGlvbixcbiAgRGVmYXVsdFZhbHVlQWNjZXNzb3IsXG4gIE51bWJlclZhbHVlQWNjZXNzb3IsXG4gIFJhbmdlVmFsdWVBY2Nlc3NvcixcbiAgQ2hlY2tib3hDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFNlbGVjdE11bHRpcGxlQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIE5nQ29udHJvbFN0YXR1cyxcbiAgTmdDb250cm9sU3RhdHVzR3JvdXAsXG4gIFJlcXVpcmVkVmFsaWRhdG9yLFxuICBNaW5MZW5ndGhWYWxpZGF0b3IsXG4gIE1heExlbmd0aFZhbGlkYXRvcixcbiAgUGF0dGVyblZhbGlkYXRvcixcbiAgQ2hlY2tib3hSZXF1aXJlZFZhbGlkYXRvcixcbiAgRW1haWxWYWxpZGF0b3IsXG5dO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBURU1QTEFURV9EUklWRU5fRElSRUNUSVZFUzogVHlwZTxhbnk+W10gPSBbTmdNb2RlbCwgTmdNb2RlbEdyb3VwLCBOZ0Zvcm1dO1xuXG5leHBvcnQgY29uc3QgLyoqIEB0eXBlIHs/fSAqLyBSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFUzogVHlwZTxhbnk+W10gPVxuICAgIFtGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIEZvcm1Hcm91cE5hbWUsIEZvcm1BcnJheU5hbWVdO1xuLyoqXG4gKiBJbnRlcm5hbCBtb2R1bGUgdXNlZCBmb3Igc2hhcmluZyBkaXJlY3RpdmVzIGJldHdlZW4gRm9ybXNNb2R1bGUgYW5kIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUge1xuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gIGRlY2xhcmF0aW9uczogU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyxcbiAgZXhwb3J0czogU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyxcbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5mdW5jdGlvbiBJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5JbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuSW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZS5jdG9yUGFyYW1ldGVycztcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2RpcmVjdGl2ZXMudHMiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7SW50ZXJuYWxGb3Jtc1NoYXJlZE1vZHVsZSwgUkVBQ1RJVkVfRFJJVkVOX0RJUkVDVElWRVMsIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTfSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHtSYWRpb0NvbnRyb2xSZWdpc3RyeX0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhZGlvX2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSAnLi9mb3JtX2J1aWxkZXInO1xuLyoqXG4gKiBUaGUgbmcgbW9kdWxlIGZvciBmb3Jtcy5cbiAqIFxcQHN0YWJsZVxuICovXG5leHBvcnQgY2xhc3MgRm9ybXNNb2R1bGUge1xuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gIGRlY2xhcmF0aW9uczogVEVNUExBVEVfRFJJVkVOX0RJUkVDVElWRVMsXG4gIHByb3ZpZGVyczogW1JhZGlvQ29udHJvbFJlZ2lzdHJ5XSxcbiAgZXhwb3J0czogW0ludGVybmFsRm9ybXNTaGFyZWRNb2R1bGUsIFRFTVBMQVRFX0RSSVZFTl9ESVJFQ1RJVkVTXVxufSwgXSB9LFxuXTtcbi8qKlxuICogQG5vY29sbGFwc2VcbiAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG59XG5cbmZ1bmN0aW9uIEZvcm1zTW9kdWxlX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5Gb3Jtc01vZHVsZS5kZWNvcmF0b3JzO1xuLyoqXG4gKiBAbm9jb2xsYXBzZVxuICogQHR5cGUgez99XG4gKi9cbkZvcm1zTW9kdWxlLmN0b3JQYXJhbWV0ZXJzO1xufVxuXG4vKipcbiAqIFRoZSBuZyBtb2R1bGUgZm9yIHJlYWN0aXZlIGZvcm1zLlxuICogXFxAc3RhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUZvcm1zTW9kdWxlIHtcbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICBkZWNsYXJhdGlvbnM6IFtSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW0Zvcm1CdWlsZGVyLCBSYWRpb0NvbnRyb2xSZWdpc3RyeV0sXG4gIGV4cG9ydHM6IFtJbnRlcm5hbEZvcm1zU2hhcmVkTW9kdWxlLCBSRUFDVElWRV9EUklWRU5fRElSRUNUSVZFU11cbn0sIF0gfSxcbl07XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5mdW5jdGlvbiBSZWFjdGl2ZUZvcm1zTW9kdWxlX3RzaWNrbGVfQ2xvc3VyZV9kZWNsYXJhdGlvbnMoKSB7XG4vKiogQHR5cGUgez99ICovXG5SZWFjdGl2ZUZvcm1zTW9kdWxlLmRlY29yYXRvcnM7XG4vKipcbiAqIEBub2NvbGxhcHNlXG4gKiBAdHlwZSB7P31cbiAqL1xuUmVhY3RpdmVGb3Jtc01vZHVsZS5jdG9yUGFyYW1ldGVycztcbn1cblxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybXMvc3JjL2Zvcm1fcHJvdmlkZXJzLnRzIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBtb2R1bGUgaXMgdXNlZCBmb3IgaGFuZGxpbmcgdXNlciBpbnB1dCwgYnkgZGVmaW5pbmcgYW5kIGJ1aWxkaW5nIGEge0BsaW5rIEZvcm1Hcm91cH0gdGhhdFxuICogY29uc2lzdHMgb2Yge0BsaW5rIEZvcm1Db250cm9sfSBvYmplY3RzLCBhbmQgbWFwcGluZyB0aGVtIG9udG8gdGhlIERPTS4ge0BsaW5rIEZvcm1Db250cm9sfVxuICogb2JqZWN0cyBjYW4gdGhlbiBiZSB1c2VkIHRvIHJlYWQgaW5mb3JtYXRpb24gZnJvbSB0aGUgZm9ybSBET00gZWxlbWVudHMuXG4gKlxuICogRm9ybXMgcHJvdmlkZXJzIGFyZSBub3QgaW5jbHVkZWQgaW4gZGVmYXVsdCBwcm92aWRlcnM7IHlvdSBtdXN0IGltcG9ydCB0aGVzZSBwcm92aWRlcnNcbiAqIGV4cGxpY2l0bHkuXG4gKi9cblxuXG5leHBvcnQge0Fic3RyYWN0Q29udHJvbERpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlJztcbmV4cG9ydCB7QWJzdHJhY3RGb3JtR3JvdXBEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9hYnN0cmFjdF9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5leHBvcnQge0NoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9jaGVja2JveF92YWx1ZV9hY2Nlc3Nvcic7XG5leHBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJy4vZGlyZWN0aXZlcy9jb250cm9sX2NvbnRhaW5lcic7XG5leHBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnLi9kaXJlY3RpdmVzL2NvbnRyb2xfdmFsdWVfYWNjZXNzb3InO1xuZXhwb3J0IHtDT01QT1NJVElPTl9CVUZGRVJfTU9ERSwgRGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9kZWZhdWx0X3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Rm9ybX0gZnJvbSAnLi9kaXJlY3RpdmVzL2Zvcm1faW50ZXJmYWNlJztcbmV4cG9ydCB7TmdDb250cm9sfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY29udHJvbCc7XG5leHBvcnQge05nQ29udHJvbFN0YXR1cywgTmdDb250cm9sU3RhdHVzR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jb250cm9sX3N0YXR1cyc7XG5leHBvcnQge05nRm9ybX0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX2Zvcm0nO1xuZXhwb3J0IHtOZ01vZGVsfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfbW9kZWwnO1xuZXhwb3J0IHtOZ01vZGVsR3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19tb2RlbF9ncm91cCc7XG5leHBvcnQge1JhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJy4vZGlyZWN0aXZlcy9yYWRpb19jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7Rm9ybUNvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9kaXJlY3RpdmUnO1xuZXhwb3J0IHtGb3JtQ29udHJvbE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fY29udHJvbF9uYW1lJztcbmV4cG9ydCB7Rm9ybUdyb3VwRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVhY3RpdmVfZGlyZWN0aXZlcy9mb3JtX2dyb3VwX2RpcmVjdGl2ZSc7XG5leHBvcnQge0Zvcm1BcnJheU5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZSc7XG5leHBvcnQge0Zvcm1Hcm91cE5hbWV9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWFjdGl2ZV9kaXJlY3RpdmVzL2Zvcm1fZ3JvdXBfbmFtZSc7XG5leHBvcnQge05nU2VsZWN0T3B0aW9uLCBTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7U2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdF9tdWx0aXBsZV9jb250cm9sX3ZhbHVlX2FjY2Vzc29yJztcbmV4cG9ydCB7QXN5bmNWYWxpZGF0b3IsIEFzeW5jVmFsaWRhdG9yRm4sIENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsIEVtYWlsVmFsaWRhdG9yLCBNYXhMZW5ndGhWYWxpZGF0b3IsIE1pbkxlbmd0aFZhbGlkYXRvciwgUGF0dGVyblZhbGlkYXRvciwgUmVxdWlyZWRWYWxpZGF0b3IsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm59IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0b3JzJztcbmV4cG9ydCB7Rm9ybUJ1aWxkZXJ9IGZyb20gJy4vZm9ybV9idWlsZGVyJztcbmV4cG9ydCB7QWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXksIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0IHtOR19BU1lOQ19WQUxJREFUT1JTLCBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3JzfSBmcm9tICcuL3ZhbGlkYXRvcnMnO1xuZXhwb3J0IHtWRVJTSU9OfSBmcm9tICcuL3ZlcnNpb24nO1xuXG5leHBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJy4vZm9ybV9wcm92aWRlcnMnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3NyYy9mb3Jtcy50cyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVudHJ5IHBvaW50IGZvciBhbGwgcHVibGljIEFQSXMgb2YgdGhlIGZvcm1zIHBhY2thZ2UuXG4gKi9cbmV4cG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLEFic3RyYWN0Rm9ybUdyb3VwRGlyZWN0aXZlLENoZWNrYm94Q29udHJvbFZhbHVlQWNjZXNzb3IsQ29udHJvbENvbnRhaW5lcixDb250cm9sVmFsdWVBY2Nlc3NvcixOR19WQUxVRV9BQ0NFU1NPUixDT01QT1NJVElPTl9CVUZGRVJfTU9ERSxEZWZhdWx0VmFsdWVBY2Nlc3NvcixGb3JtLE5nQ29udHJvbCxOZ0NvbnRyb2xTdGF0dXMsTmdDb250cm9sU3RhdHVzR3JvdXAsTmdGb3JtLE5nTW9kZWwsTmdNb2RlbEdyb3VwLFJhZGlvQ29udHJvbFZhbHVlQWNjZXNzb3IsRm9ybUNvbnRyb2xEaXJlY3RpdmUsRm9ybUNvbnRyb2xOYW1lLEZvcm1Hcm91cERpcmVjdGl2ZSxGb3JtQXJyYXlOYW1lLEZvcm1Hcm91cE5hbWUsTmdTZWxlY3RPcHRpb24sU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IsU2VsZWN0TXVsdGlwbGVDb250cm9sVmFsdWVBY2Nlc3NvcixBc3luY1ZhbGlkYXRvcixBc3luY1ZhbGlkYXRvckZuLENoZWNrYm94UmVxdWlyZWRWYWxpZGF0b3IsRW1haWxWYWxpZGF0b3IsTWF4TGVuZ3RoVmFsaWRhdG9yLE1pbkxlbmd0aFZhbGlkYXRvcixQYXR0ZXJuVmFsaWRhdG9yLFJlcXVpcmVkVmFsaWRhdG9yLFZhbGlkYXRpb25FcnJvcnMsVmFsaWRhdG9yLFZhbGlkYXRvckZuLEZvcm1CdWlsZGVyLEFic3RyYWN0Q29udHJvbCxGb3JtQXJyYXksRm9ybUNvbnRyb2wsRm9ybUdyb3VwLE5HX0FTWU5DX1ZBTElEQVRPUlMsTkdfVkFMSURBVE9SUyxWYWxpZGF0b3JzLFZFUlNJT04sRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnLi9zcmMvZm9ybXMnO1xuXG4vLyBUaGlzIGZpbGUgb25seSByZWV4cG9ydHMgY29udGVudCBvZiB0aGUgYHNyY2AgZm9sZGVyLiBLZWVwIGl0IHRoYXQgd2F5LlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm1zL3B1YmxpY19hcGkudHMiLCJpbXBvcnQgXCJtYXRlcmlhbC1kZXNpZ24tbGl0ZS9kaXN0L21hdGVyaWFsLmRlZXBfcHVycGxlLXBpbmsubWluLmNzc1wiO1xuaW1wb3J0IFwiLi9hcHAuY3NzXCI7XG5pbXBvcnQgXCJtYXRlcmlhbC1kZXNpZ24tbGl0ZS9tYXRlcmlhbC5taW4uanNcIjtcblxuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5cbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBNYWluTW9kdWxlIH0gZnJvbSAnLi9tYWluLm1vZHVsZSc7XG5cbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKE1haW5Nb2R1bGUpLnRoZW4oZnVuY3Rpb24oTU9EVUxFX1JFRikgeyAgIGlmIChtb2R1bGVbXCJob3RcIl0pIHsgICAgIG1vZHVsZVtcImhvdFwiXVtcImFjY2VwdFwiXSgpOyAgICAgICAgICBpZiAoTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uSW5pdFwiXSkgeyAgICAgICBtb2R1bGVbXCJob3RcIl1bXCJkYXRhXCJdICYmIE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPbkluaXRcIl0obW9kdWxlW1wiaG90XCJdW1wiZGF0YVwiXSk7ICAgICB9ICAgICBpZiAoTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uU3RhdHVzXCJdKSB7ICAgICAgIG1vZHVsZVtcImhvdFwiXVtcImFwcGx5XCJdKGZ1bmN0aW9uKHN0YXR1cykgeyAgICAgICAgIE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPblN0YXR1c1wiXShzdGF0dXMpOyAgICAgICB9KTsgICAgIH0gICAgIGlmIChNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yT25DaGVja1wiXSkgeyAgICAgICBtb2R1bGVbXCJob3RcIl1bXCJjaGVja1wiXShmdW5jdGlvbihlcnIsIG91dGRhdGVkTW9kdWxlcykgeyAgICAgICAgIE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPbkNoZWNrXCJdKGVyciwgb3V0ZGF0ZWRNb2R1bGVzKTsgICAgICAgfSk7ICAgICB9ICAgICBpZiAoTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uRGVjbGluZVwiXSkgeyAgICAgICBtb2R1bGVbXCJob3RcIl1bXCJkZWNsaW5lXCJdKGZ1bmN0aW9uKGRlcGVuZGVuY2llcykgeyAgICAgICAgIE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPbkRlY2xpbmVcIl0oZGVwZW5kZW5jaWVzKTsgICAgICAgfSk7ICAgICB9ICAgICBtb2R1bGVbXCJob3RcIl1bXCJkaXNwb3NlXCJdKGZ1bmN0aW9uKHN0b3JlKSB7ICAgICAgIE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJPbkRlc3Ryb3lcIl0gJiYgTU9EVUxFX1JFRi5pbnN0YW5jZVtcImhtck9uRGVzdHJveVwiXShzdG9yZSk7ICAgICAgIE1PRFVMRV9SRUYuZGVzdHJveSgpOyAgICAgICBNT0RVTEVfUkVGLmluc3RhbmNlW1wiaG1yQWZ0ZXJEZXN0cm95XCJdICYmIE1PRFVMRV9SRUYuaW5zdGFuY2VbXCJobXJBZnRlckRlc3Ryb3lcIl0oc3RvcmUpOyAgICAgfSk7ICAgfSAgIHJldHVybiBNT0RVTEVfUkVGOyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvbWFpbi50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgbWRsIGNsYXNzPVwibWRsLWxheW91dCBtZGwtanMtbGF5b3V0IG1kbC1sYXlvdXQtLWZpeGVkLWhlYWRlclwiPlxuXG4gICAgICAgIDxhcHAtaGVhZGVyPjwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8bWFpbiBjbGFzcz1cIm1kbC1sYXlvdXRfX2NvbnRlbnRcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kbC1sYXlvdXRfX3RhYi1wYW5lbCBpcy1hY3RpdmVcIiBpZD1cIm92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoNCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XCJsb2dvVXJsXCIgLz5cbiAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJ1cmxcIj5MZWFybiBhYm91dCB0aGlzIEFuZ3VsYXI0IFZTLk5FVCB0ZW1wbGF0ZTwvYT5cbiAgICAgICAgICAgIDwvaDQ+XG5cbiAgICAgICAgICAgIDxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj5cblxuICAgICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHVybDogc3RyaW5nO1xuICAgIGxvZ29Vcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvZ29VcmwgPSByZXF1aXJlKFwiLi9hc3NldHMvaW1nL2xvZ28ucG5nXCIpO1xuICAgICAgICB0aGlzLnVybCA9ICdodHRwczovL3NlcnZpY2VzdGFjay5uZXQvdnMtdGVtcGxhdGVzL0FuZ3VsYXJBcHAnO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9AYW5ndWxhcmNsYXNzL2htci1sb2FkZXIhLi9zcmMvYXBwLmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=