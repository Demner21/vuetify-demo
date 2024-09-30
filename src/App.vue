<script setup lang="ts">
</script>

<template>
  <v-app id="inspire" d-flex flex-column mb-6 full-height>
    <v-app-bar app :elevate-on-scroll="true" color="primary" prominent>
      <v-toolbar-title>My files</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/offers">Offers</v-btn>
        <v-btn to="/winners">Winners</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view v-slot="{ Component, route }">
        <!--transition :name="route.meta.transition as string || 'fade'"-->
        <component :is="Component" :key="route.path" />
        <!--/transition-->
      </router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
.active {
  background-color: grey;
}
</style>
