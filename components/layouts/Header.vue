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
        <NuxtLink to="/instruction1">
          {{ section }}
        </NuxtLink>
      </div>
    </div>
    <div :class="$style.right">
      <NuxtLink
        :class="$style.manual"
        @click="setActive('')"
        to="/instruction"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div :class="$style.icon">i</div>

        <div :class="$style.name" v-if="active === '' || hover">Инструкция</div>
      </NuxtLink>
      <!-- <div :class="$style.manual" @click="setActive('')">Инструкция</div> -->
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
import { ref, onMounted } from "vue";
const hover = ref(false);

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
  height: 4.25rem;
  background-color: $dark-green;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $white-opacity;
  justify-content: space-between;
  border-radius: 1rem 1rem 0 0;
  margin-top: 1rem;

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
      &:hover {
        color: $light;
        opacity: 70%;
      }
      &.active {
        color: $light;
        opacity: 100%;
      }
    }
  }
  .right {
    display: flex;

    .manual {
      @include LargTextBold;
      display: flex;
      cursor: pointer;

      transition: transform 150ms ease-in-out;
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
      .name {
        align-self: center;
        padding-left: 0.5rem;
        transition: 22.3s;
        transition: transform 150ms ease-in-out;
      }
    }
  }
}
</style>
