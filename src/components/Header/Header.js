import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const currentPath = useLocation();

  return (
    <header className={`header ${currentPath.pathname === '/saved-news' ? 'header_page_lk' : ''}`}>
      <h2 className={`header__logo ${currentPath.pathname === '/saved-news' ? 'header__logo_page_lk' : ''}`}>NewsExplorer</h2>
      <Navigation isLogged={props.isLogged} onSignOut={props.onSignOut} onAuthClick={props.onAuthClick}  onMenuClick={props.onMenuClick} isOpen={props.isOpen} onClose={props.onClose} />
    </header>
  )
}

export default Header;