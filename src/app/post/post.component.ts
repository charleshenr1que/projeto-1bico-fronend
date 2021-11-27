import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../autenticacao/usuario/usuario';
import { UsuarioService } from '../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  user$!: Observable<Usuario>;
  cabecalho: any;
  exibirButton = false;

  constructor(private service: UsuarioService, private router: Router) {
    router.events.subscribe(()=>{
      this.cabecalho = router.url.split('/')[2];
    })
  }

  ngOnInit(): void {
    this.user$ = this.service.retornarUser();
    console.log(this.user$)
    console.log(this.cabecalho);
  }


  logout() {
    this.router.navigate(['home']);
    this.service.logout();
    localStorage.clear();
  }
}
