import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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

  issueType = 0;

  issueTypes = [
    {
      name: 'Service',
      id: 1
    },
    {
      name: 'Repair',
      id: 2
    },
    {
      name: 'Offers',
      id: 3
    },
    {
      name: 'Campaigns',
      id: 4
    },
  ];

  selectedCampaign = null;

  updateIssueType(event: any) {
    this.issueType = event.target.value;
  }

  today;

  @ViewChild('ErrorMessage') ErrorMessageRef: any;

  constructor(private fb: FormBuilder,
    private api: ApiService,
    private state: GlobalStateService,
    private title: Title
  ) {
    this.state.mobileNavToggle.next(false);
    this.title.setTitle('Hisense India | Contact US');
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      body: ['', [Validators.required]]
    })

    const date = new Date();
    this.today = `${date.getFullYear()}-${(String(date.getMonth() + 1)).padStart(2, '0')}-${(String(date.getDate())).padStart(2, '0')}`;

  }

  selectedVarient: any;

  productVarients = [];
  selectedCatVarients = [];
  metaData: any;

  ngOnInit(): void {
    this.getMetaData();
  }

  getMetaData() {
    this.api.getContactUsMetaData({ pageUrl: '/contact-us' }).subscribe((res: any) => {
      // console.log(res);
      this.productVarients = res.data.product_variants.map((item: any) => {
        item.productFullDetails = `${item.name} (${item.code})`
        return item;
      });

      this.metaData = res.data;
    }, (err) => {
      console.log(err);
    })
  }

  selectedCategory: any = null;
  product_variants: any = [];
  updateCategory(event: any) {
    this.product_variants = [];
    // console.log(this.metaData.categories, event.target.value);
    this.selectedCategory = this.metaData.categories.find((cat: any) => cat.id == event.target.value);
    // console.log(this.selectedCategory);
    if (this.selectedCategory) {
      this.selectedCategoryId = this.selectedCategory.id;
      // console.log(this.selectedCategory);
      this.selectedCategory.subcategories.forEach((obj: any) => {
        obj.category_products.forEach((cp: any) => {
          cp.product.product_variants.forEach((pv: any) => {
            if (pv.code != pv.name) {
              pv.displayName = `${pv.code} - ${pv.name}`
            } else {
              pv.displayName = `${pv.name}`
            }
            this.product_variants.push(pv);
          })
        })
      })
      // console.log(this.product_variants);
    } else {
      this.selectedCategory = null;
      this.selectedProductVarientId = null;
      this.updateProductVarient({target: null});
    }
    // this.selectedSubCategoryId = null;
    // this.selectedProductId = null;
    // this.updateSubCategory({ target: { value: this.selectedCategoryId }});
  }

  selectedSubCategory: any;
  updateSubCategory(event: any) {
    // console.log(this.selectedCategory.subcategories, event.target.value);
    this.selectedSubCategory = this.selectedCategory.subcategories.find((cat: any) => cat.id == event.target.value);
    // console.log(this.selectedSubCategory);
    this.selectedSubCategoryId = this.selectedSubCategory.id;
    this.selectedProductId = null;
    this.selectedProductVarientId = null;
  }

  selectedProduct: any = null;
  updateProduct(event: any) {
    // console.log(this.selectedSubCategory.category_products, event.target.value);
    this.selectedProduct = this.selectedSubCategory.category_products.find((cat: any) => cat.product.id == event.target.value);
    this.selectedProductId = this.selectedProduct.product.id;
    this.selectedProductVarientId = null;
    if (this.selectedProduct.product.product_variants.length == 1) {
      this.updateProductVarient({ target: { value: this.selectedProduct.product.product_variants[0].id } })
    }
    // console.log(this.selectedProduct);
  }

  selectedProductVarientId: any = "";
  selectedProductId = null;
  selectedCategoryId = "";
  selectedSubCategoryId = null;
  updateProductVarient(event: any) {
    // console.log(event.target.value);
    // this.selectedProductVarient = this.selectedProduct.product.product_variants.find((cat: any) => cat.id == event.target.value);
    this.selectedProductVarient = this.product_variants.find((cat: any) => cat.id == event.target.value);
    // console.log(this.selectedProductVarient)
    this.selectedVarient = null;
    if(this.selectedProductVarient){
      this.selectedProductVarientId = this.selectedProductVarient.id;
    }else{
      this.selectedProductVarientId = null;
      this.selectedProductVarient = null;
    }
  }

  isLoading = false;

  onSubmit() {
    let isValid: any = false;
    if (this.issueType == 1 || this.issueType == 2) {
      isValid = this.name && this.email && this.phone && this.address && this.city && this.state1 && this.zipcode && this.selectedTopic.title && this.selectedSubTopic && this.body && this.selectedProductVarient && this.product_purchase_date && this.privacyPolicy;
    }else if(this.issueType == 3){
      isValid = this.name && this.email && this.phone && this.address && this.city && this.state1 && this.zipcode && this.selectedProductVarient && this.privacyPolicy;
    }else{
      isValid = this.name && this.email && this.phone && this.address && this.city && this.state1 && this.zipcode && this.privacyPolicy;
    }

    // console.log(isValid);
    if (isValid) {
      this.isLoading = true;
      const body = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        body: this.body,
        product_purchase_date: this.product_purchase_date,
        city: this.city,
        state: this.state1,
        zipcode: this.zipcode,
        subject: this.selectedTopic?.title,
        sub_topic: this.selectedSubTopic,
        product_variant_id: this.selectedProductVarient?.id || null,
      }
      this.api.postContactUsForm(body).subscribe((res: any) => {
        this.modalMessage = res.message;
        this.modalImageName = 'assets/images/success.webp';
        this.isLoading = false;
      }, (err: any) => {
        console.log(err);
        this.modalImageName = 'assets/images/warning.png'
        this.modalMessage = err.message;
        this.isLoading = false;
      })
    } else {
      this.isFormSubmitted = true;
      setTimeout(() => {
        // console.log(this.ErrorMessageRef)
        if (this.ErrorMessageRef) {
          this.ErrorMessageRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 250)
    }
  }

  selectedProductVarient: any = null;
  selectSearchProductChanged(event: any) {
    // console.log(event);
    this.selectedProductVarient = event;
    this.selectedCategory = null;
    this.selectedSubCategory = null;
    this.selectedProduct = null;
  }

  setRegistrationDate(event: any) {
    // console.log(event);
  }

  selectedTopic: any;
  changeTopic(event: any) {
    this.selectedTopic = this.metaData.contact_topics.find((cat: any) => cat.title == event.target.value);
    // console.log(this.selectedTopic)
  }

  selectedSubTopic: any;
  changeSubTopic(event: any) {
    this.selectedSubTopic = event.target.value;
  }

  body = '';
  product_purchase_date = '';
  zipcode = ''
  state1 = ''
  city = ''
  address = ''
  email = ''
  phone = ''
  name = ''
  privacyPolicy = 0;

  checkPhonePattern(value?: any) {
    return !(/^[0-9]*$/.test(value ? value : this.phone));
  }

  checkEmailPattern() {
    return !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email));
  }

}