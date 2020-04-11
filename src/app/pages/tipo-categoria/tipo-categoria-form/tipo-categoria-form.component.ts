import { Component, OnInit } from '@angular/core';
import { TipoCategoria } from 'src/app/models/tipo-categoria.model';
import { SharedHelper } from 'src/app/shared/shared-helper.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoCategoriaService } from 'src/app/services/tipo-categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tipo-categoria-form',
  templateUrl: './tipo-categoria-form.component.html',
  styleUrls: ['./tipo-categoria-form.component.scss']
})
export class TipoCategoriaFormComponent implements OnInit {
  form: FormGroup;
  tipoCategoria: TipoCategoria = null;

  constructor(
    private formBuilder: FormBuilder,
    private tipoCategoriaService: TipoCategoriaService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.max(255)]]
    });

    //const id = this.route.snapshot.paramMap.get('id')
    //this.tipoCategoriaService.getById(id).subscribe
  }

  private patchForm() {
    this.form.patchValue(this.tipoCategoria);
  }

  public salvar() {
    if (this.form.valid) {
      if (this.tipoCategoria != null) {
        this.tipoCategoriaService.update(TipoCategoria.fromJson(this.form.value)).subscribe(
          (TipoCategoria) => {
            SharedHelper.showSnackBar("Tipo categoria atualizado com sucesso", this.snackBar);
          },
          (error) => {
            SharedHelper.showSnackBar("Ocorreu um erro", this.snackBar);
          })
      } else {
        this.tipoCategoriaService.create(TipoCategoria.fromJson(this.form.value)).subscribe(
          (TipoCategoria) => {

            SharedHelper.showSnackBar("Tipo categoria criado com sucesso", this.snackBar);
          },
          (error) => {
            SharedHelper.showSnackBar("Ocorreu um erro", this.snackBar);
          })
      }
    } else {
      SharedHelper.showSnackBar("Preencha todos os campos obrigatórios", this.snackBar);
    }
  }

}