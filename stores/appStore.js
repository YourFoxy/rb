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
      formDataSearch: null,
      services: [],
      isSeriesModalOpen: false,
      isProvModalOpen: false,
      search: "",
    };
  },
  getters: {},
  actions: {
    setSearch({ value, data }) {
      this.search = value;
      if (data && this.search != null) {
        this.formDataSearch = data;
      } else {
        this.formDataSearch = null;
      }
    },
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
