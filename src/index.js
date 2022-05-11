import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { MainPage } from './Pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarDefault } from './Assets/Components/TaskList/NavbarDefault';
import { Background } from './Assets/Components/TaskList/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavbarDefault/>
  <Background/>
  <MainPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
