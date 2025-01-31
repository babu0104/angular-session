import { Routes } from '@angular/router';
import { UsersComponent } from './modules/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/modules.routes').then(
        (m) => m.modules_routes
      )
  },
  // {
  //   path: 'users', component: UsersComponent
  // },
  // {
  //   path: 'home', component: HomeComponent
  // },
  // {
  //   path: 'about', component: AboutComponent
  // },
  // {
  //   path: 'contact', component: ContactComponent
  // },
  {
    path: '**', component: NotFoundComponent  // wildcard route
  }
];
