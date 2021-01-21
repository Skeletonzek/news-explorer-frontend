import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logoutImg from '../../images/logout.svg';
import logoutImgBlack from '../../images/logout-black.svg'

function Navigation(props) {
  const currentPath = useLocation();

  return (
    <nav className="header__navigation">
      <Link to='/' className={`header__navigation-list ${currentPath.pathname === '/' ? 'header__navigation-list_clicked' : 'header__navigation-list_page_lk'}`}>Главная</Link>
      <Link to='/saved-news' className={`header__navigation-list ${currentPath.pathname === '/saved-news' ? `header__navigation-list_clicked-lk header__navigation-list_page_lk`  : ''}`}>Сохраненные статьи</Link>
      
      {/*Кнопка логаута буду с ней работать на этапе функционала*/}
      
      {/* <Link to='/' className={`header__navigation-list ${currentPath.pathname === '/saved-news' ? 'header__navigation-list_page_lk' : ''}`}>
        <p className="header__username">Грета</p>
        <img src={currentPath.pathname === '/' ? logoutImg : logoutImgBlack} alt="Выйти" className="header__logout"></img>
      </Link> */}
      <button className={`header__navigation-list ${currentPath.pathname === '/saved-news' ? `header__navigation-list_page_lk`  : ''}`} type="button" onClick={props.onAuthClick}>Авторизоваться</button>
    </nav>

  )
}

export default Navigation;