"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_press-coverages_press-coverages_module_ts"],{

/***/ 7757:
/*!********************************************************************!*\
  !*** ./src/app/pages/press-coverages/press-coverages.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PressCoveragesComponent": () => (/* binding */ PressCoveragesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = ["container"];
const _c1 = function (a0) { return { "active": a0 }; };
function PressCoveragesComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PressCoveragesComponent_a_6_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const tab_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.changeTab(tab_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, tab_r4 == ctx_r0.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tab_r4);
} }
function PressCoveragesComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PressCoveragesComponent_a_9_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const tab_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.changeYearTab(tab_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, tab_r7 == ctx_r1.currentSelectedYearTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tab_r7);
} }
function PressCoveragesComponent_ng_container_12_div_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", data_r12 == null ? null : data_r12.vendor, ")");
} }
function PressCoveragesComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PressCoveragesComponent_ng_container_12_div_1_p_4_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r12.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r12 == null ? null : data_r12.vendor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r12 == null ? null : data_r12.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", data_r12 == null ? null : data_r12.external_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", data_r12 == null ? null : data_r12.image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "press coverage " + (i_r13 + 1));
} }
function PressCoveragesComponent_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Records Found!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PressCoveragesComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PressCoveragesComponent_ng_container_12_div_1_Template, 11, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PressCoveragesComponent_ng_container_12_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.yearRecordsMap[ctx_r3.currentSelectedYearTab]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r3.yearRecordsMap[ctx_r3.currentSelectedYearTab] == null ? null : ctx_r3.yearRecordsMap[ctx_r3.currentSelectedYearTab].length) == 0);
} }
class PressCoveragesComponent {
    constructor(api, state, title) {
        this.api = api;
        this.state = state;
        this.title = title;
        this.totalPagesinTen = [];
        this.yearRecordsMap = {};
        this.yearRecordsTabs = [];
        this.params = {
            per_page: 100000,
            page: 1,
            country: 'national'
        };
        this.metaDataTabs = ['National', 'Global'];
        this.currentTab = 'National';
        this.currentSelectedYearTab = 0;
        this.state.mobileNavToggle.next(false);
        this.title.setTitle('Hisense India | Press Coverages');
    }
    changeTab(tab) {
        this.currentTab = tab;
        if (this.currentTab == 'Global') {
            this.metaData = [];
            this.totalPagesinTen = [];
            this.params.country = 'global';
            this.getMetaData(1);
        }
        else {
            this.metaData = [];
            this.totalPagesinTen = [];
            this.params.country = 'national';
            this.getMetaData(1);
        }
    }
    changeYearTab(tab) {
        this.currentSelectedYearTab = tab;
    }
    ngOnInit() {
        this.getMetaData();
    }
    getMetaData(page) {
        if (page) {
            this.params.page = page;
        }
        this.yearRecordsMap = {};
        this.yearRecordsTabs = [];
        this.currentSelectedYearTab = 0;
        this.api.getPressCoverages(this.params).subscribe((res) => {
            var _a;
            (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.data.forEach((obj) => {
                if (this.yearRecordsMap[obj.published_year]) {
                    this.yearRecordsMap[obj.published_year].push(obj);
                }
                else {
                    this.yearRecordsTabs.push(obj.published_year);
                    this.yearRecordsMap[obj.published_year] = [obj];
                }
            });
            // this.totalPagesinTen = new Array(res.data.last_page);
            // if (this.container) {
            //   this.container.nativeElement.scrollIntoView({ behavior: "smooth" });
            // } 
            if (this.yearRecordsTabs.length) {
                this.currentSelectedYearTab = this.yearRecordsTabs[0];
            }
            this.metaData = res.data;
            console.log(this.metaData);
            console.log(this.yearRecordsMap, this.yearRecordsTabs);
        }, (err) => {
            console.log(err);
        });
    }
}
PressCoveragesComponent.ɵfac = function PressCoveragesComponent_Factory(t) { return new (t || PressCoveragesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
PressCoveragesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PressCoveragesComponent, selectors: [["app-press-coverages"]], viewQuery: function PressCoveragesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 13, vars: 3, consts: [[1, "breadcrumb__yellow__banner"], [1, "press__tabs__container"], [1, "col1", "tabs"], ["id", "themeslist", 1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "container"], ["container", ""], [4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], ["class", "row", "style", "display: flex;", 4, "ngFor", "ngForOf"], ["class", "text-center", "style", "text-align: center;", 4, "ngIf"], [1, "row", 2, "display", "flex"], [2, "flex", "0 0 75%"], [1, "f-24", 2, "word-break", "break-all"], ["target", "_blank", 1, "btn-hisense-v2", 3, "href"], [2, "flex", "0 0 25%"], [3, "src", "alt"], [1, "text-center", 2, "text-align", "center"]], template: function PressCoveragesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Press Coverages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PressCoveragesComponent_a_6_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PressCoveragesComponent_a_9_Template, 2, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PressCoveragesComponent_ng_container_12_Template, 3, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.metaDataTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.yearRecordsTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.metaData == null ? null : ctx.metaData.data == null ? null : ctx.metaData.data.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".page__section[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n\n.page__cover[_ngcontent-%COMP%] {\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #202020;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n\n.page__section_centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 80px 0;\n}\n\n.page__container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 740px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.page__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 60px;\n  line-height: 1.2;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n  margin-top: 1.5rem;\n  padding-top: 100px;\n  padding-bottom: 80px;\n}\n\n.read-more-btn[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  background-color: #00cccc !important;\n  color: white !important;\n  padding: 0.71rem;\n  display: block;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2.5rem;\n}\n\n.f-24[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  border: 1px solid #ddd;\n  font-size: 22px;\n}\n\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #00cccc;\n  color: white;\n  border: 1px solid #00cccc;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem 3.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.press__tabs__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-content: center;\n  padding: 16px 0;\n}\n\n.press__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 20px;\n}\n\n.press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  gap: 16px;\n}\n\n.press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1.2px solid #09cbc6;\n  border-radius: 16px;\n}\n\n.press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .press__tabs__container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .press__tabs__container[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    border: 1.2px solid #09cbc6;\n    border-radius: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNzLWNvdmVyYWdlcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTYWklMjBLaXJhblxcRG9jdW1lbnRzXFxoaXNlbnNlXFxzcmNcXGFwcFxccGFnZXNcXHByZXNzLWNvdmVyYWdlc1xccHJlc3MtY292ZXJhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBRUEsb0NBQUE7RUFDQSxnQ0FBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRko7O0FER0k7RUFFSSxtQkFBQTtFQUNBLGFBQUE7QUNGUjs7QURLSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNIUjs7QURJUTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0ZaOztBRElRO0VBQ0ksV0FBQTtFQUVBLG9DQUFBO0VBQ0EsZ0NBQUE7QUNIWjs7QURTQTtFQUVRO0lBQ0ksYUFBQTtFQ1BWO0VEU007SUFDSSxTQUFBO0VDUFY7RURRVTtJQUNJLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtFQ05kO0FBQ0YiLCJmaWxlIjoicHJlc3MtY292ZXJhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VfX3NlY3Rpb24ge1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxufVxyXG5cclxuLnBhZ2VfX2NvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhZ2VfX3NlY3Rpb25fY2VudGVyZWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDgwcHggMDtcclxufVxyXG5cclxuLnBhZ2VfX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNzQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wYWdlX190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuLnJlYWQtbW9yZS1idG4ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjA0LCAyMDQpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjcxcmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMi41cmVtO1xyXG59XHJcblxyXG4uZi0yNCB7XHJcbiAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjA0LCAyMDQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDIwNCwgMjA0KTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLmNvbDEgYSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDMuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyRkE0RTcgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFic3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbjogM3JlbTtcclxufVxyXG5cclxuLnByZXNzX190YWJzX19jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgLnRhYnN7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2VhZTllOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBnYXA6IDE2cHg7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyRkE0RTcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByZXNzX190YWJzX19jb250YWluZXJ7XHJcbiAgICAgICAgLnRhYnN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIucGFnZV9fc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG5cbi5wYWdlX19jb3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBhZ2VfX3NlY3Rpb25fY2VudGVyZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4MHB4IDA7XG59XG5cbi5wYWdlX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4ucGFnZV9fdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ucmVhZC1tb3JlLWJ0biB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjY2NjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwLjcxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyLjVyZW07XG59XG5cbi5mLTI0IHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wYWdpbmF0aW9uIGEge1xuICBjb2xvcjogYmxhY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnBhZ2luYXRpb24gYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjY2NjO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGNjY2M7XG59XG5cbi5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmNvbDEgYSB7XG4gIHBhZGRpbmc6IDFyZW0gMy4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcmVzc19fdGFic19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAwO1xufVxuLnByZXNzX190YWJzX19jb250YWluZXIgLnRhYnMge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnByZXNzX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAxNnB4O1xufVxuLnByZXNzX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAgYSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLnByZXNzX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJlc3NfX3RhYnNfX2NvbnRhaW5lciAudGFicyB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICAucHJlc3NfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCB7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG4gIC5wcmVzc19fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIGEge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXI6IDEuMnB4IHNvbGlkICMwOWNiYzY7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 9124:
/*!*****************************************************************!*\
  !*** ./src/app/pages/press-coverages/press-coverages.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PressCoveragesModule": () => (/* binding */ PressCoveragesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _press_coverages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./press-coverages.component */ 7757);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _press_coverages_component__WEBPACK_IMPORTED_MODULE_0__.PressCoveragesComponent
    }
];
class PressCoveragesModule {
}
PressCoveragesModule.ɵfac = function PressCoveragesModule_Factory(t) { return new (t || PressCoveragesModule)(); };
PressCoveragesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PressCoveragesModule });
PressCoveragesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PressCoveragesModule, { declarations: [_press_coverages_component__WEBPACK_IMPORTED_MODULE_0__.PressCoveragesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_press-coverages_press-coverages_module_ts.js.map