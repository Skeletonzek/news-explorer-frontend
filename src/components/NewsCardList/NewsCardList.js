import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';

function NewsCardList(props) {
  const currentPath = useLocation();

  return (
    <div className="result__list">
      {currentPath.pathname === '/' && props.news.slice(0, props.count).map((news, index) => (<NewsCard key={index} _id={index} savedNews={props.savedNews} source={news.source.name}
        title={news.title} date={news.publishedAt} text={news.description} img={news.urlToImage} link={news.url} isLogged={props.isLogged} onNewsAddClick={props.onNewsAddClick} onNewsDeleteClick={props.onNewsDeleteClick} />))}
      {currentPath.pathname === '/saved-news' && props.savedNews.map((news) => (<NewsCard key={news._id} _id={news._id} source={news.source} savedNews={props.savedNews}
        title={news.title} date={news.date} text={news.text} img={news.image} keyword={news.keyword} link={news.link} onNewsDeleteClick={props.onNewsDeleteClick} onNewsAddClick={props.onNewsAddClick} />))}
    </div>
  )
}

export default NewsCardList;