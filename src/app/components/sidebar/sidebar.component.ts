import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' }
];

export const ROUTES_ADMIN: RouteInfo[] = [
  { path: '/tipo-categoria', title: 'Tipo categoria',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/categoria', title: 'Categoria',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/orgao', title: 'Órgão',  icon: 'ni-bullet-list-67 text-red', class: '' }
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

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuAdminItems = ROUTES_ADMIN.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
