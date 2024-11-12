import {Component} from '@angular/core';
import {ApplicantsCardComponent} from '../applicants-card/applicants-card.component';
import {NgForOf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'applicants-page-card-container',
  templateUrl: 'applicants-page-card-container.html',
  styleUrls: ['applicants-page-card-container.css'],
  imports: [
    ApplicantsCardComponent,
    NgForOf
  ]
})
export class ApplicantsPageCardContainer {
  applicants = [
    {
      img: "assets/240_240.jpeg",
      name: "Khali Miller",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      img: "assets/image2.jpeg",
      name: "Lennard Camarillo",
      job: "Manager/bartender",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      img: "assets/240_242.jpeg",
      name: "Martina Holloway",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      img: "assets/240_243.jpeg",
      name: "Clem Fandango",
      job: "Manager/bartender",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      img: "assets/240_244.jpeg",
      name: "Patrick Fitzgerald",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      img: "assets/240_245.jpeg",
      name: "jean philippe",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      img: "assets/240_242.jpeg",
      name: "Martina Holloway",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      img: "assets/240_240.jpeg",
      name: "Khali Miller",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
  ]
}
