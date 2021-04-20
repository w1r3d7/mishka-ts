

import React from 'react';

const Order = () => {
  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h1 className="form__title">Вязание на заказ</h1>
      <p className="form__text">Мы будем рады воплотить в жизнь ваши пожелания! Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить детали.</p>
      <fieldset className="form__fieldset form__fieldset--radio">
        <legend className="form__legend">Тип</legend>
        <input className="form__radio visually-hidden" id="interior-accessories" type="radio" value="interior accessory" name="type" defaultChecked />
        <label className="form__label" htmlFor="interior-accessories">Аксессуар для интерьера</label>
        <input className="form__radio visually-hidden" id="kids-toys" type="radio" value="kid toy" name="type" />
        <label className="form__label" htmlFor="kids-toys">Детская игрушка</label>
      </fieldset>
      <div className="form__fieldset-wrap form__fieldset-wrap--gray">
        <fieldset className="form__fieldset form__fieldset--checkbox">
          <legend className="form__legend">Цвет</legend>
          <input className="form__checkbox visually-hidden" id="white" type="checkbox" name="white" value="white" />
          <label className="form__label" htmlFor="white">Белый</label>
          <input className="form__checkbox visually-hidden" id="gray" type="checkbox" name="gray" value="gray" />
          <label className="form__label" htmlFor="gray">Серый</label>
          <input className="form__checkbox visually-hidden" id="tiffany" type="checkbox" name="tiffany" value="tiffany"/>
          <label className="form__label" htmlFor="tiffany">«Тиффани»</label>
          <input className="form__checkbox visually-hidden" id="black" type="checkbox" name="black" value="black" />
          <label className="form__label" htmlFor="black">Черный</label>
          <input className="form__checkbox visually-hidden" id="pink" type="checkbox" name="pink" value="pink" />
          <label className="form__label" htmlFor="pink">Розовый</label>
          <input className="form__checkbox visually-hidden" id="orange" type="checkbox" name="orange" value="orange" />
          <label className="form__label" htmlFor="orange">Оранжевый</label>
        </fieldset>
      </div>
      <fieldset className="form__fieldset form__fieldset--name">
        <legend className="form__legend">ФИО</legend>
        <div className="form__wrap">
          <label className="form__label form__label--left" htmlFor="name">Имя:</label>
          <input className="form__input" id="name" type="text" name="name" placeholder="Введите ваше имя*" required />
        </div>
        <div className="form__wrap">
          <label className="form__label form__label--left" htmlFor="surname">Фамилия:</label>
          <input className="form__input" id="surname" type="text" name="surname" placeholder="Укажите фамилию*" required />
        </div>
        <div className="form__wrap">
          <label className="form__label form__label--left" htmlFor="middle-name">Отчество:</label>
          <input className="form__input" id="middle-name" type="text" name="middle-name" placeholder="Отчество, если желаете" />
        </div>
      </fieldset>
      <div className="form__fieldset-wrap form__fieldset-wrap--gray">
        <div className="form__fieldset form__fieldset--contacts">
          <div className="form__wrap">
            <label className="form__label form__label--left form__label--tiffany-color form__label--phone" htmlFor="phone">Тел</label>
            <input className="form__input" id="phone" type="tel" name="phone" placeholder="+7 XXX XXX XX XX*" required />
            <svg className="form__input-icon" width="25" height="24">
              <use xlinkHref="#icon-phone" />
            </svg>
          </div>
          <div className="form__wrap">
            <label className="form__label form__label--left form__label--tiffany-color form__label--email" htmlFor="email">E-mail</label>
            <input className="form__input" id="email" type="email" name="email" placeholder="Ваш Email*" required />
            <svg className="form__input-icon" width="32" height="32">
              <use xlinkHref="#icon-mail" />
            </svg>
          </div>
        </div>
      </div>
      <div className="form__fieldset form__fieldset--textarea">
        <div className="form__wrap">
          <label className="form__label form__label--left form__label--tiffany-color form__label--textarea" htmlFor="additionally">Доп</label>
          <textarea className="form__textarea" id="additionally" placeholder="Опишите все ваши пожелания к заказу" />
        </div>
        <div className="form__wrap">
          <p className="form__condition">*Поля обязательны для заполнения</p>
          <button className="button form__button" type="submit">Отправить заказ</button>
        </div>
      </div>
    </form>
  );
}

export default Order;

