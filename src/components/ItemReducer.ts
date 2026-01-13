// ItemReducer.ts

import  type {ItemComponentActions} from "./ItemComponentActions";
import type ItemState from "./ItemState";

const itemReducer = (state: ItemState, action: ItemComponentActions): ItemState => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] };
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        default:
            return state;
    }
};

export default itemReducer;