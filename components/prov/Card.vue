<template>
  <div @click="setProvModal(true)" :class="$style.container">
    <img :class="$style.img" :src="librarie.photo" alt="" />
    <div :class="$style.title">
      {{ librarie.name }}
    </div>
    <div v-if="appStore.isProvModalOpen">ddd</div>
  </div>
  <ProvModal
    v-if="appStore.isProvModalOpen"
    @close-prov-modal="(value) => setProvModal(value)"
  >
  </ProvModal>
</template>

<script setup>
import { useAppStore } from "~/stores/appStore";
import ProvModal from "~/components/modals/ProvModal.vue";
const appStore = useAppStore();
defineProps({
  librarie: {
    type: Object,
    default: () => {},
  },
});
const setProvModal = (value) => {
  appStore.setIsProvModalOpen({
    value,
  });
};
</script>

<style lang="scss" module>
.container {
  @include shadow;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 13.75rem;
  background-color: white;
  // margin-right: 1rem;
  cursor: pointer;
  .img {
    height: 10rem;
    width: 11.75rem;
    object-fit: cover;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 12px rgba(83, 83, 83, 0.25);
  }
  .title {
    padding-top: 0.5rem;
    width: 100%;
    @include LargTextBold;
    text-align: center;
  }
}
</style>
