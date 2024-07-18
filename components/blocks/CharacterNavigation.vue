<template>
  <div :class="$style.navigation">
    <details open>
      <summary :class="$style.w">Ru</summary>
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
    </details>
  </div>
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
.w {
  @include LargTextBold;

  list-style-type: none;
}
.character {
  @include LargTextBold;
  margin-bottom: 0.25rem;
  color: $disabled;
}
.active {
  color: $light;
}
</style>
