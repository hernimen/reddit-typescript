import React from 'react';
import { configure, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { save } from "redux-localstorage-simple";
const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares, save()));

configure({
  testIdAttribute: 'data-test'
})

describe('App', () => {
  let app;
  beforeAll(() => {
    app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })
  test('the app should be defined', () => {
    expect(app).toBeDefined();
  });
})

