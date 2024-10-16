<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- router-view é onde os componentes são carregados dinamicamente -->
    <router-view></router-view>
  </div>
</template>

