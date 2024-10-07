<script setup lang="ts">
defineProps<{
  pagoAdquirido: {
    montoPagado: number;
    tipo: string;
    numeroTransaccion: string;
    fechaPago: string;
  };
}>();
</script>

<template>
  <v-sheet border>
    <v-table class="text-caption" density="compact">
      <tbody>
        <tr align="right">
          <th>Monto:</th>

          <td>{{ pagoAdquirido.montoPagado }}</td>
        </tr>

        <tr align="right">
          <th>Tipo de pago:</th>

          <td>{{ pagoAdquirido.tipo }}</td>
        </tr>

        <tr align="right">
          <th>Transacción:</th>

          <td>{{ pagoAdquirido.numeroTransaccion }}</td>
        </tr>

        <tr align="right">
          <th>Fecha Pago:</th>

          <td>{{ pagoAdquirido.fechaPago }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>
