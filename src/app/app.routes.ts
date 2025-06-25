import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/trainees/pages/list-page/list-page.component').then(m => m.ListPageComponent),
  }
];
