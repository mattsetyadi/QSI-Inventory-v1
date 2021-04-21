import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Modules/App/Navigation';
import { Provider } from 'react-redux';
import { store } from './Modules/App/ConfigureStore';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>
    </>
  );
}

export default App;
