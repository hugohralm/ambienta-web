import {Component} from '@angular/core';
import {BaseResourceListComponent} from '../../../shared/components/base-resource-list/base-resource-list.component';
import {OrgaoService} from '../shared/orgao.service';
import {Orgao} from '../shared/orgao.model';

@Component({
  selector: 'app-orgao-list',
  templateUrl: './orgao-list.component.html',
  styleUrls: ['./orgao-list.component.scss']
})
export class OrgaoListComponent extends BaseResourceListComponent<Orgao> {
  displayedColumns: string[] = ['id', 'nome', 'ativo', 'actions'];

  constructor(
    private orgaoService: OrgaoService,
  ) {
    super(orgaoService);
  }
}
