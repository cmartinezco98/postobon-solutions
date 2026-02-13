import { Route } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'distribucion',
        loadChildren: () =>
          import('./distribution/distribution.routes')
            .then(m => m.distributionRoutes),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },

];
