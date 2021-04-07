import React from 'react';

const PopularItems: React.FC = () => (
  <section className="page-main__popular-items popular-items container zigzag">
    <h2 className="visually-hidden">Товар недели</h2>
    <div className="popular-items__title-wrap">
      <h3 className="popular-items__title">Вязаные корзинки</h3>
      <span className="popular-items__sign">Товар недели</span>
    </div>
    <div className="popular-items__table-wrap">
      <p className="popular-items__about">Экологически чистая пряжа, ручная работа. Доступны в шести расцветках, и трех размерах.</p>
      <table className="popular-items__specification">
        <tbody>
          <tr>
            <td>Цвет:</td>
            <td>«Тиффани»/серый</td>
          </tr>
          <tr>
            <td>Диаметр:</td>
            <td>25 см</td>
          </tr>
          <tr>
            <td>Высота:</td>
            <td>15 см</td>
          </tr>
        </tbody>
      </table>
      <picture>
        <source media="(min-width:1150px)" type="image/webp" srcSet="img/triple-set-desktop@1x.webp 1x, img/triple-set-desktop@2x.webp 2x"/>
        <source media="(min-width:768px)" type="image/webp" srcSet="img/triple-set-tablet@1x.webp 1x, img/triple-set-tablet@2x.webp 2x"/>
        <source type="image/webp" srcSet="img/triple-set-mobile@1x.webp 1x, img/triple-set-mobile@2x.webp 2x"/>
        <source media="(min-width:1150px)" srcSet="img/triple-set-desktop@1x.jpg 1x, img/triple-set-desktop@2x.jpg 2x"/>
        <source media="(min-width:768px)" srcSet="img/triple-set-tablet@1x.jpg 1x, img/triple-set-tablet@2x.jpg 2x"/>
        <img className="popular-items__picture" src="img/triple-set-mobile@1x.jpg" srcSet="img/triple-set-mobile@2x.jpg 2x" alt="Вязанные корзинки"/>
      </picture>
      <b className="popular-items__price">Цена: 990 руб.</b>
      <a className="popular-items__button button modal-open" href="test.com">Заказать</a>
    </div>
  </section>
)

export default PopularItems;
