webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var navbar_component_1 = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
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
        this._router = this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
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
        core_1.ViewChild(navbar_component_1.NavbarComponent),
        __metadata("design:type", navbar_component_1.NavbarComponent)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.Renderer, router_1.Router, Object, core_1.ElementRef, common_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js"); // this is needed!
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_routing_1 = __webpack_require__("../../../../../src/app/app.routing.ts");
var components_module_1 = __webpack_require__("../../../../../src/app/components/components.module.ts");
var examples_module_1 = __webpack_require__("../../../../../src/app/examples/examples.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                forms_1.FormsModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                components_module_1.ComponentsModule,
                examples_module_1.ExamplesModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var components_component_1 = __webpack_require__("../../../../../src/app/components/components.component.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/examples/landing/landing.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/examples/login/login.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/examples/profile/profile.component.ts");
var nucleoicons_component_1 = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: components_component_1.ComponentsComponent },
    { path: 'nucleoicons', component: nucleoicons_component_1.NucleoiconsComponent },
    { path: 'examples/landing', component: landing_component_1.LandingComponent },
    { path: 'examples/login', component: login_component_1.LoginComponent },
    { path: 'examples/profile', component: profile_component_1.ProfileComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-basic\">\r\n    <div class=\"container\">\r\n      <h3 class=\"title\">Basic Elements</h3>\r\n      <div id=\"buttons\">\r\n          <h4>Buttons</h4>\r\n          <p class=\"category\">Pick your style</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\r\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\r\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\r\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\r\n                  </button>\r\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\r\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\r\n              </div>\r\n          </div>\r\n          <p class=\"category\">Pick your size</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\r\n                  <button class=\"btn btn-primary\">Regular</button>\r\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\r\n              </div>\r\n          </div>\r\n          <p class=\"category\">Pick your color</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn\">Default</button>\r\n                  <button class=\"btn btn-primary\">Primary</button>\r\n                  <button class=\"btn btn-info\">Info</button>\r\n                  <button class=\"btn btn-success\">Success</button>\r\n                  <button class=\"btn btn-warning\">Warning</button>\r\n                  <button class=\"btn btn-danger\">Danger</button>\r\n                  <button class=\"btn btn-neutral\">Neutral</button>\r\n              </div>\r\n          </div>\r\n          <h4>Links</h4>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                  <button class=\"btn btn-link\">Default</button>\r\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\r\n                  <button class=\"btn btn-link btn-info\">Info</button>\r\n                  <button class=\"btn btn-link btn-success\">Success</button>\r\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\r\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div id=\"inputs\">\r\n          <h4>Inputs</h4>\r\n          <p class=\"category\">Form Controls</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group has-success\">\r\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group has-danger\">\r\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                          <i class=\"fa fa-user-circle\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">\r\n                            <i class=\"now-ui-icons users_single-02\"></i>\r\n                        </span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\" id=\"checkRadios\">\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Checkboxes</p>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\">\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Unchecked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Checked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled Unchecked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled Checked\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Radios</p>\r\n            <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Radio is off\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Radio is on\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled radio is off\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled radio is on\r\n                </label>\r\n            </div>\r\n        </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Toggle Buttons</p>\r\n              <bSwitch\r\n                  [(ngModel)]=\"state\">\r\n              </bSwitch>\r\n              <bSwitch> Toggle is off\r\n              </bSwitch>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Sliders</p>\r\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\r\n              <br>\r\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
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
        core_1.Component({
            selector: 'app-basicelements',
            template: __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());
exports.BasicelementsComponent = BasicelementsComponent;


/***/ }),

/***/ "../../../../../src/app/components/components.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\r\n\r\n    </div>\r\n      <div class=\"container\">\r\n          <div class=\"content-center brand\">\r\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\r\n              <h1 class=\"h1-seo\">Now UI Kit.</h1>\r\n              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>\r\n          </div>\r\n          <h6 class=\"category category-absolute\">Designed by\r\n              <a href=\"http://invisionapp.com/\" target=\"_blank\">\r\n                  <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\r\n              </a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">\r\n                  <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\r\n              </a>.</h6>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"main\">\r\n    <div class=\"section section-images\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"hero-images-container\">\r\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-1\">\r\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-2\">\r\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      <app-basicelements></app-basicelements>\r\n      <app-navigation></app-navigation>\r\n      <div class=\"section section-tabs\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                      <p class=\"category\">Tabs with Icons on Card</p>\r\n                      <!-- Nav tabs -->\r\n\r\n                      <div class=\"card\">\r\n                        <div class=\"nav-tabs-navigation\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>\r\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                          </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                      <p class=\"category\">Tabs with Background on Card</p>\r\n                      <!-- Tabs with Background on Card -->\r\n                      <div class=\"card\">\r\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\r\n                                    <ngb-tab title=\"Home\">\r\n                                      <ng-template ngbTabContent>\r\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Profile\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Messages\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Settings\">\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>\r\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                          </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- End Tabs on plain Card -->\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-pagination\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Progress Bars</h4>\r\n                      <div class=\"progress-container\">\r\n                        <span class=\"progress-badge\">Default</span>\r\n\r\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\r\n                      </div>\r\n                      <div class=\"progress-container progress-primary\">\r\n                          <span class=\"progress-badge\">Primary</span>\r\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n                      </div>\r\n                      <br />\r\n                      <h4>Navigation Pills</h4>\r\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-just-icons\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-diamond\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-thermometer-full\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                              <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                              </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab [disabled]=\"true\">\r\n                              <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-exclamation\"></i>\r\n                              </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Pagination</h4>\r\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\r\n                      <br/>\r\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\r\n                      <br>\r\n                      <h4>Labels</h4>\r\n                      <span class=\"badge badge-default\">Default</span>\r\n                      <span class=\"badge badge-primary\">Primary</span>\r\n                      <span class=\"badge badge-success\">Success</span>\r\n                      <span class=\"badge badge-info\">Info</span>\r\n                      <span class=\"badge badge-warning\">Warning</span>\r\n                      <span class=\"badge badge-danger\">Danger</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section\" id=\"notifications\">\r\n          <div class=\"container\">\r\n            <h4>Notifications</h4>\r\n          </div>\r\n          <app-notification></app-notification>\r\n      </div>\r\n      <app-typography></app-typography>\r\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\r\n          <div class=\"container\">\r\n              <h3 class=\"title\">Angular Native Components</h3>\r\n              <div class=\"row\" id=\"modals\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Modal</h4>\r\n                      <ngbd-modal-component></ngbd-modal-component>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Popovers</h4>\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"right\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\r\n                          On right\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"top\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\r\n                          On top\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"left\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\r\n                          On left\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\r\n                          On bottom\r\n                      </button>\r\n                  </div>\r\n                  <br />\r\n                  <br />\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Datetimepicker</h4>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                              <div class=\"datepicker-container\">\r\n                                  <div class=\"form-group\">\r\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\r\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\r\n                \t\t\t            </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <!--                 end collapse -->\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Tooltips</h4>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n                         On right\r\n                     </button>\r\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n                       On left\r\n                     </button>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n                         On top\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n                          On bottom\r\n                      </button>\r\n                      <div class=\"clearfix\"></div>\r\n                      <br>\r\n                      <br>\r\n                  </div>\r\n              <!-- </div>\r\n            </div> -->\r\n          </div>\r\n\r\n          <div class=\"section\" id=\"carousel\">\r\n              <div class=\"container\">\r\n                  <div class=\"title\">\r\n                      <h4>Carousel</h4>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                      <div class=\"col-8\">\r\n                        <ngb-carousel>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Nature, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Somewhere Beyond, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Yellowstone National Park, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                        </ngb-carousel>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-nucleo-icons\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                      <h2 class=\"title\">Nucleo Icons</h2>\r\n                      <h5 class=\"description\">\r\n                          Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.\r\n                      </h5>\r\n                      <!-- <div class=\"nucleo-container\">\r\n        <img src=\"assets/img/nucleo.svg\" alt=\"\">\r\n      </div> -->\r\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\r\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                      <div class=\"icons-container\">\r\n                          <i class=\"now-ui-icons ui-1_send\"></i>\r\n                          <i class=\"now-ui-icons ui-2_like\"></i>\r\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                          <i class=\"now-ui-icons text_bold\"></i>\r\n                          <i class=\"now-ui-icons tech_headphones\"></i>\r\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                          <i class=\"now-ui-icons design_palette\"></i>\r\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                          <i class=\"now-ui-icons location_pin\"></i>\r\n                          <i class=\"now-ui-icons objects_key-25\"></i>\r\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n          <div class=\"container text-center\">\r\n              <div class=\"row justify-content-md-center\">\r\n                  <div class=\"col-md-12 col-lg-8\">\r\n                      <h2 class=\"title\">Completed with examples</h2>\r\n                      <h5 class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-signup\" style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"card card-signup\" data-background-color=\"orange\">\r\n                      <form class=\"form\" method=\"\" action=\"\">\r\n                          <div class=\"header text-center\">\r\n                              <h4 class=\"title title-up\">Sign Up</h4>\r\n                              <div class=\"social-line\">\r\n                                  <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-icon btn-round\">\r\n                                      <i class=\"fa fa-facebook-square\"></i>\r\n                                  </a>\r\n                                  <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-icon btn-lg btn-round\">\r\n                                      <i class=\"fa fa-twitter\"></i>\r\n                                  </a>\r\n                                  <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-icon btn-round\">\r\n                                      <i class=\"fa fa-google-plus\"></i>\r\n                                  </a>\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"card-body\">\r\n                            <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                            </div>\r\n                            <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                            </div>\r\n                            <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons ui-1_email-85\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" placeholder=\"Email...\" class=\"form-control\" (focus)=\"focus2=true\" (blur)=\"focus2=false\"/>\r\n                            </div>\r\n                              <!-- If you want to add a checkbox to this form, uncomment this code -->\r\n                              <!-- <div class=\"checkbox\">\r\n              <input id=\"checkboxSignup\" type=\"checkbox\">\r\n                <label for=\"checkboxSignup\">\r\n                Unchecked\r\n                </label>\r\n                </div> -->\r\n                          </div>\r\n                          <div class=\"footer text-center\">\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-round btn-lg\">Get Started</a>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col text-center\">\r\n                  <a [routerLink]=\"['/examples/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-examples\" data-background-color=\"black\">\r\n          <div class=\"space-50\"></div>\r\n          <div class=\"container text-center\">\r\n              <div class=\"row\">\r\n                  <div class=\"col\">\r\n                      <a [routerLink]=\"['/examples/landing']\">\r\n                          <img src=\"assets/img/landing.jpg\" alt=\"Image\" class=\"img-raised\">\r\n                      </a>\r\n                      <a [routerLink]=\"['/examples/landing']\" class=\"btn btn-simple btn-primary btn-round\">View Landing Page</a>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                      <a [routerLink]=\"['/examples/profile']\">\r\n                          <img src=\"assets/img/profile.jpg\" alt=\"Image\" class=\"img-raised\">\r\n                      </a>\r\n                      <a [routerLink]=\"['/examples/profile']\" class=\"btn btn-simple btn-primary btn-round\">View Profile Page</a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\r\n          <div class=\"container\">\r\n              <div class=\"row justify-content-md-center\">\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <h3 class=\"title\">Do you love this Bootstrap 4 UI Kit?</h3>\r\n                      <h5 class=\"description\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>\r\n                  </div>\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <a href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" class=\"btn btn-primary btn-lg btn-round\" role=\"button\">\r\n                          Download Angular\r\n                      </a>\r\n                      <a href=\"https://www.invisionapp.com/now\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-simple btn-round\" role=\"button\">\r\n                          Download PSD/Sketch\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <div class=\"row text-center mt-5\">\r\n                  <div class=\"col-md-8 ml-auto mr-auto\">\r\n                      <h2>Want more?</h2>\r\n                      <h5 class=\"description\">We've just launched\r\n                          <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" target=\"_blank\">Now UI Kit PRO Angular</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                      <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" class=\"btn btn-neutral btn-round btn-lg\" target=\"_blank\">\r\n                          <i class=\"now-ui-icons arrows-1_share-66\"></i> Upgrade to PRO\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <div class=\"row justify-content-md-center sharing-area text-center\">\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <h3>Thank you for supporting us!</h3>\r\n                  </div>\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\r\n                          <i class=\"fa fa-twitter\"></i>\r\n                      </a>\r\n                      <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\r\n                          <i class=\"fa fa-facebook-square\"></i>\r\n                      </a>\r\n                      <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\r\n                          <i class=\"fa fa-linkedin\"></i>\r\n                      </a>\r\n                      <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\r\n                          <i class=\"fa fa-github\"></i>\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <footer class=\"footer\" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <nav>\r\n              <ul>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com\">\r\n                          Creative Tim\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"http://presentation.creative-tim.com\">\r\n                          About Us\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"http://blog.creative-tim.com\">\r\n                          Blog\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                          MIT License\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </nav>\r\n          <div class=\"copyright\">\r\n              &copy;\r\n            {{data | date: 'yyyy'}}, Designed by\r\n              <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n          </div>\r\n      </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/components.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var Rellax = __webpack_require__("../../../../rellax/rellax.js");
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
        var rellaxHeader = new Rellax('.rellax-header');
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
        core_1.Component({
            selector: 'app-components',
            template: __webpack_require__("../../../../../src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [core_1.Renderer, ng_bootstrap_1.NgbAccordionConfig])
    ], ComponentsComponent);
    return ComponentsComponent;
}());
exports.ComponentsComponent = ComponentsComponent;


/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ng2_nouislider_1 = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
var jw_bootstrap_switch_ng2_1 = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var basicelements_component_1 = __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.ts");
var navigation_component_1 = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
var typography_component_1 = __webpack_require__("../../../../../src/app/components/typography/typography.component.ts");
var nucleoicons_component_1 = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
var components_component_1 = __webpack_require__("../../../../../src/app/components/components.component.ts");
var notification_component_1 = __webpack_require__("../../../../../src/app/components/notification/notification.component.ts");
var modal_component_1 = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                ng2_nouislider_1.NouisliderModule,
                router_1.RouterModule,
                jw_bootstrap_switch_ng2_1.JWBootstrapSwitchModule
            ],
            declarations: [
                components_component_1.ComponentsComponent,
                basicelements_component_1.BasicelementsComponent,
                navigation_component_1.NavigationComponent,
                typography_component_1.TypographyComponent,
                nucleoicons_component_1.NucleoiconsComponent,
                notification_component_1.NotificationComponent,
                modal_component_1.NgbdModalBasic
            ],
            exports: [components_component_1.ComponentsComponent]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;


/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\r\n Launch Modal\r\n</button>\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header justify-content-center\">\r\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <h4 class=\"title title-up\">Modal title</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\r\n        </p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\r\n   Launch Modal Mini\r\n</button>\r\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header justify-content-center\">\r\n      <div class=\"modal-profile\">\r\n          <i class=\"now-ui-icons users_circle-08\"></i>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <p>Always have an access to your profile</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-component',
            template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());
exports.NgbdModalBasic = NgbdModalBasic;


/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item active\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                  <div ngbDropdown class=\"dropdown\">\r\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                        <p>\r\n                                            Dropdown\r\n                                        </p>\r\n                                      </a>\r\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                      </div>\r\n                                  </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu with Icons</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\r\n                            <ul class=\"navbar-nav ml-auto\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <div ngbDropdown class=\"dropdown\">\r\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                        </a>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <div class=\"dropdown-header\">Dropdown header</div>\r\n                                            <a class=\"dropdown-item\">Action</a>\r\n                                            <a class=\"dropdown-item\">Another action</a>\r\n                                            <a class=\"dropdown-item\">Something else here</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Separated link</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Another separated link</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n        <h4>Navigation</h4>\r\n    </div>\r\n    <div id=\"navbar\">\r\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\r\n            <!-- Navbar Primary  -->\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Primary -->\r\n            <!-- Navbar Info -->\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Info -->\r\n            <!-- Navbar Success -->\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Success -->\r\n            <!-- Navbar Warning -->\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-google-plus\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Warning -->\r\n            <!-- Navbar Danger -->\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Share</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Tweet</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-pinterest\"></i>\r\n                                    <p>Pin</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Danger -->\r\n            <!-- Navbar Transparent -->\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Facebook</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Twitter</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                    <p>Instagram</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Transparent-->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;


/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\r\n        <div class=\"container\">\r\n            <div class=\"alert-wrapper\">\r\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                  <span aria-hidden=\"true\">\r\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  </span>\r\n                </button>\r\n                <div class=\"message\">\r\n                    <ng-container *ngIf=\"alert.icon\">\r\n                      <div class=\"alert-icon\">\r\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\r\n                      </div>\r\n                    </ng-container>\r\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ngb-alert>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
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
        core_1.Input(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'app-notification',
            template: __webpack_require__("../../../../../src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;


/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nucleo-icons-style\">\r\n  <header>\r\n      <h1>Nucleo Outline Web Font v2.9</h1>\r\n      <p>\r\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\r\n      </p>\r\n  </header>\r\n  <div id=\"cd-nav\">\r\n      <nav>\r\n          <ul id=\"cd-main-nav\">\r\n              <li>\r\n                  <a href=\"#arrows\">Arrows</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#business\">Business &amp; Finance</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#design\">Design &amp; Development</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#emoticons\">Emoticons</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#files\">Files &amp; Folders</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#loaders\">Loaders</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#maps\">Maps &amp; Location</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#media\">Media</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#objects\">Objects</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#school\">School &amp; Education</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#shopping\">Shopping</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#sport\">Sport</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#technology\">Technology</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#text\">Text Editing</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#gestures\">Touch Gestures</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#transportation\">Transportation</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#travel\">Travel</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#interface\">User Interface</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#users\">Users</a>\r\n              </li>\r\n          </ul>\r\n      </nav>\r\n  </div>\r\n  <div id=\"icons-wrapper\">\r\n      <section id=\"arrows\">\r\n          <h2>Arrows</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\r\n                  <p>arrows-1_cloud-download-93</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n                  <p>arrows-1_cloud-upload-94</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\r\n                  <p>arrows-1_minimal-down</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\r\n                  <p>arrows-1_minimal-left</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\r\n                  <p>arrows-1_minimal-right</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\r\n                  <p>arrows-1_minimal-up</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\r\n                  <p>arrows-1_refresh-69</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\r\n                  <p>arrows-1_share-66</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"business\">\r\n          <h2>Business &amp; Finance</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_badge\"></i>\r\n                  <p>business_badge</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_bank\"></i>\r\n                  <p>business_bank</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\r\n                  <p>business_briefcase-24</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\r\n                  <p>business_bulb-63</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\r\n                  <p>business_chart-bar-32</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\r\n                  <p>business_chart-pie-36</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_globe\"></i>\r\n                  <p>business_globe</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_money-coins\"></i>\r\n                  <p>business_money-coins</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"clothes\">\r\n          <h2>Clothes &amp; Accessories</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                  <p>clothes_tie-bow</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"design\">\r\n          <h2>Design &amp; Development</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_app\"></i>\r\n                  <p>design_app</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\r\n                  <p>design_bullet-list-67</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_image\"></i>\r\n                  <p>design_image</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_palette\"></i>\r\n                  <p>design_palette</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_scissors\"></i>\r\n                  <p>design_scissors</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_vector\"></i>\r\n                  <p>design_vector</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design-2_html5\"></i>\r\n                  <p>design-2_html5</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\r\n                  <p>design-2_ruler-pencil</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"emoticons\">\r\n          <h2>Emoticons</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                  <p>emoticons_satisfied</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"files\">\r\n          <h2>Files &amp; Folders</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_box\"></i>\r\n                  <p>files_box</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_paper\"></i>\r\n                  <p>files_paper</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\r\n                  <p>files_single-copy-04</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"medical\">\r\n          <h2>Healthcare &amp; Medical</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons health_ambulance\"></i>\r\n                  <p>health_ambulance</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"loaders\">\r\n          <h2>Loaders</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\r\n                  <p>loader_gear</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\r\n                  <p>loader_refresh</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"maps\">\r\n          <h2>Maps &amp; Location</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_bookmark\"></i>\r\n                  <p>location_bookmark</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_compass-05\"></i>\r\n                  <p>location_compass-05</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_map-big\"></i>\r\n                  <p>location_map-big</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_pin\"></i>\r\n                  <p>location_pin</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_world\"></i>\r\n                  <p>location_world</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"media\">\r\n          <h2>Media</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_album\"></i>\r\n                  <p>media-1_album</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\r\n                  <p>media-1_button-pause</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\r\n                  <p>media-1_button-play</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\r\n                  <p>media-1_button-power</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\r\n                  <p>media-1_camera-compact</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                  <p>media-2_note-03</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\r\n                  <p>media-2_sound-wave</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"objects\">\r\n          <h2>Objects</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_diamond\"></i>\r\n                  <p>objects_diamond</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_globe\"></i>\r\n                  <p>objects_globe</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_key-25\"></i>\r\n                  <p>objects_key-25</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_planet\"></i>\r\n                  <p>objects_planet</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                  <p>objects_spaceship</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_support-17\"></i>\r\n                  <p>objects_support-17</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\r\n                  <p>objects_umbrella-13</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"school\">\r\n          <h2>School &amp; Education</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\r\n                  <p>education_agenda-bookmark</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_atom\"></i>\r\n                  <p>education_atom</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_glasses\"></i>\r\n                  <p>education_glasses</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_hat\"></i>\r\n                  <p>education_hat</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_paper\"></i>\r\n                  <p>education_paper</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"shopping\">\r\n          <h2>Shopping</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\r\n                  <p>shopping_bag-16</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_basket\"></i>\r\n                  <p>shopping_basket</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_box\"></i>\r\n                  <p>shopping_box</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                  <p>shopping_cart-simple</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\r\n                  <p>shopping_credit-card</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\r\n                  <p>shopping_delivery-fast</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_shop\"></i>\r\n                  <p>shopping_shop</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\r\n                  <p>shopping_tag-content</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"sport\">\r\n          <h2>Sport</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons sport_trophy\"></i>\r\n                  <p>sport_trophy</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons sport_user-run\"></i>\r\n                  <p>sport_user-run</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"technology\">\r\n          <h2>Technology</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\r\n                  <p>tech_controller-modern</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_headphones\"></i>\r\n                  <p>tech_headphones</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_laptop\"></i>\r\n                  <p>tech_laptop</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_mobile\"></i>\r\n                  <p>tech_mobile</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_tablet\"></i>\r\n                  <p>tech_tablet</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_tv\"></i>\r\n                  <p>tech_tv</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\r\n                  <p>tech_watch-time</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"text\">\r\n          <h2>Text Editing</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_align-center\"></i>\r\n                  <p>text_align-center</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_align-left\"></i>\r\n                  <p>text_align-left</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_bold\"></i>\r\n                  <p>text_bold</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_caps-small\"></i>\r\n                  <p>text_caps-small</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"gestures\">\r\n          <h2>Touch Gestures</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\r\n                  <p>gestures_tap-01</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"transportation\">\r\n          <h2>Transportation</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                  <p>transportation_air-baloon</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\r\n                  <p>transportation_bus-front-12</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"travel\">\r\n          <h2>Travel</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons travel_info\"></i>\r\n                  <p>travel_info</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                  <p>travel_istanbul</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"interface\">\r\n          <h2>User Interface</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\r\n                  <p>ui-1_bell-53</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\r\n                  <p>ui-1_calendar-60</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_check\"></i>\r\n                  <p>ui-1_check</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\r\n                  <p>ui-1_lock-circle-open</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_send\"></i>\r\n                  <p>ui-1_send</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                  <p>ui-1_settings-gear-63</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\r\n                  <p>ui-1_simple-add</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\r\n                  <p>ui-1_simple-delete</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  <p>ui-1_simple-remove</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\r\n                  <p>ui-1_zoom-bold</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                  <p>ui-2_chat-round</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                  <p>ui-2_favourite-28</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_like\"></i>\r\n                  <p>ui-2_like</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\r\n                  <p>ui-2_settings-90</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\r\n                  <p>ui-2_time-alarm</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                  <p>ui-1_email-85</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"users\">\r\n          <h2>Users</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons users_circle-08\"></i>\r\n                  <p>users_circle-08</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons users_single-02\"></i>\r\n                  <p>users_single-02</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block; }\n\n.nucleo-icons-style {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* --------------------------------\r\n\r\nNucleo Outline Web Font - nucleoapp.com/\r\nLicense - nucleoapp.com/license/\r\nCreated using IcoMoon - icomoon.io\r\n\r\n-------------------------------- */\n\n/* --------------------------------\r\n\r\nPrimary style\r\n\r\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.nucleo-icons-style {\n  font-size: 62.5%; }\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef; }\n\na {\n  color: #766acf;\n  text-decoration: none; }\n\n/* --------------------------------\r\n\r\nMain components\r\n\r\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0; }\n\nheader h1 {\n  font-size: 1.2rem; }\n\nheader p {\n  font-size: .9rem;\n  margin-top: .6em; }\n\nheader a:hover {\n  text-decoration: underline; }\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto; }\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em .2em;\n  margin-bottom: 1em;\n  font-size: 1rem; }\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: .25em;\n  -webkit-transition: background 0.2s;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden; }\n\nul li:hover {\n  background: #dbdbdb; }\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer; }\n\nul p {\n  padding: 10px;\n  margin-top: 10px; }\n\nul p::-moz-selection,\nul em::-moz-selection {\n  background: #766acf;\n  color: #efefef; }\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef; }\n\nul em {\n  margin-bottom: 8px; }\n\nul em::before {\n  content: '['; }\n\nul em::after {\n  content: ']'; }\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none; }\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left; } }\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0; } }\n\n/* --------------------------------\r\n\r\nSmart fixed navigation\r\n\r\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n  -webkit-transition: -webkit-transform 0.3s, visibility 0s 0.3s;\n  -webkit-transition: visibility 0s 0.3s, -webkit-transform 0.3s;\n  transition: visibility 0s 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, visibility 0s 0.3s;\n  transition: transform 0.3s, visibility 0s 0.3s, -webkit-transform 0.3s; }\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left; }\n\n#cd-nav ul li:hover {\n  background-color: #FFF; }\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: -webkit-transform 0.3s, visibility 0s 0s;\n  -webkit-transition: visibility 0s 0s, -webkit-transform 0.3s;\n  transition: visibility 0s 0s, -webkit-transform 0.3s;\n  transition: transform 0.3s, visibility 0s 0s;\n  transition: transform 0.3s, visibility 0s 0s, -webkit-transform 0.3s; }\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6; }\n\n#cd-nav li a:hover {\n  color: #333333; }\n\n#cd-nav li:last-child a {\n  border-bottom: none; }\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2; }\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  -webkit-transition: background 0.3s;\n  transition: background 0.3s; }\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transition: -webkit-transform 0.3s, background 0s;\n  -webkit-transition: background 0s, -webkit-transform 0.3s;\n  transition: background 0s, -webkit-transform 0.3s;\n  transition: transform 0.3s, background 0s;\n  transition: transform 0.3s, background 0s, -webkit-transform 0.3s; }\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  -webkit-transform: rotate(0);\n  transform: rotate(0); }\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  -webkit-transform: rotate(0);\n  transform: rotate(0); }\n\n.cd-nav-trigger.menu-is-open {\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0); }\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333; }\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg); }\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  -webkit-transform: rotate(225deg);\n  transform: rotate(225deg); }\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 'Nucleo Outline';\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent = __decorate([
        core_1.Component({
            selector: 'app-nucleoicons',
            template: __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());
exports.NucleoiconsComponent = NucleoiconsComponent;


/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n    <div class=\"container\">\r\n        <h3 class=\"title\">Typography</h3>\r\n        <div id=\"typography\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"typography-line\">\r\n                        <h1>\r\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h2>\r\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h3>\r\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h4>\r\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h5>\r\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h6>\r\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <p>\r\n                            <span>Paragraph</span>\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Quote</span>\r\n                        <blockquote>\r\n                            <p class=\"blockquote blockquote-primary\">\r\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                <br>\r\n                                <br>\r\n                                <small>\r\n                                    - Noaa\r\n                                </small>\r\n                            </p>\r\n                        </blockquote>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Muted Text</span>\r\n                        <p class=\"text-muted\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Primary Text</span>\r\n                        <p class=\"text-primary\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Info Text</span>\r\n                        <p class=\"text-info\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Success Text</span>\r\n                        <p class=\"text-success\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Warning Text</span>\r\n                        <p class=\"text-warning\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Danger Text</span>\r\n                        <p class=\"text-danger\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h2>\r\n                            <span>Small Tag</span>\r\n                            Header with small subtitle\r\n                            <br>\r\n                            <small>Use \"small\" tag for the headers</small>\r\n                        </h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"space-50\"></div>\r\n        <div id=\"images\">\r\n            <h4>Images</h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Image</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Circle Image</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Raised</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Circle Raised</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        core_1.Component({
            selector: 'app-typography',
            template: __webpack_require__("../../../../../src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());
exports.TypographyComponent = TypographyComponent;


/***/ }),

/***/ "../../../../../src/app/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  examples works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = __decorate([
        core_1.Component({
            selector: 'app-examples',
            template: __webpack_require__("../../../../../src/app/examples/examples.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());
exports.ExamplesComponent = ExamplesComponent;


/***/ }),

/***/ "../../../../../src/app/examples/examples.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ng2_nouislider_1 = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var jw_bootstrap_switch_ng2_1 = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var landing_component_1 = __webpack_require__("../../../../../src/app/examples/landing/landing.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/examples/login/login.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/examples/profile/profile.component.ts");
var examples_component_1 = __webpack_require__("../../../../../src/app/examples/examples.component.ts");
var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                ng2_nouislider_1.NouisliderModule,
                jw_bootstrap_switch_ng2_1.JWBootstrapSwitchModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                landing_component_1.LandingComponent,
                login_component_1.LoginComponent,
                examples_component_1.ExamplesComponent,
                profile_component_1.ProfileComponent
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());
exports.ExamplesModule = ExamplesModule;


/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg6.jpg');\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <h1 class=\"title\">This is our great company.</h1>\r\n                <div class=\"text-center\">\r\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                    </a>\r\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                    </a>\r\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fa fa-google-plus\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-about-us\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\r\n                    <h2 class=\"title\">Who we are?</h2>\r\n                    <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"separator separator-primary\"></div>\r\n            <div class=\"section-story-overview\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\r\n                            <!-- First image on the left side -->\r\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\r\n                                <br>\r\n                                <br>\r\n                                <small>-NOAA</small>\r\n                            </p>\r\n                        </div>\r\n                        <!-- Second image on the left side of the article -->\r\n                        <div class=\"image-container\" style=\"background-image: url('assets/img/bg3.jpg')\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <!-- First image on the right side, above the article -->\r\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg1.jpg')\"></div>\r\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\r\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\r\n                        </p>\r\n                        <p>\r\n                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\r\n                        </p>\r\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-team text-center\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Here is our team</h2>\r\n            <div class=\"team\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Romina Hadid</h4>\r\n                            <p class=\"category text-primary\">Model</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-instagram\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/ryan.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Ryan Tompson</h4>\r\n                            <p class=\"category text-primary\">Designer</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-linkedin\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"team-player\">\r\n                            <img src=\"assets/img/eva.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\r\n                            <h4 class=\"title\">Eva Jenner</h4>\r\n                            <p class=\"category text-primary\">Fashion</p>\r\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\r\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-google-plus\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-youtube-play\"></i></a>\r\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-contact-us text-center\">\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Want to work with us?</h2>\r\n            <p class=\"description\">Your project is very important to us.</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\r\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                          <i class=\"now-ui-icons users_circle-08\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                            <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                  </div>\r\n                    <div class=\"textarea-container\">\r\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\r\n                    </div>\r\n                    <div class=\"send-button\">\r\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer footer-default\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://presentation.creative-tim.com\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n                {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Rellax = __webpack_require__("../../../../rellax/rellax.js");
var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new Rellax('.rellax-header');
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
        core_1.Component({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/examples/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;


/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-header\" filter-color=\"orange\">\r\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"col-md-4 content-center\">\r\n            <div class=\"card card-login card-plain\">\r\n                <form class=\"form\" method=\"\" action=\"\">\r\n                    <div class=\"header header-primary text-center\">\r\n                        <div class=\"logo-container\">\r\n                            <img src=\"assets/img/now-logo.png\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                        </div>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                      </div>\r\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                        </div>\r\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\r\n                    </div>\r\n                    <div class=\"pull-left\">\r\n                        <h6>\r\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\r\n                        </h6>\r\n                    </div>\r\n                    <div class=\"pull-right\">\r\n                        <h6>\r\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\r\n                        </h6>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://presentation.creative-tim.com\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n              {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
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
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/examples/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <div class=\"photo-container\">\r\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\r\n                </div>\r\n                <h3 class=\"title\">Ryan Scheinder</h3>\r\n                <p class=\"category\">Photographer</p>\r\n                <div class=\"content\">\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>48</h2>\r\n                        <p>Bookmarks</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n          <div class=\"button-container\">\r\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\r\n                  <i class=\"fa fa-twitter\"></i>\r\n              </a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\r\n                  <i class=\"fa fa-instagram\"></i>\r\n              </a>\r\n          </div>\r\n          <h3 class=\"title\">About me</h3>\r\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"title text-center\">My Portfolio</h4>\r\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons design_image\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons location_world\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons sport_user-run\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer footer-default\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://presentation.creative-tim.com\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n                {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Rellax = __webpack_require__("../../../../rellax/rellax.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new Rellax('.rellax-header');
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
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/examples/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n      <div class=\"dropdown button-dropdown\">\r\n        <div ngbDropdown>\r\n          <a class=\"dropdown-toggle\" ngbDropdownToggle>\r\n              <span class=\"button-bar\"></span>\r\n              <span class=\"button-bar\"></span>\r\n              <span class=\"button-bar\"></span>\r\n          </a>\r\n           <div ngbDropdownMenu>\r\n             <a class=\"dropdown-header\">Dropdown header</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n             <div class=\"dropdown-divider\"></div>\r\n             <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n             <div class=\"dropdown-divider\"></div>\r\n             <a class=\"dropdown-item\" href=\"#\">One more separated link</a>\r\n           </div>\r\n         </div>\r\n      </div>\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\" ngbTooltip=\"Designed by Invision. Coded by Creative Tim\">\r\n                Now Ui Kit\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" target=\"_blank\">\r\n                      <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\r\n                      <p>Download</p>\r\n                  </a>\r\n              </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"https://timcreative.github.io/now-ui-kit-angular/documentation/tutorial\" target=\"_blank\">\r\n                      <i class=\"now-ui-icons files_paper\"></i>\r\n                      <p>Components</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link btn btn-neutral\" href=\"https://www.creative-tim.com/product/now-ui-kit-pro-angular\" target=\"_blank\">\r\n                        <i class=\"now-ui-icons arrows-1_share-66\"></i>\r\n                        <p>Upgrade to PRO</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\" data-original-title=\"Follow us on Twitter\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\" data-original-title=\"Like us on Facebook\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\" data-original-title=\"Follow us on Instagram\">\r\n                        <i class=\"fa fa-instagram\"></i>\r\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
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
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [common_1.Location, core_1.ElementRef])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map