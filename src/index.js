import React from 'react';
import ReactDOM from 'react-dom/client';
import  ToolsCRUD from "./pages/ToolsCRUD";
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./mainStyles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <ToolsCRUD/>
    <Footer/>
  </React.StrictMode>
);
