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
        this.tabs = ["About FIFA 2022", 'Spot Hisense', "Spin the wheel", "Highlights"];
        this.currentTab = "About FIFA 2022";
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [src_app_shared_pipes_mask_phone_pipe__WEBPACK_IMPORTED_MODULE_3__.MaskPhonePipe], styles: [".f-24 {\n  font-size: 36px;\n}\n\n.countdown__wrapper {\n  margin-top: -10px;\n  padding: 48px;\n  background-color: #B30007;\n  color: white;\n}\n\n.countdown__container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.count__container {\n  display: flex;\n  gap: 5rem;\n  text-align: center;\n  margin-top: 36px;\n  align-items: center;\n}\n\nsvg {\n  fill: #E60009 !important;\n}\n\n.count {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 768px) {\n  .count__container {\n    gap: 1rem;\n  }\n\n  .count {\n    font-size: 16px;\n  }\n\n  .f-24 {\n    font-size: 24px;\n  }\n\n  .category {\n    font-size: 12px;\n  }\n\n  .d-sm-none {\n    display: none;\n  }\n}\n\n.about__fifa__tab h3 {\n  color: #03122b;\n  text-align: center;\n  font-size: 32px;\n  margin-bottom: 24px;\n}\n\n.fifa__groups {\n  background-color: #F3F3F3;\n  padding: 72px;\n}\n\n.fifa__highlights {\n  background-color: #F3F3F3;\n  padding: 72px;\n  padding-top: 0;\n}\n\n.fifa__highlights .highlights .highlights__card {\n  cursor: pointer;\n  background: #00AAA6 !important;\n  border-radius: 5px;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  color: white !important;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container {\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container img {\n  width: 100%;\n  border-radius: 5px;\n  transition: transform 450ms ease-in-out;\n  height: 150px;\n}\n\n.fifa__highlights .highlights .highlights__card .image__container img:hover {\n  transform: scale(1.05);\n}\n\n.groups {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 2.5rem;\n  gap: 2.5rem;\n}\n\n.card {\n  background-color: #00AAA6;\n  color: white;\n  border-radius: 12px;\n  padding-top: 16px;\n  text-align: center;\n}\n\n.card .card__heading {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.card .card__body {\n  background-color: white;\n  color: black;\n  border-radius: 12px;\n  display: flex;\n  gap: 2rem;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.card .card__body div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 1100px) {\n  .groups img {\n    width: 36px;\n    height: 24px;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .groups {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .groups {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 520px) {\n  .groups {\n    grid-template-columns: 1fr;\n  }\n}\n\n.date__picker {\n  background-color: #fff;\n}\n\n.date__picker .wrapper {\n  width: 80%;\n  margin: 0px auto;\n  padding: 40px 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  gap: 2rem;\n}\n\n.date__picker .wrapper h3 {\n  font-size: 36px;\n}\n\n.date__picker .wrapper input {\n  width: 200px;\n  margin: auto;\n  padding: 8px 16px;\n  font-size: 15px;\n  border: 1px solid #00AAA6;\n  border-radius: 6px;\n}\n\n.date__picker .wrapper table {\n  border-collapse: collapse;\n  width: 100%;\n  overflow-x: auto;\n  min-width: 500px;\n  width: 60%;\n  margin: auto;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.date__picker .wrapper table .telephone {\n  color: #00AAA6 !important;\n}\n\n.date__picker .wrapper table tr {\n  width: 100%;\n}\n\n.date__picker .wrapper table tr:last-child {\n  border-bottom: 3px solid #00AAA6;\n}\n\n.date__picker .wrapper td,\n.date__picker .wrapper th {\n  border-bottom: 0.5px solid #ccc !important;\n  border-top: 0.5px solid #ccc !important;\n  text-align: left !important;\n  padding: 8px 24px !important;\n  white-space: nowrap !important;\n}\n\n.date__picker .wrapper th {\n  font-size: 14px;\n  font-weight: bold;\n  color: white;\n  border-top: none !important;\n}\n\n@media screen and (max-width: 576px) {\n  .date__picker .wrapper {\n    width: 70%;\n  }\n  .date__picker .wrapper table {\n    overflow-x: auto;\n    display: block;\n    margin: auto;\n    min-width: auto;\n  }\n  .date__picker .wrapper table tr {\n    width: 100%;\n  }\n}\n\n.ls-bg {\n  cursor: pointer;\n}\n\n.swiper-pagination {\n  bottom: 0px !important;\n}\n\n.swiper-pagination-bullet {\n  color: #09cbc6 !important;\n  border: none !important;\n  width: 10px !important;\n  height: 10px !important;\n  outline: none !important;\n  margin: 7px !important;\n  border-radius: 50% !important;\n  background: transparent !important;\n  border: 2px solid #09cbc6 !important;\n  transition: background-color 500ms !important;\n  cursor: pointer !important;\n}\n\n.swiper-pagination-bullet::before {\n  display: none !important;\n}\n\n.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background: #00AAA6 !important;\n}\n\n.fifa__tabs__container {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding: 16px 0;\n}\n\n.fifa__tabs__container .tabs {\n  border-radius: 50px;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.fifa__tabs__container .list-group {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  gap: 16px;\n}\n\n.fifa__tabs__container .list-group a {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1.2px solid #09cbc6;\n  border-radius: 16px;\n}\n\n.fifa__tabs__container .list-group .active {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .fifa__tabs__container .tabs {\n    padding: 12px;\n  }\n  .fifa__tabs__container .list-group {\n    gap: 12px;\n  }\n  .fifa__tabs__container .list-group a {\n    padding: 0.75rem 1rem;\n    border: 1.2px solid #09cbc6;\n    border-radius: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZmEtZXZlbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxmaWZhLWV2ZW50XFxmaWZhLWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxTQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxhQUFBO0VDQ047QUFDRjs7QURHSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RSOztBREtBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRko7O0FETVE7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQ0paOztBRE1ZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSmhCOztBRE1nQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtBQ0pwQjs7QURNb0I7RUFDSSxzQkFBQTtBQ0p4Qjs7QURZQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBQ1RKOztBRFlBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEV0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RSOztBRFlJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ1ZSOztBRFlRO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNWWjs7QURlQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNiVjtBQUNGOztBRGlCQTtFQUNJO0lBQ0ksa0NBQUE7RUNmTjtBQUNGOztBRGtCQTtFQUNJO0lBQ0ksOEJBQUE7RUNoQk47QUFDRjs7QURtQkE7RUFDSTtJQUNJLDBCQUFBO0VDakJOO0FBQ0Y7O0FEb0JBO0VBQ0ksc0JBQUE7QUNsQko7O0FEb0JJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNsQlI7O0FEb0JRO0VBQ0ksZUFBQTtBQ2xCWjs7QURxQlE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUNwQlo7O0FEdUJRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7QUN0Qlo7O0FEd0JZO0VBQ0kseUJBQUE7QUN0QmhCOztBRHlCWTtFQUNJLFdBQUE7QUN2QmhCOztBRDBCZ0I7RUFDSSxnQ0FBQTtBQ3hCcEI7O0FEOEJROztFQUVJLDBDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUM1Qlo7O0FEK0JRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDN0JaOztBRGtDQTtFQUVRO0lBQ0ksVUFBQTtFQ2hDVjtFRGtDVTtJQUVJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDakNkO0VEbUNjO0lBQ0ksV0FBQTtFQ2pDbEI7QUFDRjs7QUR3Q0E7RUFDSSxlQUFBO0FDdENKOztBRHlDQTtFQUNJLHNCQUFBO0FDdENKOztBRHlDQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsMEJBQUE7QUN0Q0o7O0FEd0NJO0VBQ0ksd0JBQUE7QUN0Q1I7O0FEMENBO0VBQ0ksOEJBQUE7QUN2Q0o7O0FEMENBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDdkNKOztBRHlDSTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FDeENSOztBRDJDSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDekNSOztBRDJDUTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ3pDWjs7QUQ0Q1E7RUFDSSxXQUFBO0VBRUEsb0NBQUE7RUFDQSxnQ0FBQTtBQzNDWjs7QURpREE7RUFFUTtJQUNJLGFBQUE7RUMvQ1Y7RURrRE07SUFDSSxTQUFBO0VDaERWO0VEa0RVO0lBQ0kscUJBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0VDaERkO0FBQ0YiLCJmaWxlIjoiZmlmYS1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mLTI0IHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLmNvdW50ZG93bl9fd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIHBhZGRpbmc6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjMwMDA3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY291bnRkb3duX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3VudF9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIGZpbGw6ICNFNjAwMDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvdW50X19jb250YWluZXIge1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZi0yNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kLXNtLW5vbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hYm91dF9fZmlmYV9fdGFiIHtcclxuICAgIGgzIHtcclxuICAgICAgICBjb2xvcjogcmdiKDMsIDE4LCA0Myk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlmYV9fZ3JvdXBzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XHJcbiAgICBwYWRkaW5nOiA3MnB4O1xyXG59XHJcblxyXG4uZmlmYV9faGlnaGxpZ2h0cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xyXG4gICAgcGFkZGluZzogNzJweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG5cclxuICAgIC5oaWdobGlnaHRzIHtcclxuXHJcbiAgICAgICAgLmhpZ2hsaWdodHNfX2NhcmQge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2VfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0NTBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncm91cHMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ2FwOiAyLjVyZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmNhcmRfX2hlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfX2JvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC5ncm91cHMge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5ncm91cHMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZ3JvdXBzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAuZ3JvdXBzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGVfX3BpY2tlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEFBQTY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLnRlbGVwaG9uZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMEFBQTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICAuZGF0ZV9fcGlja2VyIHtcclxuICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5scy1iZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgIGNvbG9yOiAjMDljYmM2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDljYmM2ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMEFBQTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcblxyXG4gICAgLnRhYnMge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNlYWU5ZTk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBnYXA6IDE2cHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJGQTRFNyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmlmYV9fdGFic19fY29udGFpbmVyIHtcclxuICAgICAgICAudGFicyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgICAgIGdhcDogMTJweDtcclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5mLTI0IHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uY291bnRkb3duX193cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmc6IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMzAwMDc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvdW50ZG93bl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb3VudF9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2ZyB7XG4gIGZpbGw6ICNFNjAwMDkgIWltcG9ydGFudDtcbn1cblxuLmNvdW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvdW50X19jb250YWluZXIge1xuICAgIGdhcDogMXJlbTtcbiAgfVxuXG4gIC5jb3VudCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmYtMjQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5jYXRlZ29yeSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmQtc20tbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmFib3V0X19maWZhX190YWIgaDMge1xuICBjb2xvcjogIzAzMTIyYjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5maWZhX19ncm91cHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICBwYWRkaW5nOiA3MnB4O1xufVxuXG4uZmlmYV9faGlnaGxpZ2h0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XG4gIHBhZGRpbmc6IDcycHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmZpZmFfX2hpZ2hsaWdodHMgLmhpZ2hsaWdodHMgLmhpZ2hsaWdodHNfX2NhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMEFBQTYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uZmlmYV9faGlnaGxpZ2h0cyAuaGlnaGxpZ2h0cyAuaGlnaGxpZ2h0c19fY2FyZCAuaW1hZ2VfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmlmYV9faGlnaGxpZ2h0cyAuaGlnaGxpZ2h0cyAuaGlnaGxpZ2h0c19fY2FyZCAuaW1hZ2VfX2NvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDUwbXMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uZmlmYV9faGlnaGxpZ2h0cyAuaGlnaGxpZ2h0cyAuaGlnaGxpZ2h0c19fY2FyZCAuaW1hZ2VfX2NvbnRhaW5lciBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uZ3JvdXBzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdhcDogMi41cmVtO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIC5jYXJkX19oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmNhcmQgLmNhcmRfX2JvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY2FyZCAuY2FyZF9fYm9keSBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5ncm91cHMgaW1nIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuZ3JvdXBzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZ3JvdXBzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gIC5ncm91cHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4uZGF0ZV9fcGlja2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgaDMge1xuICBmb250LXNpemU6IDM2cHg7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIGlucHV0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEFBQTY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUgLnRlbGVwaG9uZSB7XG4gIGNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRhYmxlIHRyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRhYmxlIHRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwQUFBNjtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGQsXG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDI0cHggIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuZGF0ZV9fcGlja2VyIC53cmFwcGVyIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG4gIC5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgfVxuICAuZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRhYmxlIHRyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmxzLWJnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgY29sb3I6ICMwOWNiYzYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDljYmM2ICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0OjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwMEFBQTYgIWltcG9ydGFudDtcbn1cblxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMDtcbn1cbi5maWZhX190YWJzX19jb250YWluZXIgLnRhYnMge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xufVxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMTZweDtcbn1cbi5maWZhX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAgYSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCAuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5maWZhX190YWJzX19jb250YWluZXIgLnRhYnMge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbiAgLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCB7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG4gIC5maWZhX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAgYSB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB9XG59Il19 */"], encapsulation: 2 });


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