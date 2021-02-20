(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Footer -->\n<footer class=\"page-footer font-small grey darken-3 \">\n\n  <!-- Footer Elements -->\n  <div class=\"container py-4\">\n\n    <!-- Grid row-->\n\n    <div class=\"links row\">\n      <!-- GitHub +-->\n\n        <a class=\"git-ic col-6 col-md-3\" href=\"https://github.com/ClementPoueyto\" target=\"_blank\">\n          <mdb-icon fab fab icon=\"github\" size=\"2x\" class=\"white-text \"></mdb-icon>\n        </a>\n        <!--Linkedin -->\n        <a class=\"li-ic col-6 col-md-3\" href=\"https://www.linkedin.com/in/cl%C3%A9ment-poueyto-743429180/\" target=\"_blank\">\n          <mdb-icon fab icon=\"linkedin\" size=\"2x\" class=\"white-text\"></mdb-icon>\n        </a>\n        <!--Email-->\n        <div class=\"mail-ic col-6 col-md-3\">\n          <mdb-icon fas icon=\"envelope\" size=\"2x\" class=\"white-text d-block text-center\"></mdb-icon>\n          <p class=\"d-block\">clement.poueyto@etu.unice.fr</p>\n        </div>\n        <!--Numero-->\n        <div class=\"num-ic col-6 col-md-3\">\n          <mdb-icon fas icon=\"mobile-alt\" size=\"2x\" class=\"white-text d-block text-center\"></mdb-icon>\n          <p class=\"d-block\">+33.6.58.01.80.24</p>\n        </div>\n\n    </div>\n  </div>\n\n\n    <!-- Footer Elements -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019-{{date}} Copyright:\n      <a href=\"/\">Poueyto Clément</a>\n    </div>\n    <!-- Copyright -->\n\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/competence/competence.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/competence/competence.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"competences\">\n  <br>\n  <br>\n  <h2 class=\"text-center h1 py-3\">\n    <strong>Compétences</strong>\n  </h2>\n  <br>\n  <div class=\"loader\" *ngIf=\"showLoader\">\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\n  </div>\n  <h3 class=\"text-center h2\">\n    <strong>Langages</strong>\n  </h3>\n  <br>\n  <div class=\"wrapper container-fluid wow\">\n    <div class=\"row text-center\">\n      <div class=\"mx-auto\">\n        <div class=\"d-inline-block\" *ngFor=\"let competence of competences\">\n          <div id=\"progLanguage\" *ngIf=\"competence.skillType=='ProgLanguage'\">\n            <circle-progress [percent]=competence.pourcentage [imageSrc]=competence.image\n              [outerStrokeColor]=\"'#E12D14'\">\n            </circle-progress>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h3 class=\"text-center h2\">\n    <strong>Outils</strong>\n  </h3>\n  <br>\n  <div class=\"wrapper container-fluid\">\n    <div class=\"row text-center\">\n      <div class=\"mx-auto\">\n        <div class=\"d-inline-block\" *ngFor=\"let competence of competences\">\n          <div style=\"padding:30px\" *ngIf=\"competence.skillType=='Tool'\">\n            <circle-progress [percent]=competence.pourcentage [imageSrc]=competence.image\n              [outerStrokeColor]=\"'#2243E7'\">\n            </circle-progress>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h3 class=\"text-center h2\">\n    <strong>Langues</strong>\n  </h3>\n  <br>\n  <div class=\"wrapper container-fluid\">\n    <div class=\"row text-center mx-auto\">\n      <div class=\"mx-auto\">\n        <div class=\"d-inline-block\" *ngFor=\"let competence of competences\">\n          <div style=\"padding:30px\" *ngIf=\"competence.skillType=='SpokenLanguage'\">\n            <circle-progress [percent]=competence.pourcentage [imageSrc]=competence.image\n              [outerStrokeColor]=\"'#78C000'\">\n            </circle-progress>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/formation/formation.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/formation/formation.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"formations\">\n  <br>\n  <br>\n  <h2 class=\"text-center h1\">\n    <strong>Formations</strong>\n  </h2>\n  <br>\n  <div class=\"loader\" *ngIf=\"showLoader\">\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"mx-auto\" id=\"card\" *ngFor=\"let formation of formations\">\n    <div id=\"image-profile-formation\" class=\"wow fadeInLeft col-md-6 col-12\" data-wow-delay=\"0.5s\">\n      <img src={{formation.image}} class=\"img-fluid rounded rounded z-depth-1 mx-auto d-block\" width=\"350\"\n        alt=\"Responsive image\">\n    </div>\n    <div id=\"text-card-formation\" class=\"wow fadeInRight card col-md-6 col-12\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{formation.title}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">{{formation.period}} à {{formation.place}}</h6>\n        <p>{{formation.description}}</p>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/profil/profil.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/profil/profil.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" *ngIf=\"!myProfile\">\n  <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\n</div>\n<section id=\"profile\" *ngIf=\"myProfile\">\n  <br>\n  <div id=\"profilePhoto\">\n    <img src={{myProfile.image}} class=\"img-fluid rounded-circle rounded mx-auto d-block\" width=\"250\"\n      alt=\"Responsive image profile\">\n  </div>\n  <br>\n  <div class=\"text-center container-sm\">\n    <h1 class=\"h1\">{{myProfile.firstName}} {{myProfile.lastName }}</h1>\n    <h2>{{myProfile.status}}</h2>\n    <div>\n      <div class=\"wow fadeInLeft\" data-wow-delay=\"0.3s\">\n        <svg class=\"d-inline bi bi-chevron-right\" width=\"30\" height=\"30\" viewBox=\"0 0 25 25\" fill=\"currentColor\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\"\n            d=\"M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z\"\n            clip-rule=\"evenodd\" />\n        </svg>\n        <h3 class=\"d-inline-block\">{{age}} ans</h3>\n      </div>\n      <div class=\"wow fadeInLeft\" data-wow-delay=\"0.6s\">\n        <svg class=\"d-inline bi bi-chevron-right\" width=\"30\" height=\"30\" viewBox=\"0 0 25 25\" fill=\"currentColor\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\"\n            d=\"M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z\"\n            clip-rule=\"evenodd\" />\n        </svg>\n        <h5 class=\"d-inline\">{{myProfile.description}}</h5>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/projet/projet.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/projet/projet.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Projects section v.1-->\n<section id=\"projects\">\n  <br>\n  <!--Section heading-->\n  <h2 class=\"text-center h1 py-5\">\n    <strong>Projets</strong>\n  </h2>\n<div class=\"wrapper container-fluid\">\n  <!--Grid row-->\n  <div class=\"row text-center\">\n    <!--Grid column-->\n    <div *ngFor=\"let projet of projets\" class=\"card-project mx-auto col-lg-4 col-sm-6 mb-4\">\n\n      <!--Featured image-->\n      <div id=\"image-card-project\" class=\"mx-auto rounded z-depth-1 waves-light\" mdbWavesEffect>\n        <img src={{projet.image}}  alt=\"Sample project image\">\n      </div>\n\n      <!--Excerpt-->\n      <mdb-card-body class=\"mt-3\">\n        <h4>\n          <strong>{{projet.title}}</strong>\n        </h4>\n        <p class=\"grey-text\">{{projet.date}}\n        </p>\n        <p class=\"grey-text\">{{projet.description}}\n        </p>\n        <a mdbBtn color=\"indigo\" size=\"sm\" class=\"waves-light\" href={{projet.github}} target=\"_blank\" mdbWavesEffect>\n          <mdb-icon far icon=\"clone\" class=\"left\"></mdb-icon>Voir projet</a>\n          <a *ngIf=\"projet.link\"  mdbBtn color=\"green\" size=\"sm\" class=\"waves-light\" href={{projet.link}} target=\"_blank\" mdbWavesEffect>\n          <mdb-icon far icon=\"clone\" class=\"left\"></mdb-icon>{{projet.messageLink}}</a>\n      </mdb-card-body>\n\n    </div>\n    <!--Grid column-->\n  </div>\n</div>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-overlay\" *ngIf=\"showOverlay\">\n  <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\n</div>\n<app-navbar></app-navbar>\n<app-profil></app-profil>\n<br>\n<app-formation></app-formation>\n<br>\n<app-projet></app-projet>\n<br>\n<app-competence></app-competence>\n<br>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"fixed-top navbar navbar-expand-md navbar-dark bg-dark mb-4\">\n  <a href=\"/\" class=\"navbar-brand\" style=\"color:#fff\">Portfolio</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n    aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"path=='/'\" class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#profile'\" class=\"nav-link\">Profil</a>\n        </li>\n        <li *ngIf=\"path=='/'\" class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#formations'\" class=\"nav-link\">Formations</a>\n        </li>\n        <li *ngIf=\"path=='/'\" class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#projects'\" class=\"nav-link\">Projets</a>\n        </li>\n        <li *ngIf=\"path=='/'\" class=\"nav-item\">\n          <a [ngx-scroll-to]=\"'#competences'\" class=\"nav-link\">Compétences</a>\n        </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/assets/docs/CV_CLEMENT.pdf\" target=\"_blank\" style=\"color:#fff\"\n          target=\"_blank\">CV</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/travels\" (click)=\"emitValue(null)\" style=\"color:#fff\">Voyages</a>\n      </li>\n      <li *ngIf=\"path=='/travels'\" class=\"nav-item\">\n        <a  class=\"nav-link\" (click)=\"emitValue(tripEnum.EUROPE)\" >Europe</a>\n      </li>\n      <li *ngIf=\"path=='/travels'\" class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"emitValue(tripEnum.US)\" >Etats-Unis</a>\n      </li>\n      <li *ngIf=\"path=='/travels'\" class=\"nav-item\">\n        <a  class=\"nav-link\"  (click)=\"emitValue(tripEnum.AUSTRALIE)\">Australie</a>\n      </li>\n      <li *ngIf=\"path=='/travels'\" class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"emitValue(tripEnum.CHINA)\">Chine</a>\n      </li>\n      <li *ngIf=\"path=='/travels'\" class=\"nav-item\">\n        <a  class=\"nav-link\" (click)=\"emitValue(tripEnum.OUZBEK_KIRGHIZ)\">Ouzbekistan/Kirghizistan</a>\n      </li>\n\n    </ul>\n  </div>\n\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/redirection404/redirection404.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redirection404/redirection404.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"pagenotfound\">\n  <div id=\"imagespagenotfound\">\n<img src=\"assets/icon/404.png\" class=\"img-fluid rounded mx-auto\"\nalt=\"Responsive image 404 error\">\n<br>\n<br>\n<img src=\"assets/icon/page-not-found.png\" class=\"img-fluid rounded mx-auto\"\nalt=\"Responsive image 404 error\">\n<br>\n<br>\n<img id=\"homebtn\" src=\"assets/icon/evil-corp.png\" class=\"img-fluid rounded mx-auto\"\nalt=\"Responsive image 404 error\" routerLink=''>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel/map-display/map-box/map-box.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel/map-display/map-box/map-box.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"map\" id=\"map\" class=\"match-parent\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel/travel.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel/travel.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"travels\">\n  <app-navbar (trip)=\"_receiveTrip($event)\"></app-navbar>\n  <div *ngIf=\"displayMarker&&markerToDisplay\" id=\"popUpMarker\" (click)=\"markerToDisplay=null\">\n    <div class=\"card\" id=\"windowMarker\">\n      <img *ngIf=\"markerToDisplay.properties.image&&markerToDisplay.properties.image!=''\" class=\"card-img-top\"\n        src={{markerToDisplay.properties.image}} alt=\"Card image cap\">\n      <div class=\"card-body mx-auto card-text\">\n        <h3 *ngIf=\"markerToDisplay\" class=\"card-text text-fluid\">{{markerToDisplay.properties.place}}</h3>\n        <h5 *ngIf=\"markerToDisplay\" class=\"card-text\">{{markerToDisplay.properties.trip}}</h5>\n      </div>\n    </div>\n  </div>\n  <app-map-box [trip]=\"trip\" [request]=\"requestMap\" (markerToDisplay)=\"_receiveMarker($event)\"></app-map-box>\n</section>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel/travel.component */ "./src/app/travel/travel.component.ts");
/* harmony import */ var _redirection404_redirection404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirection404/redirection404.component */ "./src/app/redirection404/redirection404.component.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'travels', component: _travel_travel_component__WEBPACK_IMPORTED_MODULE_5__["TravelComponent"] },
    { path: '**', component: _redirection404_redirection404_component__WEBPACK_IMPORTED_MODULE_6__["Redirection404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesModule"].forRoot()
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/blog.service */ "./src/app/service/blog.service.ts");



let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_components_formation_formation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/components/formation/formation.component */ "./src/app/home/components/formation/formation.component.ts");
/* harmony import */ var _home_components_profil_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/components/profil/profil.component */ "./src/app/home/components/profil/profil.component.ts");
/* harmony import */ var _home_components_projet_projet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/components/projet/projet.component */ "./src/app/home/components/projet/projet.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _home_components_competence_competence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/components/competence/competence.component */ "./src/app/home/components/competence/competence.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./travel/travel.component */ "./src/app/travel/travel.component.ts");
/* harmony import */ var _travel_map_display_map_box_map_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./travel/map-display/map-box/map-box.component */ "./src/app/travel/map-display/map-box/map-box.component.ts");
/* harmony import */ var _redirection404_redirection404_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./redirection404/redirection404.component */ "./src/app/redirection404/redirection404.component.ts");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/fesm2015/angular-resize-event.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _home_components_formation_formation_component__WEBPACK_IMPORTED_MODULE_7__["FormationComponent"],
            _home_components_profil_profil_component__WEBPACK_IMPORTED_MODULE_8__["ProfilComponent"],
            _home_components_projet_projet_component__WEBPACK_IMPORTED_MODULE_9__["ProjetComponent"],
            _home_components_competence_competence_component__WEBPACK_IMPORTED_MODULE_13__["CompetenceComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            _travel_travel_component__WEBPACK_IMPORTED_MODULE_16__["TravelComponent"],
            _travel_map_display_map_box_map_box_component__WEBPACK_IMPORTED_MODULE_17__["MapBoxComponent"],
            _redirection404_redirection404_component__WEBPACK_IMPORTED_MODULE_18__["Redirection404Component"]
        ],
        imports: [
            angular_resize_event__WEBPACK_IMPORTED_MODULE_19__["AngularResizedEventModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["IconsModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToModule"].forRoot(),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"].forRoot(),
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_11__["NgCircleProgressModule"].forRoot({
                // set defaults here
                radius: 50,
                outerStrokeWidth: 8,
                showInnerStroke: false,
                animationDuration: 500,
                showImage: true,
                animation: true,
                imageHeight: 70,
                imageWidth: 70,
                showBackground: true,
                showTitle: false,
                lazy: false,
                renderOnClick: false
            }),
        ],
        providers: [],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer{\r\n  width:100%;\r\n}\r\n\r\n.container{\r\n  width:100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.git-ic,.li-ic{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.col-6{\r\n  margin: 10px 0px 10px 0px;\r\n}\r\n\r\n.links{\r\n  width:100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nmdb-icon{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\np{\r\n  font-size: 1vw;\r\n  text-align: center;\r\n  margin:3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5naXQtaWMsLmxpLWlje1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtNntcclxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcbi5saW5rc3tcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubWRiLWljb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbnB7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjozcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/components/competence/competence.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/home/components/competence/competence.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#progLanguage{\r\n  padding:30px\r\n}\r\n\r\n.loader{\r\n  left: 0 !important;\r\n  top: 0 !important;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  cursor: pointer !important;\r\n  visibility: visible !important;\r\n  transition: visibility 0s, opacity 0.4s linear !important;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: wait !important;\r\n\r\n}\r\n\r\ni.fa.fa-spinner.fa-spin, .spinner-big {\r\n  font-size: 100px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2NvbXBldGVuY2UvY29tcGV0ZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHlEQUF5RDtFQUN6RCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2NvbXBldGVuY2UvY29tcGV0ZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2dMYW5ndWFnZXtcclxuICBwYWRkaW5nOjMwcHhcclxufVxyXG5cclxuLmxvYWRlcntcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjRzIGxpbmVhciAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbmkuZmEuZmEtc3Bpbm5lci5mYS1zcGluLCAuc3Bpbm5lci1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/components/competence/competence.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/components/competence/competence.component.ts ***!
  \********************************************************************/
/*! exports provided: CompetenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenceComponent", function() { return CompetenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/blog.service */ "./src/app/service/blog.service.ts");



let CompetenceComponent = class CompetenceComponent {
    constructor(api) {
        this.api = api;
        this.competences = [];
        this.showLoader = true;
        this.getCompetences = () => {
            this.api.getAllCompetences().subscribe(data => {
                this.competences = data;
                this.showLoader = false;
            }, error => {
                console.log(error);
            });
        };
        this.getCompetences();
    }
    ngOnInit() {
    }
};
CompetenceComponent.ctorParameters = () => [
    { type: src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }
];
CompetenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-competence',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./competence.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/competence/competence.component.html")).default,
        providers: [src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./competence.component.css */ "./src/app/home/components/competence/competence.component.css")).default]
    })
], CompetenceComponent);



/***/ }),

/***/ "./src/app/home/components/formation/formation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/home/components/formation/formation.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#card{\r\n  width:80%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin:15px 0px 15px 0px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n#image-profile-formation{\r\n  width:350px;\r\n\r\n}\r\n\r\n\r\n#text-card-formation{\r\n  width: 350px;\r\n  text-align: center;\r\n  height:100%;\r\n\r\n}\r\n\r\n\r\n#formations{\r\n  width:100%;\r\n}\r\n\r\n\r\nimg{\r\n  margin:8px 0px 8px 0px;\r\n}\r\n\r\n\r\n.loader{\r\n  left: 0 !important;\r\n  top: 0 !important;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  cursor: pointer !important;\r\n  visibility: visible !important;\r\n  transition: visibility 0s, opacity 0.4s linear !important;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: wait !important;\r\n\r\n}\r\n\r\n\r\ni.fa.fa-spinner.fa-spin, .spinner-big {\r\n  font-size: 100px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLFdBQVc7O0FBRWI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXOztBQUViOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIseURBQXlEO0VBQ3pELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1Qjs7QUFFekI7OztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJke1xyXG4gIHdpZHRoOjgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46MTVweCAwcHggMTVweCAwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNpbWFnZS1wcm9maWxlLWZvcm1hdGlvbntcclxuICB3aWR0aDozNTBweDtcclxuXHJcbn1cclxuXHJcbiN0ZXh0LWNhcmQtZm9ybWF0aW9ue1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcblxyXG59XHJcblxyXG4jZm9ybWF0aW9uc3tcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgbWFyZ2luOjhweCAwcHggOHB4IDBweDtcclxufVxyXG4ubG9hZGVye1xyXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNHMgbGluZWFyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogd2FpdCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuaS5mYS5mYS1zcGlubmVyLmZhLXNwaW4sIC5zcGlubmVyLWJpZyB7XHJcbiAgZm9udC1zaXplOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/components/formation/formation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/components/formation/formation.component.ts ***!
  \******************************************************************/
/*! exports provided: FormationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormationComponent", function() { return FormationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/blog.service */ "./src/app/service/blog.service.ts");



let FormationComponent = class FormationComponent {
    constructor(api) {
        this.api = api;
        this.formations = [];
        this.showLoader = true;
        this.getFormations = () => {
            this.api.getAllFormations().subscribe(data => {
                this.formations = data;
                this.showLoader = false;
            }, error => {
                console.log(error);
            });
        };
        this.getFormations();
    }
    ngOnInit() {
    }
};
FormationComponent.ctorParameters = () => [
    { type: src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }
];
FormationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/formation/formation.component.html")).default,
        providers: [src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formation.component.css */ "./src/app/home/components/formation/formation.component.css")).default]
    })
], FormationComponent);



/***/ }),

/***/ "./src/app/home/components/profil/profil.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home/components/profil/profil.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#profilePhoto{\r\n  margin-top:40px\r\n}\r\n\r\n#profile{\r\n  margin-top: 25px;\r\n  width:100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.loader{\r\n  left: 0 !important;\r\n  top: 0 !important;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  cursor: pointer !important;\r\n  visibility: visible !important;\r\n  transition: visibility 0s, opacity 0.4s linear !important;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: wait !important;\r\n\r\n}\r\n\r\ni.fa.fa-spinner.fa-spin, .spinner-big {\r\n  font-size: 100px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3Byb2ZpbC9wcm9maWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHlEQUF5RDtFQUN6RCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3Byb2ZpbC9wcm9maWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlUGhvdG97XHJcbiAgbWFyZ2luLXRvcDo0MHB4XHJcbn1cclxuXHJcbiNwcm9maWxle1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRlcntcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjRzIGxpbmVhciAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbmkuZmEuZmEtc3Bpbm5lci5mYS1zcGluLCAuc3Bpbm5lci1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/components/profil/profil.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/components/profil/profil.component.ts ***!
  \************************************************************/
/*! exports provided: ProfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilComponent", function() { return ProfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/blog.service */ "./src/app/service/blog.service.ts");



let ProfilComponent = class ProfilComponent {
    constructor(api) {
        this.api = api;
        this.getProfile = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.api.getProfile().subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.myProfile = data;
                this.CalculateAge();
            }), error => {
                console.log(error);
            });
        });
        this.getProfile();
    }
    ngOnInit() {
    }
    CalculateAge() {
        if (this.myProfile.birthDate) {
            let _myBirthDate = new Date(this.myProfile.birthDate);
            var timeDiff = Math.abs(Date.now() - (_myBirthDate).getTime());
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            this.age = Math.floor((timeDiff / 31556908800));
        }
    }
};
ProfilComponent.ctorParameters = () => [
    { type: src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }
];
ProfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profil',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profil.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/profil/profil.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profil.component.css */ "./src/app/home/components/profil/profil.component.css")).default]
    })
], ProfilComponent);



/***/ }),

/***/ "./src/app/home/components/projet/projet.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home/components/projet/projet.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n  -o-object-fit:cover;\r\n     object-fit:cover;\r\n  width:100%;\r\n  height: 100%;\r\n}\r\n\r\n#image-card-project{\r\n  width:80%;\r\n  height:40%;\r\n}\r\n\r\nmdb-card-body{\r\n  margin: 15px;\r\n}\r\n\r\n#projects{\r\n width: 100%;\r\n}\r\n\r\n.card-project{\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3Byb2pldC9wcm9qZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFnQjtLQUFoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvcHJvamV0L3Byb2pldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNpbWFnZS1jYXJkLXByb2plY3R7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIGhlaWdodDo0MCU7XHJcbn1cclxuXHJcbm1kYi1jYXJkLWJvZHl7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG4jcHJvamVjdHN7XHJcbiB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtcHJvamVjdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/components/projet/projet.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/components/projet/projet.component.ts ***!
  \************************************************************/
/*! exports provided: ProjetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetComponent", function() { return ProjetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/blog.service */ "./src/app/service/blog.service.ts");



let ProjetComponent = class ProjetComponent {
    constructor(api) {
        this.api = api;
        this.projets = [];
        this.getProjets = () => {
            this.api.getAllProjets().subscribe(data => {
                this.projets = data;
            }, error => {
                console.log(error);
            });
        };
        this.getProjets();
    }
    ngOnInit() {
    }
};
ProjetComponent.ctorParameters = () => [
    { type: src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }
];
ProjetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/projet/projet.component.html")).default,
        providers: [src_app_service_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projet.component.css */ "./src/app/home/components/projet/projet.component.css")).default]
    })
], ProjetComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-overlay {\r\n  left: 0 !important;\r\n  top: 0 !important;\r\n  z-index: 10000 !important;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  position: fixed !important;\r\n  background-color: rgba(0,0,0,0.9) !important;\r\n  cursor: pointer !important;\r\n  visibility: visible !important;\r\n  transition: visibility 0s, opacity 0.4s linear !important;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: wait !important;\r\n}\r\n.my-overlay i.fa.fa-spinner.fa-spin, .spinner-big {\r\n  font-size: 100px !important;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiw0Q0FBNEM7RUFDNUMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5Qix5REFBeUQ7RUFDekQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1vdmVybGF5IHtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNHMgbGluZWFyICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogd2FpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5teS1vdmVybGF5IGkuZmEuZmEtc3Bpbm5lci5mYS1zcGluLCAuc3Bpbm5lci1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.showOverlay = true;
        router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
    }
    ngOnInit() {
    }
    navigationInterceptor(event) {
        console.log(event);
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.showOverlay = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this.showOverlay = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this.showOverlay = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.showOverlay = false;
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel/map-display/map/map */ "./src/app/travel/map-display/map/map.ts");





let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.trip = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.path = router.url;
    }
    ngOnInit() {
    }
    scroll(el) {
        el.scrollIntoView();
    }
    emitValue($value) {
        this.trip.emit($value);
    }
    get tripEnum() {
        return _travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["Trip"];
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarComponent.prototype, "trip", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/redirection404/redirection404.component.css":
/*!*************************************************************!*\
  !*** ./src/app/redirection404/redirection404.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pagenotfound{\r\nwidth: 100%;\r\nheight: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n\r\n}\r\n\r\n#imagespagenotfound{\r\n  width:80%;\r\n  height: 80%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n#homebtn{\r\n  width:50px;\r\n  height: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkaXJlY3Rpb240MDQvcmVkaXJlY3Rpb240MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVkaXJlY3Rpb240MDQvcmVkaXJlY3Rpb240MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlbm90Zm91bmR7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG4jaW1hZ2VzcGFnZW5vdGZvdW5ke1xyXG4gIHdpZHRoOjgwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuI2hvbWVidG57XHJcbiAgd2lkdGg6NTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/redirection404/redirection404.component.ts":
/*!************************************************************!*\
  !*** ./src/app/redirection404/redirection404.component.ts ***!
  \************************************************************/
/*! exports provided: Redirection404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirection404Component", function() { return Redirection404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Redirection404Component = class Redirection404Component {
    constructor() { }
    ngOnInit() {
    }
};
Redirection404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redirection404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./redirection404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/redirection404/redirection404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./redirection404.component.css */ "./src/app/redirection404/redirection404.component.css")).default]
    })
], Redirection404Component);



/***/ }),

/***/ "./src/app/service/blog.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/blog.service.ts ***!
  \*****************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_configs_server_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/configs/server.config */ "./src/configs/server.config.ts");




let BlogService = class BlogService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_configs_server_config__WEBPACK_IMPORTED_MODULE_3__["serverUrl"] + "/resume";
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
    }
    getAllFormations() {
        return this.http.get(this.baseURL + '/formation/', { headers: this.httpHeaders });
    }
    getAllProjets() {
        return this.http.get(this.baseURL + '/project/', { headers: this.httpHeaders });
    }
    getAllCompetences() {
        return this.http.get(this.baseURL + '/skill/', { headers: this.httpHeaders });
    }
    getProfile() {
        return this.http.get(this.baseURL + '/profile/', { headers: this.httpHeaders });
    }
};
BlogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BlogService);



/***/ }),

/***/ "./src/app/service/map.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/map.service.ts ***!
  \****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_configs_server_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/configs/server.config */ "./src/configs/server.config.ts");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/travel/map-display/map/map */ "./src/app/travel/map-display/map/map.ts");







let MapService = class MapService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_configs_server_config__WEBPACK_IMPORTED_MODULE_2__["serverUrl"] + "/travel";
        this.markers = [];
        this.markers$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.markers);
        this.US = {
            zoom: 4,
            center: [-116.8773718667903, 39.356895110107764],
        };
        this.Chine = {
            zoom: 3,
            center: [113.88296740544001, 30.258850337323175],
        };
        this.Australie = {
            zoom: 3,
            center: [143.0283310617436, -27.98313247407145],
        };
        this.Europe = {
            zoom: 4,
            center: [2.3514616, 48.8566969],
        };
        this.OuzbKhirg = {
            zoom: 4,
            center: [69.52978196887332, 40.21026123577812],
        };
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-type': 'application/json' });
        Object.getOwnPropertyDescriptor(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__, 'accessToken').set('pk.eyJ1IjoibWVuY2VsdCIsImEiOiJjazl5ZXVnOXUwb3NtM2lvOHl4b3VtMGNmIn0.kyXnFYWW15ocu0mg9ytqCg');
        this.getMarkers().subscribe((data) => {
            this.markers = data;
            this.markers$.next(this.markers);
        });
    }
    getMarkers() {
        return this.http.get(this.baseURL + '/marker', { headers: this.httpHeaders });
    }
    get tripEnum() {
        return src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_6__["Trip"];
    }
};
MapService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MapService);



/***/ }),

/***/ "./src/app/travel/map-display/map-box/map-box.component.css":
/*!******************************************************************!*\
  !*** ./src/app/travel/map-display/map-box/map-box.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.match-parent {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhdmVsL21hcC1kaXNwbGF5L21hcC1ib3gvbWFwLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvbWFwLWRpc3BsYXkvbWFwLWJveC9tYXAtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdGNoLXBhcmVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/travel/map-display/map-box/map-box.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/travel/map-display/map-box/map-box.component.ts ***!
  \*****************************************************************/
/*! exports provided: MapBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBoxComponent", function() { return MapBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/travel/map-display/map/map */ "./src/app/travel/map-display/map/map.ts");
/* harmony import */ var src_app_service_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/map.service */ "./src/app/service/map.service.ts");






let MapBoxComponent = class MapBoxComponent {
    constructor(mapService) {
        this.mapService = mapService;
        this.markerToDisplay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.style = 'mapbox://styles/mapbox/outdoors-v9';
        this.lat = 43.6171461;
        this.lng = 7.0642366;
        this.markers = [];
        this.mapService.getMarkers().subscribe(data => {
            this.markers = data;
        }, error => {
            console.log(error);
        });
    }
    ngOnChanges(changes) {
        if (this.map && this.markers && this.source) {
            if (this.trip) {
                this.selectedTrip(this.trip);
            }
            else {
                let data = new src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["FeatureCollection"](this.markers);
                this.source.setData(data);
                this.map.flyTo({ center: [this.lng, this.lat], zoom: 1 });
            }
        }
    }
    ngOnInit() {
        this.buildMap();
    }
    buildMap() {
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"]({
            container: 'map',
            style: this.style,
            zoom: 1,
            center: [this.lng, this.lat]
        });
        /// Add map controls
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["NavigationControl"](), 'bottom-right');
        /// Add realtime firebase data on map load
        this.map.on('load', (event) => {
            this.map.addSource('backend', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            });
            this.source = this.map.getSource('backend');
            this.mapService.getMarkers().subscribe(markers => {
                let data = new src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["FeatureCollection"](markers);
                this.source.setData(data);
                this.drawPath(this.tripEnum.AUSTRALIE);
                this.drawPath(this.tripEnum.US);
                this.drawPath(this.tripEnum.CHINA);
                this.drawPath(this.tripEnum.OUZBEK_KIRGHIZ);
            });
            this.map.loadImage("/assets/icon/map-marker-icon.png", function (error, image) {
                this.map.addImage('custom-marker', image);
                this.map.addLayer({
                    id: 'markers',
                    source: 'backend',
                    type: 'symbol',
                    layout: {
                        'icon-image': 'custom-marker',
                        "icon-size": 0.05
                    },
                    paint: {
                        'text-color': '#f16624',
                        'text-halo-color': '#fff',
                        'text-halo-width': 2
                    }
                });
            }.bind(this));
            //
            this.map.on('click', 'markers', function (e) {
                this.markerToDisplay.emit(e.features[0]);
            }.bind(this));
            // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
            this.map.on('mouseenter', 'markers', function () {
                this.map.getCanvas().style.cursor = 'pointer';
            }.bind(this));
            // Change it back to a pointer when it leaves.
            this.map.on('mouseleave', 'markers', function () {
                this.map.getCanvas().style.cursor = '';
            }.bind(this));
        });
    }
    get tripEnum() {
        return src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["Trip"];
    }
    selectedTrip(trip) {
        switch (trip) {
            case src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["Trip"].US:
                this.map.flyTo({ center: [this.mapService.US.center[0], this.mapService.US.center[1]], zoom: this.mapService.US.zoom });
                break;
            case src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["Trip"].CHINA:
                this.map.flyTo({ center: [this.mapService.Chine.center[0], this.mapService.Chine.center[1]], zoom: this.mapService.Chine.zoom });
                break;
            case src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["Trip"].AUSTRALIE:
                this.map.flyTo({ center: [this.mapService.Australie.center[0], this.mapService.Australie.center[1]], zoom: this.mapService.Australie.zoom });
                break;
            case src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["Trip"].OUZBEK_KIRGHIZ:
                this.map.flyTo({ center: [this.mapService.OuzbKhirg.center[0], this.mapService.OuzbKhirg.center[1]], zoom: this.mapService.OuzbKhirg.zoom });
                break;
            case src_app_travel_map_display_map_map__WEBPACK_IMPORTED_MODULE_3__["Trip"].EUROPE:
                this.map.flyTo({ center: [this.mapService.Europe.center[0], this.mapService.Europe.center[1]], zoom: this.mapService.Europe.zoom });
                break;
        }
    }
    drawPath(trip) {
        let tab = [];
        this.markers.forEach(element => {
            if (element.properties.trip == trip) {
                tab.push(element.geometry.coordinates);
            }
        });
        let id = 'route' + trip;
        this.map.addSource(id, {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'color': '#F7455D' // red
                        },
                        'geometry': {
                            'type': 'LineString',
                            'coordinates': tab
                        }
                    },
                ]
            }
        });
        this.map.addLayer({
            'id': id,
            'type': 'line',
            'source': id,
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': 'green',
                'line-width': 3
            }
        });
    }
};
MapBoxComponent.ctorParameters = () => [
    { type: src_app_service_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapBoxComponent.prototype, "request", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MapBoxComponent.prototype, "trip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MapBoxComponent.prototype, "markerToDisplay", void 0);
MapBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel/map-display/map-box/map-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-box.component.css */ "./src/app/travel/map-display/map-box/map-box.component.css")).default]
    })
], MapBoxComponent);



/***/ }),

/***/ "./src/app/travel/map-display/map/map.ts":
/*!***********************************************!*\
  !*** ./src/app/travel/map-display/map/map.ts ***!
  \***********************************************/
/*! exports provided: Trip, GeoJson, FeatureCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoJson", function() { return GeoJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCollection", function() { return FeatureCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Trip;
(function (Trip) {
    Trip["US"] = "Etats-Unis";
    Trip["CHINA"] = "Chine";
    Trip["AUSTRALIE"] = "Australie";
    Trip["OUZBEK_KIRGHIZ"] = "Ouzbekistan et Khirghisiztan";
    Trip["EUROPE"] = "Europe";
})(Trip || (Trip = {}));
class GeoJson {
    constructor(coordinates, properties) {
        this.type = 'Feature';
        this.geometry = {
            type: 'Point',
            coordinates: coordinates
        };
        this.properties = properties;
    }
}
class FeatureCollection {
    constructor(features) {
        this.features = features;
        this.type = 'FeatureCollection';
    }
}


/***/ }),

/***/ "./src/app/travel/travel.component.css":
/*!*********************************************!*\
  !*** ./src/app/travel/travel.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#travels{\r\n  height: 100%;\r\n  width: 100%;\r\n\r\n}\r\n\r\n#popUpMarker{\r\n  margin-left:10px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  max-height: 40%;\r\n  max-width: 200px;\r\n  margin-top: 80px;\r\n}\r\n\r\n#windowMarker{\r\n  width:100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhdmVsL3RyYXZlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwvdHJhdmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdHJhdmVsc3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4jcG9wVXBNYXJrZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXgtaGVpZ2h0OiA0MCU7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4jd2luZG93TWFya2Vye1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/travel/travel.component.ts":
/*!********************************************!*\
  !*** ./src/app/travel/travel.component.ts ***!
  \********************************************/
/*! exports provided: TravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelComponent", function() { return TravelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TravelComponent = class TravelComponent {
    constructor() {
        this.requestMap = 0;
        this.displayMarker = true;
    }
    ngOnInit() {
    }
    _receiveTrip($event) {
        this.trip = $event;
        this.markerToDisplay = null;
        this.requestMap++;
    }
    _receiveMarker($event) {
        this.markerToDisplay = $event;
    }
};
TravelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./travel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/travel/travel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./travel.component.css */ "./src/app/travel/travel.component.css")).default]
    })
], TravelComponent);



/***/ }),

/***/ "./src/configs/server.config.ts":
/*!**************************************!*\
  !*** ./src/configs/server.config.ts ***!
  \**************************************/
/*! exports provided: httpOptionsBase, serverUrl, serverUrlImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptionsBase", function() { return httpOptionsBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverUrl", function() { return serverUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverUrlImage", function() { return serverUrlImage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


const httpOptionsBase = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
const serverUrl = 'https://portfolio--backend.herokuapp.com/api';
const serverUrlImage = 'https://portfolio--backend.herokuapp.com/uploads';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pouey\Documents\projets\site\portfolio-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map