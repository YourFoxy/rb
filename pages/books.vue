<template>
  <div :class="$style.container">
    <div :class="$style.left">
      <FilterСriteria
        @click="setCriteria('')"
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
        :isMultivolume="character.series"
        :activeCriteria="activeCriteria"
        @click="setChosen(character)"
      />
      <!-- <div :class="$style.pagination">
        <div
          @click="page--"
          :class="[$style.arrow, { [$style.disabled]: !prev }]"
        >
          <
        </div>
        <div :class="$style.count">{{ page }}</div>
        <div
          @click="page++"
          :class="[$style.arrow, { [$style.disabled]: !next }]"
        >
          >
        </div>
      </div> -->
      <!-- </NuxtLink> -->
    </div>
    <CharacterNavigation
      :class="$style.characterNavigation"
      :characters="characters"
      :activeCharacter="activeCharacter"
    />
    <SeriesModal
      v-if="appStore.isSeriesModalOpen"
      @close-series-modal="(value) => setSeriesModal(value)"
      :book="chosenBook"
      :activeCriteria="activeCriteria"
    >
    </SeriesModal>
  </div>
</template>
<script setup>
import MarkingCard from "~/components/blocks/MarkingBookCard.vue";
import FilterСriteria from "~/components/blocks/FilterСriteria.vue";
import CharacterNavigation from "~/components/blocks/CharacterNavigation.vue";
import Repository from "~/repository/index.js";

import SeriesModal from "~/components/modals/SeriesModal.vue";
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();
const route = useRoute();

const resetCriteriaTitle = "Показать все результаты";

const i1 = ref(0);
const s = ref(0);
const s2 = ref(0);

const books = ref([]);
const criterias = ref([]);
const series = ref([]);
const activeCriteria = ref("");
const chosenBook = ref(null);

const setChosen = (book) => {
  if (book.books) {
    chosenBook.value = book;
    appStore.setIsSeriesModalOpen({
      value: true,
    });
  }
  savePosition();
};

const title = ref("");

const setCriteria = (id) => {
  resetSearch();
  activeCriteria.value = id;
  const value = activeCriteria.value;
  appStore.setActiveCriteria({
    value,
  });
};

const setSeriesModal = (value) => {
  appStore.setIsSeriesModalOpen({
    value,
  });
};

const resetSearch = () => {
  const value = "";
  document.getElementById("search").value = "";
  appStore.setSearch({
    value,
  });
};

// const resetCriteria = () => {
//   activeCriteria.value = "";
// };

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
  return resp;
});

// const page = ref(1);
// const prev = ref(null);
// const next = ref(null);

const characters = ref([]);
const activeCharacter = ref("");

const setBooks = async () => {
  const { value, error } = await Repository.Books.getBooks();
  await setSeries();

  // prev.value = value.prev;
  // next.value = value.next;

  if (route.name === "libraries") {
    value.results.forEach((i) => {
      i.libraries.forEach((j) => {
        if (j.id == route.query.id) {
          books.value.push(i);
        }
      });
    });
  } else {
    books.value = value.results;
  }

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

  if (route.name === "libraries") {
    value.forEach((i) => {
      let temp = false;
      i.books.forEach((j) => {
        if (!temp) {
          j.libraries.forEach((k) => {
            if (k.id == route.query.id && !temp) {
              series.value.push(i);
              temp = true;
            }
          });
        }
      });
    });
  } else {
    series.value = value;
  }
};

const position = ref(0);

const savePosition = () => {
  const value = position.value;

  appStore.setBookPosition({
    value,
  });
};

onMounted(async () => {
  //получение книг с сервера
  await setBooks();
  await setCriterias();

  setCriteria(appStore.activeCriteria);

  window.scrollTo({
    top: Math.abs(appStore.bookPosition),
    behavior: "auto",
  });

  console.log(appStore.activeCriteria);

  window.addEventListener("scroll", function (e) {
    const markingCards = e.srcElement.getElementsByClassName("markingCard");
    const header = e.srcElement.getElementsByClassName("header");
    position.value = header[0].getBoundingClientRect().top;
    // console.log(header[0].getBoundingClientRect().top);
    for (let i = 0; i < markingCards.length; i++) {
      if (markingCards[i].getBoundingClientRect().top > 0) {
        activeCharacter.value = markingCards[i].id;
        break;
      }
    }
  });
});

watch(
  () => route.query.id,
  async (newValue) => {
    books.value = [];
    series.value = [];
    await setBooks();
    await setCriterias();
  }
);
// watch(
//   () => page.value,
//   async (newValue) => {
//     await setBooks();
//     await setCriterias();
//   }
// );
</script>
<style lang="scss" module>
// .pagination {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   .count {
//     width: 3rem;
//     height: 3rem;
//     border-radius: 50%;
//     background-color: green;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #fff;
//   }
//   .arrow {
//     width: 3rem;
//     height: 3rem;
//     border-radius: 50%;
//     background-color: green;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #fff;
//     &.disabled {
//       pointer-events: none;
//       opacity: 0.5;
//     }
//   }
// }
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
    width: 4rem;
    top: -24rem;

    height: 100vh;
    top: 10rem;
    //   right: 19.5rem;
    // margin-top: -4rem;
    text-align: center;
    // align-content: center;
  }
}
</style>
