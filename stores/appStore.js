import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    setIsModalOpen({ value, data }) {
      this.isModalOpen = value;
      if (data && this.isModalOpen) {
        this.formData = data;
      } else {
        this.formData = null;
      }
    },
  },
});
