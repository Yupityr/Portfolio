import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent,ProfileComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
