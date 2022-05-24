import { Injectable } from '@angular/core';

//Interface
import { ConsumoCliente, FacturaCompleta, MasVendido, ProveedorInternacionalInterface, VentaMesero } from '../interfaces/proveedorInternacional.interface';
import { environment } from "src/environments/environment";
//Utilizar protocolo Http
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProveedorInternacionalService {

  obj_ProveedorInternacionalInterface:ProveedorInternacionalInterface = {
    id: 0,
    identificacion: "",
    proveedor:"",
    pais: "",
    direccion: "",
    tipoProductoVenta: "",
    creditoAprobadoMonto: 0,
    diasCredito: 0,
    requiereAnticipo: 0,
    condicionCredito: "",
    descripcionAnticipo: "",
    rebate: 0,
    usuarioCreo: '',
    fechaCreo: new Date(Date.parse(Date())),
    usuarioModifico: '',
    fechaModifico: new Date(Date.parse(Date())),
    eliminado: false
  }

 //Constante de la ruta del servicio a consumir

 RESTAURANTE = "http://localhost:5000/api"
 PROVEEDORURL = environment.EndPoint+"api/ServiciosDeTareas/Terceros/";

 //PROVEEDORURL = environment.EndPoint+"api/ServiciosDeTareas/Terceros/";
 //PROVEEDORURL = " http://192.168.1.176:8081/api/ServiciosDeTareas/Terceros/";
 //PROVEEDORURL = environment.EndPoint+"api/ServiciosDeTareas/Terceros/";

  //environment.EndPoint+"
  // http://172.30.80.1:8081/

  constructor( private _httpClient:HttpClient
     ) { }






//Método para consultar los proveedores Internacionales
GetProveedoresFacturas(): Observable<FacturaCompleta[]>{

  let url = `${this.RESTAURANTE}/facturacompletas`;
  return this._httpClient.get<FacturaCompleta[]>( url )
}
GetConsumoCliente(fechaInicio:string, fechaFin: string, monto:number): Observable<ConsumoCliente[]>{

  let url = `${this.RESTAURANTE}/consumoclientes/${fechaInicio}/${fechaFin}/${monto}`;
  console.log('URL: ' + url + '');
  return this._httpClient.get<ConsumoCliente[]>( url )
}
GetMasVendido(fechaInicio:string, fechaFin: string): Observable<MasVendido[]>{

  let url = `${this.RESTAURANTE}/masvendidos/${fechaInicio}/${fechaFin}`;
  console.log('URL: ' + url + '');
  return this._httpClient.get<MasVendido[]>( url )
}
GetVentaMesero(fechaInicio:string, fechaFin: string): Observable<VentaMesero[]>{

  let url = `${this.RESTAURANTE}/ventameseros/${fechaInicio}/${fechaFin}`;
  console.log('URL: ' + url + '');
  return this._httpClient.get<VentaMesero[]>( url )
}
GetProveedoresInternacionales(): Observable<ProveedorInternacionalInterface[]>{

    let url = `${this.PROVEEDORURL}ProveedorInternacional`;
    return this._httpClient.get<ProveedorInternacionalInterface[]>( url )
}

//Método para consultar los proveedores
GetProveedorInternacional(id:number): Observable<ProveedorInternacionalInterface>{

      let url = `${this.PROVEEDORURL}ProveedorInternacional/id?id=${id}`;
      console.log('URL: ' + url + '');
      return this._httpClient.get<ProveedorInternacionalInterface>( url )
}

//Método que permite registrar un proveedor internacional
PostProveedorInternacional(proveedorInternacionalInterface: ProveedorInternacionalInterface): Observable<ProveedorInternacionalInterface>
{
  let url = `${this.PROVEEDORURL}ProveedorInternacional`;
  let body = JSON.stringify(proveedorInternacionalInterface);
  let headers = new  HttpHeaders({
    'Content-Type':'application/json'
  });

  return this._httpClient.post<ProveedorInternacionalInterface>(url, body, {headers });
}

PostUpdateProveedorInternacional(proveedorInternacionalInterface: ProveedorInternacionalInterface): Observable<ProveedorInternacionalInterface>
{
  let url = `${this.PROVEEDORURL}ProveedorInternacional/Update/`;
  let body = JSON.stringify(proveedorInternacionalInterface);
  let headers = new  HttpHeaders({
    'Content-Type':'application/json'
  });

  return this._httpClient.post<ProveedorInternacionalInterface>(url, body, {headers });
}


//Método que permite actualizar un proveedor internacional  por su id
PutProveedorInternacional(id: number, proveedorInternacionalInterface: ProveedorInternacionalInterface)
{
  let url = `${this.PROVEEDORURL}ProveedorInternacional/DeleteProveedor/${id}`;
  let body = JSON.stringify(proveedorInternacionalInterface);
  let headers = new  HttpHeaders({
    'Content-Type':'application/json'
  });



   return this._httpClient.put<any>(url, body, {headers}).subscribe();


}





}
