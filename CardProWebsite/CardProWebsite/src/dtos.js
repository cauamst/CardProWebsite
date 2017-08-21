/* Options:
Date: 2017-08-10 10:35:45
Version: 4.512
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:56109

//GlobalNamespace:
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
//IncludeTypes:
//ExcludeTypes:
//DefaultImports:
*/
"use strict";
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
//# sourceMappingURL=dtos.js.map