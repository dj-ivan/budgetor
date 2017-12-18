import { Routes } from '@angular/router';
import { WelcomeComponent } from 'containers/welcome/welcome.component';
import { BudgetSetupComponent } from 'containers/budget-setup/budget-setup.component';


export const APP_ROUTES: Routes = [
  // home route
  {
    path: '',
    component: WelcomeComponent
  },
  // budget setup
  {
    path: 'budget-setup',
    component: BudgetSetupComponent
  },
  {
    path: '',
    redirectTo: 'welome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'welome',
    pathMatch: 'full'
  }
];
