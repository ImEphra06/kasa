import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.scss';

import Header from './components/header/header'
import Accueil from './pages/acceuil';
import Error from './components/error/error'
import Footer from './components/footer/footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Accueil />} />
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
