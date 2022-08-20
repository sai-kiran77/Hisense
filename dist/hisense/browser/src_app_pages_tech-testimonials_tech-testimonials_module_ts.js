"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_tech-testimonials_tech-testimonials_module_ts"],{

/***/ 3688:
/*!************************************************************************!*\
  !*** ./src/app/pages/tech-testimonials/tech-testimonials.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechTestimonialsComponent": () => (/* binding */ TechTestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function TechTestimonialsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 9)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 11)(8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 15)(13, "div", 9)(14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "iframe", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const obj_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.getVideoLink(obj_r1.youtube_url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
} }
class TechTestimonialsComponent {
    constructor(state, sanitizer, api) {
        this.state = state;
        this.sanitizer = sanitizer;
        this.api = api;
        this.testimonials = [];
        this.state.mobileNavToggle.next(false);
    }
    ngOnInit() {
        this.api.getTechTestimonials().subscribe({
            next: (res) => {
                console.log(res);
                this.testimonials = res.data;
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
    getVideoLink(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
TechTestimonialsComponent.ɵfac = function TechTestimonialsComponent_Factory(t) { return new (t || TechTestimonialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
TechTestimonialsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TechTestimonialsComponent, selectors: [["app-tech-testimonials"]], decls: 8, vars: 1, consts: [[1, "page__cover", "page__section", "page__section_centered"], [1, "page__cover-inner", "desktop-banner", 2, "background-color", "rgb(32, 32, 32)", "transform", "translateY(0px)"], [1, "page__cover-inner", "mobile-banner", 2, "background-color", "rgb(32, 32, 32)", "transform", "translateY(0px)"], [1, "page__container"], [1, "page__title"], [1, "container"], ["class", "wpb_column vc_column_container vc_col-sm-6", 4, "ngFor", "ngForOf"], [1, "wpb_column", "vc_column_container", "vc_col-sm-6"], [1, "vc_column-inner"], [1, "wpb_wrapper"], [1, "wpb_text_column", "wpb_content_element", "vc_custom_1643340962550"], [1, "vc_separator", "wpb_content_element", "vc_separator_align_center", "vc_sep_width_100", "vc_sep_pos_align_center", "vc_separator_no_text", "vc_sep_color_black", "vc_custom_1601664164113", "vc_custom_1601664164113"], [1, "vc_sep_holder", "vc_sep_holder_l"], [1, "vc_sep_line"], [1, "vc_sep_holder", "vc_sep_holder_r"], [1, "wpb_raw_code", "wpb_content_element", "wpb_raw_html", 2, "text-align", "center"], [1, "text-center-img"], ["title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function TechTestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "TECH TESTIMONIALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TechTestimonialsComponent_div_7_Template, 16, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.testimonials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.vc_row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n}\n\np[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #2a2a2a;\n  width: 100%;\n  margin-bottom: 8px;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.page__section[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n\n.page__cover[_ngcontent-%COMP%] {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #202020;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n\n.page__section_centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 0;\n}\n\n.page__container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 740px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.page__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 60px;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .page__title[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2gtdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGhpc2Vuc2VcXHNyY1xcYXBwXFxwYWdlc1xcdGVjaC10ZXN0aW1vbmlhbHNcXHRlY2gtdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFBQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksMEJBQUE7RUNDTjs7RURDRTtJQUNJLGVBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InRlY2gtdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi52Y19yb3d7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYTJhMmE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wYWdlX19zZWN0aW9ue1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLnBhZ2VfX2NvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhZ2VfX3NlY3Rpb25fY2VudGVyZWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDgwcHggMDtcclxufVxyXG5cclxuLnBhZ2VfX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNzQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wYWdlX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gICAgLnBhZ2VfX3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIH1cclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cblxuLnZjX3JvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxLjVyZW07XG59XG5cbnAge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmEyYTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWdlX19zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogNTB2aDtcbn1cblxuLnBhZ2VfX2NvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFnZV9fc2VjdGlvbl9jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMDtcbn1cblxuLnBhZ2VfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc0MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5wYWdlX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAucGFnZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 3358:
/*!*********************************************************************!*\
  !*** ./src/app/pages/tech-testimonials/tech-testimonials.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechTestimonialsModule": () => (/* binding */ TechTestimonialsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tech_testimonials_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tech-testimonials.component */ 3688);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _tech_testimonials_component__WEBPACK_IMPORTED_MODULE_0__.TechTestimonialsComponent
    }
];
class TechTestimonialsModule {
}
TechTestimonialsModule.ɵfac = function TechTestimonialsModule_Factory(t) { return new (t || TechTestimonialsModule)(); };
TechTestimonialsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TechTestimonialsModule });
TechTestimonialsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TechTestimonialsModule, { declarations: [_tech_testimonials_component__WEBPACK_IMPORTED_MODULE_0__.TechTestimonialsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class ApiService {
    constructor(http) {
        this.http = http;
        this.baseURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/v1`;
    }
    getSlugData(slugCategory, slugURL = '/categories/load-by-slug/') {
        return this.http.get(this.baseURL + slugURL + slugCategory);
    }
    getVarientData(varient, varientURL = '/product-variants/load-by-slug/') {
        return this.http.get(this.baseURL + varientURL + varient);
    }
    getPressCoverages(params, varientURL = '/press-coverages') {
        return this.http.get(this.baseURL + varientURL, {
            params
        });
    }
    postContactUsForm(body, endpoint = '/contact-requests') {
        return this.http.post(this.baseURL + endpoint, body);
    }
    signup(body, endpoint = '/delightful-india/register') {
        return this.http.post(this.baseURL + endpoint, body);
    }
    login(body, endpoint = '/delightful-india/login') {
        return this.http.post(this.baseURL + endpoint, body);
    }
    // ?username=email1_4788
    getHints(params, endpoint = '/delightful-india/hints') {
        return this.http.get(this.baseURL + endpoint, {
            params
        });
    }
    getTechTestimonials(endpoint = '/tech-testimonials') {
        return this.http.get(this.baseURL + endpoint);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_tech-testimonials_tech-testimonials_module_ts.js.map