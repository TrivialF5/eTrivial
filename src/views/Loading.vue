<template>
  <img src="../assets/spiner.png" alt="" class="mx-auto animate-spin-slow">
  <p class="text-lg font-bold text-center uppercase">A new way to play Trivial</p>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push("/category");
    }, 2500);
  }
}
</script>