import { Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnquiryService } from '../services/enquiry-service';
import { AddEnquiryModel } from '../../models/enquiry.model';

@Component({
  selector: 'app-add-enquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './add-enquiry.html',
  styleUrl: './add-enquiry.css',
})
export class AddEnquiry {
  constructor() {
    effect(() => {
      if (this.enquiryService.addEnquiryStatus() === 'success') {
        alert('Enquiry added successfully.');
        this.addEnquiryGroup.reset();
      }
      if (this.enquiryService.addEnquiryStatus() === 'error') {
        alert('Failed to add enquiry. Please try again.');
      }
    });
  }

  private enquiryService = inject(EnquiryService);

  addEnquiryGroup = new FormGroup({
    fullName: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    phone: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.maxLength(10)]}),
    email: new FormControl<string>('', {nonNullable: true}),
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
    const addEnquiryFormValues = this.addEnquiryGroup.getRawValue();

    const addEnquiryRequestDto: AddEnquiryModel = {
      fullName: addEnquiryFormValues.fullName,
      phone: addEnquiryFormValues.phone,
      email: addEnquiryFormValues.email,
      serviceCatagory: addEnquiryFormValues.serviceCatagory,
      requirement: addEnquiryFormValues.requirement
    }
    this.enquiryService.addEnquiry(addEnquiryRequestDto);
  }
}
