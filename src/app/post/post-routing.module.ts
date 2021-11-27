import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { ListaPostComponent } from './lista-post/lista-post.component';
import { PostDetalheComponent } from './post-detalhe/post-detalhe.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CadastroComponent } from '../home/cadastro/cadastro.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';


const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      { path: 'new-post', component: NewPostComponent },
      {path: 'create-post', component: CreatePostComponent},
      {path: 'edit-post/:postId', component: EditPostComponent},
      {path: 'my-posts', component: MyPostsComponent},
      { path: '', component: ListaPostComponent },
      {
        path: ':postId',
        component: PostDetalheComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
