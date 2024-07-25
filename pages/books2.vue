<template>
  <div :class="$style.wrapper">
    <LibCard v-for="i in provenentions" :key="i.id" :librarie="i" />
  </div>
</template>

<script setup>
import Repository from "~/repository";
import LibCard from "~/components/lib/Card.vue";

const provenentions = ref([]);

onMounted(async () => {
  const { value, error } = await Repository.Books.getProvenentions();
  provenentions.value = value;
});
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
