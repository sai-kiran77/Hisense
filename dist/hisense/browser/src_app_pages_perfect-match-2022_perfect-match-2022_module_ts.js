"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_perfect-match-2022_perfect-match-2022_module_ts"],{

/***/ 1087:
/*!***********************************************************************!*\
  !*** ./src/app/pages/perfect-match-2022/perfect-match-2022.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfectMatch2022Module": () => (/* binding */ PerfectMatch2022Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _perfect_match2022_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfect-match2022.component */ 6638);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-wheel */ 1798);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _perfect_match2022_component__WEBPACK_IMPORTED_MODULE_0__.PerfectMatch2022Component
    }
];
class PerfectMatch2022Module {
}
PerfectMatch2022Module.ɵfac = function PerfectMatch2022Module_Factory(t) { return new (t || PerfectMatch2022Module)(); };
PerfectMatch2022Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PerfectMatch2022Module });
PerfectMatch2022Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            ngx_wheel__WEBPACK_IMPORTED_MODULE_3__.NgxWheelModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PerfectMatch2022Module, { declarations: [_perfect_match2022_component__WEBPACK_IMPORTED_MODULE_0__.PerfectMatch2022Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        ngx_wheel__WEBPACK_IMPORTED_MODULE_3__.NgxWheelModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 6638:
/*!*************************************************************************!*\
  !*** ./src/app/pages/perfect-match-2022/perfect-match2022.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfectMatch2022Component": () => (/* binding */ PerfectMatch2022Component)
/* harmony export */ });
/* harmony import */ var C_Users_Sai_Kiran_Documents_hisense_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-wheel */ 1798);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);










const _c0 = ["myaudio"];

function PerfectMatch2022Component_ng_container_2_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name can only contain alphabets!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_2_div_16_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PerfectMatch2022Component_ng_container_2_div_16_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls["name"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls["name"].errors["pattern"]);
  }
}

function PerfectMatch2022Component_ng_container_2_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter a valid email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_2_div_24_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PerfectMatch2022Component_ng_container_2_div_24_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.controls["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.controls["email"].errors["email"]);
  }
}

function PerfectMatch2022Component_ng_container_2_div_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_32_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number can only contain 10 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_32_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number can only contain 10 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_32_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number can only contain digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_2_div_32_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PerfectMatch2022Component_ng_container_2_div_32_span_2_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PerfectMatch2022Component_ng_container_2_div_32_span_3_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PerfectMatch2022Component_ng_container_2_div_32_span_4_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["phone"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["phone"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["phone"].errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["phone"].errors["pattern"]);
  }
}

function PerfectMatch2022Component_ng_container_2_div_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pincode is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_2_div_40_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.signupForm.controls["zipcode"].errors["required"]);
  }
}

function PerfectMatch2022Component_ng_container_2_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 22);
  }
}

function PerfectMatch2022Component_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 8)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Please fill the form to create an account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "label", 9)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PerfectMatch2022Component_ng_container_2_div_16_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div")(18, "label", 13)(19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, PerfectMatch2022Component_ng_container_2_div_24_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div")(26, "label", 15)(27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, PerfectMatch2022Component_ng_container_2_div_32_Template, 5, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "label", 17)(35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Pincode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, PerfectMatch2022Component_ng_container_2_div_40_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 19)(42, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_2_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r17.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, PerfectMatch2022Component_ng_container_2_span_45_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["name"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["email"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["phone"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSignupFormSubmitted && ctx_r0.signupForm.controls["zipcode"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.signupLoading);
  }
}

function PerfectMatch2022Component_ng_container_3_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-wheel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSpinStart", function PerfectMatch2022Component_ng_container_3_ng_container_1_ng_container_5_Template_ngx_wheel_onSpinStart_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r22.before();
    })("onSpinComplete", function PerfectMatch2022Component_ng_container_3_ng_container_1_ng_container_5_Template_ngx_wheel_onSpinComplete_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r24.after();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx_r20.width)("height", ctx_r20.height)("spinDuration", 8)("items", ctx_r20.items)("innerRadius", 20)("spinAmount", 10)("textOrientation", ctx_r20.textOrientation)("textAlignment", ctx_r20.textAlignment)("pointerFillColor", "#d3a774")("idToLandOn", ctx_r20.idToLandOn)("disableSpinOnClick", true);
  }
}

function PerfectMatch2022Component_ng_container_3_ng_container_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 22);
  }
}

function PerfectMatch2022Component_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 23)(2, "div", 24)(3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PerfectMatch2022Component_ng_container_3_ng_container_1_ng_container_5_Template, 2, 11, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19)(7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_3_ng_container_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return ctx_r25.spin();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Spin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PerfectMatch2022Component_ng_container_3_ng_container_1_span_10_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.width && ctx_r19.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.isSpinning);
  }
}

function PerfectMatch2022Component_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_3_ng_container_1_Template, 11, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.imageLoading);
  }
}

const _c1 = function (a0) {
  return {
    "is-loading": a0
  };
};

class PerfectMatch2022Component {
  constructor(platformId, fb, api) {
    this.platformId = platformId;
    this.fb = fb;
    this.api = api;
    this.currentStep = 1;
    this.signupForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[A-Za-z ]+$/)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[0-9]*$/)]],
      zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]] // terms: ['', [Validators.required]]

    });
    this.seed = ['Umbrella', 'Football', 'Water Bottle', 'Cap', 'Washing Machine', 'TV', 'FIFA 2022 Ticket', 'Better luck next time'];
    this.items = [];
    this.textOrientation = ngx_wheel__WEBPACK_IMPORTED_MODULE_4__.TextOrientation.HORIZONTAL;
    this.textAlignment = ngx_wheel__WEBPACK_IMPORTED_MODULE_4__.TextAlignment.INNER;
    this.isSpinning = false;
    this.imageLoading = false;
    this.isSignupFormSubmitted = false;
    this.signupLoading = false;

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      if (window.innerWidth <= 768) {
        this.height = 400;
        this.width = 400;
      } else {
        this.height = 500;
        this.width = 500;
      }
    }
  }

  ngOnInit() {
    this.idToLandOn = Math.floor(Math.random() * this.seed.length); // const colors = ["rgb(141,1,248)", "rgb(202,1,111)", "rgb(251,53,1)", "rgb(252,158,2)", "rgb(254,129,3)", "rgb(98,197,47)", "rgb(7,96,237)", "rgb(44,19,248)",];

    const colors = ["#d3a774", "#fff"];
    this.items = this.seed.map((value, i) => ({
      fillStyle: colors[i % 2],
      // fillStyle: colors[i] ? colors[i] : colors[i - colors.length],
      // fillStyle: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      text: `${value}`,
      id: i,
      textFillStyle: "black",
      textFontSize: "16"
    }));
  }

  ngAfterViewInit() {// console.log(this.wheel);
  }

  reset() {
    this.wheel.reset();
  }

  before() {
    this.isSpinning = true; // alert("Your wheel is about to spin");
  }

  spin(prize) {
    var _this = this;

    return (0,C_Users_Sai_Kiran_Documents_hisense_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isSpinning) {
        return;
      }

      if (prize) {
        _this.idToLandOn = prize;
      } else {
        _this.idToLandOn = Math.floor(Math.random() * _this.seed.length);
      }

      yield new Promise(resolve => setTimeout(resolve, 0));

      _this.wheel.spin();
    })();
  }

  after() {
    // alert("You have been bamboozled");
    this.audio.nativeElement.play(); // audio.play();

    this.isSpinning = false;
    setTimeout(() => {
      alert(`Congratulations you have won Prize ${this.seed[this.idToLandOn]}`);
    }, 750);
    setTimeout(() => {
      this.wheel.reset(); // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    }, 1000);
  }

  imageLoaded() {
    this.imageLoading = false;
  }

  onSubmit() {
    this.isSignupFormSubmitted = true;
    this.signupLoading = true;

    if (this.signupForm && this.signupForm.valid) {
      this.api.PerfectMatch(this.signupForm.value).subscribe(res => {
        this.loggedInUserData = res.data;
        this.signupLoading = false;
        this.currentStep = 2; // this.modalMessage = res.message;
        // if (isPlatformBrowser(this.platformId)) {
        //   localStorage.setItem('username', res.data.username);
        // }
        // this.LoginForm.setValue({
        //   username: res.data.username,
        //   password: res.data.password,
        // })
        // this.showSignupForm = false;
        // this.showLoginForm = true;
        // if (isPlatformBrowser(this.platformId)) {
        //   localStorage.setItem('username', res.data.username);
        //   localStorage.setItem('delightful_india_code', res.data.delightful_india_code);
        // }
      }, err => {
        console.log(err);
        this.signupLoading = false;
        console.log(err); // this.modalMessage = err.error.message;
        // this.modalMessage = err.message;
      });
    } else {
      this.signupLoading = false;
    }
  }

}

PerfectMatch2022Component.ɵfac = function PerfectMatch2022Component_Factory(t) {
  return new (t || PerfectMatch2022Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
};

PerfectMatch2022Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PerfectMatch2022Component,
  selectors: [["app-perfect-match2022"]],
  viewQuery: function PerfectMatch2022Component_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_wheel__WEBPACK_IMPORTED_MODULE_4__.NgxWheelComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.wheel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
    }
  },
  decls: 8,
  vars: 5,
  consts: [[1, "bg-image"], [1, "page__wrapper", "card", 3, "ngClass"], [4, "ngIf"], ["id", "myAudio"], ["myaudio", ""], ["src", "../../../assets/audio/mixkit-fantasy-game-success-notification-270.wav", "type", "audio/ogg"], [3, "formGroup"], [1, "form__blur"], [1, "container"], ["for", "name"], [1, "text-danger"], ["type", "text", "placeholder", "Enter Name", "name", "name", "id", "name", "formControlName", "name"], ["class", "text-danger", 4, "ngIf"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "name", "email", "id", "email", "formControlName", "email"], ["for", "phone"], ["type", "text", "placeholder", "Enter Phone Number", "name", "phone", "formControlName", "phone"], ["for", "pincode"], ["type", "text", "placeholder", "Enter Pincode", "name", "pincode", "id", "pincode", "formControlName", "zipcode"], [1, "clearfix"], ["type", "button", 1, "submit__btn", 3, "click"], ["class", "loader", 4, "ngIf"], [1, "loader"], [1, "spinner__wrapper"], [1, "icon"], [1, "absolute", "spin-btn-wrap"], ["type", "button", 1, "aha-button", "spinner-wheel-spin-button", "spin-btn", "aha-button-xs", "aha-button-primary"], ["Roulette", "", "pointerStrokeColor", "white", 3, "width", "height", "spinDuration", "items", "innerRadius", "spinAmount", "textOrientation", "textAlignment", "pointerFillColor", "idToLandOn", "disableSpinOnClick", "onSpinStart", "onSpinComplete"]],
  template: function PerfectMatch2022Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PerfectMatch2022Component_ng_container_2_Template, 46, 6, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PerfectMatch2022Component_ng_container_3_Template, 2, 1, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "audio", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "source", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Your browser does not support the audio element.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, ctx.imageLoading));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentStep == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentStep == 2);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_wheel__WEBPACK_IMPORTED_MODULE_4__.NgxWheelComponent],
  styles: ["@import url(\"https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;600&display=swap\");\n.bg-image[_ngcontent-%COMP%] {\n  background-image: url('Spin-The-Wheel-Website-Banner.jpg');\n  height: calc(100vh - 80px);\n  width: 100%;\n  background-size: cover;\n  position: absolute;\n  top: 80px;\n  filter: blur(1px);\n}\n.page__wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 80px);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  flex-direction: column;\n  text-align: center;\n}\n.page__wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 54px;\n  margin-bottom: 24px;\n  font-weight: bold;\n}\n.page__wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 24px;\n}\n.spinner__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  border-radius: 50%;\n  top: 41.65%;\n  left: 45%;\n}\n.spin-btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  width: 60px;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #d3a774;\n  border: 6.2px solid #d3a774;\n  box-shadow: 0 7.15653px 0 1.78913px rgba(0, 0, 0, 0.06);\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.spin-btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #d3a774;\n  border: none;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n}\nsvg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-wheel-spin-button[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0;\n  border-radius: 100%;\n  border: 2px solid white;\n}\n@media screen and (max-width: 768px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 48.45%;\n    left: 44%;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n  }\n\n  .spin-btn-wrap[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n  }\n\n  .spin-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\nform[_ngcontent-%COMP%] {\n  z-index: 1;\n  color: black;\n  min-width: 450px;\n  padding: 16px;\n  background-color: rgba(255, 255, 255, 0.9);\n  position: relative;\n  border: 6px solid #00B3ac;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive;\n}\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 4px;\n  font-size: 14px;\n  text-align: left;\n}\n.text-danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\nhr[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #00B3ac;\n  color: white;\n  padding: 14px 5rem;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  opacity: 0.9;\n  font-weight: bold;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin: 16px auto;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin: 8px 0 0 !important;\n  display: inline-block;\n  display: block;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 6px;\n  border: 1px solid #00B3ac;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: black;\n}\nlabel[_ngcontent-%COMP%] {\n  text-align: left;\n  display: block;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZlY3QtbWF0Y2gyMDIyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGhpc2Vuc2VcXHNyY1xcYXBwXFxwYWdlc1xccGVyZmVjdC1tYXRjaC0yMDIyXFxwZXJmZWN0LW1hdGNoMjAyMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSwwRkFBQTtBQUVSO0VBQ0ksMERBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDREo7QURJQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNESjtBREdJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNEUjtBRElJO0VBRUksZUFBQTtFQUNBLG1CQUFBO0FDSFI7QURPQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0pKO0FETUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFJQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDUFI7QURZQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7QUNUSjtBRFlBO0VBQ0ksa0JBQUE7QUNUSjtBRFlBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRGNBO0VBQ0ksZUFBQTtBQ1hKO0FEZUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNaSjtBRGVBO0VBRVE7SUFDSSxXQUFBO0lBQ0EsU0FBQTtFQ2JWOztFRGlCRTtJQUNJLHNCQUFBO0lBQ0EsdUJBQUE7RUNkTjs7RURpQkU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQ2ROOztFRGlCRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDZE47QUFDRjtBRGtCQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBRUEsMENBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxpREFBQTtBQ2xCSjtBRDRCSTtFQUNJLHNDQUFBO0FDMUJSO0FEa0NJOztFQUVJLG1CQUFBO0FDaENSO0FEbUNJO0VBQ0ksZUFBQTtBQ2pDUjtBRG9DSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ2xDUjtBRHNDQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ25DSjtBRG9DSTtFQUNJLGNBQUE7QUNsQ1I7QUR1Q0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDcENKO0FEdUNBLGdDQUFBO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNyQ0o7QUR3Q0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFFQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ3RDSjtBRHdDSTtFQUNJLFlBQUE7QUN0Q1I7QUQrQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUM1Q0o7QUQrQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQzVDSjtBRCtDQTtFQUNJO0lBQ0ksdUJBQUE7RUM1Q047RUQrQ0U7SUFDSSx5QkFBQTtFQzdDTjtBQUNGIiwiZmlsZSI6InBlcmZlY3QtbWF0Y2gyMDIyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA3MDAmZmFtaWx5PUR5bmFQdWZmOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RHluYVB1ZmY6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmJnLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvU3Bpbi1UaGUtV2hlZWwtV2Vic2l0ZS1CYW5uZXIuanBnKTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuXHJcbi5wYWdlX193cmFwcGVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gd2lkdGg6IDM3cHg7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZm9vdGJhbGwuc3ZnKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdG9wOiA0MS42NSU7XHJcbiAgICAgICAgbGVmdDogNDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnNwaW4tYnRuLXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2QzYTc3NDtcclxuICAgIGJvcmRlcjogNi4ycHggc29saWQgI2QzYTc3NDtcclxuICAgIGJveC1zaGFkb3c6IDAgNy4xNTY1M3B4IDAgMS43ODkxM3B4IHJnYigwIDAgMCAvIDYlKTtcclxufVxyXG5cclxuLmFic29sdXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnNwaW4tYnRuIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgLy8gei1pbmRleDogMjA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNDIsIDI0NiwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNhNzc0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5zcGlubmVyLXdoZWVsLXNwaW4tYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB0b3A6IDQ4LjQ1JTtcclxuICAgICAgICAgICAgbGVmdDogNDQlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW4tYnRuLXdyYXAge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbi1idG4ge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZvcm0ge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzAwQjNhYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI1JSkgMHB4IDU0cHggNTVweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggLTEycHggMzBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggNHB4IDZweCwgcmdiKDAgMCAwIC8gMTclKSAwcHggMTJweCAxM3B4LCByZ2IoMCAwIDAgLyA5JSkgMHB4IC0zcHggNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcclxuICAgIC8vIC5mb3JtX19ibHVyIHtcclxuICAgIC8vICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gICAgIHRvcDogMDtcclxuICAgIC8vICAgICBsZWZ0OiAwO1xyXG4gICAgLy8gfVxyXG5cclxuICAgICoge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC5jb250YWluZXJ7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIHotaW5kZXg6IDI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaDIsXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCM2FjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCA1cmVtO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIG1hcmdpbjogMTZweCBhdXRvO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwIDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQjNhYztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuLy8gaW5wdXQ6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogM3B4IHNvbGlkICMwMEIzYWM7XHJcbi8vICAgICAvLyBvdXRsaW5lOiAzcHggc29saWQgI0MxNkUyNTtcclxuLy8gfVxyXG5cclxubGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGFuaW1hdGlvbjogcm90YXRpb24gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUR5bmFQdWZmOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1NwaW4tVGhlLVdoZWVsLVdlYnNpdGUtQmFubmVyLmpwZyk7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwcHg7XG4gIGZpbHRlcjogYmx1cigxcHgpO1xufVxuXG4ucGFnZV9fd3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhZ2VfX3dyYXBwZXIgaDEge1xuICBmb250LXNpemU6IDU0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhZ2VfX3dyYXBwZXIgaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5zcGlubmVyX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3Bpbm5lcl9fd3JhcHBlciAuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogNDEuNjUlO1xuICBsZWZ0OiA0NSU7XG59XG5cbi5zcGluLWJ0bi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZDNhNzc0O1xuICBib3JkZXI6IDYuMnB4IHNvbGlkICNkM2E3NzQ7XG4gIGJveC1zaGFkb3c6IDAgNy4xNTY1M3B4IDAgMS43ODkxM3B4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNwaW4tYnRuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzYTc3NDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcGlubmVyLXdoZWVsLXNwaW4tYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNwaW5uZXJfX3dyYXBwZXIgLmljb24ge1xuICAgIHRvcDogNDguNDUlO1xuICAgIGxlZnQ6IDQ0JTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zcGluLWJ0bi13cmFwIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICAuc3Bpbi1idG4ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuZm9ybSB7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiBibGFjaztcbiAgbWluLXdpZHRoOiA0NTBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICMwMEIzYWM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcbn1cbmZvcm0gKiB7XG4gIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmcgU2NyaXB0XCIsIGN1cnNpdmU7XG59XG5mb3JtIGgyLFxuZm9ybSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbmZvcm0gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmZvcm0gaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC1kYW5nZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjNhYztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDVyZW07XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW46IDE2cHggYXV0bztcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA4cHggMCAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCM2FjO1xuICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5sYWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9hZGVyIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfect-match-2022_perfect-match-2022_module_ts.js.map