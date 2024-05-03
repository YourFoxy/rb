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
    <div :class="$style.right" @scroll="scrolling">
      <div :class="$style.title">
        Издания на белорусском языке; книги, изданные в Беларуси; издания о
        Беларуси и смежных с ней территориях, которые культурой и исторически
        связаны с Беларусью (до 1917 г.).
      </div>

      <CharacterNavigation
        :class="$style.characterNavigation"
        :characters="characters"
        :activeCharacter="activeCharacter"
      />
      <NuxtLink to="/details">
        <MarkingCard
          class="markingCard"
          v-for="(character, index) in characters"
          :key="index"
          :character="character !== characters[index - 1] ? character : ''"
          :isCharacterSpaicing="
            character != characters[index + 1] ? true : false
          "
          :id="character"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import MarkingCard from "~/components/blocks/MarkingBookCard.vue";
import FilterСriteria from "~/components/blocks/FilterСriteria.vue";
import CharacterNavigation from "~/components/blocks/CharacterNavigation.vue";

const cardText = [
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

const characters = cardText.map((element) => {
  return element[0].toUpperCase();
});
const activeCharacter = ref(characters[0]);
const scrolling = (e) => {
  const markingCards = e.srcElement.getElementsByClassName("markingCard");

  for (let i = 0; i < markingCards.length; i++) {
    if (markingCards[i].getBoundingClientRect().top > 0) {
      activeCharacter.value = markingCards[i].id;
      break;
    }
  }
};
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
    .characterNavigation {
      position: absolute;
      width: 1rem;
      right: 1.5rem;
      text-align: center;
    }
  }
}
</style>
