import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css', "../../../assets/styles/bootstrap.min.css"]
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;
  isFormSubmitted = false;
  modalMessage = '';

  constructor(private fb: FormBuilder,
    private api: ApiService) {
    this.form = this.fb.group({
      name: ['', [Validators.required,Validators.pattern(/^[A-Za-z ]+$/)]],
      phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[0-9]*$/)]],
      email: ['', [Validators.required,Validators.email]],
      body: ['', [Validators.required]]
    })
    console.log(this.form)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form)
    if (this.form && this.form.valid) {
      this.api.postContactUsForm(this.form.value).subscribe((res: any) => {
        console.log(res);
        this.modalMessage = res.message;
      }, (err: any) => {
        console.log(err);
        this.modalMessage = err.message;
      })
    } else {
      this.isFormSubmitted = true;
    }
  }

}