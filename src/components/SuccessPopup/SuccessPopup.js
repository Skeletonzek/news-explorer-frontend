import React from 'react';

function SuccessPopup(props) {

  return (
    <section className={`popup popup-success ${props.isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__form popup-success__form">
      <button className="popup__close popup-success__close" type="button" onClick={props.onClose}></button>
      <h2 className="popup-success__status-text">Пользователь успешно зарегестрирован</h2>
      <button className="popup-success__login" type="button">Войти</button>
    </div>
  </section>
  )
}

export default SuccessPopup;