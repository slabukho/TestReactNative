import React from 'react';
import {FunctionComponent} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Navigation from './src/navigation';

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
