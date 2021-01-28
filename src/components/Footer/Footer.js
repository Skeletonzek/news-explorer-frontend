import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../images/github.svg';
import fb from '../../images/fb.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2021 Supersite, Powered by News API</p>
      <ul className="footer__links">
        <li className="footer__link-list"> 
          <Link to="/" className="footer__link">Главная</Link>
        </li>
        <li className="footer__link-list">
          <a href="https://praktikum.yandex.ru" className="footer__link" target="_blank">Яндекс.Практикум</a>
        </li>
        <li className="footer__link-list">
          <a href="https://github.com/Skeletonzek" className="footer__link" target="_blank"><img className="footer__link-icon" src={github} alt="гитхаб иконка"></img></a>
        </li>
        <li className="footer__link-list">
          <a href="https://www.facebook.com/profile.php?id=100001911285647" className="footer__link" target="_blank"><img className="footer__link-icon" src={fb} alt="фб иконка"></img></a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;