import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-enquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './add-enquiry.html',
  styleUrl: './add-enquiry.css',
})
export class AddEnquiry {

  addEnquiryGroup = new FormGroup({
    fullName: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    phone: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.maxLength(10)]}),
    email: new FormControl<string>(''),
    serviceCatagory: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    requirement: new FormControl<string>('', {nonNullable: true, validators: Validators.required})
  })

get validFullName(){
  return this.addEnquiryGroup.controls.fullName;
}
get validPhone(){
  return this.addEnquiryGroup.controls.phone;
}
get validEmail(){
  return this.addEnquiryGroup.controls.email;
}
get validServiceCatagory(){
  return this.addEnquiryGroup.controls.serviceCatagory;
}
get validRequirement(){
  return this.addEnquiryGroup.controls.requirement;
}

  onSubmit(){
    console.log(this.addEnquiryGroup.getRawValue());
    // alert(JSON.stringify(this.addEnquiryGroup.getRawValue(), null, 2));
  }
}
