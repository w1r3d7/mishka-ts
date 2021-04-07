import React from 'react';

const Contacts: React.FC = () => (
  <section className="page-main__contacts contacts">
    <div className="contacts__info-wrap">
      <h2 className="contacts__title">Контакты</h2>
      <address className="contacts__address">
        <span className="contacts__email-title">e-mail:</span>
        <a className="contacts__email-link" href="mailto:info@mimimishkashop.ru">info@mimimishkashop.ru</a>
        <span className="contacts__address-title">адрес:</span>
        <p className="contacts__address-text">г. Санкт-Петербург, <br/> ул. Большая Конюшенная, <br/> д. 19/8, офис 101</p>
      </address>
    </div>
    <div id="map" className="contacts__map contacts__map--no-js" />
    <div className="contacts__button-wrap">
      <a className="button contacts__button" href="test.com">Напишите нам</a>
    </div>
  </section>
)


export default Contacts;
