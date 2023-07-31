import React from 'react';
import { render } from "react-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './Redux/store';
import './index.css';
import '../node_modules/react-toastify/dist/ReactToastify.css'
const root = document.getElementById("root");
render(
  <>
    <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </>
  ,

  root);

reportWebVitals();


