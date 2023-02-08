import React from 'react';
import './App.css';
import {Footer} from "./layouts/NavbarSidebarAndFooter/Footer";
import {Navbar} from "./layouts/NavbarSidebarAndFooter/Navbar";
import {Table} from "./layouts/Table/Table";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Table/>
        <Footer/>
    </div>
  );
}

export default App;
