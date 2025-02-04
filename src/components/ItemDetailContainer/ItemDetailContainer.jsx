import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../async-mocks';
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(itemId).then(data => setItem(data));
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    console.log(`Added ${quantity} of ${item.name} to cart`);
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetailContainer;
