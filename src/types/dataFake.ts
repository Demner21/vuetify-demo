import { CreateWinner, TipoMembresia, TipoPromocion } from "./types.ts";
import { ref } from "vue";
import { RouteParamValue } from "vue-router";


export const tipoOfertas = ref<String[]>([
    'PROMOCIONAL',
    'REGULAR'
])

export const winners = ref<CreateWinner[]>([
    {
        "id": 8,
        "codigo": "2407058",
        "nombre": "Demner",
        "apellidoPaterno": "Crisanto",
        "apellidoMaterno": "Lopez",
        "numeroDocumento": "76544336",
        "fechaRegistro": "05/07/2024",
        "email": "dmnr21@gmail.com",
        "numeroCelular": "987654321",
        "membresia": {
            "idMembresia": null,
            "fechaInicio": null,
            "fechaFin": null,
            "paymentInfo": "NO_DATA",
            "estado": "SIN_MEMBRESIA_ASOCIADA",
            "promocionesAdquiridas": null
        },
        fechaNacimiento: null,
        usuarioCreador: null
    },
    {
        "id": 1,
        "codigo": "2407051",
        "nombre": "Demner",
        "apellidoPaterno": "Lopez",
        "apellidoMaterno": "Crisanto",
        "numeroDocumento": "73079429",
        "fechaRegistro": "16/05/2024",
        "email": "demner21@gmail.com",
        "numeroCelular": "987654321",
        "membresia": {
            "idMembresia": 1,
            "fechaInicio": "17/05/2024 21:33",
            "fechaFin": "17/06/2024 21:33",
            "paymentInfo": "NO_DATA",
            "estado": "CREADA",
            "promocionesAdquiridas": [
                {
                    "idConcepto": "1MTEST24",
                    "fechaCreacion": "16/05/2024 21:33"
                }
            ]
        },
        fechaNacimiento: null,
        usuarioCreador: null
    },
    {
        "id": 5,
        "codigo": "2407055",
        "nombre": "Kelly",
        "apellidoPaterno": "Lopez",
        "apellidoMaterno": "Crisanto",
        "numeroDocumento": "73079422",
        "fechaRegistro": "20/05/2024",
        "email": "dd@gmail.com",
        "numeroCelular": "987654321",
        "membresia": {
            "idMembresia": 3,
            "fechaInicio": "21/05/2024 22:18",
            "fechaFin": "22/05/2024 22:18",
            "paymentInfo": "NO_DATA",
            "estado": "CREADA",
            "promocionesAdquiridas": [
                {
                    "idConcepto": "ROUBASIC",
                    "fechaCreacion": "20/05/2024 22:18"
                }
            ]
        },
        fechaNacimiento: null,
        usuarioCreador: null
    },
    {
        "id": 2,
        "codigo": "2407052",
        "nombre": "Demner",
        "apellidoPaterno": "Lopez",
        "apellidoMaterno": "Crisanto",
        "numeroDocumento": "73079430",
        "fechaRegistro": "19/05/2024",
        "email": "demner21@gmail.com",
        "numeroCelular": "980624190",
        "membresia": {
            "idMembresia": null,
            "fechaInicio": null,
            "fechaFin": null,
            "paymentInfo": "NO_DATA",
            "estado": "SIN_MEMBRESIA_ASOCIADA",
            "promocionesAdquiridas": null
        },
        fechaNacimiento: null,
        usuarioCreador: null
    },
    {
        "id": 6,
        "codigo": "2407056",
        "nombre": "Luis",
        "apellidoPaterno": "Paredes",
        "apellidoMaterno": "Rojas",
        "numeroDocumento": "73097654",
        "fechaRegistro": "05/07/2024",
        "email": "dd@gg.com",
        "numeroCelular": "987654321",
        "membresia": {
            "idMembresia": 4,
            "fechaInicio": "05/07/2024 22:19",
            "fechaFin": "05/08/2024 22:19",
            "paymentInfo": "NO_DATA",
            "estado": "CREADA",
            "promocionesAdquiridas": [
                {
                    "idConcepto": "1MTEST24",
                    "fechaCreacion": "05/07/2024 22:19"
                }
            ]
        },
        fechaNacimiento: null,
        usuarioCreador: null
    },
    {
        "id": 7,
        "codigo": "2407057",
        "nombre": "Diego",
        "apellidoPaterno": "Torres",
        "apellidoMaterno": "Medrano",
        "numeroDocumento": "12345678",
        "fechaRegistro": "05/07/2024",
        "email": "dd@gmail.com",
        "numeroCelular": "987654321",
        "membresia": {
            "idMembresia": 5,
            "fechaInicio": "05/07/2024 22:24",
            "fechaFin": "05/08/2024 22:24",
            "paymentInfo": "NO_DATA",
            "estado": "CREADA",
            "promocionesAdquiridas": [
                {
                    "idConcepto": "1MBASIC",
                    "fechaCreacion": "05/07/2024 22:24"
                }
            ]
        },
        fechaNacimiento: null,
        usuarioCreador: null
    }
])

export const tiempoDeMembresias = ref<TipoMembresia[]>([
    { id: 'ONE_MONTH', descripcion: '1 MES', idConcepto: '1MBASIC' },
    { id: 'TWO_MONTHS', descripcion: '2 MESES', idConcepto: '2MBASIC' },
    { id: 'THREE_MONTHS', descripcion: '3 MESES', idConcepto: '3MBASIC' },
    { id: 'SIX_MONTHS', descripcion: '6 MESES', idConcepto: '6MBASIC' },
    { id: 'ONE_YEAR', descripcion: '1 AÑO', idConcepto: '1YBASIC' },
    { id: 'ROUTINE', descripcion: 'RUTINA', idConcepto: 'ROUBASIC' }
]);


export function findOfferByIdConcepto(idConcepto: string | RouteParamValue[]): TipoPromocion {
    console.log(idConcepto)
    return {
        "idConcepto": "1MTEST24",
        "concepto": "PROMOCION APERTURA 1 MES",
        "tiempo": "ONE_MONTH",
        "monto": 49.90,
        "tipo": "PROMOCIONAL",
        "habilitado": true
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
                "tipo": "PROMOCIONAL",
                "habilitado": false
            },
            {
                "idConcepto": "1MBASIC",
                "concepto": "1 MES",
                "tiempo": "ONE_MONTH",
                "monto": 30.90,
                "tipo": "REGULAR",
                "habilitado": true
            },
            {
                "idConcepto": "1MAPER24_1",
                "concepto": "PROMOCION CM ",
                "tiempo": "ONE_MONTH",
                "monto": 20.90,
                "tipo": "PROMOCIONAL",
                "habilitado": true
            }
        ]],
        ["ONE_YEAR", [
            {
                "idConcepto": "1YBASIC",
                "concepto": "12 MESES",
                "tiempo": "ONE_YEAR",
                "monto": 360.90,
                "tipo": "REGULAR",
                "habilitado": true
            }
        ]],
        ["ROUTINE", [
            {
                "idConcepto": "ROUBASIC",
                "concepto": "1 DIA",
                "tiempo": "ROUTINE",
                "monto": 15.90, "tipo": "REGULAR",
                "habilitado": true
            }
        ]],
        ["THREE_MONTHS", [
            {
                "idConcepto": "3MAPER24",
                "concepto": "PROMOCION APERTURA 3 MESES",
                "tiempo": "THREE_MONTHS",
                "monto": 259.90,
                "tipo": "PROMOCIONAL",
                "habilitado": true
            },
            {
                "idConcepto": "3MBASIC",
                "concepto": "3 MESES",
                "tiempo": "THREE_MONTHS",
                "monto": 90.90,
                "tipo": "REGULAR",
                "habilitado": true
            }
        ]],
        ["TWO_MONTHS", [
            {
                "idConcepto": "2MBASIC",
                "concepto": "2 MESES",
                "tiempo": "TWO_MONTHS",
                "monto": 60.90,
                "tipo": "REGULAR",
                "habilitado": true
            }
        ]],
        ["SIX_MONTHS", [
            {
                "idConcepto": "6MBASIC",
                "concepto": "6 MESES",
                "tiempo": "SIX_MONTHS",
                "monto": 180.90,
                "tipo": "REGULAR",
                "habilitado": true
            }
        ]],
    ]);
}