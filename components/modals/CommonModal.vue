<template>
  <div :class="$style.popup">
    <div :class="$style.overlay" @click="emits('close-modal', false)"></div>
    <div :class="$style.content" @click.stop>
      <div :class="$style.close" @click.stop="emits('close-modal', false)">
        <Icon icon="logo" is-pointer />
      </div>
      <div :class="$style.body">
        екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые
        екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые
        екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые екпркаые
        екпркаые

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
const emits = defineEmits(["close-modal"]);
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
    transition: opacity 0.3ms;
    z-index: $z-modal;
    animation: expand 0.3s ease-in-out rgba(0, 0, 0, 0.6);
  }
  .close {
    position: absolute;
    right: 2.5rem;
    top: 2.5rem;
    @include tablet {
      right: 1rem;
      top: 1rem;
    }
  }
  .content {
    overflow: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: calc(100vh - 5rem);
    max-width: 37.5rem;
    width: 100%;
    background: $white;
    border-radius: 2.5rem;
    z-index: $z-modal;
    animation: expand 0.2s ease-in-out;
    padding: 2.5rem;
    // @include scrollbarY;
    @include custom(632) {
      width: calc(100vw - 2rem);
      max-width: none;
    }
    @include custom(550) {
      padding: 1.5rem;
    }
  }
}
</style>
