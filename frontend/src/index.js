import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

//components
import TodoPage from "./components/todo-page/todo-page";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const app = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={TodoPage} />
    </Router>
  </Provider>
);

ReactDom.render(app, document.getElementById("root"));
