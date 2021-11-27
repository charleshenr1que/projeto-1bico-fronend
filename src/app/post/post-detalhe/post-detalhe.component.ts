import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detalhe',
  templateUrl: './post-detalhe.component.html',
  styleUrls: ['./post-detalhe.component.css'],
})
export class PostDetalheComponent implements OnInit {
  postId!: any;
  post$!: Observable<Post>;

  imageUrl!:any;

  constructor(
    private activetedRouter: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postId = this.activetedRouter.snapshot.params.postId;
    this.post$ = this.postService.buscarPorId(this.postId);

    this.postService.readImage(this.postId).subscribe((data) =>{
     this.imageUrl = data;
    })
  }
  
}
