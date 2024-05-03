<template>
  <nav>
    <div
      :class="[
        $style.character,
        { [$style.active]: character === activeCharacter },
      ]"
      v-for="(character, index) in characters"
      :key="index"
    >
      <a
        v-bind:href="'#' + character"
        v-if="character !== characters[index - 1]"
        >{{ character }}</a
      >
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  characters: {
    type: Array,
    default: [""],
  },
  activeCharacter: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" module>
.character {
  @include LargTextBold;
  margin-bottom: 0.25rem;
  color: $disabled;
}
.active {
  color: $light;
}
</style>
