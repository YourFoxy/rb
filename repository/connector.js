import Axios from "axios";

class ApiConnector {
  connector;
  constructor() {
    this.connector = Axios.create({
      baseURL: "http://0.0.0.0:8079/api/v1/",
    });
  }
}

export default new ApiConnector();
