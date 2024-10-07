<script setup lang="ts">
import { onMounted } from "vue";
import { CreateWinner, Membership, MembershipsStateEnum } from "@/types/types";
import MembershipComponent from "@/components/MembershipComponent.vue";
import { ref } from "vue";

import { winners } from "@/types/dataFake.ts";

function getColorFrom(membresia: Membership): string {
  let estadoString = membresia.estado;

  let estado =
    MembershipsStateEnum[estadoString as keyof typeof MembershipsStateEnum];

  switch (estado as MembershipsStateEnum) {
    case MembershipsStateEnum.CREADA:
      return "yellow";
    case MembershipsStateEnum.PENDIENTE_EFECTUAR_PAGO:
      return "red";
    case MembershipsStateEnum.AL_DIA:
      return "green";
    default:
      return "default";
  }
}

const isLoadingSetWinners = ref<boolean>(false);
const winnerSelected = ref<CreateWinner>();

function clickableRow(winner: CreateWinner) {
  winnerSelected.value = winner;
  isLoadingSetWinners.value = false;
}

function getEstado(estado: MembershipsStateEnum): MembershipsStateEnum {
  if (estado != null) {
    return estado;
  }
  return MembershipsStateEnum.SIN_MEMBRESIA_ASOCIADA;
}

const winnerList = ref<CreateWinner[]>();

onMounted(async () => {
  winnerList.value = winners.value;
});

function checkWinnerSelected(id: number): boolean {
  if (winnerSelected.value == null || winnerSelected.value == null) {
    return false;
  }
  if (winnerSelected.value.id == id) {
    return true;
  }
  return false;
}
</script>

<template>
  <div class="d-flex flex-row">
    <h1>Nuestros Winners</h1>
    <v-btn>Agregar Winner</v-btn>
  </div>

  <v-progress-circular
    :size="50"
    color="amber"
    indeterminate
    v-if="isLoadingSetWinners"
  ></v-progress-circular>

  <v-container class="px-0 mx-0">
    <v-row>
      <v-col>
        <v-table v-if="!isLoadingSetWinners && winners" hover>
          <thead class="bg-grey-darken-2">
            <tr>
              <th class="text-left">Código</th>
              <th class="text-left">Nombre</th>
              <th class="text-left">Número documento</th>
              <th class="text-left">Estado actual membresia</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="winners">
              <tr
                v-for="user in winnerList"
                :key="user.id"
                @click="clickableRow(user)"
                :class="{ active: checkWinnerSelected(user.id) }"
              >
                <td>{{ user.id }}</td>
                <td>
                  {{ user.nombre }} {{ user.apellidoPaterno }}
                  {{ user.apellidoMaterno }}
                </td>
                <td>{{ user.numeroDocumento }}</td>
                <td>
                  <template v-if="user.membresia">
                    <v-chip
                      :color="getColorFrom(user.membresia)"
                      variant="flat"
                    >
                      {{
                        getEstado(user.membresia.estado as MembershipsStateEnum)
                      }}
                    </v-chip>
                  </template>
                  <template v-if="user.membresia == null">
                    <v-chip color="red" variant="flat">
                      {{ MembershipsStateEnum.SIN_MEMBRESIA_ASOCIADA }}
                    </v-chip>
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
        </v-table>
      </v-col>
      <v-col v-if="winnerSelected && winnerSelected.membresia">
        <MembershipComponent :winner="winnerSelected" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.green-bg {
  /* Set the display to `table-row` because Vuetify makes `flex` */
  display: table-row;
}

.active {
  background: darkgoldenrod !important;
}

.green-bg:hover {
  /* `!important` is necessary here because Vuetify overrides this */
  background: gray !important;
  cursor: pointer;
}
</style>
