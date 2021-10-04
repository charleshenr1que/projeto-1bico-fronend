import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { ListaPostComponent } from './lista-post/lista-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [{ path: 'new-post', component: NewPostComponent },
  {path: '', component: ListaPostComponent}],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
