import React from 'react';
import notFound from '../../images/not-found.svg';

function Loading(props) {

  return (
    //Класс "loading_visible" отображает нужный блок, временное решение для проверки верстки
    <section className="loading">
      <div className={`loading__container loading-preloader ${props.loading ? 'loading_visible' : ''}`}>
        <i className="loading__circle loading-preloader__circle"></i>
        <p className="loading__text loading-preloader__text">Идёт поиск новостей&hellip;</p>
      </div>
      <div className={`loading__container loading-noresult ${props.notFound ? 'loading_visible' : ''}`}>
        <img className="loading__img loading-noresult__img" src={notFound} alt="не найдено"></img>
        <h2 className="loading__header loading-noresult__header">Ничего не найдено</h2>
        <p className="loading__text loading-noresult__text">К сожалению по вашему запросу ничего не найдено.</p>
      </div>
    </section>
  )
}

export default Loading;