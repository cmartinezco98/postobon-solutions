import { Route } from '@angular/router';

export const distributionRoutes: Route[] = [
{
    path: '',
    children:[
        {
            path: 'pre-autorizados',
            loadChildren: () => import('./pre-authorizeds/pre-authorized.routes').then(m => m.preAuthorizedRoutes)
        }
    ]
}
];
