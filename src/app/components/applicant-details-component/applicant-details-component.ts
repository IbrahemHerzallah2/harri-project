import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'applicant-details-component',
  templateUrl: 'applicant-details-component.html',
  styleUrls: ['applicant-details-component.css'],
  imports: [
    CommonModule,
  ]
})
export class ApplicantDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  applicantId: Number = 0;
  obj = {};
  constructor() {
    this.applicantId = this.route.snapshot.params['id'];
  }
}
