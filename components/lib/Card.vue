<template>
  <div :class="$style.container">
    <img :class="$style.img" :src="librarie.photo" alt="" />
    <div :class="$style.title">
      {{ librarie.name }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  librarie: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" module>
.container {
  @include shadow;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 13.75rem;
  background-color: white;
  .img {
    height: 10rem;
    width: 11.75rem;
    object-fit: cover;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 12px rgba(83, 83, 83, 0.25);
  }
  .title {
    padding-top: 1.5rem;
    width: 100%;
    @include LargTextBold;
    text-align: center;
  }
}
</style>
