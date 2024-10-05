<script setup lang="ts">

import {TipoPromocion} from "@/types/types.ts";

defineProps<{
  offer: TipoPromocion,
}>()

function handleColor(offer: TipoPromocion) {
  if(!(offer.habilitado)){
    return "brown-darken-4 text-center"
  }
  if (offer.tipo==='PROMOCIONAL'){
    return "lime-darken-4 text-center"
  }
  return "blue-grey-darken-1 text-center"
}
</script>

<template>
  <v-card
      v-if="offer"
      :color="handleColor(offer)"
      variant="elevated"
  >
    <v-card-item>
      <v-card-title>{{ offer.concepto }}</v-card-title>
      <v-card-subtitle>{{ offer.idConcepto }}</v-card-subtitle>
      <v-card-text class="bg-surface-light"> {{ offer.monto }}</v-card-text>
      <v-card-text>{{ offer.tipo }}</v-card-text>
    </v-card-item>
    <v-card-actions>
      <v-btn 
        class="primary"
        color="white"
        size="small"
        prepend-icon="mdi-wrench"
        :to="`/offers/edit/${offer.idConcepto}`"
        >Editar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.v-btn {
  width: 100px;
  min-width: 50px;
}
.v-btn::before {
  background-color: transparent;
}
.v-btn i:hover{
  transform: scale(1.15);
}
</style>