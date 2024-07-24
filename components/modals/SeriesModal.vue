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
      <div :class="$style.body">
        <div :class="$style.left">
          <div :class="$style.title">
            Марта, К. Философы и поэты-моралисты во времена Римской Империи /
            сочинение Констана Марта. - Москва : издание К. Т. Солдатенкова,
            1879 : Типография Мартынова и К'., на Тверской ул., д. Хомяковых. -
            380, [1] с. ББК 87.3(0)323 ББК 83.3(0)323
          </div>
          <div :class="$style.text">
            Прижизненное издание Бенджамина-Константа Марта, также писавшего под
            именем Константа Марта (1820–1895), французского моралиста, историка
            античной морали, члена Академии моральных и политических наук. Книга
            посвящена философам, исследующим нравственность, и поэтам-моралистам
            времён Римской империи, включает рассказы о жизни и творчестве Луция
            Аннея Сенеки, Эпиктета, императора Марка Аврелия и др. Является
            изданием Козьмы Терентьевича Солдатёнкова (1818–1901), который в
            1856 г. организовал издательство, а в 1857 г. открыл книжный
            магазин. Стремясь сделать книги доступными широкому читателю, часто
            продавал их ниже себестоимости. Книга в полукожаном переплёте с
            тиснением: картон, покрытый мраморной бумагой, корешок из коричневой
            кожи, кругленый передний обрез. В книге штампы: «Гродненская
            Областная БИБЛИОТЕКА», «ИЗЪ БИБЛИОТЕКИ С. П. Бургской ДУХОВНОЙ
            АКАДЕМIИ.».
          </div>
        </div>
        <div :class="$style.right">
          <Card3 :class="$style.card" />
          <Card3 :class="$style.card" />
          <Card3 :class="$style.card" />
          <Card3 :class="$style.card" />
          <Card3 :class="$style.card" />
          <Card3 :class="$style.card" />
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
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

const active = ref(0);

const setActive = (value) => {
  active.value = value;
};

const setLibModal = (value) => {
  emits("close-series-modal", false);
  appStore.setactiveSection({
    value,
  });
};
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
        max-width: 31rem;
        position: sticky;
        overflow: hidden;
        top: 0px;
        overflow-y: scroll;
        padding: 1.5rem;
        .title {
          @include LargTextBold;
          margin-bottom: 1rem;
          text-align: justify;
        }
        .text {
          @include LargText;
          text-align: justify;
        }
      }
      .right {
        // @include shadow-right;

        max-width: 100%;
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
