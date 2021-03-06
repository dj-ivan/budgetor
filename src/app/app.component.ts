import { Component } from '@angular/core';
import { AuthService } from 'services/auth.service';
import { Router } from '@angular/router';
import { CacheService } from 'services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {
  }
}
