<template>
  <div :class="$style.body">
    <div :class="$style.left">
      <div :class="$style.title">
        «Редкие<br />
        книги в собраниях <br />Берестейщины»
      </div>
      <div :class="$style.subtitle">Областной корпоративный проект</div>
      <div :class="$style.text">
        Text.ru – это популярный портал для проверки текстов и крупнейшая биржа
        текстового контента. Ежедневно на Сервисе проверяются и создаются разные
        форматы: описания карточек товара, статьи и письменные работы. Мы
        создали прозрачную и надежную систему сотрудничества между заказчиками и
        исполнителями, чтобы каждому было комфортно работать и находиться на
        Сайте.
      </div>
      <div :class="$style.buttons">
        <NuxtLink to="/books" @click="setModal(0)"
          ><img :class="$style.red" src="~/public/images/red.png" alt="" />
        </NuxtLink>
        <div to="/books1" @click="setLibModal(true)">
          <img :class="$style.fond" src="~/public/images/fond.png" alt="" />
        </div>
      </div>
    </div>
    <div :class="$style.background"></div>
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
  width: 100%;
  min-height: Calc(100vh * 0.95);
  width: 100%;
  height: 100%;
  align-content: center;
  margin: 1rem;
  background-color: $dark-green;

  overflow: hidden;
  justify-content: space-between;
  display: flex;
  padding: 4rem;
  .left {
    // margin-left: 4.125rem;
    align-content: center;
    z-index: 100;
    .title {
      @include H1-5;
      margin-top: 2.25rem;
    }
    .subtitle {
      @include Subtitle-bold;
      margin-top: 1.25rem;
    }
    .text {
      width: 34rem;
      margin-top: 2.75rem;
    }
    .buttons {
      margin-top: 2.75rem;
      display: flex;
      .red {
        opacity: 0.6;
        &:hover {
          opacity: 0.9;
        }
      }
      .fond {
        margin-left: -0.5rem;
        opacity: 0.6;
        &:hover {
          opacity: 0.9;
        }
      }
      .fond {
        margin-left: -0.5rem;
        opacity: 0.6;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
  .background {
    background-image: url("~/public/images/pre.png ");
    background-size: cover;
    width: 100%;
    background-position: center left;
    margin-left: -20rem;
    border-radius: 0.5rem;
  }

  // .img {
  //   min-height: Calc(100vh * 0.8);
  //   align-items: end;
  // }
}
</style>
