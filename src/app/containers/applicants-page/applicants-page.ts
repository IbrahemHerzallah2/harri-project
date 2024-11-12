import {Component} from '@angular/core';
import {
  ApplicantsPageCardContainer
} from '../../components/applicants-page-card-container/applicants-page-card-container';
import {PageComponentHeader} from '../page-component-header/page-component-header';

@Component({
  standalone: true,
  selector: 'applicants-page',
  templateUrl: 'applicants-page.html',
  styleUrls: ['applicants-page.css'],
  imports: [
    ApplicantsPageCardContainer,
    PageComponentHeader
  ]
})
export class ApplicantsPageComponent {

}
