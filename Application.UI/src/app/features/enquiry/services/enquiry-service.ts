import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AddEnquiryModel, GetEnquiryModel } from '../../models/enquiry.model';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  private http = inject(HttpClient);
  private apiBaseUrl = 'https://localhost:7181';

  addEnquiryStatus = signal<'idle' | 'loading' | 'error' | 'success'>('idle');

  addEnquiry(enquiry: AddEnquiryModel) {
    this.addEnquiryStatus.set('loading');
    this.http.post<void>(`${this.apiBaseUrl}/Api/Enquiries/AddEnquiry`, enquiry).subscribe({
      next: () => { this.addEnquiryStatus.set('success') },
      error: () => { this.addEnquiryStatus.set('error') }
    });
  }

  GetEnquiries(enquiry: GetEnquiryModel) {
    this.addEnquiryStatus.set('loading');
    this.http.get<void>(`${this.apiBaseUrl}/Api/Enquiries/GetEnquiries`).subscribe({
      next: () => { this.addEnquiryStatus.set('success') },
      error: () => { this.addEnquiryStatus.set('error') }
    });
  }
}
