import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './index.scss';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Accueil from './pages/acceuil/acceuil';
import Apropos from "./pages/apropos/apropos";
import Logement from "./pages/logement/logement";
import Error from './pages/error/error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Accueil />} />
				<Route path="/about" element={<Apropos />} />
				<Route path="/logement/:userId" element={<Logement />} />
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
