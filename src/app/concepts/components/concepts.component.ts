import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { CommonModule } from '@angular/common';
import { ColorizerDirective } from '../directives/colorizer.directive';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ProfileComponent,
    ReportsComponent,
    ColorizerDirective
  ],
  templateUrl: './concepts.component.html',
  styles: ``,
})
export class ConceptsComponent {
  // interpolation related variable
  appName = 'Employee Manager App';

  // property binding related
  profileName = 'John';

  // two way binding
  courseTitle = 'Angular 17';

  myAge = 85;

  status = {
    message: '',
    reportId: '',
  };

  // directives related
  isLoggedIn = false;
  skills = ['html', 'css', 'js', 'ts', 'angular'];

  // event binding related
  handleClickMe(event: any) {
    console.log('Clicked');
    console.log(event);
    // TODO: disable the button
    // TODO: change the label from 'Click me' to 'clicked'
  }

  // custom event binding related
  handleReportGenerated(event: any) {
    // event will capture the data from child comp
    console.log(event);
    this.status = event;
  }
}
