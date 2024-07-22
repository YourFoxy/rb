<template>
  <div :class="$style.block">
    <div
      :class="[$style.marking, , { [$style.isCharacter]: isCharacterSpaicing }]"
    >
      <div v-if="character !== ''" :class="$style.letter">
        {{ character }}
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
  character: {
    type: String,
    default: "",
  },

  isCharacterSpaicing: {
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
    min-width: 2rem;

    .letter {
      @include H2;

      text-transform: uppercase;
      margin-bottom: 1rem;
      text-align: center;
      color: $light;
    }

    .divider {
      margin: 0 auto;
      width: 2px;
      max-height: 25.5rem;
      height: 100%;
      background-color: $disabled;
    }
  }
  .isCharacter {
    margin-bottom: 1rem;
    position: relative;
    // top: -1.3rem;
  }
}
</style>
