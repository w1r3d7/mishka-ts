import React from 'react';
import { Link } from 'react-router-dom';
import { Url } from '../../constants';

const Header: React.FC = (): JSX.Element => (
  <header className="page-header">
    <nav className="page-header__nav">
      <div className="page-header__nav-wrap page-header__nav-wrap--close page-header__nav-wrap--no-js">
        <div className="page-header__logo-wrap">
          <Link className="page-header__logo" to={Url.Home}>
            <picture>
              <source media="(min-width:1150px)" srcSet="img/logo-desktop.svg"/>
              <source media="(min-width:768px)" srcSet="img/logo-tablet.svg"/>
              <img className="page-header__logo-image" src="img/logo-mobile.svg" alt="Логотип «Mishka»"/>
            </picture>
            <span className="visually-hidden">На главную страницу</span>
          </Link>
        </div>
        <button className="page-header__toggle" type="button">
          <span className="visually-hidden">Открыть меню</span>
        </button>
        <Link className="page-header__link page-header__link-catalog" to={Url.Catalog}>
          <span className="page-header__link-text">Каталог товаров</span>
        </Link>
        <Link className="page-header__link page-header__link-form" to={Url.Order}>
          <span className="page-header__link-text">Вязание на заказ</span>
        </Link>
        <Link className="page-header__link page-header__link-search" to="#">
          <svg className="page-header__search-icon" width="18" height="18">
            <use xlinkHref="#icon-search"/>
          </svg>
          <span className="page-header__search-text">Поиск по сайту</span>
        </Link>
        <Link className="page-header__link page-header__link-cart" to="#">
          <svg className="page-header__cart-icon" width="18" height="18">
            <use xlinkHref="#icon-cart"/>
          </svg>
          <span className="page-header__cart-text">Корзина: пока пуста</span>
        </Link>
        <div className="page-header__info">
          <Link className="page-header__info-new" to="#">
            Новые поступления
          </Link>
          <Link className="page-header__info-sale" to="#">
            Распродажа
          </Link>
          <span className="page-header__info-delivery">Бесплатная доставка по России</span>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
