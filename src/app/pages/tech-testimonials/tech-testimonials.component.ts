import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-tech-testimonials',
  templateUrl: './tech-testimonials.component.html',
  styleUrls: ['./tech-testimonials.component.scss']
})
export class TechTestimonialsComponent implements OnInit {

  testimonials: any = [];

  totalPagesinTen: any = [];

  params = {
    per_page: 10,
    page: 1
  }

  metaDataTabs = ['National', 'Global'];
  currentTab = 'National';

  changeTab(tab: any) {
    this.currentTab = tab;
    if (this.currentTab == 'Global') {
      this.testimonials = [];
      this.totalPagesinTen = [];
    } else {
      this.getTechTestimonials(1);
    }
  }

  constructor(private state: GlobalStateService,
    public sanitizer: DomSanitizer,
    private api: ApiService) {
    this.state.mobileNavToggle.next(false);
  }

  ngOnInit(): void {
    this.getTechTestimonials();
  }
  
  getTechTestimonials(page?: any){
    if (page) {
      this.params.page = page;
    }
    this.api.getTechTestimonials(this.params).subscribe({
      next: (res: any) => {
        this.testimonials = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getVideoLink(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // testimonials = 
  // [
  //   {
  //     "text": "As the official sponsor of Fifa 2022 World cup, Hisense launched its Too Big To Miss campaign. Watch Guiding Tech (GT) spill some exciting news and offers about this campaign!",
  //     "video": "https://www.youtube.com/embed/pldh928CnlY"
  //   },
  //   {
  //     "text": "Techniqued highlights his favourite features of the all-new Hisense Vivid 4K TV. With its picture so clear and sound so enthralling, this TV is sure to blow your mind.",
  //     "video": "https://www.youtube.com/embed/jylxUAb3YZs"
  //   },
  //   {
  //     "text": "Hisense Vivid 4K is so clear that makes every scene seem real. ShoppingBandhu shares some exciting features and tells how it is definitely a value for money pick.",
  //     "video": "https://www.youtube.com/embed/BDGXdNRRv5c"
  //   },
  //   {
  //     "text": "With Hisense Vivid 4K TV all the details truly shine! Tech in Kannada unboxes this marvel while he talks about the amazing display and unmatched picture quality of this TV.",
  //     "video": "https://www.youtube.com/embed/nZhBc4u74-Q"
  //   },
  //   {
  //     "text": "Extreme clarity and stunning visuals, the Hisense Vivid 4K TV surely surpass all the conventional televisions to give the best picture quality. Watch Tech Singh explain how this TV is a must buy.",
  //     "video": "https://www.youtube.com/embed/wagNEZZ_vGk"
  //   },
  //   {
  //     "text": "Tornado is back with a storm and this time it’s even bigger. Tech Singh tells how the mind-blowing sound by JBL and excellent display of the all-new Tornado TV has left him flabbergasted.",
  //     "video": "https://www.youtube.com/embed/bSyQi8cUuww"
  //   },
  //   {
  //     "text": "Tech in Kannada came across the all-new Tornado TV and is left thunderstruck! From the sound to the display, everything is what anyone needs in a TV. And with the wider screen, it’s even better.",
  //     "video": "https://www.youtube.com/embed/gqwrQ5ppo8I"
  //   },
  //   {
  //     "text": "TV viewing experience comes alive with the Hisense 70” Mega TV and Gogi Tech couldn’t agree more. The stunning display, immersive sound and bezel-less display make anyone go all in for this TV.",
  //     "video": "https://www.youtube.com/embed/LwQxFPYgzng"
  //   },
  //   {
  //     "text": "Nothing compared to others, the Hisense Tornado 4K TV is ahead of its league. With an impactful 6 JBL speaker system with 102W sound, this TV comes with quality features that make it mind blowing.",
  //     "video": "https://www.youtube.com/embed/QYoP2ES5mV8"
  //   },
  //   {
  //     "text": "Nirmal TV unboxes and reviews the Hisense Tornado 4K TV that has beyond amazing features which will transform your TV viewing experience into something that is even more excellent.",
  //     "video": "https://www.youtube.com/embed/xaTExBZgY8U"
  //   },
  //   {
  //     "text": "Tornado strikes India! Vineet Malhotra unboxes the Hisense Tornado 4K TV that sweeps him off his feet. With a thundering sound by JBL and mind blowing display, this TV performs par excellence.",
  //     "video": "https://www.youtube.com/embed/zlecfuw7vG4"
  //   },
  //   {
  //     "text": "Slim and sleek, the Hisense Tornado 4K TV surpasses all standards for ShoppingBandhu. Redefining sound, design and picture quality, this Hisense TV comes with premium features.",
  //     "video": "https://www.youtube.com/embed/oSNoPUxoHgc"
  //   },
  //   {
  //     "text": "Premium and classy, the Hisense Tornado 4K TV exceeds all expectations according to Tech Singh. Bezelless design, impactful 6 speaker JBL system and amazing display, it will not disappoint you.",
  //     "video": "https://www.youtube.com/embed/PJJ_JEdfglI"
  //   },
  //   {
  //     "text": "Premium features at the most comfortable price, the Hisense Tornado 4K TV will blow your mind according to Tech MM. Powered by the JBL sound system and coming with great display, it is truly amazing.",
  //     "video": "https://www.youtube.com/embed/AixQ9Lji7Gw"
  //   },
  //   {
  //     "text": "Unboxing the Hisense Tornado 4K TV, Gadget Gig is mind blown. With features like a 6 JBL speaker system with 102 watts sound and Dolby Vision, he recommends that Hisense is worth every penny.",
  //     "video": "https://www.youtube.com/embed/meyOSGkJet0"
  //   },
  //   {
  //     "text": "The Hisense Tornado 4K TV has several plus points according to Mr. Techy. With extraordinary sound powered by JBL, sleek design and amazing display, Hisense comes at a price best suited for you.",
  //     "video": "https://www.youtube.com/embed/34l6NRJx3k4s"
  //   },
  //   {
  //     "text": "With amazing hardware and software features, the Hisense Tornado 4K TV has taken everyone by surprise. Even TechReflex is amazed with all the best-in-class features that it has to offer.",
  //     "video": "https://www.youtube.com/embed/UhFxxWCqMpw"
  //   },
  //   {
  //     "text": "For the most amazing TV viewing experience, the Hisense Tornado 4K TV comes with extraordinary, mind blowing features. For Tech Start, Hisense is one step ahead of all other TVs.",
  //     "video": "https://www.youtube.com/embed/ReS-txIStrs"
  //   },
  //   {
  //     "text": "Redefining sound clarity, the Hisense Tornado 4K has features that are a class apart. For Gadget Wala, even the visuals and display take the viewer to the middle of the action.",
  //     "video": "https://www.youtube.com/embed/SzOj56QG9SQ"
  //   },
  //   {
  //     "text": "A power-packed review by Tech Mumbaikar reveals the interesting yet powerful features of th Hisense Tornado 4K TV. Redefining all picture, sound and design standards, he recommends Hisense to everyone.",
  //     "video": "https://www.youtube.com/embed/BfUZ_rfALgs"

  //   },
  //   {
  //     "text": "Say Hi to Masterchef Shipra Khanna as she reviews our Amazing 507L Hisense French Door Refrigerator! See what she loves about the amazing freshness, cooling, design and space of the model",
  //     "video": "https://www.youtube.com/embed/brAXtH_lkWo"
  //   },
  //   {
  //     "text": "Unboxing the Hisense 55 inch 4K Smart LED TV, My Smart Price reveals its coolest features! With a quality par excellence, Hisense is a guaranteed winner in this game and a must buy for everyone",
  //     "video": "https://www.youtube.com/embed/DCteFdPT-7c"
  //   },
  //   {
  //     "text": "Tech Unboxing cannot stop talking about the amazing features of the 32 inch Hisense Android TV! With a great display, internal storage and surround sound, Hisense is the right choice for you",
  //     "video": "https://www.youtube.com/embed/KK6EhXU8KkM"
  //   },
  //   {
  //     "text": "For Tech Reflex, the best and the most affordable 4K TV is the Hisense 43 inch A71F! With promising performance and quality, Hisense is here to exceed all expectations",
  //     "video": "https://www.youtube.com/embed/4U5307gNxYE"
  //   },
  //   {
  //     "text": "Tech Mumbaikar unveils the Hisense 55A71F.Offering a colourful, rich display and moving audio experience, you will be left with no complaints.. Hisense is here to give you just what you want at a price best suited for you",
  //     "video": "https://www.youtube.com/embed/gsCMXwDATZQ"
  //   },
  //   {
  //     "text": "The Hisense 55 inch 4K A71F is a must have for everyone! With premium features available at comfortable prices, Gadget Gig reveals that Hisense makes sure you have an amazing watching experience",
  //     "video": "https://www.youtube.com/embed/Q7Q6-zDqLog"
  //   },
  //   {
  //     "text": "With a colourful, rich display and moving audio experience, Gadget Diary reveals how he can’t get over the smart features of the Hisense 55 inch 4K A71F",
  //     "video": "https://www.youtube.com/embed/Qr8DcOAsVZ8"
  //   },
  //   {
  //     "text": "Hisense has come up with another addition to the Hisense 4K Tornado series. The bigger and wider screen has left ShoppingBandhu amazed, giving a theatre-like experience at home.",
  //     "video": "https://www.youtube.com/embed/caILQQMO7K4"
  //   },
  //   {
  //     "text": "Watch the unboxing of the Hisense 32E4G 32-inch TV. Find out the super easy steps to set up the television and a few unique features of our ultimate smart TV.",
  //     "video": "https://www.youtube.com/embed/LFWiACeEuGA"
  //   },
  //   {
  //     "text": "Watch the unboxing of the latest Hisense 32-inch Smart TV of 2022 by Shopping Bandhu. Explore the TV’s specifications, picture quality, viewing angles, audio experience, remote performance, etc",
  //     "video": "https://www.youtube.com/embed/PIQ3sSSyUEI"
  //   },
  //   {
  //     "text": "Watch the unboxing and review of the Hisense 32-inch VIVID TV (2022) by Tech Singh. This video will discover its impressive specifications, smart user interface, and more.",
  //     "video": "https://www.youtube.com/embed/h40npo9PKMw"
  //   },
  //   {
  //     "text": "Explore various features, build quality, box components, and more in the unboxing video of the Hisense 32E4G 32-inch TV. Also, find out how gaming works with this stunning TV.",
  //     "video": "https://www.youtube.com/embed/s5Pe3zzNJns"
  //   }
  // ]

}
