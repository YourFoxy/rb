<template>
  <main :class="$style.layout" @scroll="scrolling">
    <header v-if="showHeader()"><Header /></header>
    <div :class="$style.content">
      <slot />
    </div>
    <footer></footer>

    <CommonModal
      v-if="appStore.isModalOpen"
      @close-modal="(value) => setLibModal(value)"
    >
    </CommonModal>
  </main>
</template>

<script setup>
import Header from "~/components/layouts/Header.vue";
import { useAppStore } from "~/stores/appStore";
import CommonModal from "~/components/modals/CommonModal.vue";
const route = useRoute();
const appStore = useAppStore();

const showHeader = () => {
  return route.fullPath !== "/";
};
const setLibModal = (value) => {
  appStore.setIsModalOpen({
    value,
  });
};
const setProvModal = (value) => {
  appStore.setIsProvModalOpen({
    value,
  });
};
const scrolling = (e) => {
  const markingCards = e.srcElement.getElementsByClassName("markingCard");
  console.log("dddd");
  for (let i = 0; i < markingCards.length; i++) {
    if (markingCards[i].getBoundingClientRect().top > 0) {
      activeCharacter.value = markingCards[i].id;
      break;
    }
  }
};
</script>
<style lang="scss" module>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // background-color: #273130;
  // background-color: #dfdfdf;
  // background-color: #dadbe0;
  background-color: $dark-green;

  .content {
    // @include body-shadow;
    flex: 1 1 auto;
    width: 100%;
    border-radius: 0.5rem;
    // height: ;
    // background-color: $dark-green;
    // background: linear-gradient(
    //     to right bottom,
    //     $dark-green,
    //     rgba(26, 25, 25, 0)
    //   ),
    //   url(https://grainy-gradients.vercel.app/noise.svg);
    max-width: 90rem;
    margin: 0 auto;
    // box-shadow: 0px 0px 12px rgb(0, 0, 0, 0.25);
  }
}
</style>
