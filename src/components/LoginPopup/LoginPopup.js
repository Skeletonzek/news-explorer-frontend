import React from 'react';
import { FormValidation } from '../../utils/FormValidation';

function LoginPopup(props) {
  const email = React.useRef();
  const password = React.useRef();
  const validation = FormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email.current.value, password.current.value);
  }

  React.useEffect(() => {
    if (props.isOpen) {
      validation.resetForm();
      email.current.value = "";
      password.current.value = "";
    }
  }, [props.isOpen])


  return (
    <section className={`popup popup-login ${props.isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__form popup-login__form" name="login" onSubmit={handleSubmit} noValidate>
        <button className="popup__close popup-login__close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title popup-login__title">Вход</h2>
        <label className="popup__label popup-login__label" htmlFor="email-login-input">Email</label>
        <input ref={email} className="popup__text popup-login__text" id="email-login-input" type="email" name="email" placeholder="Введите почту" minLength="6" maxLength="40" onChange={validation.handleChange} required />
        <span className={`popup__error ${validation.isValid ? '' : 'popup__error_visible'}`} id="email-login-error">{validation.errors.email}</span>
        <label className="popup__label popup-login__label" htmlFor="password-login-input">Пароль</label>
        <input ref={password} className="popup__text popup-login__text" id="password-login-input" type="password" name="password" placeholder="Введите пароль" minLength="6" maxLength="200" onChange={validation.handleChange} required />
        <span className={`popup__error ${validation.isValid ? '' : 'popup__error_visible'}`} id="password-login-error">{validation.errors.password}</span>
        <button className={`popup__submit popup-login__submit ${validation.isValid ? '' : 'popup__submit_inactive'}`} type="submit">Войти</button>
        <p className="popup__change popup-login__change">или
          <button className="popup__change-button popup-login__change-button" type="button" onClick={props.onRegisterClick}>Зарегестрироваться</button>
        </p>
      </form>
    </section>
  )
}

export default LoginPopup;