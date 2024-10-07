<script setup lang="ts">
import Offer from "@/components/Offer.vue";
import { createMapOffers, tiempoDeMembresias } from "@/types/dataFake.ts";
import { TipoMembresia, TipoPromocion } from "@/types/types.ts";
import { ref } from "vue";

const selectedTipoMembresia = ref<TipoMembresia | null>();

const offers = ref<Map<string, TipoPromocion[]>>(createMapOffers());

const offerArray = ref<TipoPromocion[]>();

function updateArray(tipoMembresia: TipoMembresia) {
  selectedTipoMembresia.value = tipoMembresia;
  offerArray.value = offers.value.get(tipoMembresia.id);
}

function checkItemSelected(id: string) {
  if (selectedTipoMembresia.value == null) {
    return false;
  }
  return selectedTipoMembresia.value.id == id;
}
</script>

<template>
  <v-navigation-drawer
    permanent
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    :width="130"
  >
    <v-list-item title="Promociones" subtitle="Offers"></v-list-item>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item
        link
        lines="two"
        v-for="tiempo in tiempoDeMembresias"
        :key="tiempo.id"
        :title="tiempo.descripcion"
        :subtitle="tiempo.idConcepto"
        @click="updateArray(tiempo)"
        :class="{ active: checkItemSelected(tiempo.id) }"
      />
    </v-list>
  </v-navigation-drawer>
  <v-row class="pa-0 ma-0">
    <v-col cols="12" md="2">
      <v-btn to="/offers/add"> AGREGAR</v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="auto">
      <v-sheet v-for="offer in offerArray" :key="offer.idConcepto">
        <Offer v-bind:offer="offer" />
      </v-sheet>
    </v-col>
  </v-row>
</template>
|
<style scoped>
.active {
  background: darkgoldenrod !important;
}
</style>
