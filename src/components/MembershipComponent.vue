<script setup lang="ts">
import { ref } from 'vue';
import { CreateWinner, MembershipsStateEnum } from "@/types/types";
import PromocionAdquirida from "@/components/PromocionAdquirida.vue"

defineProps<{
    winner: CreateWinner,
}>()

const tabSelected = ref<string>('Informacion-winner')

function getStatusColor(winner: CreateWinner): string {
    if (winner == null) {
        return "bg-red-darken-1"
    }
    if (winner.membresia == null) {
        return "bg-red-darken-1"
    }

    let estado = winner.membresia.estado as MembershipsStateEnum
    switch (estado as MembershipsStateEnum) {
        case MembershipsStateEnum.CREADA:
            return 'bg-yellow';
        case MembershipsStateEnum.PENDIENTE_EFECTUAR_PAGO:
            return 'default';
        case MembershipsStateEnum.AL_DIA:
            return 'bg-green-darken-1';
        case MembershipsStateEnum.SIN_MEMBRESIA_ASOCIADA:
            return 'bg-blue-grey-lighten-3'
        default:
            return 'bg-red-darken-1';
    }
}
</script>

<template>
    <v-card v-if="winner">
        <v-card-item :class="getStatusColor(winner)">
            <v-card-title>
                <span class="text-h5">
                    Código Membresia::{{ winner.membresia.idMembresia }}
                </span>
            </v-card-title>
            <v-row class="bg-black mt-1" v-if="winner.membresia.fechaInicio && winner.membresia.fechaFin">
                <v-col cols="6">
                    <v-text-field prepend-icon="mdi-calendar-today" label="Día inicio" readonly
                        :model-value="winner.membresia.fechaInicio" variant="solo">
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field prepend-icon="mdi-calendar-today" label="Último día" readonly
                        :model-value="winner.membresia.fechaFin" variant="solo">
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card-item>
        <v-divider inset></v-divider>
        <v-tabs bg-color="dark-lighten-2" v-model="tabSelected">
            <v-tab value="Promociones">Promociones Adquiridas</v-tab>
            <v-tab value="Informacion-winner">Información Winner</v-tab>
        </v-tabs>
        <v-card-text>
            <v-tabs-window v-model="tabSelected">
                <v-tabs-window-item value="Promociones">
                    <!-- Ahora mostramos cada promoción de manera individual -->
                    <v-row v-for="promocion in winner.membresia.promocionesAdquiridas" :key="promocion.idConcepto"
                        :title="promocion.idConcepto" prepend-icon="mdi-star" :subtitle="promocion.fechaCreacion">
                        <v-col cols="12">
                            <PromocionAdquirida :promocionAdquirida="promocion" />
                        </v-col>
                    </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="Informacion-winner">
                    <v-list>
                        <v-list-item prepend-icon="mdi-at" subtitle="Email">
                            <span>{{ winner.email }}</span>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item prepend-icon="mdi-account" subtitle="DNI">
                            <span>{{ winner.numeroDocumento }}</span>
                        </v-list-item>
                        <v-divider inset></v-divider>
                        <v-list-item prepend-icon="mdi-cellphone" subtitle="Celular">
                            <span>{{ winner.numeroCelular }}</span>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-calendar-plus" subtitle="Fecha Registro">
                            <span>{{ winner.fechaRegistro }}</span>
                        </v-list-item>
                    </v-list>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>
