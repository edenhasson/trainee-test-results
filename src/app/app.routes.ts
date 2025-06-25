import { Routes } from '@angular/router';
import {ListPageComponent} from './features/trainees/pages/list-page/list-page.component';
import {DetailsPageComponent} from './features/trainees/pages/details-page/details-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/trainees', pathMatch: 'full' },
  { path: 'trainees', component: ListPageComponent },
  { path: 'trainees/:id', component: DetailsPageComponent },
];
