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
    path: 'tipos-categoria',
    loadChildren:
      '../../pages/tipos-categoria/tipos-categoria.module#TiposCategoriaModule',
  },
  {
    path: 'orgaos',
    loadChildren:
      '../../pages/orgaos/orgaos.module#OrgaosModule',
  },
  {
    path: 'categorias',
    loadChildren:
      '../../pages/categorias/categorias.module#CategoriasModule',
  },
  {
    path: 'usuarios',
    loadChildren:
      '../../pages/usuarios/usuarios.module#UsuariosModule',
  },
  {
    path: 'denuncias',
    loadChildren:
      '../../pages/denuncias/denuncias.module#DenunciasModule',
  }
];
