import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { APP_ROUTES } from '../Routes/routes';
import { BudgetSetupComponent } from './budget-setup/budget-setup.component';
import { ExpensesComponent } from './budget-setup/expenses/expenses.component';
import { GoalsComponent } from './goals/goals.component';
import { InputComponent } from '../components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    WelcomeComponent,
    BudgetSetupComponent,
    ExpensesComponent,
    GoalsComponent,
    InputComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(APP_ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
