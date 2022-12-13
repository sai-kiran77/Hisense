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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4101);














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
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.thankYouMessage);
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
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.signupForm.controls["name"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.signupForm.controls["name"].errors["pattern"]);
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
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.signupForm.controls["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.signupForm.controls["email"].errors["email"]);
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
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.signupForm.controls["phone"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.signupForm.controls["phone"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.signupForm.controls["phone"].errors["maxlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.signupForm.controls["phone"].errors["pattern"]);
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
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.signupForm.controls["zipcode"].errors["required"]);
  }
}

function PerfectMatch2022Component_ng_container_4_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 26);
  }
}

function PerfectMatch2022Component_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r23.onSubmit();
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
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 53)(1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PerfectMatch2022Component_ng_container_5_label_36_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r33.selectedOption = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r32 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r32.id)("ngModel", ctx_r25.selectedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r32 == null ? null : option_r32.answer);
  }
}

const _c2 = function (a0) {
  return {
    "show": a0
  };
};

function PerfectMatch2022Component_ng_container_5_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r35.onNextQuestion();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c2, ctx_r26.showQuestions));
  }
}

function PerfectMatch2022Component_ng_container_5_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r37.onSubmitQuiz();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c2, ctx_r27.showQuestions));
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
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_button_53_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r39.onReplayQuiz();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Replay Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function PerfectMatch2022Component_ng_container_5_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_5_button_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r41.onSpinTheWheel();
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
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r43.onContinueRules();
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r45.onQuitQuiz();
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

function PerfectMatch2022Component_ng_container_6_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const prize_r49 = ctx.$implicit;
    const i_r50 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](prize_r49.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", prize_r49.icon_full_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", "prize " + (i_r50 + 1));
  }
}

function PerfectMatch2022Component_ng_container_6_ng_container_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 26);
  }
}

const _c6 = function (a0) {
  return {
    "transform": a0
  };
};

function PerfectMatch2022Component_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 59)(2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 61)(4, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PerfectMatch2022Component_ng_container_6_ng_container_1_div_6_Template, 2, 4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 66)(9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PerfectMatch2022Component_ng_container_6_ng_container_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r51.spin();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Spin");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PerfectMatch2022Component_ng_container_6_ng_container_1_span_12_Template, 1, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c6, ctx_r46.rotateDeg));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r46.spinPrizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r46.isSpinning);
  }
}

function PerfectMatch2022Component_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PerfectMatch2022Component_ng_container_6_ng_container_1_Template, 13, 5, "ng-container", 4);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 69)(4, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "a", 72);
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

function PerfectMatch2022Component_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 73)(2, "div")(3, "h3", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "This event has been ended.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Thank you for participating in Perfect Match 2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}

const _c7 = function (a0, a1, a2) {
  return {
    "is-loading": a0,
    "height-auto thakyou__step": a1,
    "step__3": a2
  };
};

class PerfectMatch2022Component {
  constructor(platformId, fb, api, state, route, router, title, meta, toastr) {
    this.platformId = platformId;
    this.fb = fb;
    this.api = api;
    this.state = state;
    this.route = route;
    this.router = router;
    this.title = title;
    this.meta = meta;
    this.toastr = toastr;
    this.currentStep = 1;
    this.textFontSize = "18";
    this.alive = true;
    this.innerRadius = 25;
    this.spinPrizes = [];
    this.classNames = ['one', 'two', 'three', 'four', 'five', 'six'];
    this.rotateDeg = '0deg';
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
    this.isSpinning = false; // after() {
    //   // alert("You have been bamboozled");
    //   this.audio.nativeElement.play();
    //   // audio.play();
    //   this.isSpinning = false;
    //   // setTimeout(() => {
    //   //   alert(`Congratulations you are eligible for ${this.seed[this.idToLandOn]}`);
    //   // }, 750)
    //   // setTimeout(() => {
    //   this.wheel.reset();
    //   this.currentStep = 4;
    //   this.router.navigate(['/perfect-match-2022', this.thankYouUUID]);
    //   // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    //   // }, 1000);
    // }

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
    this.title.setTitle("Perfect Match contest! | Hisense India");
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
      content: "Perfect Match contest! | Hisense India"
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
      this.toastr.error(err.error.message);
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
      // await new Promise((resolve) => setTimeout(resolve, 0));
      // this.wheel.spin();
      // console.log(this.idToLandOn);


      _this.rotateDeg = `rotate(${-(360 * 5 + _this.idToLandOn * 60) + 'deg'})`; // console.log(this.rotateDeg);
      // // debugger;

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

        _this.toastr.error(err.error.message);
      });

      setTimeout(() => {
        _this.currentStep = 4;

        _this.router.navigate(['/perfect-match-2022', _this.thankYouUUID]);
      }, 3800);
    })();
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
          this.seed = (_k = (_j = (_h = res === null || res === void 0 ? void 0 : res.data) === null || _h === void 0 ? void 0 : _h.next_step_data) === null || _j === void 0 ? void 0 : _j.spin_wheel_prizes) === null || _k === void 0 ? void 0 : _k.map((obj, i) => {
            this.spinPrizes.push({
              class: this.classNames[i],
              icon_full_url: obj.icon_full_url
            });
            return obj.name;
          });
          this.spinPrizes.push({
            class: this.classNames[5],
            icon_full_url: "https://api.hisense-india.com/media/pages/campaigns/perfect-match-2022/icons/lucky_draw_2.webp"
          }); // console.log(this.spinPrizes);

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
        this.toastr.error(err.error.message);
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
    clearInterval(this.counter);
  }

  showQuestion(index) {
    var _a, _b, _c;

    this.currentQuestionNumber = index + 1;
    this.currentQuestion = `${index + 1}. ${(_a = this.questions[index]) === null || _a === void 0 ? void 0 : _a.question}`;
    this.currentOptions = (_b = this.questions[index]) === null || _b === void 0 ? void 0 : _b.answers;
    this.currentQuestionId = (_c = this.questions[index]) === null || _c === void 0 ? void 0 : _c.id;
  }

  startTimer(time) {
    this.timeText = 'Time Left';
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
    if (this.currentQuestionNumber == this.questions.length) {
      this.onSubmitQuiz();
    }

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
        this.seed = (_j = (_h = (_g = res === null || res === void 0 ? void 0 : res.data) === null || _g === void 0 ? void 0 : _g.next_step_data) === null || _h === void 0 ? void 0 : _h.spin_wheel_prizes) === null || _j === void 0 ? void 0 : _j.map((obj, i) => {
          this.spinPrizes.push({
            class: this.classNames[i],
            icon_full_url: obj.icon_full_url
          });
          return obj.name;
        });
        this.spinPrizes.push({
          class: this.classNames[5],
          icon_full_url: "https://api.hisense-india.com/media/pages/campaigns/perfect-match-2022/icons/lucky_draw_2.webp"
        }); // console.log(this.spinPrizes);

        this.setSpinData();
      }
    }, err => {
      console.log(err);
      this.resetQuizCurrentContentDisplay();
      this.showRules = true;
      this.toastr.error(err.error.message);
      this.currentStep = 1;
      this.currentQuestionNumber = 0;
      this.quizAnswers = [];
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
  return new (t || PerfectMatch2022Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_global_state_service__WEBPACK_IMPORTED_MODULE_2__.GlobalStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService));
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
  decls: 13,
  vars: 12,
  consts: [["class", "bg-image", 3, "ngClass", 4, "ngIf"], [1, "page-wrapper", "card", 3, "ngClass"], ["src", "assets/Spin-The-Wheel-Website-Banner.jpg", "alt", "spin the wheel banner", 2, "display", "none", 3, "load"], ["class", "page__heading", 4, "ngIf"], [4, "ngIf"], ["id", "myAudio"], ["myaudio", ""], ["src", "../../../assets/audio/mixkit-fantasy-game-success-notification-270.wav", "type", "audio/ogg"], [1, "bg-image", 3, "ngClass"], [1, "page__heading"], [3, "formGroup"], [1, "form__blur"], [1, "container"], ["for", "name"], [1, "text-danger"], ["type", "text", "placeholder", "Enter Name", "name", "name", "id", "name", "formControlName", "name"], ["class", "text-danger", 4, "ngIf"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "name", "email", "id", "email", "formControlName", "email"], ["for", "phone"], ["type", "text", "placeholder", "Enter Phone Number", "name", "phone", "formControlName", "phone"], ["for", "pincode"], ["type", "text", "placeholder", "Enter Pincode", "name", "pincode", "id", "pincode", "formControlName", "zipcode"], [1, "clearfix"], ["type", "button", 1, "submit__btn", 3, "click"], ["class", "loader", 4, "ngIf"], [1, "loader"], [1, "info_box", 3, "ngClass"], [1, "info-title"], [1, "info-list"], [1, "info"], [1, "buttons", 2, "justify-content", "center"], [1, "start_btn", 2, "white-space", "nowrap", 3, "click"], [1, "quiz_box", 3, "ngClass"], [1, "title"], [1, "timer"], [1, "time_left_txt"], [1, "timer_sec"], [1, "time_line"], [1, "que_text"], [1, "option_list"], ["class", "option", 4, "ngFor", "ngForOf"], [1, "total_que"], ["class", "next_btn", 3, "ngClass", "click", 4, "ngIf"], [1, "result_box", 3, "ngClass"], [1, "icon"], ["width", "48", "height", "48", "src", "assets/warning.svg", "alt", "warning", 4, "ngIf"], ["width", "48", "height", "48", "src", "assets/crown.svg", "alt", "success", 4, "ngIf"], [1, "complete_text"], [1, "score_text"], [1, "buttons"], [1, "quit", 3, "click"], ["class", "restart", 3, "click", 4, "ngIf"], [1, "option"], ["type", "radio", "name", "option", 3, "value", "ngModel", "ngModelChange"], [1, "next_btn", 3, "ngClass", "click"], ["width", "48", "height", "48", "src", "assets/warning.svg", "alt", "warning"], ["width", "48", "height", "48", "src", "assets/crown.svg", "alt", "success"], [1, "restart", 3, "click"], [1, "spinner__wrapper"], ["id", "mainbox", 1, "mainbox"], ["src", "assets/football.jpeg", "width", "30", "height", "30", "alt", "football", 1, "wheel__back__football__img"], ["src", "assets/wheel_back.webp", "alt", "wheel background", 1, "wheel__back"], [1, "spinner__container", 3, "ngStyle"], [3, "class", 4, "ngFor", "ngForOf"], [1, "stoper"], [1, "clearfix", 2, "margin-top", "auto"], [3, "src", "alt"], ["alt", "Thank you", 1, "thankyou__img", 3, "src"], [2, "display", "flex", "gap", "12px", "padding", "0 15px 10px", "justify-content", "center"], ["target", "_blank", 1, "social-btn", "fb", 2, "min-height", "auto", 3, "href"], ["target", "_blank", 1, "social-btn", "twitter", 2, "min-height", "auto", 3, "href"], [1, "social-btn", "ig", 2, "min-height", "auto"], [2, "max-width", "500px"], [2, "line-height", "1.5"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PerfectMatch2022Component_ng_container_8_Template, 7, 0, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "audio", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "source", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Your browser does not support the audio element.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep != 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](8, _c7, ctx.imageLoading, ctx.currentStep == 4, ctx.currentStep == 3));
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentStep == 0);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle],
  styles: [".bg-image[_ngcontent-%COMP%] {\n  background-image: url('Spin-The-Wheel-Website-Banner.jpg');\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  position: absolute;\n  top: 80px;\n  filter: blur(1px);\n}\n\n.page-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  flex-direction: column;\n  text-align: center;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 54px;\n  margin-bottom: 24px;\n  font-weight: bold;\n}\n\n.page-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 24px;\n}\n\n.spinner__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  border-radius: 50%;\n  top: 41.65%;\n  left: 45%;\n}\n\n.spin-btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  width: 60px;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #d3a774;\n  border: 6.2px solid #d3a774;\n  box-shadow: 0 7.15653px 0 1.78913px rgba(0, 0, 0, 0.06);\n}\n\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.spin-btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #d3a774;\n  border: none;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n}\n\nsvg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.spinner-wheel-spin-button[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0;\n  border-radius: 100%;\n  border: 2px solid white;\n}\n\nform[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: 1fr;\n  z-index: 1;\n  color: black;\n  min-width: 450px;\n  padding: 24px 16px;\n  min-height: 600px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 6px solid #00AAA6;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 4px;\n  font-size: 14px;\n  text-align: left;\n}\n\n.text-danger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #00AAA6;\n  color: white;\n  padding: 14px 5rem;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  opacity: 0.9;\n  font-weight: bold;\n  border-radius: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  margin: 16px auto;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin: 8px 0 0 !important;\n  display: inline-block;\n  display: block;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 6px;\n  border: 1px solid #00AAA6;\n  outline: none;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: black;\n}\n\nlabel[_ngcontent-%COMP%] {\n  text-align: left;\n  display: block;\n}\n\n.loader[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n}\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n\n.thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%] {\n  margin-top: 36px;\n}\n\n.thankyou__img[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n@media screen and (max-width: 1023px) {\n  .bg-image[_ngcontent-%COMP%] {\n    top: 60px;\n  }\n\n  .thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 39%;\n    left: 45.7%;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n  }\n\n  .spin-btn-wrap[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n  }\n\n  .spin-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n\n  form[_ngcontent-%COMP%] {\n    width: 90%;\n    min-width: auto !important;\n  }\n\n  .thakyou__step[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    margin-bottom: 12px !important;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-weight: bold;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .thakyou__step[_ngcontent-%COMP%]   .page__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px !important;\n  }\n\n  .quiz_box[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 38%;\n    left: 44.8%;\n  }\n\n  form[_ngcontent-%COMP%] {\n    width: 98%;\n    padding: 24px 4px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 36.85%;\n    left: 44%;\n  }\n}\n\n@media screen and (max-width: 375px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 35.85%;\n    left: 43%;\n  }\n}\n\n\n\n[_ngcontent-%COMP%]::selection {\n  color: #fff;\n  background: #09cbc6;\n}\n\n.info_box.activeInfo[_ngcontent-%COMP%], .quiz_box.activeQuiz[_ngcontent-%COMP%], .result_box.activeResult[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  pointer-events: auto;\n}\n\n.start_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n  color: #fff;\n  background-color: #00AAA6;\n  padding: 15px 30px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.info_box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n\n.info_box[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 100%;\n  border-bottom: 1px solid lightgrey;\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n  border-radius: 5px 5px 0 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%] {\n  padding: 15px 50px;\n}\n\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  font-size: 17px;\n  text-align: left;\n}\n\n.info_box[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #00AAA6;\n}\n\n.info_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 30px;\n  border-top: 1px solid lightgrey;\n}\n\n.info_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  height: 40px;\n  width: 100px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #09cbc6;\n  transition: all 0.3s ease;\n}\n\n.quiz_box[_ngcontent-%COMP%] {\n  width: 550px;\n  background: #fff;\n  border-radius: 5px;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 70px;\n  padding: 0 30px;\n  background: #fff;\n  border-radius: 5px 5px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.1);\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  color: white;\n  background: #09cbc6;\n  border: 1px solid #09cbc6;\n  height: 45px;\n  padding: 0 8px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 145px;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .time_left_txt[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 17px;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]   .timer_sec[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  height: 30px;\n  width: 45px;\n  color: #fff;\n  border-radius: 5px;\n  line-height: 30px;\n  text-align: center;\n  background: #00AAA6;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-left: 8px;\n}\n\n.quiz_box[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .time_line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  height: 3px;\n  background: #007bff;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 25px 30px 20px 30px;\n  background: #fff;\n}\n\nsection[_ngcontent-%COMP%]   .que_text[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 600;\n  text-align: left;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  display: block;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #09cbc6;\n  border-radius: 5px;\n  padding: 8px 15px;\n  font-size: 17px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover {\n  background: #a6ebe9;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.correct[_ngcontent-%COMP%] {\n  color: #155724;\n  background: #d4edda;\n  border: 1px solid #c3e6cb;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.incorrect[_ngcontent-%COMP%] {\n  color: #721c24;\n  background: #f8d7da;\n  border: 1px solid #f5c6cb;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\nsection[_ngcontent-%COMP%]   .option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 26px;\n  width: 26px;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 13px;\n  pointer-events: none;\n  transition: all 0.3s ease;\n  line-height: 24px;\n}\n\n.option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon.tick[_ngcontent-%COMP%] {\n  color: #23903c;\n  border-color: #23903c;\n  background: #d4edda;\n}\n\n.option_list[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .icon.cross[_ngcontent-%COMP%] {\n  color: #a42834;\n  background: #f8d7da;\n  border-color: #a42834;\n}\n\nfooter[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 0 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid lightgrey;\n}\n\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0 5px;\n}\n\nfooter[_ngcontent-%COMP%]   .total_que[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  padding-left: 0px;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 13px;\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: #fff;\n  border-radius: 5px;\n  background: #00AAA6;\n  border: 1px solid #09cbc6;\n  line-height: 10px;\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.95);\n  transition: all 0.3s ease;\n  margin: inherit;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #09cbc6;\n}\n\nfooter[_ngcontent-%COMP%]   button.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n}\n\n.result_box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  display: flex;\n  padding: 25px 30px;\n  max-width: 450px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n  transition: all 0.3s ease;\n}\n\n.result_box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: #007bff;\n  margin-bottom: 10px;\n}\n\n.result_box[_ngcontent-%COMP%]   .complete_text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.result_box[_ngcontent-%COMP%]   .score_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.result_box[_ngcontent-%COMP%]   .score_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 4px;\n  font-weight: 600;\n}\n\n.result_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 20px 0;\n  justify-content: center;\n}\n\n.result_box[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  height: 45px;\n  padding: 0 20px;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n\n.buttons[_ngcontent-%COMP%]   button.restart[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #00AAA6;\n}\n\n.buttons[_ngcontent-%COMP%]   button.restart[_ngcontent-%COMP%]:hover {\n  background: #09cbc6;\n}\n\n.buttons[_ngcontent-%COMP%]   button.quit[_ngcontent-%COMP%] {\n  color: #00AAA6;\n  background: #fff;\n  border: 1px solid #09cbc6;\n}\n\n.buttons[_ngcontent-%COMP%]   button.quit[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #09cbc6;\n}\n\nlabel.option[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  align-items: center !important;\n}\n\nlabel.option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 8px !important;\n  margin-top: 0 !important;\n  display: inline-block !important;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  \n  -webkit-appearance: none;\n  appearance: none;\n  \n  display: inline-block;\n  width: 18px !important;\n  height: 18px !important;\n  padding: 3px !important;\n  \n  background-clip: content-box;\n  border: 1px solid #09cbc6;\n  background-color: white;\n  border-radius: 50%;\n}\n\n\n\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  background-color: #00AAA6;\n}\n\n.page__heading[_ngcontent-%COMP%] {\n  color: black;\n  margin-bottom: 16px;\n  margin-top: 20px;\n}\n\n.page__heading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin-bottom: 16px !important;\n}\n\n.page__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.page__heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n\n.my-36[_ngcontent-%COMP%] {\n  margin: 36px 0;\n}\n\na.social-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f3f3f3;\n  margin-right: 12px;\n  text-indent: -9999px;\n  background-repeat: no-repeat;\n  background-size: 50% auto;\n  background-position: center center;\n  transition: all 0.4s ease-out;\n}\n\na.social-btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\na.social-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\na.social-btn.fb[_ngcontent-%COMP%] {\n  background-image: url('icon-fb.svg');\n  background-size: auto 50%;\n  background-color: #0056a4;\n}\n\na.social-btn.twitter[_ngcontent-%COMP%] {\n  background-image: url('icon-twitter.svg');\n  background-color: #06bfff;\n}\n\na.social-btn.ig[_ngcontent-%COMP%] {\n  background-image: url('ig.png');\n}\n\na.social-btn.youtube[_ngcontent-%COMP%] {\n  background-image: url('icon-youtube.svg');\n  background-color: #eb212e;\n}\n\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.ngx-wheel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, -50%);\n  z-index: 999999999;\n}\n\n.wheel__back__img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 337px !important;\n  height: 388px !important;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, -39%);\n}\n\n.wheel__back__football__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 95%;\n  width: 55px;\n  z-index: 9999999999;\n  border-radius: 50%;\n  height: 55px;\n  left: 44%;\n}\n\nform.spinner__wrapper[_ngcontent-%COMP%] {\n  max-width: 450px !important;\n}\n\n@media screen and (min-width: 768px) {\n  .ngx-wheel[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    left: 50%;\n    top: 80%;\n    transform: translate(-50%, -49%);\n    z-index: 999999999;\n  }\n\n  .wheel__back__img[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 496px !important;\n    height: 570px !important;\n    left: 50%;\n    top: 80%;\n    transform: translate(-50%, -39%);\n  }\n\n  form.spinner__wrapper[_ngcontent-%COMP%] {\n    min-width: 600px !important;\n    margin: 20px 0;\n    min-height: 750px;\n  }\n\n  .step__3[_ngcontent-%COMP%] {\n    height: 120%;\n  }\n\n  .wheel__back__football__img[_ngcontent-%COMP%] {\n    top: 78%;\n    left: 45%;\n  }\n}\n\n.spinner__container[_ngcontent-%COMP%] {\n  height: 425px;\n  width: 425px;\n  background: #d3a774;\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 0 10px gray;\n  transition: 3s all;\n}\n\n.spinner__container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 250px;\n  clip-path: polygon(100% 0, 50% 100%, 0 0);\n  transform: translateX(-50%);\n  transform-origin: bottom;\n  position: absolute;\n  left: 21%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-family: monospace;\n  font-weight: 1000;\n  color: #008276;\n  writing-mode: vertical-rl;\n}\n\n.spinner__container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%] {\n  background: #d3a774;\n  left: 50%;\n}\n\n.spinner__container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%] {\n  background: #fff;\n  transform: rotate(60deg);\n}\n\n.spinner__container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%] {\n  background: #d3a774;\n  transform: rotate(120deg);\n}\n\n.spinner__container[_ngcontent-%COMP%]   .four[_ngcontent-%COMP%] {\n  background: #fff;\n  transform: rotate(180deg);\n}\n\n.spinner__container[_ngcontent-%COMP%]   .five[_ngcontent-%COMP%] {\n  background: #d3a774;\n  transform: rotate(240deg);\n}\n\n.spinner__container[_ngcontent-%COMP%]   .six[_ngcontent-%COMP%] {\n  background: #fff;\n  transform: rotate(300deg);\n}\n\n.mid[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  position: absolute;\n  background: #008276;\n}\n\n#spin[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 200px;\n  background: #d3a774;\n  position: absolute;\n  margin-top: 600px;\n  font-size: 30px;\n  color: white;\n  font-weight: 1000;\n  letter-spacing: 4px;\n  border: 1px solid white;\n  cursor: pointer;\n  box-shadow: 0 5px 10px gray;\n  transition: 0.2s all;\n}\n\n#spin[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n}\n\n.stoper[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 40px;\n  background: #d3a774;\n  position: absolute;\n  clip-path: polygon(100% 0, 50% 100%, 0 0);\n  top: -48px;\n  border: 1px solid white;\n}\n\n.spinner__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 125px;\n  height: auto;\n  margin-bottom: 70px;\n  padding: 5px;\n}\n\n.wheel__back[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 457px;\n  top: -14px;\n  left: 49px;\n  height: 526px;\n}\n\n.mainbox[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n\n.wheel__back__football__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: 55px;\n  z-index: 9999999999;\n  border-radius: 50%;\n  height: 55px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@media screen and (max-width: 768px) {\n  .spinner__container[_ngcontent-%COMP%] {\n    height: 350px;\n    width: 350px;\n  }\n\n  .spinner__container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .wheel__back[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 373px;\n    top: -12px;\n    left: 28px;\n    height: 434px;\n  }\n\n  .spinner__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: auto;\n    margin-bottom: 50px;\n    padding: 5px;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  .spinner__container[_ngcontent-%COMP%] {\n    height: 300px;\n    width: 300px;\n  }\n\n  .spinner__container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n\n  .wheel__back[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 321px;\n    top: -10px;\n    left: 50px;\n    height: 372px;\n  }\n}\n\n@media screen and (max-width: 445px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 48px;\n  }\n}\n\n@media screen and (max-width: 440px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 45px;\n  }\n}\n\n@media screen and (max-width: 435px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 43px;\n  }\n}\n\n@media screen and (max-width: 430px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 41px;\n  }\n}\n\n@media screen and (max-width: 425px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 39px;\n  }\n}\n\n@media screen and (max-width: 420px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 37px;\n  }\n}\n\n@media screen and (max-width: 415px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 33px;\n  }\n}\n\n@media screen and (max-width: 410px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 30px;\n  }\n}\n\n@media screen and (max-width: 405px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 27px;\n  }\n}\n\n@media screen and (max-width: 395px) {\n  .wheel__back[_ngcontent-%COMP%] {\n    left: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZlY3QtbWF0Y2gyMDIyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFNhaSUyMEtpcmFuXFxEb2N1bWVudHNcXGhpc2Vuc2VcXHNyY1xcYXBwXFxwYWdlc1xccGVyZmVjdC1tYXRjaC0yMDIyXFxwZXJmZWN0LW1hdGNoMjAyMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDSEo7O0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTFI7O0FEUUk7RUFFSSxlQUFBO0VBQ0EsbUJBQUE7QUNQUjs7QURXQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ1JKOztBRFVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBSUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1hSOztBRGdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7QUNiSjs7QURnQkE7RUFDSSxrQkFBQTtBQ2JKOztBRGdCQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZko7O0FEa0JBO0VBQ0ksZUFBQTtBQ2ZKOztBRG1CQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2hCSjs7QURvQkE7RUFDSSxhQUFBO0VBQ0Es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dUpBO0VBQ0k7SUFDSSxVQUFBO0VDckpOO0FBQ0Y7O0FEdUpBO0VBQ0k7SUFDSSxVQUFBO0VDckpOO0FBQ0Y7O0FEdUpBO0VBQ0k7SUFDSSxVQUFBO0VDckpOO0FBQ0Y7O0FEdUpBO0VBQ0k7SUFDSSxVQUFBO0VDckpOO0FBQ0Y7O0FEdUpBO0VBQ0k7SUFDSSxVQUFBO0VDckpOO0FBQ0Y7O0FEdUpBO0VBQ0k7SUFDSSxVQUFBO0VDckpOO0FBQ0Y7O0FEdUpBO0VBQ0k7SUFDSSxVQUFBO0VDckpOO0FBQ0Y7O0FEdUpBO0VBQ0k7SUFDSSxVQUFBO0VDckpOO0FBQ0Y7O0FEd0pBO0VBQ0k7SUFDSSxVQUFBO0VDdEpOO0FBQ0YiLCJmaWxlIjoicGVyZmVjdC1tYXRjaDIwMjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDcwMCZmYW1pbHk9RHluYVB1ZmY6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG4vLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EeW5hUHVmZjp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9TcGluLVRoZS1XaGVlbC1XZWJzaXRlLUJhbm5lci5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODBweDtcclxuICAgIGZpbHRlcjogYmx1cigxcHgpO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gbWluLWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luOiAyNHB4IGF1dG87XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNwaW5uZXJfX3dyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIHdpZHRoOiAzN3B4O1xyXG4gICAgICAgIC8vIGhlaWdodDogMzdweDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Zvb3RiYWxsLnN2Zyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRvcDogNDEuNjUlO1xyXG4gICAgICAgIGxlZnQ6IDQ1JTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5zcGluLWJ0bi13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNkM2E3NzQ7XHJcbiAgICBib3JkZXI6IDYuMnB4IHNvbGlkICNkM2E3NzQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDcuMTU2NTNweCAwIDEuNzg5MTNweCByZ2IoMCAwIDAgLyA2JSk7XHJcbn1cclxuXHJcbi5hYnNvbHV0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zcGluLWJ0biB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIC8vIHotaW5kZXg6IDIwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgMTQyLCAyNDYsIDEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzYTc3NDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG4uc3Bpbm5lci13aGVlbC1zcGluLWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzAwQUFBNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDI1JSkgMHB4IDU0cHggNTVweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggLTEycHggMzBweCwgcmdiKDAgMCAwIC8gMTIlKSAwcHggNHB4IDZweCwgcmdiKDAgMCAwIC8gMTclKSAwcHggMTJweCAxM3B4LCByZ2IoMCAwIDAgLyA5JSkgMHB4IC0zcHggNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjU2KSAwcHggMjJweCA3MHB4IDRweDtcclxuICAgIC8vIC5mb3JtX19ibHVyIHtcclxuICAgIC8vICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcclxuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gICAgIHRvcDogMDtcclxuICAgIC8vICAgICBsZWZ0OiAwO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vICoge1xyXG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiAnRHluYVB1ZmYnLCBjdXJzaXZlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC5jb250YWluZXJ7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIHotaW5kZXg6IDI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaDIsXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaHIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggNXJlbTtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBtYXJnaW46IDE2cHggYXV0bztcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEFBQTY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGlucHV0OmZvY3VzIHtcclxuLy8gICAgIG91dGxpbmU6IDNweCBzb2xpZCAjMDBBQUE2O1xyXG4vLyAgICAgLy8gb3V0bGluZTogM3B4IHNvbGlkICNDMTZFMjU7XHJcbi8vIH1cclxuXHJcbmxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNGRkY7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLnRoYWt5b3VfX3N0ZXAge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICAgIH1cclxuXHJcbiAgICAucGFnZV9faGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRoYW5reW91X19pbWcge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgIC5iZy1pbWFnZSB7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aGFreW91X19zdGVwIHtcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLnRoYW5reW91X19pbWd7XHJcbiAgICAvLyAgICAgd2lkdGg6IDYwJTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zcGlubmVyX193cmFwcGVyIHtcclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHRvcDogMzklO1xyXG4gICAgICAgICAgICBsZWZ0OiA0NS43JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGluLWJ0bi13cmFwIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW4tYnRuIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudGhha3lvdV9fc3RlcCB7XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGFnZV9faGVhZGluZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnF1aXpfYm94IHtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC50aGFua3lvdV9faW1ne1xyXG4gICAgLy8gICAgIHdpZHRoOiA4MCU7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB0b3A6IDM4JTtcclxuICAgICAgICAgICAgbGVmdDogNDQuOCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgcGFkZGluZzogMjRweCA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB0b3A6IDM2Ljg1JTtcclxuICAgICAgICAgICAgbGVmdDogNDQlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgIC5zcGlubmVyX193cmFwcGVyIHtcclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHRvcDogMzUuODUlO1xyXG4gICAgICAgICAgICBsZWZ0OiA0MyU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBxdWl6IGNzc1xyXG4vKiBpbXBvcnRpbmcgZ29vZ2xlIGZvbnRzICovXHJcbjo6c2VsZWN0aW9uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzA5Y2JjNjtcclxufVxyXG5cclxuLy8gLnN0YXJ0X2J0bixcclxuLy8gLmluZm9fYm94LFxyXG4vLyAucXVpel9ib3gsXHJcbi8vIC5yZXN1bHRfYm94IHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyAgICAgbGVmdDogNTAlO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbi8vICAgICAgICAgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbi8vIH1cclxuXHJcbi5pbmZvX2JveC5hY3RpdmVJbmZvLFxyXG4ucXVpel9ib3guYWN0aXZlUXVpeixcclxuLnJlc3VsdF9ib3guYWN0aXZlUmVzdWx0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyB6LWluZGV4OiA1O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG59XHJcblxyXG4uc3RhcnRfYnRuIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2O1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmluZm9fYm94IHtcclxuICAgIC8vIHdpZHRoOiA1NDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjkpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5pbmZvX2JveCAuaW5mby10aXRsZSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmluZm9fYm94IC5pbmZvLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMTVweCA1MHB4O1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmluZm8tbGlzdCAuaW5mbyB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmluZm9fYm94IC5pbmZvLWxpc3QgLmluZm8gc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMEFBQTY7XHJcbn1cclxuXHJcbi5pbmZvX2JveCAuYnV0dG9ucyB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG59XHJcblxyXG4uaW5mb19ib3ggLmJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucXVpel9ib3gge1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnF1aXpfYm94IGhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ucXVpel9ib3ggaGVhZGVyIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucXVpel9ib3ggaGVhZGVyIC50aW1lciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTQ1cHg7XHJcbn1cclxuXHJcbi5xdWl6X2JveCBoZWFkZXIgLnRpbWVyIC50aW1lX2xlZnRfdHh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5xdWl6X2JveCBoZWFkZXIgLnRpbWVyIC50aW1lcl9zZWMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMwMEFBQTY7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4ucXVpel9ib3ggaGVhZGVyIC50aW1lX2xpbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMjVweCAzMHB4IDIwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbnNlY3Rpb24gLnF1ZV90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5zZWN0aW9uIC5vcHRpb25fbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbjpob3ZlciB7XHJcbiAgICAvLyBjb2xvcjogIzAwNDA4NTtcclxuICAgIGJhY2tncm91bmQ6ICNhNmViZTk7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjYjhkYWZmO1xyXG59XHJcblxyXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uLmNvcnJlY3Qge1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcclxufVxyXG5cclxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbi5pbmNvcnJlY3Qge1xyXG4gICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcclxufVxyXG5cclxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbi5kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbiAuaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5vcHRpb25fbGlzdCAub3B0aW9uIC5pY29uLnRpY2sge1xyXG4gICAgY29sb3I6ICMyMzkwM2M7XHJcbiAgICBib3JkZXItY29sb3I6ICMyMzkwM2M7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG59XHJcblxyXG4ub3B0aW9uX2xpc3QgLm9wdGlvbiAuaWNvbi5jcm9zcyB7XHJcbiAgICBjb2xvcjogI2E0MjgzNDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgICBib3JkZXItY29sb3I6ICNhNDI4MzQ7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbn1cclxuXHJcbmZvb3RlciAudG90YWxfcXVlIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5mb290ZXIgLnRvdGFsX3F1ZSBzcGFuIHAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG5mb290ZXIgLnRvdGFsX3F1ZSBzcGFuIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMCAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMEFBQTY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIG1hcmdpbjogaW5oZXJpdDtcclxufVxyXG5cclxuZm9vdGVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xyXG59XHJcblxyXG5mb290ZXIgYnV0dG9uLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLnJlc3VsdF9ib3gge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnJlc3VsdF9ib3ggLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlc3VsdF9ib3ggLmNvbXBsZXRlX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnJlc3VsdF9ib3ggLnNjb3JlX3RleHQgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucmVzdWx0X2JveCAuc2NvcmVfdGV4dCBzcGFuIHAge1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmVzdWx0X2JveCAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlc3VsdF9ib3ggLmJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJ1dHRvbnMgYnV0dG9uLnJlc3RhcnQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBBQUE2O1xyXG59XHJcblxyXG4uYnV0dG9ucyBidXR0b24ucmVzdGFydDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xyXG59XHJcblxyXG4uYnV0dG9ucyBidXR0b24ucXVpdCB7XHJcbiAgICBjb2xvcjogIzAwQUFBNjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xyXG59XHJcblxyXG4uYnV0dG9ucyBidXR0b24ucXVpdDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwOWNiYzY7XHJcbn1cclxuXHJcbmxhYmVsLm9wdGlvbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAvKiByZW1vdmUgc3RhbmRhcmQgYmFja2dyb3VuZCBhcHBlYXJhbmNlICovXHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLyogY3JlYXRlIGN1c3RvbSByYWRpb2J1dHRvbiBhcHBlYXJhbmNlICovXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3Igb25seSBmb3IgY29udGVudCAqL1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogYXBwZWFyYW5jZSBmb3IgY2hlY2tlZCByYWRpb2J1dHRvbiAqL1xyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBQUE2O1xyXG59XHJcblxyXG4ucGFnZV9faGVhZGluZyB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAqIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVpZ2h0LWF1dG8ge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teS0zNiB7XHJcbiAgICBtYXJnaW46IDM2cHggMDtcclxufVxyXG5cclxuYS5zb2NpYWwtYnRuIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5hLnNvY2lhbC1idG46bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmEuc29jaWFsLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG5hLnNvY2lhbC1idG4uZmIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24tZmIuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YTQ7XHJcbn1cclxuXHJcbmEuc29jaWFsLWJ0bi50d2l0dGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uLXR3aXR0ZXIuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2YmZmZjtcclxufVxyXG5cclxuYS5zb2NpYWwtYnRuLmlnIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pZy5wbmdcIik7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5hLnNvY2lhbC1idG4ueW91dHViZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi15b3V0dWJlLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYjIxMmU7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5neC13aGVlbCB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDA7XHJcbiAgICAvLyBsZWZ0OiAwO1xyXG4gICAgLy8gei1pbmRleDogOTk5OTk5OTk5O1xyXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcclxufVxyXG5cclxuLndoZWVsX19iYWNrX19pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMzN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM4OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzklKTtcclxufVxyXG5cclxuLndoZWVsX19iYWNrX19mb290YmFsbF9faW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTUlO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgbGVmdDogNDQlXHJcbn1cclxuXHJcbmZvcm0uc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbi8vICAgICAud2hlZWxfX2JhY2tfX2Zvb3RiYWxsX19pbWcgeyAgIFxyXG4vLyAgICAgICAgIGxlZnQ6IDQzJTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuLy8gICAgIC53aGVlbF9fYmFja19fZm9vdGJhbGxfX2ltZyB7ICAgXHJcbi8vICAgICAgICAgbGVmdDogNDQlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTBweCkge1xyXG4vLyAgICAgLndoZWVsX19iYWNrX19mb290YmFsbF9faW1nIHsgICBcclxuLy8gICAgICAgICBsZWZ0OiA0NSU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubmd4LXdoZWVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00OSUpO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcclxuICAgIH1cclxuXHJcbiAgICAud2hlZWxfX2JhY2tfX2ltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA0OTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNTcwcHggIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA4MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTM5JSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5zcGlubmVyX193cmFwcGVyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBfXzMge1xyXG4gICAgICAgIGhlaWdodDogMTIwJTtcclxuICAgIH1cclxuXHJcbiAgICAud2hlZWxfX2JhY2tfX2Zvb3RiYWxsX19pbWcge1xyXG4gICAgICAgIHRvcDogNzglO1xyXG4gICAgICAgIGxlZnQ6IDQ1JTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gbmV3IHNwaW5uZXJcclxuLnNwaW5uZXJfX2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQyNXB4O1xyXG4gICAgd2lkdGg6IDQyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2QzYTc3NDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCBncmF5O1xyXG4gICAgdHJhbnNpdGlvbjogM3MgYWxsO1xyXG59XHJcblxyXG4uc3Bpbm5lcl9fY29udGFpbmVyIGRpdiB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDUwJSAxMDAlLCAwIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjElO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIGNvbG9yOiAjMDA4Mjc2O1xyXG4gICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcclxufVxyXG5cclxuLnNwaW5uZXJfX2NvbnRhaW5lciAub25lIHtcclxuICAgIGJhY2tncm91bmQ6ICNkM2E3NzQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5zcGlubmVyX19jb250YWluZXIgLnR3byB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG59XHJcblxyXG4uc3Bpbm5lcl9fY29udGFpbmVyIC50aHJlZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNhNzc0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxufVxyXG5cclxuLnNwaW5uZXJfX2NvbnRhaW5lciAuZm91ciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnNwaW5uZXJfX2NvbnRhaW5lciAuZml2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNhNzc0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxufVxyXG5cclxuLnNwaW5uZXJfX2NvbnRhaW5lciAuc2l4IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG59XHJcblxyXG4ubWlkIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwODI3NjtcclxufVxyXG5cclxuI3NwaW4ge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2QzYTc3NDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDYwMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IGdyYXk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxufVxyXG5cclxuI3NwaW46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnN0b3BlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkM2E3NzQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCA1MCUgMTAwJSwgMCAwKTtcclxuICAgIHRvcDogLTQ4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnNwaW5uZXJfX2NvbnRhaW5lciB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53aGVlbF9fYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDU3cHg7XHJcbiAgICB0b3A6IC0xNHB4O1xyXG4gICAgbGVmdDogNDlweDtcclxuICAgIGhlaWdodDogNTI2cHg7XHJcbn1cclxuXHJcbi5tYWluYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIHdpZHRoOiA1MDBweDtcclxuICAgIC8vIGhlaWdodDogNTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi53aGVlbF9fYmFja19fZm9vdGJhbGxfX2ltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc3Bpbm5lcl9fY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbm5lcl9fY29udGFpbmVyIGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC53aGVlbF9fYmFjayB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzNzNweDtcclxuICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgIGxlZnQ6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbm5lcl9fY29udGFpbmVyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLnNwaW5uZXJfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW5uZXJfX2NvbnRhaW5lciBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgIH1cclxuXHJcbiAgICAud2hlZWxfX2JhY2sge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMzIxcHg7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzcycHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ1cHgpIHtcclxuICAgIC53aGVlbF9fYmFjayB7XHJcbiAgICAgICAgbGVmdDogNDhweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xyXG4gICAgLndoZWVsX19iYWNrIHtcclxuICAgICAgICBsZWZ0OiA0NXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzNXB4KSB7XHJcbiAgICAud2hlZWxfX2JhY2sge1xyXG4gICAgICAgIGxlZnQ6IDQzcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAgIC53aGVlbF9fYmFjayB7XHJcbiAgICAgICAgbGVmdDogNDFweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgLndoZWVsX19iYWNrIHtcclxuICAgICAgICBsZWZ0OiAzOXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAud2hlZWxfX2JhY2sge1xyXG4gICAgICAgIGxlZnQ6IDM3cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcclxuICAgIC53aGVlbF9fYmFjayB7XHJcbiAgICAgICAgbGVmdDogMzNweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gICAgLndoZWVsX19iYWNrIHtcclxuICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwNXB4KSB7XHJcbiAgICAud2hlZWxfX2JhY2sge1xyXG4gICAgICAgIGxlZnQ6IDI3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5NXB4KSB7XHJcbiAgICAud2hlZWxfX2JhY2sge1xyXG4gICAgICAgIGxlZnQ6IDE4cHg7XHJcbiAgICB9XHJcbn0iLCIuYmctaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL1NwaW4tVGhlLVdoZWVsLVdlYnNpdGUtQmFubmVyLmpwZyk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4MHB4O1xuICBmaWx0ZXI6IGJsdXIoMXB4KTtcbn1cblxuLnBhZ2Utd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdlLXdyYXBwZXIgaDEge1xuICBmb250LXNpemU6IDU0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhZ2Utd3JhcHBlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnNwaW5uZXJfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zcGlubmVyX193cmFwcGVyIC5pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiA0MS42NSU7XG4gIGxlZnQ6IDQ1JTtcbn1cblxuLnNwaW4tYnRuLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNkM2E3NzQ7XG4gIGJvcmRlcjogNi4ycHggc29saWQgI2QzYTc3NDtcbiAgYm94LXNoYWRvdzogMCA3LjE1NjUzcHggMCAxLjc4OTEzcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3Bpbi1idG4ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNhNzc0O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNwaW5uZXItd2hlZWwtc3Bpbi1idXR0b24ge1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogYmxhY2s7XG4gIG1pbi13aWR0aDogNDUwcHg7XG4gIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYm9yZGVyOiA2cHggc29saWQgIzAwQUFBNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNTYpIDBweCAyMnB4IDcwcHggNHB4O1xufVxuZm9ybSBoMixcbmZvcm0gcCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5mb3JtIHAge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5mb3JtIGgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRleHQtZGFuZ2VyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCA1cmVtO1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luOiAxNnB4IGF1dG87XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogOHB4IDAgMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQUFBNjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxubGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvYWRlciB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNGRkY7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLnRoYWt5b3VfX3N0ZXAgZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4udGhha3lvdV9fc3RlcCAucGFnZV9faGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG5cbi50aGFua3lvdV9faW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLmJnLWltYWdlIHtcbiAgICB0b3A6IDYwcHg7XG4gIH1cblxuICAudGhha3lvdV9fc3RlcCBmb3JtIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3Bpbm5lcl9fd3JhcHBlciAuaWNvbiB7XG4gICAgdG9wOiAzOSU7XG4gICAgbGVmdDogNDUuNyU7XG4gIH1cblxuICBzdmcge1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc3Bpbi1idG4td3JhcCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLnNwaW4tYnRuIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICBmb3JtIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRoYWt5b3VfX3N0ZXAgZm9ybSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAudGhha3lvdV9fc3RlcCAucGFnZV9faGVhZGluZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAudGhha3lvdV9fc3RlcCAucGFnZV9faGVhZGluZyAqIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRoYWt5b3VfX3N0ZXAgLnBhZ2VfX2hlYWRpbmcgaDIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAudGhha3lvdV9fc3RlcCAucGFnZV9faGVhZGluZyBoMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC50aGFreW91X19zdGVwIC5wYWdlX19oZWFkaW5nIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnF1aXpfYm94IHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc3Bpbm5lcl9fd3JhcHBlciAuaWNvbiB7XG4gICAgdG9wOiAzOCU7XG4gICAgbGVmdDogNDQuOCU7XG4gIH1cblxuICBmb3JtIHtcbiAgICB3aWR0aDogOTglO1xuICAgIHBhZGRpbmc6IDI0cHggNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc3Bpbm5lcl9fd3JhcHBlciAuaWNvbiB7XG4gICAgdG9wOiAzNi44NSU7XG4gICAgbGVmdDogNDQlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuc3Bpbm5lcl9fd3JhcHBlciAuaWNvbiB7XG4gICAgdG9wOiAzNS44NSU7XG4gICAgbGVmdDogNDMlO1xuICB9XG59XG4vKiBpbXBvcnRpbmcgZ29vZ2xlIGZvbnRzICovXG46OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDljYmM2O1xufVxuXG4uaW5mb19ib3guYWN0aXZlSW5mbyxcbi5xdWl6X2JveC5hY3RpdmVRdWl6LFxuLnJlc3VsdF9ib3guYWN0aXZlUmVzdWx0IHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc3RhcnRfYnRuIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEFBQTY7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmluZm9fYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmluZm9fYm94IC5pbmZvLXRpdGxlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5mb19ib3ggLmluZm8tbGlzdCB7XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbn1cblxuLmluZm9fYm94IC5pbmZvLWxpc3QgLmluZm8ge1xuICBtYXJnaW46IDVweCAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pbmZvX2JveCAuaW5mby1saXN0IC5pbmZvIHNwYW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwQUFBNjtcbn1cblxuLmluZm9fYm94IC5idXR0b25zIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbi5pbmZvX2JveCAuYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW46IDAgNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ucXVpel9ib3gge1xuICB3aWR0aDogNTUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5xdWl6X2JveCBoZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ucXVpel9ib3ggaGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnF1aXpfYm94IGhlYWRlciAudGltZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwOWNiYzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTQ1cHg7XG59XG5cbi5xdWl6X2JveCBoZWFkZXIgLnRpbWVyIC50aW1lX2xlZnRfdHh0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnF1aXpfYm94IGhlYWRlciAudGltZXIgLnRpbWVyX3NlYyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwQUFBNjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5xdWl6X2JveCBoZWFkZXIgLnRpbWVfbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAyNXB4IDMwcHggMjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5zZWN0aW9uIC5xdWVfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuc2VjdGlvbiAub3B0aW9uX2xpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5Y2JjNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5zZWN0aW9uIC5vcHRpb25fbGlzdCAub3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2E2ZWJlOTtcbn1cblxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbi5jb3JyZWN0IHtcbiAgY29sb3I6ICMxNTU3MjQ7XG4gIGJhY2tncm91bmQ6ICNkNGVkZGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XG59XG5cbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24uaW5jb3JyZWN0IHtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XG59XG5cbnNlY3Rpb24gLm9wdGlvbl9saXN0IC5vcHRpb24uZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuc2VjdGlvbiAub3B0aW9uX2xpc3QgLm9wdGlvbiAuaWNvbiB7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5vcHRpb25fbGlzdCAub3B0aW9uIC5pY29uLnRpY2sge1xuICBjb2xvcjogIzIzOTAzYztcbiAgYm9yZGVyLWNvbG9yOiAjMjM5MDNjO1xuICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xufVxuXG4ub3B0aW9uX2xpc3QgLm9wdGlvbiAuaWNvbi5jcm9zcyB7XG4gIGNvbG9yOiAjYTQyODM0O1xuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xuICBib3JkZXItY29sb3I6ICNhNDI4MzQ7XG59XG5cbmZvb3RlciB7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbmZvb3RlciAudG90YWxfcXVlIHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuZm9vdGVyIC50b3RhbF9xdWUgc3BhbiBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbmZvb3RlciAudG90YWxfcXVlIHNwYW4gcDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5mb290ZXIgYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwMEFBQTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgbWFyZ2luOiBpbmhlcml0O1xufVxuXG5mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzA5Y2JjNjtcbn1cblxuZm9vdGVyIGJ1dHRvbi5zaG93IHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5yZXN1bHRfYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyNXB4IDMwcHg7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnJlc3VsdF9ib3ggLmljb24ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJlc3VsdF9ib3ggLmNvbXBsZXRlX3RleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yZXN1bHRfYm94IC5zY29yZV90ZXh0IHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmVzdWx0X2JveCAuc2NvcmVfdGV4dCBzcGFuIHAge1xuICBwYWRkaW5nOiAwIDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlc3VsdF9ib3ggLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHggMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZXN1bHRfYm94IC5idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYnV0dG9ucyBidXR0b24ucmVzdGFydCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDBBQUE2O1xufVxuXG4uYnV0dG9ucyBidXR0b24ucmVzdGFydDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwOWNiYzY7XG59XG5cbi5idXR0b25zIGJ1dHRvbi5xdWl0IHtcbiAgY29sb3I6ICMwMEFBQTY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOWNiYzY7XG59XG5cbi5idXR0b25zIGJ1dHRvbi5xdWl0OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwOWNiYzY7XG59XG5cbmxhYmVsLm9wdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5sYWJlbC5vcHRpb24gaW5wdXQge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICAvKiByZW1vdmUgc3RhbmRhcmQgYmFja2dyb3VuZCBhcHBlYXJhbmNlICovXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAvKiBjcmVhdGUgY3VzdG9tIHJhZGlvYnV0dG9uIGFwcGVhcmFuY2UgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XG4gIC8qIGJhY2tncm91bmQtY29sb3Igb25seSBmb3IgY29udGVudCAqL1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDljYmM2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBhcHBlYXJhbmNlIGZvciBjaGVja2VkIHJhZGlvYnV0dG9uICovXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUFBNjtcbn1cblxuLnBhZ2VfX2hlYWRpbmcge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucGFnZV9faGVhZGluZyAqIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuLnBhZ2VfX2hlYWRpbmcgaDIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhZ2VfX2hlYWRpbmcgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWlnaHQtYXV0byB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubXktMzYge1xuICBtYXJnaW46IDM2cHggMDtcbn1cblxuYS5zb2NpYWwtYnRuIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbn1cblxuYS5zb2NpYWwtYnRuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmEuc29jaWFsLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbmEuc29jaWFsLWJ0bi5mYiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pY29uLWZiLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZhNDtcbn1cblxuYS5zb2NpYWwtYnRuLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi10d2l0dGVyLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YmZmZjtcbn1cblxuYS5zb2NpYWwtYnRuLmlnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2lnLnBuZ1wiKTtcbn1cblxuYS5zb2NpYWwtYnRuLnlvdXR1YmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbi15b3V0dWJlLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViMjEyZTtcbn1cblxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmd4LXdoZWVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5OTk5OTk5O1xufVxuXG4ud2hlZWxfX2JhY2tfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMzN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzg4cHggIWltcG9ydGFudDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zOSUpO1xufVxuXG4ud2hlZWxfX2JhY2tfX2Zvb3RiYWxsX19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTUlO1xuICB3aWR0aDogNTVweDtcbiAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxlZnQ6IDQ0JTtcbn1cblxuZm9ybS5zcGlubmVyX193cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubmd4LXdoZWVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogODAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00OSUpO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgfVxuXG4gIC53aGVlbF9fYmFja19faW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQ5NnB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1NzBweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDgwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzklKTtcbiAgfVxuXG4gIGZvcm0uc3Bpbm5lcl9fd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIG1pbi1oZWlnaHQ6IDc1MHB4O1xuICB9XG5cbiAgLnN0ZXBfXzMge1xuICAgIGhlaWdodDogMTIwJTtcbiAgfVxuXG4gIC53aGVlbF9fYmFja19fZm9vdGJhbGxfX2ltZyB7XG4gICAgdG9wOiA3OCU7XG4gICAgbGVmdDogNDUlO1xuICB9XG59XG4uc3Bpbm5lcl9fY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MjVweDtcbiAgd2lkdGg6IDQyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZDNhNzc0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggZ3JheTtcbiAgdHJhbnNpdGlvbjogM3MgYWxsO1xufVxuXG4uc3Bpbm5lcl9fY29udGFpbmVyIGRpdiB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMjUwcHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDUwJSAxMDAlLCAwIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICBjb2xvcjogIzAwODI3NjtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbn1cblxuLnNwaW5uZXJfX2NvbnRhaW5lciAub25lIHtcbiAgYmFja2dyb3VuZDogI2QzYTc3NDtcbiAgbGVmdDogNTAlO1xufVxuXG4uc3Bpbm5lcl9fY29udGFpbmVyIC50d28ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG59XG5cbi5zcGlubmVyX19jb250YWluZXIgLnRocmVlIHtcbiAgYmFja2dyb3VuZDogI2QzYTc3NDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbn1cblxuLnNwaW5uZXJfX2NvbnRhaW5lciAuZm91ciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5zcGlubmVyX19jb250YWluZXIgLmZpdmUge1xuICBiYWNrZ3JvdW5kOiAjZDNhNzc0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xufVxuXG4uc3Bpbm5lcl9fY29udGFpbmVyIC5zaXgge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xufVxuXG4ubWlkIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMwMDgyNzY7XG59XG5cbiNzcGluIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNkM2E3NzQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNjAwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogMTAwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCBncmF5O1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuI3NwaW46aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc3RvcGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogI2QzYTc3NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCA1MCUgMTAwJSwgMCAwKTtcbiAgdG9wOiAtNDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5zcGlubmVyX19jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLndoZWVsX19iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDU3cHg7XG4gIHRvcDogLTE0cHg7XG4gIGxlZnQ6IDQ5cHg7XG4gIGhlaWdodDogNTI2cHg7XG59XG5cbi5tYWluYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndoZWVsX19iYWNrX19mb290YmFsbF9faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDU1cHg7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3Bpbm5lcl9fY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuXG4gIC5zcGlubmVyX19jb250YWluZXIgZGl2IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cblxuICAud2hlZWxfX2JhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzczcHg7XG4gICAgdG9wOiAtMTJweDtcbiAgICBsZWZ0OiAyOHB4O1xuICAgIGhlaWdodDogNDM0cHg7XG4gIH1cblxuICAuc3Bpbm5lcl9fY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc3Bpbm5lcl9fY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5zcGlubmVyX19jb250YWluZXIgZGl2IHtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cblxuICAud2hlZWxfX2JhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzIxcHg7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiA1MHB4O1xuICAgIGhlaWdodDogMzcycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0NXB4KSB7XG4gIC53aGVlbF9fYmFjayB7XG4gICAgbGVmdDogNDhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgLndoZWVsX19iYWNrIHtcbiAgICBsZWZ0OiA0NXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzVweCkge1xuICAud2hlZWxfX2JhY2sge1xuICAgIGxlZnQ6IDQzcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XG4gIC53aGVlbF9fYmFjayB7XG4gICAgbGVmdDogNDFweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLndoZWVsX19iYWNrIHtcbiAgICBsZWZ0OiAzOXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAud2hlZWxfX2JhY2sge1xuICAgIGxlZnQ6IDM3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XG4gIC53aGVlbF9fYmFjayB7XG4gICAgbGVmdDogMzNweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDEwcHgpIHtcbiAgLndoZWVsX19iYWNrIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDVweCkge1xuICAud2hlZWxfX2JhY2sge1xuICAgIGxlZnQ6IDI3cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5NXB4KSB7XG4gIC53aGVlbF9fYmFjayB7XG4gICAgbGVmdDogMThweDtcbiAgfVxufSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfect-match-2022_perfect-match-2022_module_ts.js.map