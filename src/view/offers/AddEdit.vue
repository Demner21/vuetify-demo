<template>
  <v-col cols="12">
    <v-form @submit.prevent>
      <v-text-field
          v-model="conceptoOfertaRequest"
          :rules="[v => !!v || 'Concepto is required']"
          label="Concepto"
          clearable
      ></v-text-field>
      <v-select
          :items="tipoOfertas"
          label="Tipo Oferta"
          v-model="tipoOfertaRequest"
          :rules="[v => !!v || 'Tipo Oferta is required']"
          required>
      </v-select>
      <v-select
          :items="membresiaItems"
          v-model="tiempoOfertaRequest"
          label="Tiempo"
          item-value="idConcepto"
          item-title="descripcion"
          :rules="[v => !!v || 'Tiempo is required']"
          required>
      </v-select>
      <v-text-field label="Monto"
                    v-model="montoOfertaRequest"
                    prefix="S/"
                    :rules="montoRules"
                    type="number"
                    min="0"
                    step="any"
      ></v-text-field>
      <v-btn class="mt-2"
             type="submit"
             block>Submit
      </v-btn>
    </v-form>
  </v-col>
</template>

<script setup lang="ts">

import {findOfferByIdConcepto, membresiaItems, tipoOfertas} from "@/types/dataFake.ts";

import {TipoPromocionRequest} from "@/types/types.ts";
import {ref} from "vue";
import {useRoute} from "vue-router";

const enablePromocionOffer = ref<boolean>(false)


const route = useRoute();
const idConcepto = route.params.id;
let title = 'Add Offer';

let offer: TipoPromocionRequest = null
const montoOfertaRequest = ref<number>()
const tiempoOfertaRequest = ref<string>()
const tipoOfertaRequest = ref<string>()
const conceptoOfertaRequest = ref<string>()

if (idConcepto) {
  // edit mode
  title = 'Edit Offer';
  offer = findOfferByIdConcepto(idConcepto)
  if (offer) {
    montoOfertaRequest.value = offer.monto
    tiempoOfertaRequest.value = offer.tiempo
    tipoOfertaRequest.value = offer.tipo
    conceptoOfertaRequest.value = offer.concepto
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

</script>

<style scoped>

</style>