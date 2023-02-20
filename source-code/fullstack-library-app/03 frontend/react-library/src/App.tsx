import React from 'react';
import './App.css';
import {Footer} from "./layouts/NavbarSidebarAndFooter/Footer";
import {Navbar} from "./layouts/NavbarSidebarAndFooter/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import {CalonSiswaPage} from "./layouts/CalonSiswa/CalonSiswaPage";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className='flex-grow-1'>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home'/>
                </Route>
                <Route path='/addSiswa'> <CalonSiswaPage/> </Route>
            </Switch>
        </div>
        <Footer/>
    </div>
  );
}

