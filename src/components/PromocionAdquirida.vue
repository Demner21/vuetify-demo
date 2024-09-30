<script setup lang="ts">
import { defineProps, ref } from 'vue';
import PaymentAdquired from "@/components/PaymentAdquired.vue"

// Definimos la propiedad para manejar una sola promoción adquirida
defineProps<{
    promocionAdquirida: {
        idConcepto: string;
        fechaCreacion: string;
    }
}>();

const pagoAsociado = ref()

function obtenerPagoAsociado() {
    pagoAsociado.value =
    {
        "idConcepto": "1MTEST24",
        "montoPagado": 49.90,
        "nombreEmisor": "Demner",
        "tipo": "Al contado",
        "numeroTransaccion": "efbcb65f-c231-4d43-aafe-cc934764830d",
        "idMembership": 1,
        "fechaPago": "16/05/2024 21:33",
        "numeroDocumentoEmisor": "73079427",
        "proceso": "WINNER_FIRST_PAY"
    }
}
</script>

<template>
    <v-row>
        <v-col cols="6">
            <v-card :title="promocionAdquirida.idConcepto" :subtitle="promocionAdquirida.idConcepto">
                <template v-slot:prepend>
                    <v-icon color="yellow-darken-1" icon="mdi-star"></v-icon>
                </template>

                <v-card-text class="mt-0 pa-0">
                    Adquirido: {{ promocionAdquirida.fechaCreacion }}
                </v-card-text>
                <v-card-text class="mt-0 pa-0">
                    Counter: NATH
                </v-card-text>
                <v-card-actions>
                    <v-btn color="orange-darken-4" @click="obtenerPagoAsociado()" class="primary"
                        text="Pago Asociado"></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col v-if="pagoAsociado">
            <PaymentAdquired :pagoAdquirido="pagoAsociado" />
        </v-col>
    </v-row>

</template>
