import { Component, OnInit } from '@angular/core';
import { TipoCategoriaService } from 'src/app/services/tipo-categoria.service';
import { TipoCategoria } from 'src/app/models/tipo-categoria.model';

@Component({
  selector: 'app-tipo-categoria-list',
  templateUrl: './tipo-categoria-list.component.html',
  styleUrls: ['./tipo-categoria-list.component.scss']
})
export class TipoCategoriaListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'ativo', 'actions'];
  dataSource: TipoCategoria[] = [];

  constructor(
    private tipoCategoriaService: TipoCategoriaService
  ) { }

  ngOnInit() {
    this.carregarTiposCategoria();
  }

  private carregarTiposCategoria(): void {
    this.tipoCategoriaService.getAll().subscribe(
      tiposCategoria => {
        this.dataSource = tiposCategoria;
      }
    );
  }
}
