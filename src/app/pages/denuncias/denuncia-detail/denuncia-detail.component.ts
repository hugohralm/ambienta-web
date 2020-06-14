import {Component, Injector, OnInit} from '@angular/core';
import {BaseResourceFormComponent} from "../../../shared/components/base-resource-form/base-resource-form.component";
import {Denuncia} from "../shared/denuncia.model";
import {DenunciaService} from "../../../services/denuncia.service";
import {SharedHelper} from "../../../shared/helper/shared-helper.model";
import {TipoCategoriaService} from "../../tipos-categoria/shared/tipo-categoria.service";
import {TipoCategoria} from "../../tipos-categoria/shared/tipo-categoria.model";

declare const google: any;

@Component({
  selector: 'app-denuncia-detail',
  templateUrl: './denuncia-detail.component.html',
  styleUrls: ['./denuncia-detail.component.scss']
})

export class DenunciaDetailComponent extends BaseResourceFormComponent<Denuncia> implements OnInit {
  colums: number = 0;
  tipoCategorias: TipoCategoria[];
  selectedImageIndex: number = -1;
  backRouterLink = '/denuncias';
  showFlag: boolean;

  constructor(
    protected injector: Injector,
    private denunciaService: DenunciaService,
    private tipoCategoriaService: TipoCategoriaService
  ) {
    super(injector, new Denuncia(), denunciaService, Denuncia.fromJson);
    this.tipoCategoriaService.getAll().subscribe((result) => {
      this.tipoCategorias = result;
    }, () => SharedHelper.showSnackBar("Erro ao listar categorias", this.snackBar))
  }

  ngOnInit() {
    super.ngOnInit();
    this.colums = (window.innerWidth <= 600) ? 1 : (window.innerWidth <= 960) ? 2 : 4;
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      codigoAcompanhamento: [null],//
      status: [null],//
      titulo: [null],//
      descricao: [null],//
      categoria: [null],//
      dataOcorrido: [null],
      latitude: [null],
      longitude: [null],
      municipio: [null],
      cpfDenunciante: [null],//
      nomeDenunciante: [null],//
      email: [null],//
      nomeDenunciado: [{value: null, disabled: true}],
      evidencias: [null]
    });
  }

  protected afterResourceLoad(): void {
    this.carregarMapa();
  }

  private carregarMapa(): void {
    let map = document.getElementById('map-canvas');

    const myLatlng = new google.maps.LatLng(this.resource.latitude, this.resource.longitude);
    const mapOptions = {
      zoom: 17,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(map, mapOptions);

    //ADICIONAR PONTO

    new google.maps.Marker({
      position: new google.maps.LatLng(this.resource.latitude, this.resource.longitude),
      map: map,
      title: this.resource.titulo
    });


  }

  onResize(event: any) {
    this.colums = (event.target.innerWidth <= 600) ? 1 : (event.target.innerWidth <= 960) ? 2 : 4
  }

  showLightbox(index) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }
}
