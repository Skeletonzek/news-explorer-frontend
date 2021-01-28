import React from 'react';

function SearchForm(props) {

  return (
    <section className="search-form">
      <h1 className="search-form__header">Что творится в мире?</h1>
      <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете</p>
      <div className="search-form__container">
        <input className="search-form__input" placeholder="Искать тут"></input>
        <button className="search-form__submit" typr="submit">Искать</button>
      </div>
    </section>
  )
}

export default SearchForm;