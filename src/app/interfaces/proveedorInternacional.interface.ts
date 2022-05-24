
export interface ProveedorInternacionalInterface {
    id: number,
    identificacion?: string,
    proveedor: string,
    pais: string,
    direccion: string,
    tipoProductoVenta: string,
    creditoAprobadoMonto: number,
    diasCredito: number,
    requiereAnticipo: number,
    condicionCredito?: string,
    descripcionAnticipo?: string,
    rebate: number,
    usuarioCreo?: string,
    fechaCreo?: Date,
    usuarioModifico?: string,
    fechaModifico?: Date ,
    eliminado: boolean
}

export interface FacturaCompleta {
  codigoFactura: number;
  fechaFactura: string;
  plato: string;
  valor: number;
  supervisor: string;
  numeroMesa: number;
  mesa: string;
  puestos: number;
  identificacionCliente: number;
  nombreCliente: string;
  telefonoCliente: number;
  direccionCliente: string;
  codigoMesero: number;
  nombreMesero: string;
}

export interface ConsumoCliente {
  cliente: number;
  nombre : string;
  apellido: string;
  suma: number;

}
export interface MasVendido {
  plato: string;
  cantidad : number;
  suma: number;

}
export interface VentaMesero {
  mesero: number;
  nombre : string;
  apellido: string;
  suma: number;

}

export interface Facturas {
      facturaId : number,
      fecha: Date,
      clienteId : number,
      cliente : string,
    DetalleFacturaId: number,
     MesaId : number,


}

export interface Mesa {
  mesaId : number,
  Fecha: Date,
  clienteId : number,
  cliente : string,
 DetalleFacturaId: number,
 DetalleFactura: string,
MesaId : number,
 Mesa: string,
 int: number ,
 Mesero :string
}
