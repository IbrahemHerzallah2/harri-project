import { Routes } from '@angular/router';
import {ApplicantsPageComponent} from './containers/applicants-page/applicants-page';

const routes: Routes = [
  {
    path: 'applicant-page',
    component:  ApplicantsPageComponent,
    title: 'applicants',
  }
]

export default routes;
