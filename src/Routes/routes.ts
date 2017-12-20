import { Routes } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { BudgetSetupComponent } from 'app/budget-setup/budget-setup.component';
import { LoginComponent } from '../app/login/login.component';


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
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'welome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: []
  },
];
