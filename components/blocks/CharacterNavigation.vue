<template>
  <div :class="$style.navigation">
    <details>
      <summary :class="$style.w">
        [A-z]<br />
        [А-я]
      </summary>
      <nav>
        <div :class="$style.wrap">
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
  cursor: pointer;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
}
.wrap {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: center;

  .character {
    @include LargTextBold;
    margin-bottom: 0.25rem;
    color: $disabled;
  }
  .active {
    color: $light;
  }
}
</style>
