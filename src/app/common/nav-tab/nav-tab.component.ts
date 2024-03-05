import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-tab',
  standalone: true,
  imports: [],
  templateUrl: './nav-tab.component.html',
  styleUrl: './nav-tab.component.css'
})
export class SideTabComponent {
  @Input('title') title: string = "default"; 
}
