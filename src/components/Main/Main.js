import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import NewsCardList from '../NewsCardList/NewsCardList';
import Loading from '../Loading/Loading';

function Main(props) {

  return (
    <main className="content">
      <section className="result">
        <h2 className="result__title">Результаты поиска</h2>
        <NewsCardList />
        <button className="result__button" type="button">Показать ещё</button>
      </section>
      <Loading />
      <About />
    </main>
  )
}

export default Main;