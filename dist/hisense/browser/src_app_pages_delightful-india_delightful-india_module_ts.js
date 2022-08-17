"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_delightful-india_delightful-india_module_ts"],{

/***/ 9322:
/*!**********************************************************************!*\
  !*** ./src/app/pages/delightful-india/delightful-india.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelightfulIndiaComponent": () => (/* binding */ DelightfulIndiaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);









function DelightfulIndiaComponent_form_9_div_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name can only contain alphabets!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_9_div_16_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DelightfulIndiaComponent_form_9_div_16_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls["name"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls["name"].errors["pattern"]);
} }
function DelightfulIndiaComponent_form_9_div_24_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_24_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter a valid email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_9_div_24_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DelightfulIndiaComponent_form_9_div_24_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.controls["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.controls["email"].errors["email"]);
} }
function DelightfulIndiaComponent_form_9_div_32_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_32_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number can only contain 10 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_32_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number can only contain 10 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_32_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number can only contain digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_9_div_32_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DelightfulIndiaComponent_form_9_div_32_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DelightfulIndiaComponent_form_9_div_32_span_3_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DelightfulIndiaComponent_form_9_div_32_span_4_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["phone"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["phone"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["phone"].errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["phone"].errors["pattern"]);
} }
function DelightfulIndiaComponent_form_9_div_40_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pincode is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_9_div_40_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.signupForm.controls["zipcode"].errors["required"]);
} }
function DelightfulIndiaComponent_form_9_div_46_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please accept to proceed further!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_9_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_9_div_46_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.signupForm.controls["terms"].errors["required"]);
} }
function DelightfulIndiaComponent_form_9_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 35);
} }
function DelightfulIndiaComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Please fill the form to create an account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "label", 16)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DelightfulIndiaComponent_form_9_div_16_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "label", 20)(19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DelightfulIndiaComponent_form_9_div_24_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div")(26, "label", 22)(27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, DelightfulIndiaComponent_form_9_div_32_Template, 5, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "label", 24)(35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Pincode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, DelightfulIndiaComponent_form_9_div_40_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 26)(42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Yes, I would like to receive important updates and notifications on WhatsApp");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, DelightfulIndiaComponent_form_9_div_46_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div")(48, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "By proceeding, you are authorizing Hisense and its empaneled controctors to get in touch with you through calls, SMS or e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 30)(51, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelightfulIndiaComponent_form_9_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.onRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, DelightfulIndiaComponent_form_9_span_54_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Already registered? \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelightfulIndiaComponent_form_9_Template_a_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r21.showSignupForm = false; return ctx_r21.showLoginForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " to login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["name"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["email"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["phone"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["zipcode"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["terms"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.signupLoading);
} }
function DelightfulIndiaComponent_form_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Thanks for registering for Tricolor Treasure Hunt. Proceed to login below to continue further.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Please note down your login details and your Hisense unique code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 42)(6, "div", 43)(7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Username\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 43)(12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Password\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 43)(17, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Hisense unique code\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", ctx_r22.loginData.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", ctx_r22.loginData.password, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", ctx_r22.loginData.delightful_india_code, "");
} }
function DelightfulIndiaComponent_form_10_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_10_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_10_div_15_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r23.LoginForm.controls["username"].errors["required"]);
} }
function DelightfulIndiaComponent_form_10_div_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DelightfulIndiaComponent_form_10_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_10_div_23_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.LoginForm.controls["password"].errors["required"]);
} }
function DelightfulIndiaComponent_form_10_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 35);
} }
function DelightfulIndiaComponent_form_10_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Proceed to login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DelightfulIndiaComponent_form_10_div_7_Template, 21, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "label", 20)(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DelightfulIndiaComponent_form_10_div_15_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "label", 38)(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, DelightfulIndiaComponent_form_10_div_23_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 30)(25, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelightfulIndiaComponent_form_10_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.onLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, DelightfulIndiaComponent_form_10_span_28_Template, 1, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Not registered yet? \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelightfulIndiaComponent_form_10_Template_a_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r30.showSignupForm = true; return ctx_r30.showLoginForm = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " to register now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.LoginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loginData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isLoginFormSubmitted && ctx_r1.LoginForm.controls["username"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isLoginFormSubmitted && ctx_r1.LoginForm.controls["password"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signupLoading);
} }
function DelightfulIndiaComponent_form_11_ng_container_26_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 52)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Category\u00A0: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hint_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", hint_r32.key, "");
} }
function DelightfulIndiaComponent_form_11_ng_container_26_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Product\u00A0: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", obj_r36["sub_section"], "");
} }
function DelightfulIndiaComponent_form_11_ng_container_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_11_ng_container_26_div_2_label_1_Template, 4, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", obj_r36["sub_section"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHtml", obj_r36["hint"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function DelightfulIndiaComponent_form_11_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DelightfulIndiaComponent_form_11_ng_container_26_label_1_Template, 4, 1, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DelightfulIndiaComponent_form_11_ng_container_26_div_2_Template, 3, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const hint_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", hint_r32.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", hint_r32.value);
} }
function DelightfulIndiaComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form")(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15)(4, "div", 46)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Follow the clues & spot the Delightful India flags");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 42)(9, "div", 43)(10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Username \u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 43)(16, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Hisense unique code \u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "label")(23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Clues:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DelightfulIndiaComponent_form_11_ng_container_26_Template, 3, 2, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 30)(29, "button", 49)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Start Finding The Flags");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 33)(33, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelightfulIndiaComponent_form_11_Template_a_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.delightFulCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 3, ctx_r2.hints));
} }
const _c0 = function (a0) { return { "show-modal": a0 }; };
class DelightfulIndiaComponent {
    constructor(api, fb, platformId, state) {
        this.api = api;
        this.fb = fb;
        this.platformId = platformId;
        this.state = state;
        this.isSignupFormSubmitted = false;
        this.signupLoading = false;
        this.showHints = false;
        this.isLoginFormSubmitted = false;
        this.loginLoading = false;
        this.hints = {};
        this.modalMessage = '';
        this.showSignupForm = true;
        this.showLoginForm = false;
        this.state.mobileNavToggle.next(false);
        this.signupForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[A-Za-z ]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]*$/)]],
            zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            terms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
        this.LoginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
            this.userName = localStorage.getItem('username');
            this.delightFulCode = localStorage.getItem('delightful_india_code');
        }
        if (this.userName) {
            this.showSignupForm = false;
            this.showLoginForm = false;
            this.getHints(this.userName);
        }
    }
    ngOnInit() {
    }
    onRegister() {
        this.isSignupFormSubmitted = true;
        this.signupLoading = true;
        console.log(this.signupForm);
        if (this.signupForm && this.signupForm.valid) {
            this.api.signup(this.signupForm.value).subscribe((res) => {
                console.log(res);
                this.loginData = res.data;
                this.signupLoading = false;
                // this.modalMessage = res.message;
                // if (isPlatformBrowser(this.platformId)) {
                //   localStorage.setItem('username', res.data.username);
                // }
                this.LoginForm.setValue({
                    username: res.data.username,
                    password: res.data.password,
                });
                this.showSignupForm = false;
                this.showLoginForm = true;
            }, (err) => {
                console.log(err);
                this.signupLoading = false;
                this.modalMessage = err.error.message;
                // this.modalMessage = err.message;
            });
        }
        else {
            this.signupLoading = false;
        }
    }
    onLogin() {
        this.isLoginFormSubmitted = true;
        this.loginLoading = true;
        console.log(this.LoginForm);
        if (this.LoginForm && this.LoginForm.valid) {
            this.api.login(this.LoginForm.value).subscribe((res) => {
                console.log(res);
                this.loginLoading = false;
                this.showSignupForm = false;
                this.showLoginForm = false;
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                    localStorage.setItem('username', res.data.username);
                    localStorage.setItem('delightful_india_code', res.data.delightful_india_code);
                }
                this.userName = res.data.username;
                this.delightFulCode = res.data.delightful_india_code;
                this.hints = {};
                this.showHints = true;
                res.data.hints.forEach((obj) => {
                    if (this.hints[obj.section]) {
                        this.hints[obj.section].push({
                            sub_section: obj.sub_section,
                            hint: obj.hint
                        });
                    }
                    else {
                        this.hints[obj.section] = [];
                        this.hints[obj.section].push({
                            sub_section: obj.sub_section,
                            hint: obj.hint
                        });
                    }
                });
                ;
            }, (err) => {
                console.log(err);
                this.loginLoading = false;
                this.modalMessage = err.error.message;
            });
        }
        else {
            this.loginLoading = false;
        }
    }
    getHints(userName) {
        this.api.getHints({
            username: userName
        }).subscribe({
            next: (res) => {
                console.log(res.data);
                this.hints = {};
                this.showHints = true;
                res.data.forEach((obj) => {
                    if (this.hints[obj.section]) {
                        this.hints[obj.section].push({
                            sub_section: obj.sub_section,
                            hint: obj.hint
                        });
                    }
                    else {
                        this.hints[obj.section] = [];
                        this.hints[obj.section].push({
                            sub_section: obj.sub_section,
                            hint: obj.hint
                        });
                    }
                });
            },
            error: (err) => {
                console.log(err);
                this.modalMessage = err.error.message;
                this.showLoginForm = true;
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                    localStorage.removeItem('username');
                }
            }
        });
    }
    logout() {
        this.showSignupForm = false;
        this.showLoginForm = true;
        this.showHints = false;
        localStorage.removeItem('username');
        localStorage.removeItem('delightful_india_code');
    }
}
DelightfulIndiaComponent.ɵfac = function DelightfulIndiaComponent_Factory(t) { return new (t || DelightfulIndiaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_1__.GlobalStateService)); };
DelightfulIndiaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DelightfulIndiaComponent, selectors: [["app-delightful-india"]], decls: 18, vars: 7, consts: [[1, "page__container"], [1, "page__heading"], [2, "color", "#FFA501"], [2, "color", "#3d4b93"], [2, "color", "#4fcc87"], [1, "content__container"], [3, "formGroup", 4, "ngIf"], [4, "ngIf"], [1, "modal", 3, "ngClass", "click"], [1, "modal-content"], [1, "close-button", 3, "click"], [2, "line-height", "1.5"], [3, "formGroup"], [1, "container"], [1, "backdrop"], [1, "inside__container"], ["for", "name"], [1, "text-danger"], ["type", "text", "placeholder", "Enter Name", "name", "name", "id", "name", "formControlName", "name"], ["class", "text-danger", 4, "ngIf"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "name", "email", "id", "email", "formControlName", "email"], ["for", "phone"], ["type", "text", "placeholder", "Enter Phone Number", "name", "phone", "formControlName", "phone"], ["for", "pincode"], ["type", "text", "placeholder", "Enter Pincode", "name", "pincode", "id", "pincode", "formControlName", "zipcode"], [2, "margin-bottom", "15px"], ["type", "checkbox", "name", "terms", "formControlName", "terms", 2, "display", "inline !important", "width", "auto"], [1, "ml-4", "f-14"], [1, "f-14"], [1, "clearfix"], ["type", "button", 1, "signupbtn", 3, "click"], ["class", "loader", 4, "ngIf"], [1, "form__redirect"], [3, "click"], [1, "loader"], ["class", "login__user__details", 4, "ngIf"], ["type", "text", "placeholder", "Enter Username", "name", "username", "id", "username", "formControlName", "username"], ["for", "password"], ["type", "password", "placeholder", "Enter Password", "name", "password", "formControlName", "password"], ["s", "", 3, "click"], [1, "login__user__details"], [1, "grid", 2, "gap", "0.5rem", "margin-top", "1rem"], [1, "d-flex"], [1, "key"], [1, "value"], [1, "hints"], [2, "padding", "1rem"], [4, "ngFor", "ngForOf"], ["type", "button", "routerLink", "/", 1, "signupbtn"], ["style", "margin: 1rem 0 !important;display: block;", 4, "ngIf"], ["style", "padding: 1rem;", 4, "ngFor", "ngForOf"], [2, "margin", "1rem 0 !important", "display", "block"], [1, "card", 3, "innerHtml"]], template: function DelightfulIndiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tricolor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Treasure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Hunt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DelightfulIndiaComponent_form_9_Template, 60, 7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DelightfulIndiaComponent_form_10_Template, 34, 5, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DelightfulIndiaComponent_form_11_Template, 35, 5, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelightfulIndiaComponent_Template_div_click_12_listener() { return ctx.modalMessage = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DelightfulIndiaComponent_Template_span_click_14_listener() { return ctx.modalMessage = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSignupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showLoginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showHints);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.modalMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.modalMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;600&display=swap\");\n*[_ngcontent-%COMP%] {\n  font-family: \"DynaPuff\", cursive !important;\n  font-weight: 400 !important;\n}\n.page__container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 80px 0 40px 0;\n  background-image: url(https://hisense-apis.bloginguru.com/media/pages/campaigns/delightful-india/background.png);\n}\n.page__container[_ngcontent-%COMP%]   .content__container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.65);\n  border-radius: 12px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin: 10px 0 !important;\n  display: inline-block;\n  border: none;\n  display: block;\n  background: white;\n  border-radius: 6px;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: black;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: 3px solid #00B3ac;\n}\nhr[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #00B3ac;\n  color: white;\n  padding: 14px 5rem;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  opacity: 0.9;\n  font-weight: bold;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\n.clearfix[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: auto;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 4px;\n  font-size: 14px;\n}\n.text-danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.ml-4[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n.f-14[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.hints[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-width: 500px;\n  justify-content: center;\n  min-height: 500px;\n  margin: auto;\n}\n.hints[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #2FA4E7;\n  color: white;\n  padding: 1rem 2rem;\n  text-align: center;\n}\n.form__redirect[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n}\n.form__redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\n.modal[_ngcontent-%COMP%] {\n  display: block !important;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 2rem;\n  width: 60%;\n  border-radius: 0.5rem;\n}\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -10px;\n  top: -5px;\n  font-size: 2rem;\n  width: 4rem;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50%;\n  background-color: #00B3ac;\n  color: white;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background-color: darkgray;\n}\n.show-modal[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n.login__user__details[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.login__user__details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.login__user__details[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.login__user__details[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold !important;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\nh2[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  font-size: 12px;\n}\nlabel[_ngcontent-%COMP%] {\n  color: white;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\np[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\n  color: white;\n}\n.modal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: black;\n}\n.signupbtn[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  background: #FF9E06;\n  background: linear-gradient(to bottom right, #FF9E06, #50C138);\n  border: none;\n  outline: none;\n  border-radius: 8px;\n  font-size: 2rem;\n  cursor: pointer;\n  color: white;\n  transition: background 300ms ease-in-out;\n}\n.signupbtn[_ngcontent-%COMP%]:hover {\n  \n  background: #FF9C01;\n  background: linear-gradient(to bottom right, #FF9C01, #FFA501);\n}\n.page__heading[_ngcontent-%COMP%] {\n  padding: 40px 0;\n  width: 100%;\n  font-size: 3em;\n}\n.page__heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"DynaPuff\", cursive;\n  font-weight: 600 !important;\n}\n@media screen and (max-width: 850px) {\n  form[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n}\n@media screen and (max-width: 750px) {\n  form[_ngcontent-%COMP%] {\n    width: 60% !important;\n  }\n}\n@media screen and (max-width: 576px) {\n  form[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGlnaHRmdWwtaW5kaWEuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxkZWxpZ2h0ZnVsLWluZGlhXFxkZWxpZ2h0ZnVsLWluZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDBGQUFBO0FBRVI7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnSEFBQTtBQ0FKO0FEU1E7RUFJSSxhQUFBO0VBRUEsK0JBQUE7RUFDQSxtQkFBQTtBQ1haO0FEaUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDL0JKO0FEaUNJO0VBQ0ksWUFBQTtBQy9CUjtBRG1DQTtFQUNJLDBCQUFBO0FDaENKO0FEb0NBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQ2pDSjtBRG9DQSxnQ0FBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ2xDSjtBRHFDQTtFQUNJLFVBQUE7QUNsQ0o7QURxQ0Esc0NBQUE7QUFLQSxpQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDdENKO0FEeUNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUN0Q0o7QUQyQ0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3hDSjtBRDJDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN4Q0o7QUQwQ0k7RUFDSSxjQUFBO0FDeENSO0FENENBO0VBQ0ksZ0JBQUE7QUN6Q0o7QUQ0Q0E7RUFDSSwwQkFBQTtBQ3pDSjtBRDRDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FDekNKO0FENENBO0VBQ0k7SUFDSSx1QkFBQTtFQ3pDTjtFRDRDRTtJQUNJLHlCQUFBO0VDMUNOO0FBQ0Y7QUQ2Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzNDSjtBRDZDSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUMzQ1I7QUQrQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUM1Q0o7QUQ4Q0k7RUFFSSxlQUFBO0VBQ0EsMEJBQUE7QUM3Q1I7QURpREE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlFQUFBO0FDOUNKO0FEaURBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDOUNKO0FEaURBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUM5Q0o7QURpREE7RUFDSSwwQkFBQTtBQzlDSjtBRGlEQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUM5Q0o7QURpREE7RUFDSSxtQkFBQTtBQzlDSjtBRGdESTtFQUNJLGVBQUE7QUM5Q1I7QURpREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUMvQ1I7QURrREk7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNoRFI7QURvREE7O0VBRUksa0JBQUE7RUFDQSxZQUFBO0FDakRKO0FEb0RBO0VBQ0ksZUFBQTtBQ2pESjtBRHNEQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNuREo7QURzREE7RUFDSSxZQUFBO0FDbkRKO0FEc0RBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDbkRKO0FEc0RBOztFQUVJLFlBQUE7QUNuREo7QURzREE7RUFDSSxZQUFBO0FDbkRKO0FEdURBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FDcERKO0FEc0RJO0VBQ0ksOENBQUE7RUFDQSxtQkFBQTtFQUdBLDhEQUFBO0FDcERSO0FEd0RBO0VBQ0ksZUFBQTtFQUVBLFdBQUE7RUFFQSxjQUFBO0FDdkRKO0FEMkRJO0VBQ0ksZ0NBQUE7RUFDQSwyQkFBQTtBQ3pEUjtBRDZEQTtFQUNJO0lBQ0kscUJBQUE7RUMxRE47QUFDRjtBRDZEQTtFQUNJO0lBQ0kscUJBQUE7RUMzRE47QUFDRjtBRDhEQTtFQUNJO0lBQ0kscUJBQUE7RUM1RE47QUFDRiIsImZpbGUiOiJkZWxpZ2h0ZnVsLWluZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RHluYVB1ZmY6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKntcclxuICAgIGZvbnQtZmFtaWx5OiAnRHluYVB1ZmYnLCBjdXJzaXZlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdlX19jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogODBweCAwIDQwcHggMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2hpc2Vuc2UtYXBpcy5ibG9naW5ndXJ1LmNvbS9tZWRpYS9wYWdlcy9jYW1wYWlnbnMvZGVsaWdodGZ1bC1pbmRpYS9iYWNrZ3JvdW5kLnBuZyk7XHJcblxyXG4gICAgLmNvbnRlbnRfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIHRvcDogMTUwcHg7XHJcbiAgICAgICAgLy8gbGVmdDogNTAlO1xyXG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAvLyAuYmFja2Ryb3Age1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLy8gICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyAuaW5zaWRlX19jb250YWluZXIge1xyXG4gICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvLyAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZWxpZ2hmdWxfX2luZGlhX19iYW5uZXIge1xyXG4gICAgICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogM3B4IHNvbGlkICMwMEIzYWM7XHJcbiAgICAvLyBvdXRsaW5lOiAzcHggc29saWQgI0MxNkUyNTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjNhYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggNXJlbTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cclxuLy8gLmNvbnRhaW5lciB7XHJcbi8vICAgICBwYWRkaW5nOiAxNnB4O1xyXG4vLyB9XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNsZWFyZml4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gbWFyZ2luOiAzcmVtIGF1dG87XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWwtNCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4uZi0xNCB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkY7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmhpbnRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRkE0RTc7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtX19yZWRpcmVjdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAvLyAgICAgY29sb3I6IC13ZWJraXQtbGluaztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIHRvcDogLTVweDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjNhYztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG5cclxuLnNob3ctbW9kYWwge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xyXG59XHJcblxyXG4ubG9naW5fX3VzZXJfX2RldGFpbHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmtleSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC52YWx1ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmgxLFxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuXHJcblxyXG5oMitwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5wLFxyXG5kaXYge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW9kYWwgZGl2IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbi5zaWdudXBidG4ge1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOUUwNjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNGRjlFMDYsICM1MEMxMzgpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLyogQ3JlYXRlZCB3aXRoIGh0dHBzOi8vd3d3LmNzcy1ncmFkaWVudC5jb20gKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkY5QzAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjRkY5QzAxLCAjRkZBNTAxKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgI0ZGOUMwMSwgI0ZGQTUwMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI0ZGOUMwMSwgI0ZGQTUwMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWdlX19oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gdG9wOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAvLyBsZWZ0OiA1MCU7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdEeW5hUHVmZicsIGN1cnNpdmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgZm9ybXtcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EeW5hUHVmZjp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIkR5bmFQdWZmXCIsIGN1cnNpdmUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xufVxuXG4ucGFnZV9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4MHB4IDAgNDBweCAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9oaXNlbnNlLWFwaXMuYmxvZ2luZ3VydS5jb20vbWVkaWEvcGFnZXMvY2FtcGFpZ25zL2RlbGlnaHRmdWwtaW5kaWEvYmFja2dyb3VuZC5wbmcpO1xufVxuLnBhZ2VfX2NvbnRhaW5lciAuY29udGVudF9fY29udGFpbmVyIC5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCAjMDBCM2FjO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjNhYztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDVyZW07XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXIgZWxlbWVudHMgKi9cbi8qIENsZWFyIGZsb2F0cyAqL1xuLmNsZWFyZml4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGV4dC1kYW5nZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWwtNCB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5mLTE0IHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkZXIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjRkZGO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5oaW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uaGludHMgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkZBNEU3O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybV9fcmVkaXJlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mb3JtX19yZWRpcmVjdCBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IC01cHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEIzYWM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xufVxuXG4uc2hvdy1tb2RhbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XG59XG5cbi5sb2dpbl9fdXNlcl9fZGV0YWlscyB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4ubG9naW5fX3VzZXJfX2RldGFpbHMgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5sb2dpbl9fdXNlcl9fZGV0YWlscyAua2V5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5sb2dpbl9fdXNlcl9fZGV0YWlscyAudmFsdWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbmgxLFxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmgyICsgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucCxcbmRpdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsIGRpdiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNpZ251cGJ0biB7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogI0ZGOUUwNjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI0ZGOUUwNiwgIzUwQzEzOCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnNpZ251cGJ0bjpob3ZlciB7XG4gIC8qIENyZWF0ZWQgd2l0aCBodHRwczovL3d3dy5jc3MtZ3JhZGllbnQuY29tICovXG4gIGJhY2tncm91bmQ6ICNGRjlDMDE7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAjRkY5QzAxLCAjRkZBNTAxKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICNGRjlDMDEsICNGRkE1MDEpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjRkY5QzAxLCAjRkZBNTAxKTtcbn1cblxuLnBhZ2VfX2hlYWRpbmcge1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDNlbTtcbn1cbi5wYWdlX19oZWFkaW5nIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJEeW5hUHVmZlwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIGZvcm0ge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgZm9ybSB7XG4gICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICBmb3JtIHtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 6598:
/*!*******************************************************************!*\
  !*** ./src/app/pages/delightful-india/delightful-india.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelightfulIndiaModule": () => (/* binding */ DelightfulIndiaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _delightful_india_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delightful-india.component */ 9322);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '', component: _delightful_india_component__WEBPACK_IMPORTED_MODULE_0__.DelightfulIndiaComponent
    }
];
class DelightfulIndiaModule {
}
DelightfulIndiaModule.ɵfac = function DelightfulIndiaModule_Factory(t) { return new (t || DelightfulIndiaModule)(); };
DelightfulIndiaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DelightfulIndiaModule });
DelightfulIndiaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DelightfulIndiaModule, { declarations: [_delightful_india_component__WEBPACK_IMPORTED_MODULE_0__.DelightfulIndiaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_delightful-india_delightful-india_module_ts.js.map