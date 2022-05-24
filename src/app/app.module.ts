import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Importar HTTP Clients
import {HttpClientModule} from '@angular/common/http';

//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ProveedorInternacionalService }  from './services/proveedorInternacional.service';

//Graficas o reportes
import { ChartsModule } from 'ng2-charts';

//Currency dependent
import { NgxCurrencyModule } from "ngx-currency";

//Angular Material Table
import { DataTablesModule } from "angular-datatables";

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';


import { administrarfacturasComponent } from './component/administrarfacturas/administrarfacturas.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    administrarfacturasComponent,
    LoginComponent,
],
  imports: [
    DataTablesModule,
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxCurrencyModule,
    BrowserAnimationsModule ,

   // NavbarComponent
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    ProveedorInternacionalService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
