import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  error = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserTokenValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.buildForm();
  }
  ngOnDestroy() {}

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get form(): any {
    return this.loginForm.controls;
  }

  onSubmit(): any {
    if (this.loginForm.invalid) {
      return;
    }
    const cpf = this.form.cpf.value.match(/\d+/g).join('');
    this.authenticationService
      .login(cpf, this.loginForm.get('senha').value)
      .subscribe(
        () => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.error = error;
        }
      );
  }
}
