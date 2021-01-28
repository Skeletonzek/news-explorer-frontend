import React from 'react';

function SearchForm(props) {
  const keyword = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(keyword.current.value);
  }
  
  return (
    <section className="search-form">
      <h1 className="search-form__header">Что творится в мире?</h1>
      <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете</p>
      <form className="search-form__container" onSubmit={handleSubmit} noValidate>
        <input ref={keyword} className="search-form__input" placeholder="Искать тут" id="search-input" type="text" name="search" minLength="1" maxLength="40" required />
        <button className="search-form__submit" type="submit">Искать</button>
      </form>
      <span className={`search-form__error ${props.isSearchEmpty ? 'search-form__error_visible' : ''}`} id="search-input-error">Нужно ввести ключевое слово</span>
    </section>
  )
}

export default SearchForm;