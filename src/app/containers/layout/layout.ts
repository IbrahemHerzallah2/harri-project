import { Component, HostBinding, ElementRef, AfterViewInit } from '@angular/core';
import {AppHeaderComponent} from '../app-header/app-header.component';
import { ApplicantsPageCardContainer} from '../../components/applicants-page-card-container/applicants-page-card-container';
import {PageComponentHeader} from '../page-component-header/page-component-header';
import {ApplicantsPageComponent} from '../applicants-page/applicants-page';
import {RouterModule, RouterOutlet} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-lay-out',
  templateUrl: 'layout.html',
  styleUrls: ['layout.css'],
  imports: [
    AppHeaderComponent,
    ApplicantsPageCardContainer,
    PageComponentHeader,
    ApplicantsPageComponent,
    RouterOutlet
  ]
})
export class LayoutComponent {

}
