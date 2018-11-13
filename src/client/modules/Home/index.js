import React, { Component } from 'react'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Home from './components';
import TodosContainer from '../Todos';

export default class HomeContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todos" component={TodosContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
