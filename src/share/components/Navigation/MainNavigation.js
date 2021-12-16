import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../UIElement/Backdrop';
import MainHeader from './MainHeader';
import './MainNavigation.css'
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
function MainNavigation (props) {
    const [sideIsOpen,setSideIsOpen]=useState(false);

    const handleHamburger = () => {
        setSideIsOpen(true);
    };
    const closeHamburger =() => {
        setSideIsOpen(false);
    };

    return(<React.Fragment>
        {sideIsOpen ? (<Backdrop onClick={closeHamburger}/>) : null}
      
        <SideDrawer show={sideIsOpen} onClick={closeHamburger}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks/>
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={handleHamburger}>
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className="main-navigation__title">
                <Link to='/'>Places</Link>
            </h1>
            <nav className="main-navigation__header-nav">
               <NavLinks />
            </nav>
        </MainHeader>
        </React.Fragment>
    )
}
export default MainNavigation;