import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// every angular app should be boostrapped with a component called AppComponent
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// bootstrapped component can't be reused