<script setup>
import Title from "./components/Title.vue";
</script>

<template>
  <div class="font-pop">
    <header class="flex flex-col gap-2 p-2"> 
      <Title /> 
    </header>
    <router-view></router-view>
  </div>
</template>
