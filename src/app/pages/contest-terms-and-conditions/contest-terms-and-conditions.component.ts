import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

interface MetaData {
  terms_and_conditions: TermsAndConditions[],
  group: any,
}

interface TermsAndConditions {
    id: number,
    tab_name: string,
    heading: string,
    sub_heading: string | null,
    date_range: string | null,
    content_text: string | null,
    content_image: string | null,
    is_enabled: number,
    priority: number,
    content_image_full_url: string | null
}

@Component({
  selector: 'app-contest-terms-and-conditions',
  templateUrl: './contest-terms-and-conditions.component.html',
  styleUrls: ['./contest-terms-and-conditions.component.scss']
})
export class ContestTermsAndConditionsComponent implements OnInit {

  // currentTab = 'TH'

  metaData: MetaData[] | any;
  currentIndex = 0;
  currentTermsIndex = 0;

  changeTab(obj: any, i: number, j: number) {
    this.currentTab = obj.tab_name;
    this.currentIndex = i;
    this.currentTermsIndex = j;
  }

  constructor(private state: GlobalStateService,
    private api: ApiService,
    private title: Title) {
    this.title.setTitle('Hisense India | TERMS AND CONDITIONS');
    this.state.mobileNavToggle.next(false);
  }

  currentTab: any;

  ngOnInit(): void {
    this.getSlides();
  }


  getSlides() {
    this.api.getPageSlides({ pageUrl: '/terms-and-conditions' }).subscribe({
      next: (res: any) => {
        // console.log(res)
        this.metaData = res.data;
        this.currentMainTab = this.metaData[0]?.group?.name
        this.currentTab = this.metaData[0]?.terms_and_conditions[0]?.tab_name;
      },
      error: (err) => {
        this.metaData = [
          {
            "group": {
              "name": "Products",
              "code": "products"
            },
            "terms_and_conditions": [
              {
                "id": 2,
                "tab_name": "Air conditioner T&C",
                "heading": "Air Conditioner",
                "sub_heading": "5 years comprehensive warranty",
                "date_range": null,
                "content_text": "<p>5 Years warranty terms are as below:</p>\r\n<ul style='list-style-type:decimal;'>\r\n\t<li>Additional 4 Years warranty is extension of 1 Year warranty as mentioned in user manual inside the box.</li>\r\n\t<li>There will be no service charges / part replacement charges will be taken in additional warranty period.</li>\r\n\t<li>Wet Service / Dry Service will not get covered under this period, customer has to pay charges for the same.</li>\r\n\t<li>For more terms related to warranty please refer user manual.</li>\r\n</ul>",
                "content_image": null,
                "is_enabled": 1,
                "priority": 3,
                "content_image_full_url": null
              }
            ]
          },
          {
            "group": {
              "name": "Campaigns",
              "code": "campaigns"
            },
            "terms_and_conditions": [
              {
                "id": 6,
                "tab_name": "Colours Of Emotions T&C",
                "heading": "Colours Of Emotions",
                "sub_heading": null,
                "date_range": "28th February - 10th March 2023",
                "content_text": "<p>Hisense contest is open for all Indian nationals who can win prize by participating in contest and following all terms and conditions.</p>\n<p>Term of the contest shall be 28th Feb to 10th March 2023.</p>\n\n<ul>\n\t<li>Click on link provided by Hisense official handle (Facebook, Instagram, twitter website and other promotion\n\t\tplatforms)</li>\n\t<li>Mention your Name and phone number and tick the consent that Hisense can use your picture and message provided by\n\t\tyou in promotional activity</li>\n\t<li>Select your favourite colour frame </li>\n\t<li>Upload your Holi playing pictures and message related to holi memories.</li>\n\t<li>Upload both Picture and message and submit. </li>\n\t<li>Share it on social media with hashtag #coloursofemotion #Hisenseindia </li>\n\t<li>Tag to Hisense India page (Facebook, Instagram, twitter)</li>\n\t<li>Participants of the contest should have completed 18years of age.</li>\n\t<li>The selfies/pictures posted on the social handle shall be clear, decent and shall not contain any prohibited contents including vulgar, pornographic, misleading, defamatory, libellous offensive, political, derogatory, threatening, harassing, abusive or violent signs/images. Participant shall be solely liable for any consequences arising from posting the photos and selfies on the Facebook page and Hisense shall not be liable for any acts, comments or otherwise any actions or inaction of any third party.</li>\n</ul>\n\n<p>Other T&C of the contest:</p>\n<ul>\n\t<li>Participants with maximum number of likes, comments and share together on their own social handle inside frame shared by Hisense, shall be declared the winner subject to all T&Cs applied on the contest.</li>\n\t<li>Top 3 participant get Amazon vouchers worth Rs 1000/- along with FIFA 2022 branding football.</li>\n\t<li>20 Lucky winners Announced and get FIFA 2022 branding football. winners will be whole discretion of Hisense India pvt ltd.</li>\n\t<li>The Prize is non-transferable, non-saleable, non-exchangeable, and non-redeemable for cash or any other compensation. Participant shall bear the applicable taxes with respect to the Prize, if any.</li>\n\t<li>In case two participants have equal number of likes comments and share on any of the social handle (Facebook, Instagram twitter).The sole decision of Hisense India management to judge and declare the winner shall be acceptable by all parties.</li>\n\t<li>Participation in this contest will constitute unqualified permission for Hisense unrestricted use to the Winner’s name, photograph, audio-visual video, likeness, voice and comments for advertising and promotional purposes in any media worldwide without paying any consideration whatsoever .</li>\n\t<li>To the extent permitted by law, Hisense and/or its management makes no representations or warranties as to the quality, suitability or merchantability of any Prize. Hisense shall not be responsible for any defect in the Prize.\n\t</li>\n\t<li>The Winners shall be intimated over the social media and website at the end of the day of contest. Hisense/Authorized person shall call the Winners only once on the registered number and if the mobile number is changed/terminated/blocked/out of reach etc , the Prize shall be given to the next Winner i.e. other participant with maximum number of Likes and the Prize</li>\n\t<li>Participant should follow all rules will check by Hisense Team</li>\n\t<li>Address will ask from winner on register mobile number</li>\n\t<li>If the winner cannot be contacted or do not claim the prize or not confirmed address on within 7 days of notification, we reserve the right to withdraw the prize from the winner and pick a replacement winner. </li>\n</ul>\n\n<p>Bumper Lucky Draw:</p>\n<ul>\n\t<li>Bumper Lucky Draw – 50”A6H</li>\n\t<li>Lucky Draw will be taken out randomly by Hisense India team</li>\n\t<li>Hisense team will judge the competition and decide on the winner, which will be picked at random from all complete entries and rights to withdraw the contest at any time.</li>\n\t<li>Hisense India team ‘s decision as to those able to take part and selection of winners is final. No correspondence relating to the competition will be entered into.</li>\n\t<li>The winner will be notified by email and/or DM on Twitter/Facebook and/or letter on Bumper lucky draw day</li>\n\t<li>The winner will only ever be contacted by Hisense team.</li>\n\t<li>If the winner cannot be contacted or do not claim the prize within 14 days of notification, we reserve the right to withdraw the prize from the winner and pick a replacement winner. </li>\n\t<li>The promoter will notify the winner when and where the prize can be collected / is delivered.</li>\n\t<li>The winner agrees to the use of his/her name and image in any publicity material, as well as their entry</li>\n\t<li>Hisense India also reserves the right to cancel the competition if circumstances arise outside of its control.</li>\n\t<li>TDS (If the winning amount is more than 10k TDS @30% on reward product shall be borne by respective winner for which they need to submit PAN Card copy, Name as per PAN and email id</li>\n\t<li>Hisense reserves the right to discontinue the Contest at any time and/or change, amend, extend, withdraw and/or alter any of the terms & conditions of this Contest at any time without prior notice/intimation or giving any reason and it is the sole responsibility of the Participants to keep themselves up to date about any such change.</li>\n\t<li>Gratification of this contest/campaign is not applicable for Hisense India employees and close relatives.</li>\n\t<li>Participation in this contest is voluntary. Products are available without taking part/availing this offer. Please contact your store manager in this regard. Participation in this Contest constitutes acceptance of these terms and conditions.</li>\n\t<li>Disputes, if any, shall be adjudicated by the courts at New Delhi jurisdiction. Please refer for detail terms & conditions <a href=\"https://www.hisense-india.com\">https://www.hisense-india.com</a></li>\n</ul>",
                "content_image": null,
                "is_enabled": 1,
                "priority": 0,
                "content_image_full_url": null
              },
              {
                "id": 4,
                "tab_name": "Perfect Match T&C",
                "heading": "Perfect Match",
                "sub_heading": "Spin The Wheel",
                "date_range": "26th Sep - 24th Oct 2022",
                "content_text": "<ul style='list-style-type:decimal;'>\n\t<li>This offer is applicable from _26th Sep 2022 till _24th Oct 2022 & is brought to you by Hisense India Pvt. Ltd .Participation in the offer is voluntary. </li>\n\t<li>The give aways Offer are FIFA branding - Bottle, umbrella, Cap, Football and Hisense TV</li>\n\t<li>This offer is applicable in all the States and Union Territories of India except the State </li>\n\t<li>Only those customers who fill in the complete gift claim form and SPIN THE Wheel with the link provided by official Hisense sit, Follow all steps are eligible for winning gift</li>\n\t<li>This Gift Card (“Card”) / Goodies/ Product are not a credit / debit or ATM card.</li>\n\t<li>For Participation:\n\t\t<ul>\n\t\t\t<li>Register Yourself from the link provided by official id-</li>\n\t\t\t<li>Play the Quiz</li>\n\t\t\t<li>Spin the wheel and chance to win Goodies or Participate in Bumper lucky draw</li>\n\t\t\t<li>Submit your form</li>\n\t\t\t<li>Post it on your Social Media Account with Hashtags #Perfectmatch #HisenseIndia - tag two friends, and tag HisenseIndia</li>\n\t\t</ul>\n\t</li>\n\t<li>Options on wheel for Daily Wining Goodies:\n\t\t<ul style='list-style-type:lower-alpha;'>\n\t\t\t<li>FIFA Branding Bottle</li>\n\t\t\t<li>FIFA Branding Cap</li>\n\t\t\t<li>FIFA Branding Umbrella</li>\n\t\t\t<li>FIFA Branding Football</li>\n\t\t</ul>\n\t</li>\n\t<li>Bumber Lucky draw:\n\t\t<ul style='list-style-type:lower-alpha;'>\n\t\t\t<li>Dusshera – Hisense TV</li>\n\t\t\t<li>Dhanteras – Hisense TV</li>\n\t\t\t<li>Diwali – FIFA Ticket</li>\n\t\t</ul>\n\t</li>\n\t<li>Bumber Lucky draw:\n\t\t<ul style='list-style-type:lower-alpha;'>\n\t\t\t<li>Daily Goodies winner\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Winner will get notification via sms just after wining goodies</li>\n\t\t\t\t\t<li>Next day list of Winners will be posted on Hisense India website</li>\n\t\t\t\t\t<li>Participant should follow all rules will check by Hisense Team</li>\n\t\t\t\t\t<li>Address will ask from winner on register mobile number</li>\n\t\t\t\t\t<li>In case mobile number is off, we will mail the winner for address confirmation</li>\n\t\t\t\t\t<li>If the winner cannot be contacted or do not claim the prize or not confirmed address on register mail within 7 days of notification, we reserve the right to withdraw the prize from the winner and pick a replacement winner.</li>\n\t\t\t\t\t<li>Goodies will deliver to winner’s door step within 28 days of address confirmation</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li>Bumper Lucky Draw\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Bumper Lucky Draw – Dusherra – Hisense TV, Dhanteras- 43”A6H TV , Diwali- FIFA Ticket</li>\n\t\t\t\t\t<li>Lucky Draw will be taken out randomly by Hisense India team</li>\n\t\t\t\t\t<li>Hisense team will judge the competition and decide on the winner, which will be picked at random from all complete entries and rights to withdraw the contest at any time.</li>\n\t\t\t\t\t<li>Hisense India team ‘s decision as to those able to take part and selection of winners is final. No correspondence relating to the competition will be entered into.</li>\n\t\t\t\t\t<li>The winner will be notified by email and/or DM on Twitter/Facebook and/or letter on Bumper lucky draw day</li>\n\t\t\t\t\t<li>The winner will only ever be contacted by Hisense team.</li>\n\t\t\t\t\t<li>If the winner cannot be contacted or do not claim the prize within 14 days of notification, we reserve the right to withdraw the prize from the winner and pick a replacement winner. </li>\n\t\t\t\t\t<li>The promoter will notify the winner when and where the prize can be collected / is delivered.</li>\n\t\t\t\t\t<li>The winner agrees to the use of his/her name and image in any publicity material, as well as their entry</li>\n\t\t\t\t\t<li>Hisense India also reserves the right to cancel the competition if circumstances arise outside of its control.</li>\n\t\t\t\t\t<li>TDS (If the winning amount is more than 10k TDS @30% on reward product shall be borne by respective winner for which they need to submit PAN Card copy, Name as per PAN and email id </li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li>FIFA Ticket\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Gift tax is applicable as per law</li>\n\t\t\t\t\t<li>Physical ticket copy needs to collect from Doha Hisense office</li>\n\t\t\t\t\t<li>Only Tickets are Provided by Hisense India all other Travel and accommodation are taken care by winner</li>\n\t\t\t\t\t<li>Hisense is not liable for any arrangement at the destination</li>\n\t\t\t\t\t<li><a href='https://covid19.moph.gov.qa/EN/travel-and-return-policy/Pages/default.aspx'>https://covid19.moph.gov.qa/EN/travel-and-return-policy/Pages/default.aspx</a></li>\n\t\t\t\t\t<li>Ticket will be Provided for 9th dec Match number 54</li>\n\t\t\t\t\t<li>No Money will be given in exchange of Ticket or any gift item.</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li>Only one entry will be accepted per person. Multiple entries from the same person will be disqualified.</li>\n\t<li>No cash shall be paid in lieu of gifts and no request shall be entertained for exchange of gifts of equivalent value.</li>\n\t<li>Hisense reserves the right to modify or withdraw the scheme at any time without notice or to provide any other gift of same value. Hisense decision regarding the same shall be final and binding.</li>\n\t<li>Taxes and Statutory levies as applicable shall be borne by the recipient of a Gift. The recipient shall pay the amount of applicable taxes and submit PAN Proof to Hisense India before claiming the gifts.</li>\n\t<li>Employees of Hisense India Pvt. Ltd. or its authorized dealers or franchise are not eligible for participation.</li>\n\t<li>The images shown in creative are for representation purposes only. Technology, features, size &amp; specification may vary from model to model.</li>\n\t<li>By opting this offer, you consent to allow Hisense it’s gifting partners to collect, store or use personal data for the purposes of this contest,</li>\n\t<li>Hisense will not share or sell any personal information provided by means of this offer but may transfer/share the personal information to Hisense affiliated companies gifting partners for the purposes necessary to fulfil the offer.</li>\n\t<li>All disputes are subject to Jurisdiction of Court of New Delhi only.</li>\n</ul>",
                "content_image": null,
                "is_enabled": 1,
                "priority": 2,
                "content_image_full_url": null
              },
              {
                "id": 5,
                "tab_name": "Spot Hisense T&C",
                "heading": "Perfect Match",
                "sub_heading": "Spot Hisense",
                "date_range": "20th Nov - 18th Dec 2022",
                "content_text": "<ul style='list-style-type:decimal;'>\n\t<li>This contest is applicable from 20th Nov 2022 till 18th Dec 2022 & is brought to you by Hisense India Pvt. Ltd. Participation in the contest is voluntary. </li>\n\t<li>Spot Hisense during Matches, and click a picture.</li>\n\t<li>Post it on your Social Media Account with Hashtags #SpotHisense #Hisenseindia, #PerfectMatch tag two friends, and tag us!</li>\n\t<li>The give aways offers are Hisense FIFA branded soccer ball</li>\n\t<li>This offer is applicable in all the States and Union Territories of India except the State where lucky draws are not allowed as per Government norms.</li>\n\t<li>Only those customers who fill in the complete registration form, upload the spot Hisense picture, share the final templet on social media with #Perfectmatch #HisenseIndia #SpotHisense from the link provided by official Hisense website/promotion</li>\n\t<li>Follow all steps are eligible for winning gift</li>\n\t<li>This Gift Card (\"Card\") / Goodies/ Product are not a credit / debit or ATM card and can not be exchanged for amount or transferable</li>\n\t<li>For Participation:\n\t\t<ul>\n\t\t\t<li>Spot Hisense during Matches, and click a picture.</li>\n\t\t\t<li>Register Yourself from the link provided by official id-</li>\n\t\t\t<li>Upload the screenshot of spot Hisense using the link on the website</li>\n\t\t\t<li>Share the final Templet on your social media with #Perfectmatch #Hisenseindia & #spotHisense and tag two friends and</li>\n\t\t\t<li>Tag Hisense India to stand a chance to win goodies</li>\n\t\t</ul>\n\t</li>\n\t<li>Spot Hisense Daily winners will get Hisense FIFA soccer ball</li>\n\t<li>Delivery Terms and Conditions:\n\t\t<ul style='list-style-type:lower-alpha;'>\n\t\t\t<li>Daily Goodies winner\n\t\t\t\t<ul>\n\t\t\t\t<li>Winner will get notification via sms just after winning goodies</li>\n\t\t\t\t<li>Next day list of Winners will be posted on Hisense India website </li>\n\t\t\t\t<li>Participant should follow all rules will check by Hisense Team</li>\n\t\t\t\t<li>Address will ask from winner on register mobile number</li>\n\t\t\t\t<li>In case mobile number is off, we will mail the winner for address confirmation</li>\n\t\t\t\t<li>If the winner cannot be contacted or do not claim the prize or not confirmed address on register mail within 7 days of notification, we reserve the right to withdraw the prize from the winner and pick a replacement winner</li>\n\t\t\t\t<li>Goodies will deliver to winner's door step within 28 days of address confirmation</li>\n\t\t\t\t<li>The winner will only ever be contacted by Hisense team</li>\n\t\t\t\t<li>If the winner cannot be contacted or do not claim the prize within 7 days of notification, we reserve the right to withdraw the prize from the winner and pick a replacement winner</li>\n\t\t\t\t<li>The promoter will notify the winner when and where the prize can be collected / is delivered</li>\n\t\t\t\t<li>The winner agrees to the use of his/her name and image in any publicity material, as well as their entry</li>\n\t\t\t\t<li>Hisense India also reserves the right to cancel the competition if circumstances arise outside of its control</li>\n\t\t\t\t<li>TDS (If the winning amount is more than 10k TDS @30% on reward product shall be borne by respective winner for which they need to submit PAN Card copy, Name as per PAN and email id</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</li>\n\t<li>Only one entry will be accepted per person. Multiple entries from the same person will be disqualified.</li>\n\t<li>No cash shall be paid in lieu of gifts and no request shall be entertained for exchange of gifts of equivalent value.</li>\n\t<li>Hisense reserves the right to modify or withdraw the scheme at any time without notice or to provide any other gift of same value. Hisense decision regarding the same shall be final and binding.</li>\n\t<li>Taxes and Statutory levies as applicable shall be borne by the recipient of a Gift. The recipient shall pay the amount of applicable taxes and submit PAN Proof to Hisense India before claiming the gifts.</li>\n\t<li>Employees of Hisense India Pvt. Ltd. or its authorized dealers or franchise are not eligible for participation.</li>\n\t<li>The images shown in creative are for representation purposes only. Technology, features, size and specification may vary from model to model.</li>\n\t<li>By opting this offer, you consent to allow Hisense it’s gifting partners to collect, store or use personal data for the purposes of this contest,</li>\n\t<li>Hisense will not share or sell any personal information provided by means of this offer but may transfer/share the personal information to Hisense affiliated companies gifting partners for the purposes necessary to fulfil the offer.</li>\n\t<li>All disputes are subject to Jurisdiction of Court of New Delhi only.</li>\n</ul>",
                "content_image": null,
                "is_enabled": 1,
                "priority": 2,
                "content_image_full_url": null
              },
              {
                "id": 3,
                "tab_name": "Tricolour Treasure Hunt T&C",
                "heading": "Tricolour Tresure Hunt",
                "sub_heading": null,
                "date_range": "10th Aug- 21st Aug 2022",
                "content_text": "<p>By entering this competition, an entrant is indicating his/her agreement to be bound by these terms and conditions.</p>\r\n<p>Entry into the competition will be deemed as acceptance of these terms and conditions.</p>\r\n<ul>\r\n\t<li>Visit Hisense India <a href='https://www.hisense-india.com'>https://www.hisense-india.com/</a> and register</li>\r\n\t<li>You will receive user Id, Password and Hisense unique code on register mobile number</li>\r\n\t<li>Login using user ID and Password</li>\r\n\t<li>You will receive clue on mobile by sms and on scree as well</li>\r\n\t<li>Follow the clues & spot the Delightful India flags on website</li>\r\n\t<li>Post it on your Social Media Account with Hashtags #Tricolourtresurehunt #HisenseIndia, tag two friends, and follow us</li>\r\n\t<li>Follow our page Hisense India</li>\r\n\t<li>Only one entry will be accepted per person. Multiple entries from the same person will be disqualified.</li>\r\n\t<li>The prize is as stated and no cash or other alternatives will be offered. The prizes are not transferable. Prizes are subject to availability and we reserve the right to substitute any prize with another of equivalent value without giving notice.</li>\r\n\t<li>The winner will be notified by email and/or DM on Twitter/Facebook and/or letter within 28 days of the closing date. The winner will only ever be contacted by Hisense team. If the winner cannot be contacted or do not claim the prize within 14 days of notification, we reserve the right to withdraw the prize from the winner and pick a replacement winner.</li>\r\n\t<li>Winners are chosen on lucky draw basis</li>\r\n\t<li>Winner needs to share unique Hisense cope which he has received on register mobile number</li>\r\n\t<li>The promoter will notify the winner when and where the prize can be collected / is delivered.</li>\r\n\t<li>The winner agrees to the use of his/her name and image in any publicity material, as well as their entry</li>\r\n\t<li>Hisense team will judge the competition and decide on the winner, which will be picked at random from all complete entries.</li>\r\n\t<li>Winner announcement will be within 2 weeks of campaign closure</li>\r\n\t<li>Hisense India team's decision as to those able to take part and selection of winners is final. No correspondence relating to the competition will be entered into.</li>\r\n\t<li>Hisense India also reserves the right to cancel the competition if circumstances arise outside of its control.</li>\r\n\t<li>TDS (If the winning amount is more than 10k TDS @30% on reward product shall be borne by respective winner for which they need to submit PAN Card copy, Name as per PAN and email id</li>\r\n\t<li>Under no circumstance shall Hisense be liable for any losses suffered whether directly or indirectly, that you or your friends, family may suffer due to usage of the Card and respective gifts claimed thereby.</li>\r\n\t<li>Hisense reserves the right to modify or withdraw the scheme at any time without notice or to provide any other gift of same value. Hisense decision regarding the same shall be final and binding.</li>\r\n\t<li>Taxes and Statutory levies as applicable shall be borne by the recipient of a Gift. The recipient shall pay the amount of applicable taxes and submit PAN Proof to Hisense India before claiming the gifts.</li>\r\n\t<li>Employees of Hisense India Pvt. Ltd. or its authorized dealers or franchise are not eligible for participation.</li>\r\n\t<li>The images shown in creative are for representation purposes only. Technology, features, size & specification may vary from model to model.</li>\r\n\t<li>By opting this offer, you consent to allow Hisense it's gifting partners to collect, store or use personal data for the purposes of this contest,</li>\r\n\t<li>Hisense will not share or sell any personal information provided by means of this offer but may transfer/share the personal information to Hisense affiliated companies gifting partners for the purposes necessary to fulfil the offer.</li>\r\n\t<li>All disputes are subject to Jurisdiction of Court of New Delhi only.</li>\r\n</ul>",
                "content_image": null,
                "is_enabled": 1,
                "priority": 4,
                "content_image_full_url": null
              }
            ]
          }
        ];
        this.currentMainTab = this.metaData[0]?.group?.name
        this.currentTab = this.metaData[0]?.terms_and_conditions[0]?.tab_name;
      }
    });
  }

  currentMainTab = '';

  changeMainTab(tab: string, i: number){
    this.currentMainTab = tab;
    this.currentIndex  = i;
    this.currentTermsIndex = 0;
    this.currentMainTab = this.metaData[this.currentIndex]?.group?.name
    this.currentTab = this.metaData[this.currentIndex]?.terms_and_conditions[this.currentTermsIndex]?.tab_name;
  }

}
