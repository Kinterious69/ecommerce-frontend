
import React, { useContext, useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const NewCollections = () => {
  const { all_product } = useContext(ShopContext);
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    // newest 8 products
    const latest = [...all_product].reverse().slice(0, 8);
    setNew_collection(latest);
  }, [all_product]);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map(item => (
          <Item
            key={item._id}
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

export default NewCollections;



















/*


import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = () => {

    
        const [new_collection,setNew_collection]=useState([]);
        
        useEffect(() => {
  fetch("http://localhost:4000/api/products/newcollections")
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setNew_collection(data);
      } else {
        setNew_collection([]); // fallback to empty array
        console.error("NewCollections API returned:", data);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      setNew_collection([]);
    });
}, []);

    


  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
           <hr />
        <div className="collections">
        {
    new_collection.map((item, i) => {
        return (
            <Item 
                key={i} 
                id={item.id} 
                image={item.image} 
                name={item.name} 
                new_price={item.new_price} 
                old_price={item.old_price} 
            />
        );
    })
}
        </div>
      
    </div>
  )
}

export default NewCollections
/*useEffect(()=>{
            fetch('http://localhost:4000/api/products/newcollections').then((Response)=>Response.json())
            .then((data)=>setNew_collection(data));

        },[]);*/