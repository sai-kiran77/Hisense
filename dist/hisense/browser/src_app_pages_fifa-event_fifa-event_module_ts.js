"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_fifa-event_fifa-event_module_ts"],{

/***/ 2765:
/*!**********************************************************!*\
  !*** ./src/app/pages/fifa-event/fifa-event.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FifaEventComponent": () => (/* binding */ FifaEventComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







function FifaEventComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "a", 17)(2, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "source", 18)(4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", slide_r5.redirectTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("srcset", slide_r5.desktop_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", slide_r5.mobile_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", "fifa banner " + (i_r6 + 1));
} }
const _c0 = function (a0) { return { "active": a0 }; };
function FifaEventComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FifaEventComponent_a_13_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const tab_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.changeTab(tab_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, tab_r7 == ctx_r1.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tab_r7);
} }
function FifaEventComponent_section_14_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const country_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", country_r14.flag, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", country_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](country_r14.name);
} }
function FifaEventComponent_section_14_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FifaEventComponent_section_14_div_6_div_4_Template, 4, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const group_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r12.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r12.data);
} }
function FifaEventComponent_section_14_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", card_r15.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", card_r15.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", "Highlights" + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r15.text);
} }
function FifaEventComponent_section_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 21)(1, "section", 22)(2, "div", 23)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "FIFA Groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FifaEventComponent_section_14_div_6_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section", 26)(8, "div", 23)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Latest Highlights");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FifaEventComponent_section_14_a_12_Template, 5, 4, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.fifaHighlights);
} }
function FifaEventComponent_section_15_div_9_table_1_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const record_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r21.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r21.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r21.spin_wheel_prize.description);
} }
function FifaEventComponent_section_15_div_9_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table")(1, "tr", 42)(2, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Prize won");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FifaEventComponent_section_15_div_9_table_1_tr_8_Template, 7, 3, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r18.registrations);
} }
function FifaEventComponent_section_15_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No winners found! Check back later");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FifaEventComponent_section_15_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FifaEventComponent_section_15_div_9_table_1_Template, 9, 1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FifaEventComponent_section_15_div_9_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.registrations.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r17.registrations.length);
} }
function FifaEventComponent_section_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "source", 18)(3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 39)(5, "div", 23)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Daily Winners");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FifaEventComponent_section_15_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.getRegistrations($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FifaEventComponent_section_15_div_9_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("srcset", ctx_r3.environment.baseApiUrl + "/media/pages/campaigns/perfect-match-2022/steps-to-participate-desktop.webp", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.environment.baseApiUrl + "/media/pages/campaigns/perfect-match-2022/steps-to-participate-mobile.webp", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.registrations);
} }
function FifaEventComponent_section_16_div_9_table_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const record_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r28.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r28.user.phone);
} }
function FifaEventComponent_section_16_div_9_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table")(1, "tr", 42)(2, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Winner Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FifaEventComponent_section_16_div_9_table_1_tr_6_Template, 5, 2, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r25.spotHisenseRegistrations);
} }
function FifaEventComponent_section_16_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No winners found! Check back later");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FifaEventComponent_section_16_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FifaEventComponent_section_16_div_9_table_1_Template, 7, 1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FifaEventComponent_section_16_div_9_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.spotHisenseRegistrations.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r24.spotHisenseRegistrations.length);
} }
function FifaEventComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "source", 46)(3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 39)(5, "div", 23)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Daily Winners");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FifaEventComponent_section_16_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.getRegistrationsOfSpotHisense($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FifaEventComponent_section_16_div_9_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.spotHisenseRegistrations);
} }
class FifaEventComponent {
    constructor(platformId, state, api) {
        this.platformId = platformId;
        this.state = state;
        this.api = api;
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        this.tabs = ["About FIFA 2022", 'Spot Hisense', "Spin the wheel"];
        this.currentTab = "About FIFA 2022";
        this.slides = [
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-1-mobile.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-1-desktop.webp`,
                redirectTo: null
            },
            {
                mobile_image_full_url: `assets/spot-hisense-mobile-banner-with-button.webp`,
                desktop_image_full_url: `assets/spot-hisense.webp`,
                redirectTo: '/FIFA-2022/participate'
            },
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-2-mobile.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-2-desktop.webp`,
                redirectTo: '/perfect-match-2022'
            }
        ];
        this.spotHisenseRegistrationsDB = [
            {
                user: {
                    name: 'Vaishali Maisuria',
                    phone: '9904****53',
                    date: '2022-11-21'
                },
            },
            {
                user: {
                    name: 'Rakhi Ambore',
                    phone: '8882****37',
                    date: '2022-11-21'
                },
            },
            {
                user: {
                    name: 'Sanchita Mittal',
                    phone: '9313****72',
                    date: '2022-11-21'
                },
            },
            {
                user: {
                    name: 'Manisha Swarnkar',
                    phone: '9413****67',
                    date: '2022-11-21'
                },
            },
            {
                user: {
                    name: 'PurushothamPatel',
                    phone: '9731****36',
                    date: '2022-11-21'
                },
            },
            {
                user: {
                    name: 'Nalini Sivakumar',
                    phone: '9790****49',
                    date: '2022-11-20'
                },
            },
            {
                user: {
                    name: 'SONALI SASMAL BERA',
                    phone: '9733****18',
                    date: '2022-11-20'
                },
            },
            {
                user: {
                    name: 'karanmantri',
                    phone: '9022****56',
                    date: '2022-11-20'
                },
            },
            {
                user: {
                    name: 'Farhan Ansari',
                    phone: '8802****81',
                    date: '2022-11-20'
                },
            },
            {
                user: {
                    name: 'Akash Kumar',
                    phone: '8210****79',
                    date: '2022-11-20'
                },
            }
        ];
        this.fifaHighlights = [
            {
                image: 'assets/fifa_highlights/highlights_01.webp',
                text: 'France v Australia | Group D | FIFA World Cup Qatar 2022™ | Highlights',
                link: 'https://www.fifa.com/fifaplus/en/watch/SRVD2OnUQYrQ2X9VLnGDF'
            },
            {
                image: 'assets/fifa_highlights/highlights_02.webp',
                text: 'Mexico v Poland | Group C | FIFA World Cup Qatar 2022™ | Highlights',
                link: 'https://www.fifa.com/fifaplus/en/watch/160mKwOWPi2Mlp3GrpczZu'
            },
            {
                image: 'assets/fifa_highlights/highlights_03.webp',
                text: 'Denmark v Tunisia | Group D | FIFA World Cup Qatar 2022™ | Highlights',
                link: 'https://www.fifa.com/fifaplus/en/watch/3UG46kL82RDWDgxzt3QPjM'
            },
            {
                image: 'assets/fifa_highlights/highlights_04.webp',
                text: 'Argentina v Saudi Arabia | Group C | FIFA World Cup Qatar 2022™ | Highlights',
                link: 'https://www.fifa.com/fifaplus/en/watch/43Do27Etp3IapH0xwzbXOg'
            },
            {
                image: 'assets/fifa_highlights/highlights_1.webp',
                text: 'USA v Wales | Group B | FIFA World Cup Qatar 2022™ | Highlights',
                link: 'https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8'
            },
            {
                image: 'assets/fifa_highlights/highlights_2.webp',
                text: 'Senegal v Netherlands | Group A | FIFA World Cup Qatar 2022™ | Highlights',
                link: 'https://www.fifa.com/fifaplus/en/watch/3GDVIQobvl9FaFY6w74WZ3'
            },
            {
                image: 'assets/fifa_highlights/highlights_3.webp',
                text: 'England v IR Iran | Group B | FIFA World Cup Qatar 2022™ | Highlights',
                link: 'https://www.fifa.com/fifaplus/en/watch/39GjJjsq75cbbXY0JMADYV'
            },
            {
                image: 'assets/fifa_highlights/highlights_4.webp',
                text: 'Qatar v Ecuador | Group A | FIFA World Cup Qatar 2022™ | Highlights',
                link: 'https://www.fifa.com/fifaplus/en/watch/2CKN465NbbTuFcXLb6sSeQ'
            },
        ];
        this.spotHisenseRegistrations = [];
        this.groups = [
            {
                heading: 'Group A',
                data: [
                    {
                        name: 'Qatar',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/QAT?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Ecuador',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ECU?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Senegal',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SEN?tx=c_fill,g_auto,q_auto'
                    },
                    {
                        name: 'Netherlands',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/NED?tx=c_fill,g_auto,q_auto'
                    }
                ]
            },
            {
                heading: 'Group B',
                data: [
                    {
                        name: 'England',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ENG?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'IR Iran',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/IRN?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'USA',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto'
                    },
                    {
                        name: 'Wales',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/WAL?tx=c_fill,g_auto,q_auto'
                    }
                ]
            },
            {
                heading: 'Group C',
                data: [
                    {
                        name: 'Argentina',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ARG?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Saudi Arabia',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KSA?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Mexico',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MEX?tx=c_fill,g_auto,q_auto'
                    },
                    {
                        name: 'Poland',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POL?tx=c_fill,g_auto,q_auto'
                    }
                ]
            },
            {
                heading: 'Group D',
                data: [
                    {
                        name: 'France',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/FRA?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Denmark',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/DEN?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Tunisia',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/TUN?tx=c_fill,g_auto,q_auto'
                    },
                    {
                        name: 'Australia',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/AUS?tx=c_fill,g_auto,q_auto'
                    }
                ]
            },
            {
                heading: 'Group E',
                data: [
                    {
                        name: 'Spain',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ESP?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Germany',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GER?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Japan',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/JPN?tx=c_fill,g_auto,q_auto'
                    },
                    {
                        name: 'Costa Rica',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRC?tx=c_fill,g_auto,q_auto'
                    }
                ]
            },
            {
                heading: 'Group F',
                data: [
                    {
                        name: 'Belgium',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BEL?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Canada',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CAN?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Morocco',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MAR?tx=c_fill,g_auto,q_auto'
                    },
                    {
                        name: 'Croatia',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRO?tx=c_fill,g_auto,q_auto'
                    }
                ]
            },
            {
                heading: 'Group G',
                data: [
                    {
                        name: 'Brazil',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Serbia',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SRB?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Switzerland',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SUI?tx=c_fill,g_auto,q_auto'
                    },
                    {
                        name: 'Cameroon',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CMR?tx=c_fill,g_auto,q_auto'
                    }
                ]
            },
            {
                heading: 'Group H',
                data: [
                    {
                        name: 'Portugal',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POR?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Ghana',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GHA?tx=c_fill,g_auto,q_auto',
                    },
                    {
                        name: 'Uruguay',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/URU?tx=c_fill,g_auto,q_auto'
                    },
                    {
                        name: 'Korea Republic',
                        flag: 'https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KOR?tx=c_fill,g_auto,q_auto'
                    }
                ]
            },
        ];
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
        this.state.mobileNavToggle.next(false);
        const date = new Date();
        // this.yesterdayDate = `${date.getFullYear()}-${(String(date.getMonth() + 1)).padStart(2, '0')}-${(String(date.getDate() - 1)).padStart(2, '0')}`;
        // console.log(this.yesterdayDate);
        this.yesterdayDate = '2022-10-25';
    }
    ngOnInit() {
        setTimeout(() => {
            this.swiper = new Swiper(".mySwiperHome", {
                slidesPerView: 1,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                // autoplay: {
                //   delay: 6000,
                // },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            this.swiper.on('slideChange', (event) => {
                // if (event.activeIndex % 2 == 1) {
                //   this.currentTab = this.tabs[0];
                // } else {
                //   this.currentTab = this.tabs[1];
                // }
                let activeIndex = event.activeIndex;
                if (activeIndex == 4) {
                    activeIndex = 1;
                }
                if (activeIndex == 0) {
                    activeIndex = 3;
                }
                this.currentTab = this.tabs[activeIndex - 1];
            });
        });
        this.getRegistrations({ target: { value: this.yesterdayDate } });
        this.getRegistrationsOfSpotHisense({ target: { value: '2022-11-21' } });
    }
    ngAfterViewInit() {
        // if (isPlatformBrowser(this.platformId)) {
        //   // Set the date we're counting down to
        //   let countDownDate = new Date("Nov 20, 2022 16:00:00").getTime();
        //   // Update the count down every 1 second
        //   this.x = setInterval(() => {
        //     // Get today's date and time
        //     let now = new Date().getTime();
        //     // Find the distance between now and the count down date
        //     let distance = countDownDate - now;
        //     // Time calculations for days, hours, minutes and seconds
        //     const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //     if (this.days !== days) {
        //       this.days = days;
        //     }
        //     if (this.hours !== hours) {
        //       this.hours = hours;
        //     }
        //     if (this.minutes !== minutes) {
        //       this.minutes = minutes;
        //     }
        //     if (this.seconds !== seconds) {
        //       this.seconds = seconds;
        //     }
        //     // Output the result in an element with id="demo"
        //     // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //     //   + minutes + "m " + seconds + "s ";
        //     // If the count down is over, write some text 
        //     if (distance < 0) {
        //       clearInterval(this.x);
        //       // document.getElementById("demo").innerHTML = "EXPIRED";
        //     }
        //   }, 1000);
        // }
    }
    getRegistrations(event) {
        const params = {
            date: event.target.value,
            user_progress: 'prize_winners'
        };
        this.api.getRegistrations(params).subscribe((data) => {
            console.log(data);
            if (data.data.length) {
                this.registrations = data.data;
            }
            else {
                this.registrations = [];
            }
        }, (err) => {
            console.log(err);
        });
    }
    getRegistrationsOfSpotHisense(event) {
        this.spotHisenseRegistrations = this.spotHisenseRegistrationsDB.filter((obj) => obj.user.date == event.target.value);
    }
    changeTab(tab) {
        this.currentTab = tab;
        const tabIndec = this.tabs.findIndex(t => t == tab);
        this.swiper.slideTo(tabIndec + 1);
        // if (tab == this.tabs[0]) {
        //   this.swiper.slidePrev();
        // } else {
        //   this.swiper.slideNext();
        // }
    }
    ngOnDestroy() {
        if (this.x) {
            clearInterval(this.x);
        }
    }
}
FifaEventComponent.ɵfac = function FifaEventComponent_Factory(t) { return new (t || FifaEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
FifaEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FifaEventComponent, selectors: [["app-fifa-event"]], decls: 17, vars: 5, consts: [[1, "fifa__event__container"], [1, "main-visual", "slider", "slick-initialized", "slick-slider", "slick-dotted"], [1, "slick-list", "draggable"], [1, "slick-track"], [1, "swiper", "mySwiperHome"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-pagination"], [1, "flex", "fifa__tabs__container"], [1, "tabs"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "about__fifa__tab", "style", "margin-top: 10px;", 4, "ngIf"], [4, "ngIf"], [1, "swiper-slide"], [2, "width", "100%", 3, "routerLink"], ["media", "(min-width:768px)", 3, "srcset"], [1, "ls-bg", 2, "width", "100%", 3, "src", "alt"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "about__fifa__tab", 2, "margin-top", "10px"], [1, "fifa__groups"], [1, "wrapper"], [1, "groups"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "fifa__highlights"], [1, "highlights", "groups"], ["target", "_blank", "class", "highlights__card", 3, "href", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card__heading"], [1, "card__body"], [4, "ngFor", "ngForOf"], ["width", "58", "height", "36", 3, "src", "alt"], ["target", "_blank", 1, "highlights__card", 3, "href"], [1, "image__container"], [3, "src", "alt"], [2, "font-size", "14px"], ["alt", "steps to participate", 1, "ls-bg", 2, "width", "100%", 3, "src"], [1, "date__picker"], ["min", "2022-09-26", "max", "2022-10-25", "value", "2022-10-25", "type", "date", "name", "date", "id", "date", 3, "change"], ["class", "no-records", 4, "ngIf"], [2, "background", "#00b3ac"], [2, "border-top-left-radius", "8px"], [2, "border-top-right-radius", "8px"], [1, "no-records"], ["media", "(min-width:768px)", "srcset", "assets/spot-hisense-steps-to-participate-desktop.webp"], ["src", "assets/spot-hisense-steps-to-participate-mobile.webp", "alt", "steps to participate", 1, "ls-bg", 2, "width", "100%"], ["min", "2022-11-20", "max", "2022-11-21", "value", "2022-11-21", "type", "date", "name", "date", "id", "date", 3, "change"]], template: function FifaEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FifaEventComponent_div_6_Template, 5, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 7)(8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, FifaEventComponent_a_13_Template, 2, 4, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FifaEventComponent_section_14_Template, 13, 2, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FifaEventComponent_section_15_Template, 10, 3, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, FifaEventComponent_section_16_Template, 10, 1, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentTab == "About FIFA 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentTab == "Spin the wheel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentTab == "Spot Hisense");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".f-24 {\n  font-size: 36px;\n}\n\n.countdown__wrapper {\n  margin-top: -10px;\n  padding: 48px;\n  background-color: #B30007;\n  color: white;\n}\n\n.countdown__container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.count__container {\n  display: flex;\n  gap: 5rem;\n  text-align: center;\n  margin-top: 36px;\n  align-items: center;\n}\n\nsvg {\n  fill: #E60009 !important;\n}\n\n.count {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 768px) {\n  .count__container {\n    gap: 1rem;\n  }\n\n  .count {\n    font-size: 16px;\n  }\n\n  .f-24 {\n    font-size: 24px;\n  }\n\n  .category {\n    font-size: 12px;\n  }\n\n  .d-sm-none {\n    display: none;\n  }\n}\n\n.about__fifa__tab h3 {\n  color: #03122b;\n  text-align: center;\n  font-size: 32px;\n  margin-bottom: 24px;\n}\n\n.fifa__groups {\n  background-color: #F3F3F3;\n  padding: 72px;\n}\n\n.fifa__highlights {\n  background-color: #eeeee4;\n  padding: 72px;\n}\n\n.fifa__highlights .highlights .highlights__card {\n  cursor: pointer;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container {\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container img {\n  width: 100%;\n  border-radius: 5px;\n  transition: transform 450ms ease-in-out;\n  height: 150px;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container img:hover {\n  transform: scale(1.04);\n}\n\n.groups {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 2.5rem;\n  gap: 2.5rem;\n}\n\n.card {\n  background-color: #00AAA6;\n  color: white;\n  border-radius: 12px;\n  padding-top: 16px;\n  text-align: center;\n}\n\n.card .card__heading {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.card .card__body {\n  background-color: white;\n  color: black;\n  border-radius: 12px;\n  display: flex;\n  gap: 2rem;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.card .card__body div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 1100px) {\n  .groups img {\n    width: 36px;\n    height: 24px;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .groups {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .groups {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 520px) {\n  .groups {\n    grid-template-columns: 1fr;\n  }\n}\n\n.date__picker {\n  background-color: #fff;\n}\n\n.date__picker .wrapper {\n  width: 80%;\n  margin: 0px auto;\n  padding: 40px 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  gap: 2rem;\n}\n\n.date__picker .wrapper h3 {\n  font-size: 36px;\n}\n\n.date__picker .wrapper input {\n  width: 200px;\n  margin: auto;\n  padding: 8px 16px;\n  font-size: 15px;\n  border: 1px solid #00AAA6;\n  border-radius: 6px;\n}\n\n.date__picker .wrapper table {\n  border-collapse: collapse;\n  width: 100%;\n  overflow-x: auto;\n  min-width: 500px;\n  width: 60%;\n  margin: auto;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.date__picker .wrapper table .telephone {\n  color: #00AAA6 !important;\n}\n\n.date__picker .wrapper table tr {\n  width: 100%;\n}\n\n.date__picker .wrapper table tr:last-child {\n  border-bottom: 3px solid #00AAA6;\n}\n\n.date__picker .wrapper td,\n.date__picker .wrapper th {\n  border-bottom: 0.5px solid #ccc !important;\n  border-top: 0.5px solid #ccc !important;\n  text-align: left !important;\n  padding: 8px 24px !important;\n  white-space: nowrap !important;\n}\n\n.date__picker .wrapper th {\n  font-size: 14px;\n  font-weight: bold;\n  color: white;\n  border-top: none !important;\n}\n\n@media screen and (max-width: 576px) {\n  .date__picker .wrapper {\n    width: 70%;\n  }\n  .date__picker .wrapper table {\n    overflow-x: auto;\n    display: block;\n    margin: auto;\n    min-width: auto;\n  }\n  .date__picker .wrapper table tr {\n    width: 100%;\n  }\n}\n\n.ls-bg {\n  cursor: pointer;\n}\n\n.swiper-pagination {\n  bottom: 0px !important;\n}\n\n.swiper-pagination-bullet {\n  color: #09cbc6 !important;\n  border: none !important;\n  width: 10px !important;\n  height: 10px !important;\n  outline: none !important;\n  margin: 7px !important;\n  border-radius: 50% !important;\n  background: transparent !important;\n  border: 2px solid #09cbc6 !important;\n  transition: background-color 500ms !important;\n  cursor: pointer !important;\n}\n\n.swiper-pagination-bullet::before {\n  display: none !important;\n}\n\n.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background: #00AAA6 !important;\n}\n\n.fifa__tabs__container {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding: 16px 0;\n}\n\n.fifa__tabs__container .tabs {\n  border-radius: 50px;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.fifa__tabs__container .list-group {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  gap: 16px;\n}\n\n.fifa__tabs__container .list-group a {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1.2px solid #09cbc6;\n  border-radius: 16px;\n}\n\n.fifa__tabs__container .list-group .active {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .fifa__tabs__container .tabs {\n    padding: 12px;\n  }\n  .fifa__tabs__container .list-group {\n    gap: 12px;\n  }\n  .fifa__tabs__container .list-group a {\n    padding: 0.75rem 1rem;\n    border: 1.2px solid #09cbc6;\n    border-radius: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZmEtZXZlbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxmaWZhLWV2ZW50XFxmaWZhLWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxTQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxhQUFBO0VDQ047QUFDRjs7QURHSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RSOztBREtBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUNGSjs7QURNUTtFQUNJLGVBQUE7QUNKWjs7QURLWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSGhCOztBRElnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtBQ0ZwQjs7QURJb0I7RUFDSSxzQkFBQTtBQ0Z4Qjs7QURVQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBQ1BKOztBRFVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEU0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1BSOztBRFVJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ1JSOztBRFVRO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNSWjs7QURhQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNYVjtBQUNGOztBRGVBO0VBQ0k7SUFDSSxrQ0FBQTtFQ2JOO0FBQ0Y7O0FEZ0JBO0VBQ0k7SUFDSSw4QkFBQTtFQ2ROO0FBQ0Y7O0FEaUJBO0VBQ0k7SUFDSSwwQkFBQTtFQ2ZOO0FBQ0Y7O0FEa0JBO0VBQ0ksc0JBQUE7QUNoQko7O0FEa0JJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNoQlI7O0FEa0JRO0VBQ0ksZUFBQTtBQ2hCWjs7QURtQlE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUNsQlo7O0FEcUJRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUNwQlo7O0FEc0JZO0VBQ0kseUJBQUE7QUNwQmhCOztBRHVCWTtFQUNJLFdBQUE7QUNyQmhCOztBRHdCZ0I7RUFDSSxnQ0FBQTtBQ3RCcEI7O0FENEJROztFQUVJLDBDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUMxQlo7O0FENkJRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDM0JaOztBRGdDQTtFQUVRO0lBQ0ksVUFBQTtFQzlCVjtFRGdDVTtJQUVJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDL0JkO0VEaUNjO0lBQ0ksV0FBQTtFQy9CbEI7QUFDRjs7QURzQ0E7RUFDSSxlQUFBO0FDcENKOztBRHVDQTtFQUNJLHNCQUFBO0FDcENKOztBRHVDQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsMEJBQUE7QUNwQ0o7O0FEc0NJO0VBQ0ksd0JBQUE7QUNwQ1I7O0FEd0NBO0VBQ0ksOEJBQUE7QUNyQ0o7O0FEd0NBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDckNKOztBRHVDSTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FDdENSOztBRHlDSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDdkNSOztBRHlDUTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ3ZDWjs7QUQwQ1E7RUFDSSxXQUFBO0VBRUEsb0NBQUE7RUFDQSxnQ0FBQTtBQ3pDWjs7QUQrQ0E7RUFFUTtJQUNJLGFBQUE7RUM3Q1Y7RURnRE07SUFDSSxTQUFBO0VDOUNWO0VEZ0RVO0lBQ0kscUJBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0VDOUNkO0FBQ0YiLCJmaWxlIjoiZmlmYS1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mLTI0IHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLmNvdW50ZG93bl9fd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIHBhZGRpbmc6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjMwMDA3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY291bnRkb3duX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3VudF9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIGZpbGw6ICNFNjAwMDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvdW50X19jb250YWluZXIge1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZi0yNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kLXNtLW5vbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hYm91dF9fZmlmYV9fdGFiIHtcclxuICAgIGgzIHtcclxuICAgICAgICBjb2xvcjogcmdiKDMsIDE4LCA0Myk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlmYV9fZ3JvdXBzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XHJcbiAgICBwYWRkaW5nOiA3MnB4O1xyXG59XHJcblxyXG4uZmlmYV9faGlnaGxpZ2h0cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWU0O1xyXG4gICAgcGFkZGluZzogNzJweDtcclxuXHJcbiAgICAuaGlnaGxpZ2h0cyB7XHJcblxyXG4gICAgICAgIC5oaWdobGlnaHRzX19jYXJkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAuaW1hZ2VfX2NvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQ1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncm91cHMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ2FwOiAyLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmNhcmRfX2hlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfX2JvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC5ncm91cHMge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5ncm91cHMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZ3JvdXBzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAuZ3JvdXBzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGVfX3BpY2tlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEFBQTY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLnRlbGVwaG9uZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMEFBQTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICAuZGF0ZV9fcGlja2VyIHtcclxuICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5scy1iZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgIGNvbG9yOiAjMDljYmM2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDljYmM2ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMEFBQTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcblxyXG4gICAgLnRhYnMge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNlYWU5ZTk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBnYXA6IDE2cHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJGQTRFNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmlmYV9fdGFic19fY29udGFpbmVyIHtcclxuICAgICAgICAudGFicyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgICAgIGdhcDogMTJweDtcclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5mLTI0IHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uY291bnRkb3duX193cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmc6IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMzAwMDc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvdW50ZG93bl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb3VudF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2ZyB7XG4gIGZpbGw6ICNFNjAwMDkgIWltcG9ydGFudDtcbn1cblxuLmNvdW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvdW50X19jb250YWluZXIge1xuICAgIGdhcDogMXJlbTtcbiAgfVxuXG4gIC5jb3VudCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmYtMjQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5jYXRlZ29yeSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmQtc20tbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmFib3V0X19maWZhX190YWIgaDMge1xuICBjb2xvcjogIzAzMTIyYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5maWZhX19ncm91cHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICBwYWRkaW5nOiA3MnB4O1xufVxuXG4uZmlmYV9faGlnaGxpZ2h0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZTQ7XG4gIHBhZGRpbmc6IDcycHg7XG59XG4uZmlmYV9faGlnaGxpZ2h0cyAuaGlnaGxpZ2h0cyAuaGlnaGxpZ2h0c19fY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5maWZhX19oaWdobGlnaHRzIC5oaWdobGlnaHRzIC5oaWdobGlnaHRzX19jYXJkIC5pbWFnZV9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5maWZhX19oaWdobGlnaHRzIC5oaWdobGlnaHRzIC5oaWdobGlnaHRzX19jYXJkIC5pbWFnZV9fY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0NTBtcyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5maWZhX19oaWdobGlnaHRzIC5oaWdobGlnaHRzIC5oaWdobGlnaHRzX19jYXJkIC5pbWFnZV9fY29udGFpbmVyIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XG59XG5cbi5ncm91cHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAyLjVyZW07XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgLmNhcmRfX2hlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uY2FyZCAuY2FyZF9fYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jYXJkIC5jYXJkX19ib2R5IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmdyb3VwcyBpbWcge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5ncm91cHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ncm91cHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcbiAgLmdyb3VwcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5kYXRlX19waWNrZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciBoMyB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgaW5wdXQge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQUFBNjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSAudGVsZXBob25lIHtcbiAgY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUgdHIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUgdHI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDBBQUE2O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0ZCxcbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGgge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMjRweCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5kYXRlX19waWNrZXIgLndyYXBwZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG4gIC5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUgdHIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubHMtYmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBjb2xvcjogIzA5Y2JjNiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwOWNiYzYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwQUFBNiAhaW1wb3J0YW50O1xufVxuXG4uZmlmYV9fdGFic19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAwO1xufVxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAudGFicyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG59XG4uZmlmYV9fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiAxNnB4O1xufVxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCBhIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDEuMnB4IHNvbGlkICMwOWNiYzY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uZmlmYV9fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAudGFicyB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICAuZmlmYV9fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIHtcbiAgICBnYXA6IDEycHg7XG4gIH1cbiAgLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCBhIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIH1cbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 9476:
/*!*******************************************************!*\
  !*** ./src/app/pages/fifa-event/fifa-event.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FifaEventModule": () => (/* binding */ FifaEventModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fifa_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fifa-event.component */ 2765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _fifa_event_component__WEBPACK_IMPORTED_MODULE_0__.FifaEventComponent
    }
];
class FifaEventModule {
}
FifaEventModule.ɵfac = function FifaEventModule_Factory(t) { return new (t || FifaEventModule)(); };
FifaEventModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FifaEventModule });
FifaEventModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FifaEventModule, { declarations: [_fifa_event_component__WEBPACK_IMPORTED_MODULE_0__.FifaEventComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_fifa-event_fifa-event_module_ts.js.map