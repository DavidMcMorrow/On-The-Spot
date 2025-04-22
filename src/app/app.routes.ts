import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => import('./pages/rooms/rooms').then( m => m.RoomsPage)
  },
  {
    path: 'add',
    loadComponent: () => import('./pages/add/add').then( m => m.AddPage)
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
];
