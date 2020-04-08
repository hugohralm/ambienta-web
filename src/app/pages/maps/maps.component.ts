import { Denuncia } from './../../models/denuncia.model';
import { Component, OnInit } from '@angular/core';
import { DenunciaAnonimaService } from 'src/app/services/denuncia-anonima.service';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  denuncias: Denuncia[] = [];

  constructor(
    private denunciaAnonimaService: DenunciaAnonimaService
  ) { }

  ngOnInit() {
    this.carregarDenunciasAnonimas();
  }

  private carregarDenunciasAnonimas(): void {
    this.denunciaAnonimaService.getAll().subscribe(
      denuncias => {
        this.denuncias = denuncias;
        this.carregarMapa();
      }
    );
  }

  private carregarMapa(): void {
    let map = document.getElementById('map-canvas');
    const lat = map.getAttribute('data-lat');
    const lng = map.getAttribute('data-lng');

    const myLatlng = new google.maps.LatLng(lat, lng);
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

    this.denuncias.forEach(
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
