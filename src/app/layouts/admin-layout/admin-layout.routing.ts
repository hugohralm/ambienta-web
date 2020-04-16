import {Routes} from '@angular/router';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {AuthGuardService} from 'src/app/services/auth-guard.service';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'tipo-categoria',
    loadChildren:
      '../../pages/tipo-categoria/tipo-categoria.module#TipoCategoriaModule',
  },
];
