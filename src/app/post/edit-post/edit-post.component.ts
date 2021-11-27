import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { PostService } from 'src/app/services/post.service';
import { NovoAnuncioService } from '../create-post/novo-anuncio/novo-anuncio.service';
import { Post } from '../post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  postId!: any;
  exibirButtonEdit = false;
  editAnuncio!: FormGroup;
  fileName: any;
  fileImage!: File;
  userInSession:any;
  user$ = this.serviceUser.retornarUser();
  post$!: Post;


  title:any;

  nome= 'sadasdsa';

  constructor(
    private router: Router,
    private activetedRouter: ActivatedRoute,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private serviceAnuncio: NovoAnuncioService,
    private http: HttpClient,
    private serviceUser: UsuarioService
  ) {
    this.user$ = this.serviceUser.retornarUser();

      this.postId = this.activetedRouter.snapshot.params.postId;
      

      console.log(this.post$)
      this.editAnuncio = this.formBuilder.group({
        title: [''],
        categoria: [''],
        cidade: [''],
        estado: [''],
        descrição: [''],
        imageUrl: [''],
        date: [''],
      });
  }

  ngOnInit(): void {
    this.user$.subscribe((data) => {
      this.userInSession = data.id;
      console.log(data)
    })

    this.postService.buscarPorId(this.postId).subscribe((data) => {
      this.getValores(data);
    })
  }

  onSubmit() {
    const formData = new FormData();
    this.serviceAnuncio
      .editAnuncio(this.editAnuncio.value, this.postId)
      .subscribe((data) => {
        formData.append('id', this.postId);
        formData.append('foto', this.fileImage);
        console.log(this.fileImage)
        if(this.fileImage != null){
          const upload$ = this.http
          .post('http://localhost:8080/posts/upload', formData)
          .subscribe((re) => console.log('ok')); 
        }
        else{
          alert('Não teve imagem alterada')
        }
      });
    console.log(this.editAnuncio.value);
  }

  onSubmit2(){
   // const formData = new FormData();
    console.log(this.editAnuncio.value)
  }
  onFileSelected(event: any) {
    console.log(event);
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      this.fileImage = file;
      return file;
    }
    return null;
  }


  getValores(postValores: Post){
    this.editAnuncio = this.formBuilder.group({
      title: [postValores.title],
      categoria: [postValores.categoria],
      cidade: [postValores.cidade],
      estado: [postValores.estado],
      descrição: [postValores.descricao],
      imageUrl: [''],
      date: [''],
    });
  }
}
