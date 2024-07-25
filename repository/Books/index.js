import ApiConnector from "../connector";

class Books {
  getBooks = async () => {
    const result = {
      value: false,
      error: null,
    };

    try {
      const response = await ApiConnector.connector.get(`/books/`);
      result.value = response.data;
    } catch (e) {
      result.error = true;
    }

    return result;
  };
  getBook = async (id) => {
    const result = {
      value: false,
      error: null,
    };

    try {
      const response = await ApiConnector.connector.get(`/books/${id}/`);
      result.value = response.data;
    } catch (e) {
      result.error = true;
    }

    return result;
  };
  getCriteria = async () => {
    const result = {
      value: false,
      error: null,
    };

    try {
      const response = await ApiConnector.connector.get(`/books/criteria/`);
      result.value = response.data;
    } catch (e) {
      result.error = true;
    }

    return result;
  };
  getLibraries = async () => {
    const result = {
      value: false,
      error: null,
    };

    try {
      const response = await ApiConnector.connector.get(`/libraries/`);
      result.value = response.data;
    } catch (e) {
      result.error = true;
    }

    return result;
  };
  getLibrariesTypes = async () => {
    const result = {
      value: false,
      error: null,
    };

    try {
      const response = await ApiConnector.connector.get(`/libraries/types/`);
      result.value = response.data;
    } catch (e) {
      result.error = true;
    }

    return result;
  };
  getSeries = async () => {
    const result = {
      value: false,
      error: null,
    };

    try {
      const response = await ApiConnector.connector.get(`/series/`);
      result.value = response.data;
    } catch (e) {
      result.error = true;
    }

    return result;
  };
}

export default new Books();
