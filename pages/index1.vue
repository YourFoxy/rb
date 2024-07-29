<template>
  <div :class="$style.body">
    <div :class="$style.text">
      <div :class="$style.title">
        «Редкие книги <br />в собраниях Берестейщины»
      </div>
      <div :class="$style.subtitle">Областной корпоративный проект</div>
    </div>
    <img :class="$style.img" src="~/public/images/text.png" alt="" />
    <div :class="$style.buttons">
      <NuxtLink to="/books" @click="setModal(0)"
        ><div :class="$style.button">Редкие книги</div></NuxtLink
      >

      <div @click="setLibModal(true)" :class="$style.button">
        Фондодержатели
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

const setModal = (value) => {
  appStore.setactiveSection({
    value,
  });
};

const setLibModal = (value) => {
  appStore.setIsModalOpen({
    value,
  });
};
</script>

<style lang="scss" module>
.body {
  // min-width: 100vw;
  // min-height: 100vh;
  // max-width: 100vw;
  width: 100%;
  height: 100vh;

  align-content: center;

  background-image: url("~/public/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;

  .text {
    padding: 5.4rem;
    position: absolute;
    top: 4.5rem;
    .title {
      @include H1-5;
      text-shadow: 0px 0px 22px rgb(140, 140, 140, 0.85);
    }
    .subtitle {
      font-family: "Montserrat", sans-serif;
      font-optical-sizing: auto;
      font-weight: 700;
      font-size: 1.2rem;
      font-style: normal;
      letter-spacing: 0.1rem;
      color: $light;
      padding-top: 1rem;
    }
  }
  .buttons {
    display: flex;
    gap: 1rem;
    margin-left: 5.5rem;
    .button {
      border: 2px solid #3e3e3e85;
      border-radius: 0.4rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
