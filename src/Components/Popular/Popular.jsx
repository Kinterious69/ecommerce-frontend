import React, { useContext } from 'react';
import './Popular.css';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';


const Popular = () => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {all_product.slice(0, 4).map((item) => (
          <Item
            key={item._id} // use MongoDB _id
            _id={item._id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
