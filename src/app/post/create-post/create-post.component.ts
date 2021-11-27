import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { PostService } from 'src/app/services/post.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NovoAnuncio } from './novo-anuncio/novo-anuncio';
import { NovoAnuncioService } from './novo-anuncio/novo-anuncio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  newDate = Date.now();
  anuncio = {} as NovoAnuncio;
  novoAnuncio!: FormGroup;
  fileImage!: File;
  userInSession:any;

  fileName = '';
  user$ = this.serviceUser.retornarUser();

  categorias = ['Construção', 'Jardinagem', 'Arte', 'Motorista', 'Moda', 'Salão', 'Saúde', 'Gastronomia', 'Mecanica']

  estados = ['Acre', 'Alagoas','Amapá', 'Amazonas', 'Bahia', 'Ceará','Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
  ]

  exibirButtonEdit = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: PostService,
    private http: HttpClient,
    private serviceUser: UsuarioService,
    private serviceAnuncio: NovoAnuncioService,
    private route: Router
  ) {
    this.user$ = this.serviceUser.retornarUser();

    this.novoAnuncio = this.formBuilder.group({
      title: [''],
      categoria: [''],
      cidade: [''],
      estado: [''],
      descricao: [''],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {
    this.user$.subscribe((data) => {
      this.userInSession = data.id;
    })
  }

  onSubmit() {
    const formData = new FormData();
      this.serviceAnuncio.createAnuncio(this.novoAnuncio.value, this.userInSession).subscribe((data) => {
        formData.append('id', data.id);
        formData.append('foto', this.fileImage);
        const upload$ = this.http.post('http://localhost:8080/posts/upload', formData).subscribe(re => 
        alert('Anuncio publicado com sucesso')
        );
      }
      )
      alert('Anuncio publicado com sucesso')
      this.route.navigate(['post'])
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
}
