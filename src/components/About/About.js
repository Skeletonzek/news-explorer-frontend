import React from 'react';
import avatar from '../../images/avatar.jpg'

function About(props) {

  return (
    <section className="about">
      <img className="about__img" src={avatar} alt="моё фото"></img>
      <div className="about__container">
        <h2 className="about__header">Об авторе</h2>
        <p className="about__text">Это блок с описанием автора проекта.
        Здесь следует указать, как вас зовут, чем вы занимаетесь,
        какими технологиями разработки владеете.
        </p>
        <p className="about__text">Также можно рассказать о процессе обучения в Практикуме,
        чему вы тут научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  )
}

export default About;