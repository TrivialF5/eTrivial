<script setup>
import SelectCategory from '../components/SelectCategory.vue';
import Button from '../components/Button.vue';
</script>

<template>
  <main class="flex flex-col gap-2 p-6 pb-24">
    <SelectCategory id="17" :difficulty="difficulty" name="science and nature" />
    <SelectCategory id="23" :difficulty="difficulty" name="history" />
    <SelectCategory id="21" :difficulty="difficulty" name="sports" />
    <SelectCategory id="9"  :difficulty="difficulty" name="entertainment" />
    <SelectCategory id="13" :difficulty="difficulty" name="art and literature" />
    <SelectCategory id="22" :difficulty="difficulty" name="geography" />
    <SelectCategory id="00" :difficulty="difficulty" name="random" />
  </main>
  <footer class="fixed bottom-0 flex w-full justify-items-stretch">
    <Button :class="{'bg-red-500': easy}" @click="changeActive('easy')">easy</Button>
    <Button :class="{'bg-red-500': medium}" @click="changeActive('medium')">medium</Button>
    <Button :class="{'bg-red-500': hard}" @click="changeActive('hard')">hard</Button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      difficulty: 'medium',
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
  },
  created(){
    if (localStorage.getItem('difficulty')) {
      this.difficulty = localStorage.getItem('difficulty');
      this.changeActive(this.difficulty);
    }
  },
  watch: {
    difficulty: {
      handler() {
        localStorage.setItem('difficulty', this.difficulty);
      }
    },
  },
}
</script>