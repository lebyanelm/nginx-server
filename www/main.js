(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: 'eggs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 2711)).then((m) => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'eggs',
        pathMatch: 'full',
    },
    {
        path: 'onboarding',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 5415)).then((m) => m.SignupPageModule),
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signin_signin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signin/signin.module */ 9889)).then((m) => m.SigninPageModule),
    },
    {
        path: 'reset-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reset-password/reset-password.module */ 6121)).then((m) => m.ResetPasswordPageModule),
    },
    {
        path: 'eggs/:egg_id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_egg_egg_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/egg/egg.module */ 3726)).then((m) => m.EggPageModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);


class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule] }); })();


/***/ }),

/***/ 9258:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _egg_egg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./egg/egg.component */ 7242);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3883);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _egg_egg_component__WEBPACK_IMPORTED_MODULE_0__.EggComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _egg_egg_component__WEBPACK_IMPORTED_MODULE_0__.EggComponent] }); })();


/***/ }),

/***/ 7242:
/*!*************************************************!*\
  !*** ./src/app/components/egg/egg.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EggComponent": () => (/* binding */ EggComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EggComponent {
    constructor() { }
    ngOnInit() { }
}
EggComponent.ɵfac = function EggComponent_Factory(t) { return new (t || EggComponent)(); };
EggComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EggComponent, selectors: [["app-egg"]], decls: 22, vars: 0, consts: [["href", "/eggs/und1c1-the-best-soccer-boardgame-ever", 1, "egg-container"], [1, "egg-image-placeholder"], [1, "egg-hetch-status"], [1, "egg-hetching-progress"], [1, "egg-hetching-statistics", "flex"], [1, "text-bold"], [1, "egg-funded-total"], [1, "egg-days-left"], [1, "hetch-progress"], [1, "hetch-progress-total"], [1, "egg-details"], [1, "egg-title"], [1, "egg-description", "description"], [1, "egg-category"]], template: function EggComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ZAR123,540");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "raised in total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7)(10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " days left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10)(16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Keychron K8 Pro - QMK/VIA Wireless Mechanical Keyboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " A sequel to the Wes Craven cult classic, The Return of Swamp Thing is decidedly NOT Directed by Wes Craven, but that\u2019s fine, because it means this one is bigger, dumber, and way more riffable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Camera Gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".egg-container[_ngcontent-%COMP%] {\n  display: block;\n  border: 2px solid #000000;\n  border-radius: 0px;\n  text-decoration: none;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-image-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 200px;\n  width: 100%;\n  padding: 10px;\n  background: #DDD;\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1648539625/z9lgjaaj3pfrkiea00o4.jpg);\n}\n.egg-container[_ngcontent-%COMP%]   .egg-hetch-status[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: small !important;\n  background: #000000;\n  color: #ffffff;\n  text-transform: lowercase;\n  border-radius: 0px;\n  font-weight: 500;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-image-placeholder[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: 50%;\n  width: 100%;\n  background: linear-gradient(0deg, #000000, transparent);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-hetching-progress[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-hetching-statistics[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  z-index: 10;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-hetch-status[_ngcontent-%COMP%], .egg-container[_ngcontent-%COMP%]   .egg-hetching-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: smaller !important;\n  color: #ffffff;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-hetching-statistics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .egg-container[_ngcontent-%COMP%]   .egg-hetching-statistics[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.egg-container[_ngcontent-%COMP%]   .hetch-progress[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n  background-color: rgba(240, 240, 240, 0.4);\n  border-radius: 0px;\n  margin-top: 10px;\n}\n.egg-container[_ngcontent-%COMP%]   .hetch-progress[_ngcontent-%COMP%]   .hetch-progress-total[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 80%;\n  border-radius: 0px;\n  background: #ffffff;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-details[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-details[_ngcontent-%COMP%]   .egg-title[_ngcontent-%COMP%] {\n  font-size: 25px !important;\n  font-family: \"Publico\", Georgia, \"Roboto\", sans-serif, system !important;\n  font-weight: 900 !important;\n}\n.egg-container[_ngcontent-%COMP%]   .egg-details[_ngcontent-%COMP%]   .egg-category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: small !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiZWdnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUFVQSxlQUFBO0FBU0EscUJBQUE7QUNoQkE7RUFDQyxjQUFBO0VBQ0EseUJEa0JRO0VDakJSLGtCRG1CZTtFQ2xCZixxQkFBQTtBQUNEO0FBRUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUlBQUE7QUFDRDtBQUVBO0VBQ0MsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJEeEJ1QjtFQ3lCdkIsY0R2QmtCO0VDd0JsQix5QkFBQTtFQUNBLGtCRExlO0VDTWYsZ0JBQUE7QUFDRDtBQUVBO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFDRDtBQUVBO0VBQ0MsVUFBQTtBQUNEO0FBR0E7RUFDQyw4QkFBQTtFQUNBLFdBQUE7QUFBRDtBQUdBOztFQUVDLDZCQUFBO0VBQ0EsY0R0RGtCO0FDc0RuQjtBQUVBOztFQUVDLGdCQUFBO0FBQ0Q7QUFHQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkQ5Q2U7RUMrQ2YsZ0JEbERlO0FDa0RoQjtBQUdBO0VBQ0MsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkRyRGU7RUNzRGYsbUJEMUVrQjtBQzBFbkI7QUFHQTtFQUNDLGFEOURTO0FDOERWO0FBR0E7RUFDQywwQkFBQTtFQUNBLHdFQUFBO0VBQ0EsMkJBQUE7QUFBRDtBQUdBO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQUQiLCJmaWxlIjoiZWdnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXG5cbiRQUklNQVJZX1RIRU1FX0NPTE9SOiB0b21hdG87XG4kU0VDT05EQVJZX1RIRU1FX0NPTE9SOiAjMDAwMDAwO1xuJFRFWFRfQ09MT1JfREFSSzogJFNFQ09OREFSWV9USEVNRV9DT0xPUjsgLy8xNjIzMjhcbiRURVhUX0NPTE9SX0xJR0hUOiAjZmZmZmZmO1xuJEFOQ0hPUl9DT0xPUjogJFBSSU1BUllfVEhFTUVfQ09MT1I7XG4kQkFDS0dST1VORF9DT0xPUjogI2YwZjBmMDtcbiRCQUNLR1JPVU5EX0NPTE9SX0xJR0hURVI6ICNGRkZGRkY7XG5cbi8qIFRZUE9HUkFQSFkgKi9cblxuJFRFWFRfRk9OVF9GQU1JTFk6IFwiUm9ib3RvXCIsIEhlbHZhdGljYSwgc2Fucy1zZXJpZiwgc3lzdGVtO1xuJEhFQURFUl9GT05UX0ZBTUlMWTogXCJQdWJsaWNvXCIsIEdlb3JnaWEsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIHN5c3RlbTtcbiRURVhUX0ZPTlRfU0laRTogMThweDtcbiRURVhUX0ZPTlRfU0laRV9TTUFMTDogMTVweDtcbiRIRUFERVJfRk9OVF9TSVpFOiA0MnB4O1xuJFRFWFRfREVDT1JBVElPTjogdW5kZXJsaW5lO1xuXG4vKiBTSEFQRVMgQU5EIFNJWkVTICovXG5cbiRQQURESU5HOiAyMHB4O1xuJFBBRERJTkdfU01BTEw6IDEwcHg7XG4kQk9SREVSOiAycHggc29saWQgJFNFQ09OREFSWV9USEVNRV9DT0xPUjtcbiRCT1JERVJfVEhJTjogMXB4IHNvbGlkICNFRUU7XG4kQk9SREVSX1JBRElVUzogMHB4O1xuJFBBR0VfTUFSR0lOUzogMTUlO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIEVHRyBDT05UQUlORVJcbi5lZ2ctY29udGFpbmVyIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJvcmRlcjogJEJPUkRFUjtcblx0Ym9yZGVyLXJhZGl1czogJEJPUkRFUl9SQURJVVM7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVnZy1jb250YWluZXIgLmVnZy1pbWFnZS1wbGFjZWhvbGRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0aGVpZ2h0OiAyMDBweDtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQ6ICNEREQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vYzEuaWdnY2RuLmNvbS9pbmRpZWdvZ28tbWVkaWEtcHJvZC1jbGQvaW1hZ2UvdXBsb2FkL2NfbGltaXQsd182OTUvdjE2NDg1Mzk2MjUvejlsZ2phYWozcGZya2llYTAwbzQuanBnKTtcbn1cblxuLmVnZy1jb250YWluZXIgLmVnZy1oZXRjaC1zdGF0dXMge1xuXHRwYWRkaW5nOiA1cHg7XG5cdGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcblx0YmFja2dyb3VuZDogJFNFQ09OREFSWV9USEVNRV9DT0xPUjtcblx0Y29sb3I6ICRURVhUX0NPTE9SX0xJR0hUO1xuXHR0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuXHRib3JkZXItcmFkaXVzOiAkQk9SREVSX1JBRElVUztcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmVnZy1jb250YWluZXIgLmVnZy1pbWFnZS1wbGFjZWhvbGRlcjo6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogNTAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAwZGVnLCAkVEVYVF9DT0xPUl9EQVJLLCB0cmFuc3BhcmVudCk7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHR6LWluZGV4OiAxO1xufVxuXG4uZWdnLWNvbnRhaW5lciAuZWdnLWhldGNoaW5nLXByb2dyZXNzIHtcblx0ei1pbmRleDogMjtcbn1cblxuLy8gRUdHIEZVTkRJTkcgUFJPQ0VTUyBERVRBSUxTXG4uZWdnLWNvbnRhaW5lciAuZWdnLWhldGNoaW5nLXN0YXRpc3RpY3Mge1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHotaW5kZXg6IDEwO1xufVxuXG4uZWdnLWNvbnRhaW5lciAgLmVnZy1oZXRjaC1zdGF0dXMsXG4uZWdnLWNvbnRhaW5lciAuZWdnLWhldGNoaW5nLXN0YXRpc3RpY3Mgc3BhbiB7XG5cdGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xuXHRjb2xvcjogJFRFWFRfQ09MT1JfTElHSFQ7XG59XG4uZWdnLWNvbnRhaW5lciAuZWdnLWhldGNoaW5nLXN0YXRpc3RpY3Mgc3Bhbixcbi5lZ2ctY29udGFpbmVyIC5lZ2ctaGV0Y2hpbmctc3RhdGlzdGljcyBiIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLy8gSEVUQ0hJTkcgUFJPR1JFU1MgQkFSXG4uZWdnLWNvbnRhaW5lciAuaGV0Y2gtcHJvZ3Jlc3Mge1xuXHRoZWlnaHQ6IDRweDtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRCQUNLR1JPVU5EX0NPTE9SLCAuNik7XG5cdGJvcmRlci1yYWRpdXM6ICRCT1JERVJfUkFESVVTO1xuXHRtYXJnaW4tdG9wOiAkUEFERElOR19TTUFMTDtcbn1cblxuLmVnZy1jb250YWluZXIgLmhldGNoLXByb2dyZXNzIC5oZXRjaC1wcm9ncmVzcy10b3RhbCB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDgwJTtcblx0Ym9yZGVyLXJhZGl1czogJEJPUkRFUl9SQURJVVM7XG5cdGJhY2tncm91bmQ6ICRURVhUX0NPTE9SX0xJR0hUO1xufVxuXG4uZWdnLWNvbnRhaW5lciAuZWdnLWRldGFpbHMge1xuXHRwYWRkaW5nOiAkUEFERElORztcbn1cblxuLmVnZy1jb250YWluZXIgLmVnZy1kZXRhaWxzIC5lZ2ctdGl0bGUge1xuXHRmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcblx0Zm9udC1mYW1pbHk6ICRIRUFERVJfRk9OVF9GQU1JTFkgIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xufVxuXG4uZWdnLWNvbnRhaW5lciAuZWdnLWRldGFpbHMgLmVnZy1jYXRlZ29yeSB7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGxldHRlci1zcGFjaW5nOiAycHg7XG5cdGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 241:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 116, vars: 0, consts: [[1, "footer-container"], [1, "footer-categories"], ["href", "", 1, "footer-category"], [1, "footer-links"], [1, "footer-links-category"], [1, "category-title"], [1, "category-links"], ["href", "", 1, "category-link"], [1, "category-title", "more"], [1, "footer-currency-selector-socials"], [1, "select"], ["id", "standard-select"], ["value", "Option 1"], ["value", "Option 2"], [1, "socials"], ["href", "", 1, "attribution"], ["src", "assets/icon.svg", "alt", "Site Logo"], ["title", "All copyrights reserved Hetchfund.Capital of Nextify Technologies (Pty) Ltd"], ["href", ""], ["name", "logo-facebook"], ["name", "logo-instagram"], ["name", "logo-twitter"], ["name", "logo-youtube"], [1, "footer-categories", "legal-documentation-links"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Comics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Craft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Publishing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3)(23, "div", 4)(24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6)(27, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Our purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Collected statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Eggs press");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "About company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4)(38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6)(41, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Rules and Regulations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Helpcenter and Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Curator resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Our branding assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4)(50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6)(53, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Hetchfund.Capital vs. Competitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Credit card payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cyptocurrency payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Curator resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Funds calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9)(66, "div", 10)(67, "select", 11)(68, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Bitcoin (BTC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Etherium (ETH)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "South African Rand (ZAR)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Amerian Dollar (USD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Litecoin (LTC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Cardano (ADA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Polkadot (DOT)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Bitcoin Cash (BCH)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Stellar (XLM)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Dogecoin (DOGE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Binance Coin (BNB)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 14)(91, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Hetchfund.Capital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 23)(104, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Terms and Usage conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Security, Trust and Safety");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Cookie Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Refund Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Intellectual Property Rights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon], styles: [".footer-container[_ngcontent-%COMP%] {\n  display: block;\n  border-top: 2px solid #000000;\n  background-color: #FFFFFF;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-categories[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid #000000;\n  border-color: #EEE;\n  position: relative;\n  padding: 20px 100px;\n}\n.footer-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  height: 10px;\n  width: 100%;\n  position: absolute;\n  background-image: url(\"/assets/bottom-liner.svg\");\n  background-repeat: no-repeat;\n  transform: translateY(-100%);\n  background-size: cover;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: small !important;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 20px 100px;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-links-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  margin: 20px 0;\n  font-size: smaller !important;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-links-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%], .footer-container[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-links-category[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .footer-links-category[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: small !important;\n  padding: 10px 0;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-currency-selector-socials[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px 100px;\n  align-items: center;\n  justify-content: space-between;\n}\n.footer-container[_ngcontent-%COMP%]   .footer-currency-selector-socials[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.socials[_ngcontent-%COMP%]   .attribution[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n}\n.socials[_ngcontent-%COMP%]   .attribution[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .socials[_ngcontent-%COMP%]   .attribution[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: small !important;\n}\n.socials[_ngcontent-%COMP%]   .attribution[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n}\n.socials[_ngcontent-%COMP%]   .attribution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  border-radius: 0px;\n}\n.legal-documentation-links[_ngcontent-%COMP%] {\n  border-top: 2px solid #000000;\n  border-color: #EEE;\n}\n.legal-documentation-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: none !important;\n  letter-spacing: normal !important;\n  font-weight: 500 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUFVQSxlQUFBO0FBU0EscUJBQUE7QUNoQkE7RUFDQyxjQUFBO0VBQ0EsNkJEa0JRO0VDakJSLHlCREUwQjtBQ0QzQjtBQUdBO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0RTUTtFQ1JSLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFEO0FBR0E7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUFEO0FBR0E7RUFDQywyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQUQ7QUFJQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFERDtBQUlBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFERDtBQUlBOztFQUVDLHlCQUFBO0FBREQ7QUFJQTtFQUNDLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFERDtBQU1BO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUhEO0FBTUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTRHhEUztBQ3FEVjtBQU1BO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0Q3RGU7RUM4RGYscUJBQUE7QUFIRDtBQU1BOztFQUVDLDJCQUFBO0FBSEQ7QUFNQTtFQUNDLDhCQUFBO0FBSEQ7QUFNQTtFQUNDLFlBQUE7RUFDQSxrQkR6RWU7QUNzRWhCO0FBT0E7RUFDQyw2QkRoRlE7RUNpRlIsa0JBQUE7QUFKRDtBQU9BO0VBQ0MsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FBSkQiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ09MT1JTICovXG5cbiRQUklNQVJZX1RIRU1FX0NPTE9SOiB0b21hdG87XG4kU0VDT05EQVJZX1RIRU1FX0NPTE9SOiAjMDAwMDAwO1xuJFRFWFRfQ09MT1JfREFSSzogJFNFQ09OREFSWV9USEVNRV9DT0xPUjsgLy8xNjIzMjhcbiRURVhUX0NPTE9SX0xJR0hUOiAjZmZmZmZmO1xuJEFOQ0hPUl9DT0xPUjogJFBSSU1BUllfVEhFTUVfQ09MT1I7XG4kQkFDS0dST1VORF9DT0xPUjogI2YwZjBmMDtcbiRCQUNLR1JPVU5EX0NPTE9SX0xJR0hURVI6ICNGRkZGRkY7XG5cbi8qIFRZUE9HUkFQSFkgKi9cblxuJFRFWFRfRk9OVF9GQU1JTFk6IFwiUm9ib3RvXCIsIEhlbHZhdGljYSwgc2Fucy1zZXJpZiwgc3lzdGVtO1xuJEhFQURFUl9GT05UX0ZBTUlMWTogXCJQdWJsaWNvXCIsIEdlb3JnaWEsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIHN5c3RlbTtcbiRURVhUX0ZPTlRfU0laRTogMThweDtcbiRURVhUX0ZPTlRfU0laRV9TTUFMTDogMTVweDtcbiRIRUFERVJfRk9OVF9TSVpFOiA0MnB4O1xuJFRFWFRfREVDT1JBVElPTjogdW5kZXJsaW5lO1xuXG4vKiBTSEFQRVMgQU5EIFNJWkVTICovXG5cbiRQQURESU5HOiAyMHB4O1xuJFBBRERJTkdfU01BTEw6IDEwcHg7XG4kQk9SREVSOiAycHggc29saWQgJFNFQ09OREFSWV9USEVNRV9DT0xPUjtcbiRCT1JERVJfVEhJTjogMXB4IHNvbGlkICNFRUU7XG4kQk9SREVSX1JBRElVUzogMHB4O1xuJFBBR0VfTUFSR0lOUzogMTUlO1xuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIEZPT1RFUiBDT05UQUlORVJcbi5mb290ZXItY29udGFpbmVyIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJvcmRlci10b3A6ICRCT1JERVI7XG5cdGJhY2tncm91bmQtY29sb3I6ICRCQUNLR1JPVU5EX0NPTE9SX0xJR0hURVI7XG59XG5cbi8vIENBVEVHT1JJRVMgT0YgVE9QSUNTIE9OIFRIRSBGT09URVJcbi5mb290ZXItY29udGFpbmVyIC5mb290ZXItY2F0ZWdvcmllcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLWJvdHRvbTogJEJPUkRFUjtcblx0Ym9yZGVyLWNvbG9yOiAjRUVFO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6ICRQQURESU5HIDEwMHB4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lcjo6YmVmb3JlIHtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogMTBweDtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9ib3R0b20tbGluZXIuc3ZnXCIpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLWNhdGVnb3JpZXMgYSB7XG5cdGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4vLyBGT09URVIgTElOS1Ncbi5mb290ZXItY29udGFpbmVyIC5mb290ZXItbGlua3Mge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRwYWRkaW5nOiAkUEFERElORyAxMDBweDtcbn1cblxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1saW5rcyAuZm9vdGVyLWxpbmtzLWNhdGVnb3J5IC5jYXRlZ29yeS10aXRsZSB7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdG1hcmdpbjogJFBBRERJTkcgMDtcblx0Zm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXItbGlua3MgLmZvb3Rlci1saW5rcy1jYXRlZ29yeSAuY2F0ZWdvcnktdGl0bGUsXG4uZm9vdGVyLWNvbnRhaW5lciAuZm9vdGVyLWxpbmtzIC5mb290ZXItbGlua3MtY2F0ZWdvcnkgYSB7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXItbGlua3MgLmZvb3Rlci1saW5rcy1jYXRlZ29yeSBhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcblx0cGFkZGluZzogJFBBRERJTkdfU01BTEwgMDtcblx0Ly8gZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLy8gRk9PVEVSIFNPQ0lBTFMgQU5EIENVUlJFTkNZIFNFTEVDVElPTlxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1jdXJyZW5jeS1zZWxlY3Rvci1zb2NpYWxzIHtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZzogJFBBRERJTkcgMTAwcHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci1jdXJyZW5jeS1zZWxlY3Rvci1zb2NpYWxzIC5zb2NpYWxzIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAkUEFERElORztcbn1cblxuLnNvY2lhbHMgLmF0dHJpYnV0aW9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAkUEFERElOR19TTUFMTDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc29jaWFscyAuYXR0cmlidXRpb24gc3Bhbixcbi5zb2NpYWxzIC5hdHRyaWJ1dGlvbiBiIHtcblx0Zm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xufVxuXG4uc29jaWFscyAuYXR0cmlidXRpb24gc3BhbiB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbHMgLmF0dHJpYnV0aW9uIGltZyB7XG5cdGhlaWdodDogMjVweDtcblx0Ym9yZGVyLXJhZGl1czogJEJPUkRFUl9SQURJVVM7XG59XG5cbi8vIExFR0FMIERPQ1VNRU5UQVRJT05cbi5sZWdhbC1kb2N1bWVudGF0aW9uLWxpbmtzIHtcblx0Ym9yZGVyLXRvcDogJEJPUkRFUjtcblx0Ym9yZGVyLWNvbG9yOiAjRUVFO1xufVxuXG4ubGVnYWwtZG9jdW1lbnRhdGlvbi1saW5rcyBhIHtcblx0dGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcblx0bGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ 3883:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HeaderComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 25, vars: 0, consts: [[1, "header-container"], [1, "header-nav-items", "secondary-nav-items"], ["href", ""], [1, "header-nav-item"], [1, "header-nav-logo"], ["src", "/assets/icon.svg", "alt", "Logo"], [1, "header-nav-items"], ["href", "/helpcenter"], ["href", "/onboarding"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Browse Eggs Farm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search For Eggs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "a", 2)(10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "a", 7)(14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7)(17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7)(20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8)(23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".header-container[_ngcontent-%COMP%] {\n  padding: 30px 80px;\n  border-bottom: 1.5px solid #ddd;\n  background: white;\n  position: fixed;\n  width: 100%;\n  z-index: 100000;\n  font-family: sans-serif, \"Roboto\", Helvatica, sans-serif, system !important;\n}\n.header-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.header-container[_ngcontent-%COMP%], .header-nav-items[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.header-nav-items[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header-nav-items[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 30px;\n}\n.header-nav-items[_ngcontent-%COMP%]   .header-nav-item[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.header-nav-items[_ngcontent-%COMP%]   .header-nav-item.secondary-nav-items[_ngcontent-%COMP%] {\n  justify-self: left;\n}\n.header-nav-items[_ngcontent-%COMP%]   .header-nav-item[_ngcontent-%COMP%] {\n  text-transform: none;\n}\n.header-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: 0px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUFVQSxlQUFBO0FBU0EscUJBQUE7QUNqQkE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyRUFBQTtBQUVGO0FBQ0E7RUFDRSwwQkFBQTtBQUVGO0FBQ0E7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFRjtBQUNBO0VBQ0UseUJBQUE7QUFFRjtBQUVBO0VBQ0Usa0JBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFHRSxvQkFBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0Esa0JEM0JjO0VDNEJkLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBQURGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENPTE9SUyAqL1xuXG4kUFJJTUFSWV9USEVNRV9DT0xPUjogdG9tYXRvO1xuJFNFQ09OREFSWV9USEVNRV9DT0xPUjogIzAwMDAwMDtcbiRURVhUX0NPTE9SX0RBUks6ICRTRUNPTkRBUllfVEhFTUVfQ09MT1I7IC8vMTYyMzI4XG4kVEVYVF9DT0xPUl9MSUdIVDogI2ZmZmZmZjtcbiRBTkNIT1JfQ09MT1I6ICRQUklNQVJZX1RIRU1FX0NPTE9SO1xuJEJBQ0tHUk9VTkRfQ09MT1I6ICNmMGYwZjA7XG4kQkFDS0dST1VORF9DT0xPUl9MSUdIVEVSOiAjRkZGRkZGO1xuXG4vKiBUWVBPR1JBUEhZICovXG5cbiRURVhUX0ZPTlRfRkFNSUxZOiBcIlJvYm90b1wiLCBIZWx2YXRpY2EsIHNhbnMtc2VyaWYsIHN5c3RlbTtcbiRIRUFERVJfRk9OVF9GQU1JTFk6IFwiUHVibGljb1wiLCBHZW9yZ2lhLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBzeXN0ZW07XG4kVEVYVF9GT05UX1NJWkU6IDE4cHg7XG4kVEVYVF9GT05UX1NJWkVfU01BTEw6IDE1cHg7XG4kSEVBREVSX0ZPTlRfU0laRTogNDJweDtcbiRURVhUX0RFQ09SQVRJT046IHVuZGVybGluZTtcblxuLyogU0hBUEVTIEFORCBTSVpFUyAqL1xuXG4kUEFERElORzogMjBweDtcbiRQQURESU5HX1NNQUxMOiAxMHB4O1xuJEJPUkRFUjogMnB4IHNvbGlkICRTRUNPTkRBUllfVEhFTUVfQ09MT1I7XG4kQk9SREVSX1RISU46IDFweCBzb2xpZCAjRUVFO1xuJEJPUkRFUl9SQURJVVM6IDBweDtcbiRQQUdFX01BUkdJTlM6IDE1JTtcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHggODBweDtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2RkZDtcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCAkVEVYVF9GT05UX0ZBTUlMWSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciAqIHtcbiAgZm9udC1zaXplOiAkVEVYVF9GT05UX1NJWkVfU01BTEwgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1jb250YWluZXIsXG4uaGVhZGVyLW5hdi1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlci1jb250YWluZXIgYSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8vIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi5oZWFkZXItbmF2LWl0ZW1zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyLW5hdi1pdGVtczpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmhlYWRlci1uYXYtaXRlbXMgLmhlYWRlci1uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAgJFBBRERJTkdfU01BTEw7XG59XG5cbi5oZWFkZXItbmF2LWl0ZW1zIC5oZWFkZXItbmF2LWl0ZW0uc2Vjb25kYXJ5LW5hdi1pdGVtcyB7XG4gIGp1c3RpZnktc2VsZjogbGVmdDtcbn1cblxuLmhlYWRlci1uYXYtaXRlbXMgLmhlYWRlci1uYXYtaXRlbSB7XG4gIC8vIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbiAgLy8gZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmhlYWRlci1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAkQk9SREVSX1JBRElVUztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map