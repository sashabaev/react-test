import * as React from "react";
import { Provider } from "react-redux";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Store } from "redux";
import { RootState } from "./redux/rootReducer";
import LoginContainer from "./containers/loginContainer";
import HomeContainer from "./containers/homeContainer";
import configureStore from "./redux/store";
import { Navbar } from "./Navbar";
import cartContainer from "./containers/cartContainer";
import './materialize.min.css';
import booksContainer from "./containers/admin/booksContainer";

export const Path = {
  root: "/",
  // topProducts: "/top",
  // products: "/products",
  cart: "/cart",
  login: "/login",
  books: "/admin/books"
};

const store: Store<RootState> = configureStore();

export default () => (
  <Provider store={store}>
    <Router>
          <Navbar/>
          <div className="container">
          <Route exact path={Path.root} component={HomeContainer} />
          <Route exact path={Path.cart} component={cartContainer} />
          <Route path={Path.login} component={LoginContainer} />
          <Route path={Path.books} component={booksContainer} />
          </div>  
    </Router>
  </Provider>
);