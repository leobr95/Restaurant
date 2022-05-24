import { Component, OnInit,  } from '@angular/core';
import { Router,  }  from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConsumoCliente, FacturaCompleta, MasVendido, ProveedorInternacionalInterface, VentaMesero } from '../../interfaces/proveedorInternacional.interface';
import { DataTablesModule } from 'angular-datatables';
//Servicios

import { ProveedorInternacionalService } from '../../services/proveedorInternacional.service';
import { Subject } from 'rxjs';
import {languageDataTableApp} from '../datetableconfig/languageDataTableApp';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-administrarfacturas',
  templateUrl: './administrarfacturas.component.html',
})
export class administrarfacturasComponent implements OnInit {



  usuarioAutenticado: string = '';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  obj_Facturas: FacturaCompleta[] = [];
  obj_ConsumoClientes: ConsumoCliente[] = [];
  obj_MasVendidos: MasVendido[] = [];
  obj_VentaMesero: VentaMesero[] = [];




  constructor(
    private _proveedorInternacionalService: ProveedorInternacionalService,


    private router: Router,
    private cookieService: CookieService,

  ) {}

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 100,
      language: languageDataTableApp.spanish_datatables,
    };
    this.cargarFacturas()
    this.consumoClientes()
    this.masVendido()
    this.ventaMesero()


    if (this.cookieService.get('username') != '') {
      this.usuarioAutenticado = this.cookieService.get('username');
    } else {
      this.router.navigate(['/login']);
    }
  }


  cargarFacturas()
  {
      this._proveedorInternacionalService.GetProveedoresFacturas().subscribe((_proveedorInternacionalInterface) => {
              this.obj_Facturas = _proveedorInternacionalInterface;
              console.log(this.obj_Facturas);
              this.dtTrigger.next();
      });
  }

  consumoClientes()
  {
      this._proveedorInternacionalService.GetConsumoCliente("20200101","20230101",60000).subscribe((_proveedorInternacionalInterface2) => {
              this.obj_ConsumoClientes = _proveedorInternacionalInterface2;
              console.log(this.obj_ConsumoClientes);
      });
  }
  masVendido()
  {
      this._proveedorInternacionalService.GetMasVendido("20200101","20230101").subscribe((_proveedorInternacionalInterface2) => {
              this.obj_MasVendidos = _proveedorInternacionalInterface2;
              console.log(this.obj_ConsumoClientes);
      });
  }

ventaMesero()
{
    this._proveedorInternacionalService.GetVentaMesero("20200101","20230101").subscribe((_proveedorInternacionalInterface3) => {
            this.obj_VentaMesero = _proveedorInternacionalInterface3;
            console.log(this.obj_ConsumoClientes);
    });
}


  nuevaFactura() {
    this.router.navigate(['/nuevo']);
  }
  nuevaDetalle() {
    this.router.navigate(['/nuevo']);
  }
  nuevaMesa() {
    this.router.navigate(['/nuevo']);
  }
  nuevaMesero() {
    this.router.navigate(['/nuevo']);
  }
  nuevaSupervisor() {
    this.router.navigate(['/nuevo']);
  }





}
