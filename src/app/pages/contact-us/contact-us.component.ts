import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { GlobalStateService } from 'src/app/services/global-state.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css', "../../../assets/styles/bootstrap.min.css"]
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;
  isFormSubmitted = false;
  modalMessage = '';
  modalImageName = '';

  constructor(private fb: FormBuilder,
    private api: ApiService,
    private state: GlobalStateService
  ) {
    this.state.mobileNavToggle.next(false);

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      body: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form && this.form.valid) {
      this.api.postContactUsForm(this.form.value).subscribe((res: any) => {
        this.modalMessage = res.message;
        this.modalImageName = 'assets/images/success.png';
      }, (err: any) => {
        console.log(err);
        this.modalImageName = 'assets/images/warning.png'
        this.modalMessage = err.message;
      })
    } else {
      this.isFormSubmitted = true;
    }
  }

}
