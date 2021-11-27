import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Posts } from '../post/post';

const URL = 'http://localhost:8080/posts';
const POST_USER = 'http://localhost:8080/posts/fromUser';
const URL_IMAGE = 'http://localhost:8080/posts/upload';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  httpOptions = {};

  constructor(private httpCliente: HttpClient) { }

  listarPosts(): Observable<Posts>{
    return this.httpCliente.get<Posts>(URL);
  }

  deletar(userId:string, annoucementId:string): Observable<String>{
    this.httpOptions = {
      headers: new HttpHeaders({ 'id': userId,  'Content-Type': 'application/json', 'annoucementId': annoucementId}
      )
    }
    return this.httpCliente.delete<String>(URL, this.httpOptions);
  }

  listarPostsFromUser(id: string): Observable<Posts>{
    return this.httpCliente.get<Posts>(`${POST_USER}/${id}`);
  }


  buscarPorId(id: string):  Observable<Post>{
    return this.httpCliente.get<Post>(`${URL}/${id}`);
  }

  readImage(id: string) {
    return this.httpCliente.get(`${URL_IMAGE}/${id}`, {responseType: 'text'})
  }

}
