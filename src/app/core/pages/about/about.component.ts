import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {
  title = 'angular_portfolio_site';
}
