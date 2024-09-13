<script setup lang="ts">

import {TipoPromocion} from "@/types/types.ts";

defineProps<{
  offer: TipoPromocion,
}>()

function handleColor(offer: TipoPromocion) {
  if (offer.tipo==='PROMOCIONAL'){
    return "lime-darken-4 text-center"
  }
  return "blue-grey-darken-1 text-center"
}
</script>|

<template>
  <v-card
      v-if="offer"
      :color="handleColor(offer)"
      variant="elevated"
      class="w-50 h-50"
  >
    <v-card-item>
      <v-card-title>{{ offer.concepto }}</v-card-title>
      <v-card-subtitle>{{ offer.idConcepto }}</v-card-subtitle>
      <v-card-text class="bg-surface-light"> {{ offer.monto }}</v-card-text>
      <v-card-text>{{ offer.tipo }}</v-card-text>
    </v-card-item>
    <v-card-actions>
<!--      <RouterView v-slot="{ Component, route }">
        <component
            :is="Component"
            view-prop="offer"
            :key="route.path"
        />
      </RouterView>-->
      <v-btn primary>
        <router-link :to="`/offers/edit/${offer.idConcepto}`">Edit</router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>