import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { save } from "redux-localstorage-simple";
const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares, save()));

test('renders learn react link', () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(app).toBeDefined();
});
