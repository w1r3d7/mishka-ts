import React from 'react';

const Header: React.FC = (): JSX.Element => (
  <header className="page-header">
    <nav className="page-header__nav">
      <div className="page-header__nav-wrap page-header__nav-wrap--close page-header__nav-wrap--no-js">
        <div className="page-header__logo-wrap">
          <a className="page-header__logo" href="test.com">
            <picture>
              <source media="(min-width:1150px)" srcSet="img/logo-desktop.svg"/>
              <source media="(min-width:768px)" srcSet="img/logo-tablet.svg"/>
              <img className="page-header__logo-image" src="img/logo-mobile.svg" alt="Логотип «Mishka»"/>
            </picture>
            <span className="visually-hidden">На главную страницу</span>
          </a>
        </div>
        <button className="page-header__toggle" type="button">
          <span className="visually-hidden">Открыть меню</span>
        </button>
        <a className="page-header__link page-header__link-catalog" href="catalog.html">
          <span className="page-header__link-text">Каталог товаров</span>
        </a>
        <a className="page-header__link page-header__link-form" href="form.html">
          <span className="page-header__link-text">Вязание на заказ</span>
        </a>
        <a className="page-header__link page-header__link-search" href="test.com">
          <svg className="page-header__search-icon" width="18" height="18">
            <use xlinkHref="#icon-search"/>
          </svg>
          <span className="page-header__search-text">Поиск по сайту</span>
        </a>
        <a className="page-header__link page-header__link-cart" href="test.com">
          <svg className="page-header__cart-icon" width="18" height="18">
            <use xlinkHref="#icon-cart"/>
          </svg>
          <span className="page-header__cart-text">Корзина: пока пуста</span>
        </a>
        <div className="page-header__info">
          <a className="page-header__info-new" href="test.com">
            Новые поступления
          </a>
          <a className="page-header__info-sale" href="test.com">
            Распродажа
          </a>
          <span className="page-header__info-delivery">Бесплатная доставка по России</span>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
