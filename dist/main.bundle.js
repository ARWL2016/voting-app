webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section\r\n  class=\"about-wrapper\"\r\n  [@showPage]=\"'on'\">\r\n\r\n    <div class=\"panel v-panel\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">About Votogo</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>VOTOGO is a voting app which allows users to create, share and view the results of surveys,\r\n          and vote on other people's topics. It was created as a\r\n          <a href=\"https://www.freecodecamp.com/challenges/build-a-voting-app\" target=\"_blank\" rel=\"noopener noreferrer\">Free Code Camp</a>\r\n          project.\r\n        </p>\r\n        <p>This application was built using the MEAN Stack:</p>\r\n        <ul>\r\n          <li>The front end is an Angular 4 / Typescript project created with the excellent Angular-CLI.</li>\r\n          <li>The back end uses Node v.6.9.2 and Express.</li>\r\n          <li>Data is hosted in the cloud at MLab, using MongoDB and Mongoose.</li>\r\n          <li>The authentication module uses Bcrypt.js for password encryption and JSON Web Tokens for maintaining secure sessions.</li>\r\n          <li>UI components are based on Bootstrap and animated with the Angular animations module.</li>\r\n          <li>The doughnut chart was created using Chart.js.</li>\r\n        </ul>\r\n        <p>The complete project repo can be viewed at <a href=\"https://github.com/ARWL2016/voting-app\" target=\"_blank\" rel=\"noopener noreferrer\">Github</a>.</p>\r\n        <p><b>Alistair Willis</b></p>\r\n      </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 90%;\n  max-width: 800px;\n  margin: 30px auto; }\n\n.panel-body {\n  padding: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var animations_1 = __webpack_require__("../../../../../src/app/animations.ts");
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/animations.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../animations/@angular/animations.es5.js");
// import { Component, Input } from '@angular/core';
var pageTransition = animations_1.trigger('showPage', [
    animations_1.state('on', animations_1.style({ transform: 'translateY(0)' })),
    animations_1.transition('void => on', [
        animations_1.style({ opacity: 0 }),
        animations_1.animate('500ms ease-in')
    ]),
]);
exports.pageTransition = pageTransition;
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"hideDropdown($event)\">\r\n  <div>\r\n\r\n<!-- NAVIGATION -->\r\n    <nav class=\"navbar navbar-default\">\r\n      <div id=\"responsive-container\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Votoro</a>\r\n\r\n        <ul class=\"nav navbar-nav\" id=\"nav-menu-left\">\r\n          <li><a [routerLink]=\"['/home']\">HOME</a></li>\r\n          <li *ngIf=\"username\"><a [routerLink]=\"['/home', username]\">MY TOPICS</a></li>\r\n          <li *ngIf=\"username\"><a [routerLink]=\"['/create']\">NEW TOPIC</a></li>\r\n          <li><a [routerLink]=\"['/about']\">ABOUT</a></li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\" id=\"nav-menu-right\">\r\n          <li *ngIf=\"!username\"><a [routerLink]=\"['/login/register']\">SIGN UP</a></li>\r\n          <li *ngIf=\"!username\"><a [routerLink]=\"['/login']\">LOGIN</a></li>\r\n          <li *ngIf=\"username\"><a>Logged in as <b>{{ username | uppercase }}</b></a></li>\r\n          <li><button *ngIf=\"username\" class=\"btn btn-default navbar-btn\" (click)=\"logout()\">LOGOUT</button></li>\r\n        </ul>\r\n\r\n        <button class=\"btn btn-default navbar-btn pull-right\" id=\"toggleBtn\" (click)=\"toggleDropdown()\">MENU</button>\r\n      </div>\r\n    </nav>\r\n\r\n    <!-- NAV DROPDOWN FOR SMALL SCREENS -->\r\n    <div *ngIf=\"showDropdown\" class=\"dropdown\" [@showPage]=\"'on'\">\r\n      <ul>\r\n        <li><a [routerLink]=\"['/home']\">HOME</a></li>\r\n        <li *ngIf=\"username\"><a [routerLink]=\"['/home', username]\">MY TOPICS</a></li>\r\n        <li *ngIf=\"username\"><a [routerLink]=\"['/create']\">NEW TOPIC</a></li>\r\n        <li *ngIf=\"!username\"><a [routerLink]=\"['/login/register']\">SIGN UP</a></li>\r\n        <li *ngIf=\"!username\"><a [routerLink]=\"['/login']\">LOGIN</a></li>\r\n        <li *ngIf=\"username\"><a (click)=\"logout()\">LOGOUT</a></li>\r\n        <li><a [routerLink]=\"['/about']\">ABOUT</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n<!-- ROUTER OUTLET -->\r\n  <div class=\"x-container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav.navbar {\n  margin-bottom: 0;\n  border-radius: 0;\n  font-weight: bold; }\n  nav.navbar .container {\n    max-width: 960px;\n    margin: 0 auto; }\n    nav.navbar .container .navbar-brand {\n      font-size: 1.2em;\n      font-weight: bold; }\n    nav.navbar .container ul, nav.navbar .container li, nav.navbar .container a {\n      display: inline-block; }\n      nav.navbar .container ul span.glyphicon.glyphicon-menu-hamburger, nav.navbar .container li span.glyphicon.glyphicon-menu-hamburger, nav.navbar .container a span.glyphicon.glyphicon-menu-hamburger {\n        font-size: 1.4em; }\n\n#toggleBtn {\n  display: none;\n  margin-top: 8px; }\n\ndiv.dropdown {\n  background-color: white;\n  color: black;\n  transition: all 500ms ease-in; }\n  div.dropdown ul {\n    margin: 0;\n    padding: 0; }\n    div.dropdown ul li {\n      list-style-type: none;\n      border-bottom: 1px solid lightgrey;\n      padding: 4px;\n      text-align: center; }\n      div.dropdown ul li:hover {\n        background-color: lightgrey; }\n      div.dropdown ul li a {\n        text-decoration: none;\n        cursor: pointer;\n        font-weight: bold;\n        color: darkgrey; }\n\n@media screen and (max-width: 780px) {\n  #toggleBtn {\n    display: block;\n    float: right;\n    margin-right: 20px; }\n  #nav-menu-left, #nav-menu-right {\n    display: none; }\n  .navbar-brand {\n    font-size: 1.5em;\n    padding-left: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  This is a container component which renders the navigation and
 *  contains the router outlet. Component guide:
 *
 *  index (/home) - displays all voting topics from all users (searchable)
 *  index (/home/:username) - displays all voting topics created by a logged in user
 *  topic (/topic/:id) - display the results of a voting topic and the voting function (for authenticated users)
 *  create (/create) - displays a form to create a new topic (for authenticated users)
 *  login (/login) - displays login form
 *  registration (/login/registration) - displays registration form
 *
 */

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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var toastr_service_1 = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var animations_1 = __webpack_require__("../../../../../src/app/animations.ts");
var AppComponent = (function () {
    function AppComponent(_auth, _router, _toastr) {
        this._auth = _auth;
        this._router = _router;
        this._toastr = _toastr;
        this.showDropdown = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var username = this._auth.isValidated();
        if (username) {
            this.username = username;
        }
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.username = this._auth.isValidated();
    };
    AppComponent.prototype.logout = function () {
        // needs error handling
        this._auth.logout();
        this._toastr.success('You have been logged out.');
        this._router.navigate(['/login']);
    };
    AppComponent.prototype.toggleDropdown = function () {
        this.showDropdown = this.showDropdown === true ? false : true;
    };
    AppComponent.prototype.hideDropdown = function (e) {
        if (e.target.id !== 'toggleBtn') {
            this.showDropdown = false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof toastr_service_1.ToastrService !== "undefined" && toastr_service_1.ToastrService) === "function" && _c || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

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
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var ng2_charts_1 = __webpack_require__("../../../../ng2-charts/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var index_component_1 = __webpack_require__("../../../../../src/app/index/index.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
var topic_component_1 = __webpack_require__("../../../../../src/app/topic/topic.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/auth/registration/registration.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var chart_component_1 = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var create_topic_component_1 = __webpack_require__("../../../../../src/app/create-topic/create-topic.component.ts");
var create_topic_guard_service_1 = __webpack_require__("../../../../../src/app/services/create-topic-guard.service.ts");
var toastr_service_1 = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var topic_filter_pipe_1 = __webpack_require__("../../../../../src/app/index/topic-filter.pipe.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            index_component_1.IndexComponent,
            topic_component_1.TopicComponent,
            login_component_1.LoginComponent,
            create_topic_component_1.CreateTopicComponent,
            registration_component_1.RegistrationComponent,
            chart_component_1.ChartComponent,
            about_component_1.AboutComponent,
            topic_filter_pipe_1.TopicFilterPipe
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_charts_1.ChartsModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: index_component_1.IndexComponent },
                { path: 'home/:username', canActivate: [create_topic_guard_service_1.CreateTopicGuard], component: index_component_1.IndexComponent },
                { path: 'topic/:id', component: topic_component_1.TopicComponent },
                { path: 'create', canActivate: [create_topic_guard_service_1.CreateTopicGuard], component: create_topic_component_1.CreateTopicComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'login/register', component: registration_component_1.RegistrationComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ])
        ],
        providers: [
            data_service_1.DataService,
            auth_service_1.AuthService,
            helper_service_1.HelperService,
            create_topic_guard_service_1.CreateTopicGuard,
            toastr_service_1.ToastrService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 90%;\n  max-width: 400px;\n  margin: 0 auto;\n  margin-top: 100px; }\n  .panel label {\n    font-weight: 500; }\n  .panel input {\n    font-size: 0.9em;\n    height: 38px;\n    font-weight: bold; }\n  .panel button.btn.btn-primary {\n    margin-top: 10px;\n    font-size: 1.1em;\n    font-weight: bold; }\n\n@media screen and (max-width: 500px) {\n  .panel {\n    margin-top: 30px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form = \"ngForm\" (submit)=\"submitForm(form)\" [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel\">\r\n    <div class=\"panel-heading\">\r\n      <h1 class=\"panel-title\">Login</h1>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <p>Login, or <a [routerLink]=\"['register']\">sign up </a>for a free account</p>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Username</label>\r\n          <input\r\n            [(ngModel)]=\"username\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            placeholder=\"enter your username\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Password</label>\r\n          <input\r\n            [(ngModel)]=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"enter your password\"\r\n            type=\"password\">\r\n        </div>\r\n        <div>{{error}}</div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary control-button\">Login</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var animations_1 = __webpack_require__("../../../../../src/app/animations.ts");
var toastr_service_1 = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var LoginComponent = (function () {
    function LoginComponent(_auth, _route, _toastr) {
        this._auth = _auth;
        this._route = _route;
        this._toastr = _toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.username && this.password) {
            this.user = { username: this.username, password: this.password };
            this._auth.login(this.user)
                .then(function (res) {
                console.log(res);
                _this._toastr.success('You have been logged in.');
                _this._route.navigate(['/home']);
            })
                .catch(function (e) {
                console.log(e);
                _this.error = 'Your login details were incorrect. Please try again.';
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth-styles.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof toastr_service_1.ToastrService !== "undefined" && toastr_service_1.ToastrService) === "function" && _c || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (submit)=\"submitForm(form)\" novalidate [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel\">\r\n    <div class=\"panel-heading\">\r\n      <h1 class=\"panel-title\">Register</h1>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Enter your unique username</label>\r\n          <input\r\n            [(ngModel)]=\"username\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            placeholder=\"username\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Password</label>\r\n          <input\r\n            [(ngModel)]=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"minimum 3 characters\"\r\n            type=\"password\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Confirm password</label>\r\n          <input\r\n            [(ngModel)]=\"passwordConfirmation\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"\"\r\n            type=\"password\">\r\n        </div>\r\n        <div class=\"error\">{{error}}</div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary control-button\">Register</button>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/registration/registration.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var animations_1 = __webpack_require__("../../../../../src/app/animations.ts");
var toastr_service_1 = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var RegistrationComponent = (function () {
    function RegistrationComponent(_auth, _router, _toastr) {
        this._auth = _auth;
        this._router = _router;
        this._toastr = _toastr;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.password.length < 3) {
            this.error = 'Password must be at least 3 characters.';
            return;
        }
        if (this.password !== this.passwordConfirmation) {
            this.error = 'Passwords do not match. Please try again.';
            return;
        }
        if (this.username) {
            this.user = {
                username: this.username,
                password: this.password
            };
            this._auth.register(this.user)
                .then(function (res) {
                console.log('user created', res);
                _this._toastr.success('Thanks for signing up!');
                _this._router.navigate(['/home']);
            })
                .catch(function (err) {
                console.log(err);
                _this.error = 'Username already taken.';
            });
        }
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/auth/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth-styles.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof toastr_service_1.ToastrService !== "undefined" && toastr_service_1.ToastrService) === "function" && _c || Object])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"results\" class=\"doughnut-chart\" style=\"display: block\" >\r\n  <canvas baseChart\r\n              [data]=\"chartData\"\r\n              [labels]=\"chartLabels\"\r\n              [chartType]=\"chartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".doughnut-chart {\n  height: 500px;\n  width: 500px;\n  margin: 0 auto;\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var animations_1 = __webpack_require__("../../../../../src/app/animations.ts");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var ChartComponent = (function () {
    function ChartComponent(_data, _helper) {
        this._data = _data;
        this._helper = _helper;
        this.chartLabels = [];
        this.chartData = [];
        this.chartType = 'doughnut';
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.fetchTopicById(this._id)
            .then(function (topic) {
            _this.results = topic.results;
            _this.results.forEach(function (result) {
                _this.chartData.push(result.votes);
                _this.chartLabels.push(result.option);
            });
        })
            .catch(function (e) { return _this._helper.logError(e); });
    };
    return ChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "_id", void 0);
ChartComponent = __decorate([
    core_1.Component({
        selector: 'app-chart',
        template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chart/chart.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _b || Object])
], ChartComponent);
exports.ChartComponent = ChartComponent;
var _a, _b;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-topic/create-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (submit)=\"submitForm(form)\" [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel login-form\">\r\n    <div class=\"panel-heading\">\r\n      <h1 class=\"panel-title\">Create Topic</h1>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Topic Title</label>\r\n          <input\r\n            [(ngModel)]=\"newTopic.topicTitle\"\r\n            class=\"form-control\"\r\n            name=\"topicTitle\"\r\n            placeholder=\"e.g. 2017 Films\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Topic Question</label>\r\n          <input\r\n            [(ngModel)]=\"newTopic.topicQuestion\"\r\n            class=\"form-control\"\r\n            name=\"topicQuestion\"\r\n            placeholder=\"e.g. What was the best film of 2017?\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Answers</label>\r\n          <input\r\n            [(ngModel)]=\"option\"\r\n            class=\"form-control\"\r\n            name=\"option\"\r\n            placeholder=\"e.g. Bladerunner\"\r\n            type=\"text\">\r\n        </div>\r\n        <div>\r\n          <span class=\"option-badge\" *ngFor=\"let option of options\">{{ option }}</span>\r\n        </div>\r\n        <div class=\"error-message\">{{error}}</div>\r\n        <div class=\"options-help\">Enter an answer and click <i>Add Option</i>. You must add at least two. When you are finished, click <i>'Create'</i>.</div>\r\n          <button class=\"btn btn-primary\" (click)=\"addOption($event)\">\r\n            Add option\r\n          </button>\r\n          <button class=\"btn btn-primary\" (click)=\"removeOption($event)\">\r\n            Undo\r\n          </button>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary pull-right\">Create</button>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<!--<div class=\"output\">\r\nModel: {{ model | json}}\r\n<br>\r\nAngular: {{ form.value | json}}\r\n</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/create-topic/create-topic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 90%;\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: 30px; }\n  .panel .form-control {\n    font-size: 0.9em;\n    height: 38px;\n    font-weight: bold; }\n  .panel .option-badge {\n    margin: 0 3px 6px 3px;\n    padding: 4px 10px 4px 10px;\n    background-color: #363636;\n    border-radius: 8px;\n    font-size: 0.9em;\n    display: inline-block; }\n  .panel .error-message {\n    margin-top: 10px; }\n  .panel button.btn.btn-primary {\n    margin-top: 30px;\n    font-size: 1.0em;\n    margin-right: 5px; }\n\n.output {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-topic/create-topic.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  This component renders a template-based form for logged in users to create a new voting topic.
 *
 *  @property newTopic - top level object that is sent to the server
 *  @property result - an object containing a vote option and the number of votes cast - initialized here to 0
 *  @property options - an array of strings; each string represents an vote answer
 */

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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var topic_1 = __webpack_require__("../../../../../src/app/models/topic.ts");
var result_1 = __webpack_require__("../../../../../src/app/models/result.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var animations_1 = __webpack_require__("../../../../../src/app/animations.ts");
var toastr_service_1 = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var CreateTopicComponent = (function () {
    function CreateTopicComponent(_data, _router, _auth, _toastr, _helper) {
        this._data = _data;
        this._router = _router;
        this._auth = _auth;
        this._toastr = _toastr;
        this._helper = _helper;
        this.options = [];
    }
    CreateTopicComponent.prototype.ngOnInit = function () {
        this.newTopic = new topic_1.Topic('', '', '', [], []);
        this.newTopic.username = this._auth.isValidated();
    };
    CreateTopicComponent.prototype.addOption = function (e) {
        var _this = this;
        e.preventDefault();
        if (this.options && this.options.find(function (opt) { return opt === _this.option; })) {
            return;
        }
        else {
            var result = new result_1.Result(this.option, 0);
            this.newTopic.results.push(result);
            this.options.push(this.option);
            this.option = '';
            this.result = new result_1.Result('', 0);
        }
    };
    CreateTopicComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.newTopic.topicQuestion && this.newTopic.topicTitle && this.newTopic.results.length > 1) {
            this._data.addNewTopic(this.newTopic)
                .then(function (topic) {
                _this._toastr.success('New voting topic added');
                _this._router.navigate(['/home']);
            })
                .catch(function (e) {
                _this._helper.logError(e);
                _this._toastr.error('Sorry. Topic could not be added');
                _this._router.navigate(['/home']);
            });
        }
        else {
            this.error = 'Please complete all fields and provide at least two options.';
        }
    };
    CreateTopicComponent.prototype.removeOption = function (e) {
        e.preventDefault();
        this.newTopic.results.pop();
        this.options.pop();
    };
    return CreateTopicComponent;
}());
CreateTopicComponent = __decorate([
    core_1.Component({
        selector: 'app-create-topic',
        template: __webpack_require__("../../../../../src/app/create-topic/create-topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-topic/create-topic.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof toastr_service_1.ToastrService !== "undefined" && toastr_service_1.ToastrService) === "function" && _d || Object, typeof (_e = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _e || Object])
], CreateTopicComponent);
exports.CreateTopicComponent = CreateTopicComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-topic.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"responsive-container\">\r\n\r\n<!-- WELCOME SECTION - DISPLAYS IF USER NOT AUTHENTICATED -->\r\n\r\n<section\r\n  *ngIf=\"!username\"\r\n  class=\"topic-wrapper \"\r\n  [@showPage]=\"'on'\">\r\n    <div class=\"panel info-panel\">\r\n      <div class=\"panel-heading info-panel\">\r\n        <h1 class=\"panel-title\">Welcome to Votogo</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p class=\"info\">Votogo is a free voting app which allows users to create, share and view the results of surveys.To view survey results, click on a topic below.</p>\r\n        <p class=\"info\">To vote and create your own topics, please <a [routerLink]=\"['/login/register']\">register</a> or <a [routerLink]=\"['/login']\">login</a>.</p>\r\n\r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<!-- SEARCH INPUT SECTION -->\r\n\r\n<section *ngIf=\"!error\" class=\"search-wrapper\">\r\n  <div class=\"input-group\">\r\n    <span class=\"input-group-addon\"><b>Search Topics</b></span>\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control search-input\"\r\n      [(ngModel)]=\"listFilter\" />\r\n  </div>\r\n</section>\r\n<div *ngIf=\"error\" class=\"data-error\">{{error}}</div>\r\n\r\n\r\n<!-- TOPIC SECTION - DISPLAYS ONCE FOR EACH TOPIC -->\r\n\r\n<section\r\n  *ngFor=\"let topic of topics | topicFilter:listFilter\"\r\n  class=\"topic-wrapper\"\r\n  [@showPage]=\"'on'\">\r\n  <a class=\"topic\" [routerLink]=\"['/topic', topic._id]\">\r\n    <div class=\"panel\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">{{ topic.topicTitle }}</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>{{ topic.topicQuestion }}</p>\r\n        <p class=\"topic-author\">by {{ topic.username }}</p>\r\n      </div>\r\n    </div>\r\n    </a>\r\n</section>\r\n\r\n\r\n<!-- HELP SECTION - DISPLAYS IF USER IS LOGGED IN BUT HAS CREATED NO VOTING TOPICS -->\r\n\r\n<section\r\n*ngIf=\"username && isTopicListEmpty\"\r\nclass=\"topic-wrapper \"\r\n[@showPage]=\"'on'\">\r\n  <div class=\"panel info-panel\">\r\n    <div class=\"panel-heading info-panel\">\r\n      <h1 class=\"panel-title\">Your Topics</h1>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <p class=\"info\">You haven't created any voting topics yet. To get started, go the the\r\n        <a [routerLink]=\"['/create']\">New Topic</a> page.</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover {\n  text-decoration: none; }\n\n.panel:hover {\n  background-color: #363636; }\n\n.search-wrapper {\n  background-color: #262626;\n  padding: 15px;\n  margin-top: 30px; }\n  .search-wrapper .input-group {\n    width: 50%; }\n  .search-wrapper .input-group-addon,\n  .search-wrapper .search-input {\n    height: 40px; }\n\n.data-error {\n  color: white;\n  padding: 20px; }\n\n.topic-wrapper {\n  margin-top: 30px; }\n\n.info-panel {\n  background-color: #444; }\n  .info-panel:hover {\n    background-color: #444; }\n\n.info-panel div {\n  padding: 20px; }\n\n.info-panel h2 {\n  font-weight: bold;\n  letter-spacing: 2px; }\n\n.info-panel p {\n  line-height: 30px;\n  letter-spacing: 1.5px; }\n\n.info-panel a {\n  color: white;\n  text-decoration: underline; }\n\n@media screen and (max-width: 780px) {\n  .search-wrapper > .input-group {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  This component renders a list of voting topics, displaying the title and question
 *  of each voting topic in a Bootstrap panel.
 *
 *  If the component is rendered on the path 'home', all voting topics will display.
 *  If the user is authenticated, this comp can also be accessed on the route
 *  'home/username'. In this case, only the user's own topics will be displayed.
 */

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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var animations_1 = __webpack_require__("../../../../../src/app/animations.ts");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var IndexComponent = (function () {
    function IndexComponent(_data, _helper, _auth, _router, _route) {
        this._data = _data;
        this._helper = _helper;
        this._auth = _auth;
        this._router = _router;
        this._route = _route;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this._route.snapshot.params['username'];
        if (this.username) {
            this._data.fetchTopicsByUser()
                .then(function (topics) {
                _this.topics = topics;
                if (topics.length === 0) {
                    _this.isTopicListEmpty = true;
                }
            })
                .catch(function (e) { return _this._helper.logError(e); });
        }
        else {
            this.username = this._auth.isValidated();
            this._data.fetchTopicIndex()
                .then(function (topics) { return _this.topics = topics; })
                .catch(function (e) { return _this._helper.logError(e); });
        }
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object, typeof (_b = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _b || Object, typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _e || Object])
], IndexComponent);
exports.IndexComponent = IndexComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/topic-filter.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TopicFilterPipe = (function () {
    function TopicFilterPipe() {
    }
    TopicFilterPipe.prototype.transform = function (value, filterBy) {
        if (value) {
            filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
            return filterBy ? value.filter(function (topic) {
                return topic.topicTitle.toLocaleLowerCase().indexOf(filterBy) !== -1;
            }) : value;
        }
        else {
            return [];
        }
    };
    return TopicFilterPipe;
}());
TopicFilterPipe = __decorate([
    core_1.Pipe({
        name: 'topicFilter'
    })
], TopicFilterPipe);
exports.TopicFilterPipe = TopicFilterPipe;
//# sourceMappingURL=topic-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/models/result.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Result = (function () {
    function Result(option, votes) {
        this.option = option;
        this.votes = votes;
    }
    return Result;
}());
exports.Result = Result;
//# sourceMappingURL=result.js.map

/***/ }),

/***/ "../../../../../src/app/models/topic.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Topic = (function () {
    function Topic(username, topicTitle, topicQuestion, results, voters) {
        this.username = username;
        this.topicTitle = topicTitle;
        this.topicQuestion = topicQuestion;
        this.results = results;
        this.voters = voters;
    }
    return Topic;
}());
exports.Topic = Topic;
//# sourceMappingURL=topic.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var AuthService = (function () {
    function AuthService(_http, _helper) {
        this._http = _http;
        this._helper = _helper;
    }
    AuthService.prototype.register = function (user) {
        var _this = this;
        var url = "/api/auth/register";
        return this._http.post(url, user)
            .do(function (response) {
            var token = _this._helper.getAuthTokenFromHeader(response);
            window.localStorage.setItem('token', token);
        })
            .map(function (response) { return response.json(); })
            .do(function (json) { return _this.updateCurrentUser(json); })
            .toPromise();
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        var url = "/api/auth/login";
        return this._http.post(url, user)
            .do(function (response) {
            var token = _this._helper.getAuthTokenFromHeader(response);
            window.localStorage.setItem('token', token);
        })
            .map(function (response) { return response.json(); })
            .do(function (authorizedUser) { return _this.updateCurrentUser(authorizedUser); })
            .toPromise();
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var options = this._helper.addAuthTokenToHeader();
        var url = "/api/auth/logout";
        return this._http.delete(url, options)
            .toPromise()
            .then(function () {
            _this.currentUser = undefined;
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('username');
        })
            .catch(function (e) { return console.log(e); });
    };
    AuthService.prototype.updateCurrentUser = function (user) {
        console.log('USER', user);
        var username = user.username;
        this.currentUser = user;
        window.localStorage.setItem('username', username);
    };
    AuthService.prototype.isValidated = function () {
        var token = window.localStorage.getItem('token');
        var username = window.localStorage.getItem('username');
        if (token && username) {
            this.currentUser = { username: username };
            return username;
        }
        return null;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _b || Object])
], AuthService);
exports.AuthService = AuthService;
var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/create-topic-guard.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var CreateTopicGuard = (function () {
    function CreateTopicGuard(_auth) {
        this._auth = _auth;
    }
    CreateTopicGuard.prototype.canActivate = function () {
        if (this._auth.isValidated()) {
            return true;
        }
        return false;
    };
    return CreateTopicGuard;
}());
CreateTopicGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], CreateTopicGuard);
exports.CreateTopicGuard = CreateTopicGuard;
var _a;
//# sourceMappingURL=create-topic-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var DataService = (function () {
    function DataService(_http, _helper) {
        this._http = _http;
        this._helper = _helper;
        this._dataUrl = '/api/data/';
    }
    // TODO What is TS type for Promise error?
    DataService.prototype.fetchTopicIndex = function () {
        var _this = this;
        return this._http.get('/api/data/')
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(function (e) { return _this.errorHandler(e); });
    };
    DataService.prototype.fetchTopicById = function (id) {
        var _this = this;
        return this._http.get("/api/data/" + id)
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(function (e) { return _this.errorHandler(e); });
    };
    DataService.prototype.fetchTopicsByUser = function () {
        var _this = this;
        var options = this._helper.addAuthTokenToHeader();
        return this._http.get('/api/data/current', options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(function (e) { return _this.errorHandler(e); });
    };
    DataService.prototype.addNewTopic = function (newTopic) {
        var _this = this;
        return this._http.post(this._dataUrl, newTopic)
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(function (e) { return _this.errorHandler(e); });
    };
    DataService.prototype.deleteTopic = function (id) {
        var _this = this;
        var options = this._helper.addAuthTokenToHeader();
        return this._http.delete("/api/data/" + id, options)
            .toPromise()
            .catch(function (e) { return _this.errorHandler(e); });
    };
    DataService.prototype.castVote = function (id, topic) {
        var _this = this;
        var options = this._helper.addAuthTokenToHeader();
        return this._http.put("/api/data/vote/" + id, topic, options)
            .toPromise()
            .catch(function (e) { return _this.errorHandler(e); });
    };
    DataService.prototype.errorHandler = function (e) {
        console.log(e);
        return Promise.reject(e);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _b || Object])
], DataService);
exports.DataService = DataService;
var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/helper.service.ts":
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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var HelperService = (function () {
    function HelperService() {
    }
    HelperService.prototype.getAuthTokenFromHeader = function (response) {
        var headers = response.headers.toJSON();
        if (headers['X-Auth']) {
            console.log(headers['X-Auth']);
            return headers['X-Auth'][0];
        }
        else {
            console.log(headers['x-auth']);
            return headers['x-auth'][0];
        }
    };
    HelperService.prototype.addAuthTokenToHeader = function () {
        var token = window.localStorage.getItem('token');
        var headers = new http_1.Headers({ 'X-Auth': token, 'Content-Type': 'application/json', });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    HelperService.prototype.logError = function (e, message) {
        if (message === void 0) { message = 'Oops! Something went wrong...'; }
        console.log(e);
        return message;
    };
    return HelperService;
}());
HelperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], HelperService);
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/toastr.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
toastr.options = {
    'positionClass': 'toast-top-right',
    'timeOut': '2500',
};
var ToastrService = (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    core_1.Injectable()
], ToastrService);
exports.ToastrService = ToastrService;
//# sourceMappingURL=toastr.service.js.map

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"responsive-container\" [@showPage]=\"'on'\" >\r\n\r\n\r\n  <!-- NAVIGATION SECTION -->\r\n\r\n  <section class=\"nav-wrapper\">\r\n    <button (click)=\"toggleDisplay()\" class=\"btn btn-info control-button\" [disabled]=\"!totalVotes\">{{ toggleButton }}</button>\r\n    <button class=\"btn btn-info control-button\" [routerLink]=\"['/home']\">Back to Index</button>\r\n    <button\r\n      *ngIf=\"topic && currentUser === topic.username && view === 'data'\"\r\n      class=\"btn btn-warning control-button\"\r\n      (click)=\"deleteTopic(_id)\"\r\n      [@showPage]=\"'on'\">\r\n      Delete topic\r\n    </button>\r\n  </section>\r\n\r\n\r\n  <!-- RESULTS SECTION -->\r\n\r\n  <section class=\"results-wrapper\">\r\n    <div *ngIf=\"topic && view === 'data'\" class=\"panel\" [@showPage]=\"'on'\" >\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">{{ topic.topicTitle }}</h1>\r\n        <div *ngIf=\"hasVoted\" class=\"has-voted-wrapper\">\r\n            <span class=\"pull-right voted\">voted</span>\r\n            <span class=\"glyphicon glyphicon-ok-sign pull-right\" aria-hidden=\"true\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>{{ topic.topicQuestion }}</p>\r\n        <p class=\"topic-author\">by {{ topic.username  }}</p>\r\n      </div>\r\n\r\n      <table>\r\n        <tbody>\r\n          <tr *ngFor=\"let result of topic.results\">\r\n            <td>{{ result.option | titlecase }}</td>\r\n            <td><b>{{ result.votes }}</b></td>\r\n            <td><button class=\"btn btn-success\" (click)=\"castVote(result)\" [disabled]=\"hasVoted || !currentUser\">Vote</button></td>\r\n          </tr>\r\n          <tr>\r\n            <td>TOTAL</td>\r\n            <td><b>{{ totalVotes }}</b></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n\r\n    <!-- CHART COMPONENT -->\r\n\r\n    <app-chart *ngIf=\"view === 'chart'\" [_id]=\"_id\"></app-chart>\r\n\r\n\r\n    <!-- HELP PANEL -->\r\n\r\n    <div *ngIf=\"!currentUser && view === 'data'\" class=\"alert\" role=\"alert\" [@showPage]=\"'on'\">\r\n      To vote, please <a [routerLink]=\"['/login/register']\">register</a> or <a [routerLink]=\"['/login']\">login</a>.\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.nav-wrapper {\n  float: left;\n  width: 200px;\n  margin-top: 30px;\n  margin-bottom: 12px; }\n  section.nav-wrapper .control-button {\n    margin: 0 5px 10px 0;\n    padding: 10px 20px;\n    width: 150px; }\n\nsection.results-wrapper {\n  float: left;\n  width: 60%;\n  max-width: 800px; }\n\n#responsive-container:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\ndiv.panel-heading:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\nh1.panel-title {\n  display: inline-block; }\n\ndiv.has-voted-wrapper {\n  float: right; }\n  div.has-voted-wrapper span.glyphicon {\n    color: green;\n    font-size: 22px;\n    margin-left: 10px;\n    padding: 6px; }\n  div.has-voted-wrapper span.voted {\n    font-size: 16px;\n    padding: 3px 0 3px 5px; }\n\ntable {\n  width: 100%; }\n\n.thead {\n  border-bottom: 0; }\n\ntd:first-child {\n  padding: 10px 20px;\n  border-width: 0px;\n  font-size: 0.9em;\n  text-align: left; }\n\ntd:last-child {\n  padding: 10px 20px;\n  border-width: 0px;\n  font-size: 0.9em;\n  text-align: right; }\n\n.alert {\n  background-color: #ff4646;\n  color: white;\n  margin-top: 30px; }\n  .alert a {\n    color: inherit;\n    font-weight: bold; }\n\n@media screen and (max-width: 700px) {\n  section.nav-wrapper {\n    float: none;\n    width: 100%; }\n    section.nav-wrapper .control-button {\n      display: inline-block;\n      width: 30%;\n      min-width: 130px; }\n  section.results-wrapper {\n    float: none;\n    width: 100%; }\n  div.panel {\n    width: 100%;\n    margin: 0 auto; } }\n\n@media screen and (max-width: 460px) {\n  section.nav-wrapper > .control-button {\n    display: block;\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topic/topic.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  This component displays the results of a single voting topic,
 *  either as a table or a pie chart. The chart is rendered as a
 *  child component.
 *  For authenticated users, a voting widget is displayed.
 */

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
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var animations_1 = __webpack_require__("../../../../../src/app/animations.ts");
var toastr_service_1 = __webpack_require__("../../../../../src/app/services/toastr.service.ts");
var helper_service_1 = __webpack_require__("../../../../../src/app/services/helper.service.ts");
var TopicComponent = (function () {
    function TopicComponent(_route, _router, _data, _auth, _helper, _toastr) {
        this._route = _route;
        this._router = _router;
        this._data = _data;
        this._auth = _auth;
        this._helper = _helper;
        this._toastr = _toastr;
        // totalVotes: number;
        this.hasVoted = false;
        this.toggleButton = 'View Chart';
        this.view = 'data';
        this._id = this._route.snapshot.params['id'];
    }
    Object.defineProperty(TopicComponent.prototype, "totalVotes", {
        // computed values
        get: function () {
            if (this.topic) {
                return this.topic.results.map(function (result) { return result.votes; })
                    .reduce(function (a, b) { return a + b; });
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.fetchTopicById(this._id)
            .then(function (topic) {
            _this.topic = topic;
            _this.currentUser = _this._auth.isValidated();
            _this.topic.voters.forEach(function (voter) {
                if (voter === _this.currentUser) {
                    _this.hasVoted = true;
                }
            });
        })
            .catch(function (e) { return _this._helper.logError(e); });
    };
    // getTotalVotes(): number {
    //   return this.topic.results.map(result => result.votes)
    //     .reduce((a, b) => a + b);
    // }
    TopicComponent.prototype.castVote = function (res) {
        var _this = this;
        if (this.hasVoted) {
            return;
        }
        else {
            // add vote indicators locally for quick UI
            this.incrementVote(res.option);
            this.hasVoted = true;
            this._data.castVote(this._id, this.topic)
                .then(function () {
                _this.topic.voters.push(_this.currentUser);
                _this._toastr.success('Thanks for your vote');
            })
                .catch(function (e) {
                // if the vote cannot be saved, revert the UI
                _this._helper.logError(e);
                _this._toastr.error('Vote could not be registered. Try again later.');
                _this.hasVoted = false;
                _this.topic.voters.pop();
                _this.incrementVote(res.option, -1);
            });
        }
    };
    TopicComponent.prototype.incrementVote = function (option, num) {
        if (num === void 0) { num = 1; }
        this.topic.results.forEach(function (result) {
            if (result.option === option) {
                result.votes += num;
            }
        });
    };
    TopicComponent.prototype.deleteTopic = function (id) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this topic and its data?')) {
            this._data.deleteTopic(id)
                .then(function () {
                _this._toastr.warning('Topic deleted!');
                _this._router.navigate(['/home']);
            })
                .catch(function (e) {
                _this._helper.logError(e);
                _this._toastr.warning('Topic could not be deleted. Try again later.');
            });
        }
    };
    TopicComponent.prototype.toggleDisplay = function () {
        this.view = (this.view === 'data') ? 'chart' : 'data';
        this.toggleButton = (this.toggleButton === 'View Chart') ? 'View Data' : 'View Chart';
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    core_1.Component({
        selector: 'app-topic',
        template: __webpack_require__("../../../../../src/app/topic/topic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topic/topic.component.scss")],
        animations: [animations_1.pageTransition]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _c || Object, typeof (_d = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _d || Object, typeof (_e = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _e || Object, typeof (_f = typeof toastr_service_1.ToastrService !== "undefined" && toastr_service_1.ToastrService) === "function" && _f || Object])
], TopicComponent);
exports.TopicComponent = TopicComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=topic.component.js.map

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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map