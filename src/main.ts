import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PasswordComponent } from './app/app.component';

bootstrapApplication(PasswordComponent, appConfig)
  .catch((err) => console.error(err));
