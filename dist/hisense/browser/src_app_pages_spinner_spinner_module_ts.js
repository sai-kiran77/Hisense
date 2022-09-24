"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["src_app_pages_spinner_spinner_module_ts"],{

/***/ 8541:
/*!****************************************************!*\
  !*** ./src/app/pages/spinner/spinner.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Sai_Kiran_Documents_hisense_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wheel */ 1798);







const _c0 = ["myaudio"];

function SpinnerComponent_ng_container_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-wheel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSpinStart", function SpinnerComponent_ng_container_2_ng_container_11_Template_ngx_wheel_onSpinStart_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r3.before();
    })("onSpinComplete", function SpinnerComponent_ng_container_2_ng_container_11_Template_ngx_wheel_onSpinComplete_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return ctx_r5.after();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r2.width)("height", ctx_r2.height)("spinDuration", 8)("items", ctx_r2.items)("innerRadius", 20)("spinAmount", 10)("textOrientation", ctx_r2.textOrientation)("textAlignment", ctx_r2.textAlignment)("pointerFillColor", "rgba(59,130,246,0.5)")("idToLandOn", ctx_r2.idToLandOn);
  }
}

function SpinnerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Wheel of Fortune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Try your luck by participating below");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpinnerComponent_ng_container_2_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r6.spin();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8)(8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SpinnerComponent_ng_container_2_ng_container_11_Template, 2, 10, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.width && ctx_r0.height);
  }
}

const _c1 = function (a0) {
  return {
    "is-loading": a0
  };
};

class SpinnerComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.seed = [...Array(12).keys()];
    this.items = [];
    this.textOrientation = ngx_wheel__WEBPACK_IMPORTED_MODULE_2__.TextOrientation.HORIZONTAL;
    this.textAlignment = ngx_wheel__WEBPACK_IMPORTED_MODULE_2__.TextAlignment.OUTER;
    this.imageLoading = true;

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
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
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ["rgb(141,1,248)", "rgb(202,1,111)", "rgb(251,53,1)", "rgb(252,158,2)", "rgb(254,129,3)", "rgb(98,197,47)", "rgb(7,96,237)", "rgb(44,19,248)"];
    this.items = this.seed.map((value, i) => ({
      fillStyle: colors[i] ? colors[i] : colors[i - colors.length],
      // fillStyle: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      text: `Prize ${value}`,
      id: value,
      textFillStyle: "white",
      textFontSize: "16"
    }));
  }

  ngAfterViewInit() {// console.log(this.wheel);
  }

  reset() {
    this.wheel.reset();
  }

  before() {// alert("Your wheel is about to spin");
  }

  spin(prize) {
    var _this = this;

    return (0,C_Users_Sai_Kiran_Documents_hisense_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (prize) {
        _this.idToLandOn = prize;
      } else {
        _this.idToLandOn = _this.seed[Math.floor(Math.random() * _this.seed.length)];
      }

      yield new Promise(resolve => setTimeout(resolve, 0));

      _this.wheel.spin();
    })();
  }

  after() {
    // alert("You have been bamboozled");
    this.audio.nativeElement.play(); // audio.play();

    setTimeout(() => {
      alert(`Congratulations you have won Prize ${this.seed[this.idToLandOn]}`);
    }, 750);
    setTimeout(() => {
      this.wheel.reset();
      this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    }, 1000);
  }

  imageLoaded() {
    this.imageLoading = false;
  }

}

SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
  return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

SpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SpinnerComponent,
  selectors: [["app-spinner"]],
  viewQuery: function SpinnerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_wheel__WEBPACK_IMPORTED_MODULE_2__.NgxWheelComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wheel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
    }
  },
  decls: 7,
  vars: 4,
  consts: [[1, "page__wrapper", "card", 3, "ngClass"], ["src", "../../../assets/party.jpg", 2, "display", "none", 3, "load"], [4, "ngIf"], ["id", "myAudio"], ["myaudio", ""], ["src", "../../../assets/audio/mixkit-fantasy-game-success-notification-270.wav", "type", "audio/ogg"], [1, "spinner__wrapper"], [1, "icon", 3, "click"], [1, "absolute", "spin-btn-wrap"], ["type", "button", 1, "aha-button", "spinner-wheel-spin-button", "spin-btn", "aha-button-xs", "aha-button-primary"], ["width", "40", "height", "40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "name", "play", "viewBox", "0 0 22 24", 1, "path-fill-current", "inline-block"], ["d", "M19.669 10.385L6.199 2.257c-1.094-.66-2.77-.02-2.77 1.613v16.253c0 1.465 1.557 2.348 2.77 1.613l13.47-8.124c1.201-.723 1.205-2.504 0-3.227z", "fill", "#fff"], ["Roulette", "", "pointerStrokeColor", "white", 3, "width", "height", "spinDuration", "items", "innerRadius", "spinAmount", "textOrientation", "textAlignment", "pointerFillColor", "idToLandOn", "onSpinStart", "onSpinComplete"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function SpinnerComponent_Template_img_load_1_listener() {
        return ctx.imageLoaded();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpinnerComponent_ng_container_2_Template, 12, 1, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "audio", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "source", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Your browser does not support the audio element.\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx.imageLoading));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.imageLoading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_wheel__WEBPACK_IMPORTED_MODULE_2__.NgxWheelComponent],
  styles: [".page__wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 80px);\n  width: 100% w;\n  background-image: url('party.jpg');\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  flex-direction: column;\n  text-align: center;\n}\n.page__wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 54px;\n  margin-bottom: 24px;\n  font-weight: bold;\n}\n.page__wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 24px;\n}\n.spinner__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  border-radius: 50%;\n  top: 47.65%;\n  left: 45%;\n}\n.spin-btn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 60px;\n  width: 60px;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #fff;\n  border: 3.2px solid #eff1f7;\n  box-shadow: 0 7.15653px 0 1.78913px rgba(0, 0, 0, 0.13);\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.spin-btn[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-color: #348ef6;\n  border: none;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n}\nsvg[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-wheel-spin-button[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0;\n  border-radius: 100%;\n}\n@media screen and (max-width: 768px) {\n  .spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    top: 48.45%;\n    left: 44%;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    width: 30px !important;\n    height: 30px !important;\n  }\n\n  .spin-btn-wrap[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 50px;\n  }\n\n  .spin-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU2FpJTIwS2lyYW5cXERvY3VtZW50c1xcaGlzZW5zZVxcc3JjXFxhcHBcXHBhZ2VzXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREVJO0VBRUksZUFBQTtFQUNBLG1CQUFBO0FDRFI7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFJQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDTFI7QURVQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdURBQUE7QUNQSjtBRFVBO0VBQ0ksa0JBQUE7QUNQSjtBRFVBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFdBO0VBQ0ksZUFBQTtBQ1JKO0FEWUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDVEo7QURZQTtFQUVRO0lBQ0ksV0FBQTtJQUNBLFNBQUE7RUNWVjs7RURjRTtJQUNJLHNCQUFBO0lBQ0EsdUJBQUE7RUNYTjs7RURjRTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VDWE47O0VEY0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ1hOO0FBQ0YiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlX193cmFwcGVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgd2lkdGg6IDEwMCV3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9wYXJ0eS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGlubmVyX193cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyB3aWR0aDogMzdweDtcclxuICAgICAgICAvLyBoZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb290YmFsbC5zdmcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0b3A6IDQ3LjY1JTtcclxuICAgICAgICBsZWZ0OiA0NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uc3Bpbi1idG4td3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAzLjJweCBzb2xpZCAjZWZmMWY3O1xyXG4gICAgYm94LXNoYWRvdzogMCA3LjE1NjUzcHggMCAxLjc4OTEzcHggcmdiKDAgMCAwIC8gMTMlKTtcclxufVxyXG5cclxuLmFic29sdXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnNwaW4tYnRuIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgLy8gei1pbmRleDogMjA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNDIsIDI0NiwgMSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLnNwaW5uZXItd2hlZWwtc3Bpbi1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc3Bpbm5lcl9fd3JhcHBlciB7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB0b3A6IDQ4LjQ1JTtcclxuICAgICAgICAgICAgbGVmdDogNDQlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW4tYnRuLXdyYXAge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbi1idG4ge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxufSIsIi5wYWdlX193cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XG4gIHdpZHRoOiAxMDAlIHc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvcGFydHkuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhZ2VfX3dyYXBwZXIgaDEge1xuICBmb250LXNpemU6IDU0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhZ2VfX3dyYXBwZXIgaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5zcGlubmVyX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3Bpbm5lcl9fd3JhcHBlciAuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogNDcuNjUlO1xuICBsZWZ0OiA0NSU7XG59XG5cbi5zcGluLWJ0bi13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDMuMnB4IHNvbGlkICNlZmYxZjc7XG4gIGJveC1zaGFkb3c6IDAgNy4xNTY1M3B4IDAgMS43ODkxM3B4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG59XG5cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNwaW4tYnRuIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OGVmNjtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zdmcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcGlubmVyLXdoZWVsLXNwaW4tYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3Bpbm5lcl9fd3JhcHBlciAuaWNvbiB7XG4gICAgdG9wOiA0OC40NSU7XG4gICAgbGVmdDogNDQlO1xuICB9XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNwaW4tYnRuLXdyYXAge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuXG4gIC5zcGluLWJ0biB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59Il19 */"]
});

/***/ }),

/***/ 8169:
/*!*************************************************!*\
  !*** ./src/app/pages/spinner/spinner.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerModule": () => (/* binding */ SpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component */ 8541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_wheel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-wheel */ 1798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '', component: _spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent
    }
];
class SpinnerModule {
}
SpinnerModule.ɵfac = function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); };
SpinnerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SpinnerModule });
SpinnerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            ngx_wheel__WEBPACK_IMPORTED_MODULE_3__.NgxWheelModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        ngx_wheel__WEBPACK_IMPORTED_MODULE_3__.NgxWheelModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_spinner_spinner_module_ts.js.map