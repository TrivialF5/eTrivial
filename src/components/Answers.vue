<template>
    <div class="flex h-24 w-96 rounded-md border-2 border-emerald-500 bg-emerald-300 font-pop">
        <div class="h-22 w-5 rounded-tl-sm rounded-bl-sm bg-emerald-500"></div>
        <p class="self-center p-4 text-lg font-semibold">
            {{answer}}
        </p>
    </div>
</template>

<script>
export default {
  props : {
    answer: String,
  },

}
</script>
