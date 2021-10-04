import { NovoUsuarioService } from './novo-usuario/novo-usuario.service';
import { NovoUsuario } from './novo-usuario/novo-usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  user = {} as NovoUsuario;
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUserService: NovoUsuarioService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      userName: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.novoUserService
      .createUser(this.novoUsuarioForm.value)
      .subscribe(() => {});
    console.log(this.novoUsuarioForm.value);
    console.log(this.user);
  }
}
