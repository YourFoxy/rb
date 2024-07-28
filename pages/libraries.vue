<template>
  <div>
    <div v-if="librarie && librarie.id" :class="$style.preview">
      <img :class="$style.img" :src="librarie.photo" alt="" />
      <div :class="$style.info">
        <div :class="$style.title">{{ librarie.name }}</div>
        <div :class="$style.text">
          {{ librarie.description }}
        </div>
      </div>
    </div>
    <Books />
  </div>
</template>
<script setup>
import Books from "~/pages/books.vue";
const appStore = useAppStore();
import Repository from "~/repository/index.js";
const route = useRoute();

const librarie = ref({});

const getLibraries = async () => {
  const { value, error } = await Repository.Books.getLibraries();
  librarie.value = value.find((i) => i.id == route.query.id);
};

onMounted(async () => {
  await getLibraries();
});

watch(
  () => route.query.id,
  async (newValue) => {
    await getLibraries();
  }
);
</script>
<style lang="scss" module>
.preview {
  max-width: 100%;
  height: calc(100vh - 8.25rem);
  margin: 1.5rem 0;

  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
  display: flex;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  .img {
    object-fit: cover;
    width: 55rem;
    //border-radius: 1.25rem;
    height: calc(100vh - 10.25rem);
  }
}

.info {
  // background: hsla(0, 0%, 0%, 0.5);
  min-height: calc(100vh - 8.25rem);
  width: calc(100vh - 25rem);
  padding: 0 1.5rem;
  // z-index: 1;
  .title {
    @include H3;
    padding-bottom: 1.5rem;
  }
  .text {
    @include LargText;
  }
}
</style>
