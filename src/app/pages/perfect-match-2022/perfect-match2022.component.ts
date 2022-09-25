import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, NgModel, Validators } from '@angular/forms';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-perfect-match2022',
  templateUrl: './perfect-match2022.component.html',
  styleUrls: ['./perfect-match2022.component.scss']
})
export class PerfectMatch2022Component implements OnInit {


  width;
  height;
  currentStep = 1;
  textFontSize = "16";

  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  @ViewChild('myaudio', { static: false }) audio: any;

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    zipcode: ['', [Validators.required]],
    // terms: ['', [Validators.required]]
  });


  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private fb: FormBuilder,
    private api: ApiService,
    private state: GlobalStateService) {
    this.state.mobileNavToggle.next(false);
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 375) {
        this.height = 300;
        this.width = 300;
        this.textFontSize = "10";
      } else if (window.innerWidth <= 450) {
        this.height = 340;
        this.width = 340;
        this.textFontSize = "10";
      } else if (window.innerWidth <= 576) {
        this.height = 375;
        this.width = 375;
        this.textFontSize = "11";
      } else if (window.innerWidth <= 768) {
        this.height = 400;
        this.width = 400;
        this.textFontSize = "12";
      } else {
        this.height = 500;
        this.width = 500;
      }
    }
  }

  seed = ['Umbrella', 'Football', 'Water Bottle', 'Cap', 'Washing Machine', 'TV', 'FIFA 2022 Ticket', 'Better luck next time'];
  idToLandOn: any;
  items: any[] = [];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
  textAlignment: TextAlignment = TextAlignment.CENTER;

  ngOnInit() {

  }

  ngAfterViewInit() {
    // console.log(this.wheel);
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

  reset() {
    this.wheel.reset();
  }
  before() {
    this.isSpinning = true;
    // alert("Your wheel is about to spin");
  }

  isSpinning = false;
  thankYouImage: any;
  thankYouMessage: any;

  async spin() {
    if (this.isSpinning) {
      return;
    }
    // if (prize) {
    // this.idToLandOn = prize;
    // } else {
    // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    // }
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.wheel.spin();

    this.api.spinTheWheel({ user_id: this.loggedInUserData.id, spin_wheel_prize_id: this.idToLandOn + 1 }).subscribe((res: any) => {
      console.log(res);
      if (res?.data?.next_step == 'thank_you') {
        this.thankYouImage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.image_full_url;
        this.thankYouMessage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.message;
      }
    }, (err: any) => {
      console.log(err);
      this.signupLoading = false;
      console.log(err);
    })
  }

  after() {
    // alert("You have been bamboozled");
    this.audio.nativeElement.play();
    // audio.play();
    this.isSpinning = false;
    setTimeout(() => {
      alert(`Congratulations you are eligible for ${this.seed[this.idToLandOn]}`);
    }, 750)
    setTimeout(() => {
      this.wheel.reset();
      this.currentStep = 4;
      // this.idToLandOn = Math.floor(Math.random() * this.seed.length);
    }, 1000);
  }

  imageLoading = true;

  imageLoaded() {
    this.imageLoading = false;
  }

  isSignupFormSubmitted = false;
  signupLoading = false;
  loggedInUserData: any;

  onSubmit() {
    this.isSignupFormSubmitted = true;
    this.signupLoading = true;
    if (this.signupForm && this.signupForm.valid) {
      this.api.PerfectMatch(this.signupForm.value).subscribe((res: any) => {
        this.loggedInUserData = res?.data?.user;
        this.signupLoading = false;
        console.log(res);
        if (res?.data?.next_step == "take_quiz") {
          this.currentStep = 2;
          this.showRules = true;
          this.questions = res?.data?.next_step_data?.quiz_questions
        }
        if (res?.data?.next_step == 'spin_wheel') {
          this.currentStep = 3;
          this.idToLandOn = res?.data?.next_step_data?.spin_wheel_prize_id - 1;
          this.seed = res?.data?.next_step_data?.spin_wheel_prizes?.map((obj: any) => obj.name);
          this.setSpinData();
        }

        if (res?.data?.next_step == 'thank_you') {
          this.thankYouImage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.image_full_url;
          this.thankYouMessage = res?.data?.next_step_data?.thank_you?.campaign_perfect_match_2022_spin_wheel_prize?.message;
          this.currentStep = 4;
        }
      }, (err: any) => {
        console.log(err);
        this.signupLoading = false;
        console.log(err);
      })
    } else {
      this.signupLoading = false;

    }
  }

  // showStartQuiz = false;
  showRules = false;
  showQuestions = false;
  showQuizResults = false;
  currentQuestion = '';
  currentOptions: any = [];
  selectedOption: any = null;
  questions: any = [];
  currentQuestionNumber = 0;
  quizAnswers: any = [];
  currentQuestionId: any;

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
    this.showRules = false;
    // this.showStartQuiz = false;
    this.showQuizResults = false;
  }

  showQuestion(index: number) {
    this.currentQuestionNumber = index + 1;
    this.currentQuestion = `${index + 1}. ${this.questions[index]?.question}`
    this.currentOptions = this.questions[index]?.answers;
    this.currentQuestionId = this.questions[index]?.id;
  }

  timeCount: any = 30;
  timeText = 'Time Left'
  counter: any;

  startTimer(time: number) {
    clearInterval(this.counter);
    this.timeCount = time;
    this.counter = setInterval(() => {
      this.timeCount = time; //changing the value of timeCount with time value
      time--; //decrement the time value
      if (time < 9) { //if timer is less than 9
        let addZero = this.timeCount;
        this.timeCount = "0" + addZero; //add a 0 before time value
      }
      if (time <= 0) { //if timer is less than 0
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
    this.showQuestion(this.currentQuestionNumber);
    // console.log(this.quizAnswers)
  }

  quizResultMessage = '';
  quizStatus = 0;

  onSubmitQuiz() {
    this.quizAnswers.push({
      question_id: this.currentQuestionId,
      answer_id: this.selectedOption,
    });
    this.selectedOption = null;
    console.log(this.quizAnswers);
    console.log(this.loggedInUserData);
    this.api.submitPerfectMatchQuiz({ quiz: this.quizAnswers, user_id: this.loggedInUserData.id }).subscribe((res: any) => {
      // this.loggedInUserData = res?.data?.user;
      // this.signupLoading = false;
      this.resetQuizCurrentContentDisplay();
      console.log(res);
      if (res?.data?.next_step == "take_quiz") {
        this.quizResultMessage = "and sorry , you didn't score enough to pass the quiz";
        this.quizStatus = 0;
        this.showQuizResults = true;
        this.questions = res?.data?.next_step_data?.quiz_questions;
        console.log(this.questions);
      }

      if (res?.data?.next_step == 'spin_wheel') {
        this.quizStatus = 1;
        this.quizResultMessage = "and congrats! , Now you can try your luck by spinning the Wheel";
        this.showQuizResults = true;

        this.idToLandOn = res?.data?.next_step_data?.spin_wheel_prize_id - 1;
        this.seed = res?.data?.next_step_data?.spin_wheel_prizes?.map((obj: any) => obj.name);
        this.setSpinData();
      }
    }, (err: any) => {
      console.log(err);
      this.resetQuizCurrentContentDisplay();
      this.showRules = true;
      // this.signupLoading = false;
      console.log(err);
    })
  }

  shuffle(array: any) {
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
