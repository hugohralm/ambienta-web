import {Component, OnInit, ElementRef} from '@angular/core';
import {
  Location
} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {CurrentUser} from '../../shared/models/current-user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public focus;
  public location: Location;
  currentUser: CurrentUser;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserDecode;
  }

  logout(): void {
    this.authenticationService.logout();
    this.router
      .navigateByUrl('/', {skipLocationChange: true})
      .then(() => this.router.navigate(['/login']));
  }
}
