import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const KEY = 'user'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornarToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  salvarToken(token: any){
    localStorage.setItem(KEY, token)
  }

  excluiToken(){
    localStorage.removeItem(KEY)
  }
  //Boolean para retornar se tem ou não token
  possuiToken(){
    return !!this.retornarToken();
  }
}
