import React from 'react';

const CategoriesList: React.FC = () => (
  <section className="page-main__categories popular-categories">
    <div className="popular-categories__wrap">
      <h2 className="visually-hidden">Популярные категории</h2>
      <a href="test.com" className="popular-categories__item">
        <h3 className="popular-categories__title">Предметы интерьера</h3>
        <svg className="popular-categories__icon-interior" width="40" height="62">
          <use xlinkHref="#icon-interior"/>
        </svg>
      </a>
      <a href="test.com" className="popular-categories__item popular-categories__item--darken">
        <h3 className="popular-categories__title">Детские игрушки</h3>
        <svg className="popular-categories__icon-toy" width="60" height="60">
          <use xlinkHref="#icon-toy"/>
        </svg>
      </a>
    </div>
  </section>
)

export default CategoriesList
