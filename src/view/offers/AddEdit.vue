<template>
  <v-col cols="12">
    <h2>{{ title }}</h2>
    <v-form @submit.prevent>
      <v-text-field v-model="conceptoOfertaRequest" :rules="[v => !!v || 'Concepto is required']" label="Concepto"
        clearable></v-text-field>
      <v-select :items="tipoOfertas" label="Tipo Oferta" v-model="tipoOfertaRequest"
        :rules="[v => !!v || 'Tipo Oferta is required']" required>
      </v-select>
      <v-select :items="tiempoDeMembresias" v-model="tiempoOfertaRequest" label="Tiempo" item-value="idConcepto"
        item-title="descripcion" :rules="[v => !!v || 'Tiempo is required']" required>
      </v-select>
      <v-text-field label="Monto" v-model="montoOfertaRequest" prefix="S/" :rules="montoRules" type="number" min="0"
        step="any"></v-text-field>
      <v-switch :label="handleHabilitadoLabel" inset v-model="habilitarOfertaRequest" color="primary">
      </v-switch>
      <v-btn class="text-none mb-4" :disabled="!hasChanges" color="indigo-darken-3" size="x-large" variant="flat"
        type="submit" block>Guardar
      </v-btn>
      <v-btn class="text-none" @click="cancelOperation" color="grey-lighten-3" size="x-large" variant="flat" block>
        Cancelar
      </v-btn>
    </v-form>
  </v-col>
</template>

<script setup lang="ts">

import {
  findOfferByIdConcepto,
  tiempoDeMembresias,
  tipoOfertas
} from "@/types/dataFake.ts";

import { TipoPromocionRequest } from "@/types/types.ts";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const idConcepto = route.params.id;
let title = 'Add Offer';

const montoOfertaRequest = ref<number>()
const tiempoOfertaRequest = ref<string>()
const tipoOfertaRequest = ref<string>()
const conceptoOfertaRequest = ref<string>()
const isEditMode = ref<boolean>(false)
const habilitarOfertaRequest = ref<boolean>()

// Variables para guardar el estado original
let originalOffer = ref<TipoPromocionRequest | null>(null);

if (idConcepto) {
  // edit mode
  title = 'Edit Offer';
  let offer: TipoPromocionRequest = findOfferByIdConcepto(idConcepto)
  isEditMode.value = true
  if (offer) {
    montoOfertaRequest.value = offer.monto
    tiempoOfertaRequest.value = offer.tiempo
    tipoOfertaRequest.value = offer.tipo
    conceptoOfertaRequest.value = offer.concepto
    habilitarOfertaRequest.value = offer.habilitado

    // Guardamos el estado original de la oferta para comparación
    originalOffer.value = { ...offer };
  }
}


const montoRules = [
  (value: string) => {
    if (!!value) return true
    // Ensure value is a valid number
    if (/^\d+(\.\d+)?$/.test(value)) return true;
    return 'Value must be a valid number (e.g., 123.45).';
  }
]

// Método para cancelar la operación
const cancelOperation = () => {
  console.log("Cancelando la operación");
  // Limpiar los campos del formulario
  conceptoOfertaRequest.value = undefined;
  tiempoOfertaRequest.value = undefined;
  montoOfertaRequest.value = undefined;
  tipoOfertaRequest.value = undefined;
};

const hasChanges = computed(() => {
  if (!isEditMode.value) return true;
  if (!originalOffer.value) return false;

  return (
    conceptoOfertaRequest.value !== originalOffer.value.concepto ||
    tiempoOfertaRequest.value !== originalOffer.value.tiempo ||
    tipoOfertaRequest.value !== originalOffer.value.tipo ||
    montoOfertaRequest.value !== originalOffer.value.monto ||
    habilitarOfertaRequest.value !== originalOffer.value.habilitado
  );
});

const handleHabilitadoLabel = computed(() => {
  if (habilitarOfertaRequest.value) {
    return "Habilitada"
  } else {
    return 'No habilitada'
  }
})

</script>

<style scoped></style>