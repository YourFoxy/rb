import connector from "./connector";
import Books from "./Books/index.js";

class Repository {
  connector = connector;
  Books = Books;
}

export default new Repository();
