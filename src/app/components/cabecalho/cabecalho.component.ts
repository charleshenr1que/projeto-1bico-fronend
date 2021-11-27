import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/autenticacao/usuario/usuario';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  
  user$ = this.service.retornarUser();
  //user$!: Observable<Usuario>;
  logado = this.service.estaLogado();
  isLogado = localStorage.setItem("userLogado", "false");
  cabecalho: any

  constructor(private service: UsuarioService, private router: Router) {
    router.events.subscribe(()=>{
      this.logado = this.service.estaLogado();
      this.user$ = this.service.retornarUser();
      this.cabecalho = router.url.split('/')[1];
      console.log(this.cabecalho)
    })
  }

  ngOnInit(): void {
    this.logado = this.service.estaLogado();
    this.user$ = this.service.retornarUser();
   }

  logout() {
    this.router.navigate(['home']);
    this.service.logout();
    localStorage.clear();
  }
}
