import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store';
import { createStore } from 'redux';
const store = createStore(rootReducer);

test('renders learn react link', () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(app).toBeDefined();
});
