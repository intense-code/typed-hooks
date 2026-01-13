// ItemComponentActions.ts

import type Item from "./Item";

export type ItemComponentActions =
    | { type: 'ADD_ITEM'; payload: Item }
    | { type: 'REMOVE_ITEM'; payload: number };

// export default ItemComponentActions;