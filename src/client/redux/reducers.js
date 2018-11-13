import { combineReducers } from "redux";
import camelCase from 'lodash/camelCase';

const requireModule = require.context("../modules", true, /\.reducer.js/); //extract [reducerName].reducer.ts files inside redux folder

const reducers = {};

requireModule.keys().forEach( (fileName) => {
  const reducerName = camelCase(fileName.match(/(\w{1,})(.reducer.js)/)[1])

  reducers[reducerName] = requireModule(fileName).default;
});

export default combineReducers({
    ...reducers
})

