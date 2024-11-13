import { Routes } from '@angular/router';
import {ApplicantsPageComponent} from './containers/applicants-page/applicants-page';
import {ApplicantDetailsComponent} from './components/applicant-details-component/applicant-details-component';

const routes: Routes = [
  {
    path: 'applicant-page',
    component:  ApplicantsPageComponent,
    title: 'applicants',
  },
  {
    path: 'applicant-details/:id',
    component:  ApplicantDetailsComponent,
    title: 'applicant-details',
  }
]

export default routes;
