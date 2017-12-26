webpackJsonp([1,5],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__helper_service__["a" /* HelperService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageTransition; });

// import { Component, Input } from '@angular/core';
var pageTransition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('showPage', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('void => on', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('500ms ease-in')
    ]),
]);

//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 228;


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(255);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(373),
        styles: [__webpack_require__(358)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_toastr_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_auth, _router, _toastr) {
        this._auth = _auth;
        this._router = _router;
        this._toastr = _toastr;
    }
    AppComponent.prototype.ngOnInit = function () {
        var username = this._auth.isValidated();
        if (username) {
            this.username = username;
            console.log('APP COMPONENT INIT', this.username);
        }
    };
    AppComponent.prototype.ngDoCheck = function () {
        console.log('do check');
        this.username = this._auth.isValidated();
    };
    AppComponent.prototype.logout = function () {
        console.log('LOGOUT');
        // needs error handling
        this._auth.logout();
        this._toastr.success('You have been logged out.');
        this._router.navigate(['/login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(374),
        styles: [__webpack_require__(359)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_index_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_login_login_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_topic_topic_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_registration_registration_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chart_chart_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_data_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_helper_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__create_topic_create_topic_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_services_create_topic_guard_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_toastr_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__index_topic_filter_pipe__ = __webpack_require__(250);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_10_app_topic_topic_component__["a" /* TopicComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__create_topic_create_topic_component__["a" /* CreateTopicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__auth_registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__chart_chart_component__["a" /* ChartComponent */],
            __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_20__index_topic_filter_pipe__["a" /* TopicFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'topic/:id', component: __WEBPACK_IMPORTED_MODULE_10_app_topic_topic_component__["a" /* TopicComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__auth_login_login_component__["a" /* LoginComponent */] },
                { path: 'login/register', component: __WEBPACK_IMPORTED_MODULE_11__auth_registration_registration_component__["a" /* RegistrationComponent */] },
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */] },
                { path: 'home/:id', component: __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */] },
                { path: 'create', canActivate: [__WEBPACK_IMPORTED_MODULE_18_app_services_create_topic_guard_service__["a" /* CreateTopicGuard */]], component: __WEBPACK_IMPORTED_MODULE_17__create_topic_create_topic_component__["a" /* CreateTopicComponent */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */] },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16__services_helper_service__["a" /* HelperService */],
            __WEBPACK_IMPORTED_MODULE_18_app_services_create_topic_guard_service__["a" /* CreateTopicGuard */],
            __WEBPACK_IMPORTED_MODULE_19__services_toastr_service__["a" /* ToastrService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(375),
        styles: [__webpack_require__(360)],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_toastr_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(376),
        styles: [__webpack_require__(361)],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = (function () {
    function ChartComponent(_data) {
        this._data = _data;
        this.chartLabels = [];
        this.chartData = [];
        this.chartType = 'doughnut';
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('chart component', this._id);
        this._data.fetchTopicById(this._id)
            .subscribe(function (topic) {
            _this.results = topic.results;
            _this.results.forEach(function (result) {
                _this.chartData.push(result.votes);
                _this.chartLabels.push(result.option);
            });
            console.log(_this.chartLabels);
            console.log(_this.chartData);
        });
    };
    return ChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "_id", void 0);
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__(377),
        styles: [__webpack_require__(362)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ChartComponent);

var _a;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_topic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_result__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_toastr_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateTopicComponent = (function () {
    function CreateTopicComponent(_data, _router, _auth, _toastr) {
        this._data = _data;
        this._router = _router;
        this._auth = _auth;
        this._toastr = _toastr;
        this.result = new __WEBPACK_IMPORTED_MODULE_4__models_result__["a" /* Result */]('', 0);
        this.newTopic = new __WEBPACK_IMPORTED_MODULE_3__models_topic__["a" /* Topic */]('', '', '', [], []);
        this.options = [];
    }
    CreateTopicComponent.prototype.ngOnInit = function () {
        console.log('INIT: ', this.result);
        console.log('INIT: ', this.newTopic);
        this.newTopic.username = this._auth.isValidated();
    };
    CreateTopicComponent.prototype.addOption = function (e) {
        e.preventDefault();
        if (this.option) {
            var result = new __WEBPACK_IMPORTED_MODULE_4__models_result__["a" /* Result */](this.option, 0);
            this.newTopic.results.push(result);
            this.options.push(this.option);
            this.option = '';
            this.result = new __WEBPACK_IMPORTED_MODULE_4__models_result__["a" /* Result */]('', 0);
        }
    };
    CreateTopicComponent.prototype.submitForm = function () {
        if (this.newTopic.topicQuestion && this.newTopic.topicTitle && this.newTopic.results.length > 1) {
            this._data.addNewTopic(this.newTopic).subscribe();
            // do we need to clean up?
            this.newTopic = new __WEBPACK_IMPORTED_MODULE_3__models_topic__["a" /* Topic */]('', '', '', [], []);
            this._toastr.success('New voting topic added');
            this._router.navigate(['/home']);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-topic',
        template: __webpack_require__(378),
        styles: [__webpack_require__(363)],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], CreateTopicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-topic.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndexComponent = (function () {
    function IndexComponent(_data, _auth, _router, _route) {
        this._data = _data;
        this._auth = _auth;
        this._router = _router;
        this._route = _route;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this._route.snapshot.params['id'];
        if (this.username) {
            this._data.fetchTopicsByUser()
                .then(function (topics) {
                _this.topics = topics;
                if (topics.length === 0) {
                    _this.isTopicListEmpty = true;
                }
            })
                .catch(function (e) { return console.log(e); });
        }
        else {
            this.username = this._auth.isValidated();
            this._data.fetchTopicIndex().then(function (topics) { return _this.topics = topics; });
        }
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(379),
        styles: [__webpack_require__(364)],
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], IndexComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopicFilterPipe = (function () {
    function TopicFilterPipe() {
    }
    TopicFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (topic) {
            return topic.topicTitle.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
    };
    return TopicFilterPipe;
}());
TopicFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'topicFilter'
    })
], TopicFilterPipe);

//# sourceMappingURL=topic-filter.pipe.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Result; });
var Result = (function () {
    function Result(option, votes) {
        this.option = option;
        this.votes = votes;
    }
    return Result;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
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

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTopicGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], CreateTopicGuard);

var _a;
//# sourceMappingURL=create-topic-guard.service.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_data_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_toastr_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicComponent = (function () {
    function TopicComponent(_route, _router, _data, _auth, _toastr) {
        this._route = _route;
        this._router = _router;
        this._data = _data;
        this._auth = _auth;
        this._toastr = _toastr;
        this.hasVoted = false;
        this.toggleButton = 'View Chart';
        this.view = 'data';
        console.log('snapshot' + this._route.snapshot.params['id']);
        this._id = this._route.snapshot.params['id'];
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.fetchTopicById(this._id)
            .subscribe(function (topic) {
            _this.topic = topic;
            _this.results = topic.results;
            _this.totalVotes = _this.getTotalVotes();
            _this.currentUser = _this._auth.isValidated();
            _this.topic.voters.forEach(function (voter) {
                if (voter === _this.currentUser) {
                    _this.hasVoted = true;
                }
            });
        });
    };
    TopicComponent.prototype.getTotalVotes = function () {
        return this.topic.results.map(function (result) { return result.votes; })
            .reduce(function (a, b) { return a + b; });
    };
    TopicComponent.prototype.castVote = function (event) {
        if (!this.hasVoted) {
            this.topic.results.forEach(function (result) {
                if (result.option === event.target.value) {
                    result.votes += 1;
                }
            });
            this.topic.voters.push(this.currentUser);
            this.hasVoted = true;
            this.totalVotes = this.getTotalVotes();
            this._data.castVote(this._id, this.topic);
            this._toastr.success('Thanks for your vote');
        }
    };
    TopicComponent.prototype.deleteTopic = function (id) {
        var _this = this;
        this._data.deleteTopic(id).then(function () {
            _this._toastr.warning('Topic deleted!');
            _this._router.navigate(['/home']);
        });
    };
    TopicComponent.prototype.toggleDisplay = function () {
        this.view = (this.view === 'data') ? 'chart' : 'data';
        this.toggleButton = (this.toggleButton === 'View Chart') ? 'View Data' : 'View Chart';
    };
    return TopicComponent;
}());
TopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__(380),
        styles: [__webpack_require__(365)],
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object])
], TopicComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=topic.component.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ToastrService);

//# sourceMappingURL=toastr.service.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataService = (function () {
    function DataService(_http, _helper) {
        this._http = _http;
        this._helper = _helper;
        this._dataUrl = '/api/data/';
    }
    DataService.prototype.fetchTopicIndex = function () {
        return this._http.get('/api/data/')
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    DataService.prototype.fetchTopicById = function (id) {
        return this._http.get("/api/data/" + id)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.fetchTopicsByUser = function () {
        var options = this._helper.addAuthTokenToHeader();
        return this._http.get('/api/data/current', options)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    DataService.prototype.addNewTopic = function (newTopic) {
        return this._http.post(this._dataUrl, newTopic)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.castVote = function (id, topic) {
        var options = this._helper.addAuthTokenToHeader();
        return this._http.put("/api/data/vote/" + id, topic, options)
            .toPromise();
    };
    DataService.prototype.deleteTopic = function (id) {
        var options = this._helper.addAuthTokenToHeader();
        return this._http.delete("/api/data/" + id, options)
            .toPromise();
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__helper_service__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__helper_service__["a" /* HelperService */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".panel-heading {\n  background-color: #262626;\n  color: orange;\n  border-color: #666; }\n\n.panel-title {\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  padding: 5px; }\n\n.panel {\n  background-color: #262626;\n  color: white;\n  font-family: 'Roboto';\n  font-size: 1.3em;\n  border: 0;\n  line-height: 32px;\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".container {\n  max-width: 960px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".login-form {\n  max-width: 400px;\n  margin: 0 auto;\n  margin-top: 100px; }\n\n.panel {\n  background-color: #262626;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.3em;\n  border: 0; }\n\n.panel-heading {\n  background-color: #262626;\n  color: orange;\n  border-color: #666; }\n\n.panel-title {\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  padding: 5px; }\n\n.form-control {\n  font-size: 0.9em;\n  height: 38px;\n  font-weight: bold; }\n\n.control-label {\n  font-weight: 500; }\n\n.control-button {\n  margin-top: 10px;\n  font-size: 1.0em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".login-form {\n  max-width: 400px;\n  margin: 0 auto;\n  margin-top: 100px; }\n\n.error {\n  color: white;\n  margin-bottom: 10px; }\n\n.panel {\n  background-color: #262626;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.3em;\n  border: 0; }\n\n.panel-heading {\n  background-color: #262626;\n  color: orange;\n  border-color: #666; }\n\n.panel-title {\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  padding: 5px; }\n\n.control-label {\n  font-weight: 500; }\n\n.form-control {\n  font-size: 0.9em;\n  height: 38px;\n  font-weight: bold; }\n\n.control-button {\n  margin-top: 10px;\n  font-size: 1.0em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".doughnut-chart {\n  height: 500px;\n  width: 500px;\n  margin: 0 auto;\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".panel {\n  background-color: #262626;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  font-size: 1.3em;\n  border: 0;\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: 30px; }\n\n.panel-heading {\n  background-color: #262626;\n  color: orange;\n  border-color: #666; }\n\n.panel-title {\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  padding: 5px; }\n\n.form-control {\n  font-size: 0.9em;\n  height: 38px;\n  font-weight: bold; }\n\n.topic-option {\n  width: 300px;\n  margin-bottom: 5px; }\n\n.output {\n  color: white; }\n\n.option-badge {\n  margin: 0 3px 6px 3px;\n  padding: 4px 10px 4px 10px;\n  background-color: #363636;\n  border-radius: 8px;\n  font-size: 0.9em;\n  display: inline-block; }\n\n.error-message {\n  margin-top: 10px; }\n\n.control-button {\n  margin-top: 30px;\n  font-size: 1.0em;\n  margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".input-group {\n  width: 50%; }\n\n.input-group-addon,\n.search-input {\n  height: 40px; }\n\n.search-wrapper {\n  background-color: #262626;\n  padding: 15px; }\n\na:hover {\n  text-decoration: none; }\n\n.topic-wrapper {\n  margin-top: 30px; }\n\n.panel-heading {\n  background-color: #262626;\n  color: orange;\n  border-color: #666; }\n\n.panel-heading:hover {\n  background-color: #363636; }\n\n.panel-title {\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  padding: 5px; }\n\n.panel {\n  background-color: #262626;\n  color: white;\n  font-family: 'Roboto';\n  font-size: 1.3em;\n  border: 0; }\n\n.topic-details {\n  font-size: 0.9em;\n  color: #888; }\n\n.welcome-panel {\n  background-color: #444; }\n\n.welcome-panel a {\n  color: white;\n  text-decoration: underline; }\n\n.welcome-panel:hover {\n  background-color: #444; }\n\n.welcome-panel div {\n  padding: 20px; }\n\n.welcome-panel p {\n  line-height: 30px;\n  letter-spacing: 1.5px; }\n\n.welcome-panel h2 {\n  font-weight: bold;\n  letter-spacing: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".topic-wrapper {\n  max-width: 960px;\n  margin-top: 10px; }\n\n.button-wrapper {\n  float: left;\n  width: 200px; }\n\n.data-wrapper {\n  float: left;\n  width: 500px; }\n\n.vote-wrapper {\n  float: left;\n  width: 200px;\n  margin-left: 30px; }\n\n.button-group-vertical {\n  width: 100%; }\n\n.control-button {\n  margin-bottom: 12px;\n  padding: 10px 20px 10px 20px;\n  width: 150px; }\n\n.voting-button {\n  padding: 15px 15px 15px 15px; }\n\n.cell {\n  padding: 10px 20px 10px 20px;\n  border-width: 0px;\n  font-size: 0.9em;\n  text-align: left; }\n\n.cell-result {\n  padding: 10px 20px 10px 20px;\n  border-width: 0px;\n  font-size: 0.9em;\n  text-align: right; }\n\n.glyphicon {\n  color: green;\n  font-size: 22px;\n  margin-left: 10px; }\n\n.alert {\n  margin-top: 25px; }\n\n.voted {\n  font-size: 16px;\n  padding: 3px 0 3px 5px; }\n\n.panel-heading {\n  background-color: #262626;\n  color: orange;\n  border-color: #666; }\n\n.panel-heading:hover {\n  background-color: #363636; }\n\n.panel-title {\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  padding: 5px; }\n\n.panel {\n  background-color: #262626;\n  color: white;\n  font-family: 'Roboto';\n  font-size: 1.3em;\n  border: 0; }\n\n.topic-details {\n  font-size: 0.9em;\n  color: #888; }\n\n.thead {\n  border-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 97,
	"./af.js": 97,
	"./ar": 104,
	"./ar-dz": 98,
	"./ar-dz.js": 98,
	"./ar-kw": 99,
	"./ar-kw.js": 99,
	"./ar-ly": 100,
	"./ar-ly.js": 100,
	"./ar-ma": 101,
	"./ar-ma.js": 101,
	"./ar-sa": 102,
	"./ar-sa.js": 102,
	"./ar-tn": 103,
	"./ar-tn.js": 103,
	"./ar.js": 104,
	"./az": 105,
	"./az.js": 105,
	"./be": 106,
	"./be.js": 106,
	"./bg": 107,
	"./bg.js": 107,
	"./bn": 108,
	"./bn.js": 108,
	"./bo": 109,
	"./bo.js": 109,
	"./br": 110,
	"./br.js": 110,
	"./bs": 111,
	"./bs.js": 111,
	"./ca": 112,
	"./ca.js": 112,
	"./cs": 113,
	"./cs.js": 113,
	"./cv": 114,
	"./cv.js": 114,
	"./cy": 115,
	"./cy.js": 115,
	"./da": 116,
	"./da.js": 116,
	"./de": 119,
	"./de-at": 117,
	"./de-at.js": 117,
	"./de-ch": 118,
	"./de-ch.js": 118,
	"./de.js": 119,
	"./dv": 120,
	"./dv.js": 120,
	"./el": 121,
	"./el.js": 121,
	"./en-au": 122,
	"./en-au.js": 122,
	"./en-ca": 123,
	"./en-ca.js": 123,
	"./en-gb": 124,
	"./en-gb.js": 124,
	"./en-ie": 125,
	"./en-ie.js": 125,
	"./en-nz": 126,
	"./en-nz.js": 126,
	"./eo": 127,
	"./eo.js": 127,
	"./es": 129,
	"./es-do": 128,
	"./es-do.js": 128,
	"./es.js": 129,
	"./et": 130,
	"./et.js": 130,
	"./eu": 131,
	"./eu.js": 131,
	"./fa": 132,
	"./fa.js": 132,
	"./fi": 133,
	"./fi.js": 133,
	"./fo": 134,
	"./fo.js": 134,
	"./fr": 137,
	"./fr-ca": 135,
	"./fr-ca.js": 135,
	"./fr-ch": 136,
	"./fr-ch.js": 136,
	"./fr.js": 137,
	"./fy": 138,
	"./fy.js": 138,
	"./gd": 139,
	"./gd.js": 139,
	"./gl": 140,
	"./gl.js": 140,
	"./gom-latn": 141,
	"./gom-latn.js": 141,
	"./he": 142,
	"./he.js": 142,
	"./hi": 143,
	"./hi.js": 143,
	"./hr": 144,
	"./hr.js": 144,
	"./hu": 145,
	"./hu.js": 145,
	"./hy-am": 146,
	"./hy-am.js": 146,
	"./id": 147,
	"./id.js": 147,
	"./is": 148,
	"./is.js": 148,
	"./it": 149,
	"./it.js": 149,
	"./ja": 150,
	"./ja.js": 150,
	"./jv": 151,
	"./jv.js": 151,
	"./ka": 152,
	"./ka.js": 152,
	"./kk": 153,
	"./kk.js": 153,
	"./km": 154,
	"./km.js": 154,
	"./kn": 155,
	"./kn.js": 155,
	"./ko": 156,
	"./ko.js": 156,
	"./ky": 157,
	"./ky.js": 157,
	"./lb": 158,
	"./lb.js": 158,
	"./lo": 159,
	"./lo.js": 159,
	"./lt": 160,
	"./lt.js": 160,
	"./lv": 161,
	"./lv.js": 161,
	"./me": 162,
	"./me.js": 162,
	"./mi": 163,
	"./mi.js": 163,
	"./mk": 164,
	"./mk.js": 164,
	"./ml": 165,
	"./ml.js": 165,
	"./mr": 166,
	"./mr.js": 166,
	"./ms": 168,
	"./ms-my": 167,
	"./ms-my.js": 167,
	"./ms.js": 168,
	"./my": 169,
	"./my.js": 169,
	"./nb": 170,
	"./nb.js": 170,
	"./ne": 171,
	"./ne.js": 171,
	"./nl": 173,
	"./nl-be": 172,
	"./nl-be.js": 172,
	"./nl.js": 173,
	"./nn": 174,
	"./nn.js": 174,
	"./pa-in": 175,
	"./pa-in.js": 175,
	"./pl": 176,
	"./pl.js": 176,
	"./pt": 178,
	"./pt-br": 177,
	"./pt-br.js": 177,
	"./pt.js": 178,
	"./ro": 179,
	"./ro.js": 179,
	"./ru": 180,
	"./ru.js": 180,
	"./sd": 181,
	"./sd.js": 181,
	"./se": 182,
	"./se.js": 182,
	"./si": 183,
	"./si.js": 183,
	"./sk": 184,
	"./sk.js": 184,
	"./sl": 185,
	"./sl.js": 185,
	"./sq": 186,
	"./sq.js": 186,
	"./sr": 188,
	"./sr-cyrl": 187,
	"./sr-cyrl.js": 187,
	"./sr.js": 188,
	"./ss": 189,
	"./ss.js": 189,
	"./sv": 190,
	"./sv.js": 190,
	"./sw": 191,
	"./sw.js": 191,
	"./ta": 192,
	"./ta.js": 192,
	"./te": 193,
	"./te.js": 193,
	"./tet": 194,
	"./tet.js": 194,
	"./th": 195,
	"./th.js": 195,
	"./tl-ph": 196,
	"./tl-ph.js": 196,
	"./tlh": 197,
	"./tlh.js": 197,
	"./tr": 198,
	"./tr.js": 198,
	"./tzl": 199,
	"./tzl.js": 199,
	"./tzm": 201,
	"./tzm-latn": 200,
	"./tzm-latn.js": 200,
	"./tzm.js": 201,
	"./uk": 202,
	"./uk.js": 202,
	"./ur": 203,
	"./ur.js": 203,
	"./uz": 205,
	"./uz-latn": 204,
	"./uz-latn.js": 204,
	"./uz.js": 205,
	"./vi": 206,
	"./vi.js": 206,
	"./x-pseudo": 207,
	"./x-pseudo.js": 207,
	"./yo": 208,
	"./yo.js": 208,
	"./zh-cn": 209,
	"./zh-cn.js": 209,
	"./zh-hk": 210,
	"./zh-hk.js": 210,
	"./zh-tw": 211,
	"./zh-tw.js": 211
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 367;


/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = "<section\r\n  class=\"about-wrapper\"\r\n  [@showPage]=\"'on'\">\r\n\r\n    <div class=\"panel panel-success\">\r\n      <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">About Votogo</h3>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>VOTOGO is a voting app which allows users to create, share and view the results of surveys,\r\n          and vote on other people's topics. It was created as a\r\n          <a href=\"https://www.freecodecamp.com/challenges/build-a-voting-app\" target=\"_blank\">Free Code Camp</a>\r\n          project.\r\n        </p>\r\n        <p>This application was built using the MEAN Stack:</p>\r\n        <ul>\r\n          <li>The front end is an Angular 4 / Typescript project created with the excellent Angular-CLI.</li>\r\n          <li>The back end uses Node v.6.9.2 and Express.</li>\r\n          <li>Data is hosted in the cloud at MLab, using MongoDB and Mongoose.</li>\r\n          <li>The authentication module uses Bcrypt.js for password encryption and JSON Web Tokens for maintaining secure sessions.</li>\r\n          <li>UI components are based on Bootstrap and animated with the Angular animations module.</li>\r\n          <li>The doughnut chart was created using Chart.js.</li>\r\n        </ul>\r\n        <p>The complete project repo can be viewed at <a href=\"https://github.com/ARWL2016/voting-app\" target=\"_blank\">Github</a>.</p>\r\n        <p><b>Alistair Willis</b></p>\r\n      </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\"><b>votogo </b></a>\r\n\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a [routerLink]=\"['/home']\">TOPIC INDEX</a></li>\r\n          <li *ngIf=\"username\"><a [routerLink]=\"['/home', username]\">MY TOPICS</a></li>\r\n          <li *ngIf=\"username\"><a [routerLink]=\"['/create']\">NEW TOPIC</a></li>\r\n          <li><a [routerLink]=\"['/about']\">ABOUT</a></li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"!username\"><a [routerLink]=\"['/login/register']\">SIGN UP</a></li>\r\n        <li *ngIf=\"!username\"><a [routerLink]=\"['/login']\">LOGIN</a></li>\r\n        <li *ngIf=\"username\"><a>Logged in as <b>{{ username | uppercase }}</b></a></li>\r\n        <button *ngIf=\"username\" class=\"btn btn-default navbar-btn\" (click)=\"logout()\">LOGOUT</button>\r\n      </ul>\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<form #form = \"ngForm\" (submit)=\"submitForm(form)\" [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel panel-default login-form\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Login</h3>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <p>Login, or <a [routerLink]=\"['register']\">sign up </a>for a free account</p>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Username</label>\r\n          <input\r\n            [(ngModel)]=\"username\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            placeholder=\"enter your username\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Password</label>\r\n          <input\r\n            [(ngModel)]=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"enter your password\"\r\n            type=\"password\">\r\n        </div>\r\n        <div>{{error}}</div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary control-button\">Login</button>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (submit)=\"submitForm(form)\" novalidate [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel panel-default login-form\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Register</h3>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Enter your unique username</label>\r\n          <input\r\n            [(ngModel)]=\"username\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            placeholder=\"username\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Password</label>\r\n          <input\r\n            [(ngModel)]=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"minimum 3 characters\"\r\n            type=\"password\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Confirm password</label>\r\n          <input\r\n            [(ngModel)]=\"passwordConfirmation\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"\"\r\n            type=\"password\">\r\n        </div>\r\n        <div class=\"error\">{{error}}</div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary control-button\">Register</button>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"results\" class=\"doughnut-chart\" style=\"display: block\" >\r\n  <canvas baseChart\r\n              [data]=\"chartData\"\r\n              [labels]=\"chartLabels\"\r\n              [chartType]=\"chartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (submit)=\"submitForm(form)\" [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel panel-default login-form\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Create Topic</h3>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Topic Title</label>\r\n          <input\r\n            [(ngModel)]=\"newTopic.topicTitle\"\r\n\r\n            class=\"form-control\"\r\n            name=\"topicTitle\"\r\n            placeholder=\"enter a title for your voting topic\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Topic Question</label>\r\n          <input\r\n            [(ngModel)]=\"newTopic.topicQuestion\"\r\n\r\n            class=\"form-control\"\r\n            name=\"topicQuestion\"\r\n            placeholder=\"enter a question for your voting topic\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Options</label>\r\n          <input\r\n            [(ngModel)]=\"option\"\r\n            class=\"form-control\"\r\n            name=\"option\"\r\n            placeholder=\"add a voting option and press enter\"\r\n            type=\"text\">\r\n        </div>\r\n        <div>\r\n          <span class=\"option-badge\" *ngFor=\"let option of options\">{{ option }}</span>\r\n        </div>\r\n        <div class=\"error-message\">{{error}}</div>\r\n\r\n          <button class=\"btn btn-primary control-button\" (click)=\"addOption($event)\">\r\n            Add option\r\n          </button>\r\n          <button class=\"btn btn-primary control-button\" (click)=\"removeOption($event)\">\r\n            Undo\r\n          </button>\r\n\r\n\r\n\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary pull-right control-button\">Create</button>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<!--<div class=\"output\">\r\nModel: {{ model | json}}\r\n<br>\r\nAngular: {{ form.value | json}}\r\n</div>-->\r\n"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<section\r\n  *ngIf=\"!username\"\r\n  class=\"topic-wrapper \"\r\n  [@showPage]=\"'on'\">\r\n    <div class=\"panel panel-success welcome-panel\">\r\n      <div class=\"panel-heading welcome-panel\">\r\n        <h2 class=\"panel-title\">Welcome to Votogo</h2>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p class=\"info\">Votogo is a free voting app which allows users to create, share and view the results of surveys.To view survey results, click on a topic below.</p>\r\n        <p class=\"info\">To vote and create your own topics, please <a [routerLink]=\"['/login/register']\">register</a> or <a [routerLink]=\"['/login']\">login</a>.</p>\r\n\r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"search-wrapper\">\r\n  <div class=\"input-group\">\r\n    <span class=\"input-group-addon\"><b>Search Topics</b></span>\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control search-input\"\r\n      [(ngModel)]=\"listFilter\" />\r\n</div>\r\n</section>\r\n\r\n<section\r\n  *ngIf=\"username && isTopicListEmpty\"\r\n  class=\"topic-wrapper \"\r\n  [@showPage]=\"'on'\">\r\n    <div class=\"panel panel-success welcome-panel\">\r\n      <div class=\"panel-heading welcome-panel\">\r\n        <h2 class=\"panel-title\">Your Topics</h2>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p class=\"info\">You haven't created any voting topics yet. To get started, go the the\r\n          <a [routerLink]=\"['/create']\">New Topic</a> page.</p>\r\n\r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n\r\n<section\r\n  *ngFor=\"let topic of topics | topicFilter:listFilter\"\r\n  class=\"topic-wrapper\"\r\n  [@showPage]=\"'on'\">\r\n  <a class=\"topic\" [routerLink]=\"['/topic', topic._id]\">\r\n    <div class=\"panel panel-success\">\r\n      <div class=\"panel-heading\">\r\n        <h3 class=\"panel-title\">{{ topic.topicTitle }}</h3>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>{{ topic.topicQuestion }}</p>\r\n        <p class=\"topic-details\">by {{ topic.username }}</p>\r\n      </div>\r\n    </div>\r\n    </a>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"topic-wrapper\" [@showPage]=\"'on'\" >\r\n\r\n<div class=\"button-wrapper\">\r\n  <button (click)=\"toggleDisplay()\" class=\"btn btn-info control-button\">{{ toggleButton }}</button>\r\n  <button class=\"btn btn-info control-button\" [routerLink]=\"['/home']\">Back to Index</button>\r\n\r\n  <button\r\n  *ngIf=\"topic && currentUser === topic.username && view === 'data'\"\r\n  class=\"btn btn-warning control-button\"\r\n  (click)=\"deleteTopic(_id)\"\r\n  [@showPage]=\"'on'\">\r\n  Delete topic\r\n</button>\r\n</div>\r\n\r\n<div class=\"data-wrapper\">\r\n  <div *ngIf=\"topic && view === 'data'\" class=\"panel panel-success \" [@showPage]=\"'on'\" >\r\n    <div class=\"panel-heading\">\r\n      <h2 class=\"panel-title\">{{ topic.topicTitle }}\r\n        <span *ngIf=\"hasVoted\" class=\"pull-right voted\">voted</span>\r\n        <span *ngIf=\"hasVoted\" class=\"glyphicon glyphicon-ok-sign pull-right\" aria-hidden=\"true\"></span>\r\n      </h2>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <p>{{ topic.topicQuestion }}</p>\r\n      <p class=\"topic-details\">by {{ topic.username  }}</p>\r\n    </div>\r\n\r\n    <table class=\"table\">\r\n      <tbody class=\"tbody\">\r\n        <tr *ngFor=\"let result of results\">\r\n          <td class=\"cell\">{{ result.option | titlecase }}</td>\r\n          <td class=\"cell-result\"><b>{{ result.votes }}</b></td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"cell\">TOTAL</td>\r\n          <td class=\"cell-result\"><b>{{ totalVotes }}</b></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n  <!--results panel end-->\r\n  <app-chart *ngIf=\"view === 'chart'\" [_id]=\"_id\"></app-chart>\r\n\r\n  <div *ngIf=\"!currentUser && view === 'data'\" class=\"alert alert-warning\" role=\"alert\" >\r\n    To vote, please <a [routerLink]=\"['/login/register']\">register</a> or <a [routerLink]=\"['/login']\">login</a>.\r\n  </div>\r\n</div>\r\n<!--data wrapper-->\r\n\r\n<div class=\"vote-wrapper\">\r\n    <div *ngIf=\"!hasVoted && currentUser && view === 'data'\" class=\"panel panel-success voting-panel\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Vote</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"btn-group-vertical\" role=\"group\">\r\n        <button\r\n          *ngFor=\"let result of results\"\r\n          class=\"btn btn-success btn-lg voting-button\"\r\n          value=\"{{ result.option }}\"\r\n          (click)=\"castVote($event)\">\r\n          {{ result.option }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(229);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'X-Auth': token, 'Content-Type': 'application/json', });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return options;
    };
    return HelperService;
}());
HelperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HelperService);

//# sourceMappingURL=helper.service.js.map

/***/ })

},[434]);
//# sourceMappingURL=main.bundle.js.map