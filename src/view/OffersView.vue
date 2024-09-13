<script setup lang="ts">

import {createMapOffers, membresiaItems, tipoOfertas} from "@/types/dataFake.ts";
import {TipoMembresia, TipoPromocion, TipoPromocionRequest} from "@/types/types.ts";
import {ref} from "vue";
import Offer from "@/components/Offer.vue";


const selectedTipoMembresia = ref<TipoMembresia | null>()

const offers = ref<Map<string, TipoPromocion[]>>(createMapOffers())

const offerArray = ref<TipoPromocion[]>();

const enablePromocionOffer = ref<boolean>(false)

const montoOfertaRequest = ref<number>()
const tiempoOfertaRequest = ref<string>()
const tipoOfertaRequest = ref<string>()
const conceptoOfertaRequest = ref<string>()

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

function deshabilitar() {
  enablePromocionOffer.value = false
}

function crearOfferRequest(): TipoPromocionRequest {
  return <TipoPromocionRequest>{
    concepto: conceptoOfertaRequest.value,
    tiempo: tiempoOfertaRequest.value,
    monto: montoOfertaRequest.value?.valueOf(),
    tipo: tipoOfertaRequest.value
  }
}

async function crearPromocion() {
  let requestOffer = crearOfferRequest();
  console.log(JSON.stringify(requestOffer))
}
</script>

<template>
  <v-navigation-drawer
      permanent
  >
    <v-list-item title="Promociones" subtitle="Offers"></v-list-item>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item link
                   lines="two"
                   v-for="item in membresiaItems"
                   :key="item.id"
                   :title="item.descripcion"
                   :subtitle="item.idConcepto"
                   @click="updateArray(item)"
                   :class="{active: checkItemSelected(item.id)}"
      />
    </v-list>
  </v-navigation-drawer>

  <v-col cols="12" md="2">
    <v-btn to="/offers/add"> AGREGAR PROMOCION</v-btn>
  </v-col>


  <div class="justify-space-between">
    <v-col cols="12" md="2">
      <div class="pa-4 text-center">

        <v-dialog
            v-model="enablePromocionOffer"
            max-width="50%"
            persistent
        >
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
                class="ma-2"
                color="primary"
                prepend-icon="mdi-plus"
                text="Agregar Promocion"
                variant="tonal"
                v-bind="activatorProps"
            ></v-btn>
          </template>
          <form>
            <v-card prepend-icon="mdi-account"
                    title="CREAR NUEVA PROMOCION">
              <v-card-text>
                <v-row>
                  <v-col cols="6">
                    <v-sheet>
                      <v-text-field
                          label="Concepto"
                          v-model="conceptoOfertaRequest"
                          required>
                      </v-text-field>
                    </v-sheet>
                  </v-col>
                  <v-col cols="6">
                    <v-sheet>
                      <v-select
                          :items="tipoOfertas"
                          label="Tipo Oferta"
                          v-model="tipoOfertaRequest"
                          required>
                      </v-select>
                    </v-sheet>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-sheet v-if="membresiaItems">
                      <v-select
                          :items="membresiaItems"
                          v-model="tiempoOfertaRequest"
                          label="Tiempo"
                          item-value="idConcepto"
                          item-title="descripcion"
                          :rules="[v => !!v || 'Tiempo is required']"
                          required>
                      </v-select>
                    </v-sheet>
                  </v-col>
                  <v-col cols="4">
                    <v-sheet>
                      <v-text-field label="Monto"
                                    v-model="montoOfertaRequest"
                                    prefix="S/"
                      ></v-text-field>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="deshabilitar()"
                       color="red"
                       variant="tonal">
                  Cerrar
                </v-btn>
                <v-btn @click="crearPromocion()"
                       color="green"
                       variant="tonal"
                >
                  Registrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </form>
        </v-dialog>
      </div>

    </v-col>
    <v-container>
      <v-row no-gutters>
        <v-col cols="auto" sm="6" md="6">
          <v-sheet v-for="(offer) in offerArray" class="ma-2 pa-2">
            <Offer v-bind:offer="offer">
<!--              <template v-slot:edit>
                <v-icon color="gray" icon="mdi-pencil"></v-icon>
              </template>-->
            </Offer>
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