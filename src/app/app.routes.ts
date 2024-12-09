import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then(
                (m) => m.HomeComponent
            )
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact/contact.component').then(
                (m) => m.ContactComponent
            )
    }
    ,
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
    ,
    {
        path: '**',
        redirectTo: 'home'
    }
];
