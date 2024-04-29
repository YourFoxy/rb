<template>
  <div :class="$style.header">
    <div :class="$style.left">
      <Icon :class="$style.icon" icon="logo" is-pointer size="logo" />

      <div
        :class="[$style.section, { [$style.active]: active === section }]"
        href=""
        v-for="section in SECTIONS"
        :key="section"
        @click="setActive(section)"
      >
        {{ section }}
      </div>
    </div>
    <div :class="$style.right">
      <div :class="$style.icon">i</div>
      <div :class="$style.manual" @click="setActive('')">Инструкция</div>
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";

const isI = true;
const SECTIONS = ["Редкие книги", "Фондодержатели", ""];
const active = ref(SECTIONS[0]);
const setActive = (value) => {
  active.value = value;
};
</script>

<style lang="scss" module>
.header {
  @include container;
  @include shadow;
  width: 100%;
  height: 3.25rem;
  background-color: $dark-green;
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid $white-opacity;
  justify-content: space-between;

  .left {
    display: flex;

    .icon {
      cursor: pointer;
      padding-right: 1.5rem;
    }
    .section {
      @include LargTextBold;
      cursor: pointer;
      align-self: center;
      padding-right: 1rem;
      color: $disabled;

      &.active {
        color: $light;
      }
    }
  }
  .right {
    display: flex;
    .icon {
      cursor: pointer;
    }
    .icon {
      @include LargTextBold;
      align-self: center;
      border-radius: 50rem;
      height: 1.3rem;
      width: 1.3rem;
      padding-left: 0.1rem;
      border: 2px solid $light;
      text-align: center;
    }
    .manual {
      @include LargTextBold;
      cursor: pointer;
      align-self: center;
      padding-left: 0.5rem;
    }
  }
}
</style>
