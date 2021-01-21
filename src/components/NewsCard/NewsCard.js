import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function NewsCard(props) {
  const currentPath = useLocation();
  //Временное решение для проверки верстки true - новость добавлена, false - нет
  const addNews = false;
  const [visible, setVisible] = React.useState('123');

  function onHover() {
    setVisible('card__tooltip_visible');
  }

  function noHover() {
    setVisible('');
  }

  return (
    <article className="card">
      <div className={`card__tooltip card__tooltip_type_hint ${visible}`}>
        <p className={`card__keyword card__keyword_type_hint ${visible}`}>{currentPath.pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}</p>
      </div>
      {currentPath.pathname === '/saved-news' &&
        <div className="card__tooltip card__tooltip_type_info">
          <p className="card__keyword card__keyword_type_info">Природа</p>
        </div>
      }
      <button className={`card__button ${currentPath.pathname === '/' ? 'card__button_type_bookmark' : 'card__button_type_bin'} ${addNews ? 'card__button_type_active' : ''}`} type="button" onMouseEnter={onHover} onMouseLeave={noHover}></button>
      <img className="card__photo" alt={props.title} src={props.img} />
      <p className="card__date">2 августа, 2019</p>
      <h2 className="card__title">{props.title}</h2>
      <p className="card__text">{props.text}</p>
      <span className="card__source">{props.source}</span>
    </article>
  )
}

export default NewsCard;