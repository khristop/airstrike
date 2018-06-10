
class Cliente {
  id_cliente: Number;
  tel_fijo: String;
  tel_movil: String;
  direccion: String;
  num_viajero: Number;
  id_usuario: Number;
  constructor(options: any) {
    this.id_cliente = options.id_cliente || null;
    this.tel_fijo = options.tel_fijo || null;
    this.tel_movil = options.tel_movil || null;
    this.direccion = options.direccion || null;
    this.num_viajero = options.num_viajero || null;
    this.id_usuario = options.id_usuario || null;
  }
}

export class ClienteNatural extends Cliente {
  id_natural: Number;
  primer_nombre: String;
  segundo_nombre: String;
  primer_apellido: String;
  segundo_apellido: String;
  estadoc_civil: String;
  genero: String;
  fecha_nacimiento: Date;
  tipo_doc: String;
  num_doc: String;
  constructor(cliente?: any) {
    super(cliente);
    this.id_natural = cliente.id_natural || null;
    this.primer_nombre = cliente.primer_nombre || null;
    this.segundo_nombre = cliente.segundo_nombre || null;
    this.primer_apellido = cliente.primer_apellido || null;
    this.segundo_apellido = cliente.segundo_apellido || null;
    this.estadoc_civil = cliente.estadoc_civil || null;
    this.genero = cliente.genero || null;
    this.fecha_nacimiento = cliente.fecha_nacimiento || null;
    this.tipo_doc = cliente.tipo_doc || null;
    this.num_doc = cliente.num_doc || null;
  }
}

export class ClienteEmpresa extends Cliente {
  public id_c_empresa: Number;
  public nombre_empresa: String;
  public nit: String;
  public nic: Date;
  public nombre_contacto: String;
  constructor(cliente?: any) {
    super(cliente);
    this.id_c_empresa = cliente.id_c_empresa || null;
    this.nombre_empresa = cliente.nombre_empresa || null;
    this.nit = cliente.nit || null;
    this.nic = cliente.nic || null;
    this.nombre_contacto = cliente.nombre_contacto || null;
  }
}
