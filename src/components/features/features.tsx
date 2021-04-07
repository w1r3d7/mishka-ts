import React from 'react';

const Features: React.FC = () => (
  <section className="page-main__features features container">
    <h2 className="features__title">Коротко о нас:</h2>
    <ul className="features-list">
      <li className="features-list__item features-list__item--flower">
        <svg className="features-list__icon-flower" width="32" height="37">
          <use xlinkHref="#icon-feature-flower" />
        </svg>
        <p className="features-list__text">Экологически <br /> чистые материалы</p>
      </li>
      <li className="features-list__item features-list__item--money">
        <svg className="features-list__icon-money" width="47" height="27">
          <use xlinkHref="#icon-feature-money" />
        </svg>
        <p className="features-list__text">Скандинавский стиль <br /> по российской цене</p>
      </li>
      <li className="features-list__item features-list__item--heart">
        <svg className="features-list__icon-heart" width="34" height="27">
          <use xlinkHref="#icon-feature-heart" />
        </svg>
        <p className="features-list__text">Увеличивает лайки <br /> на фотографиях</p>
      </li>
      <li className="features-list__item features-list__item--ball">
        <svg className="features-list__icon-ball" width="35" height="34">
          <use xlinkHref="#icon-feature-ball" />
        </svg>
        <p className="features-list__text">Связано вручную с <br /> любовью и умилением</p>
      </li>
      <li className="features-list__item features-list__item--rocket">
        <svg className="features-list__icon-rocket" width="55" height="23">
          <use xlinkHref="#icon-feature-rocket" />
        </svg>
        <p className="features-list__text">Поддержка отечественного производителя</p>
      </li>
      <li className="features-list__item">
        <svg className="features-list__icon-gift" width="33" height="32">
          <use xlinkHref="#icon-feature-gift" />
        </svg>
        <p className="features-list__text">Поставляется в <br/> подарочной упаковке</p>
      </li>
    </ul>
  </section>
)

export default Features;
