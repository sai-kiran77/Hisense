"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_contest-terms-and-conditions_contest-terms-and-conditions_module_ts"],{

/***/ 9426:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/contest-terms-and-conditions/contest-terms-and-conditions.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestTermsAndConditionsComponent": () => (/* binding */ ContestTermsAndConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function (a0) { return { "active": a0 }; };
function ContestTermsAndConditionsComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContestTermsAndConditionsComponent_a_6_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const obj_r6 = restoredCtx.$implicit; const i_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.changeTab(obj_r6, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, obj_r6.tab_name == ctx_r0.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r6.tab_name);
} }
function ContestTermsAndConditionsComponent_h1_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.metaData[ctx_r1.currentIndex].heading);
} }
function ContestTermsAndConditionsComponent_h2_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.metaData[ctx_r2.currentIndex] == null ? null : ctx_r2.metaData[ctx_r2.currentIndex].sub_heading);
} }
function ContestTermsAndConditionsComponent_h3_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r3.metaData[ctx_r3.currentIndex] == null ? null : ctx_r3.metaData[ctx_r3.currentIndex].date_range, ")");
} }
function ContestTermsAndConditionsComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.metaData[ctx_r4.currentIndex] == null ? null : ctx_r4.metaData[ctx_r4.currentIndex].content_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContestTermsAndConditionsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r5.metaData[ctx_r5.currentIndex] == null ? null : ctx_r5.metaData[ctx_r5.currentIndex].content_text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class ContestTermsAndConditionsComponent {
    constructor(state, api, title) {
        this.state = state;
        this.api = api;
        this.title = title;
        // currentTab = 'TH'
        this.metaData = [];
        this.currentIndex = 0;
        this.title.setTitle('Hisense India | TERMS AND CONDITIONS');
        this.state.mobileNavToggle.next(false);
    }
    changeTab(obj, i) {
        this.currentTab = obj.tab_name;
        this.currentIndex = i;
    }
    ngOnInit() {
        this.getSlides();
    }
    getSlides() {
        this.api.getPageSlides({ pageUrl: '/terms-and-conditions' }).subscribe({
            next: (res) => {
                // console.log(res);
                this.metaData = res.data.terms_and_conditions;
                this.currentTab = this.metaData[0].tab_name;
            },
            error: (err) => {
            }
        });
    }
}
ContestTermsAndConditionsComponent.ɵfac = function ContestTermsAndConditionsComponent_Factory(t) { return new (t || ContestTermsAndConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
ContestTermsAndConditionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContestTermsAndConditionsComponent, selectors: [["app-contest-terms-and-conditions"]], decls: 15, vars: 6, consts: [[1, "breadcrumb__yellow__banner"], [1, "container"], [1, "col1"], ["id", "themeslist", 1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col2"], [4, "ngIf"], ["alt", "content image", 3, "src", 4, "ngIf"], [1, "terms__and__conditions__context__text"], ["style", "word-break:break-all;", 3, "innerHTML", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], ["alt", "content image", 3, "src"], [2, "word-break", "break-all", 3, "innerHTML"]], template: function ContestTermsAndConditionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "TERMS AND CONDITIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ContestTermsAndConditionsComponent_a_6_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ContestTermsAndConditionsComponent_h1_9_Template, 2, 1, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ContestTermsAndConditionsComponent_h2_10_Template, 2, 1, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ContestTermsAndConditionsComponent_h3_11_Template, 2, 1, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ContestTermsAndConditionsComponent_img_12_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ContestTermsAndConditionsComponent_div_14_Template, 1, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.metaData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.metaData[ctx.currentIndex] == null ? null : ctx.metaData[ctx.currentIndex].heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.metaData[ctx.currentIndex] == null ? null : ctx.metaData[ctx.currentIndex].sub_heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.metaData[ctx.currentIndex] == null ? null : ctx.metaData[ctx.currentIndex].date_range);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.metaData[ctx.currentIndex] == null ? null : ctx.metaData[ctx.currentIndex].content_image_full_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.metaData[ctx.currentIndex] == null ? null : ctx.metaData[ctx.currentIndex].content_text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".page__section[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n\n.page__cover[_ngcontent-%COMP%] {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #202020;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n\n.page__section_centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 0;\n}\n\n.page__container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 740px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.page__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 60px;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\np[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  font-size: 15px;\n  font-weight: 400;\n}\n\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style: disc !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  padding-top: 100px;\n  padding-bottom: 80px;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n}\n\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.col2[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background-color: #fff;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\np[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 16px;\n}\n\n.page__section[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n\n.page__cover[_ngcontent-%COMP%] {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #202020;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n\n.page__section_centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 0;\n}\n\n.page__container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 740px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  padding-top: 100px;\n  padding-bottom: 80px;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.col2[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .col1[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    \n    \n    \n    \n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 10px;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  .list-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\np[_ngcontent-%COMP%] {\n  margin: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlc3QtdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxjb250ZXN0LXRlcm1zLWFuZC1jb25kaXRpb25zXFxjb250ZXN0LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FER0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTs7RUFFSSwyQkFBQTtBQ0RKOztBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFFQSxrQkFBQTtBQ0hKOztBRE9BO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUNKSjs7QURTQTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FDUEo7O0FEVUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRGdCQTs7O0VBR0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDYko7O0FEZ0JBO0VBQ0ksY0FBQTtBQ2JKOztBRGdCQTtFQUNJLGdCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksV0FBQTtFQUVBLGVBQUE7QUNkSjs7QURpQkE7RUFDSSxnQkFBQTtBQ2RKOztBRGlCQTtFQUNJLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2RKOztBRGlCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNkSjs7QURpQkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDZEo7O0FEa0JBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ2ZKOztBRGtCQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FDZko7O0FEa0JBO0VBQ0ksV0FBQTtFQUVBLG9DQUFBO0VBQ0EsZ0NBQUE7QUNoQko7O0FEb0JBO0VBQ0k7SUFDSSwwQkFBQTtFQ2pCTjs7RURvQkU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUVBLFVBQUE7SUFLQSxVQUFBO0lBS0EsV0FBQTtJQUtBLG9CQUFBO0VDOUJOO0VEZ0JNO0lBQ0ksWUFBQTtFQ2RWO0VEa0JNO0lBQ0ksbUJBQUE7RUNoQlY7RURvQk07SUFDSSxnQkFBQTtFQ2xCVjtFRHNCTTtJQUNJLGdCQUFBO0VDcEJWOztFRHdCRTtJQUNJLG1CQUFBO0VDckJOO0FBQ0Y7O0FEd0JBO0VBQ0ksd0JBQUE7QUN0QkoiLCJmaWxlIjoiY29udGVzdC10ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlX19zZWN0aW9uIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5wYWdlX19jb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYWdlX19zZWN0aW9uX2NlbnRlcmVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbn1cclxuXHJcbi5wYWdlX19jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucGFnZV9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5cclxudWwsXHJcbmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IGRpc2MgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jb2wxIGEge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxufVxyXG5cclxuLmNvbDIge1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkZBNEU3ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxufVxyXG5cclxuLy8gLnZjX3JvdyB7XHJcbi8vICAgICBkaXNwbGF5OiBncmlkO1xyXG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4vLyAgICAgZ2FwOiAxLjVyZW07XHJcbi8vIH1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxucCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucGFnZV9fc2VjdGlvbiB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4ucGFnZV9fY292ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGFnZV9fc2VjdGlvbl9jZW50ZXJlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG59XHJcblxyXG4ucGFnZV9fY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3NDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNvbDEgYSB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxufVxyXG5cclxuLmNvbDIge1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkZBNEU3ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wxIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gICAgICAgIC8qIHdpZHRoICovXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBUcmFjayAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEhhbmRsZSAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAxMDBweCAhaW1wb3J0YW50O1xyXG59IiwiLnBhZ2VfX3NlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xufVxuXG4ucGFnZV9fY292ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wYWdlX19zZWN0aW9uX2NlbnRlcmVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogODBweCAwO1xufVxuXG4ucGFnZV9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzQwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLnBhZ2VfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG5wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG51bCxcbmxpIHtcbiAgbGlzdC1zdHlsZTogZGlzYyAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdhcDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbi5saXN0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sMSBhIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cblxuLmNvbDIge1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAyLjVyZW07XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxucCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wYWdlX19zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogNTB2aDtcbn1cblxuLnBhZ2VfX2NvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFnZV9fc2VjdGlvbl9jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMDtcbn1cblxuLnBhZ2VfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc0MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgZ2FwOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2wxIGEge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uY29sMiB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmNvbDEge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAvKiB3aWR0aCAqL1xuICAgIC8qIFRyYWNrICovXG4gICAgLyogSGFuZGxlICovXG4gICAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gIH1cbiAgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cbiAgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIC5jb2wxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzg4ODtcbiAgfVxuICAuY29sMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NTU7XG4gIH1cblxuICAubGlzdC1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxucCB7XG4gIG1hcmdpbjogMTAwcHggIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 8070:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/contest-terms-and-conditions/contest-terms-and-conditions.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContestTermsAndConditionsModule": () => (/* binding */ ContestTermsAndConditionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _contest_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contest-terms-and-conditions.component */ 9426);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _contest_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__.ContestTermsAndConditionsComponent
    }
];
class ContestTermsAndConditionsModule {
}
ContestTermsAndConditionsModule.ɵfac = function ContestTermsAndConditionsModule_Factory(t) { return new (t || ContestTermsAndConditionsModule)(); };
ContestTermsAndConditionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContestTermsAndConditionsModule });
ContestTermsAndConditionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContestTermsAndConditionsModule, { declarations: [_contest_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_0__.ContestTermsAndConditionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_contest-terms-and-conditions_contest-terms-and-conditions_module_ts.js.map