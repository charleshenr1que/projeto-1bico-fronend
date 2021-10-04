import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { NewPostComponent } from './new-post/new-post.component';


@NgModule({
  declarations: [
    PostComponent,
    ListaPostComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    RouterModule
  ]
})
export class PostModule { }
