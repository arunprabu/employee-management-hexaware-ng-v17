import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

// Decorator
// @Component decorator is connecting html, css, ts and
// ensuring the entire component is usable in a tag 'app-root'
@Component({
  selector: 'app-root', // element selector
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html', // html  -- must
  styleUrl: './app.component.css', // css -- optional
})
export class AppComponent {
  // ts
}
