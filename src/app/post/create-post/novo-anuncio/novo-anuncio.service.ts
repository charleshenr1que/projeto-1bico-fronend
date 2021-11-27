import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NovoAnuncio } from './novo-anuncio';

@Injectable({
  providedIn: 'root'
})
export class NovoAnuncioService {

  httpOptions = {};
  constructor(private http:HttpClient) { }

  createAnuncio(novoAnuncio: NovoAnuncio, id:string): Observable<NovoAnuncio> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'id': id,  'Content-Type': 'application/json'}
      )
    }
    return this.http
      .post<NovoAnuncio>(
        'http://localhost:8080/posts',
        JSON.stringify(novoAnuncio),
        this.httpOptions
      ).pipe(
        tap((res) => {          
          console.log(res);
      })
      );
  }

  editAnuncio(novoAnuncio: NovoAnuncio, id:string): Observable<NovoAnuncio> {
    this.httpOptions = {
      headers: new HttpHeaders({ 'id': id,  'Content-Type': 'application/json'}
      )
    }
    return this.http
      .put<NovoAnuncio>(
        'http://localhost:8080/posts',
        JSON.stringify(novoAnuncio),
        this.httpOptions
      ).pipe(
        tap((res) => {          
          console.log(res);
      })
      );
  }

  createImage(id:string, file:File){
    this.httpOptions = {
      headers: new HttpHeaders({ 'id': id,  'Content-Type': 'application/json'}
      )
    }
    const formData = new FormData();
    formData.append('id', id);
    formData.append('foto', file);
    return this.http
      .post(
        'http://localhost:8080/posts/upload',
        formData
      )
  }

}
