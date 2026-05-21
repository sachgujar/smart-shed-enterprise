import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'animals',
        loadComponent: () => import('./features/animals/animal-list/animal-list').then(m => m.AnimalList)
    },
    {
        path: 'animals/:id',
        loadComponent: () => import('./features/animals/animal-details/animal-details').then(m => m.AnimalDetails)
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
