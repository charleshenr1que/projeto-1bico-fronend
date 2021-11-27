import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetalheComponent } from './post-detalhe/post-detalhe.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material.module';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    PostComponent,
    ListaPostComponent,
    NewPostComponent,
    PostDetalheComponent,
    CreatePostComponent,
    MyPostsComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MaterialModule

  ]
})
export class PostModule { }
