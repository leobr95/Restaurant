import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

  usuarioAutenticado: string  = '';

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ,) { }
  
  ngOnInit(): void {

    this.usuarioAutenticado = this.cookieService.get('username');  

    // let userNameSelect  = '';
    // //Se valida si el usuario esta o no autenticado
    // this.activatedRoute.params.subscribe( params => {
    //     userNameSelect = params['userName'];

    //     console.log('Usuario Autenticado: ' + userNameSelect);

    //     if(userNameSelect == '' || userNameSelect ==  undefined)
    //     {
    //       this.router.navigate(['/login']);
    //     }       
    // });

  }

  eliminarCookie()
  {
    console.log('Si entro a eliminar la cookie');
  }

}
