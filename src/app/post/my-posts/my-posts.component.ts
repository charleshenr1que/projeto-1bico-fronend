import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { PostService } from 'src/app/services/post.service';
import { Posts } from '../post';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts!: Posts;

  openButton = true;


  constructor(private router: Router, private service: PostService, private serviceUser: UsuarioService) { 
    router.events.subscribe(()=>{

    })
  }

  ngOnInit(): void {
  this.listar()
  }

  listar(){
    this.serviceUser.retornarUser().subscribe((data)=>{
      this.service.listarPostsFromUser(data.id).subscribe((data)=>{
        this.posts = data
        console.log(this.posts);
        this.posts.forEach(element => {
          this.service.readImage(element.id).subscribe((data) =>{
            element.imageUrl = data;
          })
        });
      },
      (error) => {
        alert('Nenhum item na lista');
        console.log(error)
      }
      );
    })
  }

  postDescription(id: string){
    this.router.navigate(['post',id])
    console.log(id);
  }

  deletar(){
    console.log('deletado')
  }

  editar2(){

  }
}
