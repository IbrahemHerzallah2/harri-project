import {Component, ElementRef, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'applicants-card',
  templateUrl: 'applicants-card.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['applicants-card.component.css']
})
export class ApplicantsCardComponent {
    @Input() img: string = '';
    @Input() name: string = '';
    @Input() job: string = '';
    @Input() email: string = '';
    @Input() phone: string = '';
    @Input() date: string = '';

}
