import React from 'react';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import Loading from '../Loading/Loading';

function Main(props) {

  return (
    <main className="content">
      <section className={`result ${props.result ? 'result_visible' : ''}`}>
        <h2 className="result__title">Результаты поиска</h2>
        <NewsCardList news={props.news} savedNews={props.savedNews} isLogged={props.isLogged} count={props.count} isSaved={props.isSaved} onNewsAddClick={props.onNewsAddClick} onNewsDeleteClick={props.onNewsDeleteClick} />
        <button className={`result__button ${props.resultButtonHide ? 'result__button_no-visible' : ''}`} type="button" onClick={props.onMoreClick}>Показать ещё</button>
      </section>
      <Loading loading={props.loading} notFound={props.notFound} />
      <About />
    </main>
  )
}

export default Main;