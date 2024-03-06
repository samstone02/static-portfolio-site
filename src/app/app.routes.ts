import { Routes } from '@angular/router';

import { AboutComponent } from './core/pages/about/about.component';
import { ContactComponent } from './core/pages/contact/contact.component';
import { EducationComponent } from './core/pages/education/education.component';
import { PersonalProjectsComponent } from './core/pages/personal-projects/personal-projects.component';
import { WorkExperienceComponent } from './core/pages/work-experience/work-experience.component';

const routes: Routes = [
  { path: '', redirectTo:'/about', pathMatch:'full' },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkExperienceComponent },
  { path: 'school', component: EducationComponent },
  { path: 'play', component: PersonalProjectsComponent },
  { path: 'contact', component: ContactComponent },
];

export default routes;