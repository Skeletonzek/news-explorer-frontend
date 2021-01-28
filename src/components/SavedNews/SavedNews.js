import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {

  return (
    <main className="content">
      <section className="result result_visible">
        <NewsCardList savedNews={props.savedNews} onNewsDeleteClick={props.onNewsDeleteClick} onNewsAddClick={props.onNewsAddClick} />
      </section>
    </main>
  )
}

export default SavedNews;