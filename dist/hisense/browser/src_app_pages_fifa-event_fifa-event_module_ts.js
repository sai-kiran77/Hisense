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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_pipes_mask_phone_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipes/mask-phone.pipe */ 1782);









const _c0 = ["Highlights"];
function FifaEventComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "a", 17)(2, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "source", 18)(4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const slide_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", slide_r5.redirectTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("srcset", slide_r5.desktop_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", slide_r5.mobile_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", "fifa banner " + (i_r6 + 1));
} }
const _c1 = function (a0) { return { "active": a0 }; };
function FifaEventComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FifaEventComponent_a_13_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const tab_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.changeTab(tab_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, tab_r7 == ctx_r1.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r7);
} }
function FifaEventComponent_section_14_div_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const country_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", country_r15.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", country_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](country_r15.name);
} }
function FifaEventComponent_section_14_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FifaEventComponent_section_14_div_6_div_4_Template, 4, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const group_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](group_r13.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r13.data);
} }
function FifaEventComponent_section_14_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", card_r16.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", card_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", card_r16.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](card_r16.text);
} }
function FifaEventComponent_section_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 21)(1, "section", 22)(2, "div", 23)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "FIFA Groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FifaEventComponent_section_14_div_6_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "section", 26, 27)(9, "div", 23)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Latest Highlights");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FifaEventComponent_section_14_a_13_Template, 5, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.fifaHighlights);
} }
function FifaEventComponent_section_15_div_9_table_1_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const record_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](record_r22.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](record_r22.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](record_r22.spin_wheel_prize.description);
} }
function FifaEventComponent_section_15_div_9_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table")(1, "tr", 43)(2, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Prize won");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FifaEventComponent_section_15_div_9_table_1_tr_8_Template, 7, 3, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r19.registrations);
} }
function FifaEventComponent_section_15_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No winners found! Check back later");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FifaEventComponent_section_15_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FifaEventComponent_section_15_div_9_table_1_Template, 9, 1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FifaEventComponent_section_15_div_9_div_2_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.registrations.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r18.registrations.length);
} }
function FifaEventComponent_section_15_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section")(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "source", 18)(3, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 40)(5, "div", 23)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Daily Winners");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function FifaEventComponent_section_15_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.getRegistrations($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FifaEventComponent_section_15_div_9_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("srcset", ctx_r3.environment.baseApiUrl + "/media/pages/campaigns/perfect-match-2022/steps-to-participate-desktop.webp", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r3.environment.baseApiUrl + "/media/pages/campaigns/perfect-match-2022/steps-to-participate-mobile.webp", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.registrations);
} }
function FifaEventComponent_section_16_div_9_table_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "maskPhone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const record_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](record_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, record_r29.phone));
} }
function FifaEventComponent_section_16_div_9_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table")(1, "tr", 43)(2, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Winner Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FifaEventComponent_section_16_div_9_table_1_tr_6_Template, 6, 4, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r26.spotHisenseRegistrations);
} }
function FifaEventComponent_section_16_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No winners found! Check back later");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FifaEventComponent_section_16_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FifaEventComponent_section_16_div_9_table_1_Template, 7, 1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FifaEventComponent_section_16_div_9_div_2_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r25.spotHisenseRegistrations.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r25.spotHisenseRegistrations.length);
} }
function FifaEventComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section")(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "source", 47)(3, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 40)(5, "div", 23)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Daily Winners");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function FifaEventComponent_section_16_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.filterSpotHisenseRegistrationsData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FifaEventComponent_section_16_div_9_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("max", ctx_r4.spotYesterdayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.spotHisenseRegistrations);
} }
class FifaEventComponent {
    constructor(platformId, state, api, title) {
        this.platformId = platformId;
        this.state = state;
        this.api = api;
        this.title = title;
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        // tabs = ["About FIFA 2022", 'Spot Hisense', "Spin the wheel", "Highlights"];
        this.tabs = ['Spot Hisense', "Spin the wheel"];
        this.currentTab = "Spot Hisense";
        this.slides = [
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-1-mobile.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-1-desktop.webp`,
                redirectTo: null
            },
            {
                mobile_image_full_url: `assets/slide-2-mobile.webp`,
                desktop_image_full_url: `assets/slide-2-desktop.webp`,
                redirectTo: '/FIFA-2022/participate'
            },
            {
                mobile_image_full_url: `assets/slide-3-mobile.webp`,
                desktop_image_full_url: `assets/slide-3-desktop.webp`,
                redirectTo: '/perfect-match-2022'
            }
        ];
        this.spotHisenseRegistrationsDB = [];
        // fifaHighlights = [
        // {
        //   image: 'assets/fifa_highlights/highlights_01.webp',
        //   text: 'France v Australia | Group D | FIFA World Cup Qatar 2022™',
        //   link: 'https://www.fifa.com/fifaplus/en/watch/SRVD2OnUQYrQ2X9VLnGDF'
        // },
        // {
        //   image: 'assets/fifa_highlights/highlights_02.webp',
        //   text: 'Mexico v Poland | Group C | FIFA World Cup Qatar 2022™',
        //   link: 'https://www.fifa.com/fifaplus/en/watch/160mKwOWPi2Mlp3GrpczZu'
        // },
        // {
        //   image: 'assets/fifa_highlights/highlights_03.webp',
        //   text: 'Denmark v Tunisia | Group D | FIFA World Cup Qatar 2022™',
        //   link: 'https://www.fifa.com/fifaplus/en/watch/3UG46kL82RDWDgxzt3QPjM'
        // },
        // {
        //   image: 'assets/fifa_highlights/highlights_04.webp',
        //   text: 'Argentina v Saudi Arabia | Group C | FIFA World Cup Qatar 2022™',
        //   link: 'https://www.fifa.com/fifaplus/en/watch/43Do27Etp3IapH0xwzbXOg'
        // },
        // {
        //   image: 'assets/fifa_highlights/highlights_1.webp',
        //   text: 'USA v Wales | Group B | FIFA World Cup Qatar 2022™',
        //   link: 'https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8'
        // },
        // {
        //   image: 'assets/fifa_highlights/highlights_2.webp',
        //   text: 'Senegal v Netherlands | Group A | FIFA World Cup Qatar 2022™',
        //   link: 'https://www.fifa.com/fifaplus/en/watch/3GDVIQobvl9FaFY6w74WZ3'
        // },
        // {
        //   image: 'assets/fifa_highlights/highlights_3.webp',
        //   text: 'England v IR Iran | Group B | FIFA World Cup Qatar 2022™',
        //   link: 'https://www.fifa.com/fifaplus/en/watch/39GjJjsq75cbbXY0JMADYV'
        // },
        // {
        //   image: 'assets/fifa_highlights/highlights_4.webp',
        //   text: 'Qatar v Ecuador | Group A | FIFA World Cup Qatar 2022™',
        //   link: 'https://www.fifa.com/fifaplus/en/watch/2CKN465NbbTuFcXLb6sSeQ'
        // },
        // ]
        this.fifaHighlights = [
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/63XwuAOoqYgNW0Q3E9PxJG",
                "text": "Argentina v France | Final | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_0.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/5BAGunqVa9YUoPdZxI8MTm",
                "text": "Croatia v Morocco | Play-off for third place | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_1.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/7HxpGAqmze4vGWm6dxD3tz",
                "text": "France v Morocco | Semi-finals | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_2.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/5t0hwOhuPS6LKAJD33IQym",
                "text": "Argentina v Croatia | Semi-finals | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_3.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/783zSqR6RRJrx6UiakMYc4",
                "text": "England v France | Quarter-finals | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_4.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4se3MdPEAeiq5n0e9eT14w",
                "text": "Morocco v Portugal | Quarter-finals | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_5.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/66evf9qAjJh9fF7GeYBmtd",
                "text": "Netherlands v Argentina | Quarter-finals | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_6.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/7Banu6D0k8OnqDT9iVyQ8x",
                "text": "Croatia v Brazil | Quarter-finals | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_7.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6yY38lFnzDNgPLLOfh4V1r",
                "text": "Portugal v Switzerland | Round of 16 | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_8.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/2ZqLZ2FFPV6urFL8A9fIBl",
                "text": "Morocco v Spain | Round of 16 | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_9.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6J1vG4ELULSQz0YSIQIQGz",
                "text": "Brazil v Korea Republic | Round of 16 | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_10.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/24omCQte8BW85haAm9hFut",
                "text": "Japan v Croatia | Round of 16 | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_11.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/1KduI591JSXhLPnU99xpiO",
                "text": "England v Senegal | Round of 16 | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_12.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/64SmxbyL5NcHO462P6j10t",
                "text": "France v Poland | Round of 16 | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_13.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/5hQ8DJM14tBciQZrOqq1hR",
                "text": "Argentina v Australia | Round of 16 | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_14.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/5XHGn2t9YobJ1GAFZKMDAT",
                "text": "Netherlands v USA | Round of 16 | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_15.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4tOIQ1C6UD18aMMz4kJt6t",
                "text": "Serbia v Switzerland | Group G | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_16.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6F4UYjMkwi9kMmx5ISh1j1",
                "text": "Cameroon v Brazil | Group G | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_17.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/481dbDcqSHoBkJkYS0IXag",
                "text": "Ghana v Uruguay | Group H | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_18.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/1wjjV5kxwpSHRjeEkxidIC",
                "text": "Korea Republic v Portugal | Group H | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_19.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4F9MvEtC1AQ5EUK8GfuE7c",
                "text": "Costa Rica v Germany | Group E | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_20.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6aotAd7chcYlldGATxZsKB",
                "text": "Japan v Spain | Group E | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_21.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/3LSU3XP8dlZkOve2bg61rE",
                "text": "Canada v Morocco | Group F | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_22.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/roJqCEwj8vnE7YFIRpP0z",
                "text": "Croatia v Belgium | Group F | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_23.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6verwbedF0SrmT4NhDH0Of",
                "text": "Saudi Arabia v Mexico | Group C | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_24.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/2uTpzYqmyXxgrjbThfuHs8",
                "text": "Poland v Argentina | Group C | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_25.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/49Qrop8RMmusZypBZexZ9s",
                "text": "Australia v Denmark | Group D | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_26.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/617bwDDuw2JVmo86lNJKC0",
                "text": "Tunisia v France | Group D | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_27.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6ssnUCant3LxkpTqHK8wJI",
                "text": "IR Iran v USA | Group B | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_28.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/63N4QLt0BNz5Xuj40n01zK",
                "text": "Wales v England | Group B | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_29.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4i8HAhyuvDcFZxYJZQA5o9",
                "text": "Ecuador v Senegal | Group A | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_30.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/5PSEpirzkfa7TgjPxj3K4E",
                "text": "Netherlands v Qatar | Group A | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_31.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/71l4VxdFkXEj3PvMiiTIkz",
                "text": "Portugal v Uruguay | Group H | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_32.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/7zzdOdEfb0YBZOLJ4OGsOE",
                "text": "Brazil v Switzerland | Group G | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_33.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/1EQcCW6cT5LMz4GwHFa4sF",
                "text": "Korea Republic v Ghana | Group H | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_34.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6vc3floGRGFqCuYiLYcIv1",
                "text": "Cameroon v Serbia | Group G | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_35.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/7hnoWgOU9tZgt2tpEtoKII",
                "text": "Spain v Germany | Group E | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_36.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/70u96PRLADGUYkTQbhU0xu",
                "text": "Croatia v Canada | Group F | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_37.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6JMVy762d1IzYHzM8hFHIE",
                "text": "Belgium v Morocco | Group F | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_38.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6DcvUVL3mMMPgqPvH2ylyZ",
                "text": "Japan v Costa Rica | Group E | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_39.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/2v4Kywu376wjM1NWZssi92",
                "text": "Argentina v Mexico | Group C | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_40.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/1gLQObDpWTDJ3SoTp9EMp5",
                "text": "France v Denmark | Group D | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_41.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4N5aGjb70DM5O4GokhMyB5",
                "text": "Poland v Saudi Arabia | Group C | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_42.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4DhEtG4tAmMlBpJdZ6Jjmw",
                "text": "Tunisia v Australia | Group D | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_43.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/2J6ih5nCaP2l4k6yXEfRx",
                "text": "England v USA | Group B | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_44.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4KjYBbKEaqyNdutdfpyYaZ",
                "text": "Netherlands v Ecuador | Group A | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_45.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/3rkJRLJHm5piA5nfErMA3k",
                "text": "Qatar v Senegal | Group A | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_46.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6gxbAVuBi54vC5DYMG0opA",
                "text": "Wales v IR Iran | Group B | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_47.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/1uxqiACRkfkdv3Iw5XVSvP",
                "text": "Brazil v Serbia | Group G | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_48.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/1abAi3NllBGQ1Q92mXqDWq",
                "text": "Portugal v Ghana | Group H | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_49.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4ABRMLDcJYi670lK2uIbaS",
                "text": "Uruguay v Korea Republic | Group H | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_50.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6AtFcveidIrUbxRASo4J0G",
                "text": "Switzerland v Cameroon | Group G | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_51.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/1OhKHQq1ygr19Cn617rb2D",
                "text": "Belgium v Canada | Group F | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_52.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/4B5PE6zLJHWnp5M5QVLQIZ",
                "text": "Spain v Costa Rica | Group E | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_53.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/25s19L79bTx5NPTqdNdRuJ",
                "text": "Germany v Japan | Group E | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_54.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/2O82PCHjMKnT6VU9XcfwHk",
                "text": "Morocco v Croatia | Group F | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_55.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/SRVD2OnUQYrQ2X9VLnGDF",
                "text": "France v Australia | Group D | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_56.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/160mKwOWPi2Mlp3GrpczZu",
                "text": "Mexico v Poland | Group C | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_57.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/3UG46kL82RDWDgxzt3QPjM",
                "text": "Denmark v Tunisia | Group D | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_58.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/43Do27Etp3IapH0xwzbXOg",
                "text": "Argentina v Saudi Arabia | Group C | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_59.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/6rnLprZqfXGriMwByd6wt8",
                "text": "USA v Wales | Group B | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_60.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/3GDVIQobvl9FaFY6w74WZ3",
                "text": "Senegal v Netherlands | Group A | FIFA World Cup Qatar 2022™ ",
                "image": "assets/fifa_highlights/highlights_61.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/39GjJjsq75cbbXY0JMADYV",
                "text": "England v IR Iran | Group B | FIFA World Cup Qatar 2022™ ",
                "image": "assets/fifa_highlights/highlights_62.webp"
            },
            {
                "link": "https://www.fifa.com/fifaplus/en/watch/2CKN465NbbTuFcXLb6sSeQ",
                "text": "Qatar v Ecuador | Group A | FIFA World Cup Qatar 2022™",
                "image": "assets/fifa_highlights/highlights_63.webp"
            }
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
        this.spotYesterdayDate = `${date.getFullYear()}-${(String(date.getMonth() + 1)).padStart(2, '0')}-${(String(date.getDate() - 1)).padStart(2, '0')}`;
        // console.log(this.yesterdayDate);
        this.title.setTitle('Hisense India | FIFA 2022');
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
        this.getRegistrationsOfSpotHisense({ target: { value: '2022-11-20' } });
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
        this.api.getSpotRegistrations().subscribe((data) => {
            console.log(data);
            if (data.data.length) {
                this.spotHisenseRegistrationsDB = data.data;
                this.filterSpotHisenseRegistrationsData(event);
            }
            else {
                this.spotHisenseRegistrationsDB = [];
            }
        }, (err) => {
            console.log(err);
        });
    }
    filterSpotHisenseRegistrationsData(event) {
        this.spotHisenseRegistrations = this.spotHisenseRegistrationsDB.filter((obj) => obj.date == event.target.value);
    }
    changeTab(tab) {
        if (tab != "Highlights") {
            this.currentTab = tab;
            const tabIndec = this.tabs.findIndex(t => t == tab);
            this.swiper.slideTo(tabIndec + 1);
        }
        else {
            this.currentTab = this.tabs[0];
            setTimeout(() => {
                this.HighlightsRef.nativeElement.scrollIntoView({ behavior: "smooth" });
            });
        }
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
FifaEventComponent.ɵfac = function FifaEventComponent_Factory(t) { return new (t || FifaEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title)); };
FifaEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FifaEventComponent, selectors: [["app-fifa-event"]], viewQuery: function FifaEventComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.HighlightsRef = _t.first);
    } }, decls: 17, vars: 5, consts: [[1, "fifa__event__container"], [1, "main-visual", "slider", "slick-initialized", "slick-slider", "slick-dotted"], [1, "slick-list", "draggable"], [1, "slick-track"], [1, "swiper", "mySwiperHome"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-pagination"], [1, "flex", "fifa__tabs__container"], [1, "tabs"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "about__fifa__tab", "style", "margin-top: 10px;", 4, "ngIf"], [4, "ngIf"], [1, "swiper-slide"], [2, "width", "100%", 3, "routerLink"], ["media", "(min-width:768px)", 3, "srcset"], [1, "ls-bg", 2, "width", "100%", 3, "src", "alt"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "about__fifa__tab", 2, "margin-top", "10px"], [1, "fifa__groups"], [1, "wrapper"], [1, "groups"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "fifa__highlights"], ["Highlights", ""], [1, "highlights", "groups"], ["target", "_blank", "class", "highlights__card", 3, "href", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card__heading"], [1, "card__body"], [4, "ngFor", "ngForOf"], ["width", "58", "height", "36", 3, "src", "alt"], ["target", "_blank", 1, "highlights__card", 3, "href"], [1, "image__container"], [3, "src", "alt"], [2, "font-size", "14px", "padding", "7px 10px"], ["alt", "steps to participate", 1, "ls-bg", 2, "width", "100%", 3, "src"], [1, "date__picker"], ["min", "2022-09-26", "max", "2022-10-25", "value", "2022-10-25", "type", "date", "name", "date", "id", "date", 3, "change"], ["class", "no-records", 4, "ngIf"], [2, "background", "#00b3ac"], [2, "border-top-left-radius", "8px"], [2, "border-top-right-radius", "8px"], [1, "no-records"], ["media", "(min-width:768px)", "srcset", "assets/spot-hisense-steps-to-participate-desktop.webp"], ["src", "assets/spot-hisense-steps-to-participate-mobile.webp", "alt", "steps to participate", 1, "ls-bg", 2, "width", "100%"], ["min", "2022-11-20", "value", "2022-11-20", "type", "date", "name", "date", "id", "date", 3, "max", "change"]], template: function FifaEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FifaEventComponent_div_6_Template, 5, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 7)(8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FifaEventComponent_a_13_Template, 2, 4, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, FifaEventComponent_section_14_Template, 14, 2, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, FifaEventComponent_section_15_Template, 10, 3, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, FifaEventComponent_section_16_Template, 10, 2, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentTab == "About FIFA 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentTab == "Spin the wheel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.currentTab == "Spot Hisense");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [src_app_shared_pipes_mask_phone_pipe__WEBPACK_IMPORTED_MODULE_3__.MaskPhonePipe], styles: [".f-24 {\n  font-size: 36px;\n}\n\n.countdown__wrapper {\n  margin-top: -10px;\n  padding: 48px;\n  background-color: #B30007;\n  color: white;\n}\n\n.countdown__container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.count__container {\n  display: flex;\n  gap: 5rem;\n  text-align: center;\n  margin-top: 36px;\n  align-items: center;\n}\n\nsvg {\n  fill: #E60009 !important;\n}\n\n.count {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 768px) {\n  .count__container {\n    gap: 1rem;\n  }\n\n  .count {\n    font-size: 16px;\n  }\n\n  .f-24 {\n    font-size: 24px;\n  }\n\n  .category {\n    font-size: 12px;\n  }\n\n  .d-sm-none {\n    display: none;\n  }\n}\n\n.about__fifa__tab h3 {\n  color: #03122b;\n  text-align: center;\n  font-size: 32px;\n  margin-bottom: 24px;\n}\n\n.fifa__groups {\n  background-color: #F3F3F3;\n  padding: 72px;\n}\n\n.fifa__highlights {\n  background-color: #F3F3F3;\n  padding: 72px;\n  padding-top: 0;\n}\n\n.fifa__highlights .highlights .highlights__card {\n  cursor: pointer;\n  background: #00AAA6 !important;\n  border-radius: 5px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  color: white !important;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container {\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container img {\n  width: 100%;\n  border-radius: 5px;\n  transition: transform 450ms ease-in-out;\n  height: 150px;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container img:hover {\n  transform: scale(1.05);\n}\n\n.groups {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 2.5rem;\n  gap: 2.5rem;\n}\n\n.card {\n  background-color: #00AAA6;\n  color: white;\n  border-radius: 12px;\n  padding-top: 16px;\n  text-align: center;\n}\n\n.card .card__heading {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.card .card__body {\n  background-color: white;\n  color: black;\n  border-radius: 12px;\n  display: flex;\n  gap: 2rem;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.card .card__body div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 1100px) {\n  .groups img {\n    width: 36px;\n    height: 24px;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .groups {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .groups {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 520px) {\n  .groups {\n    grid-template-columns: 1fr;\n  }\n}\n\n.date__picker {\n  background-color: #fff;\n}\n\n.date__picker .wrapper {\n  width: 80%;\n  margin: 0px auto;\n  padding: 40px 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  gap: 2rem;\n}\n\n.date__picker .wrapper h3 {\n  font-size: 36px;\n}\n\n.date__picker .wrapper input {\n  width: 200px;\n  margin: auto;\n  padding: 8px 16px;\n  font-size: 15px;\n  border: 1px solid #00AAA6;\n  border-radius: 6px;\n}\n\n.date__picker .wrapper table {\n  border-collapse: collapse;\n  width: 100%;\n  overflow-x: auto;\n  min-width: 500px;\n  width: 60%;\n  margin: auto;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.date__picker .wrapper table .telephone {\n  color: #00AAA6 !important;\n}\n\n.date__picker .wrapper table tr {\n  width: 100%;\n}\n\n.date__picker .wrapper table tr:last-child {\n  border-bottom: 3px solid #00AAA6;\n}\n\n.date__picker .wrapper td,\n.date__picker .wrapper th {\n  border-bottom: 0.5px solid #ccc !important;\n  border-top: 0.5px solid #ccc !important;\n  text-align: left !important;\n  padding: 8px 24px !important;\n  white-space: nowrap !important;\n}\n\n.date__picker .wrapper th {\n  font-size: 14px;\n  font-weight: bold;\n  color: white;\n  border-top: none !important;\n}\n\n@media screen and (max-width: 576px) {\n  .date__picker .wrapper {\n    width: 70%;\n  }\n  .date__picker .wrapper table {\n    overflow-x: auto;\n    display: block;\n    margin: auto;\n    min-width: auto;\n  }\n  .date__picker .wrapper table tr {\n    width: 100%;\n  }\n}\n\n.ls-bg {\n  cursor: pointer;\n}\n\n.swiper-pagination {\n  bottom: 0px !important;\n}\n\n.swiper-pagination-bullet {\n  color: #09cbc6 !important;\n  border: none !important;\n  width: 10px !important;\n  height: 10px !important;\n  outline: none !important;\n  margin: 7px !important;\n  border-radius: 50% !important;\n  background: transparent !important;\n  border: 2px solid #09cbc6 !important;\n  transition: background-color 500ms !important;\n  cursor: pointer !important;\n}\n\n.swiper-pagination-bullet::before {\n  display: none !important;\n}\n\n.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background: #00AAA6 !important;\n}\n\n.fifa__tabs__container {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding: 16px 0;\n}\n\n.fifa__tabs__container .tabs {\n  border-radius: 50px;\n  padding: 20px;\n}\n\n.fifa__tabs__container .list-group {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  gap: 16px;\n}\n\n.fifa__tabs__container .list-group a {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1.2px solid #09cbc6;\n  border-radius: 16px;\n}\n\n.fifa__tabs__container .list-group .active {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .fifa__tabs__container .tabs {\n    padding: 12px;\n  }\n  .fifa__tabs__container .list-group {\n    gap: 12px;\n  }\n  .fifa__tabs__container .list-group a {\n    padding: 0.75rem 1rem;\n    border: 1.2px solid #09cbc6;\n    border-radius: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZmEtZXZlbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxmaWZhLWV2ZW50XFxmaWZhLWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxTQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxhQUFBO0VDQ047QUFDRjs7QURHSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RSOztBREtBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRko7O0FETVE7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQ0paOztBRE1ZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSmhCOztBRE1nQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtBQ0pwQjs7QURNb0I7RUFDSSxzQkFBQTtBQ0p4Qjs7QURZQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBQ1RKOztBRFlBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEV0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RSOztBRFlJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ1ZSOztBRFlRO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNWWjs7QURlQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNiVjtBQUNGOztBRGlCQTtFQUNJO0lBQ0ksa0NBQUE7RUNmTjtBQUNGOztBRGtCQTtFQUNJO0lBQ0ksOEJBQUE7RUNoQk47QUFDRjs7QURtQkE7RUFDSTtJQUNJLDBCQUFBO0VDakJOO0FBQ0Y7O0FEb0JBO0VBQ0ksc0JBQUE7QUNsQko7O0FEb0JJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNsQlI7O0FEb0JRO0VBQ0ksZUFBQTtBQ2xCWjs7QURxQlE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUNwQlo7O0FEdUJRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUN0Qlo7O0FEd0JZO0VBQ0kseUJBQUE7QUN0QmhCOztBRHlCWTtFQUNJLFdBQUE7QUN2QmhCOztBRDBCZ0I7RUFDSSxnQ0FBQTtBQ3hCcEI7O0FEOEJROztFQUVJLDBDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUM1Qlo7O0FEK0JRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDN0JaOztBRGtDQTtFQUVRO0lBQ0ksVUFBQTtFQ2hDVjtFRGtDVTtJQUVJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDakNkO0VEbUNjO0lBQ0ksV0FBQTtFQ2pDbEI7QUFDRjs7QUR3Q0E7RUFDSSxlQUFBO0FDdENKOztBRHlDQTtFQUNJLHNCQUFBO0FDdENKOztBRHlDQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsMEJBQUE7QUN0Q0o7O0FEd0NJO0VBQ0ksd0JBQUE7QUN0Q1I7O0FEMENBO0VBQ0ksOEJBQUE7QUN2Q0o7O0FEMENBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDdkNKOztBRHlDSTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtBQ3hDUjs7QUQ0Q0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQzFDUjs7QUQ0Q1E7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUMxQ1o7O0FENkNRO0VBQ0ksV0FBQTtFQUVBLG9DQUFBO0VBQ0EsZ0NBQUE7QUM1Q1o7O0FEa0RBO0VBRVE7SUFDSSxhQUFBO0VDaERWO0VEbURNO0lBQ0ksU0FBQTtFQ2pEVjtFRG1EVTtJQUNJLHFCQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtFQ2pEZDtBQUNGIiwiZmlsZSI6ImZpZmEtZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZi0yNCB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5jb3VudGRvd25fX3dyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBwYWRkaW5nOiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IzMDAwNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvdW50ZG93bl9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY291bnRfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBmaWxsOiAjRTYwMDA5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb3VudCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb3VudF9fY29udGFpbmVyIHtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmYtMjQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZC1zbS1ub25lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWJvdXRfX2ZpZmFfX3RhYiB7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6IHJnYigzLCAxOCwgNDMpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpZmFfX2dyb3VwcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xyXG4gICAgcGFkZGluZzogNzJweDtcclxufVxyXG5cclxuLmZpZmFfX2hpZ2hsaWdodHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcclxuICAgIHBhZGRpbmc6IDcycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuXHJcbiAgICAuaGlnaGxpZ2h0cyB7XHJcblxyXG4gICAgICAgIC5oaWdobGlnaHRzX19jYXJkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLmltYWdlX19jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZ3JvdXBzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdhcDogMi41cmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5jYXJkX19oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX19ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAuZ3JvdXBzIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuZ3JvdXBzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmdyb3VwcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgLmdyb3VwcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlX19waWNrZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAycmVtO1xyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBQUE2O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuXHJcbiAgICAgICAgICAgIC50ZWxlcGhvbmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDBBQUE2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGQsXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgLmRhdGVfX3BpY2tlciB7XHJcbiAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG5cclxuICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubHMtYmcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICBjb2xvcjogIzA5Y2JjNiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDdweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA5Y2JjNiAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWZhX190YWJzX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweCAwO1xyXG5cclxuICAgIC50YWJzIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZWFlOWU5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZ2FwOiAxNnB4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDEuMnB4IHNvbGlkICMwOWNiYzY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyRkE0RTcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZpZmFfX3RhYnNfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgLnRhYnMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgICAgICBnYXA6IDEycHg7XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZi0yNCB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmNvdW50ZG93bl9fd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nOiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjMwMDA3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb3VudGRvd25fX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY291bnRfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcge1xuICBmaWxsOiAjRTYwMDA5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb3VudF9fY29udGFpbmVyIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAuY291bnQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mLTI0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAuY2F0ZWdvcnkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5kLXNtLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hYm91dF9fZmlmYV9fdGFiIGgzIHtcbiAgY29sb3I6ICMwMzEyMmI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uZmlmYV9fZ3JvdXBzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcbiAgcGFkZGluZzogNzJweDtcbn1cblxuLmZpZmFfX2hpZ2hsaWdodHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICBwYWRkaW5nOiA3MnB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5maWZhX19oaWdobGlnaHRzIC5oaWdobGlnaHRzIC5oaWdobGlnaHRzX19jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmZpZmFfX2hpZ2hsaWdodHMgLmhpZ2hsaWdodHMgLmhpZ2hsaWdodHNfX2NhcmQgLmltYWdlX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZpZmFfX2hpZ2hsaWdodHMgLmhpZ2hsaWdodHMgLmhpZ2hsaWdodHNfX2NhcmQgLmltYWdlX19jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQ1MG1zIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmZpZmFfX2hpZ2hsaWdodHMgLmhpZ2hsaWdodHMgLmhpZ2hsaWdodHNfX2NhcmQgLmltYWdlX19jb250YWluZXIgaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmdyb3VwcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBnYXA6IDIuNXJlbTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCAuY2FyZF9faGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5jYXJkIC5jYXJkX19ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNhcmQgLmNhcmRfX2JvZHkgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuZ3JvdXBzIGltZyB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmdyb3VwcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmdyb3VwcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xuICAuZ3JvdXBzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLmRhdGVfX3BpY2tlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcGFkZGluZzogNDBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIGgzIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciBpbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBBQUE2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRhYmxlIC50ZWxlcGhvbmUge1xuICBjb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSB0ciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSB0cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMEFBQTY7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRkLFxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0aCB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAyNHB4ICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmRhdGVfX3BpY2tlciAud3JhcHBlciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRhYmxlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gIH1cbiAgLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSB0ciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5scy1iZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGNvbG9yOiAjMDljYmM2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDdweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgIzA5Y2JjNiAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG59XG5cbi5maWZhX190YWJzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4IDA7XG59XG4uZmlmYV9fdGFic19fY29udGFpbmVyIC50YWJzIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5maWZhX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDE2cHg7XG59XG4uZmlmYV9fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIGEge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5maWZhX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmlmYV9fdGFic19fY29udGFpbmVyIC50YWJzIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG4gIC5maWZhX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAge1xuICAgIGdhcDogMTJweDtcbiAgfVxuICAuZmlmYV9fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIGEge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBib3JkZXI6IDEuMnB4IHNvbGlkICMwOWNiYzY7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxufSJdfQ== */"], encapsulation: 2 });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fifa_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fifa-event.component */ 2765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_pipes_mask_phone_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pipes/mask-phone.pipe */ 1782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        component: _fifa_event_component__WEBPACK_IMPORTED_MODULE_0__.FifaEventComponent
    }
];
class FifaEventModule {
}
FifaEventModule.ɵfac = function FifaEventModule_Factory(t) { return new (t || FifaEventModule)(); };
FifaEventModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FifaEventModule });
FifaEventModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FifaEventModule, { declarations: [_fifa_event_component__WEBPACK_IMPORTED_MODULE_0__.FifaEventComponent,
        src_app_shared_pipes_mask_phone_pipe__WEBPACK_IMPORTED_MODULE_1__.MaskPhonePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 1782:
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/mask-phone.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaskPhonePipe": () => (/* binding */ MaskPhonePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MaskPhonePipe {
    transform(value, ...args) {
        value = String(value);
        return value.substring(0, 4) + "****" + value.substring(8);
    }
}
MaskPhonePipe.ɵfac = function MaskPhonePipe_Factory(t) { return new (t || MaskPhonePipe)(); };
MaskPhonePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "maskPhone", type: MaskPhonePipe, pure: true });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_fifa-event_fifa-event_module_ts.js.map