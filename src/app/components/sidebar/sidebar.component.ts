import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'DASHBOARD', icon: 'fa fa-desktop', class: ''},
  {path: '/denuncias', title: 'DENÚNCIAS', icon: 'fa fa-bullhorn text-red', class: ''},
  {path: '/usuarios', title: 'USUÁRIO', icon: 'fa fa-users text-primary', class: ''}
];

export const ROUTES_ADMIN: RouteInfo[] = [
  {path: '/orgaos', title: 'ÓRGÃO', icon: 'fa fa-list', class: ''},
  {path: '/tipos-categoria', title: 'TIPO CATEGORIA', icon: 'fa fa-list', class: ''},
  {path: '/categorias', title: 'CATEGORIA', icon: 'fa fa-list', class: ''}

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public menuAdminItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuAdminItems = ROUTES_ADMIN.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  logout(): void {
    this.authenticationService.logout();
    this.router
      .navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/login']));
  }
}
