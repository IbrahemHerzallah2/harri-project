import {Component, EventEmitter, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'applicant-sort',
  templateUrl: 'applicant-sort.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['applicant-sort.component.css']
})
export class ApplicantSortComponent {
  @Output() selectedValueChange = new EventEmitter();
  selectedValue: string = 'default';
  handleChangeValue() {
    this.selectedValueChange.emit(this.selectedValue);
  }
}
