import React from 'react';
import '../Styles/market.scss';
import { marketItems } from '../Constants/dummy.js';

const MarketPlace = () => {
  return (
    <>
      <h1 className="heading__market">Market Place</h1>
      <div className="marketplace">
        {marketItems.map((item, index) => (
          <div className="marketplace__item" key={index}>
            <img
              className="item__image"
              src={item.itemImage}
              alt={item.itemName}
            />
            <p className="item__name">{item.itemName}</p>
            <p className="item__price">{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarketPlace;
