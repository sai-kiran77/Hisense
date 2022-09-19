"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=60,exports.ids=[60],exports.modules={76060:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SpinnerModule:()=>SpinnerModule});var TextAlignment,TextAlignment2,TextOrientation,TextOrientation2,common=__webpack_require__(69808),asyncToGenerator=__webpack_require__(15861),core=__webpack_require__(5e3),tslib_es6=__webpack_require__(70655);(TextAlignment2=TextAlignment||(TextAlignment={})).INNER="inner",TextAlignment2.OUTER="outer",TextAlignment2.CENTER="center",(TextOrientation2=TextOrientation||(TextOrientation={})).HORIZONTAL="horizontal",TextOrientation2.VERTICAL="vertical",TextOrientation2.CURVED="curved";let NgxWheelComponent=__name(class{constructor(){this.onSpinStart=new core.vpe,this.onSpinComplete=new core.vpe,this.completedSpin=!1,this.isSpinning=!1}reset(){this.wheel.stopAnimation(!1),this.wheel.rotationAngle=0,this.wheel.ctx.clearRect(0,0,this.wheel.ctx.canvas.width,this.wheel.ctx.canvas.height),this.isSpinning=!1,this.completedSpin=!1,this.ngAfterViewInit()}ngOnInit(){}spin(){if(this.completedSpin||this.isSpinning)return;this.isSpinning=!0,this.onSpinStart.emit(null);const segmentToLandOn=this.wheel.segments.filter(x=>!!x).find(({id})=>this.idToLandOn===id),segmentTheta=segmentToLandOn.endAngle-segmentToLandOn.startAngle;this.wheel.animation.stopAngle=segmentToLandOn.endAngle-segmentTheta/4,this.wheel.startAnimation(),setTimeout(()=>{this.completedSpin=!0,this.onSpinComplete.emit(null)},1e3*this.spinDuration)}ngAfterViewInit(){const segments=this.items;this.wheel=new Winwheel({numSegments:segments.length,segments,innerRadius:this.innerRadius||0,outerRadius:this.height/2-20,centerY:this.height/2+20,textOrientation:this.textOrientation,textAligment:this.textAlignment,animation:{type:"spinToStop",duration:this.spinDuration,spins:this.spinAmount}}),TweenMax.ticker.addEventListener("tick",this.drawPointer.bind(this))}ngOnDestroy(){TweenMax.ticker.removeEventListener("tick")}drawPointer(){let c=this.wheel.ctx;c&&(c.save(),c.lineWidth=2,c.strokeStyle=this.pointerStrokeColor,c.fillStyle=this.pointerFillColor,c.beginPath(),c.moveTo(this.width/2-20,2),c.lineTo(this.width/2+20,2),c.lineTo(this.width/2,42),c.lineTo(this.width/2-20,2),c.stroke(),c.fill(),c.restore())}},"NgxWheelComponent");NgxWheelComponent.\u0275fac=__name(function(t){return new(t||NgxWheelComponent)},"NgxWheelComponent_Factory"),NgxWheelComponent.\u0275cmp=core.Xpm({type:NgxWheelComponent,selectors:[["ngx-wheel"]],inputs:{height:"height",idToLandOn:"idToLandOn",width:"width",items:"items",spinDuration:"spinDuration",spinAmount:"spinAmount",innerRadius:"innerRadius",pointerStrokeColor:"pointerStrokeColor",pointerFillColor:"pointerFillColor",disableSpinOnClick:"disableSpinOnClick",textOrientation:"textOrientation",textAlignment:"textAlignment"},outputs:{onSpinStart:"onSpinStart",onSpinComplete:"onSpinComplete"},decls:2,vars:2,consts:[["id","canvas",3,"width","height","click"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"canvas",0),core.NdJ("click",__name(function(){return!ctx.disableSpinOnClick&&ctx.spin()},"NgxWheelComponent_Template_canvas_click_0_listener")),core._uU(1," \xa0\xa0\xa0\xa0Canvas not supported, use another browser. "),core.qZA()),2&rf&&core.Q6J("width",ctx.width)("height",ctx.height)},"NgxWheelComponent_Template"),encapsulation:2}),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"height",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"idToLandOn",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"width",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"items",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"spinDuration",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"spinAmount",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"innerRadius",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"pointerStrokeColor",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"pointerFillColor",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"disableSpinOnClick",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"textOrientation",void 0),(0,tslib_es6.gn)([(0,core.IIB)()],NgxWheelComponent.prototype,"textAlignment",void 0),(0,tslib_es6.gn)([(0,core.r_U)()],NgxWheelComponent.prototype,"onSpinStart",void 0),(0,tslib_es6.gn)([(0,core.r_U)()],NgxWheelComponent.prototype,"onSpinComplete",void 0);let NgxWheelModule=__name(class{},"NgxWheelModule");NgxWheelModule.\u0275fac=__name(function(t){return new(t||NgxWheelModule)},"NgxWheelModule_Factory"),NgxWheelModule.\u0275mod=core.oAB({type:NgxWheelModule}),NgxWheelModule.\u0275inj=core.cJS({imports:[[]]});const _c0=["myaudio"];function SpinnerComponent_ng_container_2_ng_container_11_Template(rf,ctx){if(1&rf){const _r4=core.EpF();core.O4$(),core.kcU(),core.ynx(0),core.TgZ(1,"ngx-wheel",12),core.NdJ("onSpinStart",__name(function(){return core.CHM(_r4),core.oxw(2).before()},"SpinnerComponent_ng_container_2_ng_container_11_Template_ngx_wheel_onSpinStart_1_listener"))("onSpinComplete",__name(function(){return core.CHM(_r4),core.oxw(2).after()},"SpinnerComponent_ng_container_2_ng_container_11_Template_ngx_wheel_onSpinComplete_1_listener")),core.qZA(),core.BQk()}if(2&rf){const ctx_r2=core.oxw(2);core.xp6(1),core.Q6J("width",ctx_r2.width)("height",ctx_r2.height)("spinDuration",8)("items",ctx_r2.items)("innerRadius",20)("spinAmount",10)("textOrientation",ctx_r2.textOrientation)("textAlignment",ctx_r2.textAlignment)("pointerFillColor","rgba(59,130,246,0.5)")("idToLandOn",ctx_r2.idToLandOn)}}function SpinnerComponent_ng_container_2_Template(rf,ctx){if(1&rf){const _r7=core.EpF();core.ynx(0),core.TgZ(1,"h1"),core._uU(2,"Wheel of Fortune"),core.qZA(),core.TgZ(3,"h3"),core._uU(4,"Try your luck by participating below"),core.qZA(),core.TgZ(5,"div",6)(6,"div",7),core.NdJ("click",__name(function(){return core.CHM(_r7),core.oxw().spin()},"SpinnerComponent_ng_container_2_Template_div_click_6_listener")),core.TgZ(7,"div",8)(8,"button",9),core.O4$(),core.TgZ(9,"svg",10),core._UZ(10,"path",11),core.qZA()()()(),core.YNc(11,SpinnerComponent_ng_container_2_ng_container_11_Template,2,10,"ng-container",2),core.qZA(),core.BQk()}if(2&rf){const ctx_r0=core.oxw();core.xp6(11),core.Q6J("ngIf",ctx_r0.width&&ctx_r0.height)}}__name(SpinnerComponent_ng_container_2_ng_container_11_Template,"SpinnerComponent_ng_container_2_ng_container_11_Template"),__name(SpinnerComponent_ng_container_2_Template,"SpinnerComponent_ng_container_2_Template");const _c1=__name(function(a0){return{"is-loading":a0}},"_c1");class SpinnerComponent{constructor(platformId){this.platformId=platformId,this.seed=[...Array(12).keys()],this.items=[],this.textOrientation=TextOrientation.HORIZONTAL,this.textAlignment=TextAlignment.OUTER,this.imageLoading=!0,(0,common.NF)(this.platformId)&&(window.innerWidth<=768?(this.height=400,this.width=400):(this.height=500,this.width=500))}ngOnInit(){this.idToLandOn=this.seed[Math.floor(Math.random()*this.seed.length)];const colors=["rgb(141,1,248)","rgb(202,1,111)","rgb(251,53,1)","rgb(252,158,2)","rgb(254,129,3)","rgb(98,197,47)","rgb(7,96,237)","rgb(44,19,248)"];this.items=this.seed.map((value,i)=>({fillStyle:colors[i]?colors[i]:colors[i-colors.length],text:`Prize ${value}`,id:value,textFillStyle:"white",textFontSize:"16"}))}ngAfterViewInit(){}reset(){this.wheel.reset()}before(){}spin(prize){var _this=this;return(0,asyncToGenerator.Z)(function*(){_this.idToLandOn=prize||_this.seed[Math.floor(Math.random()*_this.seed.length)],yield new Promise(resolve=>setTimeout(resolve,0)),_this.wheel.spin()})()}after(){this.audio.nativeElement.play(),setTimeout(()=>{alert(`Congratulations you have won Prize ${this.seed[this.idToLandOn]}`)},750),setTimeout(()=>{this.wheel.reset(),this.idToLandOn=this.seed[Math.floor(Math.random()*this.seed.length)]},1e3)}imageLoaded(){this.imageLoading=!1}}__name(SpinnerComponent,"SpinnerComponent"),SpinnerComponent.\u0275fac=__name(function(t){return new(t||SpinnerComponent)(core.Y36(core.Lbi))},"SpinnerComponent_Factory"),SpinnerComponent.\u0275cmp=core.Xpm({type:SpinnerComponent,selectors:[["app-spinner"]],viewQuery:__name(function(rf,ctx){if(1&rf&&(core.Gf(NgxWheelComponent,5),core.Gf(_c0,5)),2&rf){let _t;core.iGM(_t=core.CRH())&&(ctx.wheel=_t.first),core.iGM(_t=core.CRH())&&(ctx.audio=_t.first)}},"SpinnerComponent_Query"),decls:7,vars:4,consts:[[1,"page__wrapper","card",3,"ngClass"],["src","../../../assets/party.jpg",2,"display","none",3,"load"],[4,"ngIf"],["id","myAudio"],["myaudio",""],["src","../../../assets/audio/mixkit-fantasy-game-success-notification-270.wav","type","audio/ogg"],[1,"spinner__wrapper"],[1,"icon",3,"click"],[1,"absolute","spin-btn-wrap"],["type","button",1,"aha-button","spinner-wheel-spin-button","spin-btn","aha-button-xs","aha-button-primary"],["width","40","height","40","fill","none","xmlns","http://www.w3.org/2000/svg","name","play","viewBox","0 0 22 24",1,"path-fill-current","inline-block"],["d","M19.669 10.385L6.199 2.257c-1.094-.66-2.77-.02-2.77 1.613v16.253c0 1.465 1.557 2.348 2.77 1.613l13.47-8.124c1.201-.723 1.205-2.504 0-3.227z","fill","#fff"],["Roulette","","pointerStrokeColor","white",3,"width","height","spinDuration","items","innerRadius","spinAmount","textOrientation","textAlignment","pointerFillColor","idToLandOn","onSpinStart","onSpinComplete"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"img",1),core.NdJ("load",__name(function(){return ctx.imageLoaded()},"SpinnerComponent_Template_img_load_1_listener")),core.qZA(),core.YNc(2,SpinnerComponent_ng_container_2_Template,12,1,"ng-container",2),core.qZA(),core.TgZ(3,"audio",3,4),core._UZ(5,"source",5),core._uU(6," Your browser does not support the audio element.\n"),core.qZA()),2&rf&&(core.Q6J("ngClass",core.VKq(2,_c1,ctx.imageLoading)),core.xp6(2),core.Q6J("ngIf",!ctx.imageLoading))},"SpinnerComponent_Template"),directives:[common.mk,common.O5,NgxWheelComponent],styles:[".page__wrapper[_ngcontent-%COMP%]{height:calc(100vh - 80px);width:100% w;background-image:url(party.30dbb92067022a3d.jpg);background-size:cover;display:flex;justify-content:center;align-items:center;color:#fff;flex-direction:column;text-align:center}.page__wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:54px;margin-bottom:24px;font-weight:700}.page__wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;margin-bottom:24px}.spinner__wrapper[_ngcontent-%COMP%]{position:relative;cursor:pointer}.spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer;position:absolute;border-radius:50%;top:47.65%;left:45%}.spin-btn-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:60px;width:60px;cursor:pointer;border-radius:50%;background:#fff;border:3.2px solid #eff1f7;box-shadow:0 7.15653px 0 1.78913px #00000021}.absolute[_ngcontent-%COMP%]{position:absolute}.spin-btn[_ngcontent-%COMP%]{width:50px;height:50px;background-color:#348ef6;border:none;display:flex;cursor:pointer;justify-content:center;align-items:center}svg[_ngcontent-%COMP%]{cursor:pointer}.spinner-wheel-spin-button[_ngcontent-%COMP%]{min-width:0;padding:0;border-radius:100%}@media screen and (max-width: 768px){.spinner__wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{top:48.45%;left:44%}svg[_ngcontent-%COMP%]{width:30px!important;height:30px!important}.spin-btn-wrap[_ngcontent-%COMP%]{height:50px;width:50px}.spin-btn[_ngcontent-%COMP%]{width:40px;height:40px}}"]});var router=__webpack_require__(74202);const routes=[{path:"",component:SpinnerComponent}];class SpinnerModule{}__name(SpinnerModule,"SpinnerModule"),SpinnerModule.\u0275fac=__name(function(t){return new(t||SpinnerModule)},"SpinnerModule_Factory"),SpinnerModule.\u0275mod=core.oAB({type:SpinnerModule}),SpinnerModule.\u0275inj=core.cJS({imports:[[common.ez,NgxWheelModule,router.Bz.forChild(routes)]]})}};