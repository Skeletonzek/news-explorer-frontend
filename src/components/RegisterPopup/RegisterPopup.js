import React from 'react';
import { FormValidation } from '../../utils/FormValidation';

function RegisterPopup(props) {
  const email = React.useRef();
  const password = React.useRef();
  const name = React.useRef();
  const validation = FormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email.current.value, password.current.value, name.current.value);
  }

  React.useEffect(() => {
    if (props.isOpen) {
      validation.resetForm();
      email.current.value = "";
      password.current.value = "";
      name.current.value = "";
    }
  }, [props.isOpen])

  return (
    <section className={`popup popup-register ${props.isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__form popup-register__form" name="register" onSubmit={handleSubmit} noValidate>
        <button className="popup__close popup-register__close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title popup-register__title">Регистрация</h2>
        <label className="popup__label popup-register__label" htmlFor="email-register-input">Email</label>
        <input ref={email} className="popup__text popup-register__text" id="email-register-input" type="email" name="email" placeholder="Введите почту" minLength="6" maxLength="40" onChange={validation.handleChange} required />
        <span className={`popup__error ${validation.isValid ? '' : 'popup__error_visible'}`} id="email-register-error">{validation.errors.email}</span>
        <label className="popup__label popup-register__label" htmlFor="password-register-input">Пароль</label>
        <input ref={password} className="popup__text popup-register__text" id="password-register-input" type="password" name="password" placeholder="Введите пароль" minLength="6" maxLength="200" onChange={validation.handleChange} required />
        <span className={`popup__error ${validation.isValid ? '' : 'popup__error_visible'}`} id="password-register-error">{validation.errors.password}</span>
        <label className="popup__label popup-register__label" htmlFor="name-register-input">Имя</label>
        <input ref={name} className="popup__text popup-register__text" id="name-register-input" type="text" name="name" placeholder="Введите своё имя" minLength="2" maxLength="200" onChange={validation.handleChange} required />
        <span className={`popup__error ${validation.isValid ? '' : 'popup__error_visible'}`} id="name-register-error">{validation.errors.name}</span>
        <span className={`popup__error ${props.isError ? 'popup__error_visible' : ''}`} id="register-error">Такой пользователь уже есть</span>
        <button className={`popup__submit popup-register__submit ${validation.isValid ? '' : 'popup__submit_inactive'}`} type="submit">Зарегестрироваться</button>
        <p className="popup__change popup-register__change">или
          <button className="popup__change-button popup-register__change-button" type="button" onClick={props.onAuthClick}>Войти</button>
        </p>
      </form>
    </section>
  )
}

export default RegisterPopup;