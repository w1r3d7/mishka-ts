import React from 'react';

const Production: React.FC = () => (
  <section className="page-main__production production container">
    <div className="production__wrap">
      <div className="production__title-wrap">
        <svg className="production__title-icon" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32"
             enableBackground="new 0 0 32 32" xmlSpace="preserve">
              <g transform="translate(0 192)">
                <path
                  d="M26-177l6-4v16l-6-4V-177z M24-177v8c0,2.209-1.791,4-4,4H4c-2.209,0-4-1.791-4-4v-8c0-2.209,1.791-4,4-4h10 c0-1.105,0.895-2,2-2v-2H5c-0.553,0-1-0.447-1-1s0.447-1,1-1h12c0.553,0,1,0.447,1,1v3c1.105,0,2,0.895,2,2 C22.209-181,24-179.209,24-177z M12-177H4v8h8V-177z M20-176c0-0.553-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4 C19.553-175,20-175.447,20-176z" />
              </g>
            </svg>
        <h2 className="production__title">Процесс производства</h2>
      </div>
      <div className="production__text-wrap">
        <p className="production__text">По просьбам наших любимых фалловеров мы сняли для вас подробное видео о том, как появляются наши товары.</p>
        <button className="production__order-button button" type="button">Сделать заказ</button>
      </div>
    </div>
    <div className="production__image-wrap">
      <picture>
        <source media="(min-width:1150px)" type="image/webp" srcSet="img/video-desktop@1x.jpg 1x, img/video-desktop@2x.jpg 2x" />
        <source media="(min-width:768px)" type="image/webp" srcSet="img/video-tablet@1x.jpg 1x, img/video-tablet@2x.jpg 2x" />
        <source type="image/webp" srcSet="img/video-mobile@1x.jpg 1x, img/video-mobile@2x.jpg 2x" />
        <source media="(min-width:1150px)" srcSet="img/video-desktop@1x.jpg 1x, img/video-desktop@2x.jpg 2x" />
        <source media="(min-width:768px)" srcSet="img/video-tablet@1x.jpg 1x, img/video-tablet@2x.jpg 2x" />
        <img className="production__image" src="img/video-mobile@1x.jpg" srcSet="img/video-mobile@2x.jpg 2x" alt="Процесс производства" />
      </picture>
      <button className="production__image-button" type="button">
        <span className="visually-hidden">Начать воспроизведение</span>
      </button>
    </div>
  </section>
)

export default Production;
