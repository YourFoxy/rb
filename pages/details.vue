<template>
  <div :class="$style.body">
    <div :class="$style.left">
      <div :class="$style.back" @click="back()">назад</div>
      <img
        @click="setImgModal(true, book.main_photo || noPhoto)"
        :class="$style.picture"
        :src="book.main_photo || noPhoto"
      />

      <!-- <div v-if="copies.length" :class="$style.subtitle">Экземпляры:</div> -->
      <div :class="$style.biblioButtons">
        <div
          :class="$style.button"
          v-for="(i, index) in copies"
          :key="i.id"
          @click="router.push({ path: 'details', query: { id: i.id } })"
        >
          Экземпляр {{ index + 1 }}
        </div>
        <!-- <LibCard
            :class="$style.card"
            v-for="i in copies"
            :key="i.id"
            :librarie="i"
            @click="router.push({ path: 'details', query: { id: i.id } })"
          /> -->
      </div>

      <div :class="$style.biblioButtons">
        <div
          :class="$style.button"
          v-for="j in otherBooks"
          :key="j.id"
          @click="router.push({ path: 'details', query: { id: j.id } })"
        >
          {{ getTom(j.name) }}
        </div>
      </div>
    </div>

    <div :class="$style.right">
      <div v-if="book.photos" :class="$style.gallery">
        <img
          @click="setImgModal(true, photo.photo)"
          v-for="photo in book.photos"
          :key="photo"
          :class="$style.picture"
          :src="photo.photo || noPhoto"
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

      <div :class="$style.subtitle">Фондодержатель:</div>
      <div :class="$style.biblioCards">
        <LibCard
          :class="$style.card"
          v-for="i in book.libraries"
          :key="i.id"
          :librarie="i"
          @click="openBook(i.id)"
        />
      </div>
      <div :class="$style.subtitle" v-if="showProvenentions()">
        Провененции:
      </div>
      <div :class="$style.provenentions">
        <ProvCard
          @click="setProvModal(true, i)"
          :class="$style.card"
          v-for="i in book.provenentions"
          :key="i.id"
          :librarie="i"
        />
      </div>
      <ProvModal
        v-if="appStore.isProvModalOpen"
        @close-prov-modal="(value) => setProvModal(value, null)"
        :provenention="chosenLibrarie"
      >
      </ProvModal>
    </div>
  </div>
</template>
<script setup>
import LibCard from "~/components/lib/Card.vue";
import ProvCard from "~/components/prov/Card.vue";
import ProvModal from "~/components/modals/ProvModal.vue";
import Repository from "~/repository/index.js";
import { useAppStore } from "~/stores/appStore";

const noPhoto = "/images/noPhoto.png";
const appStore = useAppStore();

const route = useRoute();
const router = useRouter();
const book = ref({});
const copies = ref([]);

const regex = new RegExp("\\Т. +\[0-9]+");

const back = () => {
  router.go(-1);
};

const openBook = (id) => {
  router.push({ path: "libraries", query: { id: id } });
  const value2 = 0;
  appStore.setBookPosition({
    value2,
  });
  const value1 = "";
  appStore.setActiveCriteria({
    value1,
  });
};
const getTom = (tom) => {
  return tom.match(regex)?.[0].replace("Т.", "Том ") ?? "Том";
};

const setImgModal = (value, img) => {
  appStore.setImage({
    value,
    img,
  });
};

const showProvenentions = () => {
  if (book.value.provenentions != "") {
    return true;
  } else {
    return false;
  }
};

const chosenLibrarie = ref(null);

const setProvModal = (value, prov) => {
  if (value) {
    chosenLibrarie.value = prov;
  } else {
    chosenLibrarie.value = null;
  }
  appStore.setIsProvModalOpen({
    value,
  });
};

const otherBooks = ref([]);

const setSeries = async () => {
  const { value, error } = await Repository.Books.getSeries();
  otherBooks.value = value.find((i) => i.id == book.value.series.id).books;
  otherBooks.value = otherBooks.value.filter((i) => i.id != book.value.id);
};

const setCopie = async (id) => {
  const { value, error } = await Repository.Books.getBook(id);
  copies.value.push(value);
};

onMounted(async () => {
  const { value, error } = await Repository.Books.getBook(route.query.id);
  book.value = value;
  if (book.value.series) {
    await setSeries();
  }
  if (book.value.copies && book.value.copies.length) {
    book.value.copies.forEach((i) => {
      console.log(i);
      setCopie(i);
    });
  }
});

watch(
  () => route.query.id,
  async (newValue) => {
    const { value, error } = await Repository.Books.getBook(route.query.id);
    book.value = value;
    if (book.value.series) {
      await setSeries();
    }
    if (book.value.copies && book.value.copies.length) {
      copies.value = [];
      book.value.copies.forEach((i) => {
        setCopie(i);
      });
    } else {
      copies.value = [];
    }
  }
);
</script>
<style lang="scss" module>
.body {
  @include container;
  @include body-shadow;
  width: 100%;
  min-height: 100vh;
  display: flex;
  border-radius: 0.5rem;

  .left {
    @include shadow-right-menu;
    width: 38rem;
    height: 100vh;
    padding-top: 2.25rem;
    padding-right: 1.5rem;
    padding: 0 1.25rem 2.25rem 0;
    position: sticky;
    top: 0px;
    overflow-y: scroll;
    .back {
      @include LargTextBold;
      padding: 0.5rem 0.25rem;
      cursor: pointer;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
    .picture {
      @include shadow;
      width: 100%;
      height: 36.25rem;
      object-fit: cover;
      border-radius: 0.5rem;
      cursor: pointer;
    }

    .biblioButtons {
      display: flex;
      margin: 1rem 0;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      .button {
        @include LargTextBold;
        cursor: pointer;
        opacity: 0.6;
        &:hover {
          opacity: 1;
        }
      }
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
        width: 18.75rem;
        height: 26.75rem;
        object-fit: cover;
        border-radius: 0.5rem;
        cursor: pointer;
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
        opacity: 0.4;
        margin-top: 2.25rem;
        flex: 1;
        border: 0.75px dashed;
        position: relative;
        top: -10px;
      }
      .description {
        padding-left: 0.5rem;
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
.subtitle {
  @include Subtitle-bold;
  opacity: 0.5;
  margin-top: 2.25rem;
}
.biblioCards {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  .card {
    margin-right: 1rem;
  }
}
</style>
