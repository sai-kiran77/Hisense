"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_new-launches_new-launches_module_ts"],{

/***/ 3802:
/*!**************************************************************!*\
  !*** ./src/app/pages/new-launches/new-launches.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewLaunchesComponent": () => (/* binding */ NewLaunchesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function NewLaunchesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "a", 10)(2, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "source", 11)(4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("srcset", slide_r1.desktop_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", slide_r1.mobile_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class NewLaunchesComponent {
    constructor(state) {
        this.state = state;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.slides = [
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/1.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/1.webp`
            },
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/2.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/2.webp`
            },
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/3.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/3.webp`
            },
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/4.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/4.webp`
            }
        ];
        this.state.mobileNavToggle.next(false);
    }
    ngOnInit() {
        setTimeout(() => {
            let swiper = new Swiper(".mySwiperHome", {
                slidesPerView: 1,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                autoplay: {
                    delay: 6000,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        });
    }
}
NewLaunchesComponent.ɵfac = function NewLaunchesComponent_Factory(t) { return new (t || NewLaunchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__.GlobalStateService)); };
NewLaunchesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewLaunchesComponent, selectors: [["app-new-launches"]], decls: 9, vars: 1, consts: [[1, "main-visual", "slider", "slick-initialized", "slick-slider", "slick-dotted"], [1, "slick-list", "draggable"], [1, "slick-track"], [1, "swiper", "mySwiperHome"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-pagination"], [1, "swiper-slide"], [2, "width", "100%"], ["media", "(min-width:768px)", 3, "srcset"], [1, "ls-bg", 2, "width", "100%", 3, "src"]], template: function NewLaunchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NewLaunchesComponent_div_5_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".ls-bg {\n  cursor: pointer;\n}\n\n.get__started__btn {\n  position: absolute;\n  bottom: 15px;\n  padding: 1rem 2rem;\n  z-index: 100;\n  right: 20%;\n  background: #FF9E06;\n  background: linear-gradient(to bottom right, #FF9E06, #50C138);\n  border: none;\n  outline: none;\n  border-radius: 8px;\n  font-size: 3rem;\n  cursor: pointer;\n  color: white;\n  transition: background 300ms ease-in-out;\n}\n\n.get__started__btn:hover {\n  /* Created with https://www.css-gradient.com */\n  background: #FF9C01;\n  background: linear-gradient(to bottom right, #FF9C01, #FFA501);\n}\n\n@media screen and (max-width: 768px) {\n  .get__started__btn {\n    display: none;\n  }\n}\n\n.swiper-pagination-bullet {\n  color: #09cbc6 !important;\n  border: none !important;\n  width: 10px !important;\n  height: 10px !important;\n  outline: none !important;\n  margin: 7px !important;\n  border-radius: 50% !important;\n  background: transparent !important;\n  border: 2px solid #09cbc6 !important;\n  transition: background-color 500ms !important;\n  cursor: pointer !important;\n}\n\n.swiper-pagination-bullet::before {\n  display: none !important;\n}\n\n.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background: #00AAA6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1sYXVuY2hlcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTYWklMjBLaXJhblxcRG9jdW1lbnRzXFxoaXNlbnNlXFxzcmNcXGFwcFxccGFnZXNcXG5ldy1sYXVuY2hlc1xcbmV3LWxhdW5jaGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsOERBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURDSTtFQUNJLDhDQUFBO0VBQ0EsbUJBQUE7RUFHQSw4REFBQTtBQ0NSOztBREdBO0VBQ0k7SUFDSSxhQUFBO0VDQU47QUFDRjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsMEJBQUE7QUNGSjs7QURJSTtFQUNJLHdCQUFBO0FDRlI7O0FEU0E7RUFDSSw4QkFBQTtBQ05KIiwiZmlsZSI6Im5ldy1sYXVuY2hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5scy1iZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5nZXRfX3N0YXJ0ZWRfX2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICByaWdodDogMjAlO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOUUwNjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNGRjlFMDYsICM1MEMxMzgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLyogQ3JlYXRlZCB3aXRoIGh0dHBzOi8vd3d3LmNzcy1ncmFkaWVudC5jb20gKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkY5QzAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjRkY5QzAxLCAjRkZBNTAxKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgI0ZGOUMwMSwgI0ZGQTUwMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI0ZGOUMwMSwgI0ZGQTUwMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZ2V0X19zdGFydGVkX19idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5jYXJvdXNlbC1uYXYtLWJ0biB7XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgY29sb3I6ICMwOWNiYzYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA3cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwOWNiYzYgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAuY3VycmVudC1idG4ge1xyXG4vLyAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcclxuLy8gfVxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG59IiwiLmxzLWJnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ2V0X19zdGFydGVkX19idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB6LWluZGV4OiAxMDA7XG4gIHJpZ2h0OiAyMCU7XG4gIGJhY2tncm91bmQ6ICNGRjlFMDY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNGRjlFMDYsICM1MEMxMzgpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzMDBtcyBlYXNlLWluLW91dDtcbn1cbi5nZXRfX3N0YXJ0ZWRfX2J0bjpob3ZlciB7XG4gIC8qIENyZWF0ZWQgd2l0aCBodHRwczovL3d3dy5jc3MtZ3JhZGllbnQuY29tICovXG4gIGJhY2tncm91bmQ6ICNGRjlDMDE7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjRkY5QzAxLCAjRkZBNTAxKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICNGRjlDMDEsICNGRkE1MDEpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRkY5QzAxLCAjRkZBNTAxKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmdldF9fc3RhcnRlZF9fYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgY29sb3I6ICMwOWNiYzYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDljYmM2ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0OjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwMEFBQTYgIWltcG9ydGFudDtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 2532:
/*!***********************************************************!*\
  !*** ./src/app/pages/new-launches/new-launches.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewLaunchesModule": () => (/* binding */ NewLaunchesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _new_launches_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-launches.component */ 3802);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _new_launches_component__WEBPACK_IMPORTED_MODULE_0__.NewLaunchesComponent
    }
];
class NewLaunchesModule {
}
NewLaunchesModule.ɵfac = function NewLaunchesModule_Factory(t) { return new (t || NewLaunchesModule)(); };
NewLaunchesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NewLaunchesModule });
NewLaunchesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewLaunchesModule, { declarations: [_new_launches_component__WEBPACK_IMPORTED_MODULE_0__.NewLaunchesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-launches_new-launches_module_ts.js.map