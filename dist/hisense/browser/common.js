"use strict";
(self["webpackChunkhisense"] = self["webpackChunkhisense"] || []).push([["common"],{

/***/ 1798:
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-wheel/__ivy_ngcc__/fesm2015/ngx-wheel.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxWheelComponent": () => (/* binding */ NgxWheelComponent),
/* harmony export */   "NgxWheelModule": () => (/* binding */ NgxWheelModule),
/* harmony export */   "TextAlignment": () => (/* binding */ TextAlignment),
/* harmony export */   "TextOrientation": () => (/* binding */ TextOrientation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);




var TextAlignment;
(function (TextAlignment) {
    TextAlignment["INNER"] = "inner";
    TextAlignment["OUTER"] = "outer";
    TextAlignment["CENTER"] = "center";
})(TextAlignment || (TextAlignment = {}));
var TextOrientation;
(function (TextOrientation) {
    TextOrientation["HORIZONTAL"] = "horizontal";
    TextOrientation["VERTICAL"] = "vertical";
    TextOrientation["CURVED"] = "curved";
})(TextOrientation || (TextOrientation = {}));
let NgxWheelComponent = class NgxWheelComponent {
    constructor() {
        this.onSpinStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onSpinComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.completedSpin = false;
        this.isSpinning = false;
    }
    reset() {
        this.wheel.stopAnimation(false);
        this.wheel.rotationAngle = 0;
        this.wheel.ctx.clearRect(0, 0, this.wheel.ctx.canvas.width, this.wheel.ctx.canvas.height);
        this.isSpinning = false;
        this.completedSpin = false;
        this.ngAfterViewInit();
    }
    ngOnInit() {
    }
    spin() {
        if (this.completedSpin || this.isSpinning)
            return;
        this.isSpinning = true;
        this.onSpinStart.emit(null);
        const segmentToLandOn = this.wheel.segments.filter(x => !!x).find(({ id }) => this.idToLandOn === id);
        const segmentTheta = segmentToLandOn.endAngle - segmentToLandOn.startAngle;
        this.wheel.animation.stopAngle = segmentToLandOn.endAngle - (segmentTheta / 4);
        this.wheel.startAnimation();
        setTimeout(() => {
            this.completedSpin = true;
            this.onSpinComplete.emit(null);
        }, this.spinDuration * 1000);
    }
    ngAfterViewInit() {
        const segments = this.items;
        // @ts-ignore
        this.wheel = new Winwheel({
            numSegments: segments.length,
            segments,
            innerRadius: this.innerRadius || 0,
            outerRadius: (this.height / 2) - 20,
            centerY: (this.height / 2) + 20,
            textOrientation: this.textOrientation,
            textAligment: this.textAlignment,
            animation: {
                type: 'spinToStop',
                duration: this.spinDuration,
                spins: this.spinAmount // The number of complete 360 degree rotations the wheel is to do.
            }
        });
        // @ts-ignore
        TweenMax.ticker.addEventListener("tick", this.drawPointer.bind(this));
    }
    ngOnDestroy() {
        // @ts-ignore
        TweenMax.ticker.removeEventListener("tick");
    }
    drawPointer() {
        let c = this.wheel.ctx;
        // Create pointer.
        if (c) {
            c.save();
            c.lineWidth = 2;
            c.strokeStyle = this.pointerStrokeColor;
            c.fillStyle = this.pointerFillColor;
            c.beginPath();
            c.moveTo((this.width / 2) - 20, 2);
            c.lineTo((this.width / 2) + 20, 2);
            c.lineTo((this.width / 2), 42);
            c.lineTo((this.width / 2) - 20, 2);
            c.stroke();
            c.fill();
            c.restore();
        }
    }
};
NgxWheelComponent.ɵfac = function NgxWheelComponent_Factory(t) { return new (t || NgxWheelComponent)(); };
NgxWheelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxWheelComponent, selectors: [["ngx-wheel"]], inputs: { height: "height", idToLandOn: "idToLandOn", width: "width", items: "items", spinDuration: "spinDuration", spinAmount: "spinAmount", innerRadius: "innerRadius", pointerStrokeColor: "pointerStrokeColor", pointerFillColor: "pointerFillColor", disableSpinOnClick: "disableSpinOnClick", textOrientation: "textOrientation", textAlignment: "textAlignment" }, outputs: { onSpinStart: "onSpinStart", onSpinComplete: "onSpinComplete" }, decls: 2, vars: 2, consts: [["id", "canvas", 3, "width", "height", "click"]], template: function NgxWheelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxWheelComponent_Template_canvas_click_0_listener() { return !ctx.disableSpinOnClick && ctx.spin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0\u00A0\u00A0Canvas not supported, use another browser. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    } }, encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "height", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "idToLandOn", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "width", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "items", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "spinDuration", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "spinAmount", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "innerRadius", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "pointerStrokeColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "pointerFillColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "disableSpinOnClick", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "textOrientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], NgxWheelComponent.prototype, "textAlignment", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], NgxWheelComponent.prototype, "onSpinStart", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], NgxWheelComponent.prototype, "onSpinComplete", void 0);

let NgxWheelModule = class NgxWheelModule {
};
NgxWheelModule.ɵfac = function NgxWheelModule_Factory(t) { return new (t || NgxWheelModule)(); };
NgxWheelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxWheelModule });
NgxWheelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxWheelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-wheel',
                template: `
    <canvas (click)='!disableSpinOnClick && spin()' id='canvas' [width]='width' [height]='height'>
        Canvas not supported, use another browser.
    </canvas>
`
            }]
    }], function () { return []; }, { onSpinStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onSpinComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], idToLandOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], spinDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], spinAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], innerRadius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pointerStrokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pointerFillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disableSpinOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], textOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], textAlignment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxWheelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [NgxWheelComponent],
                imports: [],
                exports: [NgxWheelComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxWheelModule, { declarations: [NgxWheelComponent], exports: [NgxWheelComponent] }); })();

/*
 * Public API Surface of ngx-wheel
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 2566:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeWhile": () => (/* binding */ takeWhile)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);


function takeWhile(predicate, inclusive = false) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
        let index = 0;
        source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, (value) => {
            const result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}


/***/ }),

/***/ 1670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=common.js.map