import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

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
  inputValue : string = '';
}
