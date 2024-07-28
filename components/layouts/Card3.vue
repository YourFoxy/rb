<template>
  <div :class="$style.card">
    <div :class="$style.name">{{ name }}</div>

    <img :class="$style.picture" :src="card.main_photo || noPhoto" />
  </div>
</template>

<script setup>
const noPhoto = ref("~/public/images/noPhoto.png");
const props = defineProps({
  card: {
    type: Object,
    default: () => {},
  },
});

// const regex = new RegExp("\\ Т.+[0-9] ");
const regex = new RegExp("\\Т.\+[0-9]");
const name = props.card.name.match(regex)?.[0].replace("Т.", "Том ") ?? "Том";
</script>

<style lang="scss" module>
.card {
  width: 12.5rem;
  height: 13.75rem;
  align-content: center;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;

  .picture {
    width: 9.375rem;
    height: 13.75rem;
    border-radius: 0.25rem;
    object-fit: cover;
    box-shadow: 4px 10px 22px rgb(0, 0, 0, 0.22);
    text-align: center;
  }
  .name {
    @include TextBold;
    width: 12.5rem;
    height: 2.5rem;
    background-color: $dark-green;

    text-align: center;
    margin: 0 auto;

    position: relative;
    padding: 0.75rem;
    top: 12.5rem;
    // box-shadow: 0px 3px 12px rgb(0, 0, 0, 0.15);
  }
}
</style>
