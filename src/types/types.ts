import * as yup from "yup";
export interface TipoPromocion {
    idConcepto: string,
    concepto: string,
    tiempo: string,
    monto: number,
    tipo:string
}

export interface TipoMembresia {
    id: string,
    descripcion: string,
    idConcepto:string
}

export interface TipoPromocionRequest{
    concepto: string,
    tiempo: string,
    monto: number,
    tipo: string
}


export type ConditionalSchema<T> = T extends string
    ? yup.StringSchema
    : T extends number
        ? yup.NumberSchema
        : T extends boolean
            ? yup.BooleanSchema
            : T extends Record<any, any>
                ? yup.AnyObjectSchema
                : T extends Array<any>
                    ? yup.ArraySchema<any, any>
                    : yup.AnySchema;

export type Shape<Fields> = {
    [Key in keyof Fields]: ConditionalSchema<Fields[Key]>;
};