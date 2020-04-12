import {Component, OnInit, ViewChild} from '@angular/core';
import {TipoCategoriaService} from 'src/app/services/tipo-categoria.service';
import {TipoCategoria} from 'src/app/models/tipo-categoria.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ConfirmarExclusaoDialogComponent} from "../../../components/confirmar-exclusao-dialog/confirmar-exclusao-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SharedHelper} from "../../../shared/shared-helper.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-tipo-categoria-list',
  templateUrl: './tipo-categoria-list.component.html',
  styleUrls: ['./tipo-categoria-list.component.scss']
})
export class TipoCategoriaListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'ativo', 'actions'];
  dataSource: MatTableDataSource<TipoCategoria>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private tipoCategoriaService: TipoCategoriaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<TipoCategoria>();
    this.dataSource.sort = this.sort;
    this.carregarTiposCategoria();
  }

  private carregarTiposCategoria(): void {
    this.tipoCategoriaService.getAll().subscribe(
      tiposCategoria => {
        this.dataSource.data = tiposCategoria;
      }
    );
  }

  public excluirDialog(tipoCategoria: TipoCategoria) {
    SharedHelper.showDeleteDialog(this.dialog, tipoCategoria.id + ' - ' + tipoCategoria.nome)
      .subscribe(result => {
        if (result) {
          this.tipoCategoriaService.delete(tipoCategoria.id).subscribe(
            () => {
              this.carregarTiposCategoria();
              SharedHelper.showSnackBar("Item excluido com sucesso" ,this.snackBar);
            },
            () => SharedHelper.showSnackBar("Erro ao excluir o item" ,this.snackBar),
          );
        }
      })
  }
}
