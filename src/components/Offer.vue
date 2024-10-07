<script setup lang="ts">
import { TipoPromocion } from "@/types/types.ts";

defineProps<{
  offer: TipoPromocion;
}>();

function handleColor(offer: TipoPromocion) {
  if (!offer.habilitado) {
    return "brown-darken-4 text-center";
  }
  if (offer.tipo === "PROMOCIONAL") {
    return "lime-darken-4 text-center";
  }
  return "blue-grey-darken-1 text-center";
}
</script>

<template>
  <v-card
    v-if="offer"
    :color="handleColor(offer)"
    variant="elevated"
    class="mb-1"
  >
    <v-card-item>
      <v-row>
        <v-col cols="10">
          <v-card-title class="text-h6 font-weight-bold">
            {{ offer.concepto }}
          </v-card-title>
          <v-card-subtitle class="text-h6"
            >{{ offer.idConcepto }} | {{ offer.tipo }}</v-card-subtitle
          >
          <v-card-text class="bg-surface-light"> {{ offer.monto }}</v-card-text>
        </v-col>
        <v-col cols="2" class="ml-0">
          <v-btn
            color="white"
            icon="mdi-cog-outline"
            :to="`/offers/edit/${offer.idConcepto}`"
            variant="text"
          >
          </v-btn>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<style scoped>
.v-btn {
  padding: auto;
}

.v-btn::before {
  background-color: transparent;
}

.v-btn i:hover {
  transform: scale(1.15);
}
</style>
