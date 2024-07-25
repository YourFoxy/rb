import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      windowWidth: 0,
      isModalOpen: false,
      activeSection: 0,
      formData: null,
      formDataSeries: null,
      formDataProv: null,
      services: [],
      isSeriesModalOpen: false,
      isProvModalOpen: false,
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
    setIsSeriesModalOpen({ value, data }) {
      this.isSeriesModalOpen = value;
      if (data && this.isSeriesModalOpen) {
        this.formDataSeries = data;
      } else {
        this.formDataSeries = null;
      }
    },
    setIsProvModalOpen({ value, data }) {
      this.isProvModalOpen = value;

      if (data && this.isProvModalOpen) {
        this.formDataProv = data;
      } else {
        this.formDataProv = null;
      }
    },
    setServices(value) {
      this.services = value;
    },
    setactiveSection({ value }) {
      this.activeSection = value;
    },
  },
});
