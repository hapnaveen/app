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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marking_marking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marking/marking.component */ "./src/app/marking/marking.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _route_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route.guard */ "./src/app/route.guard.ts");
/* harmony import */ var _marked_marked_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marked/marked.component */ "./src/app/marked/marked.component.ts");







var routes = [
    {
        path: 'mark',
        component: _marking_marking_component__WEBPACK_IMPORTED_MODULE_3__["MarkingComponent"],
        canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_5__["RouteGuard"]]
    },
    {
        path: 'mark/:id',
        component: _marking_marking_component__WEBPACK_IMPORTED_MODULE_3__["MarkingComponent"],
        canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_5__["RouteGuard"]]
    },
    {
        path: 'marked',
        component: _marked_marked_component__WEBPACK_IMPORTED_MODULE_6__["MarkedComponent"],
        canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_5__["RouteGuard"]]
    },
    {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    },
    {
        path: '**',
        redirectTo: 'auth'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<head>\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.min.css\">\n  <!-- jQuery library -->\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n\n  <!-- Popper JS -->\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n\n  <!-- Latest compiled JavaScript -->\n  <script src=\"../assets/js/bootstrap.min.js\"></script>\n</head>\n<app-header *ngIf=\"auth.getToken()\"></app-header>\n<div [class.container]=\"auth.getToken()\" [class.mt-5]=\"auth.getToken()\" [class.pt-3]=\"auth.getToken()\">\n  <router-outlet></router-outlet>\n</div>\n<ngx-spinner></ngx-spinner>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'maestro-portal';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marking_marking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marking/marking.component */ "./src/app/marking/marking.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _marked_marked_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./marked/marked.component */ "./src/app/marked/marked.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _marking_marking_component__WEBPACK_IMPORTED_MODULE_5__["MarkingComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
                _marked_marked_component__WEBPACK_IMPORTED_MODULE_11__["MarkedComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"\">\n\n</div>-->\n\n<div class=\"d-flex align-items-center flex-column justify-content-center vh-100 bg-dark text-white\" id=\"header\">\n  <h1 class=\"display-4\">Hello.</h1>\n  <div class=\"form-group\">\n    <label for=\"inp\">Input the token send with email</label>\n    <input class=\"form-control\" id=\"inp\" [(ngModel)]=\"token\" (keydown.enter)=\"submit()\"><br>\n    <button (click)=\"submit()\" class=\"btn btn-primary w-100\">Submit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var AuthComponent = /** @class */ (function () {
    function AuthComponent(auth, router, spinner) {
        this.auth = auth;
        this.router = router;
        this.spinner = spinner;
    }
    AuthComponent.prototype.ngOnInit = function () {
        if (this.auth.getToken()) {
            this.router.navigate(['/mark']);
        }
    };
    AuthComponent.prototype.submit = function () {
        var _this = this;
        this.spinner.show();
        if (this.token != null || this.token !== '') {
            console.log(this.token);
            this.auth.validate(this.token).subscribe(function (val) {
                if (val.exists) {
                    localStorage.setItem('token', _this.token);
                    _this.router.navigate(['/mark']);
                }
                else {
                    window.alert('Invalid token');
                }
                _this.spinner.hide();
            }, function (err) {
                window.alert('Error occurred! Please refresh');
            });
        }
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(firestore, route) {
        this.firestore = firestore;
        this.route = route;
    }
    AuthService.prototype.validate = function (token) {
        return this.firestore.collection('tokens').doc(token).get();
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.revokeToken = function () {
        localStorage.removeItem('token');
        this.route.navigate(['/auth']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark fixed-top justify-content-end\">\n  <!-- Brand -->\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/img/Logo.jpg\" width=\"60 px\"></a>\n  <button class=\"btn btn-danger ml-auto mr-1 flex-grow-0\" (click)=\"auth.revokeToken()\">Logout</button>\n\n  <!-- Toggler/collapsibe Button -->\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\" (click)=\"toggle(a)\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Navbar links -->\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\" #a>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/mark']\" (click)=\"toggle(a)\">Mark new team</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/marked']\" (click)=\"toggle(a)\">Marked teams</a>\n      </li>\n    </ul>\n  </div>\n\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        this.open = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggle = function (a) {
        if (this.open) {
            a.classList.add('show');
        }
        else {
            a.classList.remove('show');
        }
        this.open = !this.open;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/marked/marked.component.css":
/*!*********************************************!*\
  !*** ./src/app/marked/marked.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtlZC9tYXJrZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/marked/marked.component.html":
/*!**********************************************!*\
  !*** ./src/app/marked/marked.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let pap of marked\" class=\"card p-4 mb-2\">\n  <div>\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <span class=\"h3\">{{pap.data().teamName}}</span>\n      </div>\n      <div class=\"col-4 text-right\">\n        <span class=\"h3\">{{pap.data().total*5}}%</span>\n      </div>\n    </div>\n    <hr>\n    <div>{{pap.data().creativity | number: '2.0-0'}}/03 for Problem definition and structuring</div>\n    <div>{{pap.data().feasibility | number: '2.0-0'}}/03 for Communications</div>\n    <div>{{pap.data().innovativeness | number: '2.0-0'}}/03 for Presentation</div>\n    <div>{{pap.data().requirement | number: '2.0-0'}}/06 for Problem solving</div>\n    <div>{{pap.data().channels | number: '2.0-0'}}/05 for Recommendation</div>\n  </div>\n  <div class=\"row\">\n    <button class=\"btn btn-primary w-100 mt-3 mt-md-3 col-md-6\" [routerLink]=\"['/mark',pap.id]\">Edit</button>\n    <button class=\"btn btn-danger w-100 mt-1 mt-md-3 col-md-6\" (click)=\"delete(pap.id)\">Delete</button>\n  </div>\n</div>\n\n<div class=\"w-100 text-center mt-5\" *ngIf=\"!marked || !marked.length > 0\">\n  No teams have been evaluated by you...\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/marked/marked.component.ts":
/*!********************************************!*\
  !*** ./src/app/marked/marked.component.ts ***!
  \********************************************/
/*! exports provided: MarkedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedComponent", function() { return MarkedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marked_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marked.service */ "./src/app/marked/marked.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




var MarkedComponent = /** @class */ (function () {
    function MarkedComponent(markedService, spinner) {
        this.markedService = markedService;
        this.spinner = spinner;
    }
    MarkedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.markedService.getMarked().subscribe(function (val) {
            _this.marked = val.docs;
            _this.spinner.hide();
        }, function (err) {
            window.alert('Error occurred! Please refresh');
        });
    };
    MarkedComponent.prototype.delete = function (id) {
        var _this = this;
        this.spinner.show();
        this.markedService.delete(id).catch(function (err) {
            _this.spinner.hide();
            window.alert('Error occurred! Please try again...');
        }).then(function () {
            _this.marked.splice(_this.marked.indexOf(_this.marked.find(function (x) { return x.id === id; })), 1);
            _this.spinner.hide();
        });
    };
    MarkedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marked',
            template: __webpack_require__(/*! ./marked.component.html */ "./src/app/marked/marked.component.html"),
            styles: [__webpack_require__(/*! ./marked.component.css */ "./src/app/marked/marked.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_marked_service__WEBPACK_IMPORTED_MODULE_2__["MarkedService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], MarkedComponent);
    return MarkedComponent;
}());



/***/ }),

/***/ "./src/app/marked/marked.service.ts":
/*!******************************************!*\
  !*** ./src/app/marked/marked.service.ts ***!
  \******************************************/
/*! exports provided: MarkedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedService", function() { return MarkedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var MarkedService = /** @class */ (function () {
    function MarkedService(fire, auth) {
        this.fire = fire;
        this.auth = auth;
    }
    MarkedService.prototype.getMarked = function () {
        var _this = this;
        return this.fire.collection('marks', function (ref) { return ref.where('token', '==', _this.auth.getToken()); }).get();
    };
    MarkedService.prototype.delete = function (id) {
        return this.fire.collection('marks').doc(id).delete();
    };
    MarkedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MarkedService);
    return MarkedService;
}());



/***/ }),

/***/ "./src/app/marking/marking.component.css":
/*!***********************************************!*\
  !*** ./src/app/marking/marking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtpbmcvbWFya2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/marking/marking.component.html":
/*!************************************************!*\
  !*** ./src/app/marking/marking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"markForm\">\n  <div class=\"w-100\">\n    <form [formGroup]=\"markForm\">\n      <div class=\"row\">\n        <div class=\"col-md-6 form-group\">\n          <label for=\"teamName\">Team name</label><br>\n          <small>Name of the team to be evaluated</small>\n          <input *ngIf=\"!updateData\" type=\"text\" class=\"form-control\" id=\"teamName\" formControlName=\"teamName\">\n          <span *ngIf=\"updateData\" class=\"h4\"><br>{{markForm.get('teamName').value}}</span>\n        </div>\n      </div>\n\n\n      <div id=\"accordion\">\n\n        <div class=\"card mb-2\" *ngFor=\"let criteria of criterias; let i=index\">\n          <div class=\"card-header\">\n            <div class=\"row\">\n              <div class=\"col-8\">\n                <span class=\"h4\">{{criteria.name}}</span><br>\n              </div>\n              <div class=\"col-4 form-group\">\n                <input type=\"number\" class=\"form-control\" min=\"0\" max=\"{{criteria.marks}}\"\n                       formControlName=\"{{criteria.formName}}\">\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-8\">\n                <button class=\"btn btn-outline-primary\" (click)=\"toggle(a,i)\">\n                  <span *ngIf=\"criteria.visible\">Hide</span>\n                  <span *ngIf=\"!criteria.visible\">Show</span>\n                  guidelines\n                </button>\n              </div>\n              <div class=\"col-4\">\n                <span class=\"h6\">Maximum points : {{criteria.marks}} <br></span>\n              </div>\n            </div>\n          </div>\n          <div id=\"collapseTwo\" class=\"collapse\" data-parent=\"#accordion\" #a>\n            <div class=\"card-body\">\n              <span>{{criteria.description}}</span>\n              <ol type=\"a\">\n                <li *ngFor=\"let point of criteria.number\">\n                  {{point}}\n                </li>\n                <ul>\n                  <li *ngFor=\"let point of criteria.bullet\">\n                    {{point}}\n                  </li>\n                </ul>\n              </ol>\n              \n              \n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"mt-4 w-100 text-center mb-4\">\n        <button type=\"button\" class=\"btn btn-primary w-100\" [disabled]=\"!markForm.valid\" (click)=\"submit()\">Submit\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/marking/marking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/marking/marking.component.ts ***!
  \**********************************************/
/*! exports provided: MarkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkingComponent", function() { return MarkingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marking.service */ "./src/app/marking/marking.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var MarkingComponent = /** @class */ (function () {
    function MarkingComponent(fb, markService, auth, activated, spinner, router) {
        this.fb = fb;
        this.markService = markService;
        this.auth = auth;
        this.activated = activated;
        this.spinner = spinner;
        this.router = router;
        this.criterias = [
            {
                name: 'Problem definition and structuring',
                formName: 'innovativeness',
                marks: 3,
                visible: false,
                number: [
                    'Problem has beenclearly identified, either explicitly or implicitly',
                    'Problem has been effectively broken down into smaller components. The componentscover most aspects needed to formulate the answer and there is minimal overlap between the indvidual components',
                ]
            },
            {
                name: 'Problem solving',
                formName: 'requirement',
                marks: 6,
                visible: false,
                number: [
                    'The use of a hypothesis led problem solving approach is evident in the report',
                    'The qualitative information provided has been interpreted correctly and have been used to develop logic arguments',
                    'Creativity has been demonstrated in solving the problem',
                    'The data provided has been interpreted correctly and have been used correctly in supporting the solution',
                    'Calculations are correct, relevent and of sound logic',
                    'Assumptions made are of sound logic and have been clearly defined',
                    'If external data sources have been used to supplement solution, creditable sources have been used have been apprpriately cited'
                ]
            },
            {
                name: 'Recommendation',
                formName: 'channels',
                marks: 5,
                visible: false,
                number: [
                    'A sound actionable recommendation is provided backed by data and logical reasoning',
                    'Recommendation is within the scope and constraints of the problem',
                ]
            },
            {
                name: 'Communications',
                formName: 'feasibility',
                marks: 3,
                visible: false,
                number: [
                    'Messeges have been effectively synthesised and communicated in a top down manner',
                    'Coherent language has been used for text based communications(Minor spelling and grammatical errors are fine)',
                    'Graphs and figures have been effectively usd to communicate messages',
                ]
            },
            {
                name: 'Presentation',
                formName: 'creativity',
                marks: 3,
                visible: false,
                number: [
                    'The report format is well structured and easy to follow',
                    'The report content is concise and follows a logical progression',
                    'The pages are easy to read: the text is appropriately sized and the figures are legible'
                ]
            }
        ];
    }
    MarkingComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.spinner.show();
                this.activated.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!params.id) return [3 /*break*/, 3];
                                console.log(params.id);
                                if (!params.id) return [3 /*break*/, 2];
                                console.log(params.id);
                                _a = this;
                                return [4 /*yield*/, this.markService.getPaper(params.id).toPromise()];
                            case 1:
                                _a.pap = _b.sent();
                                console.log(this.pap.data());
                                this.updateData = this.pap.data();
                                this.markForm = this.fb.group({
                                    token: [this.auth.getToken(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                    innovativeness: [this.updateData.innovativeness, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(3)]],
                                    requirement: [this.updateData.requirement, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(6)]],
                                    channels: [this.updateData.channels, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(5)]],
                                    feasibility: [this.updateData.feasibility, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(3)]],
                                    creativity: [this.updateData.creativity, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(3)]],
                                    teamName: [this.updateData.teamName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                    total: [this.updateData.total],
                                });
                                this.spinner.hide();
                                _b.label = 2;
                            case 2: return [3 /*break*/, 4];
                            case 3:
                                this.markForm = this.fb.group({
                                    token: [this.auth.getToken(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                    innovativeness: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(3)]],
                                    requirement: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(6)]],
                                    channels: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(5)]],
                                    feasibility: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(3)]],
                                    creativity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(3)]],
                                    teamName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                    total: ['']
                                });
                                this.spinner.hide();
                                _b.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    MarkingComponent.prototype.submit = function () {
        var _this = this;
        this.spinner.show();
        if (this.markForm.valid) {
            var total_1 = 0;
            this.criterias.forEach(function (val) {
                total_1 = total_1 + _this.markForm.get('' + val.formName).value;
            });
            this.markForm.get('total').setValue(total_1);
            if (this.updateData) {
                this.markService.updateMarks(this.markForm.value, this.pap.id).then(function (val) {
                    console.log('Success');
                    _this.spinner.hide();
                    _this.markForm.reset();
                    _this.router.navigate(['/marked']);
                }).catch(function (err) {
                    console.log(err);
                    _this.spinner.hide();
                    window.alert('Error occurred! Please refresh');
                });
            }
            else {
                this.markService.addMarks(this.markForm.value).then(function (val) {
                    console.log('Success');
                    _this.spinner.hide();
                    _this.markForm.reset();
                    window.alert('Submitted successfully..!');
                }).catch(function (err) {
                    console.log(err);
                    _this.spinner.hide();
                    window.alert('Error occurred! Please refresh');
                });
            }
        }
        else {
            console.log('invalid');
        }
    };
    MarkingComponent.prototype.toggle = function (a, i) {
        if (this.criterias[i].visible) {
            a.classList.remove('show');
            this.criterias[i].visible = false;
        }
        else {
            a.classList.add('show');
            this.criterias[i].visible = true;
        }
    };
    MarkingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marking',
            template: __webpack_require__(/*! ./marking.component.html */ "./src/app/marking/marking.component.html"),
            styles: [__webpack_require__(/*! ./marking.component.css */ "./src/app/marking/marking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _marking_service__WEBPACK_IMPORTED_MODULE_3__["MarkingService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MarkingComponent);
    return MarkingComponent;
}());



/***/ }),

/***/ "./src/app/marking/marking.service.ts":
/*!********************************************!*\
  !*** ./src/app/marking/marking.service.ts ***!
  \********************************************/
/*! exports provided: MarkingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkingService", function() { return MarkingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var MarkingService = /** @class */ (function () {
    function MarkingService(fire) {
        this.fire = fire;
    }
    MarkingService.prototype.addMarks = function (obj) {
        return this.fire.collection('marks').add(obj);
    };
    MarkingService.prototype.updateMarks = function (obj, id) {
        console.log(id);
        return this.fire.collection('marks').doc(id).update(obj);
    };
    MarkingService.prototype.getPaper = function (id) {
        return this.fire.collection('marks').doc(id).get();
    };
    MarkingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], MarkingService);
    return MarkingService;
}());



/***/ }),

/***/ "./src/app/route.guard.ts":
/*!********************************!*\
  !*** ./src/app/route.guard.ts ***!
  \********************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RouteGuard = /** @class */ (function () {
    function RouteGuard(router) {
        this.router = router;
    }
    RouteGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigate(['auth']);
            return false;
        }
    };
    RouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteGuard);
    return RouteGuard;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCswe92VnQ24hvkAfXbfPzU1pvmPqWvegQ',
        authDomain: 'maestro-marking.firebaseapp.com',
        databaseURL: 'https://maestro-marking.firebaseio.com',
        projectId: 'maestro-marking',
        storageBucket: '',
        messagingSenderId: '43934565628',
        appId: '1:43934565628:web:c6a4420243a26847b70379'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MAESTRO19-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map