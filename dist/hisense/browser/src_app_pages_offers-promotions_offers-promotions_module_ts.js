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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "1-year comprehensive warranty on functional parts, Gas Charging & labour (for Repairs or replacements except plastic parts like grill, louvers. Etc, of the air conditioner)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "This warranty is for Domestic customers only and not applicable for commercial use.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Regular Service is to be done by Hisense Authorised service partner only to ensure longevity of the product and claiming warranties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Regular Service is to be done by Hisense Authorised service partner only to ensure longevity of the product and claiming warranties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " The warranty will be void in case the Air conditioner is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ul", 21)(28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Improperly installed by a third party, repaired by unauthorized personnel, modified, improper usage, or due to faulty electric supply/connection, Voltage fluctuations, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Damage is caused by accident, fire, or misuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "The original serial numbers are removed, destroyed, or altered from the air conditioner. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Product used for Commercial Purpose");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "This warranty is for Domestic customers only and not applicable for commercial use.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Regular Service is to be done by Hisense Authorised service partner only to ensure longevity of the product and claiming warranties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " The warranty will be void in case the Air conditioner is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ul", 21)(28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Improperly installed by a third party, repaired by unauthorized personnel, modified, improper usage, or due to faulty electric supply/connection, Voltage fluctuations, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Damage is caused by accident, fire or misuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "The original serial numbers are removed, destroyed, or altered from the air conditioner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Product used for Commercial Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "5-year comprehensive warranty on functional parts, Gas Charging & labour (for Repairs or replacements except plastic parts like grill, louvers. Etc, of the air conditioner for a period of 60 months from the date of purchase)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "This additional warranty does not entitle for product replacement in case of any delay in repairs. In case Hisense is not able to repair and make the product functional due to non-availability of parts, Hisense shall replace the customer with new equivalent model as replacement after charging an additional amount of 25% per year of the purchased value for each year after expiry of 1 year of standard warranty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "From 2nd year until 5th year, customers shall register with Hisense for 2 Preventive Maintenance Service every 6 months which will be carried out by Authorized service partner. Standard labour charges towards carrying out this Maintenance will have to be borne by the customer as per rate prevailing at that point of time. The same is required to ensure proper functioning of the machine and to enjoy the benefit of a 4-year extended warranty on parts, labour & gas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " The extended warranty will be void in case the Air conditioner is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ul", 21)(45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Improperly installed by a third party, repaired by unauthorized personnel, modified, improper usage, or due to faulty electric supply/connection, Voltage fluctuations, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Damage is caused by accident, fire or misuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "The original serial numbers are removed, destroyed, or altered from the air conditioner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "The preventive maintenance from 2nd year to 5th year is not carried out by Hisense Authorized service centre.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "This additional warranty is not transferable in case the unit is sold by the original purchaser to someone else");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "This warranty is for Domestic customers only and not applicable for commercial use.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Regular Service is to be done by Hisense Authorised service partner only to ensure longevity of the product and claiming warranties.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " The warranty will be void in case the Air conditioner is: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ul", 21)(28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Improperly installed by a third party, repaired by unauthorized personnel, modified, improper usage, or due to faulty electric supply/connection, Voltage fluctuations, etc.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Damage is caused by accident, fire or misuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "The original serial numbers are removed, destroyed, or altered from the air conditioner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Product used for Commercial Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function OffersPromotionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, OffersPromotionsComponent_div_9_a_3_Template, 2, 4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OffersPromotionsComponent_div_9_ng_container_5_Template, 36, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, OffersPromotionsComponent_div_9_ng_container_6_Template, 55, 0, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, OffersPromotionsComponent_div_9_ng_container_7_Template, 36, 0, "ng-container", 17);
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
        this.title.setTitle('Hisense India | Warranty Information');
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["@charset \"UTF-8\";\n.page__container[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  padding-top: 75px;\n  padding-bottom: 50px;\n  width: 90%;\n  margin: auto;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-gap: 1.5rem;\n  gap: 1.5rem;\n}\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.col1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  white-space: nowrap;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.col2[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #00AAA6 !important;\n  border-color: #00AAA6 !important;\n}\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .col1[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    \n    \n    \n    \n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 10px;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n  .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n  .list-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .ac__section__tabs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%] {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    \n    \n    \n    \n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 10px;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .col1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n  .ac__section__tabs[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.ac__section__tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .ac__section__tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.ac__section__tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .ac__section__tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nested__ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2713\";\n  margin-right: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTYWklMjBLaXJhblxcRG9jdW1lbnRzXFxoaXNlbnNlXFxzcmNcXGFwcFxccGFnZXNcXG9mZmVycy1wcm9tb3Rpb25zXFxvZmZlcnMtcHJvbW90aW9ucy5jb21wb25lbnQuc2NzcyIsIm9mZmVycy1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FERUo7QUNDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBREVKO0FDRUE7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FEQ0o7QUNFQTtFQUNJLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGdDQUFBO0FEQUo7QUNJQTtFQUNJO0lBQ0ksMEJBQUE7RURETjs7RUNJRTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBRUEsVUFBQTtJQUtBLFVBQUE7SUFLQSxXQUFBO0lBS0Esb0JBQUE7RURkTjtFQ0FNO0lBQ0ksWUFBQTtFREVWO0VDRU07SUFDSSxtQkFBQTtFREFWO0VDSU07SUFDSSxnQkFBQTtFREZWO0VDTU07SUFDSSxnQkFBQTtFREpWOztFQ1FFO0lBQ0ksbUJBQUE7RURMTjtBQUNGO0FDUUE7RUFDSTtJQUNJLDBCQUFBO0VETk47RUNRTTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBRUEsVUFBQTtJQUtBLFVBQUE7SUFLQSxXQUFBO0lBS0Esb0JBQUE7RURuQlY7RUNLVTtJQUNJLFlBQUE7RURIZDtFQ09VO0lBQ0ksbUJBQUE7RURMZDtFQ1NVO0lBQ0ksZ0JBQUE7RURQZDtFQ1dVO0lBQ0ksZ0JBQUE7RURUZDtFQ2FNO0lBQ0ksbUJBQUE7RURYVjtBQUNGO0FDbUJJOzs7RUFJSSxpQkFBQTtFQUNBLG1CQUFBO0FEbEJSO0FDcUJJO0VBQ0ksY0FBQTtBRG5CUjtBQ3NCSTtFQUNJLGdCQUFBO0FEcEJSO0FDdUJJOztFQUVJLGdCQUFBO0FEckJSO0FDdUJROztFQUNJLGlCQUFBO0FEcEJaO0FDc0JZOztFQUNJLGdCQUFBO0FEbkJoQjtBQ3FCZ0I7O0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURsQnBCIiwiZmlsZSI6Im9mZmVycy1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnBhZ2VfX2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdhcDogMS41cmVtO1xufVxuXG4ubGlzdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbDEgYSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG5cbi5jb2wyIHtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuY29sMSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIC8qIHdpZHRoICovXG4gICAgLyogVHJhY2sgKi9cbiAgICAvKiBIYW5kbGUgKi9cbiAgICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgfVxuICAuY29sMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuICAuY29sMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xuICB9XG4gIC5jb2wxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbiAgfVxuXG4gIC5saXN0LWdyb3VwIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFjX19zZWN0aW9uX190YWJzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAuYWNfX3NlY3Rpb25fX3RhYnMgLmNvbDEge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAvKiB3aWR0aCAqL1xuICAgIC8qIFRyYWNrICovXG4gICAgLyogSGFuZGxlICovXG4gICAgLyogSGFuZGxlIG9uIGhvdmVyICovXG4gIH1cbiAgLmFjX19zZWN0aW9uX190YWJzIC5jb2wxOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG4gIC5hY19fc2VjdGlvbl9fdGFicyAuY29sMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgLmFjX19zZWN0aW9uX190YWJzIC5jb2wxOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzg4ODtcbiAgfVxuICAuYWNfX3NlY3Rpb25fX3RhYnMgLmNvbDE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xuICB9XG4gIC5hY19fc2VjdGlvbl9fdGFicyAubGlzdC1ncm91cCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuLmFjX19zZWN0aW9uX190YWJzIGgxLFxuLmFjX19zZWN0aW9uX190YWJzIGgyLFxuLmFjX19zZWN0aW9uX190YWJzIGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uYWNfX3NlY3Rpb25fX3RhYnMgaDEge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5hY19fc2VjdGlvbl9fdGFicyBoMiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uYWNfX3NlY3Rpb25fX3RhYnMgdWwsXG4uYWNfX3NlY3Rpb25fX3RhYnMgbGkge1xuICBsaXN0LXN0eWxlOiBkaXNjO1xufVxuLmFjX19zZWN0aW9uX190YWJzIHVsIC5uZXN0ZWRfX3VsLFxuLmFjX19zZWN0aW9uX190YWJzIGxpIC5uZXN0ZWRfX3VsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uYWNfX3NlY3Rpb25fX3RhYnMgdWwgLm5lc3RlZF9fdWwgbGksXG4uYWNfX3NlY3Rpb25fX3RhYnMgbGkgLm5lc3RlZF9fdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmFjX19zZWN0aW9uX190YWJzIHVsIC5uZXN0ZWRfX3VsIGxpOjpiZWZvcmUsXG4uYWNfX3NlY3Rpb25fX3RhYnMgbGkgLm5lc3RlZF9fdWwgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pyTXCI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLnBhZ2VfX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNzVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmNvbDEgYSB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxufVxyXG5cclxuLmNvbDIge1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMkZBNEU3ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMEFBQTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wxIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gICAgICAgIC8qIHdpZHRoICovXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBUcmFjayAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEhhbmRsZSAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XHJcbiAgICAuYWNfX3NlY3Rpb25fX3RhYnMge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cclxuICAgICAgICAuY29sMSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgLyogd2lkdGggKi9cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBUcmFjayAqL1xyXG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBIYW5kbGUgKi9cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLmFjX19zZWN0aW9uX190YWJzIHtcclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMge1xyXG4gICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICB1bCxcclxuICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBkaXNjO1xyXG5cclxuICAgICAgICAubmVzdGVkX191bCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfinJMnO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


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