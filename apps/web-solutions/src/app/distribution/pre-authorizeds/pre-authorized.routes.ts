import { Route } from '@angular/router';

export const preAuthorizedRoutes: Route[] = [

  {
    path: 'gestion',
    loadComponent: () =>
      import('./features/management/pre-authorized-management')
        .then(m => m.PreAuthorizedManagement),
  },
  {
    path: '',
    redirectTo: 'gestion',
    pathMatch: 'full',
  },
];
