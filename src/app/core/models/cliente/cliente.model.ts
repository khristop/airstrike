interface ICliente {
  id_cliente: Number,
  primer_nombre: Text,
  segundo_nombre: Text,
  primer_apellido: Text,
  segundo_apellido: Text,
  tel_fijo: Text,
  tel_movil: Text,
  direccion: Text,
  num_viajero: Number,
  id_usuario: Number,
}

export class ClienteNatural implements ICliente {
  public id_natural: Number,
  public estadoc_civil: Text,
  public genero: Text,
  public fecha_nacimiento: Date,
  public tipo_doc: Text,
  public num_doc: Text,

  constructor();
  constructor(cliente: ICliente);
  constructor(cliente?: any) {
    this.id_cliente = cliente && cliente.id_cliente ? cliente.id_cliente : null;
    this.primer_nombre = cliente && cliente.primer_nombre ? cliente.primer_nombre : null;
    this.segundo_nombre = cliente && cliente.segundo_nombre ? cliente.segundo_nombre : null;
    this.primer_apellido = cliente && cliente.primer_apellido ? cliente.primer_apellido : null;
    this.segundo_apellido = cliente && cliente.segundo_apellido ? cliente.segundo_apellido : null;
    this.tel_fijo = cliente && cliente.tel_fijo ? cliente.tel_fijo : null;
    this.tel_movil = cliente && cliente.tel_movil ? cliente.tel_movil : null;
    this.direccion = cliente && cliente.direccion ? cliente.direccion : null;
    this.num_viajero = cliente && cliente.num_viajero ? cliente.num_viajero : null;
    this.id_usuario = cliente && cliente.id_usuario ? cliente.id_usuario : null;
    this.id_natural = cliente && cliente.id_natural ? cliente.id_natural : null;
    this.estadoc_civil = cliente && cliente.estadoc_civil ? cliente.estadoc_civil : null;
    this.genero = cliente && cliente.genero ? cliente.genero : null;
    this.fecha_nacimiento = cliente && cliente.fecha_nacimiento ? cliente.fecha_nacimiento : null;
    this.tipo_doc = cliente && cliente.tipo_doc ? cliente.tipo_doc : null;
    this.num_doc = cliente && cliente.num_doc ? cliente.num_doc : null;
  }
}

export class ClienteEmpresa implements ICliente {
  public id_c_empresa: Number,
  public nombre_empresa: Text,
  public nit: Text,
  public nic: Date,
  public nombre_contacto: Text,

  constructor();
  constructor(cliente: ICliente);
  constructor(cliente?: any) {
    this.id_cliente = cliente && cliente.id_cliente ? cliente.id_cliente : null;
    this.primer_nombre = cliente && cliente.primer_nombre ? cliente.primer_nombre : null;
    this.segundo_nombre = cliente && cliente.segundo_nombre ? cliente.segundo_nombre : null;
    this.primer_apellido = cliente && cliente.primer_apellido ? cliente.primer_apellido : null;
    this.segundo_apellido = cliente && cliente.segundo_apellido ? cliente.segundo_apellido : null;
    this.tel_fijo = cliente && cliente.tel_fijo ? cliente.tel_fijo : null;
    this.tel_movil = cliente && cliente.tel_movil ? cliente.tel_movil : null;
    this.direccion = cliente && cliente.direccion ? cliente.direccion : null;
    this.num_viajero = cliente && cliente.num_viajero ? cliente.num_viajero : null;
    this.id_usuario = cliente && cliente.id_usuario ? cliente.id_usuario : null;
    this.id_c_empresa = cliente && cliente.id_c_empresa ? this.id_c_empresa : null;
    this.nombre_empresa = cliente && cliente.nombre_empresa ? this.nombre_empresa : null;
    this.nit = cliente && cliente.nit ? this.nit : null;
    this.nic = cliente && cliente.nic ? this.nic : null;
    this.nombre_contacto = cliente && cliente.nombre_contacto ? this.nombre_contacto : null;
  }
}
