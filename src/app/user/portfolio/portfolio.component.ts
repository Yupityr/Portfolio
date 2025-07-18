import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExtrasComponent } from './extras/extras.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-portfolio',
  imports: [HeaderComponent,ProfileComponent,
    ProjectsComponent,ExtrasComponent,
    AboutComponent,FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
