//ShoppingCart.tsx
import type Item from "./Item";
import React,{ useReducer } from "react";
import ShoppingCartReducer from "./ShoppingCartReducer";

const ShoppingCart: React.FC = ()=>{
const [cart,dispatch] = useReducer(ShoppingCartReducer,[])
const handleAddItem = () =>{
    const newItem:Item =  {id:Date.now(), name:`Item ${cart.length + 1}`}
    dispatch({type:'ADD_ITEM',payload:newItem})
}
const handleRemoveItem = (itemId:number) =>{
    dispatch({type:'REMOVE_ITEM',payload:itemId})
}
return (
      <div>
        <h2>Shopping Cart</h2>        
        {cart.map(item => (
        <div key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
        ))}        
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    );


}
export default ShoppingCart;
