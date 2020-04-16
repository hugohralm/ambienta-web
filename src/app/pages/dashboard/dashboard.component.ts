import {Component} from '@angular/core';
import {BaseResourceListComponent} from '../../shared/components/base-resource-list/base-resource-list.component';
import {Denuncia} from '../denuncias/shared/denuncia.model';
import {DenunciaService} from '../../services/denuncia.service';
import {LocationService} from '../../services/location.service';

declare const google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseResourceListComponent<Denuncia> {
  lat = '-16.6809646';
  lng = '-49.2557582';
  denunciasAnonimas: Denuncia[] = [];

  constructor(
    private denunciaService: DenunciaService,
    private locationService: LocationService
  ) {
    super(denunciaService);
    // this.carregarLocation();
  }

  protected afterResourceLoad(): void {
    this.denunciasAnonimas = this.resources.filter(denuncia => denuncia.cpfDenunciante == null);
    console.log(this.denunciasAnonimas);
    this.carregarMapa();
  }

  private carregarLocation(): void {
    this.locationService.getPosition().then(pos => {
      this.lat = pos.lat;
      this.lng = pos.lng;
    });
  }

  private carregarMapa(): void {
    let map = document.getElementById('map-canvas');

    const myLatlng = new google.maps.LatLng(this.lat, this.lng);
    const mapOptions = {
      zoom: 17,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(map, mapOptions);

    this.adicionarMarkers(map);
  }

  private adicionarMarkers(map: HTMLElement): void {
    let marker;
    const infowindow = new google.maps.InfoWindow;

    this.resources.forEach(
      denuncia => {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(denuncia.latitude, denuncia.longitude),
          map: map,
          title: denuncia.titulo
        });

        const contentString = '<div id="content"><div id="siteNotice">' +
          '</div>' +
          '<h3 id="firstHeading" class="firstHeading">' + denuncia.titulo + '</h3>' +
          '<div id="bodyContent">' +
          '<p>' + denuncia.descricao + '</p>' +
          '</div></div>';

        google.maps.event.addListener(marker, 'click', (function (mark) {
          return function () {
            infowindow.setContent(contentString);
            infowindow.open(map, mark);
          };
        })(marker));
      }
    );
  }
}
