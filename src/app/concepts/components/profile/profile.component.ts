import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h4>My Profile Info</h4>
      <p>Age: {{age}} </p>
    </div>
  `,
  styles: ``
})
export class ProfileComponent {
  // Let's create a variable and make it a custom property @Input()
  @Input() age = 1;
}
