import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from './usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  url = 'http://localhost:8080/users/log';

  usuario = {} as Usuario

  constructor(private httpCliente:  HttpClient, private usuarioService: UsuarioService) { }
  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{
    return this.httpCliente
      .post(
        this.url,
        {
          userName: usuario,
          password: senha,
        },
        {
          observe: 'response',
        }
      ).pipe(
        tap((res) => {          
          
      })
      );
  }
}