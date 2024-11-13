import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
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
export class ApplicantsPageCardContainer implements  OnChanges{
  @Input() searchValue = '';
  @Input() sortValue= '';
  applicants = [
    {
      id: 1,
      img: "assets/240_240.jpeg",
      name: "Khali Miller",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 2,
      img: "assets/image2.jpeg",
      name: "Lennard Camarillo",
      job: "Manager/bartender",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 3,
      img: "assets/240_242.jpeg",
      name: "Martina Holloway",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 4,
      img: "assets/240_243.jpeg",
      name: "Clem Fandango",
      job: "Manager/bartender",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 5,
      img: "assets/240_244.jpeg",
      name: "Patrick Fitzgerald",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 6,
      img: "assets/240_245.jpeg",
      name: "jean philippe",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 7,
      img: "assets/240_242.jpeg",
      name: "Martina Holloway",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 8,
      img: "assets/240_240.jpeg",
      name: "Khali Miller",
      job: "Cashier",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 9,
      img: "assets/240_243.jpeg",
      name: "Ahmed",
      job: "aaa",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
    {
      id: 10,
      img: "assets/240_240.jpeg",
      name: "banda",
      job: "bbb",
      email: "email@test.com",
      phone: "+1 800 200 300",
      date: "Feb 20.2023"
    },
  ]
  filteredApplicants = this.applicants;
  ngOnChanges(changes: SimpleChanges) {
    this.filteredApplicants = this.applicants.filter(applicant=>
      (applicant.name.includes(this.searchValue) || applicant.name.includes(this.searchValue.toUpperCase()))
    ).sort((a,b)=> {
      console.log("The value is : " , this.getSortValue(a,b));
      return this.getSortValue(a,b)});
  }

  getSortValue(a:any,b:any){
    switch (this.sortValue) {
      case 'name' : return a.name.localeCompare(b.name);
      case 'job' : return a.job.localeCompare(b.job);
      case 'date' : return a.date.localeCompare(b.date);
      default: return 0;
    }
  }

}
