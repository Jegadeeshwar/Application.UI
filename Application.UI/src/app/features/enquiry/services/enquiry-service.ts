import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AddEnquiryModel } from '../../models/enquiry.model';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  private http = inject(HttpClient);
  private apiBaseUrl = '';

  addEnquiryStatus = signal<'idle' | 'loading' | 'error' | 'success'>('idle');

  addEnquiry(enquiry: AddEnquiryModel) {
    this.addEnquiryStatus.set('loading');
    this.http.post<void>(`${this.apiBaseUrl}/api/Enquiries`, enquiry).subscribe({
      next: () => { this.addEnquiryStatus.set('success') },
      error: () => { this.addEnquiryStatus.set('error') }
    });
  }
}
