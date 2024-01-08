import React, { useState } from "react";

function ActionItem({ title, paragraph, promoImg, isReverse }) {
  return (
    <>
      <div className={`action__item ${!isReverse && `reverse`}`}>
        <div className="first__time--wrapper">
          <div className={`text__wrapper${!isReverse ? `--right` : ""}`}>
            <h1 className="promo__header ">{title}</h1>

            <p className="primary__paragraph ">{paragraph}</p>
            <button className="button__white ">LEARN MORE</button>
          </div>
        </div>
        <div className="first__time--wrapper">
          <figure className="promo__image image-container">
            <img
              data-src={promoImg}
              className="promo__image--wrapper lazy-image"
              src={promoImg}
              alt=""
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </>
  );
}

export default ActionItem;
