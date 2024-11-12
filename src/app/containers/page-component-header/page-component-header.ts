import {Component, Input} from '@angular/core';
import {ApplicantsSearchComponent} from '../../components/applicants-search/applicants-search';
import {ApplicantSortComponent} from '../../components/applicant-sort.component/applicant-sort.component';

@Component({
  standalone: true,
  selector: 'page-component-header',
  templateUrl: 'page-component-header.html',
  imports: [
    ApplicantsSearchComponent,
    ApplicantSortComponent
  ],
  styleUrls: ['page-component-header.css']
})
export class PageComponentHeader {
  @Input() pageName: string = 'Recruiter Hub';
  @Input() pageCategory: string = 'My Applicants';
}
