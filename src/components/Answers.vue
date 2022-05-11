<template>
    <div :class="mergeClassesBack">
        <div :class="mergeClassesFront"></div>
        <p class="self-center p-4 text-lg font-semibold" v-html="answer"></p>
    </div>
</template>

<script>
export default {
  props : {
    answer: '',
    id: '',
  },
  computed: {
    classesBack() {
      return this.id === '17' 
        ? 'bg-emerald-300 border-emerald-500' 
        : this.id === '23'
          ? 'bg-yellow-300 border-yellow-500'
          : this.id === '21'
            ? 'bg-orange-300 border-orange-500'
            : this.id === '9'
              ? 'bg-pink-300 border-pink-500'
              : this.id === '13'
                ? 'bg-violet-300 border-violet-500'
                : this.id === '22'
                  ? 'bg-blue-300 border-blue-500'
                  : 'bg-gray-300 border-gray-500'
    },
    classesFront() {
      return this.id === '17' 
        ? 'bg-emerald-500' 
        : this.id === '23'
          ? 'bg-yellow-500'
          : this.id === '21'
            ? 'bg-orange-500'
            : this.id === '9'
              ? 'bg-pink-500'
              : this.id === '13'
                ? 'bg-violet-500'
                : this.id === '22'
                  ? 'bg-blue-500'
                  : 'bg-gray-500'
    },
    mergeClassesBack() {
      return `flex h-20 w-86 rounded-md border-2 bg-emerald-300 font-pop overflow-hidden ${this.classesBack}`;
    },
    mergeClassesFront() {
      return `h-22 w-5 rounded-tl-sm rounded-bl-sm ${this.classesFront}`;
    },
  },
}
</script>
