import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'animals',
        canActivate: [authGuard],
        loadComponent: () => import('./features/animals/animal-list/animal-list').then(m => m.AnimalList)
    },
    {
        path: 'animals/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./features/animals/animal-details/animal-details').then(m => m.AnimalDetails)
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
