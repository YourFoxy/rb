<template>
  <div
    :class="[
      $style.icon,
      { [$style.pointer]: isPointer },
      { [$style.disabled]: isDisabled },
      { [$style.logo]: size === 'logo' },
      { [$style.close]: size === 'close' },
    ]"
  >
    <img v-if="icon" :src="'/icons/' + icon + '.svg'" alt="icon" />
    <img v-else-if="link" :src="link" alt="icon" />
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "",
  },
  isPointer: {
    type: Boolean,
    default: false,
  },

  size: {
    type: String,
    default: "3rem",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" module>
.icon {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  &.pointer {
    cursor: pointer;
  }
  &.disabled {
    cursor: auto;
    pointer-events: none;
    opacity: 0.5;
  }

  &.logo {
    img {
      width: 3.125rem;
      height: 2.25rem;
    }
    @include custom(430) {
      width: 4rem;
      height: 4rem;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  &.close {
    img {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
}
</style>
