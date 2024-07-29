<template>
  <div :class="$style.popup">
    <div
      :class="$style.overlay"
      @click="emits('close-series-modal', false)"
    ></div>
    <div :class="$style.content" @click.stop>
      <div
        :class="$style.close"
        @click.stop="emits('close-series-modal', false)"
      >
        <Icon icon="close" is-pointer size="close" />
      </div>
      <div v-if="book" :class="$style.body">
        <div :class="$style.left">
          <!-- <img :class="$style.img" :src="book.photo" alt="" /> -->
          <div :class="$style.title">
            {{ book.name }}
          </div>
          <div :class="$style.text">
            {{ book.description }}
          </div>
        </div>
        <div :class="$style.right">
          <Card3
            v-for="card in filteredBooks"
            @click="openPage(card.id)"
            :key="card.id"
            :card="card"
            :class="$style.card"
          />
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
import Card3 from "~/components/layouts/Card3.vue";
const emits = defineEmits(["close-series-modal"]);
const router = useRouter();

const route = useRoute();

const props = defineProps({
  book: {
    type: Object,
  },
  activeCriteria: {
    type: String,
  },
});

const book = ref(props.book);

watch(
  () => props.book,
  (newValue) => {
    book.value = newValue;
  }
);

onMounted(() => {
  console.log(props);
});

const openPage = (id) => {
  router.push({ path: "details", query: { id: id } });
  emits("close-series-modal", false);
};

const filteredBooks = computed(() => {
  let resp = [];
  if (route.name === "libraries") {
    props.book.books.forEach((i) => {
      i.libraries.forEach((j) => {
        if (j.id == route.query.id) {
          resp.push(i);
        }
      });
    });
  } else {
    resp = props.book.books;
  }

  resp = props.activeCriteria
    ? resp.filter((i) => i.criterion.id == props.activeCriteria)
    : resp;

  return resp;
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
      display: flex;

      .left {
        @include shadow-left;
        max-height: 41.4rem;
        min-width: 29rem;
        width: 100%;
        position: sticky;
        overflow: hidden;
        top: 0px;
        overflow-y: scroll;
        padding: 1.5rem;
        .img {
          height: 14rem;
          width: 9.75rem;
          object-fit: cover;
          border-radius: 0.25rem;
        }
        .title {
          @include LargTextBold;
          margin-bottom: 1rem;
          text-align: justify;
        }
      }
      .right {
        // @include shadow-right;

        width: 100%;
        max-height: 41.4rem;
        // overflow: hidden;

        overflow-y: scroll;

        .card {
          margin-bottom: 1.5rem;

          // padding: 0 2.5rem;
        }
      }
    }
  }
}
</style>
