import { Routes } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { BudgetSetupComponent } from 'app/budget-setup/budget-setup.component';
import { LoginComponent } from '../app/login/login.component';
import { SetupUserComponent } from 'app/budget-setup/setup-user/setup-user.component';


export const APP_ROUTES: Routes = [
  // home route
  {
    path: '',
    component: WelcomeComponent
  },
  // budget setup
  {
    path: 'budget-setup',
    component: SetupUserComponent
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
