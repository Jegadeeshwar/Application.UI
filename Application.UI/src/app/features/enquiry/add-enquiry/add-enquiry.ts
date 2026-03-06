import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-enquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './add-enquiry.html',
  styleUrl: './add-enquiry.css',
})
export class AddEnquiry {

  addEnquiryGroup = new FormGroup({
    fullName: new FormControl<string>('', {nonNullable: true}),
    phone: new FormControl<string>('', {nonNullable: true}),
    email: new FormControl<string>('', {nonNullable: false}),
    serviceCatagory: new FormControl<string>('', {nonNullable: true}),
    requirement: new FormControl<string>('', {nonNullable: true})
  })

  onSubmit(){
    console.log(this.addEnquiryGroup.getRawValue());
    alert(JSON.stringify(this.addEnquiryGroup.getRawValue(), null, 2));
  }
}
