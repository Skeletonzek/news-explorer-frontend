import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {

  return (
    <main className="content">
      <section className="result">
        <NewsCardList />
      </section>
    </main>
  )
}

export default SavedNews;