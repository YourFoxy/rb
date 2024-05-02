<template>
  <main :class="$style.layout">
    <header><Header /></header>
    <div :class="$style.content">
      <slot />
    </div>
    <footer>Футер</footer>
  </main>
</template>
<script setup>
import Header from "~/components/layouts/Header.vue";
</script>
<style lang="scss" module>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #273130;
  .content {
    flex: 1 1 auto;
    width: 100%;
    // height: ;
    background-color: $dark-green;
    max-width: 80rem;
    margin: 0 auto;
    box-shadow: 0px 0px 12px rgb(0, 0, 0, 0.25);
  }
}
</style>
