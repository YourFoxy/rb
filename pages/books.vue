<template>
  <div :class="$style.container">
    <div :class="$style.left">
      <FilterСriteria
        @click="resetCriteria()"
        :criteria="resetCriteriaTitle"
        :isSelected="activeCriteria === ''"
      />

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
        {{ criterias.find((i) => i.id === activeCriteria).name }}
      </div>
      <div v-if="appStore.search != '' || null" :class="$style.search">
        <div :class="$style.searchTitle">
          Поиск по запросу: "{{ appStore.search }}"
        </div>
        <div @click="resetSearch()" :class="$style.resetButton">сбросить</div>
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
        :isMultivolume="character.books"
        :activeCriteria="activeCriteria"
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
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

const resetCriteriaTitle = "Показать все результаты";

const i1 = ref(0);
const s = ref(0);
const s2 = ref(0);

const books = ref([]);
const criterias = ref([]);
const series = ref([]);
const activeCriteria = ref("");

const title = ref("");

const setCriteria = (id) => {
  resetSearch();
  activeCriteria.value = id;
};

const resetSearch = () => {
  const value = "";
  document.getElementById("search").value = "";
  appStore.setSearch({
    value,
  });
};

const resetCriteria = () => {
  activeCriteria.value = "";
};

const filteredCriterias = computed(() => {
  criterias.value = criterias.value.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
});

const filteredBooks = computed(() => {
  const resp = [];
  if (activeCriteria.value) {
    books.value.forEach((i) => {
      if (
        i.criterion &&
        i.criterion.id == activeCriteria.value &&
        !i.series &&
        i.name.toLowerCase().includes(appStore.search)
      ) {
        resp.push(i);
      } else if (i.books) {
        let isPushed = false;
        i.books.forEach((j) => {
          if (
            j.criterion &&
            j.criterion.id == activeCriteria.value &&
            !isPushed &&
            i.name.toLowerCase().includes(appStore.search)
          ) {
            resp.push(i);
            isPushed = true;
          }
        });
      }
    });
  } else {
    books.value.forEach((i) => {
      if (i.books && i.name.toLowerCase().includes(appStore.search)) {
        resp.push(i);
      } else {
        if (!i.series && i.name.toLowerCase().includes(appStore.search)) {
          resp.push(i);
        }
      }
    });
  }

  characters.value = resp.map((element) => {
    return element.name[0].toUpperCase();
  });
  activeCharacter.value = characters.value[0];

  console.log(resp);

  return resp;
});

const characters = ref([]);
const activeCharacter = ref("");

const setBooks = async () => {
  const { value, error } = await Repository.Books.getBooks();
  await setSeries();

  books.value = value.results;
  //noSeriesBooks.value = value.results.filter((i) => !i.series);

  books.value = books.value.concat(series.value);

  books.value = books.value.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  characters.value = filteredBooks.value.map((element) => {
    return element.name[0].toUpperCase();
  });
  activeCharacter.value = characters.value[0];
};

const setCriterias = async () => {
  const { value, error } = await Repository.Books.getCriteria();
  criterias.value = value;
};

const setSeries = async () => {
  const { value, error } = await Repository.Books.getSeries();
  series.value = value;
};

onMounted(async () => {
  //получение книг с сервера
  await setBooks();
  await setCriterias();

  window.addEventListener("scroll", function (e) {
    const markingCards = e.srcElement.getElementsByClassName("markingCard");
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
  @include body-shadow;
  border-radius: 0.5rem;
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
    // border-right: 2px solid #cececc;
  }
  .right {
    @include shadow-left-menu;
    width: 100%;
    min-height: 100vh;
    padding: 2.25rem 0;
    padding-left: 1.5rem;
    .search {
      margin-bottom: 3rem;
      .searchTitle {
        @include H4;
        margin-bottom: 0.5rem;
      }
      .resetButton {
        opacity: 0.7;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }

    .title {
      @include H3;
      margin-bottom: 1rem;
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
