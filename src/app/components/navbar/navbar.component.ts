import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES, ROUTES_ADMIN } from '../sidebar/sidebar.component';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public listAdminTitles: any[];
  public location: Location;
  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    this.listAdminTitles = ROUTES_ADMIN.filter((listTitle) => listTitle);
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (titlee.includes(this.listTitles[item].path)) {
        return this.listTitles[item].title;
      }
    }

    for (let item = 0; item < this.listAdminTitles.length; item++) {
      if (titlee.includes(this.listAdminTitles[item].path)) {
        return this.listAdminTitles[item].title;
      }
    }

    return 'Dashboard';
  }
}
