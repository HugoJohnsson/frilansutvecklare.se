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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-navbar></app-navbar>\n</header>\n\n<lib-ngx-notification class=\"ngx-notification\"></lib-ngx-notification>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer class=\"page-footer teal\">\n  <app-footer></app-footer>\n</footer>\n\n<script src=\"https://code.jquery.com/jquery-2.1.1.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n<script>\n(function($){\n  $(function(){\n\n    $('.sidenav').sidenav();\n    $('.parallax').parallax();\n\n  }); // end of document ready\n})(jQuery); // end of jQuery name space\n\n</script>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jobb';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var ngx_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-notification */ "./node_modules/ngx-notification/fesm5/ngx-notification.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_jobb_jobb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/jobb/jobb.component */ "./src/app/components/jobb/jobb.component.ts");
/* harmony import */ var _components_add_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add/add.component */ "./src/app/components/add/add.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_jobbdetails_jobbdetails_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/jobbdetails/jobbdetails.component */ "./src/app/components/jobbdetails/jobbdetails.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_jobbmessages_jobbmessages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/jobbmessages/jobbmessages.component */ "./src/app/components/jobbmessages/jobbmessages.component.ts");
/* harmony import */ var _components_updateprofile_updateprofile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/updateprofile/updateprofile.component */ "./src/app/components/updateprofile/updateprofile.component.ts");
/* harmony import */ var _components_profile2_profile2_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/profile2/profile2.component */ "./src/app/components/profile2/profile2.component.ts");





















// services










function tokenGetter() {
    return localStorage.getItem('id_token');
}
var appRoutes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
    },
    {
        path: 'logga_in',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
    },
    {
        path: 'registrera',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
    },
    {
        path: 'profil',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'profil/updatera',
        component: _components_updateprofile_updateprofile_component__WEBPACK_IMPORTED_MODULE_28__["UpdateprofileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'användare/:jobId/:id',
        component: _components_profile2_profile2_component__WEBPACK_IMPORTED_MODULE_29__["Profile2Component"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'mina_jobb',
        component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_26__["MessagesComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'mina_jobb/:id',
        component: _components_jobbmessages_jobbmessages_component__WEBPACK_IMPORTED_MODULE_27__["JobbmessagesComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'jobb',
        component: _components_jobb_jobb_component__WEBPACK_IMPORTED_MODULE_16__["JobbComponent"],
    },
    {
        path: 'details/:id',
        component: _components_jobbdetails_jobbdetails_component__WEBPACK_IMPORTED_MODULE_25__["JobbdetailsComponent"],
    },
    {
        path: 'jobb/:searchTerm',
        component: _components_jobb_jobb_component__WEBPACK_IMPORTED_MODULE_16__["JobbComponent"],
    },
    {
        path: 'skapa',
        component: _components_add_add_component__WEBPACK_IMPORTED_MODULE_17__["AddComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _components_jobb_jobb_component__WEBPACK_IMPORTED_MODULE_16__["JobbComponent"],
                _components_add_add_component__WEBPACK_IMPORTED_MODULE_17__["AddComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"],
                _components_jobbdetails_jobbdetails_component__WEBPACK_IMPORTED_MODULE_25__["JobbdetailsComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_26__["MessagesComponent"],
                _components_jobbmessages_jobbmessages_component__WEBPACK_IMPORTED_MODULE_27__["JobbmessagesComponent"],
                ngx_notification__WEBPACK_IMPORTED_MODULE_8__["NgxNotificationComponent"],
                _components_updateprofile_updateprofile_component__WEBPACK_IMPORTED_MODULE_28__["UpdateprofileComponent"],
                _components_profile2_profile2_component__WEBPACK_IMPORTED_MODULE_29__["Profile2Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                    }
                }),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_6__["NgFlashMessagesModule"].forRoot(),
                ngx_materialize__WEBPACK_IMPORTED_MODULE_9__["MzToastModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_9__["MzModalModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]
            ],
            exports: [
                ngx_materialize__WEBPACK_IMPORTED_MODULE_9__["MzToastModule"],
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_20__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_route_service__WEBPACK_IMPORTED_MODULE_22__["RouteService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add/add.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/add/add.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row add-form\">\n      <h5 class=\"center\">Skapa ett jobb</h5>\n      <form class=\"col m6 offset-m3 s12 center\" (submit)=\"onAddSubmit()\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"title\" name=\"title\" id=\"title\" type=\"text\" class=\"validate\" autofocus>\n            <label for=\"title\">Titel</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <textarea [(ngModel)]=\"description\" name=\"description\" id=\"description\" class=\"materialize-textarea\" style=\"height: 10rem;\"></textarea>\n            <label for=\"description\">Beskrivning</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"technologies\" name=\"technologies\" id=\"technologies\" type=\"text\" class=\"validate\">\n            <label for=\"technologies\">Färdigheter (lämna blankt om du inte vet)</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"budget\" name=\"budget\" id=\"budget\" type=\"text\" class=\"validate\">\n            <label for=\"budget\">Budget (lämna blankt om du inte vet)</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"contact_email\" name=\"contact_email\" id=\"contact_email\" type=\"text\" class=\"validate\">\n            <label for=\"contact_email\">Din email</label>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"waves-effect waves-light btn btn-large\">Lägg upp jobb</button>\n      </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add/add.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/add/add.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add/add.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/add/add.component.ts ***!
  \*************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");






var AddComponent = /** @class */ (function () {
    function AddComponent(apiService, validateService, router, toastService) {
        this.apiService = apiService;
        this.validateService = validateService;
        this.router = router;
        this.toastService = toastService;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var job = {
            title: this.title,
            description: this.description,
            technologies: this.technologies,
            budget: this.budget,
            contact_email: this.contact_email,
            owner_id: JSON.parse(localStorage.getItem('user'))['id']
        };
        if (!this.validateService.validateJob(job)) {
            return false;
        }
        if (!this.validateService.validateEmail(job.contact_email)) {
            this.toastService.show('Du måste fylla i en giltig e-postadress!', 3000, 'dark', function () { });
            return false;
        }
        ;
        if (job.budget == undefined || job.budget == '') {
            job.budget = 'Ingen budget specificerad.';
        }
        ;
        if (job.technologies == undefined || job.technologies == '') {
            job.technologies = 'Inga färdigheter angivet.';
        }
        ;
        this.apiService.addJob(job)
            .subscribe(function (data) {
            if (data['success']) {
                _this.toastService.show('Ditt jobb är nu upplagt!', 3000, 'dark', function () { });
                return _this.router.navigate(['jobb']);
            }
            else {
                _this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', function () { });
                return false;
            }
        });
    };
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/components/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/components/add/add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_2__["MzToastService"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row center\">\n    <div class=\"col\">\n      <h5 class=\"white-text\">Frilansutvecklare.se</h5>\n      <p class=\"grey-text text-lighten-4\">\n        Frilansutvecklare.se är det självklara valet för både frilansutvecklare och personer som är på jakt efter utvecklare.\n        Tjänsten är designad för att vara enkel att använda och göra processen att hitta utvecklare\n        eller jobb så smidig den kan bli.\n      </p>\n    </div>\n  </div>\n</div>\n<div class=\"footer-copyright\">\n  <div class=\"container\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"index-banner\" class=\"parallax-container\">\n  <div class=\"section no-pad-bot\">\n    <div class=\"container\">\n      <br><br>\n      <h2 class=\"header center teal-text text-lighten-2\">Hej!</h2>\n      <div class=\"row center\">\n        <h5 class=\"header col s12 light teal-text\">Hitta ett jobb som passar dig här.</h5>\n      </div>\n\n      <div class=\"row center\">\n        <form id=\"searchForm\" class=\"col s12 center\" (submit)=\"onSearchSubmit()\">\n          <div class=\"row\">\n            <div class=\"input-field col s12 m6 offset-m3\">\n              <i class=\"material-icons prefix\">search</i>\n              <input id=\"searchInput\" placeholder=\"T.ex Intranät, React, stor hemsida...\" [(ngModel)]=\"searchTerm\" name=\"searchTerm\" id=\"first_name\" type=\"text\" class=\"autocomplete validate white-dark\" autofocus>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-large\">Sök jobb</button>\n          <a routerLink=\"/jobb\" class=\"btn btn-large\" style=\"margin-left:5px;\">Alla jobb</a>\n        </form>\n      </div>\n      <br><br>\n    </div>\n  </div>\n  <div class=\"parallax\"><img src='assets/img/bg2.jpg' alt=\"Unsplashed background img 1\" style=\"transform: translate3d(-50%, 257.4222222222222px, 0px); opacity: 1;\"></div>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"section\">\n\n    <!--   Icon Section   -->\n    <div class=\"row\">\n      <div class=\"col s12 m6\">\n        <div class=\"icon-block center\">\n          <h2 class=\"center teal-text\"><i class=\"material-icons\">code</i></h2>\n          <h5 class=\"center\">Är du utvecklare?</h5>\n          <p class=\"light center-align\">\n            Här kan du enkelt söka efter jobb som passar dina färdigheter och intresse,\n            när du hittat ett jobb du är intresserad av kan du lätt ta kontakt med arbetsgivaren och börja chatta.\n          </p>\n        </div>\n      </div>\n\n      <div class=\"col s12 m6\">\n        <div class=\"icon-block center\">\n          <h2 class=\"center teal-text\"><i class=\"material-icons\">computer</i></h2>\n          <h5 class=\"center\">På jakt efter utvecklare?</h5>\n          <p class=\"light center-align\">\n            Med oss kan du lätt lägga upp ett jobb\n            för att sedan bli kontaktad av kompetenta utvecklare.\n          </p>\n        </div>\n      </div>\n\n  </div>\n</div>\n\n  <div class=\"container\">\n    <div class=\"section\">\n\n      <div class=\"row center\">\n        <div class=\"col s12\">\n          <h3><i class=\"mdi-content-send brown-text\"></i></h3>\n          <h4>Hur funkar det?</h4>\n          <p class=\"center-align light\">\n            Oavsett om du är utvecklare eller är på jakt efter utvecklare är det enkelt att komma igång med vår tjänst.\n            Skapa ett konto, tryck på \"Skapa ett jobb\" och lägg upp ett jobb inom några minuter, eller använder du vår söktjänst\n            för att hitta de jobb som passar dig och dina färdigheter. När någon blivit intresserad av ditt jobb lägger de\n            lätt ett bud med ett frivilligt meddelande, dessa ser du under \"Mina jobb\" och kan smidigt kolla igenom profiler.\n            När du hittat en utvecklare du gillar tar du helt enkelt bort jobbet. Enkelt!\n          </p>\n        </div>\n        <a routerLink=\"/registrera\" class=\"btn btn-large\">Skapa ett konto</a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, flashMessage) {
        this.router = router;
        this.flashMessage = flashMessage;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSearchSubmit = function () {
        if (this.searchTerm) {
            this.router.navigate(['jobb', this.searchTerm]);
        }
        else {
            return false;
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/jobb/jobb.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/jobb/jobb.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n\n  <!--   Icon Section   -->\n  <div *ngIf=\"jobs\" class=\"row\">\n\n    <h4 *ngIf=\"!searchTerm\" class=\"text-lighten-2 center\">Alla jobb</h4>\n    <h4 *ngIf=\"searchTerm\" class=\"text-lighten-2 center\">Resultat för: \"{{searchTerm}}\"</h4>\n\n    <div *ngIf=\"jobs.length == 0 && searchTerm != undefined\" class=\"center\">\n        <p  class=\"text-lighten-2 center\">Tyvärr gav din sökning inga resultat.</p>\n        <a routerLink=\"\" class=\"btn\">Tillbaka till sök</a>\n    </div>\n\n    <div *ngIf=\"jobs.length == 0 && searchTerm == undefined\" class=\"center\">\n        <p *ngIf=\"jobs.length == 0 && searchTerm == undefined\" class=\"text-lighten-2 center\">Det finns inga tillgängliga jobb just nu.</p>\n        <a routerLink=\"\" class=\"btn center-align searchBtn\">Tillbaka till sök</a>\n        <a routerLink=\"/profil\" class=\"btn center-align searchBtn\">Gå till min profil</a>\n    </div>\n\n      <div *ngFor=\"let item of jobs\" class=\"col s12 m6 offset-m3\">\n        <div class=\"card horizontal\">\n          <div class=\"card-stacked\">\n            <div class=\"card-content\">\n              <div class=\"right\">\n                  <small>Publicerad {{ item.published }}</small><br>\n                  <small class=\"right teal-text\">Jag äger detta jobbet</small>\n              </div>\n              <h5>{{ item.title }}</h5>\n              <p>{{ text_truncate(item.description, 40) }}</p>\n              <small><strong>Skills: </strong>{{ item.technologies }}</small><br>\n              <small><strong>Ägare: </strong>{{ item['user.name'] }}</small>\n            </div>\n            <div class=\"card-action grey lighten-5\">\n              <a routerLink=\"/details/{{ item.id }}\" class=\"btn btn-small\">Jag är intresserad</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/jobb/jobb.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/jobb/jobb.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iYi9qb2JiLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/jobb/jobb.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/jobb/jobb.component.ts ***!
  \***************************************************/
/*! exports provided: JobbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobbComponent", function() { return JobbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var javascript_time_ago_locale_sv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! javascript-time-ago/locale/sv */ "./node_modules/javascript-time-ago/locale/sv/index.js");
/* harmony import */ var javascript_time_ago_locale_sv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_sv__WEBPACK_IMPORTED_MODULE_5__);






javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"].addLocale(javascript_time_ago_locale_sv__WEBPACK_IMPORTED_MODULE_5___default.a);
var timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_4__["default"]('sv-SV');
var JobbComponent = /** @class */ (function () {
    function JobbComponent(apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.jobs = [];
    }
    JobbComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.paramMap.get("searchTerm")) {
            var term = this.route.snapshot.paramMap.get("searchTerm");
            this.searchTerm = term;
            this.apiService.searchJobs(term)
                .subscribe(function (data) {
                var jobs = JSON.parse(data['jobb']).map(function (item) {
                    var d = new Date(item.createdAt);
                    item.published = timeAgo.format(d);
                    return item;
                });
                _this.jobs = jobs;
            });
        }
        else {
            this.apiService.getAllJobs()
                .subscribe(function (data) {
                var jobs = JSON.parse(data['jobb']).map(function (item) {
                    var d = new Date(item.createdAt);
                    item.published = timeAgo.format(d);
                    return item;
                });
                _this.jobs = jobs;
            });
        }
    };
    JobbComponent.prototype.text_truncate = function (str, length, ending) {
        if (length == null) {
            length = 100;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        }
        else {
            return str;
        }
    };
    JobbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobb',
            template: __webpack_require__(/*! ./jobb.component.html */ "./src/app/components/jobb/jobb.component.html"),
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            styles: [__webpack_require__(/*! ./jobb.component.scss */ "./src/app/components/jobb/jobb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], JobbComponent);
    return JobbComponent;
}());



/***/ }),

/***/ "./src/app/components/jobbdetails/jobbdetails.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/jobbdetails/jobbdetails.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"section\">\n\n    <div class=\"row\" style=\"margin-top:15px;\">\n\n      <div class=\"col s12 m7 left\" style=\"word-wrap: break-word;\">\n        <h4 class=\"text-lighten-2 jobb-title\">{{ title }}</h4>\n        <p>\n          <strong>Budget: </strong>{{ budget }}<br>\n          <strong>Färdigheter: </strong>{{ technologies }}<br>\n          <strong>Arbetsgivare: </strong>{{ employerName }}\n        </p>\n        <p>{{ description }}</p>\n        <br>\n        <small class=\"left\">Publicerad {{ published }}</small>\n      </div>\n\n      <div *ngIf=\"!userIsOwner\" class=\"col s12 m4 offset-m1 z-depth-1\" style=\"margin-top:15px;padding:10px;\">\n        <form class=\"col s12 m12\" method=\"post\" (submit)=\"onContactSubmit()\">\n          <div class=\"row center\">\n            <div class=\"input-field col s12 m12\">\n              <input *ngIf=\"authService.loggedIn()\" [(ngModel)]=\"bidAmount\" name=\"bidAmount\" type=\"text\" id=\"amount\">\n              <input *ngIf=\"!authService.loggedIn()\" disabled [(ngModel)]=\"bidAmount\" name=\"bidAmount\" type=\"text\" id=\"amount\">\n              <label for=\"amount\">Ange belopp i kr</label>\n            </div>\n            <div class=\"input-field col s12 m12\">\n              <textarea *ngIf=\"authService.loggedIn()\" [(ngModel)]=\"bidMessage\" name=\"bidMessage\" id=\"message\" type=\"email\" class=\"validate materialize-textarea\" style=\"height: 10rem;\"></textarea>\n              <textarea *ngIf=\"!authService.loggedIn()\" disabled [(ngModel)]=\"bidMessage\" name=\"bidMessage\" id=\"message\" type=\"email\" class=\"validate materialize-textarea\" style=\"height: 10rem;\"></textarea>\n              <label for=\"message\">Lägg till ett meddelande (frivilligt)</label>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn\" style=\"width: 100%;\" [disabled]=\"!authService.loggedIn()\">Lägg bud</button><br><br>\n          <small *ngIf=\"!authService.loggedIn()\"><a routerLink=\"/logga_in\">Logga in </a>för att lägga ett bud.</small>\n        </form>\n      </div>\n    </div>\n  </div>\n  <a routerLink=\"/jobb\" class=\"btn mt mb\">Gå tillbaka</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/jobbdetails/jobbdetails.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/jobbdetails/jobbdetails.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iYmRldGFpbHMvam9iYmRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/jobbdetails/jobbdetails.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/jobbdetails/jobbdetails.component.ts ***!
  \*****************************************************************/
/*! exports provided: JobbdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobbdetailsComponent", function() { return JobbdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_mail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mail.service */ "./src/app/services/mail.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/index.js");
/* harmony import */ var javascript_time_ago_locale_sv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! javascript-time-ago/locale/sv */ "./node_modules/javascript-time-ago/locale/sv/index.js");
/* harmony import */ var javascript_time_ago_locale_sv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(javascript_time_ago_locale_sv__WEBPACK_IMPORTED_MODULE_8__);









javascript_time_ago__WEBPACK_IMPORTED_MODULE_7__["default"].addLocale(javascript_time_ago_locale_sv__WEBPACK_IMPORTED_MODULE_8___default.a);
var timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_7__["default"]('sv-SV');
var JobbdetailsComponent = /** @class */ (function () {
    function JobbdetailsComponent(route, apiService, authService, mailService, toastService) {
        this.route = route;
        this.apiService = apiService;
        this.authService = authService;
        this.mailService = mailService;
        this.toastService = toastService;
    }
    JobbdetailsComponent.prototype.ngOnInit = function () {
    };
    JobbdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobbdetails',
            template: __webpack_require__(/*! ./jobbdetails.component.html */ "./src/app/components/jobbdetails/jobbdetails.component.html"),
            styles: [__webpack_require__(/*! ./jobbdetails.component.scss */ "./src/app/components/jobbdetails/jobbdetails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_mail_service__WEBPACK_IMPORTED_MODULE_4__["MailService"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_6__["MzToastService"]])
    ], JobbdetailsComponent);
    return JobbdetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/jobbmessages/jobbmessages.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/jobbmessages/jobbmessages.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"section\" [ngClass]=\"{center:bids.length == 0}\">\n\n    <h4 class=\"text-lighten-2 center mb\">Alla bud för: <strong>{{ job.title }}</strong></h4>\n\n    <ul *ngIf=\"bids\" class=\"collection\">\n      <li *ngFor=\"let item of bids\" class=\"collection-item avatar\">\n          <i class=\"material-icons circle red lighten-2 pointer\" (click)=\"deleteBidHandler(item.id)\">delete</i>\n        <span class=\"title\">{{ item['user'].name }} buder:</span>\n        <p><b>{{ item.amount }} kr</b><br>\n          och säger:<br>\n          <i>{{ item.message }}</i>\n        </p>\n        <p><b>Kontakta budgivaren: </b>{{ item['user'].email }}</p>\n        <div class=\"secondary-content \">\n            <a routerLink=\"/användare/{{job.id}}/{{item['user'].id}}\" class=\"btn btn-small\">Visa profil</a> \n        </div>\n      </li>\n    </ul>\n\n    <p *ngIf=\"bids.length == 0\" class=\"center\">\n      Det finns för tillfället inga bud!\n    </p>\n\n    <a routerLink=\"/mina_jobb\" class=\"btn mt mb\">Gå tillbaka</a>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/jobbmessages/jobbmessages.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/jobbmessages/jobbmessages.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvam9iYm1lc3NhZ2VzL2pvYmJtZXNzYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/jobbmessages/jobbmessages.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/jobbmessages/jobbmessages.component.ts ***!
  \*******************************************************************/
/*! exports provided: JobbmessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobbmessagesComponent", function() { return JobbmessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");






var JobbmessagesComponent = /** @class */ (function () {
    function JobbmessagesComponent(apiService, router, route, toastService, modalService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.toastService = toastService;
        this.modalService = modalService;
        this.bids = [];
    }
    JobbmessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.job = {};
        this.route.params.subscribe(function (params) {
            _this.apiService.getJobBids(params['id'])
                .subscribe(function (data) {
                _this.bids = data['bids'];
                _this.job = data['jobb'];
            });
        });
    };
    JobbmessagesComponent.prototype.deleteBidHandler = function (bidId) {
        var _this = this;
        this.apiService.deleteBid(bidId)
            .subscribe(function (data) {
            if (data['success']) {
                var newBidsArr = _this.bids.filter(function (obj) { return obj.id !== bidId; });
                _this.bids = newBidsArr;
            }
            else {
                _this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', function () { });
            }
        });
    };
    JobbmessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobbmessages',
            template: __webpack_require__(/*! ./jobbmessages.component.html */ "./src/app/components/jobbmessages/jobbmessages.component.html"),
            styles: [__webpack_require__(/*! ./jobbmessages.component.scss */ "./src/app/components/jobbmessages/jobbmessages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_4__["MzToastService"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_4__["MzModalService"]])
    ], JobbmessagesComponent);
    return JobbmessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container center\">\n  <div class=\"row login-form\">\n    <h4>Logga in</h4>\n    <form class=\"col m4 offset-m4 s12\" (submit)=\"onLoginSubmit()\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"username\" name=\"username\" id=\"username\" type=\"text\" class=\"validate\" autofocus>\n          <label for=\"username\">Användarnamn</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"password\" name=\"password\" id=\"password\" type=\"password\" class=\"validate\">\n          <label for=\"password\">Lösendord</label>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn\">Logga in</button><br><br>\n      <span>Har du inget konto? </span><a routerLink=\"/registrera\">Skapa här</a>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, toastService) {
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.loginUser(user)
            .subscribe(function (data) {
            if (data['success']) {
                _this.authService.storeUserData(data['token'], data['user']);
                _this.toastService.show('Du är nu inloggad!', 3000, 'dark', function () { });
                _this.router.navigate(['jobb']);
            }
            else {
                _this.toastService.show(data['msg'], 3000, 'dark', function () { });
                return false;
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_3__["MzToastService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"section\">\n\n    <h4 class=\"text-lighten-2 center mb\">Upplagda jobb</h4>\n\n    <div class=\"row\">\n\n      <div *ngFor=\"let item of jobs\" class=\"col s12 m6\">\n        <div class=\"card-panel grey lighten-5 z-depth-1\">\n          <span class=\"black-text\">{{ item.title }}</span>\n          <br>\n          <small>\n            {{ text_truncate(item.description, 70) }}\n          </small>\n          <br>\n          <small><strong>Din budget: </strong>{{ item.budget }}</small>\n          <br>\n          <small>Det finns <strong>{{ item.newBidsCount }}</strong> nya bud!</small>\n\n          <a (click)=\"deleteJobHandler(item.id)\" class=\"btn btn-small right red lighten-2 ml-10\">Ta bort</a>\n          <a routerLink=\"/mina_jobb/{{item.id}}\" class=\"btn btn-small right\">Visa alla bud</a>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/messages/messages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");





var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(apiService, router, toastService) {
        this.apiService = apiService;
        this.router = router;
        this.toastService = toastService;
        this.jobs = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUserJobs(JSON.parse(localStorage.getItem('user'))['id'])
            .subscribe(function (data) {
            _this.jobs = JSON.parse(data['jobb']);
        });
    };
    MessagesComponent.prototype.deleteJobHandler = function (jobId) {
        var _this = this;
        this.apiService.deleteJob(jobId)
            .subscribe(function (data) {
            if (data['success']) {
                var newJobsArr = _this.jobs.filter(function (obj) { return obj.id !== jobId; });
                _this.jobs = newJobsArr;
            }
            else {
                _this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', function () { });
            }
        });
    };
    MessagesComponent.prototype.text_truncate = function (str, length, ending) {
        if (length == null) {
            length = 100;
        }
        if (ending == null) {
            ending = '...';
        }
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        }
        else {
            return str;
        }
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/components/messages/messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_4__["MzToastService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n    <nav class=\"white\" role=\"navigation\">\n        <div class=\"nav-wrapper\">\n          <a id=\"logo-container\" routerLink=\"\" class=\"brand-logo\" style=\"margin-left:15px;\">Frilansutvecklare.se</a>\n          <ul class=\"right hide-on-med-and-down\" style=\"padding-right:15px;\">\n            <li><a routerLink=\"\">Hem</a></li>\n            <li><a routerLink=\"jobb\">Alla jobb</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"skapa\">Skapa ett jobb</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"mina_jobb\">Mina jobb</a></li>\n            <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"logga_in\">Logga in</a></li>\n            <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"registrera\">Skapa konto</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"profil\">Min profil</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" (click)=\"onLogout()\">Logga ut</a></li>\n          </ul>\n      \n          <ul id=\"nav-mobile\" class=\"sidenav\">\n            <li><a routerLink=\"\">Hem</a></li>\n            <li><a routerLink=\"jobb\">Alla jobb</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"skapa\">Skapa ett jobb</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"mina_jobb\">Mina jobb</a></li>\n            <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"logga_in\">Logga in</a></li>\n            <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"registrera\">Skapa konto</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"profil\">Min profil</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" (click)=\"onLogout()\">Logga ut</a></li>\n          </ul>\n          <a href=\"#\" data-target=\"nav-mobile\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n        </div>\n      </nav>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, toastService) {
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.toastService.show('Du är nu utloggad!', 3000, 'dark', function () { });
        this.router.navigate(['']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_4__["MzToastService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"section\">\n\n    <!--   Icon Section   -->\n    <div class=\"row\">\n\n      <div class=\"col m6 offset-m3 s12 center\">\n        <h4 class=\"text-lighten-2\">Min profil</h4>\n        <p>\n          <span *ngIf=\"user.description\">{{ user.description }}</span>\n          <span *ngIf=\"!user.description\">Du har ingen beskrivning.</span>\n          <br>\n          <small>\n            <strong>Färdigheter: </strong>\n            <span *ngIf=\"user.skills\">{{ user.skills }}</span>\n            <span *ngIf=\"!user.skills\">Du har inte lagt till några färdigheter.</span>\n          </small>\n        </p>\n\n        <div class=\"row\">\n          <form class=\"col s12\">\n            <div class=\"row\">\n              <div class=\"input-field col m12 s12\">\n                <small class=\"left\">Fullständigt namn</small>\n                <input value={{user.name}} type=\"text\" class=\"validate\" disabled>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col m12 s12\">\n                <small class=\"left\">Användarnamn</small>\n                <input value={{user.username}} type=\"text\" class=\"validate\" disabled>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field col m12 s12\">\n                <small class=\"left\">Email</small>\n                <input value={{user.email}} id=\"email\" type=\"text\" class=\"validate\" disabled>\n              </div>\n            </div>\n          </form>\n          <a routerLink=\"updatera\" class=\"waves-effect waves-light btn\">Updatera profil</a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/profile2/profile2.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/profile2/profile2.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"section\">\n  \n      <!--   Icon Section   -->\n      <div class=\"row\">\n  \n        <div class=\"col m6 offset-m3 s12 center\">\n          <h4 class=\"text-lighten-2\">{{ user.name }}</h4>\n          <p>\n            <span *ngIf=\"user.description\">{{ user.description }}</span>\n            <span *ngIf=\"!user.description\">Du har ingen beskrivning.</span>\n            <br>\n            <small>\n              <strong>Färdigheter: </strong>\n              <span *ngIf=\"user.skills\">React, Angular, Django</span>\n              <span *ngIf=\"!user.skills\">Du har inte lagt till några färdigheter.</span>\n            </small>\n          </p>\n        \n          <a routerLink=\"/mina_jobb/{{jobId}}/\" class=\"btn mt mb\">Gå tillbaka</a>\n      </div>\n      \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/profile2/profile2.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/profile2/profile2.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZTIvcHJvZmlsZTIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile2/profile2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/profile2/profile2.component.ts ***!
  \***********************************************************/
/*! exports provided: Profile2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile2Component", function() { return Profile2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");






var Profile2Component = /** @class */ (function () {
    function Profile2Component(apiService, routeService, route, router, toastService) {
        this.apiService = apiService;
        this.routeService = routeService;
        this.route = route;
        this.router = router;
        this.toastService = toastService;
    }
    Profile2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {};
        this.jobId = this.route.snapshot.params.jobId;
        this.apiService.getUserData(this.route.snapshot.params.id)
            .subscribe(function (data) {
            if (data['success']) {
                _this.user = JSON.parse(data['userData']);
            }
            else {
                _this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark');
                _this.router.navigate(['meddelanden']);
            }
        });
    };
    Profile2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile2',
            template: __webpack_require__(/*! ./profile2.component.html */ "./src/app/components/profile2/profile2.component.html"),
            styles: [__webpack_require__(/*! ./profile2.component.scss */ "./src/app/components/profile2/profile2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _services_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzToastService"]])
    ], Profile2Component);
    return Profile2Component;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container center\">\n  <div class=\"row login-form\">\n    <h4>Skapa ett konto</h4>\n    <form class=\"col m4 offset-m4 s12\" (submit)=\"onRegisterSubmit()\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"name\" name=\"name\" id=\"username\" type=\"text\" class=\"validate\" autofocus>\n          <label for=\"username\">Ditt fullständiga namn</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"username\" name=\"username\" id=\"username\" type=\"text\" class=\"validate\">\n          <label for=\"username\">Användarnamn</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"email\" name=\"email\" id=\"email\" type=\"text\" class=\"validate\">\n          <label for=\"email\">Email</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"validate\">\n          <label for=\"password\">Lösendord</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input [(ngModel)]=\"password2\" name=\"password2\" id=\"password2\" type=\"password\" class=\"validate\">\n          <label for=\"password2\">Bekräfta lösenord</label>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn\">Skapa konto</button><br><br>\n      <span>Har du redan ett konto? </span><a routerLink=\"/logga_in\">Logga in här</a>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, router, toastService) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
        };
        if (!this.validateService.validateRegister(user)) {
            this.toastService.show('Du måste fylla i alla fält!', 3000, 'dark', function () { });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.toastService.show('Du måste fylla i en giltig e-postadress!', 3000, 'dark', function () { });
            return false;
        }
        if (!this.validateService.validatePassword(this.password, this.password2)) {
            this.toastService.show('Lösenorden matchar inte.', 3000, 'dark', function () { });
            return false;
        }
        // register user
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data['success']) {
                _this.toastService.show('Ditt konto har skapats och du kan nu logga in.', 3000, 'dark', function () { });
                _this.router.navigate(['logga_in']);
            }
            else {
                _this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', function () { });
                return false;
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_3__["MzToastService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/updateprofile/updateprofile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/updateprofile/updateprofile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"section\">\n  \n      <!--   Icon Section   -->\n      <div class=\"row\">\n  \n        <div class=\"col m6 offset-m3 s12 center\">\n          <h4 class=\"text-lighten-2\">Uppdatera profil</h4>\n          <p>\n            Tänk på att det är väldigt viktigt med en bra beskrivning av dig själv som beskriver exakt varför du ska få jobben,\n            du bör även lägga till dina färdigheter.\n          </p>\n          <div class=\"row\">\n            <form class=\"col s12\" (submit)=\"updateSubmit()\">\n              <div class=\"row\">\n                <div class=\"input-field col m12 s12\">\n                  <small class=\"left\">Beskrivning</small>\n                  <textarea [(ngModel)]=\"description\" name=\"description\" type=\"text\" class=\"validate materialize-textarea\" style=\"height:8em;\">{{description}}</textarea>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"input-field col m12 s12\">\n                  <small class=\"left\">Färdigheter</small>\n                  <input value={{skills}} [(ngModel)]=\"skills\" name=\"skills\" type=\"text\" class=\"validate\" length = \"10\">\n                </div>\n              </div>\n              <button type=\"submit\" class=\"waves-effect waves-light btn\">Spara</button>\n            </form>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/updateprofile/updateprofile.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/updateprofile/updateprofile.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlcHJvZmlsZS91cGRhdGVwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/updateprofile/updateprofile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/updateprofile/updateprofile.component.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofileComponent", function() { return UpdateprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");





var UpdateprofileComponent = /** @class */ (function () {
    function UpdateprofileComponent(apiService, router, toastService) {
        this.apiService = apiService;
        this.router = router;
        this.toastService = toastService;
    }
    UpdateprofileComponent.prototype.ngOnInit = function () {
        this.description = JSON.parse(localStorage.getItem('user'))['description'];
        this.skills = JSON.parse(localStorage.getItem('user'))['skills'];
    };
    UpdateprofileComponent.prototype.updateSubmit = function () {
        var _this = this;
        var updateObj = {
            user_id: JSON.parse(localStorage.getItem('user'))['id'],
            description: this.description,
            skills: this.skills
        };
        this.apiService.updateProfile(updateObj)
            .subscribe(function (data) {
            if (data['success']) {
                var newUserObj = {
                    id: JSON.parse(localStorage.getItem('user'))['id'],
                    name: JSON.parse(localStorage.getItem('user'))['name'],
                    username: JSON.parse(localStorage.getItem('user'))['username'],
                    email: JSON.parse(localStorage.getItem('user'))['email'],
                    description: updateObj.description,
                    skills: updateObj.skills,
                };
                localStorage.setItem('user', JSON.stringify(newUserObj));
                _this.toastService.show('Din profil är uppdaterad!', 3000, 'dark', function () { });
                _this.router.navigate(['profil']);
            }
            else {
                _this.toastService.show('Något oväntat hände, vänligen försök igen.', 3000, 'dark', function () { });
                return false;
            }
        });
    };
    UpdateprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updateprofile',
            template: __webpack_require__(/*! ./updateprofile.component.html */ "./src/app/components/updateprofile/updateprofile.component.html"),
            styles: [__webpack_require__(/*! ./updateprofile.component.scss */ "./src/app/components/updateprofile/updateprofile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_materialize__WEBPACK_IMPORTED_MODULE_4__["MzToastService"]])
    ], UpdateprofileComponent);
    return UpdateprofileComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/logga_in']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getAllJobs = function () {
        return this.http.get('/api/jobs');
    };
    ApiService.prototype.pGetAllJobs = function (pageNum) {
        return this.http.get("//api/jobs/p/" + pageNum);
    };
    ApiService.prototype.getJobData = function (id) {
        return this.http.get("/api/jobs/" + id);
    };
    ApiService.prototype.searchJobs = function (term) {
        return this.http.get("/api/search?term=" + term);
    };
    ApiService.prototype.addJob = function (job) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('id_token')
        });
        return this.http.post('/api/add', job, { headers: headers });
    };
    ApiService.prototype.deleteJob = function (jobId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: localStorage.getItem('id_token')
        });
        return this.http.delete("/api/remove_job/" + jobId + "/", { headers: headers });
    };
    ApiService.prototype.getUserJobs = function (user_id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: localStorage.getItem('id_token')
        });
        return this.http.get("/api/user_jobs/" + user_id, { headers: headers });
    };
    ApiService.prototype.getUserData = function (userId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: localStorage.getItem('id_token')
        });
        return this.http.get("/api/user_data/" + userId, { headers: headers });
    };
    ApiService.prototype.getJobBids = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: localStorage.getItem('id_token')
        });
        return this.http.get("/api/bids/" + id, { headers: headers });
    };
    ApiService.prototype.sendBid = function (bidObj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('id_token')
        });
        return this.http.post('/api/send_bid', bidObj, { headers: headers });
    };
    ApiService.prototype.deleteBid = function (bidId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('id_token')
        });
        return this.http.delete("/api/remove_bid/" + bidId + "/", { headers: headers });
    };
    ApiService.prototype.updateProfile = function (updateObj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('id_token')
        });
        return this.http.put('/api/update_profile', updateObj, { headers: headers });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post('/users/register', user, { headers: headers });
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post('/users/auth', user, { headers: headers });
    };
    AuthService.prototype.updateUser = function (updateUserObj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post('/users/update', updateUserObj, { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        this.loadToken();
        return !this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/mail.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/mail.service.ts ***!
  \******************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MailService = /** @class */ (function () {
    function MailService(http) {
        this.http = http;
    }
    MailService.prototype.sendEmployer = function (messageObj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.post('http://localhost:5000/mail/send_employer', messageObj, { headers: headers });
    };
    MailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./src/app/services/route.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/route.service.ts ***!
  \*******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RouteService = /** @class */ (function () {
    function RouteService(router) {
        var _this = this;
        this.router = router;
        this.currentUrl = this.router.url;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
            ;
        });
    }
    RouteService.prototype.getPreviousUrl = function () {
        return this.previousUrl;
    };
    RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validatePassword = function (password1, password2) {
        if (password1 === password2) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService.prototype.validateJob = function (jobb) {
        if (jobb.title == undefined || jobb.description == '' || jobb.contact_email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
    production: false
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

module.exports = __webpack_require__(/*! /Users/hugojohnsson/Desktop/frilansutvecklare/jobb-node/jobb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map