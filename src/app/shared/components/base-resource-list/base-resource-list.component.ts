import {OnInit, ViewChild} from '@angular/core';
import {BaseResourceModel} from '../../models/base-resource.model';
import {BaseResourceService} from '../../services/base-resource.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {
  resources: T[] = [];
  dataSource: MatTableDataSource<T>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  protected constructor(protected resourceService: BaseResourceService<T>) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<T>();
    this.dataSource.sort = this.sort;
    this.resourceService.getAll().subscribe(
      resources => {
        this.resources = resources.sort((a, b) => a.id - b.id);
        this.dataSource.data = this.resources;
        this.afterResourceLoad();
      },
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => {
          this.resources = this.resources.filter(element => element !== resource);
          this.dataSource.data = this.resources;
        },
        () => alert('Erro ao tentar excluir!')
      );
    }
  }

  protected afterResourceLoad(): void {
  }
}
