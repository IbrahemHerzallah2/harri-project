import {Component, Input} from '@angular/core';
import {IonIcon} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  imports: [
    IonIcon
  ],
  styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent {
  @Input() name: string = 'James Appelton';
  @Input() img: string = 'assets/240_240.jpeg';
}
