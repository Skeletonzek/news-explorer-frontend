import React from 'react';
import { useLocation } from 'react-router-dom';
import { dateNews } from '../../utils/Utils';

function NewsCard(props) {
  const currentPath = useLocation();
  const isLoggedText = `${props.isLogged ? 'Сохранить статью' : 'Войдите, чтобы сохранять статьи'}`
  const [visible, setVisible] = React.useState('');
  const [isSaved, setIsSaved] = React.useState(false);
  const regexLink = /^https?:\/\/(w{3}\.)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=]*)\/?$/;

  React.useEffect(() => {
    setIsSaved(false);
    props.savedNews.forEach(news => {
      if (news.link === props.link) {
        return setIsSaved(true);
      }
    });
  }, [props.link, props.savedNews]);

  function onHover() {
    setVisible('card__tooltip_visible');
  }

  function noHover() {
    setVisible('');
  }

  function handleClick() {
    if (!regexLink.test(props.img)) {
      return;
    }
    if (isSaved || currentPath.pathname === '/saved-news') {
      setIsSaved(false);
      props.onNewsDeleteClick(props);
    }
    else {
      setIsSaved(true);
      props.onNewsAddClick(props);
    }
  }

  return (
    <article className="card">
      <p className={`card__tooltip card__tooltip_type_hint ${visible}`}>{currentPath.pathname === '/' && !isSaved ? isLoggedText : 'Убрать из сохранённых'}</p>
      {currentPath.pathname === '/saved-news' &&
        <p className="card__tooltip card__tooltip_type_info">{props.keyword}</p>
      }
      <button className={`card__button ${currentPath.pathname === '/' ? 'card__button_type_bookmark' : 'card__button_type_bin'} ${isSaved && currentPath.pathname === '/' ? 'card__button_type_active' : ''}`} type="button" onMouseEnter={onHover} onMouseLeave={noHover} onClick={props.isLogged || currentPath.pathname === '/saved-news' ? handleClick : null}></button>
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="card">
        <img className="card__photo" alt={props.title} src={props.img} />
        <p className="card__date">{dateNews(props.date)}</p>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__text">{props.text}</p>
        <span className="card__source">{props.source}</span>
      </a>
    </article>
  )
}

export default NewsCard;