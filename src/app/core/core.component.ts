import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideTabComponent } from '../common/nav-tab/nav-tab.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SideTabComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent {

}
