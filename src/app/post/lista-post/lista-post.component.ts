import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post, Posts } from '../post';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent implements OnInit {

  @Input()
  posts!: Posts
  
  @Input()
  myposts!: Posts

  constructor(private service: PostService, private router: Router) { 
    router.events.subscribe(()=>{
      this.listarPosts()
    })
  }

  ngOnInit(): void {
    this.listarPosts()

  }

  listarPosts(){
    this.service.listarPosts().subscribe((data)=>{
      this.posts = data
      
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
  }

  postDescription(id: string){
    this.router.navigate(['post',id])
    console.log(id);
  }

   dataAtualFormatada(date:any){
    var data = new Date(date),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}
  
}
