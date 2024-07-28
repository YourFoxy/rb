<template>
  <div :class="$style.popup">
    <div :class="$style.overlay" @click="emits('close-modal', false)"></div>
    <div :class="$style.content" @click.stop>
      <div :class="$style.close" @click.stop="emits('close-modal', false)">
        <Icon icon="close" is-pointer size="close" />
      </div>
      <div :class="$style.body">
        <div :class="$style.header">
          <div
            v-for="(typ, index) in librariesTypes"
            :key="typ.id"
            @click="setActive(index)"
            :class="[$style.button, { [$style.active]: index === activeType }]"
          >
            {{ typ.name }}
          </div>
        </div>
        <div @click="setLibModal(1)" :class="$style.Cards">
          <NuxtLink
            :to="{ path: 'libraries', query: { id: librarie.id } }"
            v-for="librarie in filteredLibraries"
            :key="librarie.id"
          >
            <Card :librarie="librarie" :class="$style.card" />
          </NuxtLink>
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
import Card from "~/components/lib/Card.vue";
const emits = defineEmits(["close-modal"]);
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();
import Repository from "~/repository/index.js";

const activeType = ref(0);
const libraries = ref([]);
const librariesTypes = ref([]);
const books = ref([]);

const filteredLibraries = computed(() => {
  const type = librariesTypes.value[activeType.value];
  return libraries.value.filter((i) => i.type.id == type.id);
});

const setActive = (value) => {
  activeType.value = value;
};

const setLibModal = (value) => {
  emits("close-modal", false);
  appStore.setactiveSection({
    value,
  });
};

const getLibraries = async () => {
  const { value, error } = await Repository.Books.getLibraries();
  libraries.value = value;
};
const getLibrariesTypes = async () => {
  const { value, error } = await Repository.Books.getLibrariesTypes();
  librariesTypes.value = value;
};

const openPage = (id) => {
  router.push({ path: "details", query: { id: id } });
};

const filteredBooks = computed(() => {
  const resp = [];

  return resp;
});

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

onMounted(async () => {
  await getLibrariesTypes();
  await getLibraries();
  await setBooks();
});
</script>

<style lang="scss" module>
@keyframes expand {
  from {
    transform: scale(0.7);
    opacity: 0;
    background: #5470b0;
  }
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: $z-modal;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    transition: opacity 0.3ms;
    z-index: $z-modal;
    animation: expand 0.3s ease-in-out rgba(0, 0, 0, 0.6);
  }
  .close {
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;
    @include tablet {
      right: 1rem;
      top: 1rem;
    }
  }
  .content {
    // overflow: auto;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 41.4rem;
    max-width: 47.25rem;
    width: 100%;
    background: $dark-green;
    border-radius: 0.75rem;
    z-index: $z-modal;
    animation: expand 0.2s ease-in-out;
    // padding: 2.5rem;
    // @include scrollbarY;
    @include custom(632) {
      width: calc(100vw - 2rem);
      max-width: none;
    }
    @include custom(550) {
      padding: 1.5rem;
    }
    .body {
      background: $dark-green;
      min-height: 41.4rem;
      border-radius: 0.75rem;
      .header {
        @include shadow-top;
        height: 3rem;
        width: 100%;
        background: $dark-green;
        border-radius: 0.75rem 0.75rem 0 0;
        padding: 1rem 1.5rem;
        display: flex;
        .button {
          @include LargTextBold;
          text-transform: uppercase;
          padding-left: 0.75rem;
          font-weight: 700;
          color: $black-opacity;
          cursor: pointer;
          &:hover {
            color: $light;
            opacity: 0.8;
          }
        }
        .active {
          color: $light;
        }
      }
      .Cards {
        overflow: auto;
        justify-content: center;
        padding: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1.3rem;
        max-height: 38.4rem;
        .card {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
