import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      windowWidth: 0,
      isModalOpen: false,
      activeSection: 0,
      formData: null,
      services: [],
    };
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
    setServices(value) {
      this.services = value;
    },
    setactiveSection({ value, data }) {
      alert(value);
      this.activeSection = value;
    },
  },
});
