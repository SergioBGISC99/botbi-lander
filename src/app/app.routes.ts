import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./layouts/main/main') },
  {
    path: 'aviso-de-privacidad',
    loadComponent: () => import('./components/privacy-policy/privacy-policy'),
  },
  {
    path: 'proteccion-datos',
    loadComponent: () => import('./components/data-notice/data-notice'),
  },
  { path: '**', redirectTo: 'home' },
];
