import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./business/dashboard/dashboard.component'),
                //canActivate: [AuthGuard]
            },
           
           
             // Rutas de USUARIOS
            { path: 'usuarios', loadComponent: () => import('./business/usuarios/usuarios.component') },
                ]
            },
            {
                path: 'login',
                loadComponent: ()=> import('./business/authentication/login/login.component'),
                //canActivate: [AuthenticatedGuard]
            },
            {
                path: '**',
                redirectTo: 'login'
            }
            
];