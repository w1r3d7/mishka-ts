import React from 'react';

const Catalog: React.FC = () => (
  <section className="products">
    <h1 className="products__title">Каталог товаров</h1>
    <ul className="products__list container">
      <li className="products__item">
        <a href="#">
          <picture>
            <source media="(min-width:1150px)" type="image/webp" srcSet="img/photo-hare-desktop@1x.webp 1x, img/photo-hare-desktop@2x.webp 2x" />
            <source media="(min-width:768px)" type="image/webp" srcSet="img/photo-hare-tablet@1x.webp 1x, img/photo-hare-tablet@2x.webp 2x" />
            <source type="image/webp" srcSet="img/photo-hare-mobile@1x.webp 1x, img/photo-hare-mobile@2x.webp 2x" />
            <source media="(min-width:1150px)" srcSet="img/photo-hare-desktop@1x.jpg 1x, img/photo-hare-desktop@2x.jpg 2x" />
            <source media="(min-width:768px)" srcSet="img/photo-hare-tablet@1x.jpg 1x, img/photo-hare-tablet@2x.jpg 2x" />
            <img className="products__item-image" src="img/photo-hare-mobile@1x.jpg" srcSet="img/photo-hare-mobile@2x.jpg 2x" alt="Зайчик-попрыгайчик" />
          </picture>
        </a>
        <div className="products__item-wrap">
          <a href="#">
            <h2 className="products__item-name">Зайчик-попрыгайчик</h2>
          </a>
          <span className="products__item-specification">Рост 30 см, вес 200 г</span>
          <div className="products__price-wrap">
            <b className="products__item-price">1 200 руб.</b>
            <button className="products__item-buy modal-open" type="button">
              <svg width="21" height="18">
                <use xlinkHref="#icon-cart" />
              </svg>
              <span className="visually-hidden">Купить</span>
            </button>
          </div>
        </div>
      </li>
      <li className="products__item">
        <a href="#">
          <picture>
            <source media="(min-width:1150px)" type="image/webp" srcSet="img/photo-bowl-desktop@1x.webp 1x, img/photo-bowl-desktop@2x.webp 2x" />
            <source media="(min-width:768px)" type="image/webp" srcSet="img/photo-bowl-tablet@1x.webp 1x, img/photo-bowl-tablet@2x.webp 2x" />
            <source type="image/webp" srcSet="img/photo-bowl-mobile@1x.webp 1x, img/photo-bowl-mobile@2x.webp 2x" />
            <source media="(min-width:1150px)" srcSet="img/photo-bowl-desktop@1x.jpg 1x, img/photo-bowl-desktop@2x.jpg 2x" />
            <source media="(min-width:768px)" srcSet="img/photo-bowl-tablet@1x.jpg 1x, img/photo-bowl-tablet@2x.jpg 2x" />
            <img className="products__item-image" src="img/photo-bowl-mobile@1x.jpg" srcSet="img/photo-bowl-mobile@2x.jpg 2x" alt="Корзинка для белья" />
          </picture>
        </a>
        <div className="products__item-wrap">
          <a href="#">
            <h2 className="products__item-name">Корзинка для белья</h2>
          </a>
          <span className="products__item-specification">Диаметр 15 см, высота 10 см</span>
          <div className="products__price-wrap">
            <b className="products__item-price">690 руб.</b>
            <button className="products__item-buy modal-open" type="button">
              <svg width="21" height="18">
                <use xlinkHref="#icon-cart" />
              </svg>
              <span className="visually-hidden">Купить</span>
            </button>
          </div>
        </div>
      </li>
      <li className="products__item">
        <a href="#">
          <picture>
            <source media="(min-width:1150px)" type="image/webp" srcSet="img/photo-toys-desktop@1x.webp 1x, img/photo-toys-desktop@2x.webp 2x" />
            <source media="(min-width:768px)" type="image/webp" srcSet="img/photo-toys-tablet@1x.webp 1x, img/photo-toys-tablet@2x.webp 2x" />
            <source type="image/webp" srcSet="img/photo-toys-mobile@1x.webp 1x, img/photo-toys-mobile@2x.webp 2x" />
            <source media="(min-width:1150px)" srcSet="img/photo-toys-desktop@1x.jpg 1x, img/photo-toys-desktop@2x.jpg 2x" />
            <source media="(min-width:768px)" srcSet="img/photo-toys-tablet@1x.jpg 1x, img/photo-toys-tablet@2x.jpg 2x" />
            <img className="products__item-image" src="img/photo-toys-mobile@1x.jpg" srcSet="img/photo-toys-mobile@2x.jpg 2x" alt="Большая корзинка для игрушек" />
          </picture>
        </a>
        <div className="products__item-wrap">
          <a href="#">
            <h2 className="products__item-name">Большая корзинка для игрушек</h2>
          </a>
          <span className="products__item-specification">Диаметр 30 см, высота 30 см</span>
          <div className="products__price-wrap">
            <b className="products__item-price">1 500 руб.</b>
            <button className="products__item-buy modal-open" type="button">
              <svg width="21" height="18">
                <use xlinkHref="#icon-cart" />
              </svg>
              <span className="visually-hidden">Купить</span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
)

export default Catalog;
