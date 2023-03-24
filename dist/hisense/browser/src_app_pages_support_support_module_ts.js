"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 7364:
/*!****************************************************!*\
  !*** ./src/app/pages/support/support.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportComponent": () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class SupportComponent {
    constructor(state, title) {
        this.state = state;
        this.title = title;
        this.state.mobileNavToggle.next(false);
        this.title.setTitle('Hisense India | Support');
    }
    ngOnInit() {
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title)); };
SupportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 45, vars: 0, consts: [[1, "page"], [1, "breadcrumb__yellow__banner"], [1, "row", "support__container"], [1, "card"], [1, "card-image"], ["src", "assets/t_and_c.png", "alt", "Terms and conditions"], [1, "card-content"], [1, "actions"], ["routerLink", "/terms-and-conditions", 1, "btn-hisense-v2"], ["src", "assets/support.png", "alt", "Contact us"], ["routerLink", "/contact-us", 1, "btn-hisense-v2"], ["src", "assets/offers.png", "alt", "Warranty Information"], ["routerLink", "/warranty-information", 1, "btn-hisense-v2"], [1, "card-image", 2, "min-height", "258px"], ["src", "assets/e-waste.svg", "alt", "E-Waste", 2, "width", "100px", "height", "100px", "margin", "auto", "display", "block"], ["download", "", "href", "assets/E-waste_Management.pdf", "target", "_blank", 1, "btn-hisense-v2"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div")(6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "More Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div")(16, "div", 3)(17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7)(23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "More Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "div", 3)(27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6)(30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Warranty Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7)(33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "More Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div")(36, "div", 3)(37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 6)(40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "E-WASTE MANAGEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 7)(43, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".card[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 1rem 0;\n  background-color: #fff;\n  transition: box-shadow 0.25s;\n  border-radius: 2px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: 0 0 2px 2px;\n}\n\n.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.card[_ngcontent-%COMP%]   .card-action[_ngcontent-%COMP%] {\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  position: relative;\n  padding: 16px 24px;\n}\n\n.support__container[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px 0;\n  gap: 20px;\n  width: 80%;\n  margin: 32px auto;\n  flex: 1 1 33.33%;\n  justify-content: center;\n}\n\n.support__container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-align: center;\n}\n\n.support__container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n}\n\n.support__container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n.support__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-height: 250px;\n  max-height: 250px;\n  width: 100%;\n  object-fit: contain;\n}\n\n@media screen and (max-width: 768px) {\n  .support__container[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxzdXBwb3J0XFxzdXBwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUdBLDRCQUFBO0VBRUEsa0JBQUE7RUFDQSwrR0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FEQUk7RUFDSSxZQUFBO0FDRVI7O0FERUE7RUFDSSx5QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0NSOztBREVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0FSOztBREVRO0VBQ0ksWUFBQTtBQ0FaOztBRElJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRE1BO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsZUFBQTtFQ0hOO0FBQ0YiLCJmaWxlIjoic3VwcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IC4yNXM7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cztcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cywgLXdlYmtpdC1ib3gtc2hhZG93IC4yNXM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAxMiUpLCAwIDFweCA1cHggMCByZ2IoMCAwIDAgLyAyMCUpO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1hY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbn1cclxuXHJcbi5zdXBwb3J0X19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvO1xyXG4gICAgZmxleDogMSAxIDMzLjMzJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zdXBwb3J0X19jb250YWluZXIge1xyXG4gICAgICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxufVxyXG4iLCIuY2FyZCB7XG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAwLjI1cztcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IDAuMjVzO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzLCAtd2Via2l0LWJveC1zaGFkb3cgMC4yNXM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG59XG4uY2FyZCAuY2FyZC1jb250ZW50IHAge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkIC5jYXJkLWFjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xufVxuXG4uc3VwcG9ydF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGdhcDogMjBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAzMnB4IGF1dG87XG4gIGZsZXg6IDEgMSAzMy4zMyU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnN1cHBvcnRfX2NvbnRhaW5lciBwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN1cHBvcnRfX2NvbnRhaW5lciAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLnN1cHBvcnRfX2NvbnRhaW5lciAuYWN0aW9ucyBhIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLnN1cHBvcnRfX2NvbnRhaW5lciBpbWcge1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3VwcG9ydF9fY29udGFpbmVyIHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 2602:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportModule": () => (/* binding */ SupportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.component */ 7364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _support_component__WEBPACK_IMPORTED_MODULE_0__.SupportComponent
    }
];
class SupportModule {
}
SupportModule.ɵfac = function SupportModule_Factory(t) { return new (t || SupportModule)(); };
SupportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SupportModule });
SupportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupportModule, { declarations: [_support_component__WEBPACK_IMPORTED_MODULE_0__.SupportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_support_support_module_ts.js.map