(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
            _this.renderer.listenGlobal('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 // this is needed!












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_7__["ExamplesModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/category/category.component */ "./src/app/pages/category/category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _components_components_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsComponent"] },
    { path: 'landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'login', component: _examples_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'profile', component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'product/:id', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductPageComponent"] },
    { path: 'category/:id', component: _pages_category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"title\">Basic Elements</h3>\r\n<div id=\"buttons\">\r\n    <h4>Buttons</h4>\r\n    <p class=\"category\">Pick your style</p>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <button class=\"btn btn-primary\" type=\"button\">Default</button>\r\n            <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\r\n            <button class=\"btn btn-primary btn-round\" type=\"button\">\r\n                <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\r\n            </button>\r\n            <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\r\n                <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n            </button>\r\n            <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\r\n        </div>\r\n    </div>\r\n    <p class=\"category\">Pick your size</p>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <button class=\"btn btn-primary btn-sm\">Small</button>\r\n            <button class=\"btn btn-primary\">Regular</button>\r\n            <button class=\"btn btn-primary btn-lg\">Large</button>\r\n        </div>\r\n    </div>\r\n    <p class=\"category\">Pick your color</p>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <button class=\"btn\">Default</button>\r\n            <button class=\"btn btn-primary\">Primary</button>\r\n            <button class=\"btn btn-info\">Info</button>\r\n            <button class=\"btn btn-success\">Success</button>\r\n            <button class=\"btn btn-warning\">Warning</button>\r\n            <button class=\"btn btn-danger\">Danger</button>\r\n            <button class=\"btn btn-neutral\">Neutral</button>\r\n        </div>\r\n    </div>\r\n    <h4>Links</h4>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <button class=\"btn btn-link\">Default</button>\r\n            <button class=\"btn btn-link btn-primary \">Primary</button>\r\n            <button class=\"btn btn-link btn-info\">Info</button>\r\n            <button class=\"btn btn-link btn-success\">Success</button>\r\n            <button class=\"btn btn-link btn-warning\">Warning</button>\r\n            <button class=\"btn btn-link btn-danger\">Danger</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"inputs\">\r\n    <h4>Inputs</h4>\r\n    <p class=\"category\">Form Controls</p>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"form-group has-success\">\r\n                <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"form-group has-danger\">\r\n                <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                        <i class=\"fa fa-user-circle\"></i>\r\n                    </span>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\">\r\n                        <i class=\"now-ui-icons users_single-02\"></i>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" id=\"checkRadios\">\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n        <p class=\"category\">Checkboxes</p>\r\n        <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\">\r\n                <span class=\"form-check-sign\"></span>\r\n                Unchecked\r\n            </label>\r\n        </div>\r\n        <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" checked>\r\n                <span class=\"form-check-sign\"></span>\r\n                Checked\r\n            </label>\r\n        </div>\r\n        <div class=\"form-check disabled\">\r\n            <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" disabled>\r\n                <span class=\"form-check-sign\"></span>\r\n                Disabled Unchecked\r\n            </label>\r\n        </div>\r\n        <div class=\"form-check disabled\">\r\n            <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\r\n                <span class=\"form-check-sign\"></span>\r\n                Disabled Checked\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n        <p class=\"category\">Radios</p>\r\n        <div class=\"form-check form-check-radio\">\r\n            <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\r\n                <span class=\"form-check-sign\"></span>\r\n                Radio is off\r\n            </label>\r\n        </div>\r\n        <div class=\"form-check form-check-radio\">\r\n            <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\r\n                <span class=\"form-check-sign\"></span>\r\n                Radio is on\r\n            </label>\r\n        </div>\r\n        <div class=\"form-check form-check-radio disabled\">\r\n            <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\r\n                <span class=\"form-check-sign\"></span>\r\n                Disabled radio is off\r\n            </label>\r\n        </div>\r\n        <div class=\"form-check form-check-radio disabled\">\r\n            <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\r\n                <span class=\"form-check-sign\"></span>\r\n                Disabled radio is on\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n        <p class=\"category\">Toggle Buttons</p>\r\n        <bSwitch [(ngModel)]=\"state\">\r\n        </bSwitch>\r\n        <bSwitch> Toggle is off\r\n        </bSwitch>\r\n    </div>\r\n    <div class=\"col-sm-6 col-lg-3\">\r\n        <p class=\"category\">Sliders</p>\r\n        <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\r\n        <br>\r\n        <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header clear-filter\" filter-color=\"primary\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('https://www.scipioerp.com/files/2016/03/4ffb90e8948c4e47822ecd2b860e565a_28_1600-1.jpg');\">\r\n\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center brand\">\r\n                <h1 class=\"h1-seo\">Angular JS</h1>\r\n                <b>for</b>\r\n                <br/>\r\n                <br/>\r\n                <img class=\"n-logo\" src=\"assets/img/scipio/scipio-logo.png\" alt=\"\">\r\n                <br/>\r\n                <em>Let's celebrate modern web-development!</em>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"main\">\r\n        <!--  \r\n    <div class=\"section section-images\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"hero-images-container\">\r\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-1\">\r\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-2\">\r\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>-->\r\n        <div class=\"section section-slider\">\r\n            <div class=\"container\">\r\n                <h2>Slider</h2>\r\n                <app-productslider [productcategoryid]=\"'ELTRN-100'\" [title]=\"'Electronics'\"></app-productslider>\r\n                <app-slider [title]=\"'Image Slider'\"></app-slider>\r\n            </div>\r\n        </div>\r\n        <div class=\"section section-basic\">\r\n            <div class=\"container\">\r\n                <h2>Content Elements</h2>\r\n                <app-basicelements></app-basicelements>\r\n            </div>\r\n        </div>\r\n      <!--<app-navigation></app-navigation>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _shared_productslider_productslider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/productslider/productslider.component */ "./src/app/shared/productslider/productslider.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var ngx_slick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-slick */ "./node_modules/ngx-slick/index.js");
/* harmony import */ var _shared_slider_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/slider/slider.component */ "./src/app/shared/slider/slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JWBootstrapSwitchModule"],
                // Plugins
                ngx_slick__WEBPACK_IMPORTED_MODULE_14__["SlickModule"].forRoot()
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalBasic"],
                _shared_productslider_productslider_component__WEBPACK_IMPORTED_MODULE_8__["ProductSliderComponent"],
                _shared_slider_slider_component__WEBPACK_IMPORTED_MODULE_15__["SliderComponent"]
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\n Launch Modal\n</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <h4 class=\"title title-up\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\n   Launch Modal Mini\n</button>\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header justify-content-center\">\n      <div class=\"modal-profile\">\n          <i class=\"now-ui-icons users_circle-08\"></i>\n      </div>\n  </div>\n  <div class=\"modal-body\">\n      <p>Always have an access to your profile</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>Menu</h4>\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item active\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <div ngbDropdown class=\"dropdown\">\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                        <p>\n                                            Dropdown\n                                        </p>\n                                      </a>\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                      </div>\n                                  </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Menu with Icons</h4>\n                <nav class=\"navbar navbar-expand-lg bg-info\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\n                            <ul class=\"navbar-nav ml-auto\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"dropdown\">\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                        </a>\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                                            <div class=\"dropdown-header\">Dropdown header</div>\n                                            <a class=\"dropdown-item\">Action</a>\n                                            <a class=\"dropdown-item\">Another action</a>\n                                            <a class=\"dropdown-item\">Something else here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Another separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <h4>Navigation</h4>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\n            <!-- Navbar Primary  -->\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Primary -->\n            <!-- Navbar Info -->\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Info -->\n            <!-- Navbar Success -->\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Success -->\n            <!-- Navbar Warning -->\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Warning -->\n            <!-- Navbar Danger -->\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Share</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Tweet</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                    <p>Pin</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Danger -->\n            <!-- Navbar Transparent -->\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Facebook</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Twitter</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                    <p>Instagram</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Transparent-->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                  <span aria-hidden=\"true\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  </span>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                      <div class=\"alert-icon\">\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                      </div>\n                    </ng-container>\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\n                </div>\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"typography-line\">\n                        <h1>\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h3>\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h4>\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h5>\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h6>\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\n                    </div>\n                    <div class=\"typography-line\">\n                        <p>\n                            <span>Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Quote</span>\n                        <blockquote>\n                            <p class=\"blockquote blockquote-primary\">\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                <br>\n                                <br>\n                                <small>\n                                    - Noaa\n                                </small>\n                            </p>\n                        </blockquote>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n            <h4>Images</h4>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.component.html":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  examples works!\n</p>\n"

/***/ }),

/***/ "./src/app/examples/examples.component.scss":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/examples.component.ts":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.scss */ "./src/app/examples/examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples.component */ "./src/app/examples/examples.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JWBootstrapSwitchModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _examples_component__WEBPACK_IMPORTED_MODULE_10__["ExamplesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/examples/landing/landing.component.html":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg6.jpg');\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <h1 class=\"title\">This is our great company.</h1>\r\n                <div class=\"text-center\">\r\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                    </a>\r\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                    </a>\r\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fa fa-google-plus\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-about-us\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                    <h2 class=\"title\">Who we are?</h2>\r\n                    <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"separator separator-primary\"></div>\r\n            <div class=\"section-story-overview\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\r\n                            <!-- First image on the left side -->\r\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\r\n                                <br>\r\n                                <br>\r\n                                <small>-NOAA</small>\r\n                            </p>\r\n                        </div>\r\n                        <!-- Second image on the left side of the article -->\r\n                        <div class=\"image-container\" style=\"background-image: url('assets/img/bg3.jpg')\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <!-- First image on the right side, above the article -->\r\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg1.jpg')\"></div>\r\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\r\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\r\n                        </p>\r\n                        <p>\r\n                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\r\n                        </p>\r\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-team text-center\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Here is our team</h2>\r\n            <div class=\"team\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Romina Hadid</h4>\r\n                            <p class=\"category text-primary\">Model</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-instagram\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/ryan.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Ryan Tompson</h4>\r\n                            <p class=\"category text-primary\">Designer</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/eva.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Eva Jenner</h4>\r\n                            <p class=\"category text-primary\">Fashion</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-google-plus\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-youtube-play\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-contact-us text-center\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Want to work with us?</h2>\r\n            <p class=\"description\">Your project is very important to us.</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\r\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                          <i class=\"now-ui-icons users_circle-08\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                            <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                    <div class=\"textarea-container\">\r\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n                    </div>\r\n                    <div class=\"send-button\">\r\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/landing/landing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/landing/landing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_1__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/examples/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/examples/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/examples/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-header\" filter-color=\"primary\">\r\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"col-md-4 content-center\">\r\n            <div class=\"card card-login card-plain\">\r\n                <form class=\"form\" method=\"\" action=\"\">\r\n                    <div class=\"header header-primary text-center\">\r\n                        <div class=\"logo-container\">\r\n                            <img src=\"assets/img/scipio/scipio-logo-small.png\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                        </div>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                      </div>\r\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                        </div>\r\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\r\n                    </div>\r\n                    <div class=\"pull-left\">\r\n                        <h6>\r\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\r\n                        </h6>\r\n                    </div>\r\n                    <div class=\"pull-right\">\r\n                        <h6>\r\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\r\n                        </h6>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/examples/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/examples/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/examples/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <div class=\"photo-container\">\r\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\r\n                </div>\r\n                <h3 class=\"title\">Ryan Scheinder</h3>\r\n                <p class=\"category\">Photographer</p>\r\n                <div class=\"content\">\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>48</h2>\r\n                        <p>Bookmarks</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n          <div class=\"button-container\">\r\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n              </a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\r\n                  <i class=\"fa fa-instagram\"></i>\r\n              </a>\r\n          </div>\r\n          <h3 class=\"title\">About me</h3>\r\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"title text-center\">My Portfolio</h4>\r\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons design_image\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons location_world\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons sport_user-run\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer footer-default\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://presentation.creative-tim.com\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n                {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/profile/profile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_1__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/examples/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/examples/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/category/category.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/category/category.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <h1 class=\"title\"></h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\" style=\"margin-top:40px;\">\r\n\r\n                <div class=\"col-md-12\">\r\n                    <h2 class=\"description\">Products</h2>\r\n                    <div class=\"card-columns\">\r\n                        <div ngxSlickItem *ngFor=\"let product of products\">\r\n                            <div class=\"card text-center\">\r\n                                <div class=\"card-title card-header\">{{product.title_i18n_general}}</div>\r\n\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"ribbon\">\r\n                                        <span>On Sale!</span>\r\n                                    </div>\r\n\r\n                                    <div>\r\n                                        <div class=\"scipio-image-container\" style=\"width: 100%; height: 100px;\" scipiofit=\"contain\">\r\n                                            <a href=\"product/{{product.productId}}\" tabindex=\"0\">\r\n                                                <img src=\"{{ product.smallImage }}\" class=\"scipio-image\" style=\"width: 100%; height: 100px;object-fit: contain;\">\r\n                                            </a>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div class=\"card-text\">{{product.description_i18n_general}}\r\n                                    </div>\r\n                                    <div class=\"price\">{{product.defaultPrice | currency}}</div>\r\n                                    <div class=\"card-link\">\r\n                                        <a href=\"product/{{product.productId}}\" class=\"link-type-text action-nav action-primary btn btn-raised btn-sm btn-primary action-readonly action-read action-view\"\r\n                                            tabindex=\"0\">Detail</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/category/category.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/category/category.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/category/category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageComponent", function() { return CategoryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_products_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/products.services */ "./src/app/shared/services/products.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryPageComponent = /** @class */ (function () {
    function CategoryPageComponent(catService, route) {
        this.catService = catService;
        this.route = route;
        this.data = new Date();
        this.products = [];
    }
    CategoryPageComponent.prototype.loadCategoryInfo = function (categoryId) {
        var _this = this;
        return this.catService.getProductsByCategory(categoryId).subscribe(function (resp) {
            console.log(resp['results']);
            _this.products = resp['results'];
        });
    };
    CategoryPageComponent.prototype.onSubmit = function (f) {
        console.log(f); // { first: '', last: '' }
    };
    CategoryPageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('category-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        // add parameter
        this.categoryId = this.route.snapshot.params['id'];
        this.loadCategoryInfo(this.categoryId);
    };
    CategoryPageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('category-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    CategoryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-page',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/pages/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/pages/category/category.component.scss")],
            providers: [app_shared_services_products_services__WEBPACK_IMPORTED_MODULE_1__["ProductService"]]
        }),
        __metadata("design:paramtypes", [app_shared_services_products_services__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryPageComponent);
    return CategoryPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "./src/app/pages/category/category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JWBootstrapSwitchModule"]
            ],
            declarations: [
                _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductPageComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryPageComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/product/product.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" [ngStyle]=\"{'background-image': 'url(' + product[0]?.largeImage + ')'}\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <h1 class=\"title\">{{product[0]?.title_i18n_general}}</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n            <form #cartForm=\"ngForm\" (ngSubmit)=\"onSubmit(cartForm.value)\" novalidate>\r\n                <input type=\"hidden\" name=\"product_id\" [(ngModel)]=\"productId\" />\r\n                <input type=\"hidden\" name=\"add_product_id\" [(ngModel)]=\"productId\" />\r\n\r\n                <h3 class=\"title\">{{product[0]?.title_i18n_general}}</h3>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <img src=\"{{product[0]?.mediumImage}}\" alt=\"\" class=\"img-raised\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <p>{{product[0]?.description_i18n_general}}</p>\r\n                        <p>\r\n                            <span id=\"product-price_old\">\r\n                                <del>{{product[0]?.listPrice | currency}}</del>\r\n                            </span>\r\n                            <span id=\"product-price\">\r\n                                <strong>{{product[0]?.defaultPrice | currency}}</strong>\r\n                            </span>\r\n                        </p>\r\n                        <button class=\"btn btn-danger\" (click)=\"onSubmit()\">Add to Cart</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"row\" style=\"margin-top:40px;\">\r\n                <div class=\"col-md-12\">\r\n                    <h3 class=\"description\">Description</h3>\r\n                    <p>{{product[0]?.longdescription_i18n_general}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/product/product.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageComponent", function() { return ProductPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_services_products_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/products.services */ "./src/app/shared/services/products.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPageComponent = /** @class */ (function () {
    function ProductPageComponent(products, route) {
        this.products = products;
        this.route = route;
        this.data = new Date();
        this.product = new Map();
    }
    ProductPageComponent.prototype.loadProductInfo = function (productId) {
        var _this = this;
        return this.products.getProductsById(productId).subscribe(function (resp) {
            console.log(resp['results']);
            _this.product = resp['results'];
        });
    };
    ProductPageComponent.prototype.onSubmit = function (f) {
        console.log(f); // { first: '', last: '' }
    };
    ProductPageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('product-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        // add parameter
        this.productId = this.route.snapshot.params['id'];
        this.loadProductInfo(this.productId);
    };
    ProductPageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('product-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProductPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-page',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/product/product.component.scss")],
            providers: [app_shared_services_products_services__WEBPACK_IMPORTED_MODULE_1__["ProductService"]]
        }),
        __metadata("design:paramtypes", [app_shared_services_products_services__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductPageComponent);
    return ProductPageComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" data-background-color=\"black\">\r\n  <div class=\"container\">\r\n      <nav>\r\n          <ul>\r\n              <li>\r\n                  <a href=\"https://www.scipioerp.com\">\r\n                      Scipio ERP\r\n                  </a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"http://www.ilscipio.com\">\r\n                      About Us\r\n                  </a>\r\n              </li>\r\n          </ul>\r\n      </nav>\r\n      <div class=\"copyright\">\r\n          &copy;\r\n        {{data | date: 'yyyy'}}, \r\n          <a href=\"http://www.scipioerp.com\" target=\"_blank\">Scipio ERP</a>. UI based on\r\n          <a href=\"https://timcreative.github.io/now-ui-kit-angular/\" target=\"_blank\">\"Now UI Kit - Angular\"</a>.\r\n      </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.data = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n      <div class=\"dropdown button-dropdown\">\r\n        <div ngbDropdown>\r\n          <a class=\"dropdown-toggle\" ngbDropdownToggle>\r\n              <span class=\"button-bar\"></span>\r\n              <span class=\"button-bar\"></span>\r\n              <span class=\"button-bar\"></span>\r\n          </a>\r\n           <div ngbDropdownMenu>\r\n             <a class=\"dropdown-header\">Catalog</a>\r\n             <a class=\"dropdown-item\" href=\"category/CATALOG1\">Demo Catalog</a>\r\n             <a class=\"dropdown-item\" href=\"category/PROMOTIONS\">Featured Products</a>\r\n             <div class=\"dropdown-divider\"></div>\r\n             <a class=\"dropdown-header\">(Now UI) Example Pages</a>\r\n             <a class=\"dropdown-item\" href=\"landing\">Landing Page</a>\r\n             <a class=\"dropdown-item\" href=\"profile\">Profile</a>\r\n             <a class=\"dropdown-item\" href=\"login\">Login</a>\r\n           </div>\r\n         </div>\r\n      </div>\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\" ngbTooltip=\"\">\r\n                <img alt=\"SCIPIO Store\" src=\"/images/scipio/scipio-logo-small.png\" class=\"navbar-logo\">Angular Shop\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"category/CATALOG1\" target=\"_blank\">\r\n                      <i class=\"fa fa-shopping-bag\"></i>\r\n                      <p>Catalog</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"login\">\r\n                      <i class=\"fa fa-sign-in\"></i>\r\n                      <p>Login</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"checkout/cart\" target=\"_blank\">\r\n                      <i class=\"fa fa-shopping-cart\"></i>\r\n                      <p>$0.00</p>\r\n                  </a>\r\n                </li>\r\n                \r\n                <!-- \r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"#\" target=\"_blank\" data-original-title=\"Follow us on Twitter\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"#\" target=\"_blank\" data-original-title=\"Like us on Facebook\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"#\" target=\"_blank\" data-original-title=\"Follow us on Instagram\">\r\n                        <i class=\"fa fa-instagram\"></i>\r\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\r\n                    </a>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/productslider/productslider.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/productslider/productslider.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <h3>{{title}}</h3>\r\n        <ngx-slick class=\"slider slider-nav\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (afterChange)=\"afterChange($event)\">\r\n            <div ngxSlickItem *ngFor=\"let product of slides\" class=\"slide\">\r\n                <div>\r\n\r\n                    <div class=\"card text-center\">\r\n                        <div class=\"card-title card-header\">{{product.title_i18n_general}}</div>\r\n\r\n                        <div class=\"card-block\">\r\n                            <div class=\"ribbon\">\r\n                                <span>On Sale!</span>\r\n                            </div>\r\n\r\n                            <div>\r\n                                <div class=\"scipio-image-container\" style=\"width: 100%; height: 100px;\" scipiofit=\"contain\">\r\n                                    <a href=\"product/{{product.productId}}\" tabindex=\"0\">\r\n                                        <img src=\"{{ product.smallImage }}\" class=\"scipio-image\" style=\"width: 100%; height: 100px;object-fit: contain;\">\r\n                                    </a>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"card-text\">{{product.description_i18n_general}}\r\n                            </div>\r\n                            <div class=\"price\">{{product.defaultPrice | currency}}</div>\r\n                            <div class=\"card-link\">\r\n                                <a href=\"product/{{product.productId}}\" class=\"link-type-text action-nav action-primary btn btn-raised btn-sm btn-primary action-readonly action-read action-view\"\r\n                                    tabindex=\"0\">Detail</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ngx-slick>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/productslider/productslider.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/productslider/productslider.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/productslider/productslider.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/productslider/productslider.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSliderComponent", function() { return ProductSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.services */ "./src/app/shared/services/products.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductSliderComponent = /** @class */ (function () {
    function ProductSliderComponent(products) {
        this.products = products;
        this.slides = [];
        this.slideConfig = {
            'slidesToShow': 4,
            'slidesToScroll': 4,
            'dots': true,
            'focusOnSelect': true,
            'arrows': true,
            'rows': 0,
            autoplay: true,
            autoplaySpeed: 2000
        };
    }
    ProductSliderComponent.prototype.ngOnInit = function () {
        this.loadProduct();
    };
    ProductSliderComponent.prototype.loadProduct = function () {
        var _this = this;
        // console.log('CategoryId is set to: ', this.productcategoryid)
        return this.products.getProductsByCategory(this.productcategoryid).subscribe(function (resp) {
            // console.log(resp['results']);
            _this.slides = resp['results'];
        });
    };
    ProductSliderComponent.prototype.afterChange = function (e) {
        // console.log('afterChange');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductSliderComponent.prototype, "productcategoryid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductSliderComponent.prototype, "title", void 0);
    ProductSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productslider',
            template: __webpack_require__(/*! ./productslider.component.html */ "./src/app/shared/productslider/productslider.component.html"),
            styles: [__webpack_require__(/*! ./productslider.component.scss */ "./src/app/shared/productslider/productslider.component.scss")],
            providers: [_services_products_services__WEBPACK_IMPORTED_MODULE_1__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_services_products_services__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductSliderComponent);
    return ProductSliderComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/products.services.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/products.services.ts ***!
  \******************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(httpClient) {
        this.httpClient = httpClient;
        this.productsByCategory = 'control/solrProductsSearch';
        this.productsByKeyword = 'control/solrKeywordSearch';
    }
    ProductService.prototype.getProductsByCategory = function (productCategoryId) {
        return this.httpClient.post(this.productsByCategory, {
            'productCategoryId': productCategoryId
        }, { responseType: 'json' });
    };
    ProductService.prototype.getProductsById = function (productId) {
        console.log('productId:' + productId);
        return this.httpClient.post(this.productsByKeyword, {
            'query': 'productId:' + productId
        }, { responseType: 'json' });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/slider/slider.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/slider/slider.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <h3>{{title}}</h3>\r\n        <ngx-slick class=\"slider slider-nav\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (afterChange)=\"afterChange($event)\">\r\n            <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide\">\r\n                <a href=\"{{ slide.href }}\">\r\n                    <img src=\"{{ slide.img }}\" alt=\"\" />\r\n                </a>\r\n            </div>\r\n        </ngx-slick>\r\n\r\n        <button (click)=\"addSlide()\" class=\"btn btn-primary\">Add</button>\r\n        <button (click)=\"removeSlide()\" class=\"btn btn-primary\">Remove</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/slider/slider.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/slider/slider.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.slides = [
            { img: 'http://placehold.it/350x150/000000', href: '' },
            { img: 'http://placehold.it/350x150/111111', href: '' },
            { img: 'http://placehold.it/350x150/333333', href: '' },
            { img: 'http://placehold.it/350x150/666666', href: '' }
        ];
        this.slideConfig = {
            'slidesToShow': 4,
            'slidesToScroll': 1,
            'dots': true,
            'focusOnSelect': true,
            'arrows': true,
            'rows': 0,
            autoplay: true,
            autoplaySpeed: 2000
        };
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.addSlide = function () {
        this.slides.push({ img: 'http://placehold.it/350x150/777777', href: '' });
    };
    SliderComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    SliderComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "title", void 0);
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/shared/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/shared/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\java\workspace\scipioce-alladdons-dev\addons\angular-shop\webapp\shop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map