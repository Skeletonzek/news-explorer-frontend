import React from 'react';

function LoginPopup(props) {

  return (
    <section className={`popup popup-login ${props.isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__form popup-login__form" name="login" noValidate>
        <button className="popup__close popup-login__close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title popup-login__title">Вход</h2>
        <label className="popup__label popup-login__label" htmlFor="email-input">Email</label>
        <input className="popup__text popup-login__text" id="email-input" type="email" name="email" placeholder="Введите почту" minLength="6" maxLength="40" required />
        <span className="popup__error" id="name-input-error"></span>
        <label className="popup__label popup-login__label" htmlFor="password-input">Пароль</label>
        <input className="popup__text popup-login__text" id="password-input" type="password" name="password" placeholder="Введите пароль" minLength="6" maxLength="200" required />
        <span className="popup__error" id="status-input-error"></span>
        <button className="popup__submit popup-login__submit" type="submit">Войти</button>
        <p className="popup__change popup-login__change">или
          <button className="popup__change-button popup-login__change-button" type="button" onClick={props.onRegisterClick}>Зарегестрироваться</button>
        </p>
      </form>
    </section>
  )
}

export default LoginPopup;