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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




const _c0 = function (a0) { return { "active": a0 }; };
function ContestTermsAndConditionsComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContestTermsAndConditionsComponent_a_9_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const obj_r6 = restoredCtx.$implicit; const i_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.changeTab(obj_r6, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, obj_r6.tab_name == ctx_r0.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r6.tab_name);
} }
function ContestTermsAndConditionsComponent_h1_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.metaData[ctx_r1.currentIndex].heading);
} }
function ContestTermsAndConditionsComponent_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.metaData[ctx_r2.currentIndex] == null ? null : ctx_r2.metaData[ctx_r2.currentIndex].sub_heading);
} }
function ContestTermsAndConditionsComponent_h3_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx_r3.metaData[ctx_r3.currentIndex] == null ? null : ctx_r3.metaData[ctx_r3.currentIndex].date_range, ")");
} }
function ContestTermsAndConditionsComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.metaData[ctx_r4.currentIndex] == null ? null : ctx_r4.metaData[ctx_r4.currentIndex].content_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ContestTermsAndConditionsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r5.metaData[ctx_r5.currentIndex] == null ? null : ctx_r5.metaData[ctx_r5.currentIndex].content_text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class ContestTermsAndConditionsComponent {
    constructor(state, api) {
        this.state = state;
        this.api = api;
        // currentTab = 'TH'
        this.metaData = [];
        this.currentIndex = 0;
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
                console.log(res);
                this.metaData = res.data.terms_and_conditions;
                this.currentTab = this.metaData[0].tab_name;
            },
            error: (err) => {
            }
        });
    }
}
ContestTermsAndConditionsComponent.ɵfac = function ContestTermsAndConditionsComponent_Factory(t) { return new (t || ContestTermsAndConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
ContestTermsAndConditionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContestTermsAndConditionsComponent, selectors: [["app-contest-terms-and-conditions"]], decls: 18, vars: 6, consts: [[1, "page__cover", "page__section", "page__section_centered"], [1, "page__cover-inner", "desktop-banner", 2, "background-color", "rgb(32, 32, 32)", "transform", "translateY(0px)"], [1, "page__cover-inner", "mobile-banner", 2, "background-color", "rgb(32, 32, 32)", "transform", "translateY(0px)"], [1, "page__container"], [1, "page__title"], [1, "container"], [1, "col1"], ["id", "themeslist", 1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col2"], [4, "ngIf"], [3, "src", 4, "ngIf"], [1, "terms__and__conditions__context__text"], [3, "innerHTML", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [3, "src"], [3, "innerHTML"]], template: function ContestTermsAndConditionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "TERMS AND CONDITIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ContestTermsAndConditionsComponent_a_9_Template, 2, 4, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ContestTermsAndConditionsComponent_h1_12_Template, 2, 1, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ContestTermsAndConditionsComponent_h2_13_Template, 2, 1, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ContestTermsAndConditionsComponent_h3_14_Template, 2, 1, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ContestTermsAndConditionsComponent_img_15_Template, 1, 1, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ContestTermsAndConditionsComponent_div_17_Template, 1, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".page__section[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n\n.page__cover[_ngcontent-%COMP%] {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #202020;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n\n.page__section_centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 0;\n}\n\n.page__container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 740px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.page__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 60px;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\np[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  font-size: 15px;\n  font-weight: 400;\n}\n\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style: disc !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  padding-top: 100px;\n  padding-bottom: 80px;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n}\n\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.col2[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background-color: #fff;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00B3ac !important;\n  border-color: #00B3ac !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\np[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 16px;\n}\n\n.page__section[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n\n.page__cover[_ngcontent-%COMP%] {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #202020;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n\n.page__section_centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 0;\n}\n\n.page__container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 740px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.page__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 60px;\n  line-height: 1.2;\n  text-transform: uppercase;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  padding-top: 100px;\n  padding-bottom: 80px;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.col2[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00B3ac !important;\n  border-color: #00B3ac !important;\n}\n\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .col1[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    \n    \n    \n    \n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 10px;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  .list-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\np[_ngcontent-%COMP%] {\n  margin: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlc3QtdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxjb250ZXN0LXRlcm1zLWFuZC1jb25kaXRpb25zXFxjb250ZXN0LXRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FER0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJQTs7RUFFSSwyQkFBQTtBQ0RKOztBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7RUFFQSxrQkFBQTtBQ0hKOztBRE9BO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUNKSjs7QURTQTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FDUEo7O0FEVUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRGdCQTs7O0VBR0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDYko7O0FEZ0JBO0VBQ0ksY0FBQTtBQ2JKOztBRGdCQTtFQUNJLGdCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksV0FBQTtFQUVBLGVBQUE7QUNkSjs7QURpQkE7RUFDSSxnQkFBQTtBQ2RKOztBRGlCQTtFQUNJLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNkSjs7QURpQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2RKOztBRGlCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNkSjs7QURpQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDZEo7O0FEaUJBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUFBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNkSjs7QURpQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGtCQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUNmSjs7QURrQkE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FDaEJKOztBRG9CQTtFQUNJO0lBQ0ksMEJBQUE7RUNqQk47O0VEb0JFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFFQSxVQUFBO0lBS0EsVUFBQTtJQUtBLFdBQUE7SUFLQSxvQkFBQTtFQzlCTjtFRGdCTTtJQUNJLFlBQUE7RUNkVjtFRGtCTTtJQUNJLG1CQUFBO0VDaEJWO0VEb0JNO0lBQ0ksZ0JBQUE7RUNsQlY7RURzQk07SUFDSSxnQkFBQTtFQ3BCVjs7RUR3QkU7SUFDSSxtQkFBQTtFQ3JCTjtBQUNGOztBRHdCQTtFQUNJLHdCQUFBO0FDdEJKIiwiZmlsZSI6ImNvbnRlc3QtdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZV9fc2VjdGlvbiB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4ucGFnZV9fY292ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucGFnZV9fc2VjdGlvbl9jZW50ZXJlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG59XHJcblxyXG4ucGFnZV9fY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3NDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnBhZ2VfX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuXHJcbnVsLFxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlOiBkaXNjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY29sMSBhIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbn1cclxuXHJcbi5jb2wyIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJGQTRFNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjNhYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBCM2FjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi8vIC52Y19yb3cge1xyXG4vLyAgICAgZGlzcGxheTogZ3JpZDtcclxuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuLy8gICAgIGdhcDogMS41cmVtO1xyXG4vLyB9XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnBhZ2VfX3NlY3Rpb24ge1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLnBhZ2VfX2NvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhZ2VfX3NlY3Rpb25fY2VudGVyZWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDgwcHggMDtcclxufVxyXG5cclxuLnBhZ2VfX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNzQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wYWdlX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jb2wxIGEge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbn1cclxuXHJcbi5jb2wyIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJGQTRFNyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjNhYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBCM2FjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuY29sMSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cclxuICAgICAgICAvKiB3aWR0aCAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogVHJhY2sgKi9cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBIYW5kbGUgKi9cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMTAwcHggIWltcG9ydGFudDtcclxufSIsIi5wYWdlX19zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogNTB2aDtcbn1cblxuLnBhZ2VfX2NvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucGFnZV9fc2VjdGlvbl9jZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMDtcbn1cblxuLnBhZ2VfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDc0MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5wYWdlX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cblxucCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGU6IGRpc2MgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBnYXA6IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ubGlzdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbDEgYSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG5cbi5jb2wyIHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCM2FjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwQjNhYyAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbnAge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucGFnZV9fc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG5cbi5wYWdlX19jb3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBhZ2VfX3NlY3Rpb25fY2VudGVyZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4MHB4IDA7XG59XG5cbi5wYWdlX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4ucGFnZV9fdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgZ2FwOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2wxIGEge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uY29sMiB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEIzYWMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBCM2FjICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmNvbDEge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAvKiB3aWR0aCAqL1xuICAgIC8qIFRyYWNrICovXG4gICAgLyogSGFuZGxlICovXG4gICAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gIH1cbiAgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cbiAgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIC5jb2wxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzg4ODtcbiAgfVxuICAuY29sMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NTU7XG4gIH1cblxuICAubGlzdC1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxucCB7XG4gIG1hcmdpbjogMTAwcHggIWltcG9ydGFudDtcbn0iXX0= */"] });


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