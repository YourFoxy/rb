<template>
  <div :class="$style.wrapper">
    <LibCard v-for="i in provenentions" :key="i.id" :librarie="i" />
  </div>
</template>

<script setup>
import Repository from "~/repository";
import LibCard from "~/components/prov/Card.vue";
import ProvModal from "~/components/modals/ProvModal.vue";
const provenentions = ref([]);
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

onMounted(async () => {
  const { value, error } = await Repository.Books.getProvenentions();
  provenentions.value = value;
});

const setProvModal = (value) => {
  appStore.setIsProvModalOpen({
    value,
  });
};
</script>

<style lang="scss" module>
* {
  margin: 0;
}
.wrapper {
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
