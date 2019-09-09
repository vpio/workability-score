import React from 'react';
import './App.css';
import NewCafe from './NewCafe';
import CafeList from './CafeList';
import { Provider } from 'react-redux';
import store from './store';
import { postCafe } from './actions/cafeActions';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CafeList />
        <NewCafe />
      </div>
    </Provider>
  );
}

export default App;
