import {TipoMembresia, TipoPromocion} from "./types.ts";
import {ref} from "vue";
import {RouteParamValue} from "vue-router";


export const tipoOfertas = ref<String[]>([
    'PROMOCIONAL',
    'REGULAR'
])


export const membresiaItems = ref<TipoMembresia[]>([
    {id: 'ONE_MONTH', descripcion: '1 MES', idConcepto: '1MBASIC'},
    {id: 'TWO_MONTHS', descripcion: '2 MESES', idConcepto: '2MBASIC'},
    {id: 'THREE_MONTHS', descripcion: '3 MESES', idConcepto: '3MBASIC'},
    {id: 'SIX_MONTHS', descripcion: '6 MESES', idConcepto: '6MBASIC'},
    {id: 'ONE_YEAR', descripcion: '1 AÑO', idConcepto: '1YBASIC'},
    {id: 'ROUTINE', descripcion: 'RUTINA', idConcepto: 'ROUBASIC'}
]);


export function findOfferByIdConcepto(idConcepto: string | RouteParamValue[]): TipoPromocion {
    console.log(idConcepto)
    return {
        "idConcepto": "1MTEST24",
        "concepto": "PROMOCION APERTURA 1 MES",
        "tiempo": "ONE_MONTH",
        "monto": 49.90,
        "tipo": "PROMOCIONAL"
    }
}

export function createMapOffers(): Map<string, TipoPromocion[]> {
    return new Map<string, TipoPromocion[]>([
        ["ONE_MONTH", [
            {
                "idConcepto": "1MTEST24",
                "concepto": "PROMOCION APERTURA 1 MES",
                "tiempo": "ONE_MONTH",
                "monto": 49.90,
                "tipo": "PROMOCIONAL"
            },
            {
                "idConcepto": "1MBASIC",
                "concepto": "1 MES",
                "tiempo": "ONE_MONTH",
                "monto": 30.90,
                "tipo": "REGULAR"
            }
        ]],
        ["ONE_YEAR", [
            {
                "idConcepto": "1YBASIC",
                "concepto": "12 MESES",
                "tiempo": "ONE_YEAR",
                "monto": 360.90,
                "tipo": "REGULAR"
            }
        ]],
        ["ROUTINE", [
            {
                "idConcepto": "ROUBASIC",
                "concepto": "1 DIA",
                "tiempo": "ROUTINE",
                "monto": 15.90, "tipo": "REGULAR"
            }
        ]],
        ["THREE_MONTHS", [
            {
                "idConcepto": "3MAPER24",
                "concepto": "PROMOCION APERTURA 3 MESES",
                "tiempo": "THREE_MONTHS",
                "monto": 259.90,
                "tipo": "PROMOCIONAL"
            },
            {
                "idConcepto": "3MBASIC",
                "concepto": "3 MESES",
                "tiempo": "THREE_MONTHS",
                "monto": 90.90,
                "tipo": "REGULAR"
            }
        ]],
        ["TWO_MONTHS", [
            {
                "idConcepto": "2MBASIC",
                "concepto": "2 MESES",
                "tiempo": "TWO_MONTHS",
                "monto": 60.90,
                "tipo": "REGULAR"
            }
        ]],
        ["SIX_MONTHS", [
            {
                "idConcepto": "6MBASIC",
                "concepto": "6 MESES",
                "tiempo": "SIX_MONTHS",
                "monto": 180.90,
                "tipo": "REGULAR"
            }
        ]],
    ]);
}