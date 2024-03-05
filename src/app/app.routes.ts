import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './core/pages/about/about.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { ProjectsComponent } from './core/pages/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo:'/overview', pathMatch:'full' },
  { path: 'overview', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
];

export default routes;