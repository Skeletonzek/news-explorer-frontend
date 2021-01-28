import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logoutImg from '../../images/logout.svg';
import logoutImgBlack from '../../images/logout-black.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation(props) {
  const currentPath = useLocation();
  const user = React.useContext(CurrentUserContext);

  return (
    <nav className="header__navigation">
      <Link to='/' className={`header__navigation-list ${currentPath.pathname === '/' ? 'header__navigation-list_clicked' : 'header__navigation-list_page_lk'}`}>Главная</Link>
      {props.isLogged && <Link to='/saved-news' className={`header__navigation-list ${currentPath.pathname === '/saved-news' ? `header__navigation-list_clicked-lk header__navigation-list_page_lk` : ''}`}>Сохраненные статьи</Link>}
      {props.isLogged && <button className={`header__navigation-list ${currentPath.pathname === '/saved-news' ? 'header__navigation-list_page_lk' : ''}`} onClick={props.onSignOut}>
        <p className="header__username">{user.name}</p>
        <img src={currentPath.pathname === '/' ? logoutImg : logoutImgBlack} alt="Выйти" className="header__logout"></img>
      </button>}
      {!props.isLogged && <button className={`header__navigation-list ${currentPath.pathname === '/saved-news' ? `header__navigation-list_page_lk` : ''}`} type="button" onClick={props.onAuthClick}>Авторизоваться</button>}
      <button className={`header__navigation-list_mobile-open ${currentPath.pathname === '/saved-news' ? `header__navigation-list_mobile-open_dark` : ''}
        ${props.isOpen && currentPath.pathname === '/' ? 'header__navigation-list_mobile-close' : ''}
        ${props.isOpen && currentPath.pathname === '/saved-news' ? 'header__navigation-list_mobile-close_dark' : ''}`} type="button"
        onClick={props.isOpen ? props.onClose : props.onMenuClick}></button>
      <nav className={`mobile-menu ${props.isOpen ? 'mobile-menu_opened' : ''}`}>
        <div className={`mobile-menu__container ${currentPath.pathname === '/saved-news' ? `mobile-menu__container_page_lk` : ''}`}>
          <Link to='/' className={`mobile-menu__link ${currentPath.pathname === '/saved-news' ? `mobile-menu__link_page_lk` : ''}`}>Главная</Link>
          {props.isLogged && <Link to='/saved-news' className={`mobile-menu__link ${currentPath.pathname === '/saved-news' ? `mobile-menu__link_page_lk` : ''}`}>Сохраненные статьи</Link>}
          {props.isLogged && <Link to='/' className={`mobile-menu__button ${currentPath.pathname === '/saved-news' ? `mobile-menu__button_page_lk` : ''}`}>
            <p className="header__username">{user.name}</p>
            <img src={currentPath.pathname === '/' ? logoutImg : logoutImgBlack} alt="Выйти" className="header__logout"></img>
          </Link>}
          {!props.isLogged && <button className={`mobile-menu__button ${currentPath.pathname === '/saved-news' ? `mobile-menu__button_page_lk` : ''}`} type="button" onClick={props.onAuthClick}>Авторизоваться</button>}
        </div>
      </nav>
    </nav>
  )
}

export default Navigation;