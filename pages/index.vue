<template>
  <div :class="$style.body">
    Главная страница
    <Card />
    <Card2 />
    <Card3 />
  </div>
</template>
<script setup>
import Card from "~/components/layouts/Card.vue";
import Card2 from "~/components/layouts/Card2.vue";
import Card3 from "~/components/layouts/Card3.vue";
</script>
<style lang="scss" module>
.body {
  width: 100%;
  min-height: 100vh;
  // height: 100vh;
  margin-top: 1rem;
  background-color: $dark-green;
}
</style>
