<script setup>
import Art from '../assets/art.svg';
import Culture from '../assets/culture.svg';
import Geography from '../assets/geography.svg';
import History from '../assets/history.svg';
import Random from '../assets/random.svg';
import Science from '../assets/science.svg';
import Sports from '../assets/sports.svg';
</script>

<template>
  <router-link :to="{name: 'question', params: {difficulty: difficulty , id: id} }">
    <div :class="mergeClassesBack">
      <div :class="mergeClassesFront">
        <img :src="svg"/>
      </div>
      <p class="uppercase">{{ name }}</p>
    </div>
  </router-link>
  
</template>

<script>
export default {
  props: {
    name: '',
    id: '',
    difficulty: '',
  },
  computed: {
    classesBack() {
      return this.name === 'science and nature' 
        ? 'bg-emerald-300' 
        : this.name === 'history'
          ? 'bg-yellow-300'
          : this.name === 'sports'
            ? 'bg-orange-300'
            : this.name === 'entertainment'
              ? 'bg-pink-300'
              : this.name === 'art and literature'
                ? 'bg-violet-300'
                : this.name === 'geography'
                  ? 'bg-blue-300'
                  : 'bg-gray-300'
    },
    classesFront() {
      return this.name === 'science and nature' 
        ? 'bg-emerald-500' 
        : this.name === 'history'
          ? 'bg-yellow-500'
          : this.name === 'sports'
            ? 'bg-orange-500'
            : this.name === 'entertainment'
              ? 'bg-pink-500'
              : this.name === 'art and literature'
                ? 'bg-violet-500'
                : this.name === 'geography'
                  ? 'bg-blue-500'
                  : 'bg-gray-500'
    },
    svg() {
      return this.name === 'science and nature' 
        ? Science 
        : this.name === 'history'
          ? History
          : this.name === 'sports'
            ? Sports
            : this.name === 'entertainment'
              ? Culture
              : this.name === 'art and literature'
                ? Art
                : this.name === 'geography'
                  ? Geography
                  : Random
    },
    
    mergeClassesBack() {
      return `flex items-center gap-4 overflow-hidden text-xl font-bold rounded-md h-14 ${this.classesBack}`;
    },
    mergeClassesFront() {
      return `flex items-center justify-center h-14 w-14 ${this.classesFront}`;
    },
  }
}
</script>
