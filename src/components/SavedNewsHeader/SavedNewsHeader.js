import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
  const user = React.useContext(CurrentUserContext);
  const savedNews = props.savedNews;
  const [keywordsObjSort, setkeywordsObjSort] = React.useState([]);

  React.useEffect(() => {
    let keywordsArr = [];
    let keywordsObj = {};
    savedNews.forEach((news, i) => {
      keywordsArr[i] = news.keyword;
    });
    const keywordsArrSort = keywordsArr.sort();
    let count = 1;
    for (let i = 0; i < keywordsArrSort.length; i++) {
      let word = keywordsArrSort[i];
      if (keywordsArrSort[i] === keywordsArrSort[i + 1]) {
        count++;
      }
      if (keywordsArrSort[i] !== keywordsArrSort[i + 1]) {
        keywordsObj[word] = count;
        count = 1;
      }
    }
    setkeywordsObjSort(Object.keys(keywordsObj).sort(function(a,b){return keywordsObj[b]-keywordsObj[a]}));
  }, [savedNews]);

  return (
    <section className="saved-news">
      <p className="saved-news__info">Сохраненные статьи</p>
      <h2 className="saved-news__header">{`${user.name}, у вас ${savedNews.length} сохранённых статей`}</h2>
      <p className="saved-news__text">По ключевым словам:
        <span className="saved-news__keywords">{`${keywordsObjSort.length > 0 ? keywordsObjSort[0] : ''}${keywordsObjSort.length > 1 ? `, ${keywordsObjSort[1]}` : ''}${keywordsObjSort.length === 3 ? ` и ${keywordsObjSort[2]}` : ''}${keywordsObjSort.length > 3 ? ` и ${keywordsObjSort.length - 2}-м другим` : ''}`}</span>
      </p>
    </section>
  )
}

export default SavedNewsHeader;