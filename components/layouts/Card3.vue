<template>
  <div :class="$style.card">
    <!-- <div :class="$style.name">{{ card.name }}</div> -->

    <img :class="$style.picture" :src="card.main_photo || noPhoto" />
  </div>
</template>

<script setup>
const noPhoto = ref("~/public/images/noPhoto.png");
defineProps({
  card: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" module>
.card {
  width: 12.5rem;
  height: 13.75rem;
  align-content: center;
  cursor: pointer;
  text-align: center;

  .picture {
    width: 9.375rem;
    height: 13.75rem;
    border-radius: 0.25rem;
    object-fit: cover;
    box-shadow: 4px 0px 12px rgb(0, 0, 0, 0.15);
    text-align: center;
  }
  .name {
    @include TextBold;
    width: 12.5rem;
    background-color: $dark-green;
    text-align: center;
    position: relative;
    padding: 0.75rem;
    top: 12rem;
    box-shadow: 0px 10px 12px rgb(0, 0, 0, 0.15);
  }
}
</style>
