"use strict";(self.webpackChunkhisense=self.webpackChunkhisense||[]).push([[875],{9875:(E,f,r)=>{r.r(f),r.d(f,{FifaEventModule:()=>C});var p=r(9808),t=r(4893),c=r(2340),_=r(6007),m=r(5830),d=r(7073);function x(i,o){if(1&i&&(t.TgZ(0,"div",16)(1,"a",17)(2,"picture"),t._UZ(3,"source",18)(4,"img",19),t.qZA()()()),2&i){const a=o.$implicit,e=o.index;t.xp6(1),t.Q6J("routerLink",a.redirectTo),t.xp6(2),t.Q6J("srcset",a.desktop_image_full_url,t.LSH),t.xp6(1),t.Q6J("src",a.mobile_image_full_url,t.LSH)("alt","fifa banner "+(e+1))}}const h=function(i){return{active:i}};function b(i,o){if(1&i){const a=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){const s=t.CHM(a).$implicit;return t.oxw().changeTab(s)}),t._uU(1),t.qZA()}if(2&i){const a=o.$implicit,e=t.oxw();t.Q6J("ngClass",t.VKq(2,h,a==e.currentTab)),t.xp6(1),t.Oqu(a)}}function v(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"img",28),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&i){const a=o.$implicit;t.xp6(1),t.Q6J("src",a.flag,t.LSH)("alt",a.name),t.xp6(2),t.Oqu(a.name)}}function w(i,o){if(1&i&&(t.TgZ(0,"div",24)(1,"div",25),t._uU(2),t.qZA(),t.TgZ(3,"div",26),t.YNc(4,v,4,3,"div",27),t.qZA()()),2&i){const a=o.$implicit;t.xp6(2),t.Oqu(a.heading),t.xp6(2),t.Q6J("ngForOf",a.data)}}function q(i,o){if(1&i&&(t.TgZ(0,"section",21)(1,"section",22),t.YNc(2,w,5,2,"div",23),t.qZA()()),2&i){const a=t.oxw();t.xp6(2),t.Q6J("ngForOf",a.groups)}}function y(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&i){const a=o.$implicit;t.xp6(2),t.Oqu(a.user.name),t.xp6(2),t.Oqu(a.user.phone),t.xp6(2),t.Oqu(a.spin_wheel_prize.description)}}function A(i,o){if(1&i&&(t.TgZ(0,"table")(1,"tr",34)(2,"th",35),t._uU(3,"Name"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Phone number"),t.qZA(),t.TgZ(6,"th",36),t._uU(7,"Prize won"),t.qZA()(),t.YNc(8,y,7,3,"tr",27),t.qZA()),2&i){const a=t.oxw(3);t.xp6(8),t.Q6J("ngForOf",a.registrations)}}function T(i,o){1&i&&(t.TgZ(0,"div",37),t._uU(1,"No winners found! Check back later"),t.qZA())}function F(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,A,9,1,"table",15),t.YNc(2,T,2,0,"div",33),t.qZA()),2&i){const a=t.oxw(2);t.xp6(1),t.Q6J("ngIf",a.registrations.length),t.xp6(1),t.Q6J("ngIf",!a.registrations.length)}}function k(i,o){if(1&i){const a=t.EpF();t.TgZ(0,"section")(1,"picture"),t._UZ(2,"source",18)(3,"img",29),t.qZA(),t.TgZ(4,"section",30)(5,"div",31)(6,"h3"),t._uU(7,"Daily Winners"),t.qZA(),t.TgZ(8,"input",32),t.NdJ("change",function(n){return t.CHM(a),t.oxw().getRegistrations(n)}),t.qZA(),t.YNc(9,F,3,2,"div",15),t.qZA()()()}if(2&i){const a=t.oxw();t.xp6(2),t.Q6J("srcset",a.environment.baseApiUrl+"/media/pages/campaigns/perfect-match-2022/steps-to-participate-desktop.webp",t.LSH),t.xp6(1),t.Q6J("src",a.environment.baseApiUrl+"/media/pages/campaigns/perfect-match-2022/steps-to-participate-mobile.webp",t.LSH),t.xp6(6),t.Q6J("ngIf",a.registrations)}}const Z=[{path:"",component:(()=>{class i{constructor(a,e,n){this.platformId=a,this.state=e,this.api=n,this.days="00",this.hours="00",this.minutes="00",this.seconds="00",this.tabs=["About FIFA 2022","Spot Hisense","Spin the wheel"],this.currentTab="About FIFA 2022",this.slides=[{mobile_image_full_url:`${c.N.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-1-mobile.webp`,desktop_image_full_url:`${c.N.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-1-desktop.webp`,redirectTo:null},{mobile_image_full_url:"assets/spot-hisense-mobile-banner-with-button.webp",desktop_image_full_url:"assets/spot-hisense.webp",redirectTo:"/FIFA-2022/participate"},{mobile_image_full_url:`${c.N.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-2-mobile.webp`,desktop_image_full_url:`${c.N.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-2-desktop.webp`,redirectTo:"/perfect-match-2022"}],this.groups=[{heading:"Group A",data:[{name:"Qatar",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/QAT?tx=c_fill,g_auto,q_auto"},{name:"Ecuador",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ECU?tx=c_fill,g_auto,q_auto"},{name:"Senegal",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SEN?tx=c_fill,g_auto,q_auto"},{name:"Netherlands",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/NED?tx=c_fill,g_auto,q_auto"}]},{heading:"Group B",data:[{name:"England",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ENG?tx=c_fill,g_auto,q_auto"},{name:"IR Iran",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/IRN?tx=c_fill,g_auto,q_auto"},{name:"USA",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto"},{name:"Wales",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/WAL?tx=c_fill,g_auto,q_auto"}]},{heading:"Group C",data:[{name:"Argentina",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ARG?tx=c_fill,g_auto,q_auto"},{name:"Saudi Arabia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KSA?tx=c_fill,g_auto,q_auto"},{name:"Mexico",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MEX?tx=c_fill,g_auto,q_auto"},{name:"Poland",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POL?tx=c_fill,g_auto,q_auto"}]},{heading:"Group D",data:[{name:"France",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/FRA?tx=c_fill,g_auto,q_auto"},{name:"Denmark",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/DEN?tx=c_fill,g_auto,q_auto"},{name:"Tunisia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/TUN?tx=c_fill,g_auto,q_auto"},{name:"Australia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/AUS?tx=c_fill,g_auto,q_auto"}]},{heading:"Group E",data:[{name:"Spain",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ESP?tx=c_fill,g_auto,q_auto"},{name:"Germany",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GER?tx=c_fill,g_auto,q_auto"},{name:"Japan",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/JPN?tx=c_fill,g_auto,q_auto"},{name:"Costa Rica",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRC?tx=c_fill,g_auto,q_auto"}]},{heading:"Group F",data:[{name:"Belgium",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BEL?tx=c_fill,g_auto,q_auto"},{name:"Canada",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CAN?tx=c_fill,g_auto,q_auto"},{name:"Morocco",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MAR?tx=c_fill,g_auto,q_auto"},{name:"Croatia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRO?tx=c_fill,g_auto,q_auto"}]},{heading:"Group G",data:[{name:"Brazil",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto"},{name:"Serbia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SRB?tx=c_fill,g_auto,q_auto"},{name:"Switzerland",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SUI?tx=c_fill,g_auto,q_auto"},{name:"Cameroon",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CMR?tx=c_fill,g_auto,q_auto"}]},{heading:"Group H",data:[{name:"Portugal",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POR?tx=c_fill,g_auto,q_auto"},{name:"Ghana",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GHA?tx=c_fill,g_auto,q_auto"},{name:"Uruguay",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/URU?tx=c_fill,g_auto,q_auto"},{name:"Korea Republic",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KOR?tx=c_fill,g_auto,q_auto"}]}],this.environment=c.N,this.state.mobileNavToggle.next(!1),new Date,this.yesterdayDate="2022-10-25"}ngOnInit(){setTimeout(()=>{this.swiper=new Swiper(".mySwiperHome",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:6e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),this.swiper.on("slideChange",a=>{let e=a.activeIndex;4==e&&(e=1),0==e&&(e=3),this.currentTab=this.tabs[e-1]})}),this.getRegistrations({target:{value:this.yesterdayDate}})}ngAfterViewInit(){if((0,p.NF)(this.platformId)){let a=new Date("Nov 20, 2022 16:00:00").getTime();this.x=setInterval(()=>{let e=(new Date).getTime(),n=a-e;const s=Math.floor(n/864e5).toString().padStart(2,"0"),l=Math.floor(n%864e5/36e5).toString().padStart(2,"0"),u=Math.floor(n%36e5/6e4).toString().padStart(2,"0");let g=Math.floor(n%6e4/1e3);this.days!==s&&(this.days=s),this.hours!==l&&(this.hours=l),this.minutes!==u&&(this.minutes=u),this.seconds!==g&&(this.seconds=g),n<0&&clearInterval(this.x)},1e3)}}getRegistrations(a){this.api.getRegistrations({date:a.target.value,user_progress:"prize_winners"}).subscribe(n=>{console.log(n),this.registrations=n.data.length?n.data:[]},n=>{console.log(n)})}changeTab(a){this.currentTab=a;const e=this.tabs.findIndex(n=>n==a);this.swiper.slideTo(e+1)}ngOnDestroy(){this.x&&clearInterval(this.x)}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(t.Lbi),t.Y36(_.O),t.Y36(m.s))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-fifa-event"]],decls:16,vars:4,consts:[[1,"fifa__event__container"],[1,"main-visual","slider","slick-initialized","slick-slider","slick-dotted"],[1,"slick-list","draggable"],[1,"slick-track"],[1,"swiper","mySwiperHome"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-button-next"],[1,"swiper-button-prev"],[1,"swiper-pagination"],[1,"flex","fifa__tabs__container"],[1,"tabs"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"ngClass","click",4,"ngFor","ngForOf"],["style","margin-top: 10px;",4,"ngIf"],[4,"ngIf"],[1,"swiper-slide"],[2,"width","100%",3,"routerLink"],["media","(min-width:768px)",3,"srcset"],[1,"ls-bg",2,"width","100%",3,"src","alt"],[1,"list-group-item","list-group-item-action",3,"ngClass","click"],[2,"margin-top","10px"],[1,"groups"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card__heading"],[1,"card__body"],[4,"ngFor","ngForOf"],["width","58","height","36",3,"src","alt"],["alt","steps to participate",1,"ls-bg",2,"width","100%",3,"src"],[1,"date__picker"],[1,"wrapper"],["min","2022-09-26","max","2022-10-25","value","2022-10-25","type","date","name","date","id","date",3,"change"],["class","no-records",4,"ngIf"],[2,"background","#00b3ac"],[2,"border-top-left-radius","8px"],[2,"border-top-right-radius","8px"],[1,"no-records"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.YNc(6,x,5,4,"div",6),t.qZA(),t._UZ(7,"div",7)(8,"div",8)(9,"div",9),t.qZA()()()(),t.TgZ(10,"div",10)(11,"div",11)(12,"div",12),t.YNc(13,b,2,4,"a",13),t.qZA()()(),t.YNc(14,q,3,1,"section",14),t.YNc(15,k,10,3,"section",15),t.qZA()),2&a&&(t.xp6(6),t.Q6J("ngForOf",e.slides),t.xp6(7),t.Q6J("ngForOf",e.tabs),t.xp6(1),t.Q6J("ngIf","About FIFA 2022"==e.currentTab),t.xp6(1),t.Q6J("ngIf","Spin the wheel"==e.currentTab))},directives:[p.sg,d.yS,p.mk,p.O5],styles:[".f-24{font-size:36px}.countdown__wrapper{margin-top:-10px;padding:48px;background-color:#b30007;color:#fff}.countdown__container{display:flex;justify-content:center;flex-direction:column;align-items:center}.count__container{display:flex;gap:5rem;text-align:center;margin-top:36px;align-items:center}svg{fill:#e60009!important}.count{font-size:24px;font-weight:700}@media screen and (max-width: 768px){.count__container{gap:1rem}.count{font-size:16px}.f-24{font-size:24px}.category{font-size:12px}.d-sm-none{display:none}}.groups{background-color:#f3f3f3;padding:72px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:2.5rem;gap:2.5rem}.card{background-color:#00aaa6;color:#fff;border-radius:12px;padding-top:16px;text-align:center}.card .card__heading{font-size:20px;font-weight:700;margin-bottom:6px}.card .card__body{background-color:#fff;color:#000;border-radius:12px;display:flex;gap:2rem;flex-direction:column;padding:16px}.card .card__body div{display:flex;justify-content:flex-start;align-items:center;gap:1rem;white-space:nowrap}@media screen and (max-width: 1100px){.groups img{width:36px;height:24px}}@media screen and (max-width: 1000px){.groups{grid-template-columns:1fr 1fr 1fr}}@media screen and (max-width: 767px){.groups{grid-template-columns:1fr 1fr}}@media screen and (max-width: 520px){.groups{grid-template-columns:1fr}}.date__picker{background-color:#fff}.date__picker .wrapper{width:80%;margin:0 auto;padding:40px 0;display:flex;justify-content:center;flex-direction:column;text-align:center;align-items:center;gap:2rem}.date__picker .wrapper h3{font-size:36px}.date__picker .wrapper input{width:200px;margin:auto;padding:8px 16px;font-size:15px;border:1px solid #00AAA6;border-radius:6px}.date__picker .wrapper table{border-collapse:collapse;width:100%;overflow-x:auto;min-width:500px;width:60%;margin:auto;box-shadow:#00000059 0 5px 15px}.date__picker .wrapper table .telephone{color:#00aaa6!important}.date__picker .wrapper table tr{width:100%}.date__picker .wrapper table tr:last-child{border-bottom:3px solid #00AAA6}.date__picker .wrapper td,.date__picker .wrapper th{border-bottom:.5px solid #ccc!important;border-top:.5px solid #ccc!important;text-align:left!important;padding:8px 24px!important;white-space:nowrap!important}.date__picker .wrapper th{font-size:14px;font-weight:700;color:#fff;border-top:none!important}@media screen and (max-width: 576px){.date__picker .wrapper{width:70%}.date__picker .wrapper table{overflow-x:auto;display:block;margin:auto;min-width:auto}.date__picker .wrapper table tr{width:100%}}.ls-bg{cursor:pointer}.swiper-pagination{bottom:0px!important}.swiper-pagination-bullet{color:#09cbc6!important;border:none!important;width:10px!important;height:10px!important;outline:none!important;margin:7px!important;border-radius:50%!important;background:transparent!important;border:2px solid #09cbc6!important;transition:background-color .5s!important;cursor:pointer!important}.swiper-pagination-bullet:before{display:none!important}.swiper-pagination-bullet.swiper-pagination-bullet-active{background:#00AAA6!important}.fifa__tabs__container{display:flex;justify-content:center;align-content:center;padding:16px 0}.fifa__tabs__container .tabs{border-radius:50px;padding:20px;box-shadow:#0000003d 0 3px 8px}.fifa__tabs__container .list-group{display:flex;text-align:center;justify-content:center;width:100%;gap:16px}.fifa__tabs__container .list-group a{padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;white-space:nowrap;border:1.2px solid #09cbc6;border-radius:16px}.fifa__tabs__container .list-group .active{color:#fff;background-color:#00aaa6!important;border-color:#00aaa6!important}@media screen and (max-width: 768px){.fifa__tabs__container .tabs{padding:12px}.fifa__tabs__container .list-group{gap:12px}.fifa__tabs__container .list-group a{padding:.75rem 1rem;border:1.2px solid #09cbc6;border-radius:16px}}\n"],encapsulation:2}),i})()}];let C=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.ez,d.Bz.forChild(Z)]]}),i})()}}]);