<template>
  <div :class="$style.container">
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

      <NuxtLink to="/details">
        <MarkingCard
          class="markingCard"
          :class="$style.markingCard"
          v-for="(character, index) in characters"
          :key="index"
          :character="character !== characters[index - 1] ? character : ''"
          :isCharacterSpaicing="
            character != characters[index + 1] ? true : false
          "
          :id="character"
          :isMultivolume="true"
        />
      </NuxtLink>
    </div>
    <CharacterNavigation
      :class="$style.characterNavigation"
      :characters="characters"
      :activeCharacter="activeCharacter"
    />
  </div>
</template>
<script setup>
import MarkingCard from "~/components/blocks/MarkingBookCard.vue";
import FilterСriteria from "~/components/blocks/FilterСriteria.vue";
import CharacterNavigation from "~/components/blocks/CharacterNavigation.vue";

const i1 = ref(0);
const s = ref(0);
const s2 = ref(0);

const r = () => {
  while (s.value < 10000) {
    s.value += i1.value;
    i1.value++;
  }
  for (let i = 0; i <= i1.value; i++) {
    s2.value += i;
  }
};
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

onMounted(() => {
  window.addEventListener("scroll", function (e) {
    const markingCards = e.srcElement.getElementsByClassName("markingCard");

    console.log("dddd");
    for (let i = 0; i < markingCards.length; i++) {
      if (markingCards[i].getBoundingClientRect().top > 0) {
        activeCharacter.value = markingCards[i].id;
        break;
      }
    }
  });
});
</script>
<style lang="scss" module>
.container {

}
</style>
