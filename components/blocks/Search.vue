<template>
  <div :class="$style.container">
    <input
      :class="$style.search"
      class="search"
      type="text"
      id="search"
      name="name"
      required
      size="10"
      placeholder="Введите название или автора книги"
    />
    <div @click="setSearch()" :class="$style.button">
      <Icon :class="$style.icon" icon="search" is-pointer size="shearch" />
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/common/Icon.vue";
import { useAppStore } from "~/stores/appStore";
const appStore = useAppStore();

const setSearch = () => {
  const value = document.getElementById("search").value.toLowerCase();
  appStore.setSearch({
    value,
  });
};
onMounted(async () => {
  //получение книг с сервера
  window.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      console.log("ddd");
      setSearch();
    }
  });
});
</script>

<style lang="scss" module>
.container {
  background-color: white;
  display: flex;
  padding-right: 1rem;
  border-radius: 0.25rem;
  .search {
    width: 21rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    padding: 1rem;
    background-color: white;
    border-radius: 0.25rem;
  }
  .button {
    align-content: center;
    opacity: 0.6;
  }
}
</style>
