import React from 'react';
import {useLocation, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const currentPath = useLocation();

  return (
    <header className={`header ${currentPath.pathname === '/saved-news' ? 'header_page_lk' : ''}`}>
      <h2 className={`header__logo ${currentPath.pathname === '/saved-news' ? 'header__logo_page_lk' : ''}`}>NewsExplorer</h2>
      <Navigation  onAuthClick={props.onAuthClick} />
    </header>
  )
}

export default Header;