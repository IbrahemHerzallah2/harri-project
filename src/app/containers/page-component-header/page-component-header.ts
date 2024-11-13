import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Output() inputValueChange = new EventEmitter();
  @Output() selectedValueChange = new EventEmitter();
  onSearchEvent(event: string){
    this.inputValueChange.emit(event);
  }
  onSortEvent(event: string){
    this.selectedValueChange.emit(event);
  }
}
