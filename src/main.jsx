//import React from 'react'
// css imports
import './index.css';

//library import
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//component import
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <Toaster/>
    </BrowserRouter>
    
  
);
