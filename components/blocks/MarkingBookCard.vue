<template>
  <div :class="$style.block">
    <div :class="[$style.marking, , { [$style.isLetter]: isLetterSpaicing }]">
      <div v-if="letter !== ''" :class="$style.letter">
        {{ letter }}
      </div>

      <div :class="$style.divider"></div>
    </div>
    <Card :isMultivolume="isMultivolume" />
  </div>
</template>

<script setup>
import Card from "~/components/blocks/BookCard.vue";
defineProps({
  isMultivolume: {
    type: Boolean,
    default: false,
  },
  letter: {
    type: String,
    default: "",
  },

  isLetterSpaicing: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.block {
  display: flex;
  .marking {
    overflow: hidden;
    width: 2rem;

    .letter {
      @include H2;

      text-transform: uppercase;
      margin-bottom: 1rem;
      text-align: center;
    }

    .divider {
      margin: 0 auto;
      width: 2px;
      max-height: 25.5rem;
      height: 100%;
      background-color: $light;
    }
  }
  .isLetter {
    margin-bottom: 1rem;
    position: relative;
    // top: -1.3rem;
  }
}
</style>
