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

const _c1 = function (a0) {
  return {
    "step__3": a0
  };
};

function PerfectMatch2022Component_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 8);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, ctx_r0.currentStep == 3));
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

const _c2 = function (a0) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c2, ctx_r25.showQuestions));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c2, ctx_r26.showQuestions));
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

const _c3 = function (a0) {
  return {
    "activeInfo": a0
  };
};

const _c4 = function (a0) {
  return {
    "activeQuiz": a0
  };
};

const _c5 = function (a0) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c3, ctx_r3.showRules));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c4, ctx_r3.showQuestions));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c5, ctx_r3.showQuizResults));
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

function PerfectMatch2022Component_ng_container_6_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-wheel", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSpinStart", function PerfectMatch2022Component_ng_container_6_ng_container_1_ng_container_5_Template_ngx_wheel_onSpinStart_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r48.before();
    })("onSpinComplete", function PerfectMatch2022Component_ng_container_6_ng_container_1_ng_container_5_Template_ngx_wheel_onSpinComplete_1_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", ctx_r46.width)("height", ctx_r46.height)("spinDuration", 8)("items", ctx_r46.items)("innerRadius", ctx_r46.innerRadius)("spinAmount", 10)("textOrientation", ctx_r46.textOrientation)("textAlignment", ctx_r46.textAlignment)("pointerFillColor", "#d3a774")("idToLandOn", ctx_r46.idToLandOn)("disableSpinOnClick", true);
  }
}

function PerfectMatch2022Component_ng_container_6_ng_container_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 26);
  }
}

function PerfectMatch2022Component_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 59)(2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 61)(4, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PerfectMatch2022Component_ng_container_6_ng_container_1_ng_container_5_Template, 2, 11, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 63)(7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_6_ng_container_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r51.spin();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Spin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PerfectMatch2022Component_ng_container_6_ng_container_1_span_10_Template, 1, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r45.width && ctx_r45.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r45.isSpinning);
  }
}

function PerfectMatch2022Component_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_6_ng_container_1_Template, 11, 2, "ng-container", 4);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66)(4, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
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

const _c6 = function (a0, a1, a2) {
  return {
    "is-loading": a0,
    "height-auto thakyou__step": a1,
    "step__3": a2
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
    this.textFontSize = "18";
    this.alive = true;
    this.innerRadius = 25;
    this.signupForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[A-Za-z ]+$/)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[0-9]*$/)]],
      zipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]] // terms: ['', [Validators.required]]

    });
    this.seed = ['Umbrella', 'Football', 'Water Bottle', 'Cap', 'Washing Machine', 'TV', 'FIFA 2022 Ticket', 'Better luck next time'];
    this.items = [];
    this.textOrientation = ngx_wheel__WEBPACK_IMPORTED_MODULE_5__.TextOrientation.HORIZONTAL;
    this.textAlignment = ngx_wheel__WEBPACK_IMPORTED_MODULE_5__.TextAlignment.INNER;
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
    this.title.setTitle("Perfect match contest! | Hisense India");
    this.meta.updateTag({
      name: 'description',
      content: "Participate in Hisense India Perfect Match contest and get a chance to win daily goodies and lucky draw!"
    });
    this.meta.updateTag({
      property: "og:description",
      content: "Participate in Hisense India Perfect Match contest and get a chance to win daily goodies and lucky draw!"
    });
    this.meta.updateTag({
      property: "og:image",
      content: "https://api.hisense-india.com/media/pages/home/slider/desktop-image-1664126417-347.jpeg"
    });
    this.meta.updateTag({
      property: "og:site_name",
      content: "Hisense India"
    });
    this.meta.updateTag({
      property: "og:title",
      content: "Perfect match contest! | Hisense India"
    });
    this.meta.updateTag({
      property: "og:url",
      content: "https://hisense-demo.bloginguru.com/perfect-match-2022/17bd66f2-3cfb-11ed-bbf7-02757926c1f2"
    });

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformId)) {
      // if (window.innerWidth <= 375) {
      //   this.height = 300;
      //   this.width = 300;
      //   this.textFontSize = "10";
      // } else if (window.innerWidth <= 450) {
      //   this.height = 340;
      //   this.width = 340;
      // } else if (window.innerWidth <= 576) {
      //   this.height = 375;
      //   this.width = 375;
      //   this.textFontSize = "11";
      // } else 
      if (window.innerWidth <= 768) {
        this.textFontSize = "12";
        this.height = 350;
        this.width = 350;
        this.innerRadius = 20;
      } else {
        this.height = 500;
        this.width = 500;
      }
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

    this.isSpinning = false; // setTimeout(() => {
    //   alert(`Congratulations you are eligible for ${this.seed[this.idToLandOn]}`);
    // }, 750)
    // setTimeout(() => {

    this.wheel.reset();
    this.currentStep = 4;
    this.router.navigate(['/perfect-match-2022', this.thankYouUUID]); // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    // }, 1000);
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
  vars: 11,
  consts: [["class", "bg-image", 3, "ngClass", 4, "ngIf"], [1, "page-wrapper", "card", 3, "ngClass"], ["src", "assets/Spin-The-Wheel-Website-Banner.jpg", 2, "display", "none", 3, "load"], ["class", "page__heading", 4, "ngIf"], [4, "ngIf"], ["id", "myAudio"], ["myaudio", ""], ["src", "../../../assets/audio/mixkit-fantasy-game-success-notification-270.wav", "type", "audio/ogg"], [1, "bg-image", 3, "ngClass"], [1, "page__heading"], [3, "formGroup"], [1, "form__blur"], [1, "container"], ["for", "name"], [1, "text-danger"], ["type", "text", "placeholder", "Enter Name", "name", "name", "id", "name", "formControlName", "name"], ["class", "text-danger", 4, "ngIf"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "name", "email", "id", "email", "formControlName", "email"], ["for", "phone"], ["type", "text", "placeholder", "Enter Phone Number", "name", "phone", "formControlName", "phone"], ["for", "pincode"], ["type", "text", "placeholder", "Enter Pincode", "name", "pincode", "id", "pincode", "formControlName", "zipcode"], [1, "clearfix"], ["type", "button", 1, "submit__btn", 3, "click"], ["class", "loader", 4, "ngIf"], [1, "loader"], [1, "info_box", 3, "ngClass"], [1, "info-title"], [1, "info-list"], [1, "info"], [1, "buttons", 2, "justify-content", "center"], [1, "start_btn", 2, "white-space", "nowrap", 3, "click"], [1, "quiz_box", 3, "ngClass"], [1, "title"], [1, "timer"], [1, "time_left_txt"], [1, "timer_sec"], [1, "time_line"], [1, "que_text"], [1, "option_list"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "total_que"], ["class", "next_btn", 3, "ngClass", "click", 4, "ngIf"], [1, "result_box", 3, "ngClass"], [1, "icon"], ["width", "48", "height", "48", "src", "assets/warning.svg", "alt", "warning", 4, "ngIf"], ["width", "48", "height", "48", "src", "assets/crown.svg", "alt", "warning", 4, "ngIf"], [1, "complete_text"], [1, "score_text"], [1, "buttons"], [1, "quit", 3, "click"], ["class", "restart", 3, "click", 4, "ngIf"], [1, "option"], ["type", "radio", "name", "option", 3, "value", "ngModel", "ngModelChange"], [1, "next_btn", 3, "ngClass", "click"], ["width", "48", "height", "48", "src", "assets/warning.svg", "alt", "warning"], ["width", "48", "height", "48", "src", "assets/crown.svg", "alt", "warning"], [1, "restart", 3, "click"], [1, "spinner__wrapper"], [1, "relative"], ["src", "assets/wheel_back.png", "width", "434", "height", "434", 1, "wheel__back__img"], ["src", "assets/football.jpeg", "width", "30", "height", "30", 1, "wheel__back__football__img"], [1, "clearfix", 2, "margin-top", "auto"], ["Roulette", "", "pointerStrokeColor", "white", 1, "ngx-wheel", 3, "width", "height", "spinDuration", "items", "innerRadius", "spinAmount", "textOrientation", "textAlignment", "pointerFillColor", "idToLandOn", "disableSpinOnClick", "onSpinStart", "onSpinComplete"], [1, "thankyou__img", 3, "src"], [2, "display", "flex", "gap", "12px", "padding", "0 15px 10px", "justify-content", "center"], ["target", "_blank", 1, "social-btn", "fb", 2, "min-height", "auto", 3, "href"], ["target", "_blank", 1, "social-btn", "twitter", 2, "min-height", "auto", 3, "href"], [1, "social-btn", "ig", 2, "min-height", "auto"]],
  template: function PerfectMatch2022Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PerfectMatch2022Component_div_0_Template, 1, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function PerfectMatch2022Component_Template_img_load_2_listener() {
        return ctx.imageLoaded();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PerfectMatch2022Component_div_3_Template, 6, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PerfectMatch2022Component_ng_container_4_Template, 46, 6, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PerfectMatch2022Component_ng_container_5_Template, 55, 22, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PerfectMatch2022Component_ng_container_6_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PerfectMatch2022Component_ng_container_7_Template, 9, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "audio", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "source", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Your browser does not support the audio element.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep != 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](7, _c6, ctx.imageLoading, ctx.currentStep == 4, ctx.currentStep == 3));
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
  styles: [".bg-image[_ngcontent-%COMP%] {\n  background-image: url('Spin-The-Wheel-Website-Banner.jpg');\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  position: absolute;\n  top: 80px;\n  filter: blur(1px);\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  flex-direction: column;\n  text-align: center;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 54px;\n  margin-bottom: 24px;\n  font-weight: bold;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 24px;\n}\n\n.spinner__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  border-radius: 50%;\n  top: 41.65%;\n  left: 45%;\n}\n\n.spin-btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  width: 60px;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #d3a774;\n  border: 6.2px solid #d3a774;\n  box-shadow: 0 7.15653px 0 1.78913px rgba(0, 0, 0, 0.06);\n}\n\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.spin-btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #d3a774;\n  border: none;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n}\n\nsvg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.spinner-wheel-spin-button[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0;\n  border-radius: 100%;\n  border: 2px solid white;\n}\n\nform[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: 1fr;\n  z-index: 1;\n  color: black;\n  min-width: 450px;\n  padding: 24px 16px;\n  min-height: 600px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 6px solid #00B3ac;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 4px;\n  font-size: 14px;\n  text-align: left;\n}\n\n.text-danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #00B3ac;\n  color: white;\n  padding: 14px 5rem;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  opacity: 0.9;\n  font-weight: bold;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin: 16px auto;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin: 8px 0 0 !important;\n  display: inline-block;\n  display: block;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 6px;\n  border: 1px solid #00B3ac;\n  outline: none;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: black;\n}\n\nlabel[_ngcontent-%COMP%] {\n  text-align: left;\n  display: block;\n}\n\n.loader[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n}\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n\n.thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n\n.thankyou__img[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n@media screen and (max-width: 1023px) {\n  .bg-image[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n\n  .thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 39%;\n    left: 45.7%;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n  }\n\n  .spin-btn-wrap[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n  }\n\n  .spin-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n\n  form[_ngcontent-%COMP%] {\n    width: 90%;\n    min-width: auto !important;\n  }\n\n  .thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    margin-bottom: 12px !important;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n\n  .quiz_box[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 38%;\n    left: 44.8%;\n  }\n\n  form[_ngcontent-%COMP%] {\n    width: 98%;\n    padding: 24px 4px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 36.85%;\n    left: 44%;\n  }\n}\n\n@media screen and (max-width: 375px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 35.85%;\n    left: 43%;\n  }\n}\n\n\n\n[_ngcontent-%COMP%]::selection {\n  color: #fff;\n  background: #09cbc6;\n}\n\n.info_box.activeInfo[_ngcontent-%COMP%], .quiz_box.activeQuiz[_ngcontent-%COMP%], .result_box.activeResult[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  pointer-events: auto;\n}\n\n.start_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  color: #fff;\n  background-color: #00b3ac;\n  padding: 15px 30px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.info_box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n\n.info_box[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n  border-radius: 5px 5px 0 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%] {\n  padding: 15px 50px;\n}\n\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 17px;\n  text-align: left;\n}\n\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #00b3ac;\n}\n\n.info_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 30px;\n  border-top: 1px solid lightgrey;\n}\n\n.info_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  height: 40px;\n  width: 100px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #09cbc6;\n  transition: all 0.3s ease;\n}\n\n.quiz_box[_ngcontent-%COMP%] {\n  width: 550px;\n  background: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 70px;\n  padding: 0 30px;\n  background: #fff;\n  border-radius: 5px 5px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.1);\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  color: white;\n  background: #09cbc6;\n  border: 1px solid #09cbc6;\n  height: 45px;\n  padding: 0 8px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 145px;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .time_left_txt[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .timer_sec[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  height: 30px;\n  width: 45px;\n  color: #fff;\n  border-radius: 5px;\n  line-height: 30px;\n  text-align: center;\n  background: #00b3ac;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-left: 8px;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .time_line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  height: 3px;\n  background: #007bff;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 25px 30px 20px 30px;\n  background: #fff;\n}\n\nsection[_ngcontent-%COMP%]   .que_text[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  text-align: left;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  display: block;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #09cbc6;\n  border-radius: 5px;\n  padding: 8px 15px;\n  font-size: 17px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover {\n  background: #a6ebe9;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.correct[_ngcontent-%COMP%] {\n  color: #155724;\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.incorrect[_ngcontent-%COMP%] {\n  color: #721c24;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 26px;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 13px;\n  pointer-events: none;\n  transition: all 0.3s ease;\n  line-height: 24px;\n}\n\n.option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon.tick[_ngcontent-%COMP%] {\n  color: #23903c;\n  border-color: #23903c;\n  background: #d4edda;\n}\n\n.option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon.cross[_ngcontent-%COMP%] {\n  color: #a42834;\n  background: #f8d7da;\n  border-color: #a42834;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 0 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid lightgrey;\n}\n\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0 5px;\n}\n\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  padding-left: 0px;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 13px;\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: #fff;\n  border-radius: 5px;\n  background: #00b3ac;\n  border: 1px solid #09cbc6;\n  line-height: 10px;\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.95);\n  transition: all 0.3s ease;\n  margin: inherit;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #09cbc6;\n}\n\nfooter[_ngcontent-%COMP%]   button.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n}\n\n.result_box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  display: flex;\n  padding: 25px 30px;\n  max-width: 450px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n\n.result_box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: #007bff;\n  margin-bottom: 10px;\n}\n\n.result_box[_ngcontent-%COMP%]   .complete_text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.result_box[_ngcontent-%COMP%]   .score_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.result_box[_ngcontent-%COMP%]   .score_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  font-weight: 600;\n}\n\n.result_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px 0;\n  justify-content: center;\n}\n\n.result_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  height: 45px;\n  padding: 0 20px;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n\n.buttons[_ngcontent-%COMP%]   button.restart[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #00b3ac;\n}\n\n.buttons[_ngcontent-%COMP%]   button.restart[_ngcontent-%COMP%]:hover {\n  background: #09cbc6;\n}\n\n.buttons[_ngcontent-%COMP%]   button.quit[_ngcontent-%COMP%] {\n  color: #00b3ac;\n  background: #fff;\n  border: 1px solid #09cbc6;\n}\n\n.buttons[_ngcontent-%COMP%]   button.quit[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #09cbc6;\n}\n\nlabel.option[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  align-items: center !important;\n}\n\nlabel.option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 8px !important;\n  margin-top: 0 !important;\n  display: inline-block !important;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  \n  -webkit-appearance: none;\n  appearance: none;\n  \n  display: inline-block;\n  width: 18px !important;\n  height: 18px !important;\n  padding: 3px !important;\n  \n  background-clip: content-box;\n  border: 1px solid #09cbc6;\n  background-color: white;\n  border-radius: 50%;\n}\n\n\n\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  background-color: #00b3ac;\n}\n\n.page__heading[_ngcontent-%COMP%] {\n  color: black;\n  margin-bottom: 16px;\n  margin-top: 20px;\n}\n\n.page__heading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 16px !important;\n}\n\n.page__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.page__heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n\n.my-36[_ngcontent-%COMP%] {\n  margin: 36px 0;\n}\n\na.social-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f3f3f3;\n  margin-right: 12px;\n  text-indent: -9999px;\n  background-repeat: no-repeat;\n  background-size: 50% auto;\n  background-position: center center;\n  transition: all 0.4s ease-out;\n}\n\na.social-btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\na.social-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\na.social-btn.fb[_ngcontent-%COMP%] {\n  background-image: url('icon-fb.svg');\n  background-size: auto 50%;\n  background-color: #0056a4;\n}\n\na.social-btn.twitter[_ngcontent-%COMP%] {\n  background-image: url('icon-twitter.svg');\n  background-color: #06bfff;\n}\n\na.social-btn.ig[_ngcontent-%COMP%] {\n  background-image: url('ig.png');\n}\n\na.social-btn.youtube[_ngcontent-%COMP%] {\n  background-image: url('icon-youtube.svg');\n  background-color: #eb212e;\n}\n\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.ngx-wheel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, -50%);\n  z-index: 999999999;\n}\n\n.wheel__back__img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 337px !important;\n  height: 388px !important;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, -39%);\n}\n\n.wheel__back__football__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 95%;\n  width: 55px;\n  z-index: 9999999999;\n  border-radius: 50%;\n  height: 55px;\n  left: 44%;\n}\n\nform.spinner__wrapper[_ngcontent-%COMP%] {\n  max-width: 450px !important;\n}\n\n@media screen and (min-width: 768px) {\n  .ngx-wheel[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    left: 50%;\n    top: 80%;\n    transform: translate(-50%, -49%);\n    z-index: 999999999;\n  }\n\n  .wheel__back__img[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 496px !important;\n    height: 570px !important;\n    left: 50%;\n    top: 80%;\n    transform: translate(-50%, -39%);\n  }\n\n  form.spinner__wrapper[_ngcontent-%COMP%] {\n    min-width: 600px !important;\n    margin: 20px 0;\n    min-height: 750px;\n  }\n\n  .step__3[_ngcontent-%COMP%] {\n    height: 120%;\n  }\n\n  .wheel__back__football__img[_ngcontent-%COMP%] {\n    top: 78%;\n    left: 45%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZlY3QtbWF0Y2gyMDIyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGhpc2Vuc2VcXHNyY1xcYXBwXFxwYWdlc1xccGVyZmVjdC1tYXRjaC0yMDIyXFxwZXJmZWN0LW1hdGNoMjAyMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTFI7O0FEUUk7RUFFSSxlQUFBO0VBQ0EsbUJBQUE7QUNQUjs7QURXQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ1JKOztBRFVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBSUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1hSOztBRGdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7QUNiSjs7QURnQkE7RUFDSSxrQkFBQTtBQ2JKOztBRGdCQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZko7O0FEa0JBO0VBQ0ksZUFBQTtBQ2ZKOztBRG1CQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2hCSjs7QURvQkE7RUFDSSxhQUFBO0VBQ0Es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RDBIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUN2SEo7O0FEMEhBO0VBQ0ksMkJBQUE7QUN2SEo7O0FENElBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtJQUNBLGtCQUFBO0VDeklOOztFRDRJRTtJQUNJLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSx3QkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsZ0NBQUE7RUN6SU47O0VENElFO0lBQ0ksMkJBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUN6SU47O0VENElFO0lBQ0ksWUFBQTtFQ3pJTjs7RUQ0SUU7SUFDSSxRQUFBO0lBQ0EsU0FBQTtFQ3pJTjtBQUNGIiwiZmlsZSI6InBlcmZlY3QtbWF0Y2gyMDIyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA3MDAmZmFtaWx5PUR5bmFQdWZmOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RHluYVB1ZmY6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLmJnLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvU3Bpbi1UaGUtV2hlZWwtV2Vic2l0ZS1CYW5uZXIuanBnKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgwcHg7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcclxufVxyXG5cclxuLnBhZ2Utd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbjogMjRweCBhdXRvO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGlubmVyX193cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyB3aWR0aDogMzdweDtcclxuICAgICAgICAvLyBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb290YmFsbC5zdmcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0b3A6IDQxLjY1JTtcclxuICAgICAgICBsZWZ0OiA0NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uc3Bpbi1idG4td3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNhNzc0O1xyXG4gICAgYm9yZGVyOiA2LjJweCBzb2xpZCAjZDNhNzc0O1xyXG4gICAgYm94LXNoYWRvdzogMCA3LjE1NjUzcHggMCAxLjc4OTEzcHggcmdiKDAgMCAwIC8gNiUpO1xyXG59XHJcblxyXG4uYWJzb2x1dGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uc3Bpbi1idG4ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICAvLyB6LWluZGV4OiAyMDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE0MiwgMjQ2LCAxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2E3NzQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLnNwaW5uZXItd2hlZWwtc3Bpbi1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMwMEIzYWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNSUpIDBweCA1NHB4IDU1cHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IC0xMnB4IDMwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDRweCA2cHgsIHJnYigwIDAgMCAvIDE3JSkgMHB4IDEycHggMTNweCwgcmdiKDAgMCAwIC8gOSUpIDBweCAtM3B4IDVweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XHJcbiAgICAvLyAuZm9ybV9fYmx1ciB7XHJcbiAgICAvLyAgICAgZmlsdGVyOiBibHVyKDFweCk7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vICAgICB0b3A6IDA7XHJcbiAgICAvLyAgICAgbGVmdDogMDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAqIHtcclxuICAgIC8vICAgICBmb250LWZhbWlseTogJ0R5bmFQdWZmJywgY3Vyc2l2ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAuY29udGFpbmVye1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vICAgICB6LWluZGV4OiAyO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGgyLFxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEIzYWM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDVyZW07XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogOHB4IDAgMCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBCM2FjO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBpbnB1dDpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiAzcHggc29saWQgIzAwQjNhYztcclxuLy8gICAgIC8vIG91dGxpbmU6IDNweCBzb2xpZCAjQzE2RTI1O1xyXG4vLyB9XHJcblxyXG5sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRkZGO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aGFreW91X19zdGVwIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2VfX2hlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aGFua3lvdV9faW1nIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAuYmctaW1hZ2Uge1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICAudGhha3lvdV9fc3RlcCB7XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC50aGFua3lvdV9faW1ne1xyXG4gICAgLy8gICAgIHdpZHRoOiA2MCU7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB0b3A6IDM5JTtcclxuICAgICAgICAgICAgbGVmdDogNDUuNyU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbi1idG4td3JhcCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGluLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoYWt5b3VfX3N0ZXAge1xyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhZ2VfX2hlYWRpbmcge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG5cclxuICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5xdWl6X2JveCB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAudGhhbmt5b3VfX2ltZ3tcclxuICAgIC8vICAgICB3aWR0aDogODAlO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnNwaW5uZXJfX3dyYXBwZXIge1xyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgdG9wOiAzOCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ0LjglO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHggNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLnNwaW5uZXJfX3dyYXBwZXIge1xyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgdG9wOiAzNi44NSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ0JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAuc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB0b3A6IDM1Ljg1JTtcclxuICAgICAgICAgICAgbGVmdDogNDMlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gcXVpeiBjc3NcclxuLyogaW1wb3J0aW5nIGdvb2dsZSBmb250cyAqL1xyXG46OnNlbGVjdGlvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwOWNiYzY7XHJcbn1cclxuXHJcbi8vIC5zdGFydF9idG4sXHJcbi8vIC5pbmZvX2JveCxcclxuLy8gLnF1aXpfYm94LFxyXG4vLyAucmVzdWx0X2JveCB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0b3A6IDUwJTtcclxuLy8gICAgIGxlZnQ6IDUwJTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4vLyAgICAgICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4vLyB9XHJcblxyXG4uaW5mb19ib3guYWN0aXZlSW5mbyxcclxuLnF1aXpfYm94LmFjdGl2ZVF1aXosXHJcbi5yZXN1bHRfYm94LmFjdGl2ZVJlc3VsdCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLy8gei1pbmRleDogNTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxufVxyXG5cclxuLnN0YXJ0X2J0biBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjNhYztcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvX2JveCB7XHJcbiAgICAvLyB3aWR0aDogNTQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmluZm8tdGl0bGUge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pbmZvX2JveCAuaW5mby1saXN0IHtcclxuICAgIHBhZGRpbmc6IDE1cHggNTBweDtcclxufVxyXG5cclxuLmluZm9fYm94IC5pbmZvLWxpc3QgLmluZm8ge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pbmZvX2JveCAuaW5mby1saXN0IC5pbmZvIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDBiM2FjO1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmJ1dHRvbnMge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmluZm9fYm94IC5idXR0b25zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnF1aXpfYm94IHtcclxuICAgIHdpZHRoOiA1NTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjkpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5xdWl6X2JveCBoZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnF1aXpfYm94IGhlYWRlciAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnF1aXpfYm94IGhlYWRlciAudGltZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzA5Y2JjNjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDE0NXB4O1xyXG59XHJcblxyXG4ucXVpel9ib3ggaGVhZGVyIC50aW1lciAudGltZV9sZWZ0X3R4dCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ucXVpel9ib3ggaGVhZGVyIC50aW1lciAudGltZXJfc2VjIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiM2FjO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzM0M2E0MDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLnF1aXpfYm94IGhlYWRlciAudGltZV9saW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMzBweCAyMHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5zZWN0aW9uIC5xdWVfdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuc2VjdGlvbiAub3B0aW9uX2xpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb246bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb246aG92ZXIge1xyXG4gICAgLy8gY29sb3I6ICMwMDQwODU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTZlYmU5O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2I4ZGFmZjtcclxufVxyXG5cclxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbi5jb3JyZWN0IHtcclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XHJcbn1cclxuXHJcbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24uaW5jb3JyZWN0IHtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XHJcbn1cclxuXHJcbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24uZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24gLmljb24ge1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ub3B0aW9uX2xpc3QgLm9wdGlvbiAuaWNvbi50aWNrIHtcclxuICAgIGNvbG9yOiAjMjM5MDNjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjM5MDNjO1xyXG4gICAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcclxufVxyXG5cclxuLm9wdGlvbl9saXN0IC5vcHRpb24gLmljb24uY3Jvc3Mge1xyXG4gICAgY29sb3I6ICNhNDI4MzQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYTQyODM0O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG59XHJcblxyXG5mb290ZXIgLnRvdGFsX3F1ZSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuZm9vdGVyIC50b3RhbF9xdWUgc3BhbiBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuZm9vdGVyIC50b3RhbF9xdWUgc3BhbiBwOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG5mb290ZXIgYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiM2FjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBtYXJnaW46IGluaGVyaXQ7XHJcbn1cclxuXHJcbmZvb3RlciBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA5Y2JjNjtcclxufVxyXG5cclxuZm9vdGVyIGJ1dHRvbi5zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5yZXN1bHRfYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMjVweCAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjkpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5yZXN1bHRfYm94IC5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHRfYm94IC5jb21wbGV0ZV90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yZXN1bHRfYm94IC5zY29yZV90ZXh0IHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnJlc3VsdF9ib3ggLnNjb3JlX3RleHQgc3BhbiBwIHtcclxuICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnJlc3VsdF9ib3ggLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXN1bHRfYm94IC5idXR0b25zIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5idXR0b25zIGJ1dHRvbi5yZXN0YXJ0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzAwYjNhYztcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uLnJlc3RhcnQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA5Y2JjNjtcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uLnF1aXQge1xyXG4gICAgY29sb3I6ICMwMGIzYWM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uLnF1aXQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xyXG59XHJcblxyXG5sYWJlbC5vcHRpb24ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgLyogcmVtb3ZlIHN0YW5kYXJkIGJhY2tncm91bmQgYXBwZWFyYW5jZSAqL1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC8qIGNyZWF0ZSBjdXN0b20gcmFkaW9idXR0b24gYXBwZWFyYW5jZSAqL1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yIG9ubHkgZm9yIGNvbnRlbnQgKi9cclxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qIGFwcGVhcmFuY2UgZm9yIGNoZWNrZWQgcmFkaW9idXR0b24gKi9cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjNhYztcclxufVxyXG5cclxuLnBhZ2VfX2hlYWRpbmcge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgKiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhlaWdodC1hdXRvIHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXktMzYge1xyXG4gICAgbWFyZ2luOiAzNnB4IDA7XHJcbn1cclxuXHJcbmEuc29jaWFsLWJ0biB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuYS5zb2NpYWwtYnRuOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG5hLnNvY2lhbC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuYS5zb2NpYWwtYnRuLmZiIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uLWZiLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmE0O1xyXG59XHJcblxyXG5hLnNvY2lhbC1idG4udHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi10d2l0dGVyLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNmJmZmY7XHJcbn1cclxuXHJcbmEuc29jaWFsLWJ0bi5pZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWcucG5nXCIpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuYS5zb2NpYWwtYnRuLnlvdXR1YmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24teW91dHViZS5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIyMTJlO1xyXG59XHJcblxyXG4ucmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZ3gtd2hlZWwge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gdG9wOiAwO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIC8vIHotaW5kZXg6IDk5OTk5OTk5OTtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk7XHJcbn1cclxuXHJcbi53aGVlbF9fYmFja19faW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzMzdweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzODhweCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTM5JSk7XHJcbn1cclxuXHJcbi53aGVlbF9fYmFja19fZm9vdGJhbGxfX2ltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDk1JTtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGxlZnQ6IDQ0JVxyXG59XHJcblxyXG5mb3JtLnNwaW5uZXJfX3dyYXBwZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xyXG4vLyAgICAgLndoZWVsX19iYWNrX19mb290YmFsbF9faW1nIHsgICBcclxuLy8gICAgICAgICBsZWZ0OiA0MyU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XHJcbi8vICAgICAud2hlZWxfX2JhY2tfX2Zvb3RiYWxsX19pbWcgeyAgIFxyXG4vLyAgICAgICAgIGxlZnQ6IDQ0JTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuLy8gICAgIC53aGVlbF9fYmFja19fZm9vdGJhbGxfX2ltZyB7ICAgXHJcbi8vICAgICAgICAgbGVmdDogNDUlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm5neC13aGVlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDgwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDklKTtcclxuICAgICAgICB6LWluZGV4OiA5OTk5OTk5OTk7XHJcbiAgICB9XHJcblxyXG4gICAgLndoZWVsX19iYWNrX19pbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNDk2cHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDU3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zOSUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDc1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwX18ze1xyXG4gICAgICAgIGhlaWdodDogMTIwJTtcclxuICAgIH1cclxuXHJcbiAgICAud2hlZWxfX2JhY2tfX2Zvb3RiYWxsX19pbWcge1xyXG4gICAgICAgIHRvcDogNzglO1xyXG4gICAgICAgIGxlZnQ6IDQ1JTtcclxuICAgIH1cclxufSIsIi5iZy1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvU3Bpbi1UaGUtV2hlZWwtV2Vic2l0ZS1CYW5uZXIuanBnKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwcHg7XG4gIGZpbHRlcjogYmx1cigxcHgpO1xufVxuXG4ucGFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhZ2Utd3JhcHBlciBoMSB7XG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFnZS13cmFwcGVyIGgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uc3Bpbm5lcl9fd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNwaW5uZXJfX3dyYXBwZXIgLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDQxLjY1JTtcbiAgbGVmdDogNDUlO1xufVxuXG4uc3Bpbi1idG4td3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2QzYTc3NDtcbiAgYm9yZGVyOiA2LjJweCBzb2xpZCAjZDNhNzc0O1xuICBib3gtc2hhZG93OiAwIDcuMTU2NTNweCAwIDEuNzg5MTNweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4uYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zcGluLWJ0biB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2E3NzQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3ZnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3Bpbm5lci13aGVlbC1zcGluLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiBibGFjaztcbiAgbWluLXdpZHRoOiA0NTBweDtcbiAgcGFkZGluZzogMjRweCAxNnB4O1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBib3JkZXI6IDZweCBzb2xpZCAjMDBCM2FjO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41NikgMHB4IDIycHggNzBweCA0cHg7XG59XG5mb3JtIGgyLFxuZm9ybSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbmZvcm0gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmZvcm0gaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC1kYW5nZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjNhYztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDVyZW07XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW46IDE2cHggYXV0bztcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA4cHggMCAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCM2FjO1xuICBvdXRsaW5lOiBub25lO1xufVxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5sYWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9hZGVyIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4udGhha3lvdV9fc3RlcCBmb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzZweDtcbn1cbi50aGFreW91X19zdGVwIC5wYWdlX19oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cblxuLnRoYW5reW91X19pbWcge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAuYmctaW1hZ2Uge1xuICAgIHRvcDogNjBweDtcbiAgfVxuXG4gIC50aGFreW91X19zdGVwIGZvcm0ge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zcGlubmVyX193cmFwcGVyIC5pY29uIHtcbiAgICB0b3A6IDM5JTtcbiAgICBsZWZ0OiA0NS43JTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zcGluLWJ0bi13cmFwIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICAuc3Bpbi1idG4ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGhha3lvdV9fc3RlcCBmb3JtIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC50aGFreW91X19zdGVwIC5wYWdlX19oZWFkaW5nIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIC50aGFreW91X19zdGVwIC5wYWdlX19oZWFkaW5nICoge1xuICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcbiAgfVxuICAudGhha3lvdV9fc3RlcCAucGFnZV9faGVhZGluZyBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC50aGFreW91X19zdGVwIC5wYWdlX19oZWFkaW5nIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnRoYWt5b3VfX3N0ZXAgLnBhZ2VfX2hlYWRpbmcgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucXVpel9ib3gge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zcGlubmVyX193cmFwcGVyIC5pY29uIHtcbiAgICB0b3A6IDM4JTtcbiAgICBsZWZ0OiA0NC44JTtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgcGFkZGluZzogMjRweCA0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5zcGlubmVyX193cmFwcGVyIC5pY29uIHtcbiAgICB0b3A6IDM2Ljg1JTtcbiAgICBsZWZ0OiA0NCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5zcGlubmVyX193cmFwcGVyIC5pY29uIHtcbiAgICB0b3A6IDM1Ljg1JTtcbiAgICBsZWZ0OiA0MyU7XG4gIH1cbn1cbi8qIGltcG9ydGluZyBnb29nbGUgZm9udHMgKi9cbjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwOWNiYzY7XG59XG5cbi5pbmZvX2JveC5hY3RpdmVJbmZvLFxuLnF1aXpfYm94LmFjdGl2ZVF1aXosXG4ucmVzdWx0X2JveC5hY3RpdmVSZXN1bHQge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5zdGFydF9idG4gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjNhYztcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5mb19ib3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uaW5mb19ib3ggLmluZm8tdGl0bGUge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbmZvX2JveCAuaW5mby1saXN0IHtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xufVxuXG4uaW5mb19ib3ggLmluZm8tbGlzdCAuaW5mbyB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmluZm9fYm94IC5pbmZvLWxpc3QgLmluZm8gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDBiM2FjO1xufVxuXG4uaW5mb19ib3ggLmJ1dHRvbnMge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuLmluZm9fYm94IC5idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5xdWl6X2JveCB7XG4gIHdpZHRoOiA1NTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnF1aXpfYm94IGhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5xdWl6X2JveCBoZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucXVpel9ib3ggaGVhZGVyIC50aW1lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzA5Y2JjNjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxNDVweDtcbn1cblxuLnF1aXpfYm94IGhlYWRlciAudGltZXIgLnRpbWVfbGVmdF90eHQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucXVpel9ib3ggaGVhZGVyIC50aW1lciAudGltZXJfc2VjIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA0NXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDBiM2FjO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnF1aXpfYm94IGhlYWRlciAudGltZV9saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI1cHggMzBweCAyMHB4IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbnNlY3Rpb24gLnF1ZV90ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5zZWN0aW9uIC5vcHRpb25fbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYTZlYmU5O1xufVxuXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uLmNvcnJlY3Qge1xuICBjb2xvcjogIzE1NTcyNDtcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbn1cblxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbi5pbmNvcnJlY3Qge1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYmFja2dyb3VuZDogI2Y4ZDdkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbn1cblxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uIC5pY29uIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLm9wdGlvbl9saXN0IC5vcHRpb24gLmljb24udGljayB7XG4gIGNvbG9yOiAjMjM5MDNjO1xuICBib3JkZXItY29sb3I6ICMyMzkwM2M7XG4gIGJhY2tncm91bmQ6ICNkNGVkZGE7XG59XG5cbi5vcHRpb25fbGlzdCAub3B0aW9uIC5pY29uLmNyb3NzIHtcbiAgY29sb3I6ICNhNDI4MzQ7XG4gIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XG4gIGJvcmRlci1jb2xvcjogI2E0MjgzNDtcbn1cblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuZm9vdGVyIC50b3RhbF9xdWUgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5mb290ZXIgLnRvdGFsX3F1ZSBzcGFuIHAge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuZm9vdGVyIC50b3RhbF9xdWUgc3BhbiBwOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmZvb3RlciBidXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMTNweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzAwYjNhYztcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBtYXJnaW46IGluaGVyaXQ7XG59XG5cbmZvb3RlciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xufVxuXG5mb290ZXIgYnV0dG9uLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnJlc3VsdF9ib3gge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDI1cHggMzBweDtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ucmVzdWx0X2JveCAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucmVzdWx0X2JveCAuY29tcGxldGVfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJlc3VsdF9ib3ggLnNjb3JlX3RleHQgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yZXN1bHRfYm94IC5zY29yZV90ZXh0IHNwYW4gcCB7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVzdWx0X2JveCAuYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJlc3VsdF9ib3ggLmJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5idXR0b25zIGJ1dHRvbi5yZXN0YXJ0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMGIzYWM7XG59XG5cbi5idXR0b25zIGJ1dHRvbi5yZXN0YXJ0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzA5Y2JjNjtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uLnF1aXQge1xuICBjb2xvcjogIzAwYjNhYztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uLnF1aXQ6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzA5Y2JjNjtcbn1cblxubGFiZWwub3B0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbmxhYmVsLm9wdGlvbiBpbnB1dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIC8qIHJlbW92ZSBzdGFuZGFyZCBiYWNrZ3JvdW5kIGFwcGVhcmFuY2UgKi9cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIGNyZWF0ZSBjdXN0b20gcmFkaW9idXR0b24gYXBwZWFyYW5jZSAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgLyogYmFja2dyb3VuZC1jb2xvciBvbmx5IGZvciBjb250ZW50ICovXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIGFwcGVhcmFuY2UgZm9yIGNoZWNrZWQgcmFkaW9idXR0b24gKi9cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiM2FjO1xufVxuXG4ucGFnZV9faGVhZGluZyB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wYWdlX19oZWFkaW5nICoge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ucGFnZV9faGVhZGluZyBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFnZV9faGVhZGluZyBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlaWdodC1hdXRvIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5teS0zNiB7XG4gIG1hcmdpbjogMzZweCAwO1xufVxuXG5hLnNvY2lhbC1idG4ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xufVxuXG5hLnNvY2lhbC1idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuYS5zb2NpYWwtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuYS5zb2NpYWwtYnRuLmZiIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24tZmIuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmE0O1xufVxuXG5hLnNvY2lhbC1idG4udHdpdHRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uLXR3aXR0ZXIuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiZmZmO1xufVxuXG5hLnNvY2lhbC1idG4uaWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWcucG5nXCIpO1xufVxuXG5hLnNvY2lhbC1idG4ueW91dHViZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uLXlvdXR1YmUuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIyMTJlO1xufVxuXG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZ3gtd2hlZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA5OTk5OTk5OTk7XG59XG5cbi53aGVlbF9fYmFja19faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzM3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzODhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTM5JSk7XG59XG5cbi53aGVlbF9fYmFja19fZm9vdGJhbGxfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5NSU7XG4gIHdpZHRoOiA1NXB4O1xuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNTVweDtcbiAgbGVmdDogNDQlO1xufVxuXG5mb3JtLnNwaW5uZXJfX3dyYXBwZXIge1xuICBtYXgtd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uZ3gtd2hlZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA4MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ5JSk7XG4gICAgei1pbmRleDogOTk5OTk5OTk5O1xuICB9XG5cbiAgLndoZWVsX19iYWNrX19pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDk2cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDU3MHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogODAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zOSUpO1xuICB9XG5cbiAgZm9ybS5zcGlubmVyX193cmFwcGVyIHtcbiAgICBtaW4td2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgbWluLWhlaWdodDogNzUwcHg7XG4gIH1cblxuICAuc3RlcF9fMyB7XG4gICAgaGVpZ2h0OiAxMjAlO1xuICB9XG5cbiAgLndoZWVsX19iYWNrX19mb290YmFsbF9faW1nIHtcbiAgICB0b3A6IDc4JTtcbiAgICBsZWZ0OiA0NSU7XG4gIH1cbn0iXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfect-match-2022_perfect-match-2022_module_ts.js.map