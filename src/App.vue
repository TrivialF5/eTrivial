<script setup>
import Title from "./components/Title.vue";
</script>

<template>
  <div class="font-pop">
    <div class="flex flex-col gap-2 p-2"> 
      <Title /> 
    </div>
    <router-view></router-view>
  </div>
</template>
