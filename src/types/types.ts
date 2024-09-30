export interface TipoPromocion {
    idConcepto: string,
    concepto: string,
    tiempo: string,
    monto: number,
    tipo: string
}

export interface TipoMembresia {
    id: string,
    descripcion: string,
    idConcepto: string
}

export interface TipoPromocionRequest {
    concepto: string,
    tiempo: string,
    monto: number,
    tipo: string
}

export interface CreateWinner {
    id: number,
    codigo: string,
    nombre: string,
    apellidoMaterno: string,
    apellidoPaterno: string,
    email: string | null,
    fechaNacimiento: string | null,
    numeroDocumento: string | null,
    fechaRegistro: string | null,
    usuarioCreador: string | null,
    numeroCelular: string | null,
    membresia: Membership
}

export interface Membership {
    idMembresia: number | null,
    fechaInicio: string | null,
    fechaFin: string | null,
    paymentInfo: string | null,
    estado: string | null,
    promocionesAdquiridas: PromocionAdquiridaPorcliente[] | null
}

export enum MembershipsStateEnum {
    CREADA = "CREADA",
    PENDIENTE_EFECTUAR_PAGO = "PENDIENTE_EFECTUAR_PAGO",
    AL_DIA = "AL_DIA",
    SUSPENDIDA = "SUSPENDIDA",
    SIN_MEMBRESIA_ASOCIADA = "SIN_MEMBRESIA_ASOCIADA"
}


export interface PromocionAdquiridaPorcliente {
    idConcepto: string,
    fechaCreacion: string
}

