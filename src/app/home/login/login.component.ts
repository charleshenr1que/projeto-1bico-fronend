import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { Usuario } from 'src/app/autenticacao/usuario/usuario';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: any = {};
  userLogged: any = {};
  isAuthenticated: boolean = false;

  userName = ''
  password = ''

  constructor(private router: Router, private service: AutenticacaoService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    console.log(this.user)
    console.log(this.isAuthenticated)
  }

  login(){
    this.service.autenticar(this.userName, this.password).subscribe((data)=>{
      this.user = data.body
      this.router.navigate(['post'])
      this.usuarioService.salvarToken(this.user.userName)
    },
    (error) => {
      alert('Usuario ou senha inválido');
      console.log(error)
    }
    );
  }

 
  //login() {
   // this.service.autenticar(this.userName, this.password).subscribe(
   //   (res) => {
      //  this.router.navigate(['post'])
     //   localStorage.setItem('user', res.body.userName);
     //   console.log(localStorage.getItem('user'))
       // this.getUser();
      // // console.log(localStorage.getItem('user'))
      // this.retornarUser();
    //  },
     // (error) => {
    //    alert('Usuario ou senha inválido');
    //    console.log(error);
    //  }
  //  );
 // }

}
