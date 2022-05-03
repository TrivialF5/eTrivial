<script setup>
  import SelectCategory from './components/SelectCategory.vue'
</script>

<template>
  <div class="font-pop">
    <main class="p-6 flex flex-col gap-2">
      <SelectCategory name="science and nature" />
      <SelectCategory name="history" />
      <SelectCategory name="sports" />
      <SelectCategory name="entertainment" />
      <SelectCategory name="art and literature" />
      <SelectCategory name="geography" />
      <SelectCategory name="random" />
    </main>
  </div>
</template>
