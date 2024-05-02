<template>
  <div :class="$style.body">
    <div :class="$style.left">
      <FilterСriteria />
      <FilterСriteria :isSelected="true" />
      <FilterСriteria />
      <FilterСriteria />
      <FilterСriteria />
      <FilterСriteria />
      <FilterСriteria />
      <FilterСriteria />
      <FilterСriteria />
      <FilterСriteria />
      <FilterСriteria />
      <FilterСriteria />
    </div>
    <div :class="$style.right">
      <div :class="$style.title">
        Издания на белорусском языке; книги, изданные в Беларуси; издания о
        Беларуси и смежных с ней территориях, которые культурой и исторически
        связаны с Беларусью (до 1917 г.).
      </div>

      <LetterNavigation :class="$style.letterNavigation" :letters="letters" />
      <MarkingCard
        :class="$style.markingCard"
        v-for="(letter, index) in letters"
        :key="index"
        :letter="letter !== letters[index - 1] ? letter : ''"
        :isLetterSpaicing="letter != letters[index + 1] ? true : false"
        :id="letter"
      />
    </div>
    <!-- <Card />
    <Card :isMultivolume="true" /> -->
  </div>
</template>
<script setup>
import MarkingCard from "~/components/blocks/MarkingBookCard.vue";
import FilterСriteria from "~/components/blocks/FilterСriteria.vue";
import LetterNavigation from "~/components/blocks/LetterNavigation.vue";

// const letters = ["a", "a", "a", "a", "a", "a", "a", "S", "b", "B", "V"];
const letters1 = [
  "awedf",
  "afeA",
  "SFVwaCF",
  "bEFW",
  "bEFW",
  "bEFW",
  "bEFW",
  "BERGB",
  "VERGB",
  "VERGB",
  "VERGB",
  "VERGB",
];
const getHref = computed((id) => {
  return "#" + this.id;
});
const letters = letters1.map((element) => {
  return element[0].toUpperCase();
});
</script>
<style lang="scss" module>
.body {
  @include container;
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-top: 0;
  position: fixed;
  padding-right: 0rem;
  .left {
    width: 18.75rem;
    height: 100vh;
    padding-top: 2.25rem;
    overflow-y: scroll;
  }

  .right {
    @include shadow-right;
    flex: 1;
    padding: 2.25rem 1.5rem;
    height: 100vh;
    overflow-y: scroll;

    .title {
      @include Subtitle-bold;
      margin-bottom: 2rem;
    }
    .letterNavigation {
      position: absolute;
      width: 1rem;
      right: 1.5rem;
      text-align: center;
    }
  }
}
</style>
