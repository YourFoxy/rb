<template>
  <div :class="$style.header">
    <div :class="$style.left">
      <NuxtLink to="/"
        ><Icon :class="$style.icon" icon="logo" is-pointer size="logo" />
      </NuxtLink>
      <div :class="$style.sections">
        <div
          @click="setModal(0)"
          :class="[
            $style.section,
            { [$style.active]: appStore.activeSection === 0 },
          ]"
        >
          {{ appStore.activeSection }}
          <NuxtLink to="/books0"> Редкие книги </NuxtLink>
        </div>
        <div
          @click="setModal(1)"
          :class="[
            $style.section,
            { [$style.active]: appStore.activeSection === 1 },
          ]"
        >
          <NuxtLink to="/books1"> Фондодержатели </NuxtLink>
        </div>
        <div :class="[$style.section, { [$style.active]: active === section }]">
          <NuxtLink to="/books2"> Провененции </NuxtLink>
        </div>
      </div>

      <!-- <div :class="[$style.section, { [$style.active]: active === section }]">
        <NuxtLink v-bind:to="'/books0' + index">
          {{ 1 }}
        </NuxtLink>
        <NuxtLink v-bind:to="'/books1' + index">
          {{ 2 }}
        </NuxtLink>
        <NuxtLink v-bind:to="'/books2' + index">
          {{ 3 }}
        </NuxtLink>
      </div> -->
    </div>
    <!-- <div
        :class="[$style.section, { [$style.active]: active === section }]"
        v-for="(section, index) in SECTIONS"
        :key="section"
        @click="setActive(section)"
      >
        <NuxtLink v-bind:to="'/books0' + index">
          {{ section }}
        </NuxtLink>
        <NuxtLink v-bind:to="'/books1' + index">
          {{ section }}
        </NuxtLink>
        <NuxtLink v-bind:to="'/books2' + index">
          {{ section }}
        </NuxtLink>
      </div>
    </div> -->
    <div :class="$style.right">
      <NuxtLink
        :class="$style.manual"
        @click="setActive('')"
        to="/instruction"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div :class="$style.icon">i</div>
        <Transition>
          <div :class="$style.name" v-if="active === '' || hover">
            Инструкция
          </div>
        </Transition>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
import { ref, onMounted } from "vue";
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

const setModal = (value) => {
  appStore.setactiveSection({
    value,
  });
};

const hover = ref(false);

const SECTIONS = ["Редкие книги", "Фондодержатели", "Провененции", ""];
const active = ref(SECTIONS[0]);
const setActive = (value) => {
  active.value = value;
};
</script>

<style lang="scss" module>
.header {
  @include container;
  // @include shadow;
  width: 100%;
  height: 4.25rem;
  background-color: $dark-green;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid $disabled;
  justify-content: space-between;
  border-radius: 1rem 1rem 0 0;
  margin-top: 1rem;
  @include laptop {
    margin-top: 0;
    border-radius: 0;
  }

  .left {
    display: flex;
    .icon {
      cursor: pointer;
      padding-right: 1.5rem;
    }
    .sections {
      align-self: center;
      display: flex;
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
