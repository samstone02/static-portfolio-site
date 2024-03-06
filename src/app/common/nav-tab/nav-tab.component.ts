import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-nav-tab',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-tab.component.html',
  styleUrl: './nav-tab.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SideTabComponent {
  @Input('title') title: string = ""; 
  @Input('routerLink') routerLink: string = "";
}
