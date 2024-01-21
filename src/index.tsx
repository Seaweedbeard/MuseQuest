import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import LandingPage from './sites/LandingPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import CreateMQ from './sites/CreateMQ';
import BrowseMQ from './sites/BrowseMQ';
import HowTo from './sites/HowTo';
import Contact from './sites/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if(root) {
  root.render(
      <BrowserRouter>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path={"/create"} element={<CreateMQ/>} />
            <Route path={"/browse"} element={<BrowseMQ/>} />
            <Route path={"/howto"} element={<HowTo/>} />
            <Route path={"/contact"} element={<Contact/>} />
          </Routes>
        </>
      </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();