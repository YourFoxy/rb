<template>
  <div :class="$style.popup">
    <div :class="$style.overlay" @click="emits('close-img-modal', false)"></div>
    <div :class="$style.content" @click.stop>
      <div :class="$style.close" @click.stop="emits('close-img-modal', false)">
        <Icon icon="close" is-pointer size="close" />
      </div>
      <div :class="$style.body">
        <img :class="$style.image" :src="appStore.image" alt="" />

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
import Card from "~/components/lib/Card.vue";
const emits = defineEmits(["close-img-modal"]);
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

const activeType = ref(0);
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
      min-height: Calc(100vh * 0.7);
      min-width: Calc(100vh * 0.8);
      text-align: center;
      align-content: center;
      border-radius: 0.75rem;
      .image {
        max-height: Calc(100vh * 0.7 - 2rem);
        align-content: center;
        align-items: center;
        align-self: center;
        max-width: Calc(100vh * 0.8 - 2rem);
        object-fit: contain;
        border-radius: 0.25rem;
        margin: 1rem;
      }
    }
  }
}
</style>
