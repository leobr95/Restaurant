import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router }  from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

//Interfaces
import { UsuarioInternoInputInterface  }  from '../../interfaces/usuariointernoinput.interface';
import { UsuarioInternoOutputInterface }  from '../../interfaces/usuariointernooutput.interface';

//Servicios

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables Globales
  usuario: string = '';
  passUser: string = '';
  //grupo: number = 1006;
  grupo: number = 1039;

  usuarioInternoInputInterface: UsuarioInternoInputInterface = {
    UserName: '',
    Password: '',
    Grupo_Id: 0
  }

  usuarioInternoOutputInterface: UsuarioInternoOutputInterface[] = [];

  // usuarioInternoOutputInterface: UsuarioInternoOutputInterface = {
  //   userName: '',
  //   nombre: '',
  //   email: '',
  //   grupo_Id: 0
  // }

  constructor(private router:Router,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
  }

  //Método que permite Validar el acceso a la aplicación
  ValidarAcceso(formaValidarAcceso: NgForm)
  {
    console.log('Usuario: ' + this.usuario + ' Password: ' + this.passUser);

    if(this.usuario == "" || this.passUser == "" )
    {
       Swal.fire('Información Requerida', 'Por favor digitar Usuario y contarseña', 'warning');
    }
    else{

      console.log('Entra a validar el isuario y contraseña');
      this.usuarioInternoInputInterface.UserName = this.usuario;
      this.usuarioInternoInputInterface.Password = this.passUser;
      this.usuarioInternoInputInterface.Grupo_Id = this.grupo;

      let peticionLogin: Observable<any>;



        //Se valida si existe usuario con las credenciales digitadas

          this.cookieService.set( 'username','admin'); // To Set Cookie
          //Se redirecciona a la pagina incial de la aplicación
          this.router.navigate(['/administrarfacturas', 'admin']);



     }
  }

}
