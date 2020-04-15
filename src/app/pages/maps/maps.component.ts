import { LocationService } from '../../services/location.service';
import { Denuncia } from '../../models/denuncia.model';
import { Component, OnInit } from '@angular/core';
import { DenunciaService } from 'src/app/services/denuncia.service';
import {BaseResourceListComponent} from '../../shared/components/base-resource-list/base-resource-list.component';
import {TipoCategoria} from '../tipo-categoria/shared/tipo-categoria.model';
import {TipoCategoriaService} from '../tipo-categoria/shared/tipo-categoria.service';

declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent extends BaseResourceListComponent<Denuncia> {
  lat = '-16.6809646';
  lng = '-49.2557582';

  constructor(
    private denunciaService: DenunciaService,
    private locationService: LocationService
  ) {
    super(denunciaService);
    this.carregarLocation();
  }

  protected afterResourceLoad(): void {
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
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function(mark) {
          return function() {
              infowindow.setContent(denuncia.titulo);
              infowindow.open(map, mark);
          };
        })(marker));
      }
    );
  }
}
