import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../autenticacao/usuario/usuario';
import { UsuarioService } from '../autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  user$:Observable<Object>;

  usuario: any = {
    announcements: '',
    email: '',
    fullName: '',
    id: '',
    password:'',
    userName:''
  }

  constructor(private service: UsuarioService, private router: Router) {
    
  this.user$ = service.retornarUser()
  }

  ngOnInit(): void {
    this.recuperarUser()
  }
  
  recuperarUser(){
    this.service.retornarUser().subscribe(res => {
      this.usuario = res;
      console.log(this.usuario.userName)
      console.log(this.usuario)
      console.log(res)
    })
  }

  logout(){
    this.router.navigate(['home'])
    localStorage.clear();
  }

}
