import React from 'react';

const Reviews: React.FC = () => (
  <section className="page-main__reviews reviews zigzag">
    <h2 className="reviews__title">Отзывы</h2>
    <p className="reviews__text">Я молодая мама, но всё равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в
      Мишке, и&nbsp;мои фотографии сразу стали более стильными, а также набирают больше лайков!</p>
    <div className="reviews__reviewer-wrap">
      <b className="reviews__reviewer-name">Анастасия Красильникова</b>
      <a className="reviews__reviewer-instagram" href="https://instagram.com/misssssiskras">@misssssiskras</a>
    </div>
    <div className="reviews__buttons-wrap">
      <button className="reviews__button reviews__button--prev" type="button"><span className="visually-hidden">Назад</span></button>
      <button className="reviews__button reviews__button--next" type="button"><span className="visually-hidden">Вперёд</span></button>
    </div>
    <a className="button reviews__button-write" href="test.com">Написать</a>
  </section>
)

export default Reviews;
