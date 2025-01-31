import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';

export const modules_routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { 
                path: '', redirectTo: 'home', pathMatch: 'full'
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
                path: 'users', component: UsersComponent
            }
        ]
    }
];