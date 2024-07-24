<template>
  <div :class="$style.card">
    <img :class="$style.picture" src="~/public/images/01.jpg" />
    <div :class="$style.name">
      Брестская областная библиотека имени М. Горького
    </div>
  </div>
</template>

<script setup>
import Card from "~/components/blocks/BookCard.vue";
</script>

<style lang="scss" module>
.card {
  width: 13.75rem;
  height: 16.25rem;
  background-color: $green;
  padding: 1rem;
  box-shadow: 4px 0px 12px rgb(0, 0, 0, 0.15);
  border-radius: 1.25rem;
  cursor: pointer;
  .picture {
    width: 11.75rem;
    height: 10rem;
    border-radius: 0.25rem;
    object-fit: cover;
    box-shadow: 4px 0px 12px rgb(0, 0, 0, 0.15);
  }
  .name {
    @include TextBold;
    padding-top: 0.75rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }
}
</style>
