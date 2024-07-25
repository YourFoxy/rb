<template>
  <div :class="$style.container">
    <div :class="$style.left">
      <FilterСriteria
        v-for="i in criterias"
        @click="setCriteria(i.id)"
        :key="i.id"
        :criteria="i.name"
        :isSelected="activeCriteria === i.id"
      />
    </div>
    <div :class="$style.right">
      <div v-if="activeCriteria" :class="$style.title">
        {{ (criterias.find((i) => i.id === activeCriteria), name) }}
      </div>

      <!-- <NuxtLink to="/details"> -->
      <MarkingCard
        class="markingCard"
        :class="$style.markingCard"
        v-for="(character, index) in filteredBooks"
        :book="character"
        :key="index"
        :character="
          character.name[0].toUpperCase() != characters[index - 1]
            ? character.name[0]
            : ''
        "
        :isCharacterSpaicing="
          character.name[0].toUpperCase() != characters[index + 1]
            ? true
            : false
        "
        :id="character.name[0].toUpperCase()"
        :isMultivolume="false"
      />
      <!-- </NuxtLink> -->
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
import Repository from "~/repository/index.js";

const i1 = ref(0);
const s = ref(0);
const s2 = ref(0);

const books = ref([]);
const criterias = ref([]);
const activeCriteria = ref("");

const setCriteria = (id) => {
  activeCriteria.value = id;
};

const filteredBooks = computed(() => {
  return activeCriteria.value
    ? books.value.filter((i) => i.criterion.id == activeCriteria.value)
    : books.value;
});

const r = () => {
  while (s.value < 10000) {
    s.value += i1.value;
    i1.value++;
  }
  for (let i = 0; i <= i1.value; i++) {
    s2.value += i;
  }
};

const characters = ref([]);
const activeCharacter = ref("");

const setBooks = async () => {
  const { value, error } = await Repository.Books.getBooks();

  books.value = value.results;

  books.value = books.value.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  characters.value = books.value.map((element) => {
    console.log(element.name[0].toUpperCase());
    return element.name[0].toUpperCase();
  });
  activeCharacter.value = characters.value[0];
};

const setCriterias = async () => {
  const { value, error } = await Repository.Books.getCriteria();
  criterias.value = value;
};

onMounted(async () => {
  //получение книг с сервера
  await setBooks();
  await setCriterias();

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
  @include container;
  min-height: 100vh;
  display: flex;

  .left {
    padding: 2.25rem 0;
    width: 30rem;
    height: 100vh;
    position: sticky;
    overflow: hidden;
    top: 0px;
    overflow-y: scroll;
  }
  .right {
    // @include shadow-right;
    width: 100%;
    min-height: 100vh;
    padding: 2.25rem 0;
    padding-left: 1.5rem;
    .title {
      @include Subtitle-bold;
      margin-bottom: 2rem;
    }
    .markingCard {
      margin-right: 0.5rem;
    }
  }
  .characterNavigation {
    position: sticky;
    width: 1.5rem;
    top: 13rem;

    height: 100vh;
    //   right: 19.5rem;
    text-align: center;
  }
}
</style>
