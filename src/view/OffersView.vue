<script setup lang="ts">

import Offer from "@/components/Offer.vue";
import { createMapOffers, membresiaItems } from "@/types/dataFake.ts";
import { TipoMembresia, TipoPromocion } from "@/types/types.ts";
import { ref } from "vue";


const selectedTipoMembresia = ref<TipoMembresia | null>()

const offers = ref<Map<string, TipoPromocion[]>>(createMapOffers())

const offerArray = ref<TipoPromocion[]>();


function updateArray(tipoMembresia: TipoMembresia) {
  selectedTipoMembresia.value = tipoMembresia
  offerArray.value = offers.value.get(tipoMembresia.id)
}

function checkItemSelected(id: string) {
  if (selectedTipoMembresia.value
    == null) {
    return false;
  }
  return selectedTipoMembresia.value.id == id;
}


</script>

<template>
  <v-navigation-drawer permanent>
    <v-list-item title="Promociones" subtitle="Offers"></v-list-item>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item link lines="two" v-for="item in membresiaItems" :key="item.id" :title="item.descripcion"
        :subtitle="item.idConcepto" @click="updateArray(item)" :class="{ active: checkItemSelected(item.id) }" />
    </v-list>
  </v-navigation-drawer>

  <v-col cols="12" md="2">
    <v-btn to="/offers/add"> AGREGAR</v-btn>
  </v-col>


  <div class="justify-space-between">
    <v-container>
      <v-row no-gutters>
        <v-col cols="auto" sm="6" md="6">
          <v-sheet v-for="(offer) in offerArray" class="ma-2 pa-2">
            <Offer v-bind:offer="offer"/>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>
|
<style scoped>
.active {
  background: darkgoldenrod !important;
}
</style>