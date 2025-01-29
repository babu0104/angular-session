import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'users', component: UsersComponent
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'about', component: AboutComponent
    },
    {
      path: 'contact', component: ContactComponent
    },
    {
      path: '**', component: NotFoundComponent  // wildcard route
    }
];
