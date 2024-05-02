<template>
  <nav>
    <div :class="$style.letter" v-for="(letter, index) in letters" :key="index">
      <a v-bind:href="'#' + letter" v-if="letter !== letters[index - 1]">{{
        letter
      }}</a>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  letters: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" module>
.letter {
  @include LargTextBold;
  margin-bottom: 0.25rem;
}
</style>
