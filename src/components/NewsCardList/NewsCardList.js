import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import taiga from '../../images/taiga.jpg';
import park from '../../images/park.jpg';
import forrestFire from '../../images/forrest-fire.jpg'

function NewsCardList(props) {

  return (
    <div className="result__list">
      <NewsCard title="Национальное достояние – парки" text="В 2016 году
          Америка отмечала важный юбилей:
          сто лет назад здесь начала складываться система национальных парков
          – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
        source="лента.ру" img={park} />
        <NewsCard title="Лесные огоньки: история одной фотографии" text="Фотограф отвлеклась от освещения суровой
        политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы."
        source="медуза" img={forrestFire} />
        <NewsCard title="«Первозданная тайга»: новый фотопроект Игоря Шпиленка" text="Знаменитый фотограф снимает первозданные леса России,
        чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где..."
        source="риа" img={taiga} />
    </div>
  )
}

export default NewsCardList;