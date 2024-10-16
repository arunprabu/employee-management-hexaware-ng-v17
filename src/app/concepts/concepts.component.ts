import { Component } from '@angular/core';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [],
  templateUrl: './concepts.component.html',
  styles: ``
})
export class ConceptsComponent {
  // interpolation related variable
  appName = "Employee Manager App";

  // property binding related
  profileName = "John";

  // event binding related
  handleClickMe(event: any) {
    console.log("Clicked");
    console.log(event);
    // TODO: disable the button
    // TODO: change the label from 'Click me' to 'clicked'
  }

}
