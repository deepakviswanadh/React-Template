import React from 'react';
import { Provider } from 'react-redux';
import App from 'containers/App';
import store from 'store/store';

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
