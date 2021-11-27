import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  href = window.location.href;
  hrefSp = this.href.split("/")[3];
  exibirLogin = false;

  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.service.logout();
  }

  reload() {
   var reloadOne = localStorage.setItem("recarregar", "false");
     var valor = localStorage.getItem("recarregar");
     if(valor == "false"){
       localStorage.setItem("recarregar", "true");
       location.reload();
     }
  }
}
