import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post, Posts } from '../post';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  @Input()
  descricao = '';
  @Input()
  estado = '';
  @Input()
  date = '';
  @Input()
  titulo = '';
  @Input()
  urlImage = '';
  @Input()
  exibirButton!: boolean;
  @Input()
  id!: string;
  @Input()
  userId!: string;
  @Input()
  annoucementId!: string;
  exibirButtonEdit = false;

  constructor(private router: Router, private service: PostService) {
    router.events.subscribe(() => {
      //this.cabecalho = router.url.split('/')[2];
    });
  }

  ngOnInit(): void {}

  deletar() {
    this.service.deletar(this.userId, this.annoucementId).subscribe((data) => {
    });
    alert('Anúncio deletado com sucesso!')
    this.router.navigate(['post'])
  }

  edit() {
    this.router.navigate(['post/edit-post',this.annoucementId])
    
  }
}
