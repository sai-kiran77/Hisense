"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_offers-promotions_offers-promotions_module_ts"],{

/***/ 4673:
/*!************************************************************************!*\
  !*** ./src/app/pages/offers-promotions/offers-promotions.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPromotionsComponent": () => (/* binding */ OffersPromotionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function (a0) { return { "active": a0 }; };
function OffersPromotionsComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersPromotionsComponent_a_7_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const tab_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.changeMainTab(tab_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, tab_r3 == ctx_r0.currentMainTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tab_r3);
} }
function OffersPromotionsComponent_div_8_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersPromotionsComponent_div_8_a_3_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const obj_r8 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.changeTab(obj_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, obj_r8.start_date_formatted == ctx_r6.currentTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](obj_r8.start_date_formatted);
} }
function OffersPromotionsComponent_div_8_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function OffersPromotionsComponent_div_8_img_5_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.imageLoaded(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r7.currentImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0) { return { "card is-loading": a0 }; };
function OffersPromotionsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OffersPromotionsComponent_div_8_a_3_Template, 2, 4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OffersPromotionsComponent_div_8_img_5_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, ctx_r1.isImageLoading));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.metaData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentImg);
} }
function OffersPromotionsComponent_div_9_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OffersPromotionsComponent_div_9_a_3_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const tab_r18 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.currentAcSectionTab = tab_r18; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r18 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, tab_r18 == ctx_r14.currentAcSectionTab));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tab_r18);
} }
function OffersPromotionsComponent_div_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " - 1 Years Comprehensive & 10 Years on Compressor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 19)(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Models");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "AS-12TW4RMRKA00, AS-12TW4RYRKA01B, AS-18TW4RGSKA00, AS-18TW4RXSKA00, AS-22TR4RBBTV00");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 19)(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 20)(15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "1-year comprehensive warranty and 10-year compressor warranty is on below models for Residential use");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "1-year comprehensive warranty on functional parts, Gas Charging & labour (for Repairs or replacements except plastic parts like grill, louvers. Etc, of the air conditioner for a period of 60 months from the date of purchase)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "5 years warranty on PCB and 10 years on compressor is for only PCB and compressor failure. Rest any other work if required/labour charges shall be applicable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "This warranty is for Domestic customers only and not applicable for commercial use.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Regular Service is to be done by Hisense Authorised service partner only to ensure longevity of the product and claiming warranties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Regular Service is to be done by Hisense Authorised service partner only to ensure longevity of the product and claiming warranties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " The warranty will be void in case the Air conditioner is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ul", 21)(30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Improperly installed by a third party, repaired by unauthorized personnel, modified, improper usage, or due to faulty electric supply/connection, Voltage fluctuations, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Damage is caused by accident, fire, or misuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "The original serial numbers are removed, destroyed, or altered from the air conditioner. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Product used for Commercial Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function OffersPromotionsComponent_div_9_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "5 Years Comprehensive & 10 Years on Compressor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 19)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Models");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "AS-12TC4RAM0, AS-12TC5RAM0, AS-18TC4RAM0, AS-18TC5RAM0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 19)(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul", 20)(17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "5-year comprehensive warranty and 10-year compressor warranty is on below models for Residential use");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "5-year comprehensive warranty on functional parts, Gas Charging & labour (for Repairs or replacements except plastic parts like grill, louvers. Etc, of the air conditioner for a period of 60 months from the date of purchase)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "5 years warranty on PCB and 10 years on compressor is for only PCB and compressor failure. Rest any other work if required/labour charges shall be applicable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "This warranty is for Domestic customers only and not applicable for commercial use.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Regular Service is to be done by Hisense Authorised service partner only to ensure longevity of the product and claiming warranties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " The warranty will be void in case the Air conditioner is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ul", 21)(30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Improperly installed by a third party, repaired by unauthorized personnel, modified, improper usage, or due to faulty electric supply/connection, Voltage fluctuations, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Damage is caused by accident, fire or misuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "The original serial numbers are removed, destroyed, or altered from the air conditioner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Product used for Commercial Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "5-year comprehensive warranty on functional parts, Gas Charging & labour (for Repairs or replacements except plastic parts like grill, louvers. Etc, of the air conditioner for a period of 60 months from the date of purchase)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "This additional warranty does not entitle for product replacement in case of any delay in repairs. In case Hisense is not able to repair and make the product functional due to non-availability of parts, Hisense shall replace the customer with new equivalent model as replacement after charging an additional amount of 25% per year of the purchased value for each year after expiry of 1 year of standard warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "From 2nd year until 5th year, customers shall register with Hisense for 2 Preventive Maintenance Service every 6 months which will be carried out by Authorized service partner. Standard labour charges towards carrying out this Maintenance will have to be borne by the customer as per rate prevailing at that point of time. The same is required to ensure proper functioning of the machine and to enjoy the benefit of a 4-year extended warranty on parts, labour & gas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " The extended warranty will be void in case the Air conditioner is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ul", 21)(47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Improperly installed by a third party, repaired by unauthorized personnel, modified, improper usage, or due to faulty electric supply/connection, Voltage fluctuations, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Damage is caused by accident, fire or misuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "The original serial numbers are removed, destroyed, or altered from the air conditioner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "The preventive maintenance from 2nd year to 5th year is not carried out by Hisense Authorized service centre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "This additional warranty is not transferable in case the unit is sold by the original purchaser to someone else");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function OffersPromotionsComponent_div_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "1 Years Comprehensive & 10 Years on Compressor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 19)(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Models");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "ATC353HIB, ATCW355HJP, ATC503HIB, ATCW515HJP, ATCW623HJP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 19)(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul", 20)(17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "1-year comprehensive warranty and 10-year compressor warranty is on below models for Residential use");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "1-year comprehensive warranty on functional parts, Gas Charging & labour (for Repairs or replacements except plastic parts like grill, louvers. Etc, of the air conditioner for a period of 60 months from the date of purchase)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "5 years warranty on PCB and 10 years on compressor is for only PCB and compressor failure. Rest any other work if required/labour charges shall be applicable.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "This warranty is for Domestic customers only and not applicable for commercial use.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Regular Service is to be done by Hisense Authorised service partner only to ensure longevity of the product and claiming warranties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " The warranty will be void in case the Air conditioner is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ul", 21)(30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Improperly installed by a third party, repaired by unauthorized personnel, modified, improper usage, or due to faulty electric supply/connection, Voltage fluctuations, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Damage is caused by accident, fire or misuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "The original serial numbers are removed, destroyed, or altered from the air conditioner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Product used for Commercial Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function OffersPromotionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OffersPromotionsComponent_div_9_a_3_Template, 2, 4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OffersPromotionsComponent_div_9_ng_container_5_Template, 38, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, OffersPromotionsComponent_div_9_ng_container_6_Template, 57, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OffersPromotionsComponent_div_9_ng_container_7_Template, 38, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.ACSectionLeftTabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentAcSectionTab == "Inverter expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentAcSectionTab == "Intelligent inverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentAcSectionTab == "Intellipro and cooling xpert");
} }
class OffersPromotionsComponent {
    constructor(state, api, title) {
        this.state = state;
        this.api = api;
        this.title = title;
        this.metaData = [];
        this.isImageLoading = true;
        this.tabs = ["Air Conditioner", 'Television'];
        this.currentMainTab = "Air Conditioner";
        this.ACSectionLeftTabs = ['Inverter expert', 'Intelligent inverter', 'Intellipro and cooling xpert'];
        this.currentAcSectionTab = 'Inverter expert';
        this.state.mobileNavToggle.next(false);
        this.title.setTitle('Hisense India | WARRANTY INFORMATION');
    }
    changeMainTab(tab) {
        this.currentMainTab = tab;
    }
    changeTab(obj) {
        if (this.currentImg != obj.image_full_url) {
            this.isImageLoading = true;
            this.currentImg = obj.image_full_url;
            this.currentTab = obj.start_date_formatted;
        }
    }
    ngOnInit() {
        this.getSlides();
        // this.getTermsAndConditions();
    }
    getSlides() {
        this.api.getPageSlides({ pageUrl: '/offers-promotions' }).subscribe({
            next: (res) => {
                console.log(res);
                this.metaData = res.data.offers_promotions;
                this.currentImg = this.metaData[0].image_full_url;
                this.currentTab = this.metaData[0].start_date_formatted;
            },
            error: (err) => {
            }
        });
    }
    imageLoaded() {
        this.isImageLoading = false;
    }
}
OffersPromotionsComponent.ɵfac = function OffersPromotionsComponent_Factory(t) { return new (t || OffersPromotionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_0__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title)); };
OffersPromotionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OffersPromotionsComponent, selectors: [["app-offers-promotions"]], decls: 10, vars: 3, consts: [[1, "breadcrumb__yellow__banner"], [1, "page__container"], [1, "flex", "tabs__container"], [1, "tabs"], [1, "list-group", "flex-row"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "container", 3, "ngClass", 4, "ngIf"], ["class", "container ac__section__tabs", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "container", 3, "ngClass"], [1, "col1", "tabs"], ["id", "themeslist", 1, "list-group"], [1, "col2", "image", 2, "max-width", "800px"], ["alt", "Warranty Information", 3, "src", "load", 4, "ngIf"], ["alt", "Warranty Information", 3, "src", "load"], [1, "container", "ac__section__tabs"], [1, "col2", 2, "max-width", "800px"], [4, "ngIf"], [1, "my-3", "mb-5"], [1, "my-3"], [2, "margin-left", "20px"], [1, "nested__ul"]], template: function OffersPromotionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Warranty Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OffersPromotionsComponent_a_7_Template, 2, 4, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, OffersPromotionsComponent_div_8_Template, 6, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OffersPromotionsComponent_div_9_Template, 8, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentMainTab == "Television");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentMainTab == "Air Conditioner");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["@charset \"UTF-8\";\n.page__container[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  padding-top: 100px;\n  padding-bottom: 80px;\n  width: 90%;\n  margin: auto;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n}\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.col2[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .col1[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    \n    \n    \n    \n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 10px;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  .list-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .ac__section__tabs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    \n    \n    \n    \n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 10px;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.ac__section__tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .ac__section__tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2713\";\n  margin-right: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTYWklMjBLaXJhblxcRG9jdW1lbnRzXFxoaXNlbnNlXFxzcmNcXGFwcFxccGFnZXNcXG9mZmVycy1wcm9tb3Rpb25zXFxvZmZlcnMtcHJvbW90aW9ucy5jb21wb25lbnQuc2NzcyIsIm9mZmVycy1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FERUo7QUNDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBREVKO0FDRUE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FEQ0o7QUNFQTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FEQUo7QUNJQTtFQUNJO0lBQ0ksMEJBQUE7RURETjs7RUNJRTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBRUEsVUFBQTtJQUtBLFVBQUE7SUFLQSxXQUFBO0lBS0Esb0JBQUE7RURkTjtFQ0FNO0lBQ0ksWUFBQTtFREVWO0VDRU07SUFDSSxtQkFBQTtFREFWO0VDSU07SUFDSSxnQkFBQTtFREZWO0VDTU07SUFDSSxnQkFBQTtFREpWOztFQ1FFO0lBQ0ksbUJBQUE7RURMTjtBQUNGO0FDUUE7RUFDSTtJQUNJLDBCQUFBO0VETk47RUNRTTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBRUEsVUFBQTtJQUtBLFVBQUE7SUFLQSxXQUFBO0lBS0Esb0JBQUE7RURuQlY7RUNLVTtJQUNJLFlBQUE7RURIZDtFQ09VO0lBQ0ksbUJBQUE7RURMZDtFQ1NVO0lBQ0ksZ0JBQUE7RURQZDtFQ1dVO0lBQ0ksZ0JBQUE7RURUZDtFQ2FNO0lBQ0ksbUJBQUE7RURYVjtBQUNGO0FDbUJJOzs7RUFJSSxpQkFBQTtFQUNBLG1CQUFBO0FEbEJSO0FDcUJJO0VBQ0ksY0FBQTtBRG5CUjtBQ3NCSTtFQUNJLGdCQUFBO0FEcEJSO0FDdUJJOztFQUVJLGdCQUFBO0FEckJSO0FDdUJROztFQUNJLGlCQUFBO0FEcEJaO0FDc0JZOztFQUNJLGdCQUFBO0FEbkJoQjtBQ3FCZ0I7O0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURsQnBCIiwiZmlsZSI6Im9mZmVycy1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnBhZ2VfX2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBnYXA6IDEuNXJlbTtcbn1cblxuLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb2wxIGEge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uY29sMiB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmNvbDEge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAvKiB3aWR0aCAqL1xuICAgIC8qIFRyYWNrICovXG4gICAgLyogSGFuZGxlICovXG4gICAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gIH1cbiAgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cbiAgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIC5jb2wxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzg4ODtcbiAgfVxuICAuY29sMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NTU7XG4gIH1cblxuICAubGlzdC1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5hY19fc2VjdGlvbl9fdGFicyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgLmFjX19zZWN0aW9uX190YWJzIC5jb2wxIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgLyogd2lkdGggKi9cbiAgICAvKiBUcmFjayAqL1xuICAgIC8qIEhhbmRsZSAqL1xuICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICB9XG4gIC5hY19fc2VjdGlvbl9fdGFicyAuY29sMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuICAuYWNfX3NlY3Rpb25fX3RhYnMgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICB9XG4gIC5hY19fc2VjdGlvbl9fdGFicyAuY29sMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM4ODg7XG4gIH1cbiAgLmFjX19zZWN0aW9uX190YWJzIC5jb2wxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbiAgfVxuICAuYWNfX3NlY3Rpb25fX3RhYnMgLmxpc3QtZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbi5hY19fc2VjdGlvbl9fdGFicyBoMSxcbi5hY19fc2VjdGlvbl9fdGFicyBoMixcbi5hY19fc2VjdGlvbl9fdGFicyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmFjX19zZWN0aW9uX190YWJzIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4uYWNfX3NlY3Rpb25fX3RhYnMgaDIge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmFjX19zZWN0aW9uX190YWJzIHVsLFxuLmFjX19zZWN0aW9uX190YWJzIGxpIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cbi5hY19fc2VjdGlvbl9fdGFicyB1bCAubmVzdGVkX191bCxcbi5hY19fc2VjdGlvbl9fdGFicyBsaSAubmVzdGVkX191bCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmFjX19zZWN0aW9uX190YWJzIHVsIC5uZXN0ZWRfX3VsIGxpLFxuLmFjX19zZWN0aW9uX190YWJzIGxpIC5uZXN0ZWRfX3VsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5hY19fc2VjdGlvbl9fdGFicyB1bCAubmVzdGVkX191bCBsaTo6YmVmb3JlLFxuLmFjX19zZWN0aW9uX190YWJzIGxpIC5uZXN0ZWRfX3VsIGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKck1wiO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5wYWdlX19jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY29sMSBhIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG59XHJcblxyXG4uY29sMiB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMyRkE0RTcgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbDEge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgLyogd2lkdGggKi9cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFRyYWNrICovXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSGFuZGxlICovXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcclxuICAgIC5hY19fc2VjdGlvbl9fdGFicyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblxyXG4gICAgICAgIC5jb2wxIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAvKiB3aWR0aCAqL1xyXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIFRyYWNrICovXHJcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIEhhbmRsZSAqL1xyXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODg4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4uYWNfX3NlY3Rpb25fX3RhYnMge1xyXG5cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyB7XHJcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIHVsLFxyXG4gICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IGRpc2M7XHJcblxyXG4gICAgICAgIC5uZXN0ZWRfX3VsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+Kckyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 9419:
/*!*********************************************************************!*\
  !*** ./src/app/pages/offers-promotions/offers-promotions.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPromotionsModule": () => (/* binding */ OffersPromotionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _offers_promotions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers-promotions.component */ 4673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '', component: _offers_promotions_component__WEBPACK_IMPORTED_MODULE_0__.OffersPromotionsComponent
    }
];
class OffersPromotionsModule {
}
OffersPromotionsModule.ɵfac = function OffersPromotionsModule_Factory(t) { return new (t || OffersPromotionsModule)(); };
OffersPromotionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OffersPromotionsModule });
OffersPromotionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OffersPromotionsModule, { declarations: [_offers_promotions_component__WEBPACK_IMPORTED_MODULE_0__.OffersPromotionsComponent,
        _offers_promotions_component__WEBPACK_IMPORTED_MODULE_0__.OffersPromotionsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_offers-promotions_offers-promotions_module_ts.js.map