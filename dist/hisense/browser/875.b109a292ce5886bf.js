"use strict";(self.webpackChunkhisense=self.webpackChunkhisense||[]).push([[875],{9875:(L,d,s)=>{s.r(d),s.d(d,{FifaEventModule:()=>U});var p=s(9808),t=s(1223),c=s(2340),u=s(6007),_=s(5830);function m(i,e){if(1&i&&(t.TgZ(0,"div",16)(1,"a",17)(2,"picture"),t._UZ(3,"source",18)(4,"img",19),t.qZA()()()),2&i){const a=e.$implicit;t.xp6(3),t.Q6J("srcset",a.desktop_image_full_url,t.LSH),t.xp6(1),t.Q6J("src",a.mobile_image_full_url,t.LSH)}}const x=function(i){return{active:i}};function h(i,e){if(1&i){const a=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){const r=t.CHM(a).$implicit;return t.oxw().changeTab(r)}),t._uU(1),t.qZA()}if(2&i){const a=e.$implicit,n=t.oxw();t.Q6J("ngClass",t.VKq(2,x,a==n.currentTab)),t.xp6(1),t.Oqu(a)}}function v(i,e){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"img",39),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&i){const a=e.$implicit;t.xp6(1),t.Q6J("src",a.flag,t.LSH)("alt",a.name),t.xp6(2),t.Oqu(a.name)}}function w(i,e){if(1&i&&(t.TgZ(0,"div",35)(1,"div",36),t._uU(2),t.qZA(),t.TgZ(3,"div",37),t.YNc(4,v,4,3,"div",38),t.qZA()()),2&i){const a=e.$implicit;t.xp6(2),t.Oqu(a.heading),t.xp6(2),t.Q6J("ngForOf",a.data)}}function b(i,e){if(1&i&&(t.TgZ(0,"section",21)(1,"section",22)(2,"div",23)(3,"div")(4,"h3",24),t._uU(5," Tournament starts in "),t.qZA()(),t.TgZ(6,"div")(7,"div",25),t.O4$(),t.TgZ(8,"svg",26),t._UZ(9,"path",27),t.qZA(),t.kcU(),t.TgZ(10,"div")(11,"div",28),t._uU(12),t.qZA(),t.TgZ(13,"div",29),t._uU(14,"Days"),t.qZA()(),t.O4$(),t.TgZ(15,"svg",30),t._UZ(16,"path",31),t.qZA(),t.kcU(),t.TgZ(17,"div")(18,"div",28),t._uU(19),t.qZA(),t.TgZ(20,"div",29),t._uU(21,"Hours"),t.qZA()(),t.O4$(),t.TgZ(22,"svg",30),t._UZ(23,"path",31),t.qZA(),t.kcU(),t.TgZ(24,"div")(25,"div",28),t._uU(26),t.qZA(),t.TgZ(27,"div",29),t._uU(28,"Minutes"),t.qZA()(),t.O4$(),t.TgZ(29,"svg",30),t._UZ(30,"path",31),t.qZA(),t.kcU(),t.TgZ(31,"div")(32,"div",28),t._uU(33),t.qZA(),t.TgZ(34,"div",29),t._uU(35,"Seconds"),t.qZA()(),t.O4$(),t.TgZ(36,"svg",32),t._UZ(37,"path",27),t.qZA()()()()(),t.kcU(),t.TgZ(38,"section",33),t.YNc(39,w,5,2,"div",34),t.qZA()()),2&i){const a=t.oxw();t.xp6(12),t.Oqu(a.days),t.xp6(7),t.Oqu(a.hours),t.xp6(7),t.Oqu(a.minutes),t.xp6(7),t.Oqu(a.seconds),t.xp6(6),t.Q6J("ngForOf",a.groups)}}function q(i,e){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&i){const a=e.$implicit;t.xp6(2),t.Oqu(a.user.name),t.xp6(2),t.Oqu(a.user.phone),t.xp6(2),t.Oqu(a.spin_wheel_prize.description)}}function Z(i,e){if(1&i&&(t.TgZ(0,"table")(1,"tr",44)(2,"th",45),t._uU(3,"Name"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Phone number"),t.qZA(),t.TgZ(6,"th",46),t._uU(7,"Prize won"),t.qZA()(),t.YNc(8,q,7,3,"tr",38),t.qZA()),2&i){const a=t.oxw(3);t.xp6(8),t.Q6J("ngForOf",a.registrations)}}function C(i,e){1&i&&(t.TgZ(0,"div",47),t._uU(1,"No winners found! Check back later"),t.qZA())}function y(i,e){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,Z,9,1,"table",15),t.YNc(2,C,2,0,"div",43),t.qZA()),2&i){const a=t.oxw(2);t.xp6(1),t.Q6J("ngIf",a.registrations.length),t.xp6(1),t.Q6J("ngIf",!a.registrations.length)}}function A(i,e){if(1&i){const a=t.EpF();t.TgZ(0,"section")(1,"section",40)(2,"div",41)(3,"h3"),t._uU(4,"Daily Winners"),t.qZA(),t.TgZ(5,"input",42),t.NdJ("change",function(o){return t.CHM(a),t.oxw().getRegistrations(o)}),t.qZA(),t.YNc(6,y,3,2,"div",15),t.qZA()()()}if(2&i){const a=t.oxw();t.xp6(5),t.Q6J("max",a.yesterdayDate)("value",a.yesterdayDate),t.xp6(1),t.Q6J("ngIf",a.registrations)}}let T=(()=>{class i{constructor(a,n,o){this.platformId=a,this.state=n,this.api=o,this.days="00",this.hours="00",this.minutes="00",this.seconds="00",this.tabs=["About FIFA 2022","How to participate"],this.currentTab="About FIFA 2022",this.slides=[{mobile_image_full_url:`${c.N.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Mobile.webp`,desktop_image_full_url:`${c.N.baseApiUrl}/media/pages/campaigns/fifa-2022/FIFA-World-Cup-Banner-Desktop.webp`},{mobile_image_full_url:`${c.N.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-2-mobile.webp`,desktop_image_full_url:`${c.N.baseApiUrl}/media/pages/campaigns/perfect-match-2022/slides/slide-2-desktop.webp`}],this.groups=[{heading:"Group A",data:[{name:"Qatar",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/QAT?tx=c_fill,g_auto,q_auto"},{name:"Ecuador",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ECU?tx=c_fill,g_auto,q_auto"},{name:"Senegal",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SEN?tx=c_fill,g_auto,q_auto"},{name:"Netherlands",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/NED?tx=c_fill,g_auto,q_auto"}]},{heading:"Group B",data:[{name:"England",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ENG?tx=c_fill,g_auto,q_auto"},{name:"IR Iran",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/IRN?tx=c_fill,g_auto,q_auto"},{name:"USA",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto"},{name:"Wales",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/WAL?tx=c_fill,g_auto,q_auto"}]},{heading:"Group C",data:[{name:"Argentina",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ARG?tx=c_fill,g_auto,q_auto"},{name:"Saudi Arabia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KSA?tx=c_fill,g_auto,q_auto"},{name:"Mexico",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MEX?tx=c_fill,g_auto,q_auto"},{name:"Poland",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POL?tx=c_fill,g_auto,q_auto"}]},{heading:"Group D",data:[{name:"France",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/FRA?tx=c_fill,g_auto,q_auto"},{name:"Denmark",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/DEN?tx=c_fill,g_auto,q_auto"},{name:"Tunisia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/TUN?tx=c_fill,g_auto,q_auto"},{name:"Australia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/AUS?tx=c_fill,g_auto,q_auto"}]},{heading:"Group E",data:[{name:"Spain",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/ESP?tx=c_fill,g_auto,q_auto"},{name:"Germany",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GER?tx=c_fill,g_auto,q_auto"},{name:"Japan",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/JPN?tx=c_fill,g_auto,q_auto"},{name:"Costa Rica",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRC?tx=c_fill,g_auto,q_auto"}]},{heading:"Group F",data:[{name:"Belgium",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BEL?tx=c_fill,g_auto,q_auto"},{name:"Canada",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CAN?tx=c_fill,g_auto,q_auto"},{name:"Morocco",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/MAR?tx=c_fill,g_auto,q_auto"},{name:"Croatia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CRO?tx=c_fill,g_auto,q_auto"}]},{heading:"Group G",data:[{name:"Brazil",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto"},{name:"Serbia",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SRB?tx=c_fill,g_auto,q_auto"},{name:"Switzerland",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/SUI?tx=c_fill,g_auto,q_auto"},{name:"Cameroon",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/CMR?tx=c_fill,g_auto,q_auto"}]},{heading:"Group H",data:[{name:"Portugal",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/POR?tx=c_fill,g_auto,q_auto"},{name:"Ghana",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/GHA?tx=c_fill,g_auto,q_auto"},{name:"Uruguay",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/URU?tx=c_fill,g_auto,q_auto"},{name:"Korea Republic",flag:"https://cloudinary.fifa.com/api/v3/picture/flags-sq-2/KOR?tx=c_fill,g_auto,q_auto"}]}],this.environment=c.N,this.state.mobileNavToggle.next(!1);const r=new Date;this.yesterdayDate=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()-1).padStart(2,"0")}`}ngOnInit(){setTimeout(()=>{this.swiper=new Swiper(".mySwiperHome",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:6e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),this.swiper.on("slideChange",a=>{this.currentTab=a.activeIndex%2==1?this.tabs[0]:this.tabs[1]})}),this.getRegistrations({target:{value:this.yesterdayDate}})}ngAfterViewInit(){if((0,p.NF)(this.platformId)){let a=new Date("Nov 20, 2022 16:00:00").getTime();this.x=setInterval(()=>{let n=(new Date).getTime(),o=a-n;const r=Math.floor(o/864e5).toString().padStart(2,"0"),l=Math.floor(o%864e5/36e5).toString().padStart(2,"0"),f=Math.floor(o%36e5/6e4).toString().padStart(2,"0");let g=Math.floor(o%6e4/1e3);this.days!==r&&(this.days=r),this.hours!==l&&(this.hours=l),this.minutes!==f&&(this.minutes=f),this.seconds!==g&&(this.seconds=g),o<0&&clearInterval(this.x)},1e3)}}getRegistrations(a){console.log(a.target.value),this.api.getRegistrations({date:a.target.value,user_progress:"prize_winners"}).subscribe(o=>{console.log(o),this.registrations=o.data.length?o.data:[]},o=>{console.log(o)})}changeTab(a){this.currentTab=a,a==this.tabs[0]?this.swiper.slidePrev():this.swiper.slideNext()}ngOnDestroy(){this.x&&clearInterval(this.x)}}return i.\u0275fac=function(a){return new(a||i)(t.Y36(t.Lbi),t.Y36(u.O),t.Y36(_.s))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-fifa-event"]],decls:16,vars:4,consts:[[1,"fifa__event__container"],[1,"main-visual","slider","slick-initialized","slick-slider","slick-dotted"],[1,"slick-list","draggable"],[1,"slick-track"],[1,"swiper","mySwiperHome"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"swiper-button-next"],[1,"swiper-button-prev"],[1,"swiper-pagination"],[1,"flex","fifa__tabs__container"],[1,"tabs"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"ngClass","click",4,"ngFor","ngForOf"],["style","margin-top: 10px;",4,"ngIf"],[4,"ngIf"],[1,"swiper-slide"],[2,"width","100%"],["media","(min-width:768px)",3,"srcset"],[1,"ls-bg",2,"width","100%",3,"src"],[1,"list-group-item","list-group-item-action",3,"ngClass","click"],[2,"margin-top","10px"],[1,"countdown__wrapper"],[1,"countdown__container"],[1,"f-24"],[1,"count__container"],["width","96","height","25","viewBox","0 0 96 25","fill","none","xmlns","http://www.w3.org/2000/svg",1,"d-sm-none",2,"transform","rotate(180deg)"],["d","M29.5654 12.1734L32.7897 15.431L36.0139 12.1734L32.7897 8.92823L29.5654 12.1734ZM14.9761 12.1734L17.805 15.0331L20.6463 12.1734L17.805 9.32611L14.9761 12.1734ZM0.386719 12.1734L2.8574 14.6601L5.32808 12.1734L2.8574 9.68666L0.386719 12.1734ZM58.7318 12.1734L62.7467 16.2268L66.7739 12.1734L62.7467 8.13245L58.7318 12.1734ZM44.1424 12.1734L47.7867 15.8289L51.4062 12.1734L47.7867 8.53034L44.1424 12.1734ZM95.4091 11.4771C95.2679 9.09816 94.429 6.81476 92.9984 4.91574C91.5678 3.01672 89.6097 1.58739 87.372 0.808542C85.1342 0.0296895 82.7172 -0.0636941 80.4266 0.540198C78.1361 1.14409 76.075 2.41812 74.5039 4.20117C72.9329 5.98421 71.9225 8.1962 71.6006 10.5573C71.2787 12.9183 71.6597 15.3224 72.6955 17.4655C73.7312 19.6086 75.3752 21.3944 77.4194 22.597C79.4636 23.7996 81.8163 24.365 84.1798 24.2216C87.3477 24.0295 90.3102 22.5791 92.4159 20.1893C94.5216 17.7994 95.5982 14.6657 95.4091 11.4771ZM86.0823 3.818C87.9979 4.43825 89.6342 5.71969 90.7024 7.43617C90.2545 7.74995 89.728 7.93087 89.183 7.95836C88.6755 7.98368 88.1696 7.88362 87.7094 7.66687C87.2492 7.45012 86.8487 7.1233 86.5429 6.71492C86.237 6.30654 86.0352 5.82899 85.9549 5.32402C85.8746 4.81905 85.9183 4.30205 86.0823 3.818ZM76.7184 17.2339C75.6745 15.8726 75.0631 14.2259 74.9642 12.5091C74.9642 12.248 74.9642 11.9994 74.9642 11.7382C75.5812 11.7798 76.1714 12.0076 76.6578 12.3919C77.1442 12.7762 77.5043 13.2991 77.691 13.8924C77.8777 14.4858 77.8825 15.122 77.7045 15.718C77.5266 16.3141 77.1743 16.8424 76.6937 17.2339H76.7184ZM76.3478 7.28697C77.4304 5.59471 79.0705 4.34019 80.9803 3.7434C81.0657 3.99685 81.1197 4.25988 81.1409 4.52665C81.1881 5.34935 80.9089 6.1573 80.3645 6.77282C79.8201 7.38835 79.0552 7.76109 78.2378 7.80916C77.5608 7.87599 76.8813 7.7094 76.3107 7.33668L76.3478 7.28697ZM84.0069 20.5412C82.8082 20.609 81.6087 20.4226 80.4862 19.9942C80.6762 19.3564 81.0655 18.7973 81.5963 18.3999C82.127 18.0024 82.7709 17.7878 83.4325 17.7878C84.094 17.7878 84.7379 18.0024 85.2686 18.3999C85.7994 18.7973 86.1886 19.3564 86.3787 19.9942C85.6096 20.3122 84.7978 20.5134 83.9698 20.591L84.0069 20.5412ZM86.9717 11.5642L85.8846 14.685C85.8284 14.8597 85.7172 15.0111 85.5679 15.1165C85.4186 15.222 85.2392 15.2756 85.0569 15.2694L81.7709 15.1948C81.5897 15.194 81.4136 15.1343 81.2689 15.0245C81.1241 14.9147 81.0186 14.7607 80.9679 14.5855L80.0167 11.415C79.9672 11.239 79.9739 11.0519 80.036 10.88C80.0981 10.7082 80.2124 10.5603 80.3626 10.4575L83.0557 8.5676C83.2038 8.46216 83.3807 8.40558 83.5621 8.40558C83.7436 8.40558 83.9205 8.46216 84.0686 8.5676L86.6752 10.5695C86.8304 10.6876 86.9408 10.8556 86.988 11.0456C87.0351 11.2356 87.0163 11.4361 86.9346 11.6139L86.9717 11.5642ZM90.5418 16.7614C89.993 16.4128 89.5678 15.8985 89.3271 15.292C89.0863 14.6855 89.0423 14.0179 89.2013 13.3847C89.3603 12.7514 89.7141 12.185 90.2123 11.7665C90.7105 11.3479 91.3274 11.0986 91.9748 11.0543C91.9748 11.1787 91.9748 11.3031 92.0366 11.4274C92.1387 13.3439 91.5993 15.2395 90.5048 16.8111L90.5418 16.7614Z"],[1,"count"],[1,"category"],["width","20","height","19","viewBox","0 0 20 19","fill","none","xmlns","http://www.w3.org/2000/svg",1,"countdown_diamondSVGIcon__1dyM8"],["d","M10.0036 0.013918L0.00390625 9.51367L10.0036 19.0134L20.0034 9.51367L10.0036 0.013918Z"],["width","96","height","25","viewBox","0 0 96 25","fill","none","xmlns","http://www.w3.org/2000/svg",1,"d-sm-none"],[1,"groups"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card__heading"],[1,"card__body"],[4,"ngFor","ngForOf"],["width","58","height","36",3,"src","alt"],[1,"date__picker"],[1,"wrapper"],["min","2022-09-26","type","date","name","date","id","date",3,"max","value","change"],["class","no-records",4,"ngIf"],[2,"background","#00b3ac"],[2,"border-top-left-radius","8px"],[2,"border-top-right-radius","8px"],[1,"no-records"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t.YNc(6,m,5,2,"div",6),t.qZA(),t._UZ(7,"div",7)(8,"div",8)(9,"div",9),t.qZA()()()(),t.TgZ(10,"div",10)(11,"div",11)(12,"div",12),t.YNc(13,h,2,4,"a",13),t.qZA()()(),t.YNc(14,b,40,5,"section",14),t.YNc(15,A,7,3,"section",15),t.qZA()),2&a&&(t.xp6(6),t.Q6J("ngForOf",n.slides),t.xp6(7),t.Q6J("ngForOf",n.tabs),t.xp6(1),t.Q6J("ngIf","About FIFA 2022"==n.currentTab),t.xp6(1),t.Q6J("ngIf","How to participate"==n.currentTab))},directives:[p.sg,p.mk,p.O5],styles:[".f-24{font-size:36px}.countdown__wrapper{margin-top:-10px;padding:48px;background-color:#b30007;color:#fff}.countdown__container{display:flex;justify-content:center;flex-direction:column;align-items:center}.count__container{display:flex;gap:5rem;text-align:center;margin-top:36px;align-items:center}svg{fill:#e60009!important}.count{font-size:24px;font-weight:700}@media screen and (max-width: 768px){.count__container{gap:1rem}.count{font-size:16px}.f-24{font-size:24px}.category{font-size:12px}.d-sm-none{display:none}}.groups{background-color:#f3f3f3;padding:72px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:2.5rem;gap:2.5rem}.card{background-color:#00aaa6;color:#fff;border-radius:12px;padding-top:16px;text-align:center}.card .card__heading{font-size:20px;font-weight:700;margin-bottom:6px}.card .card__body{background-color:#fff;color:#000;border-radius:12px;display:flex;gap:2rem;flex-direction:column;padding:16px}.card .card__body div{display:flex;justify-content:flex-start;align-items:center;gap:1rem;white-space:nowrap}@media screen and (max-width: 1100px){.groups img{width:36px;height:24px}}@media screen and (max-width: 1000px){.groups{grid-template-columns:1fr 1fr 1fr}}@media screen and (max-width: 767px){.groups{grid-template-columns:1fr 1fr}}@media screen and (max-width: 520px){.groups{grid-template-columns:1fr}}.date__picker{background-color:#fff}.date__picker .wrapper{width:80%;margin:0 auto;padding:40px 0;display:flex;justify-content:center;flex-direction:column;text-align:center;align-items:center;gap:2rem}.date__picker .wrapper h3{font-size:36px}.date__picker .wrapper input{width:200px;margin:auto;padding:8px 16px;font-size:15px;border:1px solid #00AAA6;border-radius:6px}.date__picker .wrapper table{border-collapse:collapse;width:100%;overflow-x:auto;min-width:500px;width:60%;margin:auto;box-shadow:#00000059 0 5px 15px}.date__picker .wrapper table .telephone{color:#00aaa6!important}.date__picker .wrapper table tr{width:100%}.date__picker .wrapper table tr:last-child{border-bottom:3px solid #00AAA6}.date__picker .wrapper td,.date__picker .wrapper th{border-bottom:.5px solid #ccc!important;border-top:.5px solid #ccc!important;text-align:left!important;padding:8px 24px!important;white-space:nowrap!important}.date__picker .wrapper th{font-size:14px;font-weight:700;color:#fff;border-top:none!important}@media screen and (max-width: 576px){.date__picker .wrapper{width:70%}.date__picker .wrapper table{overflow-x:auto;display:block;margin:auto;min-width:auto}.date__picker .wrapper table tr{width:100%}}.ls-bg{cursor:pointer}.swiper-pagination-bullet{color:#09cbc6!important;border:none!important;width:10px!important;height:10px!important;outline:none!important;margin:7px!important;border-radius:50%!important;background:transparent!important;border:2px solid #09cbc6!important;transition:background-color .5s!important;cursor:pointer!important}.swiper-pagination-bullet:before{display:none!important}.swiper-pagination-bullet.swiper-pagination-bullet-active{background:#00AAA6!important}.fifa__tabs__container{display:flex;justify-content:center;align-content:center;padding:16px 0}.fifa__tabs__container .tabs{border-radius:50px;padding:20px;box-shadow:#0000003d 0 3px 8px}.fifa__tabs__container .list-group{display:flex;text-align:center;justify-content:center;width:100%;gap:16px}.fifa__tabs__container .list-group a{padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;white-space:nowrap;border:1.2px solid #09cbc6;border-radius:16px}.fifa__tabs__container .list-group .active{color:#fff;background-color:#00aaa6!important;border-color:#00aaa6!important}@media screen and (max-width: 768px){.fifa__tabs__container .tabs{padding:12px}.fifa__tabs__container .list-group{gap:12px}.fifa__tabs__container .list-group a{padding:.75rem 1rem;border:1.2px solid #09cbc6;border-radius:16px}}\n"],encapsulation:2}),i})();var F=s(1590);const k=[{path:"",component:T}];let U=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.ez,F.Bz.forChild(k)]]}),i})()}}]);