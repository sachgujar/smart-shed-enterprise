import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'animals',
        loadComponent: () => import('./features/animals/animal-list/animal-list').then(m => m.AnimalList)
    }
];
