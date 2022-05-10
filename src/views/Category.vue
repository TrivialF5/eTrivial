<script setup>
import SelectCategory from '../components/SelectCategory.vue';
import Button from '../components/Button.vue';
import Title from '../components/Title.vue';
</script>

<template>
<div class="flex flex-col gap-2 p-10"> 
    <Title /> 
  </div>
  <div class="font-pop">
    <main class="flex flex-col gap-2 p-6">
      <SelectCategory id="17" name="science and nature" />
      <SelectCategory id="23" name="history" />
      <SelectCategory id="21" name="sports" />
      <SelectCategory id="9" name="entertainment" />
      <SelectCategory id="13" name="art and literature" />
      <SelectCategory id="22" name="geography" />
      <SelectCategory id="00" name="random" />
    </main>
    <footer class="fixed bottom-0 flex w-full justify-items-stretch">
      <Button :class="{'bg-red-500': easy}" @click="changeActive('easy')">easy</Button>
      <Button :class="{'bg-red-500': medium}" @click="changeActive('medium')">medium</Button>
      <Button :class="{'bg-red-500': hard}" @click="changeActive('hard')">hard</Button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      difficulty: 'easy',
      easy: true,
      medium: false,
      hard: false,
    }
  },
  methods: {
    changeActive(select) {
      select === 'easy' ? this.easy = true : this.easy = false
      select === 'medium' ? this.medium = true : this.medium = false
      select === 'hard' ? this.hard = true : this.hard = false
      
      this.difficulty = select
    }
  }
}
</script>