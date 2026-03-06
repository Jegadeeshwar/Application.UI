import { Routes } from '@angular/router';
import { EnquiriesList } from './features/enquiry/enquiries-list/enquiries-list';
import { AppointmentsList } from './features/appointment/appointments-list/appointments-list';
import { AddEnquiry } from './features/enquiry/add-enquiry/add-enquiry';
import { ContactUs } from './core/pages/contact-us/contact-us';

export const routes: Routes = [
    {
        path: 'admin/enquiries',
        component: EnquiriesList
    },
    {
        path: 'admin/appointments',
        component: AppointmentsList
    },
    {
        path: 'enquiries/add',
        component: AddEnquiry
    },
    {
        path: 'contact-us',
        component: ContactUs
    }
];
