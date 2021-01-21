import React from 'react';

function RegisterPopup(props) {

  return (
    <section className={`popup popup-register ${props.isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__form popup-register__form" name="register" noValidate>
        <button className="popup__close popup-register__close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title popup-register__title">Регистрация</h2>
        <label className="popup__label popup-register__label" htmlFor="email-input">Email</label>
        <input className="popup__text popup-register__text" id="email-input" type="email" name="email" placeholder="Введите почту" minLength="6" maxLength="40" required />
        <span className="popup__error" id="name-input-error"></span>
        <label className="popup__label popup-register__label" htmlFor="password-input">Пароль</label>
        <input className="popup__text popup-register__text" id="password-input" type="password" name="password" placeholder="Введите пароль" minLength="6" maxLength="200" required />
        <span className="popup__error" id="status-input-error"></span>
        <label className="popup__label popup-register__label" htmlFor="name-input">Имя</label>
        <input className="popup__text popup-register__text" id="name-input" type="text" name="name" placeholder="Введите своё имя" minLength="2" maxLength="200" required />
        <span className="popup__error" id="status-input-error">Такой пользователь уже есть</span>
        <button className="popup__submit popup-register__submit" type="submit">Зарегестрироваться</button>
        <p className="popup__change popup-register__change">или
        {/* Клик на эту кнопку осознано ведет не к тому окну, чтобы проверить верстку*/}
          <button className="popup__change-button popup-register__change-button" type="button" onClick={props.onSuccessClick}>Войти</button>
        </p>
      </form>
    </section>
  )
}

export default RegisterPopup;