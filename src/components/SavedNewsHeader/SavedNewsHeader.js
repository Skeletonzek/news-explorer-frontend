import React from 'react';

function SavedNewsHeader(props) {

  return (
    <section className="saved-news">
      <p className="saved-news__info">Сохраненные статьи</p>
      <h2 className="saved-news__header">Грета, у вас 5 сохранённых статей</h2>
      <p className="saved-news__text">По ключевым словам: 
        <span className="saved-news__keywords"> Природа, Тайга и 2-м другим</span>
      </p>
    </section>
  )
}

export default SavedNewsHeader;