<template>
  <div :class="$style.body">
    <div :class="$style.left">
      <img :class="$style.picture" :src="book.main_photo" />
    </div>
    <div :class="$style.right">
      <div v-if="book.photos" :class="$style.gallery">
        <img
          v-for="photo in book.photos"
          :key="photo"
          :class="$style.picture"
          :src="photo.photo"
        />
      </div>
      <div :class="$style.title" v-html="book.name"></div>
      <div :class="$style.text" v-html="book.description"></div>

      <hr :class="$style.divider" />
      <div :class="$style.info" v-if="book.entered_at != ''">
        <div :class="$style.name">Дата поступления в библиотеку</div>
        <hr :class="$style.dividerDrop" />
        <div :class="$style.description">
          {{
            book.entered_at
              ? book.entered_at.substr(0, 10).split("-").reverse().join(".") +
                " "
              : "не указано"
          }}
        </div>
      </div>
      <div :class="$style.info" v-if="book.inventory_number != ''">
        <div :class="$style.name">Инвентарный номер</div>
        <hr :class="$style.dividerDrop" />
        <div :class="$style.description">{{ book.inventory_number }}</div>
      </div>
      <div :class="$style.info" v-if="book.presenter != ''">
        <div :class="$style.name">Подарено</div>
        <hr :class="$style.dividerDrop" />
        <div :class="$style.description">
          {{ book.presenter }}
        </div>
      </div>

      <div :class="$style.subtitle">Фондодержатели:</div>
      <div :class="$style.biblioCards">
        <LibCard
          :class="$style.card"
          v-for="i in book.libraries"
          :key="i.id"
          :librarie="i"
        />
      </div>
      <div :class="$style.subtitle" v-if="showProvenentions()">
        Провененции:
      </div>
      <div :class="$style.provenentions">
        <ProvCard
          :class="$style.card"
          v-for="i in book.provenentions"
          :key="i.id"
          :librarie="i"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import LibCard from "~/components/lib/Card.vue";
import ProvCard from "~/components/prov/Card.vue";

import Repository from "~/repository/index.js";
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

const route = useRoute();
const book = ref({});

const showProvenentions = () => {
  if (book.value.provenentions != "") {
    return true;
  } else {
    return false;
  }
};

onMounted(async () => {
  const { value, error } = await Repository.Books.getBook(route.query.id);
  console.log(value);
  book.value = value;
});
</script>
<style lang="scss" module>
.body {
  @include container;
  width: 100%;
  min-height: 100vh;
  display: flex;

  .left {
    @include shadow-left;
    width: 30rem;
    height: 100vh;
    padding-top: 2.25rem;
    padding-right: 1.5rem;
    padding: 2.25rem 1.25rem 2.25rem 0;
    position: sticky;
    top: 0px;
    overflow-y: scroll;

    .picture {
      @include shadow;
      width: 100%;
      height: 36.25rem;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  .right {
    padding: 2.25rem 0 1.5rem 1.5rem;
    min-height: 100vh;
    width: 100%;
    .gallery {
      display: flex;
      // justify-content: space-between;
      gap: 1.5rem;
      .picture {
        @include shadow;
        width: 19.75rem;
        height: 27.75rem;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    }
    .title {
      @include LargTextBold;
      margin-top: 2.25rem;
      text-align: justify;
    }
    .text {
      @include LargText;
      margin-top: 1.5rem;
      text-align: justify;
    }
    .divider {
      height: 1px;
      opacity: 0.6;
      margin: 2.25rem 0;
      flex: 1;
    }
    .info {
      @include LargText;
      display: flex;
      color: $light-opacity;
      align-items: center;
      .name {
        padding-right: 0.5rem;
      }
      .dividerDrop {
        opacity: 0.6;
        margin-top: 2.25rem;
        flex: 1;
        border: 1px dashed;
        position: relative;
        top: -10px;
      }
      .description {
        padding-left: 0.5rem;
      }
    }
    .subtitle {
      @include Subtitle-bold;
      opacity: 0.5;
      margin-top: 2.25rem;
    }
    .biblioCards {
      display: flex;
      margin-top: 1rem;
      .card {
        margin-right: 1rem;
      }
    }
    .provenentions {
      display: flex;
      margin-top: 1rem;
      flex-wrap: wrap;
      gap: 1rem;
      .card {
        margin-right: 1rem;
      }
    }
  }
}
</style>
