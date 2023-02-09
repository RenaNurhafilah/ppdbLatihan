import React from 'react';
import './App.css';
import {Footer} from "./layouts/NavbarSidebarAndFooter/Footer";
import {Navbar} from "./layouts/NavbarSidebarAndFooter/Navbar";
import AppRoute from "./layouts/Route/AppRoute";



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <AppRoute/>
        <Footer/>
    </div>
  );
}

export default App;
