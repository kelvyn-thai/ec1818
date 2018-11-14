import React, { Component } from 'react'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Todos from '../../Todos/components';
import Authen from "../features/authen/components";
import Home from "./Home";

export default class HomeContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/authen" component={Authen} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
