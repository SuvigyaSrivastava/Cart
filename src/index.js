import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Slices/store';
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 
   <Provider store={store}>
   <App/>
   <Toaster/>
 </Provider>

 </BrowserRouter>

);


