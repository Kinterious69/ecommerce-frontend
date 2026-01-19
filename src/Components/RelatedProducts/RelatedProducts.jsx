import React, { useContext } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'
const RelatedProducts = () => {
const {all_product}=useContext(ShopContext)
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {
                all_product.slice(0, 4).map((item,i)=>{

                return <Item  
                key={i} 
                _id={item._id} 
                image={item.image} 
                name={item.name} 
                new_price={item.new_price} 
                old_price={item.old_price} />
                }
            )
            }
        </div>
      
    </div>
  )
}

export default RelatedProducts
