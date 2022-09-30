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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);







function FifaEventComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "a", 17)(2, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "source", 18)(4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("srcset", ctx_r0.fifaDetails.desktop_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.fifaDetails.mobile_image_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function FifaEventComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FifaEventComponent_a_13_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const tab_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.changeTab(tab_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, tab_r6 == ctx_r1.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tab_r6);
} }
function FifaEventComponent_section_14_div_39_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const country_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", country_r12.flag, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", country_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](country_r12.name);
} }
function FifaEventComponent_section_14_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FifaEventComponent_section_14_div_39_div_4_Template, 4, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const group_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r10.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r10.data);
} }
function FifaEventComponent_section_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 21)(1, "section", 22)(2, "div", 23)(3, "div")(4, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Tournament starts in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div")(18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div")(25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "svg", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div")(32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, FifaEventComponent_section_14_div_39_Template, 5, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.seconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.groups);
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
    const record_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r17.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r17.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](record_r17.spin_wheel_prize.description);
} }
function FifaEventComponent_section_15_div_9_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table")(1, "tr", 46)(2, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Prize won");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FifaEventComponent_section_15_div_9_table_1_tr_8_Template, 7, 3, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r14.registrations);
} }
function FifaEventComponent_section_15_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No winners found! Check back later");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FifaEventComponent_section_15_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FifaEventComponent_section_15_div_9_table_1_Template, 9, 1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FifaEventComponent_section_15_div_9_div_2_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.registrations.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.registrations.length);
} }
function FifaEventComponent_section_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section")(1, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "source", 40)(3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 42)(5, "div", 43)(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Daily Winners");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FifaEventComponent_section_15_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.getRegistrations($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FifaEventComponent_section_15_div_9_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("max", ctx_r3.yesterdayDate)("value", ctx_r3.yesterdayDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.registrations);
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
        this.tabs = ["About FIFA 2022", "How to participate"];
        this.currentTab = "About FIFA 2022";
        this.slides = [
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/1.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/1.webp`
            },
            {
                mobile_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/2.webp`,
                desktop_image_full_url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/new-arrivals/slider/2.webp`
            }
        ];
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
        this.fifaDetails = {
            "desktop_image": "slide-1-300822.webp",
            "mobile_image": "slide-1-300822-mobile.webp",
            "desktop_image_full_url": `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Desktop.webp`,
            "mobile_image_full_url": `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Mobile.webp`
        };
        this.state.mobileNavToggle.next(false);
        const date = new Date();
        this.yesterdayDate = `${date.getFullYear()}-${(String(date.getMonth() + 1)).padStart(2, '0')}-${date.getDate() - 1}`;
        // console.log(this.yesterdayDate);
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
                autoplay: {
                    delay: 6000,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            this.swiper.on('slideChange', (event) => {
                if (event.activeIndex % 2 == 1) {
                    this.currentTab = this.tabs[0];
                }
                else {
                    this.currentTab = this.tabs[1];
                }
            });
        });
        this.getRegistrations({ target: { value: this.yesterdayDate } });
    }
    ngAfterViewInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            // Set the date we're counting down to
            let countDownDate = new Date("Nov 20, 2022 16:00:00").getTime();
            // Update the count down every 1 second
            this.x = setInterval(() => {
                // Get today's date and time
                let now = new Date().getTime();
                // Find the distance between now and the count down date
                let distance = countDownDate - now;
                // Time calculations for days, hours, minutes and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if (this.days !== days) {
                    this.days = days;
                }
                if (this.hours !== hours) {
                    this.hours = hours;
                }
                if (this.minutes !== minutes) {
                    this.minutes = minutes;
                }
                if (this.seconds !== seconds) {
                    this.seconds = seconds;
                }
                // Output the result in an element with id="demo"
                // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                //   + minutes + "m " + seconds + "s ";
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(this.x);
                    // document.getElementById("demo").innerHTML = "EXPIRED";
                }
            }, 1000);
        }
    }
    getRegistrations(event) {
        console.log(event.target.value);
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
    changeTab(tab) {
        this.currentTab = tab;
        if (tab == this.tabs[0]) {
            this.swiper.slidePrev();
        }
        else {
            this.swiper.slideNext();
        }
    }
    ngOnDestroy() {
        if (this.x) {
            clearInterval(this.x);
        }
    }
}
FifaEventComponent.ɵfac = function FifaEventComponent_Factory(t) { return new (t || FifaEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
FifaEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FifaEventComponent, selectors: [["app-fifa-event"]], decls: 16, vars: 4, consts: [[1, "fifa__event__container"], [1, "main-visual", "slider", "slick-initialized", "slick-slider", "slick-dotted"], [1, "slick-list", "draggable"], [1, "slick-track"], [1, "swiper", "mySwiperHome"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "swiper-pagination"], [1, "flex", "fifa__tabs__container"], [1, "tabs"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["style", "margin-top: 10px;", 4, "ngIf"], [4, "ngIf"], [1, "swiper-slide"], [2, "width", "100%"], ["media", "(min-width:768px)", 3, "srcset"], [1, "ls-bg", 2, "width", "100%", 3, "src"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [2, "margin-top", "10px"], [1, "countdown__wrapper"], [1, "countdown__container"], [1, "f-24"], [1, "count__container"], ["width", "96", "height", "25", "viewBox", "0 0 96 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "d-sm-none", 2, "transform", "rotate(180deg)"], ["d", "M29.5654 12.1734L32.7897 15.431L36.0139 12.1734L32.7897 8.92823L29.5654 12.1734ZM14.9761 12.1734L17.805 15.0331L20.6463 12.1734L17.805 9.32611L14.9761 12.1734ZM0.386719 12.1734L2.8574 14.6601L5.32808 12.1734L2.8574 9.68666L0.386719 12.1734ZM58.7318 12.1734L62.7467 16.2268L66.7739 12.1734L62.7467 8.13245L58.7318 12.1734ZM44.1424 12.1734L47.7867 15.8289L51.4062 12.1734L47.7867 8.53034L44.1424 12.1734ZM95.4091 11.4771C95.2679 9.09816 94.429 6.81476 92.9984 4.91574C91.5678 3.01672 89.6097 1.58739 87.372 0.808542C85.1342 0.0296895 82.7172 -0.0636941 80.4266 0.540198C78.1361 1.14409 76.075 2.41812 74.5039 4.20117C72.9329 5.98421 71.9225 8.1962 71.6006 10.5573C71.2787 12.9183 71.6597 15.3224 72.6955 17.4655C73.7312 19.6086 75.3752 21.3944 77.4194 22.597C79.4636 23.7996 81.8163 24.365 84.1798 24.2216C87.3477 24.0295 90.3102 22.5791 92.4159 20.1893C94.5216 17.7994 95.5982 14.6657 95.4091 11.4771ZM86.0823 3.818C87.9979 4.43825 89.6342 5.71969 90.7024 7.43617C90.2545 7.74995 89.728 7.93087 89.183 7.95836C88.6755 7.98368 88.1696 7.88362 87.7094 7.66687C87.2492 7.45012 86.8487 7.1233 86.5429 6.71492C86.237 6.30654 86.0352 5.82899 85.9549 5.32402C85.8746 4.81905 85.9183 4.30205 86.0823 3.818ZM76.7184 17.2339C75.6745 15.8726 75.0631 14.2259 74.9642 12.5091C74.9642 12.248 74.9642 11.9994 74.9642 11.7382C75.5812 11.7798 76.1714 12.0076 76.6578 12.3919C77.1442 12.7762 77.5043 13.2991 77.691 13.8924C77.8777 14.4858 77.8825 15.122 77.7045 15.718C77.5266 16.3141 77.1743 16.8424 76.6937 17.2339H76.7184ZM76.3478 7.28697C77.4304 5.59471 79.0705 4.34019 80.9803 3.7434C81.0657 3.99685 81.1197 4.25988 81.1409 4.52665C81.1881 5.34935 80.9089 6.1573 80.3645 6.77282C79.8201 7.38835 79.0552 7.76109 78.2378 7.80916C77.5608 7.87599 76.8813 7.7094 76.3107 7.33668L76.3478 7.28697ZM84.0069 20.5412C82.8082 20.609 81.6087 20.4226 80.4862 19.9942C80.6762 19.3564 81.0655 18.7973 81.5963 18.3999C82.127 18.0024 82.7709 17.7878 83.4325 17.7878C84.094 17.7878 84.7379 18.0024 85.2686 18.3999C85.7994 18.7973 86.1886 19.3564 86.3787 19.9942C85.6096 20.3122 84.7978 20.5134 83.9698 20.591L84.0069 20.5412ZM86.9717 11.5642L85.8846 14.685C85.8284 14.8597 85.7172 15.0111 85.5679 15.1165C85.4186 15.222 85.2392 15.2756 85.0569 15.2694L81.7709 15.1948C81.5897 15.194 81.4136 15.1343 81.2689 15.0245C81.1241 14.9147 81.0186 14.7607 80.9679 14.5855L80.0167 11.415C79.9672 11.239 79.9739 11.0519 80.036 10.88C80.0981 10.7082 80.2124 10.5603 80.3626 10.4575L83.0557 8.5676C83.2038 8.46216 83.3807 8.40558 83.5621 8.40558C83.7436 8.40558 83.9205 8.46216 84.0686 8.5676L86.6752 10.5695C86.8304 10.6876 86.9408 10.8556 86.988 11.0456C87.0351 11.2356 87.0163 11.4361 86.9346 11.6139L86.9717 11.5642ZM90.5418 16.7614C89.993 16.4128 89.5678 15.8985 89.3271 15.292C89.0863 14.6855 89.0423 14.0179 89.2013 13.3847C89.3603 12.7514 89.7141 12.185 90.2123 11.7665C90.7105 11.3479 91.3274 11.0986 91.9748 11.0543C91.9748 11.1787 91.9748 11.3031 92.0366 11.4274C92.1387 13.3439 91.5993 15.2395 90.5048 16.8111L90.5418 16.7614Z"], [1, "count"], [1, "category"], ["width", "20", "height", "19", "viewBox", "0 0 20 19", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "countdown_diamondSVGIcon__1dyM8"], ["d", "M10.0036 0.013918L0.00390625 9.51367L10.0036 19.0134L20.0034 9.51367L10.0036 0.013918Z"], ["width", "96", "height", "25", "viewBox", "0 0 96 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "d-sm-none"], [1, "groups"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card__heading"], [1, "card__body"], [4, "ngFor", "ngForOf"], ["width", "58", "height", "36", 3, "src", "alt"], ["media", "(min-width:768px)", "srcset", "assets/steps-to-participate-desktop.png"], ["src", "assets/steps-to-participate-mobile.png", 1, "ls-bg", 2, "width", "100%"], [1, "date__picker"], [1, "wrapper"], ["min", "2022-09-26", "type", "date", "name", "date", "id", "date", 3, "max", "value", "change"], ["class", "no-records", 4, "ngIf"], [2, "background", "#00b3ac"], [2, "border-top-left-radius", "8px"], [2, "border-top-right-radius", "8px"], [1, "no-records"]], template: function FifaEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FifaEventComponent_div_6_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 7)(8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, FifaEventComponent_a_13_Template, 2, 4, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, FifaEventComponent_section_14_Template, 40, 5, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FifaEventComponent_section_15_Template, 10, 3, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.slides);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentTab == "About FIFA 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentTab == "How to participate");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".f-24 {\n  font-size: 36px;\n}\n\n.countdown__wrapper {\n  margin-top: -10px;\n  padding: 48px;\n  background-color: #B30007;\n  color: white;\n}\n\n.countdown__container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.count__container {\n  display: flex;\n  gap: 5rem;\n  text-align: center;\n  margin-top: 36px;\n  align-items: center;\n}\n\nsvg {\n  fill: #E60009 !important;\n}\n\n.count {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 768px) {\n  .count__container {\n    gap: 1rem;\n  }\n\n  .count {\n    font-size: 16px;\n  }\n\n  .f-24 {\n    font-size: 24px;\n  }\n\n  .category {\n    font-size: 12px;\n  }\n\n  .d-sm-none {\n    display: none;\n  }\n}\n\n.groups {\n  background-color: #F3F3F3;\n  padding: 72px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 2.5rem;\n  gap: 2.5rem;\n}\n\n.card {\n  background-color: #00AAA6;\n  color: white;\n  border-radius: 12px;\n  padding-top: 16px;\n  text-align: center;\n}\n\n.card .card__heading {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n\n.card .card__body {\n  background-color: white;\n  color: black;\n  border-radius: 12px;\n  display: flex;\n  gap: 2rem;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.card .card__body div {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem;\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 1100px) {\n  .groups img {\n    width: 36px;\n    height: 24px;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  .groups {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .groups {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 520px) {\n  .groups {\n    grid-template-columns: 1fr;\n  }\n}\n\n.date__picker {\n  background-color: #fff;\n}\n\n.date__picker .wrapper {\n  width: 80%;\n  margin: 0px auto;\n  padding: 40px 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  gap: 2rem;\n}\n\n.date__picker .wrapper h3 {\n  font-size: 36px;\n}\n\n.date__picker .wrapper input {\n  width: 200px;\n  margin: auto;\n  padding: 8px 16px;\n  font-size: 15px;\n  border: 1px solid #00AAA6;\n  border-radius: 6px;\n}\n\n.date__picker .wrapper table {\n  border-collapse: collapse;\n  width: 100%;\n  overflow-x: auto;\n  min-width: 500px;\n  width: 60%;\n  margin: auto;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.date__picker .wrapper table .telephone {\n  color: #00AAA6 !important;\n}\n\n.date__picker .wrapper table tr {\n  width: 100%;\n}\n\n.date__picker .wrapper table tr:last-child {\n  border-bottom: 3px solid #00AAA6;\n}\n\n.date__picker .wrapper td,\n.date__picker .wrapper th {\n  border-bottom: 0.5px solid #ccc !important;\n  border-top: 0.5px solid #ccc !important;\n  text-align: left !important;\n  padding: 8px 24px !important;\n  white-space: nowrap !important;\n}\n\n.date__picker .wrapper th {\n  font-size: 14px;\n  font-weight: bold;\n  color: white;\n  border-top: none !important;\n}\n\n@media screen and (max-width: 576px) {\n  .date__picker .wrapper {\n    width: 70%;\n  }\n  .date__picker .wrapper table {\n    overflow-x: auto;\n    display: block;\n    margin: auto;\n    min-width: auto;\n  }\n  .date__picker .wrapper table tr {\n    width: 100%;\n  }\n}\n\n.ls-bg {\n  cursor: pointer;\n}\n\n.swiper-pagination-bullet {\n  color: #09cbc6 !important;\n  border: none !important;\n  width: 10px !important;\n  height: 10px !important;\n  outline: none !important;\n  margin: 7px !important;\n  border-radius: 50% !important;\n  background: transparent !important;\n  border: 2px solid #09cbc6 !important;\n  transition: background-color 500ms !important;\n  cursor: pointer !important;\n}\n\n.swiper-pagination-bullet::before {\n  display: none !important;\n}\n\n.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background: #00AAA6 !important;\n}\n\n.fifa__tabs__container {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  padding: 16px 0;\n}\n\n.fifa__tabs__container .tabs {\n  border-radius: 50px;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.fifa__tabs__container .list-group {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  gap: 16px;\n}\n\n.fifa__tabs__container .list-group a {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1.2px solid #09cbc6;\n  border-radius: 16px;\n}\n\n.fifa__tabs__container .list-group .active {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n\n@media screen and (max-width: 768px) {\n  .fifa__tabs__container .tabs {\n    padding: 12px;\n  }\n  .fifa__tabs__container .list-group {\n    gap: 12px;\n  }\n  .fifa__tabs__container .list-group a {\n    padding: 0.75rem 1rem;\n    border: 1.2px solid #09cbc6;\n    border-radius: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZmEtZXZlbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxmaWZhLWV2ZW50XFxmaWZhLWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxTQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxhQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREdJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0RSOztBREdRO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNEWjs7QURNQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNKVjtBQUNGOztBRFFBO0VBQ0k7SUFDSSxrQ0FBQTtFQ05OO0FBQ0Y7O0FEU0E7RUFDSTtJQUNJLDhCQUFBO0VDUE47QUFDRjs7QURVQTtFQUNJO0lBQ0ksMEJBQUE7RUNSTjtBQUNGOztBRFdBO0VBQ0ksc0JBQUE7QUNUSjs7QURVSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDUlI7O0FEVVE7RUFDSSxlQUFBO0FDUlo7O0FEV1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7QUNWWjs7QURhUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FDWlo7O0FEYVk7RUFDSSx5QkFBQTtBQ1hoQjs7QURjWTtFQUNJLFdBQUE7QUNaaEI7O0FEY2dCO0VBQ0ksZ0NBQUE7QUNacEI7O0FEa0JROztFQUVJLDBDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUNoQlo7O0FEbUJRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDakJaOztBRHNCQTtFQUVRO0lBQ0ksVUFBQTtFQ3BCVjtFRHFCVTtJQUVJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDcEJkO0VEc0JjO0lBQ0ksV0FBQTtFQ3BCbEI7QUFDRjs7QUQyQkE7RUFDSSxlQUFBO0FDekJKOztBRDRCQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsMEJBQUE7QUN6Qko7O0FEMkJJO0VBQ0ksd0JBQUE7QUN6QlI7O0FENkJBO0VBQ0ksOEJBQUE7QUMxQko7O0FENkJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDMUJKOztBRDJCSTtFQUVJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FDMUJSOztBRDRCSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUMxQlI7O0FEMkJRO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDekJaOztBRDJCUTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FDMUJaOztBRGdDQTtFQUVRO0lBQ0ksYUFBQTtFQzlCVjtFRGdDTTtJQUNJLFNBQUE7RUM5QlY7RUQrQlU7SUFDSSxxQkFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7RUM3QmQ7QUFDRiIsImZpbGUiOiJmaWZhLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmYtMjQge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG4uY291bnRkb3duX193cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgcGFkZGluZzogNDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMzAwMDc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb3VudGRvd25fX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50X19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgZmlsbDogI0U2MDAwOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY291bnQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY291bnRfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3VudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mLTI0IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmQtc20tbm9uZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmdyb3VwcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xyXG4gICAgcGFkZGluZzogNzJweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdhcDogMi41cmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5jYXJkX19oZWFkaW5nIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkX19ib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAuZ3JvdXBzIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuZ3JvdXBzIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmdyb3VwcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgLmdyb3VwcyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlX19waWNrZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDJyZW07XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEFBQTY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgICAgICAgICAudGVsZXBob25le1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwQUFBNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRkLFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgLmRhdGVfX3BpY2tlcntcclxuICAgICAgICAud3JhcHBlcntcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdHJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubHMtYmcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgIGNvbG9yOiAjMDljYmM2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDljYmM2ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMEFBQTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgIC50YWJze1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNlYWU5ZTk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XHJcbiAgICB9XHJcbiAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZ2FwOiAxNnB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkZBNEU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5maWZhX190YWJzX19jb250YWluZXJ7XHJcbiAgICAgICAgLnRhYnN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZi0yNCB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmNvdW50ZG93bl9fd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nOiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjMwMDA3O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb3VudGRvd25fX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY291bnRfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcge1xuICBmaWxsOiAjRTYwMDA5ICFpbXBvcnRhbnQ7XG59XG5cbi5jb3VudCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb3VudF9fY29udGFpbmVyIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAuY291bnQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mLTI0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAuY2F0ZWdvcnkge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5kLXNtLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5ncm91cHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xuICBwYWRkaW5nOiA3MnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAyLjVyZW07XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgLmNhcmRfX2hlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uY2FyZCAuY2FyZF9fYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jYXJkIC5jYXJkX19ib2R5IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgLmdyb3VwcyBpbWcge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5ncm91cHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ncm91cHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcbiAgLmdyb3VwcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5kYXRlX19waWNrZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6IDQwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciBoMyB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgaW5wdXQge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQUFBNjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSAudGVsZXBob25lIHtcbiAgY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUgdHIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUgdHI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDBBQUE2O1xufVxuLmRhdGVfX3BpY2tlciAud3JhcHBlciB0ZCxcbi5kYXRlX19waWNrZXIgLndyYXBwZXIgdGgge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMjRweCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG4uZGF0ZV9fcGlja2VyIC53cmFwcGVyIHRoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5kYXRlX19waWNrZXIgLndyYXBwZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLmRhdGVfX3BpY2tlciAud3JhcHBlciB0YWJsZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG4gIC5kYXRlX19waWNrZXIgLndyYXBwZXIgdGFibGUgdHIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubHMtYmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBjb2xvcjogIzA5Y2JjNiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwOWNiYzYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwQUFBNiAhaW1wb3J0YW50O1xufVxuXG4uZmlmYV9fdGFic19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAwO1xufVxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAudGFicyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XG59XG4uZmlmYV9fdGFic19fY29udGFpbmVyIC5saXN0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMTZweDtcbn1cbi5maWZhX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAgYSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAxLjJweCBzb2xpZCAjMDljYmM2O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCAuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5maWZhX190YWJzX19jb250YWluZXIgLnRhYnMge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbiAgLmZpZmFfX3RhYnNfX2NvbnRhaW5lciAubGlzdC1ncm91cCB7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG4gIC5maWZhX190YWJzX19jb250YWluZXIgLmxpc3QtZ3JvdXAgYSB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICAgIGJvcmRlcjogMS4ycHggc29saWQgIzA5Y2JjNjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB9XG59Il19 */"], encapsulation: 2 });


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