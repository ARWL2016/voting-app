webpackJsonp([1,5],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 90%;\n  max-width: 400px;\n  margin: 0 auto;\n  margin-top: 100px; }\n  .panel label {\n    font-weight: 500; }\n  .panel input {\n    font-size: 0.9em;\n    height: 38px;\n    font-weight: bold; }\n  .panel button.btn.btn-primary {\n    margin-top: 10px;\n    font-size: 1.1em;\n    font-weight: bold; }\n\n@media screen and (max-width: 500px) {\n  .panel {\n    margin-top: 30px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 273;


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(300);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_service__ = __webpack_require__(68);
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(33);
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
        template: __webpack_require__(514),
        styles: [__webpack_require__(501)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_toastr_service__ = __webpack_require__(40);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(515),
        styles: [__webpack_require__(502)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_index_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_login_login_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_topic_topic_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_registration_registration_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chart_chart_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_helper_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__create_topic_create_topic_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_services_create_topic_guard_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_toastr_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__index_topic_filter_pipe__ = __webpack_require__(295);
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
                { path: 'home/:username', component: __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */] },
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__ = __webpack_require__(40);
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
        template: __webpack_require__(516),
        styles: [__webpack_require__(140)],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_toastr_service__ = __webpack_require__(40);
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
        template: __webpack_require__(517),
        styles: [__webpack_require__(140)],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(33);
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
        template: __webpack_require__(518),
        styles: [__webpack_require__(503)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ChartComponent);

var _a;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_topic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_result__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_toastr_service__ = __webpack_require__(40);
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
        template: __webpack_require__(519),
        styles: [__webpack_require__(504)],
        animations: [__WEBPACK_IMPORTED_MODULE_6__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_services_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], CreateTopicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-topic.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
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





var IndexComponent = (function () {
    function IndexComponent(_data, _auth, _router, _route) {
        this._data = _data;
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
        template: __webpack_require__(520),
        styles: [__webpack_require__(505)],
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], IndexComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 295:
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

/***/ 296:
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

/***/ 297:
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__(28);
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_data_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_toastr_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicComponent; });
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



// import { Result } from '../models/result';



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
        this._id = this._route.snapshot.params['id'];
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.fetchTopicById(this._id)
            .subscribe(function (topic) {
            _this.topic = topic;
            // this.results = topic.results;
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
    TopicComponent.prototype.castVote = function (res) {
        if (!this.hasVoted) {
            this.topic.results.forEach(function (result) {
                if (result.option === res.option) {
                    result.votes += 1;
                }
            });
            // This code accepts vote client side before writing to the server - questionable
            // TODO - refactor UI feedback into Promise return
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
        template: __webpack_require__(521),
        styles: [__webpack_require__(506)],
        animations: [__WEBPACK_IMPORTED_MODULE_4__animations__["a" /* pageTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object])
], TopicComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=topic.component.js.map

/***/ }),

/***/ 300:
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(66);
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

/***/ 40:
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_service__ = __webpack_require__(68);
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

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 90%;\n  max-width: 800px;\n  margin: 30px auto; }\n\n.panel-body {\n  padding: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "nav.navbar {\n  margin-bottom: 0;\n  border-radius: 0;\n  font-weight: bold; }\n  nav.navbar .container {\n    max-width: 960px;\n    margin: 0 auto; }\n    nav.navbar .container .navbar-brand {\n      font-size: 1.2em;\n      font-weight: bold; }\n    nav.navbar .container ul, nav.navbar .container li, nav.navbar .container a {\n      display: inline-block; }\n      nav.navbar .container ul span.glyphicon.glyphicon-menu-hamburger, nav.navbar .container li span.glyphicon.glyphicon-menu-hamburger, nav.navbar .container a span.glyphicon.glyphicon-menu-hamburger {\n        font-size: 1.4em; }\n\n#toggleBtn {\n  display: none;\n  margin-top: 8px; }\n\ndiv.dropdown {\n  background-color: white;\n  color: black;\n  transition: all 500ms ease-in; }\n  div.dropdown ul {\n    margin: 0;\n    padding: 0; }\n    div.dropdown ul li {\n      list-style-type: none;\n      border-bottom: 1px solid lightgrey;\n      padding: 4px;\n      text-align: center; }\n      div.dropdown ul li:hover {\n        background-color: lightgrey; }\n      div.dropdown ul li a {\n        text-decoration: none;\n        cursor: pointer;\n        font-weight: bold; }\n\n@media screen and (max-width: 780px) {\n  #toggleBtn {\n    display: block;\n    float: right;\n    margin-right: 20px; }\n  #nav-menu-left, #nav-menu-right {\n    display: none; }\n  .navbar-brand {\n    font-size: 1.5em;\n    padding-left: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".doughnut-chart {\n  max-height: 500px;\n  max-width: 500px;\n  margin: 0 auto;\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".panel {\n  width: 90%;\n  max-width: 800px;\n  margin: 0 auto;\n  margin-top: 30px; }\n  .panel .form-control {\n    font-size: 0.9em;\n    height: 38px;\n    font-weight: bold; }\n  .panel .option-badge {\n    margin: 0 3px 6px 3px;\n    padding: 4px 10px 4px 10px;\n    background-color: #363636;\n    border-radius: 8px;\n    font-size: 0.9em;\n    display: inline-block; }\n  .panel .error-message {\n    margin-top: 10px; }\n  .panel button.btn.btn-primary {\n    margin-top: 30px;\n    font-size: 1.0em;\n    margin-right: 5px; }\n\n.output {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "a:hover {\n  text-decoration: none; }\n\n.panel:hover {\n  background-color: #363636; }\n\n.search-wrapper {\n  background-color: #262626;\n  padding: 15px;\n  margin-top: 30px; }\n  .search-wrapper .input-group {\n    width: 50%; }\n  .search-wrapper .input-group-addon,\n  .search-wrapper .search-input {\n    height: 40px; }\n\n.topic-wrapper {\n  margin-top: 30px; }\n\n.info-panel {\n  background-color: #444; }\n  .info-panel:hover {\n    background-color: #444; }\n\n.info-panel div {\n  padding: 20px; }\n\n.info-panel h2 {\n  font-weight: bold;\n  letter-spacing: 2px; }\n\n.info-panel p {\n  line-height: 30px;\n  letter-spacing: 1.5px; }\n\n.info-panel a {\n  color: white;\n  text-decoration: underline; }\n\n@media screen and (max-width: 780px) {\n  .search-wrapper > .input-group {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "section.nav-wrapper {\n  float: left;\n  width: 200px;\n  margin-top: 30px;\n  margin-bottom: 12px; }\n  section.nav-wrapper .control-button {\n    margin: 0 5px 10px 0;\n    padding: 10px 20px;\n    width: 150px; }\n\nsection.results-wrapper {\n  float: left;\n  width: 60%;\n  max-width: 800px; }\n\n#responsive-container:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\nspan.glyphicon {\n  color: green;\n  font-size: 22px;\n  margin-left: 10px; }\n\nspan.voted {\n  font-size: 16px;\n  padding: 3px 0 3px 5px; }\n\ntable {\n  width: 100%; }\n\n.thead {\n  border-bottom: 0; }\n\ntd:first-child {\n  padding: 10px 20px;\n  border-width: 0px;\n  font-size: 0.9em;\n  text-align: left; }\n\ntd:last-child {\n  padding: 10px 20px;\n  border-width: 0px;\n  font-size: 0.9em;\n  text-align: right; }\n\n.alert {\n  background-color: #ff4646;\n  color: white;\n  margin-top: 12px; }\n  .alert a {\n    color: inherit;\n    font-weight: bold; }\n\n@media screen and (max-width: 700px) {\n  section.nav-wrapper {\n    float: none;\n    width: 100%; }\n    section.nav-wrapper .control-button {\n      display: inline-block;\n      width: 30%;\n      min-width: 130px; }\n  section.results-wrapper {\n    float: none;\n    width: 100%; }\n  div.panel {\n    width: 100%;\n    margin: 0 auto; } }\n\n@media screen and (max-width: 460px) {\n  section.nav-wrapper > .control-button {\n    display: block;\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 142,
	"./af.js": 142,
	"./ar": 149,
	"./ar-dz": 143,
	"./ar-dz.js": 143,
	"./ar-kw": 144,
	"./ar-kw.js": 144,
	"./ar-ly": 145,
	"./ar-ly.js": 145,
	"./ar-ma": 146,
	"./ar-ma.js": 146,
	"./ar-sa": 147,
	"./ar-sa.js": 147,
	"./ar-tn": 148,
	"./ar-tn.js": 148,
	"./ar.js": 149,
	"./az": 150,
	"./az.js": 150,
	"./be": 151,
	"./be.js": 151,
	"./bg": 152,
	"./bg.js": 152,
	"./bn": 153,
	"./bn.js": 153,
	"./bo": 154,
	"./bo.js": 154,
	"./br": 155,
	"./br.js": 155,
	"./bs": 156,
	"./bs.js": 156,
	"./ca": 157,
	"./ca.js": 157,
	"./cs": 158,
	"./cs.js": 158,
	"./cv": 159,
	"./cv.js": 159,
	"./cy": 160,
	"./cy.js": 160,
	"./da": 161,
	"./da.js": 161,
	"./de": 164,
	"./de-at": 162,
	"./de-at.js": 162,
	"./de-ch": 163,
	"./de-ch.js": 163,
	"./de.js": 164,
	"./dv": 165,
	"./dv.js": 165,
	"./el": 166,
	"./el.js": 166,
	"./en-au": 167,
	"./en-au.js": 167,
	"./en-ca": 168,
	"./en-ca.js": 168,
	"./en-gb": 169,
	"./en-gb.js": 169,
	"./en-ie": 170,
	"./en-ie.js": 170,
	"./en-nz": 171,
	"./en-nz.js": 171,
	"./eo": 172,
	"./eo.js": 172,
	"./es": 174,
	"./es-do": 173,
	"./es-do.js": 173,
	"./es.js": 174,
	"./et": 175,
	"./et.js": 175,
	"./eu": 176,
	"./eu.js": 176,
	"./fa": 177,
	"./fa.js": 177,
	"./fi": 178,
	"./fi.js": 178,
	"./fo": 179,
	"./fo.js": 179,
	"./fr": 182,
	"./fr-ca": 180,
	"./fr-ca.js": 180,
	"./fr-ch": 181,
	"./fr-ch.js": 181,
	"./fr.js": 182,
	"./fy": 183,
	"./fy.js": 183,
	"./gd": 184,
	"./gd.js": 184,
	"./gl": 185,
	"./gl.js": 185,
	"./gom-latn": 186,
	"./gom-latn.js": 186,
	"./he": 187,
	"./he.js": 187,
	"./hi": 188,
	"./hi.js": 188,
	"./hr": 189,
	"./hr.js": 189,
	"./hu": 190,
	"./hu.js": 190,
	"./hy-am": 191,
	"./hy-am.js": 191,
	"./id": 192,
	"./id.js": 192,
	"./is": 193,
	"./is.js": 193,
	"./it": 194,
	"./it.js": 194,
	"./ja": 195,
	"./ja.js": 195,
	"./jv": 196,
	"./jv.js": 196,
	"./ka": 197,
	"./ka.js": 197,
	"./kk": 198,
	"./kk.js": 198,
	"./km": 199,
	"./km.js": 199,
	"./kn": 200,
	"./kn.js": 200,
	"./ko": 201,
	"./ko.js": 201,
	"./ky": 202,
	"./ky.js": 202,
	"./lb": 203,
	"./lb.js": 203,
	"./lo": 204,
	"./lo.js": 204,
	"./lt": 205,
	"./lt.js": 205,
	"./lv": 206,
	"./lv.js": 206,
	"./me": 207,
	"./me.js": 207,
	"./mi": 208,
	"./mi.js": 208,
	"./mk": 209,
	"./mk.js": 209,
	"./ml": 210,
	"./ml.js": 210,
	"./mr": 211,
	"./mr.js": 211,
	"./ms": 213,
	"./ms-my": 212,
	"./ms-my.js": 212,
	"./ms.js": 213,
	"./my": 214,
	"./my.js": 214,
	"./nb": 215,
	"./nb.js": 215,
	"./ne": 216,
	"./ne.js": 216,
	"./nl": 218,
	"./nl-be": 217,
	"./nl-be.js": 217,
	"./nl.js": 218,
	"./nn": 219,
	"./nn.js": 219,
	"./pa-in": 220,
	"./pa-in.js": 220,
	"./pl": 221,
	"./pl.js": 221,
	"./pt": 223,
	"./pt-br": 222,
	"./pt-br.js": 222,
	"./pt.js": 223,
	"./ro": 224,
	"./ro.js": 224,
	"./ru": 225,
	"./ru.js": 225,
	"./sd": 226,
	"./sd.js": 226,
	"./se": 227,
	"./se.js": 227,
	"./si": 228,
	"./si.js": 228,
	"./sk": 229,
	"./sk.js": 229,
	"./sl": 230,
	"./sl.js": 230,
	"./sq": 231,
	"./sq.js": 231,
	"./sr": 233,
	"./sr-cyrl": 232,
	"./sr-cyrl.js": 232,
	"./sr.js": 233,
	"./ss": 234,
	"./ss.js": 234,
	"./sv": 235,
	"./sv.js": 235,
	"./sw": 236,
	"./sw.js": 236,
	"./ta": 237,
	"./ta.js": 237,
	"./te": 238,
	"./te.js": 238,
	"./tet": 239,
	"./tet.js": 239,
	"./th": 240,
	"./th.js": 240,
	"./tl-ph": 241,
	"./tl-ph.js": 241,
	"./tlh": 242,
	"./tlh.js": 242,
	"./tr": 243,
	"./tr.js": 243,
	"./tzl": 244,
	"./tzl.js": 244,
	"./tzm": 246,
	"./tzm-latn": 245,
	"./tzm-latn.js": 245,
	"./tzm.js": 246,
	"./uk": 247,
	"./uk.js": 247,
	"./ur": 248,
	"./ur.js": 248,
	"./uz": 250,
	"./uz-latn": 249,
	"./uz-latn.js": 249,
	"./uz.js": 250,
	"./vi": 251,
	"./vi.js": 251,
	"./x-pseudo": 252,
	"./x-pseudo.js": 252,
	"./yo": 253,
	"./yo.js": 253,
	"./zh-cn": 254,
	"./zh-cn.js": 254,
	"./zh-hk": 255,
	"./zh-hk.js": 255,
	"./zh-tw": 256,
	"./zh-tw.js": 256
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
webpackContext.id = 508;


/***/ }),

/***/ 514:
/***/ (function(module, exports) {

module.exports = "<section\r\n  class=\"about-wrapper\"\r\n  [@showPage]=\"'on'\">\r\n\r\n    <div class=\"panel v-panel\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">About Votogo</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>VOTOGO is a voting app which allows users to create, share and view the results of surveys,\r\n          and vote on other people's topics. It was created as a\r\n          <a href=\"https://www.freecodecamp.com/challenges/build-a-voting-app\" target=\"_blank\">Free Code Camp</a>\r\n          project.\r\n        </p>\r\n        <p>This application was built using the MEAN Stack:</p>\r\n        <ul>\r\n          <li>The front end is an Angular 4 / Typescript project created with the excellent Angular-CLI.</li>\r\n          <li>The back end uses Node v.6.9.2 and Express.</li>\r\n          <li>Data is hosted in the cloud at MLab, using MongoDB and Mongoose.</li>\r\n          <li>The authentication module uses Bcrypt.js for password encryption and JSON Web Tokens for maintaining secure sessions.</li>\r\n          <li>UI components are based on Bootstrap and animated with the Angular animations module.</li>\r\n          <li>The doughnut chart was created using Chart.js.</li>\r\n        </ul>\r\n        <p>The complete project repo can be viewed at <a href=\"https://github.com/ARWL2016/voting-app\" target=\"_blank\">Github</a>.</p>\r\n        <p><b>Alistair Willis</b></p>\r\n      </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<div (click)=\"hideDropdown($event)\">\r\n  <div>\r\n    <nav class=\"navbar navbar-default\">\r\n      <div id=\"responsive-container\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Votoro</a>\r\n\r\n        <ul class=\"nav navbar-nav\" id=\"nav-menu-left\">\r\n          <li><a [routerLink]=\"['/home']\">HOME</a></li>\r\n          <li *ngIf=\"username\"><a [routerLink]=\"['/home', username]\">MY TOPICS</a></li>\r\n          <li *ngIf=\"username\"><a [routerLink]=\"['/create']\">NEW TOPIC</a></li>\r\n          <li><a [routerLink]=\"['/about']\">ABOUT</a></li>\r\n        </ul>\r\n\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\" id=\"nav-menu-right\">\r\n          <li *ngIf=\"!username\"><a [routerLink]=\"['/login/register']\">SIGN UP</a></li>\r\n          <li *ngIf=\"!username\"><a [routerLink]=\"['/login']\">LOGIN</a></li>\r\n          <li *ngIf=\"username\"><a>Logged in as <b>{{ username | uppercase }}</b></a></li>\r\n          <li><button *ngIf=\"username\" class=\"btn btn-default navbar-btn\" (click)=\"logout()\">LOGOUT</button></li>\r\n        </ul>\r\n\r\n        <button class=\"btn btn-default navbar-btn pull-right\" id=\"toggleBtn\" (click)=\"toggleDropdown()\">MENU</button>\r\n      </div>\r\n    </nav>\r\n\r\n    <!-- RESPONSIVE NAV DROPDOWN -->\r\n    <div *ngIf=\"showDropdown\" class=\"dropdown\">\r\n      <ul>\r\n        <li><a [routerLink]=\"['/home']\">HOME</a></li>\r\n        <li *ngIf=\"username\"><a [routerLink]=\"['/home', username]\">MY TOPICS</a></li>\r\n        <li *ngIf=\"username\"><a [routerLink]=\"['/create']\">NEW TOPIC</a></li>\r\n        <li *ngIf=\"!username\"><a [routerLink]=\"['/login/register']\">SIGN UP</a></li>\r\n        <li *ngIf=\"!username\"><a [routerLink]=\"['/login']\">LOGIN</a></li>\r\n        <li *ngIf=\"username\"><a (click)=\"logout()\">LOGOUT</a></li>\r\n        <li><a [routerLink]=\"['/about']\">ABOUT</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"x-container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<form #form = \"ngForm\" (submit)=\"submitForm(form)\" [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel\">\r\n    <div class=\"panel-heading\">\r\n      <h1 class=\"panel-title\">Login</h1>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n        <p>Login, or <a [routerLink]=\"['register']\">sign up </a>for a free account</p>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Username</label>\r\n          <input\r\n            [(ngModel)]=\"username\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            placeholder=\"enter your username\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Password</label>\r\n          <input\r\n            [(ngModel)]=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"enter your password\"\r\n            type=\"password\">\r\n        </div>\r\n        <div>{{error}}</div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary control-button\">Login</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (submit)=\"submitForm(form)\" novalidate [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel\">\r\n    <div class=\"panel-heading\">\r\n      <h1 class=\"panel-title\">Register</h1>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Enter your unique username</label>\r\n          <input\r\n            [(ngModel)]=\"username\"\r\n            class=\"form-control\"\r\n            name=\"username\"\r\n            placeholder=\"username\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Password</label>\r\n          <input\r\n            [(ngModel)]=\"password\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"minimum 3 characters\"\r\n            type=\"password\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Confirm password</label>\r\n          <input\r\n            [(ngModel)]=\"passwordConfirmation\"\r\n            class=\"form-control\"\r\n            name=\"password\"\r\n            placeholder=\"\"\r\n            type=\"password\">\r\n        </div>\r\n        <div class=\"error\">{{error}}</div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary control-button\">Register</button>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"results\" class=\"doughnut-chart\" style=\"display: block\" >\r\n  <canvas baseChart\r\n              [data]=\"chartData\"\r\n              [labels]=\"chartLabels\"\r\n              [chartType]=\"chartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"></canvas>\r\n</div>\r\n"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (submit)=\"submitForm(form)\" [@showPage]=\"'on'\">\r\n\r\n  <div class=\"panel login-form\">\r\n    <div class=\"panel-heading\">\r\n      <h1 class=\"panel-title\">Create Topic</h1>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Topic Title</label>\r\n          <input\r\n            [(ngModel)]=\"newTopic.topicTitle\"\r\n            class=\"form-control\"\r\n            name=\"topicTitle\"\r\n            placeholder=\"e.g. 2017 Films\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Topic Question</label>\r\n          <input\r\n            [(ngModel)]=\"newTopic.topicQuestion\"\r\n            class=\"form-control\"\r\n            name=\"topicQuestion\"\r\n            placeholder=\"e.g. What was the best film of 2017?\"\r\n            type=\"text\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\">Response Options</label>\r\n          <input\r\n            [(ngModel)]=\"option\"\r\n            class=\"form-control\"\r\n            name=\"option\"\r\n            placeholder=\"e.g. Bladerunner\"\r\n            type=\"text\">\r\n        </div>\r\n        <div>\r\n          <span class=\"option-badge\" *ngFor=\"let option of options\">{{ option }}</span>\r\n        </div>\r\n        <div class=\"error-message\">{{error}}</div>\r\n        <div class=\"options-help\">Enter an answer and click 'Add Option'. When you are finished, click 'Create'.</div>\r\n          <button class=\"btn btn-primary\" (click)=\"addOption($event)\">\r\n            Add option\r\n          </button>\r\n          <button class=\"btn btn-primary\" (click)=\"removeOption($event)\">\r\n            Undo\r\n          </button>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary pull-right\">Create</button>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n\r\n<!--<div class=\"output\">\r\nModel: {{ model | json}}\r\n<br>\r\nAngular: {{ form.value | json}}\r\n</div>-->\r\n"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<div id=\"responsive-container\">\r\n\r\n<!-- WELCOME SECTION - DISPLAYS IF USER NOT AUTHENTICATED -->\r\n\r\n<section\r\n  *ngIf=\"!username\"\r\n  class=\"topic-wrapper \"\r\n  [@showPage]=\"'on'\">\r\n    <div class=\"panel info-panel\">\r\n      <div class=\"panel-heading info-panel\">\r\n        <h1 class=\"panel-title\">Welcome to Votogo</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p class=\"info\">Votogo is a free voting app which allows users to create, share and view the results of surveys.To view survey results, click on a topic below.</p>\r\n        <p class=\"info\">To vote and create your own topics, please <a [routerLink]=\"['/login/register']\">register</a> or <a [routerLink]=\"['/login']\">login</a>.</p>\r\n\r\n      </div>\r\n    </div>\r\n</section>\r\n\r\n\r\n<!-- SEARCH INPUT SECTION -->\r\n\r\n<section class=\"search-wrapper\">\r\n  <div class=\"input-group\">\r\n    <span class=\"input-group-addon\"><b>Search Topics</b></span>\r\n    <input\r\n      type=\"text\"\r\n      class=\"form-control search-input\"\r\n      [(ngModel)]=\"listFilter\" />\r\n  </div>\r\n</section>\r\n\r\n\r\n<!-- TOPIC SECTION - DISPLAYS ONCE FOR EACH TOPIC -->\r\n\r\n<section\r\n  *ngFor=\"let topic of topics | topicFilter:listFilter\"\r\n  class=\"topic-wrapper\"\r\n  [@showPage]=\"'on'\">\r\n  <a class=\"topic\" [routerLink]=\"['/topic', topic._id]\">\r\n    <div class=\"panel\">\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">{{ topic.topicTitle }}</h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>{{ topic.topicQuestion }}</p>\r\n        <p class=\"topic-author\">by {{ topic.username }}</p>\r\n      </div>\r\n    </div>\r\n    </a>\r\n</section>\r\n\r\n\r\n<!-- HELP SECTION - DISPLAYS IF USER IS LOGGED IN BUT HAS CREATED NO VOTING TOPICS -->\r\n\r\n<section\r\n*ngIf=\"username && isTopicListEmpty\"\r\nclass=\"topic-wrapper \"\r\n[@showPage]=\"'on'\">\r\n  <div class=\"panel info-panel\">\r\n    <div class=\"panel-heading info-panel\">\r\n      <h1 class=\"panel-title\">Your Topics</h1>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <p class=\"info\">You haven't created any voting topics yet. To get started, go the the\r\n        <a [routerLink]=\"['/create']\">New Topic</a> page.</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<div id=\"responsive-container\" [@showPage]=\"'on'\" >\r\n\r\n\r\n  <!-- NAVIGATION SECTION -->\r\n\r\n  <section class=\"nav-wrapper\">\r\n    <button (click)=\"toggleDisplay()\" class=\"btn btn-info control-button\" [disabled]=\"!results\">{{ toggleButton }}</button>\r\n    <button class=\"btn btn-info control-button\" [routerLink]=\"['/home']\">Back to Index</button>\r\n    <button\r\n      *ngIf=\"topic && currentUser === topic.username && view === 'data'\"\r\n      class=\"btn btn-warning control-button\"\r\n      (click)=\"deleteTopic(_id)\"\r\n      [@showPage]=\"'on'\">\r\n      Delete topic\r\n    </button>\r\n  </section>\r\n\r\n\r\n  <!-- RESULTS SECTION -->\r\n\r\n  <section class=\"results-wrapper\">\r\n    <div *ngIf=\"topic && view === 'data'\" class=\"panel\" [@showPage]=\"'on'\" >\r\n      <div class=\"panel-heading\">\r\n        <h1 class=\"panel-title\">{{ topic.topicTitle }}\r\n          <span *ngIf=\"hasVoted\">\r\n            <span class=\"pull-right voted\">voted</span>\r\n            <span class=\"glyphicon glyphicon-ok-sign pull-right\" aria-hidden=\"true\"></span>\r\n          </span>\r\n        </h1>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <p>{{ topic.topicQuestion }}</p>\r\n        <p class=\"topic-author\">by {{ topic.username  }}</p>\r\n      </div>\r\n\r\n      <table>\r\n        <tbody>\r\n          <tr *ngFor=\"let result of topic.results\">\r\n            <td>{{ result.option | titlecase }}</td>\r\n            <td><b>{{ result.votes }}</b></td>\r\n            <td><button class=\"btn btn-success\" (click)=\"castVote(result)\" [disabled]=\"hasVoted || !currentUser\">Vote</button></td>\r\n          </tr>\r\n          <tr>\r\n            <td>TOTAL</td>\r\n            <td><b>{{ totalVotes }}</b></td>\r\n            <td></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n\r\n    <!-- CHART COMPONENT -->\r\n\r\n    <app-chart *ngIf=\"view === 'chart'\" [_id]=\"_id\"></app-chart>\r\n\r\n\r\n    <!-- HELP PANEL -->\r\n\r\n    <div *ngIf=\"!currentUser && view === 'data'\" class=\"alert\" role=\"alert\" >\r\n      To vote, please <a [routerLink]=\"['/login/register']\">register</a> or <a [routerLink]=\"['/login']\">login</a>.\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
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

},[558]);
//# sourceMappingURL=main.bundle.js.map