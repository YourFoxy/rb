<template>
  <div :class="$style.body">
    <div @click="setModal(true)">svsdrfegfverfgjisdkrpokorvg</div>

    <CommonModal
      v-if="appStore.isModalOpen"
      @close-modal="(value) => setModal(value)"
    >
    </CommonModal >
  </div>
</template>
<script setup>
import CommonModal from "~/components/modals/CommonModal.vue";
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

const setModal = (value) => {
  appStore.setIsModalOpen({
    value,
  });
};
</script>
<style lang="scss" module>
.body {
  width: 100%;
  min-height: 100vh;

  margin-top: 1rem;
  background-color: $dark-green;
}
</style>
