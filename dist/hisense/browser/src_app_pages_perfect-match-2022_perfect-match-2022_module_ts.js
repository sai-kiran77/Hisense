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
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PerfectMatch2022Module, { declarations: [_perfect_match2022_component__WEBPACK_IMPORTED_MODULE_0__.PerfectMatch2022Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        ngx_wheel__WEBPACK_IMPORTED_MODULE_3__.NgxWheelModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-wheel */ 1798);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2566);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global-state.service */ 6007);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);














const _c0 = ["myaudio"];

function PerfectMatch2022Component_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 8);
  }
}

function PerfectMatch2022Component_div_3_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.thankYouMessage);
  }
}

function PerfectMatch2022Component_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Congratulations!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PerfectMatch2022Component_div_3_h3_3_Template, 2, 1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Please Share this page on social media");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.thankYouMessage);
  }
}

function PerfectMatch2022Component_ng_container_4_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name can only contain alphabets!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_4_div_16_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PerfectMatch2022Component_ng_container_4_div_16_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.signupForm.controls["name"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.signupForm.controls["name"].errors["pattern"]);
  }
}

function PerfectMatch2022Component_ng_container_4_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_24_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enter a valid email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_4_div_24_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PerfectMatch2022Component_ng_container_4_div_24_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.signupForm.controls["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.signupForm.controls["email"].errors["email"]);
  }
}

function PerfectMatch2022Component_ng_container_4_div_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Phone Number is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_32_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Phone Number can only contain 10 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_32_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Phone Number can only contain 10 digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_32_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Phone Number can only contain digits!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_4_div_32_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PerfectMatch2022Component_ng_container_4_div_32_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PerfectMatch2022Component_ng_container_4_div_32_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PerfectMatch2022Component_ng_container_4_div_32_span_4_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.signupForm.controls["phone"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.signupForm.controls["phone"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.signupForm.controls["phone"].errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.signupForm.controls["phone"].errors["pattern"]);
  }
}

function PerfectMatch2022Component_ng_container_4_div_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Pincode is required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_4_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_4_div_40_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.signupForm.controls["zipcode"].errors["required"]);
  }
}

function PerfectMatch2022Component_ng_container_4_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 26);
  }
}

function PerfectMatch2022Component_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Please fill the form to create an account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "label", 13)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PerfectMatch2022Component_ng_container_4_div_16_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div")(18, "label", 17)(19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PerfectMatch2022Component_ng_container_4_div_24_Template, 3, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div")(26, "label", 19)(27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, PerfectMatch2022Component_ng_container_4_div_32_Template, 5, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div")(34, "label", 21)(35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Pincode");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, PerfectMatch2022Component_ng_container_4_div_40_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 23)(42, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_4_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r22.onSubmit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, PerfectMatch2022Component_ng_container_4_span_45_Template, 1, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isSignupFormSubmitted && ctx_r2.signupForm.controls["name"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isSignupFormSubmitted && ctx_r2.signupForm.controls["email"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isSignupFormSubmitted && ctx_r2.signupForm.controls["phone"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isSignupFormSubmitted && ctx_r2.signupForm.controls["zipcode"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.signupLoading);
  }
}

function PerfectMatch2022Component_ng_container_5_label_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 53)(1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PerfectMatch2022Component_ng_container_5_label_36_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r32.selectedOption = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r31 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r31.id)("ngModel", ctx_r24.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r31 == null ? null : option_r31.answer);
  }
}

const _c1 = function (a0) {
  return {
    "show": a0
  };
};

function PerfectMatch2022Component_ng_container_5_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r34.onNextQuestion();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Next Que");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, ctx_r25.showQuestions));
  }
}

function PerfectMatch2022Component_ng_container_5_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r36.onSubmitQuiz();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, ctx_r26.showQuestions));
  }
}

function PerfectMatch2022Component_ng_container_5_img_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 56);
  }
}

function PerfectMatch2022Component_ng_container_5_img_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 57);
  }
}

function PerfectMatch2022Component_ng_container_5_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_button_53_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r38.onReplayQuiz();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Replay Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_5_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_button_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r40.onSpinTheWheel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Spin the Wheel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c2 = function (a0) {
  return {
    "activeInfo": a0
  };
};

const _c3 = function (a0) {
  return {
    "activeQuiz": a0
  };
};

const _c4 = function (a0) {
  return {
    "activeResult": a0
  };
};

function PerfectMatch2022Component_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form")(2, "div", 12)(3, "div", 27)(4, "div", 28)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Some Rules of this Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ol", 29)(8, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "You will have only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "30 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " per each question.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "You can't select any option once time goes off.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "You can't exit from the Quiz while you're playing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "You'll get points on the basis of your correct answers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 31)(20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r42.onContinueRules();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Start Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 33)(23, "header")(24, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 35)(27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "section")(33, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, PerfectMatch2022Component_ng_container_5_label_36_Template, 4, 3, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "footer")(38, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, PerfectMatch2022Component_ng_container_5_button_40_Template, 2, 3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, PerfectMatch2022Component_ng_container_5_button_41_Template, 2, 3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 44)(43, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, PerfectMatch2022Component_ng_container_5_img_44_Template, 1, 0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, PerfectMatch2022Component_ng_container_5_img_45_Template, 1, 0, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "You've completed the Quiz!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 50)(51, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r44.onQuitQuiz();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Quit Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, PerfectMatch2022Component_ng_container_5_button_53_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, PerfectMatch2022Component_ng_container_5_button_54_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c2, ctx_r3.showRules));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c3, ctx_r3.showQuestions));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.timeText);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.timeCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.currentQuestion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.currentOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r3.currentQuestionNumber, " of ", ctx_r3.questions.length, " Questions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.currentQuestionNumber != ctx_r3.questions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.currentQuestionNumber == ctx_r3.questions.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c4, ctx_r3.showQuizResults));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.quizStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.quizStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.quizResultMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.quizStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.quizStatus);
  }
}

function PerfectMatch2022Component_ng_container_6_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-wheel", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSpinStart", function PerfectMatch2022Component_ng_container_6_ng_container_1_ng_container_4_Template_ngx_wheel_onSpinStart_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r48.before();
    })("onSpinComplete", function PerfectMatch2022Component_ng_container_6_ng_container_1_ng_container_4_Template_ngx_wheel_onSpinComplete_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r50.after();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", ctx_r46.width)("height", ctx_r46.height)("spinDuration", 8)("items", ctx_r46.items)("innerRadius", 0)("spinAmount", 10)("textOrientation", ctx_r46.textOrientation)("textAlignment", ctx_r46.textAlignment)("pointerFillColor", "#d3a774")("idToLandOn", ctx_r46.idToLandOn)("disableSpinOnClick", true);
  }
}

function PerfectMatch2022Component_ng_container_6_ng_container_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 26);
  }
}

function PerfectMatch2022Component_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 59)(2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PerfectMatch2022Component_ng_container_6_ng_container_1_ng_container_4_Template, 2, 11, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 62)(6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_6_ng_container_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r51.spin();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Spin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PerfectMatch2022Component_ng_container_6_ng_container_1_span_9_Template, 1, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r45.width && ctx_r45.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r45.isSpinning);
  }
}

function PerfectMatch2022Component_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_6_ng_container_1_Template, 10, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.imageLoading);
  }
}

function PerfectMatch2022Component_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 65)(4, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.thankYouImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r5.socialLinks == null ? null : ctx_r5.socialLinks.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r5.socialLinks == null ? null : ctx_r5.socialLinks.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

const _c5 = function (a0, a1) {
  return {
    "is-loading": a0,
    "height-auto thakyou__step": a1
  };
};

class PerfectMatch2022Component {
  constructor(platformId, fb, api, state, route, router, title, meta) {
    this.platformId = platformId;
    this.fb = fb;
    this.api = api;
    this.state = state;
    this.route = route;
    this.router = router;
    this.title = title;
    this.meta = meta;
    this.currentStep = 1;
    this.textFontSize = "16";
    this.alive = true;
    this.signupForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[A-Za-z ]+$/)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[0-9]*$/)]],
      zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]] // terms: ['', [Validators.required]]

    });
    this.seed = ['Umbrella', 'Football', 'Water Bottle', 'Cap', 'Washing Machine', 'TV', 'FIFA 2022 Ticket', 'Better luck next time'];
    this.items = [];
    this.textOrientation = ngx_wheel__WEBPACK_IMPORTED_MODULE_5__.TextOrientation.HORIZONTAL;
    this.textAlignment = ngx_wheel__WEBPACK_IMPORTED_MODULE_5__.TextAlignment.CENTER;
    this.isSpinning = false;
    this.imageLoading = true;
    this.isSignupFormSubmitted = false;
    this.signupLoading = false; // showStartQuiz = false;

    this.showRules = false;
    this.showQuestions = false;
    this.showQuizResults = false;
    this.currentQuestion = '';
    this.currentOptions = [];
    this.selectedOption = null;
    this.questions = [];
    this.currentQuestionNumber = 0;
    this.quizAnswers = [];
    this.timeCount = 30;
    this.timeText = 'Time Left';
    this.quizResultMessage = '';
    this.quizStatus = 0;
    this.state.mobileNavToggle.next(false);

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
      // if (window.innerWidth <= 375) {
      //   this.height = 300;
      //   this.width = 300;
      //   this.textFontSize = "10";
      // } else if (window.innerWidth <= 450) {
      //   this.height = 340;
      //   this.width = 340;
      this.textFontSize = "12"; // } else if (window.innerWidth <= 576) {
      //   this.height = 375;
      //   this.width = 375;
      //   this.textFontSize = "11";
      // } else if (window.innerWidth <= 768) {
      //   this.height = 400;
      //   this.width = 400;
      //   this.textFontSize = "12";
      // } else {

      this.height = 350;
      this.width = 350; // }
    }
  }

  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeWhile)(_ => this.alive)).subscribe(routeParams => {
      // console.log(routeParams);
      if (routeParams['uuid']) {
        this.getRegistrationSummary(routeParams['uuid']);
      }
    });
    this.setSpinData();
  }

  getRegistrationSummary(uuid) {
    const params = {
      registration_uuid: uuid
    };
    this.api.registrationSummary(params).subscribe(res => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q; // console.log(res);


      if (((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.next_step) == 'thank_you') {
        this.thankYouImage = (_e = (_d = (_c = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.next_step_data) === null || _c === void 0 ? void 0 : _c.thank_you) === null || _d === void 0 ? void 0 : _d.campaign_perfect_match_2022_spin_wheel_prize) === null || _e === void 0 ? void 0 : _e.image_full_url;
        this.thankYouMessage = (_j = (_h = (_g = (_f = res === null || res === void 0 ? void 0 : res.data) === null || _f === void 0 ? void 0 : _f.next_step_data) === null || _g === void 0 ? void 0 : _g.thank_you) === null || _h === void 0 ? void 0 : _h.campaign_perfect_match_2022_spin_wheel_prize) === null || _j === void 0 ? void 0 : _j.message;
        this.socialLinks = (_m = (_l = (_k = res === null || res === void 0 ? void 0 : res.data) === null || _k === void 0 ? void 0 : _k.next_step_data) === null || _l === void 0 ? void 0 : _l.thank_you) === null || _m === void 0 ? void 0 : _m.social_share_links;
        this.currentStep = 4;
        this.seoTags((_q = (_p = (_o = res === null || res === void 0 ? void 0 : res.data) === null || _o === void 0 ? void 0 : _o.next_step_data) === null || _p === void 0 ? void 0 : _p.thank_you) === null || _q === void 0 ? void 0 : _q.seo_info);
      }
    }, err => {
      console.log(err);
      this.router.navigate(['/perfect-match-2022']);
    });
  }

  ngAfterViewInit() {// console.log(this.wheel);
  }

  setSpinData() {
    // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    // const colors = ["rgb(141,1,248)", "rgb(202,1,111)", "rgb(251,53,1)", "rgb(252,158,2)", "rgb(254,129,3)", "rgb(98,197,47)", "rgb(7,96,237)", "rgb(44,19,248)",];
    const colors = ["#d3a774", "#fff"];
    this.items = this.seed.map((value, i) => ({
      fillStyle: colors[i % 2],
      // fillStyle: colors[i] ? colors[i] : colors[i - colors.length],
      // fillStyle: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      text: `${value}`,
      id: i,
      textFillStyle: "black",
      textFontSize: this.textFontSize
    }));
  }

  seoTags(data) {
    this.title.setTitle(data.title);
    this.meta.updateTag({
      name: 'description',
      content: data.description
    });
    const obj = data === null || data === void 0 ? void 0 : data.meta; // data.meta.forEach((obj: any) => {

    if (obj) {
      for (let key in obj.attributes) {
        this.meta.updateTag({
          property: key,
          content: obj.attributes[key]
        });
      }
    } // })

  }

  reset() {
    this.wheel.reset();
  }

  before() {
    this.isSpinning = true; // alert("Your wheel is about to spin");
  }

  spin() {
    var _this = this;

    return (0,C_Users_Sai_Kiran_Documents_hisense_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isSpinning) {
        return;
      } // if (prize) {
      // this.idToLandOn = prize;
      // } else {
      // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
      // }


      yield new Promise(resolve => setTimeout(resolve, 0));

      _this.wheel.spin();

      _this.api.spinTheWheel({
        user_id: _this.loggedInUserData.id,
        spin_wheel_prize_id: _this.idToLandOn + 1
      }).subscribe(res => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l; // console.log(res);


        if (((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.next_step) == 'thank_you') {
          // this.thankYouImage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.image_full_url;
          // this.thankYouMessage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.message;
          _this.thankYouUUID = (_e = (_d = (_c = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.next_step_data) === null || _c === void 0 ? void 0 : _c.thank_you) === null || _d === void 0 ? void 0 : _d.campaign_perfect_match_2022_registration) === null || _e === void 0 ? void 0 : _e.uuid;
          _this.socialLinks = (_h = (_g = (_f = res === null || res === void 0 ? void 0 : res.data) === null || _f === void 0 ? void 0 : _f.next_step_data) === null || _g === void 0 ? void 0 : _g.thank_you) === null || _h === void 0 ? void 0 : _h.social_share_links;

          _this.seoTags((_l = (_k = (_j = res === null || res === void 0 ? void 0 : res.data) === null || _j === void 0 ? void 0 : _j.next_step_data) === null || _k === void 0 ? void 0 : _k.thank_you) === null || _l === void 0 ? void 0 : _l.seo_info);
        }
      }, err => {
        console.log(err);
      });
    })();
  }

  after() {
    // alert("You have been bamboozled");
    this.audio.nativeElement.play(); // audio.play();

    this.isSpinning = false;
    setTimeout(() => {
      alert(`Congratulations you are eligible for ${this.seed[this.idToLandOn]}`);
    }, 750);
    setTimeout(() => {
      this.wheel.reset();
      this.currentStep = 4;
      this.router.navigate(['/perfect-match-2022', this.thankYouUUID]); // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

        this.loggedInUserData = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.user;
        this.signupLoading = false; // console.log(res);

        if (((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.next_step) == "take_quiz") {
          this.currentStep = 2;
          this.showRules = true;
          this.questions = (_d = (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.next_step_data) === null || _d === void 0 ? void 0 : _d.quiz_questions;
        }

        if (((_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.next_step) == 'spin_wheel') {
          this.currentStep = 3;
          this.idToLandOn = ((_g = (_f = res === null || res === void 0 ? void 0 : res.data) === null || _f === void 0 ? void 0 : _f.next_step_data) === null || _g === void 0 ? void 0 : _g.spin_wheel_prize_id) - 1;
          this.seed = (_k = (_j = (_h = res === null || res === void 0 ? void 0 : res.data) === null || _h === void 0 ? void 0 : _h.next_step_data) === null || _j === void 0 ? void 0 : _j.spin_wheel_prizes) === null || _k === void 0 ? void 0 : _k.map(obj => obj.name);
          this.setSpinData();
        }

        if (((_l = res === null || res === void 0 ? void 0 : res.data) === null || _l === void 0 ? void 0 : _l.next_step) == 'thank_you') {
          // this.thankYouImage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.image_full_url;
          // this.thankYouMessage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.message;
          // this.currentStep = 4;
          this.router.navigate(['/perfect-match-2022', (_q = (_p = (_o = (_m = res === null || res === void 0 ? void 0 : res.data) === null || _m === void 0 ? void 0 : _m.next_step_data) === null || _o === void 0 ? void 0 : _o.thank_you) === null || _p === void 0 ? void 0 : _p.campaign_perfect_match_2022_registration) === null || _q === void 0 ? void 0 : _q.uuid]);
        }
      }, err => {
        this.signupLoading = false;
        console.log(err);
      });
    } else {
      this.signupLoading = false;
    }
  }

  onStartQuiz() {
    this.resetQuizCurrentContentDisplay();
    this.showRules = true;
  }

  onContinueRules() {
    this.resetQuizCurrentContentDisplay();
    this.showQuestions = true;
    this.startTimer(30);
    this.showQuestion(this.currentQuestionNumber);
  }

  resetQuizCurrentContentDisplay() {
    this.showQuestions = false;
    this.showRules = false; // this.showStartQuiz = false;

    this.showQuizResults = false;
  }

  showQuestion(index) {
    var _a, _b, _c;

    this.currentQuestionNumber = index + 1;
    this.currentQuestion = `${index + 1}. ${(_a = this.questions[index]) === null || _a === void 0 ? void 0 : _a.question}`;
    this.currentOptions = (_b = this.questions[index]) === null || _b === void 0 ? void 0 : _b.answers;
    this.currentQuestionId = (_c = this.questions[index]) === null || _c === void 0 ? void 0 : _c.id;
  }

  startTimer(time) {
    clearInterval(this.counter);
    this.timeCount = time;
    this.counter = setInterval(() => {
      this.timeCount = time; //changing the value of timeCount with time value

      time--; //decrement the time value

      if (time < 9) {
        //if timer is less than 9
        let addZero = this.timeCount;
        this.timeCount = "0" + addZero; //add a 0 before time value
      }

      if (time <= 0) {
        //if timer is less than 0
        clearInterval(this.counter); //clear counter

        this.timeText = "Time Off"; //change the time text to time off

        this.onNextQuestion();
      }
    }, 1000);
  }

  onNextQuestion() {
    this.quizAnswers.push({
      question_id: this.currentQuestionId,
      answer_id: this.selectedOption
    });
    this.selectedOption = null;
    this.startTimer(30);
    this.showQuestion(this.currentQuestionNumber); // console.log(this.quizAnswers)
  }

  onSubmitQuiz() {
    this.quizAnswers.push({
      question_id: this.currentQuestionId,
      answer_id: this.selectedOption
    });
    this.selectedOption = null; // console.log(this.quizAnswers);
    // console.log(this.loggedInUserData);

    this.api.submitPerfectMatchQuiz({
      quiz: this.quizAnswers,
      user_id: this.loggedInUserData.id
    }).subscribe(res => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j; // this.loggedInUserData = res?.data?.user;
      // this.signupLoading = false;


      this.resetQuizCurrentContentDisplay(); // console.log(res);

      if (((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.next_step) == "take_quiz") {
        this.quizResultMessage = "and sorry , you didn't score enough to pass the quiz";
        this.quizStatus = 0;
        this.showQuizResults = true;
        this.questions = (_c = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.next_step_data) === null || _c === void 0 ? void 0 : _c.quiz_questions; // console.log(this.questions);
      }

      if (((_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.next_step) == 'spin_wheel') {
        this.quizStatus = 1;
        this.quizResultMessage = "and congrats! , Now you can try your luck by spinning the Wheel";
        this.showQuizResults = true;
        this.idToLandOn = ((_f = (_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.next_step_data) === null || _f === void 0 ? void 0 : _f.spin_wheel_prize_id) - 1;
        this.seed = (_j = (_h = (_g = res === null || res === void 0 ? void 0 : res.data) === null || _g === void 0 ? void 0 : _g.next_step_data) === null || _h === void 0 ? void 0 : _h.spin_wheel_prizes) === null || _j === void 0 ? void 0 : _j.map(obj => obj.name);
        this.setSpinData();
      }
    }, err => {
      console.log(err);
      this.resetQuizCurrentContentDisplay();
      this.showRules = true;
    });
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  onQuitQuiz() {
    this.resetQuizCurrentContentDisplay();
    this.showRules = true;
    this.currentQuestionNumber = 0;
    this.quizAnswers = [];
    this.currentStep = 1;
  }

  onReplayQuiz() {
    this.resetQuizCurrentContentDisplay();
    this.showRules = true;
    this.currentQuestionNumber = 0;
    this.questions = this.shuffle(this.questions);
    this.quizAnswers = [];
  }

  onSpinTheWheel() {
    this.resetQuizCurrentContentDisplay();
    this.currentQuestionNumber = 0;
    this.currentStep = 3;
  }

}

PerfectMatch2022Component.ɵfac = function PerfectMatch2022Component_Factory(t) {
  return new (t || PerfectMatch2022Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_2__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Meta));
};

PerfectMatch2022Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PerfectMatch2022Component,
  selectors: [["app-perfect-match2022"]],
  viewQuery: function PerfectMatch2022Component_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_wheel__WEBPACK_IMPORTED_MODULE_5__.NgxWheelComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.wheel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
    }
  },
  decls: 12,
  vars: 10,
  consts: [["class", "bg-image", 4, "ngIf"], [1, "page-wrapper", "card", 3, "ngClass"], ["src", "assets/Spin-The-Wheel-Website-Banner.jpg", 2, "display", "none", 3, "load"], ["class", "page__heading", 4, "ngIf"], [4, "ngIf"], ["id", "myAudio"], ["myaudio", ""], ["src", "../../../assets/audio/mixkit-fantasy-game-success-notification-270.wav", "type", "audio/ogg"], [1, "bg-image"], [1, "page__heading"], [3, "formGroup"], [1, "form__blur"], [1, "container"], ["for", "name"], [1, "text-danger"], ["type", "text", "placeholder", "Enter Name", "name", "name", "id", "name", "formControlName", "name"], ["class", "text-danger", 4, "ngIf"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "name", "email", "id", "email", "formControlName", "email"], ["for", "phone"], ["type", "text", "placeholder", "Enter Phone Number", "name", "phone", "formControlName", "phone"], ["for", "pincode"], ["type", "text", "placeholder", "Enter Pincode", "name", "pincode", "id", "pincode", "formControlName", "zipcode"], [1, "clearfix"], ["type", "button", 1, "submit__btn", 3, "click"], ["class", "loader", 4, "ngIf"], [1, "loader"], [1, "info_box", 3, "ngClass"], [1, "info-title"], [1, "info-list"], [1, "info"], [1, "buttons", 2, "justify-content", "center"], [1, "start_btn", 2, "white-space", "nowrap", 3, "click"], [1, "quiz_box", 3, "ngClass"], [1, "title"], [1, "timer"], [1, "time_left_txt"], [1, "timer_sec"], [1, "time_line"], [1, "que_text"], [1, "option_list"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "total_que"], ["class", "next_btn", 3, "ngClass", "click", 4, "ngIf"], [1, "result_box", 3, "ngClass"], [1, "icon"], ["width", "48", "height", "48", "src", "assets/warning.svg", "alt", "warning", 4, "ngIf"], ["width", "48", "height", "48", "src", "assets/crown.svg", "alt", "warning", 4, "ngIf"], [1, "complete_text"], [1, "score_text"], [1, "buttons"], [1, "quit", 3, "click"], ["class", "restart", 3, "click", 4, "ngIf"], [1, "option"], ["type", "radio", "name", "option", 3, "value", "ngModel", "ngModelChange"], [1, "next_btn", 3, "ngClass", "click"], ["width", "48", "height", "48", "src", "assets/warning.svg", "alt", "warning"], ["width", "48", "height", "48", "src", "assets/crown.svg", "alt", "warning"], [1, "restart", 3, "click"], [1, "spinner__wrapper"], [1, "relative"], ["src", "assets/wheel_back.png", "width", "434", "height", "434", 1, "wheel__back__img"], [1, "clearfix", 2, "margin-top", "auto"], ["Roulette", "", "pointerStrokeColor", "white", 1, "ngx-wheel", 3, "width", "height", "spinDuration", "items", "innerRadius", "spinAmount", "textOrientation", "textAlignment", "pointerFillColor", "idToLandOn", "disableSpinOnClick", "onSpinStart", "onSpinComplete"], [1, "thankyou__img", 3, "src"], [2, "display", "flex", "gap", "12px", "padding", "0 15px 10px", "justify-content", "center"], ["target", "_blank", 1, "social-btn", "fb", 2, "min-height", "auto", 3, "href"], ["target", "_blank", 1, "social-btn", "twitter", 2, "min-height", "auto", 3, "href"]],
  template: function PerfectMatch2022Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PerfectMatch2022Component_div_0_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function PerfectMatch2022Component_Template_img_load_2_listener() {
        return ctx.imageLoaded();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PerfectMatch2022Component_div_3_Template, 6, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PerfectMatch2022Component_ng_container_4_Template, 46, 6, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PerfectMatch2022Component_ng_container_5_Template, 55, 22, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PerfectMatch2022Component_ng_container_6_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PerfectMatch2022Component_ng_container_7_Template, 8, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "audio", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "source", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Your browser does not support the audio element.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep != 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](7, _c5, ctx.imageLoading, ctx.currentStep == 4));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep == 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep == 4);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_wheel__WEBPACK_IMPORTED_MODULE_5__.NgxWheelComponent],
  styles: ["@import url(\"https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;600&display=swap\");\n.bg-image[_ngcontent-%COMP%] {\n  background-image: url('Spin-The-Wheel-Website-Banner.jpg');\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  position: absolute;\n  top: 80px;\n  filter: blur(1px);\n}\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  flex-direction: column;\n  text-align: center;\n}\n.page-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 54px;\n  margin-bottom: 24px;\n  font-weight: bold;\n}\n.page-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 24px;\n}\n.spinner__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  border-radius: 50%;\n  top: 41.65%;\n  left: 45%;\n}\n.spin-btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  width: 60px;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #d3a774;\n  border: 6.2px solid #d3a774;\n  box-shadow: 0 7.15653px 0 1.78913px rgba(0, 0, 0, 0.06);\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.spin-btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #d3a774;\n  border: none;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n}\nsvg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-wheel-spin-button[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0;\n  border-radius: 100%;\n  border: 2px solid white;\n}\nform[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: 1fr;\n  z-index: 1;\n  color: black;\n  min-width: 450px;\n  padding: 24px 16px;\n  min-height: 600px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 6px solid #00B3ac;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive;\n}\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 4px;\n  font-size: 14px;\n  text-align: left;\n}\n.text-danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\nhr[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #00B3ac;\n  color: white;\n  padding: 14px 5rem;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  opacity: 0.9;\n  font-weight: bold;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin: 16px auto;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin: 8px 0 0 !important;\n  display: inline-block;\n  display: block;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 6px;\n  border: 1px solid #00B3ac;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: black;\n}\nlabel[_ngcontent-%COMP%] {\n  text-align: left;\n  display: block;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n.thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n.thankyou__img[_ngcontent-%COMP%] {\n  width: 500px;\n}\n@media screen and (max-width: 1023px) {\n  .bg-image[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n\n  .thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 39%;\n    left: 45.7%;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n  }\n\n  .spin-btn-wrap[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n  }\n\n  .spin-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n\n  form[_ngcontent-%COMP%] {\n    width: 90%;\n    min-width: auto !important;\n  }\n\n  .thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    margin-bottom: 12px !important;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n\n  .quiz_box[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n}\n@media screen and (max-width: 576px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 38%;\n    left: 44.8%;\n  }\n\n  form[_ngcontent-%COMP%] {\n    width: 98%;\n    padding: 24px 4px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 36.85%;\n    left: 44%;\n  }\n}\n@media screen and (max-width: 375px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 35.85%;\n    left: 43%;\n  }\n}\n\n[_ngcontent-%COMP%]::selection {\n  color: #fff;\n  background: #09cbc6;\n}\n.info_box.activeInfo[_ngcontent-%COMP%], .quiz_box.activeQuiz[_ngcontent-%COMP%], .result_box.activeResult[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  pointer-events: auto;\n}\n.start_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  color: #fff;\n  background-color: #00b3ac;\n  padding: 15px 30px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.info_box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n.info_box[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n  border-radius: 5px 5px 0 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%] {\n  padding: 15px 50px;\n}\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 17px;\n  text-align: left;\n}\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #00b3ac;\n}\n.info_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 30px;\n  border-top: 1px solid lightgrey;\n}\n.info_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  height: 40px;\n  width: 100px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #09cbc6;\n  transition: all 0.3s ease;\n}\n.quiz_box[_ngcontent-%COMP%] {\n  width: 550px;\n  background: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 70px;\n  padding: 0 30px;\n  background: #fff;\n  border-radius: 5px 5px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.1);\n}\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  color: white;\n  background: #09cbc6;\n  border: 1px solid #09cbc6;\n  height: 45px;\n  padding: 0 8px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 145px;\n}\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .time_left_txt[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .timer_sec[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  height: 30px;\n  width: 45px;\n  color: #fff;\n  border-radius: 5px;\n  line-height: 30px;\n  text-align: center;\n  background: #00b3ac;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-left: 8px;\n}\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .time_line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  height: 3px;\n  background: #007bff;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 25px 30px 20px 30px;\n  background: #fff;\n}\nsection[_ngcontent-%COMP%]   .que_text[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  text-align: left;\n}\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  display: block;\n}\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #09cbc6;\n  border-radius: 5px;\n  padding: 8px 15px;\n  font-size: 17px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover {\n  background: #a6ebe9;\n}\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.correct[_ngcontent-%COMP%] {\n  color: #155724;\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n}\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.incorrect[_ngcontent-%COMP%] {\n  color: #721c24;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n}\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 26px;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 13px;\n  pointer-events: none;\n  transition: all 0.3s ease;\n  line-height: 24px;\n}\n.option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon.tick[_ngcontent-%COMP%] {\n  color: #23903c;\n  border-color: #23903c;\n  background: #d4edda;\n}\n.option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon.cross[_ngcontent-%COMP%] {\n  color: #a42834;\n  background: #f8d7da;\n  border-color: #a42834;\n}\nfooter[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 0 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid lightgrey;\n}\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  -webkit-user-select: none;\n          user-select: none;\n}\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0 5px;\n}\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  padding-left: 0px;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 13px;\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: #fff;\n  border-radius: 5px;\n  background: #00b3ac;\n  border: 1px solid #09cbc6;\n  line-height: 10px;\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.95);\n  transition: all 0.3s ease;\n  margin: inherit;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #09cbc6;\n}\nfooter[_ngcontent-%COMP%]   button.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n}\n.result_box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  display: flex;\n  padding: 25px 30px;\n  max-width: 450px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n.result_box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: #007bff;\n  margin-bottom: 10px;\n}\n.result_box[_ngcontent-%COMP%]   .complete_text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.result_box[_ngcontent-%COMP%]   .score_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n.result_box[_ngcontent-%COMP%]   .score_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  font-weight: 600;\n}\n.result_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px 0;\n  justify-content: center;\n}\n.result_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  height: 45px;\n  padding: 0 20px;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.buttons[_ngcontent-%COMP%]   button.restart[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #00b3ac;\n}\n.buttons[_ngcontent-%COMP%]   button.restart[_ngcontent-%COMP%]:hover {\n  background: #09cbc6;\n}\n.buttons[_ngcontent-%COMP%]   button.quit[_ngcontent-%COMP%] {\n  color: #00b3ac;\n  background: #fff;\n  border: 1px solid #09cbc6;\n}\n.buttons[_ngcontent-%COMP%]   button.quit[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #09cbc6;\n}\nlabel.option[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  align-items: center !important;\n}\nlabel.option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 8px !important;\n  margin-top: 0 !important;\n  display: inline-block !important;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  \n  -webkit-appearance: none;\n  appearance: none;\n  \n  display: inline-block;\n  width: 18px !important;\n  height: 18px !important;\n  padding: 3px !important;\n  \n  background-clip: content-box;\n  border: 1px solid #09cbc6;\n  background-color: white;\n  border-radius: 50%;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  background-color: #00b3ac;\n}\n.page__heading[_ngcontent-%COMP%] {\n  color: black;\n  margin-bottom: 16px;\n  margin-top: 20px;\n}\n.page__heading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 16px !important;\n}\n.page__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n.page__heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.height-auto[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.my-36[_ngcontent-%COMP%] {\n  margin: 36px 0;\n}\na.social-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f3f3f3;\n  margin-right: 12px;\n  text-indent: -9999px;\n  background-repeat: no-repeat;\n  background-size: 50% auto;\n  background-position: center center;\n  transition: all 0.4s ease-out;\n}\na.social-btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\na.social-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\na.social-btn.fb[_ngcontent-%COMP%] {\n  background-image: url('icon-fb.svg');\n  background-size: auto 50%;\n  background-color: #0056a4;\n}\na.social-btn.twitter[_ngcontent-%COMP%] {\n  background-image: url('icon-twitter.svg');\n  background-color: #06bfff;\n}\na.social-btn.ig[_ngcontent-%COMP%] {\n  background-image: url('ig.png');\n}\na.social-btn.youtube[_ngcontent-%COMP%] {\n  background-image: url('icon-youtube.svg');\n  background-color: #eb212e;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.ngx-wheel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, -50%);\n  z-index: 999999999;\n}\n.wheel__back__img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 337px !important;\n  height: 388px !important;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, -39%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZlY3QtbWF0Y2gyMDIyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGhpc2Vuc2VcXHNyY1xcYXBwXFxwYWdlc1xccGVyZmVjdC1tYXRjaC0yMDIyXFxwZXJmZWN0LW1hdGNoMjAyMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSwwRkFBQTtBQUVSO0VBQ0ksMERBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNGSjtBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDSEo7QURNSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSlI7QURPSTtFQUVJLGVBQUE7RUFDQSxtQkFBQTtBQ05SO0FEVUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNQSjtBRFNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBSUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1ZSO0FEZUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVEQUFBO0FDWko7QURlQTtFQUNJLGtCQUFBO0FDWko7QURlQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZEo7QURpQkE7RUFDSSxlQUFBO0FDZEo7QURrQkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNmSjtBRG1CQTtFQUNJLGFBQUE7RUFDQSx1QkFB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QkFBQTtFQUNBLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDMUdKO0FENkdBLHVDQUFBO0FBQ0E7RUFDSSx5QkFBQTtBQzFHSjtBRDZHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDMUdKO0FENEdJO0VBQ0ksOEJBQUE7QUMxR1I7QUQ2R0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUMzR1I7QUQ4R0k7RUFDSSxlQUFBO0FDNUdSO0FEZ0hBO0VBQ0ksdUJBQUE7QUM3R0o7QURnSEE7RUFDSSxjQUFBO0FDN0dKO0FEZ0hBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUtBLDZCQUFBO0FDN0dKO0FEZ0hBO0VBQ0ksZUFBQTtBQzdHSjtBRGdIQTtFQUNJLHNCQUFBO0FDN0dKO0FEZ0hBO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDN0dKO0FEZ0hBO0VBQ0kseUNBQUE7RUFDQSx5QkFBQTtBQzdHSjtBRGdIQTtFQUNJLCtCQUFBO0FDN0dKO0FEaUhBO0VBQ0kseUNBQUE7RUFDQSx5QkFBQTtBQzlHSjtBRGlIQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUM5R0o7QURpSEE7RUFNSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDbkhKO0FEdUhBO0VBR0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ3RISiIsImZpbGUiOiJwZXJmZWN0LW1hdGNoMjAyMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANzAwJmZhbWlseT1EeW5hUHVmZjp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUR5bmFQdWZmOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5iZy1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1NwaW4tVGhlLVdoZWVsLVdlYnNpdGUtQmFubmVyLmpwZyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gICAgZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW46IDI0cHggYXV0bztcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1NHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gd2lkdGg6IDM3cHg7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZm9vdGJhbGwuc3ZnKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdG9wOiA0MS42NSU7XHJcbiAgICAgICAgbGVmdDogNDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnNwaW4tYnRuLXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2QzYTc3NDtcclxuICAgIGJvcmRlcjogNi4ycHggc29saWQgI2QzYTc3NDtcclxuICAgIGJveC1zaGFkb3c6IDAgNy4xNTY1M3B4IDAgMS43ODkxM3B4IHJnYigwIDAgMCAvIDYlKTtcclxufVxyXG5cclxuLmFic29sdXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnNwaW4tYnRuIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgLy8gei1pbmRleDogMjA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNDIsIDI0NiwgMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNhNzc0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5zcGlubmVyLXdoZWVsLXNwaW4tYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcblxyXG5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMDBCM2FjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjUlKSAwcHggNTRweCA1NXB4LCByZ2IoMCAwIDAgLyAxMiUpIDBweCAtMTJweCAzMHB4LCByZ2IoMCAwIDAgLyAxMiUpIDBweCA0cHggNnB4LCByZ2IoMCAwIDAgLyAxNyUpIDBweCAxMnB4IDEzcHgsIHJnYigwIDAgMCAvIDklKSAwcHggLTNweCA1cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xyXG4gICAgLy8gLmZvcm1fX2JsdXIge1xyXG4gICAgLy8gICAgIGZpbHRlcjogYmx1cigxcHgpO1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgICAgdG9wOiAwO1xyXG4gICAgLy8gICAgIGxlZnQ6IDA7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgKiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmNvbnRhaW5lcntcclxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgei1pbmRleDogMjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBoMixcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCM2FjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCA1cmVtO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIG1hcmdpbjogMTZweCBhdXRvO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwIDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQjNhYztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuLy8gaW5wdXQ6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogM3B4IHNvbGlkICMwMEIzYWM7XHJcbi8vICAgICAvLyBvdXRsaW5lOiAzcHggc29saWQgI0MxNkUyNTtcclxuLy8gfVxyXG5cclxubGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGFuaW1hdGlvbjogcm90YXRpb24gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGhha3lvdV9fc3RlcCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlX19oZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGhhbmt5b3VfX2ltZyB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgLmJnLWltYWdlIHtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoYWt5b3VfX3N0ZXAge1xyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAudGhhbmt5b3VfX2ltZ3tcclxuICAgIC8vICAgICB3aWR0aDogNjAlO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNwaW5uZXJfX3dyYXBwZXIge1xyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgdG9wOiAzOSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ1LjclO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW4tYnRuLXdyYXAge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbi1idG4ge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC50aGFreW91X19zdGVwIHtcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWdlX19oZWFkaW5nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgICAgICAgICoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAucXVpel9ib3gge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLnRoYW5reW91X19pbWd7XHJcbiAgICAvLyAgICAgd2lkdGg6IDgwJTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5zcGlubmVyX193cmFwcGVyIHtcclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHRvcDogMzglO1xyXG4gICAgICAgICAgICBsZWZ0OiA0NC44JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4IDRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIC5zcGlubmVyX193cmFwcGVyIHtcclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHRvcDogMzYuODUlO1xyXG4gICAgICAgICAgICBsZWZ0OiA0NCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgLnNwaW5uZXJfX3dyYXBwZXIge1xyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgdG9wOiAzNS44NSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQzJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHF1aXogY3NzXHJcbi8qIGltcG9ydGluZyBnb29nbGUgZm9udHMgKi9cclxuOjpzZWxlY3Rpb24ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xyXG59XHJcblxyXG4vLyAuc3RhcnRfYnRuLFxyXG4vLyAuaW5mb19ib3gsXHJcbi8vIC5xdWl6X2JveCxcclxuLy8gLnJlc3VsdF9ib3gge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiA1MCU7XHJcbi8vICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuLy8gICAgICAgICAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuLy8gfVxyXG5cclxuLmluZm9fYm94LmFjdGl2ZUluZm8sXHJcbi5xdWl6X2JveC5hY3RpdmVRdWl6LFxyXG4ucmVzdWx0X2JveC5hY3RpdmVSZXN1bHQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8vIHotaW5kZXg6IDU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5zdGFydF9idG4gYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIzYWM7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW5mb19ib3gge1xyXG4gICAgLy8gd2lkdGg6IDU0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmluZm9fYm94IC5pbmZvLXRpdGxlIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmluZm8tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvX2JveCAuaW5mby1saXN0IC5pbmZvIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmluZm8tbGlzdCAuaW5mbyBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwYjNhYztcclxufVxyXG5cclxuLmluZm9fYm94IC5idXR0b25zIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5pbmZvX2JveCAuYnV0dG9ucyBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5xdWl6X2JveCB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucXVpel9ib3ggaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5xdWl6X2JveCBoZWFkZXIgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5xdWl6X2JveCBoZWFkZXIgLnRpbWVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwOWNiYzY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxNDVweDtcclxufVxyXG5cclxuLnF1aXpfYm94IGhlYWRlciAudGltZXIgLnRpbWVfbGVmdF90eHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnF1aXpfYm94IGhlYWRlciAudGltZXIgLnRpbWVyX3NlYyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzAwYjNhYztcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDA7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5xdWl6X2JveCBoZWFkZXIgLnRpbWVfbGluZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHggMjBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuc2VjdGlvbiAucXVlX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24gLm9wdGlvbl9saXN0IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uOmhvdmVyIHtcclxuICAgIC8vIGNvbG9yOiAjMDA0MDg1O1xyXG4gICAgYmFja2dyb3VuZDogI2E2ZWJlOTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNiOGRhZmY7XHJcbn1cclxuXHJcbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24uY29ycmVjdCB7XHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgIGJhY2tncm91bmQ6ICNkNGVkZGE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xyXG59XHJcblxyXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uLmluY29ycmVjdCB7XHJcbiAgICBjb2xvcjogIzcyMWMyNDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xyXG59XHJcblxyXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uIC5pY29uIHtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm9wdGlvbl9saXN0IC5vcHRpb24gLmljb24udGljayB7XHJcbiAgICBjb2xvcjogIzIzOTAzYztcclxuICAgIGJvcmRlci1jb2xvcjogIzIzOTAzYztcclxuICAgIGJhY2tncm91bmQ6ICNkNGVkZGE7XHJcbn1cclxuXHJcbi5vcHRpb25fbGlzdCAub3B0aW9uIC5pY29uLmNyb3NzIHtcclxuICAgIGNvbG9yOiAjYTQyODM0O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcclxuICAgIGJvcmRlci1jb2xvcjogI2E0MjgzNDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxufVxyXG5cclxuZm9vdGVyIC50b3RhbF9xdWUgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmZvb3RlciAudG90YWxfcXVlIHNwYW4gcCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbn1cclxuXHJcbmZvb3RlciAudG90YWxfcXVlIHNwYW4gcDpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuZm9vdGVyIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwYjNhYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgbWFyZ2luOiBpbmhlcml0O1xyXG59XHJcblxyXG5mb290ZXIgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwOWNiYzY7XHJcbn1cclxuXHJcbmZvb3RlciBidXR0b24uc2hvdyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4ucmVzdWx0X2JveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDI1cHggMzBweDtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucmVzdWx0X2JveCAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmVzdWx0X2JveCAuY29tcGxldGVfdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucmVzdWx0X2JveCAuc2NvcmVfdGV4dCBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yZXN1bHRfYm94IC5zY29yZV90ZXh0IHNwYW4gcCB7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5yZXN1bHRfYm94IC5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzdWx0X2JveCAuYnV0dG9ucyBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYnV0dG9ucyBidXR0b24ucmVzdGFydCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwMGIzYWM7XHJcbn1cclxuXHJcbi5idXR0b25zIGJ1dHRvbi5yZXN0YXJ0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwOWNiYzY7XHJcbn1cclxuXHJcbi5idXR0b25zIGJ1dHRvbi5xdWl0IHtcclxuICAgIGNvbG9yOiAjMDBiM2FjO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XHJcbn1cclxuXHJcbi5idXR0b25zIGJ1dHRvbi5xdWl0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzA5Y2JjNjtcclxufVxyXG5cclxubGFiZWwub3B0aW9uIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIC8qIHJlbW92ZSBzdGFuZGFyZCBiYWNrZ3JvdW5kIGFwcGVhcmFuY2UgKi9cclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAvKiBjcmVhdGUgY3VzdG9tIHJhZGlvYnV0dG9uIGFwcGVhcmFuY2UgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvciBvbmx5IGZvciBjb250ZW50ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiBhcHBlYXJhbmNlIGZvciBjaGVja2VkIHJhZGlvYnV0dG9uICovXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIzYWM7XHJcbn1cclxuXHJcbi5wYWdlX19oZWFkaW5nIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICoge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWlnaHQtYXV0byB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LTM2IHtcclxuICAgIG1hcmdpbjogMzZweCAwO1xyXG59XHJcblxyXG5hLnNvY2lhbC1idG4ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbmEuc29jaWFsLWJ0bjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuYS5zb2NpYWwtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbmEuc29jaWFsLWJ0bi5mYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi1mYi5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZhNDtcclxufVxyXG5cclxuYS5zb2NpYWwtYnRuLnR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24tdHdpdHRlci5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiZmZmO1xyXG59XHJcblxyXG5hLnNvY2lhbC1idG4uaWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2lnLnBuZ1wiKTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmEuc29jaWFsLWJ0bi55b3V0dWJlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uLXlvdXR1YmUuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViMjEyZTtcclxufVxyXG5cclxuLnJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmd4LXdoZWVsIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogMDtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbiAgICAvLyB6LWluZGV4OiA5OTk5OTk5OTk7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTI4cHgpO1xyXG59XHJcblxyXG4ud2hlZWxfX2JhY2tfX2ltZyB7XHJcbiAgICAvLyB3aWR0aDogNDI1cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDQ4OHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMzN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM4OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0zOSUpO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUR5bmFQdWZmOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG4uYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1NwaW4tVGhlLVdoZWVsLVdlYnNpdGUtQmFubmVyLmpwZyk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4MHB4O1xuICBmaWx0ZXI6IGJsdXIoMXB4KTtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdlLXdyYXBwZXIgaDEge1xuICBmb250LXNpemU6IDU0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhZ2Utd3JhcHBlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnNwaW5uZXJfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zcGlubmVyX193cmFwcGVyIC5pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiA0MS42NSU7XG4gIGxlZnQ6IDQ1JTtcbn1cblxuLnNwaW4tYnRuLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNkM2E3NzQ7XG4gIGJvcmRlcjogNi4ycHggc29saWQgI2QzYTc3NDtcbiAgYm94LXNoYWRvdzogMCA3LjE1NjUzcHggMCAxLjc4OTEzcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3Bpbi1idG4ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNhNzc0O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNwaW5uZXItd2hlZWwtc3Bpbi1idXR0b24ge1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogYmxhY2s7XG4gIG1pbi13aWR0aDogNDUwcHg7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYm9yZGVyOiA2cHggc29saWQgIzAwQjNhYztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xufVxuZm9ybSAqIHtcbiAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcbn1cbmZvcm0gaDIsXG5mb3JtIHAge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuZm9ybSBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuZm9ybSBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50ZXh0LWRhbmdlciBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCM2FjO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggNXJlbTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbjogMTZweCBhdXRvO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDhweCAwIDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEIzYWM7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2FkZXIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjRkZGO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi50aGFreW91X19zdGVwIGZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xufVxuLnRoYWt5b3VfX3N0ZXAgLnBhZ2VfX2hlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuXG4udGhhbmt5b3VfX2ltZyB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5iZy1pbWFnZSB7XG4gICAgdG9wOiA2MHB4O1xuICB9XG5cbiAgLnRoYWt5b3VfX3N0ZXAgZm9ybSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNwaW5uZXJfX3dyYXBwZXIgLmljb24ge1xuICAgIHRvcDogMzklO1xuICAgIGxlZnQ6IDQ1LjclO1xuICB9XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNwaW4tYnRuLXdyYXAge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuXG4gIC5zcGluLWJ0biB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC50aGFreW91X19zdGVwIGZvcm0ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLnRoYWt5b3VfX3N0ZXAgLnBhZ2VfX2hlYWRpbmcge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLnRoYWt5b3VfX3N0ZXAgLnBhZ2VfX2hlYWRpbmcgKiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xuICB9XG4gIC50aGFreW91X19zdGVwIC5wYWdlX19oZWFkaW5nIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnRoYWt5b3VfX3N0ZXAgLnBhZ2VfX2hlYWRpbmcgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAudGhha3lvdV9fc3RlcCAucGFnZV9faGVhZGluZyBwIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5xdWl6X2JveCB7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNwaW5uZXJfX3dyYXBwZXIgLmljb24ge1xuICAgIHRvcDogMzglO1xuICAgIGxlZnQ6IDQ0LjglO1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBwYWRkaW5nOiAyNHB4IDRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNwaW5uZXJfX3dyYXBwZXIgLmljb24ge1xuICAgIHRvcDogMzYuODUlO1xuICAgIGxlZnQ6IDQ0JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnNwaW5uZXJfX3dyYXBwZXIgLmljb24ge1xuICAgIHRvcDogMzUuODUlO1xuICAgIGxlZnQ6IDQzJTtcbiAgfVxufVxuLyogaW1wb3J0aW5nIGdvb2dsZSBmb250cyAqL1xuOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzA5Y2JjNjtcbn1cblxuLmluZm9fYm94LmFjdGl2ZUluZm8sXG4ucXVpel9ib3guYWN0aXZlUXVpeixcbi5yZXN1bHRfYm94LmFjdGl2ZVJlc3VsdCB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnN0YXJ0X2J0biBidXR0b24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2FjO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbmZvX2JveCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5pbmZvX2JveCAuaW5mby10aXRsZSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmluZm9fYm94IC5pbmZvLWxpc3Qge1xuICBwYWRkaW5nOiAxNXB4IDUwcHg7XG59XG5cbi5pbmZvX2JveCAuaW5mby1saXN0IC5pbmZvIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW5mb19ib3ggLmluZm8tbGlzdCAuaW5mbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMGIzYWM7XG59XG5cbi5pbmZvX2JveCAuYnV0dG9ucyB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xufVxuXG4uaW5mb19ib3ggLmJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnF1aXpfYm94IHtcbiAgd2lkdGg6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ucXVpel9ib3ggaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnF1aXpfYm94IGhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5xdWl6X2JveCBoZWFkZXIgLnRpbWVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDE0NXB4O1xufVxuXG4ucXVpel9ib3ggaGVhZGVyIC50aW1lciAudGltZV9sZWZ0X3R4dCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5xdWl6X2JveCBoZWFkZXIgLnRpbWVyIC50aW1lcl9zZWMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMGIzYWM7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4ucXVpel9ib3ggaGVhZGVyIC50aW1lX2xpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogMjVweCAzMHB4IDIwcHggMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuc2VjdGlvbiAucXVlX3RleHQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnNlY3Rpb24gLm9wdGlvbl9saXN0IHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNhNmViZTk7XG59XG5cbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24uY29ycmVjdCB7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xufVxuXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uLmluY29ycmVjdCB7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xufVxuXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24gLmljb24ge1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ub3B0aW9uX2xpc3QgLm9wdGlvbiAuaWNvbi50aWNrIHtcbiAgY29sb3I6ICMyMzkwM2M7XG4gIGJvcmRlci1jb2xvcjogIzIzOTAzYztcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbn1cblxuLm9wdGlvbl9saXN0IC5vcHRpb24gLmljb24uY3Jvc3Mge1xuICBjb2xvcjogI2E0MjgzNDtcbiAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcbiAgYm9yZGVyLWNvbG9yOiAjYTQyODM0O1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xufVxuXG5mb290ZXIgLnRvdGFsX3F1ZSBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmZvb3RlciAudG90YWxfcXVlIHNwYW4gcCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG5mb290ZXIgLnRvdGFsX3F1ZSBzcGFuIHA6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuZm9vdGVyIGJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAxM3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBiM2FjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG1hcmdpbjogaW5oZXJpdDtcbn1cblxuZm9vdGVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwOWNiYzY7XG59XG5cbmZvb3RlciBidXR0b24uc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucmVzdWx0X2JveCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjVweCAzMHB4O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5yZXN1bHRfYm94IC5pY29uIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5yZXN1bHRfYm94IC5jb21wbGV0ZV90ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmVzdWx0X2JveCAuc2NvcmVfdGV4dCBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJlc3VsdF9ib3ggLnNjb3JlX3RleHQgc3BhbiBwIHtcbiAgcGFkZGluZzogMCA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yZXN1bHRfYm94IC5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVzdWx0X2JveCAuYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uLnJlc3RhcnQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwYjNhYztcbn1cblxuLmJ1dHRvbnMgYnV0dG9uLnJlc3RhcnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xufVxuXG4uYnV0dG9ucyBidXR0b24ucXVpdCB7XG4gIGNvbG9yOiAjMDBiM2FjO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xufVxuXG4uYnV0dG9ucyBidXR0b24ucXVpdDpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xufVxuXG5sYWJlbC5vcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxubGFiZWwub3B0aW9uIGlucHV0IHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgLyogcmVtb3ZlIHN0YW5kYXJkIGJhY2tncm91bmQgYXBwZWFyYW5jZSAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogY3JlYXRlIGN1c3RvbSByYWRpb2J1dHRvbiBhcHBlYXJhbmNlICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yIG9ubHkgZm9yIGNvbnRlbnQgKi9cbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogYXBwZWFyYW5jZSBmb3IgY2hlY2tlZCByYWRpb2J1dHRvbiAqL1xuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIzYWM7XG59XG5cbi5wYWdlX19oZWFkaW5nIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBhZ2VfX2hlYWRpbmcgKiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cbi5wYWdlX19oZWFkaW5nIGgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYWdlX19oZWFkaW5nIGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVpZ2h0LWF1dG8ge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm15LTM2IHtcbiAgbWFyZ2luOiAzNnB4IDA7XG59XG5cbmEuc29jaWFsLWJ0biB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB0ZXh0LWluZGVudDogLTk5OTlweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG59XG5cbmEuc29jaWFsLWJ0bjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG5hLnNvY2lhbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG5hLnNvY2lhbC1idG4uZmIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi1mYi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YTQ7XG59XG5cbmEuc29jaWFsLWJ0bi50d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24tdHdpdHRlci5zdmdcIik7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmJmZmY7XG59XG5cbmEuc29jaWFsLWJ0bi5pZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pZy5wbmdcIik7XG59XG5cbmEuc29jaWFsLWJ0bi55b3V0dWJlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24teW91dHViZS5zdmdcIik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjIxMmU7XG59XG5cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5neC13aGVlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTtcbn1cblxuLndoZWVsX19iYWNrX19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMzdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM4OHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzklKTtcbn0iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfect-match-2022_perfect-match-2022_module_ts.js.map