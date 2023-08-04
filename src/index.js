import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "../src/components/Header/index.jsx";
import Footer from "../src/components/Footer/index.jsx";
import Router from "./components/Router/router.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();


