<template>
  <div :class="$style.card">
    <div :class="$style.top"><div :class="$style.topShadow"></div></div>
    <div :class="$style.middle">
      <div :class="$style.left"><div :class="$style.leftShadow"></div></div>
      <div @click="openBook()" :class="$style.content">
        <div :class="$style.imgBox">
          <img
            :class="$style.picture"
            :src="book.main_photo || book.photo || noPhoto"
          />

          <div :class="$style.mask" v-if="isMultivolume">
            <div :class="$style.multivolume">Многотомник</div>
          </div>
        </div>
        <div :class="$style.text">
          <div :class="$style.title" v-html="book.name"></div>
          <!-- <div :class="$style.description" v-html="book.description"></div> -->
        </div>
      </div>
      <div :class="$style.right"><div :class="$style.rightShadow"></div></div>
    </div>
    <div :class="$style.bottom"><div :class="$style.bottomShadow"></div></div>
  </div>
</template>

<script setup>
import { useAppStore } from "~/stores/appStore";
const noPhoto = "/images/noPhoto.png";
const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

const props = defineProps({
  isMultivolume: {
    type: Array,
    default: () => [],
  },
  book: {
    type: Object,
    default: () => {},
  },
  activeCriteria: {
    type: String,
  },
});
const openBook = () => {
  if (!props.isMultivolume) {
    router.push({ path: "details", query: { id: props.book.id } });
  }
};
</script>

<style lang="scss" module>
.card {
  max-width: 60.125rem;
  width: 100%;
  .middle {
    display: flex;
    justify-content: space-between;
    height: 19.5rem;
    width: 100%;
    .content {
      @include shadow;
      cursor: pointer;
      margin: 1.5rem;
      padding: 1rem;
      background-color: $green;
      border-radius: 1.25rem 1.25rem 0 1.25rem;
      display: flex;
      width: 100%;

      .imgBox {
        .picture {
          object-fit: cover;
          object-position: center;
          height: 14.5rem;
          width: 10.25rem;
          border-radius: 0.25rem 0 0 0.25rem;
        }
        .mask {
          height: 7.5rem;
          width: 7.5rem;
          overflow: hidden;
          position: relative;
          top: -7.75rem;
          right: -2.75rem;
          .multivolume {
            @include TextBold;
            height: 1.75rem;
            width: 10.5rem;
            background-color: $green;
            text-align: center;
            color: $light-opacity;
            align-content: center;
            transform: translate(-12px, 200%) rotate(-0.125turn);
          }
        }
      }

      .text {
        @include LargText;
        padding-left: 0.75rem;
        overflow: hidden;
        text-align: justify;
        .title {
          @include Subtitle-bold;
          margin-bottom: 0rem;
        }
      }
    }
    .left,
    .right {
      .leftShadow,
      .rightShadow {
        width: 3rem;
        height: 100%;
        background-color: $dark-green;
      }
      .leftShadow {
        @include shadow-left;
        background: linear-gradient(to left, $dark-green, rgba(0, 0, 0, 0));
      }
      .rightShadow {
        @include shadow-right;
        background: linear-gradient(to right, $dark-green, rgba(0, 0, 0, 0));
      }
    }
  }
  .top,
  .bottom {
    padding: 0 3rem;
    .topShadow,
    .bottomShadow {
      width: 100%;
      height: 3rem;
      background-color: $dark-green;
    }
    .topShadow {
      @include shadow-top;
      background: linear-gradient(to top, $dark-green, rgba(0, 0, 0, 0));
    }
    .bottomShadow {
      @include shadow-bottom;
      background: linear-gradient(to bottom, $dark-green, rgba(0, 0, 0, 0));
    }
  }
}
</style>
