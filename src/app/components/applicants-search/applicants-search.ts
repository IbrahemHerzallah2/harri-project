import {Component, Input, Output,EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import  from 'node:events';

@Component({
  standalone: true,
  selector: 'applicants-search',
  templateUrl: 'applicants-search.html',
  imports: [
    FormsModule,
    IonicModule
  ],
  styleUrls: ['applicants-search.css']
})
export class ApplicantsSearchComponent {
  @Input() icon : boolean = true;
  @Output() inputValueChange = new EventEmitter<string>();
  inputValue: string = '';
  handleChangeInput() {
    this.inputValueChange.emit(this.inputValue);
  }
}
