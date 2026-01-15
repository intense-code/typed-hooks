//ShoppingCartReducer.ts
// Reducer with Action
import type Item from "./Item"
export type CartAction = 
| {type: 'ADD_ITEM', payload: Item }
| {type: 'REMOVE_ITEM', payload: number}

const ShoppingCartReducer = (state:Item[],action:CartAction):Item[] =>{
    switch(action.type){
        case "ADD_ITEM":
            return [...state,action.payload]
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.payload)
    }

}
export default ShoppingCartReducer