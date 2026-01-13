// ItemComponent.tsx

import React, { useReducer, useState } from 'react';
import itemReducer from './ItemReducer';
import type Item from './Item';

const ItemComponent: React.FC = () => {
  const [state, dispatch] = useReducer(itemReducer, { items: [] });
  const [itemName, setItemName] = useState('');

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Item = { id: Date.now(), name: itemName };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    setItemName('');
  };

  const removeItem = (itemId: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add Item</button>
      </form>
      
      {state.items.map((item) => (
        <div key={item.id}>
          {item.name}{' '}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      
    </div>
  );
};

export default ItemComponent;