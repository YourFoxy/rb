<template>
  <div :class="$style.card">
    <div :class="$style.marker"></div>
    <div :class="$style.name">{{ card.name }}</div>

    <!-- <img :class="$style.picture" :src="card.main_photo || noPhoto" /> -->
  </div>
</template>

<script setup>
const noPhoto = "/images/noPhoto.png";
const props = defineProps({
  card: {
    type: Object,
    default: () => {},
  },
});

const regex = new RegExp("\\Т. +\[0-9]+");

// console.log(regex2.exec(props.card.name));
const name = props.card.name.match(regex)?.[0].replace("Т.", "Том ") ?? "Том";
</script>

<style lang="scss" module>
.card {
  cursor: pointer;
  // text-align: center;
  margin: 0 auto;
  margin-bottom: 1rem;
  // .picture {
  //   width: 9.375rem;
  //   height: 13.75rem;
  //   border-radius: 0.25rem;
  //   object-fit: cover;
  //   box-shadow: 4px 10px 22px rgb(0, 0, 0, 0.22);
  //   text-align: center;
  // }
  display: flex;
  .marker {
    max-width: 0.75rem;
    width: 100%;
    height: 0.75rem;
    margin-right: 0.25rem;
    margin-top: 0.2rem;
    background-color: $disabled;
    opacity: 0.7;
    border-radius: 0.1rem;
  }
  .name {
    @include TextBold;
    // width: 12.5rem;
    // height: 2.5rem;
    // background-color: $dark-green;

    text-align: justify;
    margin: 0 auto;

    position: relative;
    padding: 0.75rem;
    top: -0.75rem;
    // box-shadow: 0px 3px 12px rgb(0, 0, 0, 0.15);
  }
}
</style>
