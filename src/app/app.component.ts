import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { CoreComponent } from './core/core.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_portfolio_site';
}
