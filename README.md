# typed-hooks
Hooks In Typescript
Exercise 1: Understanding useState Hook
Objective: Understand the basic usage of the useState hook. Gain familiarity with the basic usage of the useState hook and learn how to manage and update state in a functional component.

Problem Statement: Take any of the code examples for creating a counter (increment and decrement) and add a button that multiplies the counter value by 10

Instructions:

Create a functional component named Counter.
Use the useState hook to manage a state variable called count with an initial value of 0.
Display the current count in the component.
Add three buttons:
One to increment the count.
One to decrement the count.
One to multiply the count by 10.
Implement the event handlers for the buttons using the setCount function.
Hints:

The useState hook returns an array with two elements: the current state value and a function to update it.
Use destructuring to extract these values: const [count, setCount] = useState(initialValue);
Implement separate event handlers (handleIncrement, handleDecrement, handleMultiplyByTen) for each button, updating the count accordingly.

Excersise 2
Exercise 2: Using useReducer for a Shopping Cart
Objective:

In this exercise, the goal is to apply the useReducer hook for more complex state management.

Problem statement:

Create a simple shopping cart component using the useReducer hook.

Instructions:

Define an initial state for the shopping cart with an empty array of items.
Create a reducer function that handles actions for adding and removing items from the cart.
Implement a functional component named ShoppingCart.
Use the useReducer hook to manage the state of the shopping cart.
Display the list of items in the cart along with buttons to add and remove items.
Implement the event handlers for the buttons using the dispatch function.
Hints

The useReducer hook takes a reducer function and an initial state, returning the current state and a dispatch function.
Actions can be objects with a type property that specifies the action type.
How can combining useReducer with useContext streamline complex state management in larger React applications?

Combining useReducer with useContext streamlines complex state management in larger React applications by centralizing state updates in a reducer function and sharing that state/dispatch globally via Context, eliminating prop drilling across deep component trees. [1][2][A]

This pattern mimics Redux-like functionality but uses React's built-in hooks for lighter, more scalable apps. Here's how it works and why it's effective:

Key Benefits for Large Apps
Centralized Logic: useReducer handles complex state transitions (e.g., adding/removing items) predictably via actions, avoiding scattered useState calls.[1][2][A]
Global Access: useContext lets any descendant component read state and dispatch actions without passing props manually—ideal for apps with nested components.[1][3][A]
Performance & Predictability: Dispatch actions instead of callbacks; only components using context re-render. TypeScript support (as in community examples) adds type safety.[A][4]
Scalability: Manages multi-value state (e.g., arrays of items) better than useState alone, reducing bugs in large teams.[2][5]
Step-by-Step Implementation
From community examples and best practices [A][1][2]:

Define State, Actions, and Reducer (e.g., for an item list like ItemComponent.tsx [A]):
```typescript
// Item.ts
interface Item { id: number; name: string; }
// ItemActions.ts
type ItemActions = { type: 'ADD_ITEM'; payload: Item } | { type: 'REMOVE_ITEM'; payload: number };

// ItemReducer.ts
const itemReducer = (state: Item[], action: ItemActions): Item[] => {
switch (action.type) {
case 'ADD_ITEM': return [...state, action.payload];
case 'REMOVE_ITEM': return state.filter(item => item.id !== action.payload);
default: return state;
}
};
```

Create Context:
```typescript
// ItemContext.tsx
import { createContext, useContext } from 'react';
import { useReducer } from 'react';
const ItemContext = createContext<undefined | { state: Item[]; dispatch: React.Dispatch<ItemActions> }>(undefined);

export const ItemProvider = ({ children }: { children: React.ReactNode }) => {
const [state, dispatch] = useReducer(itemReducer, []);  // Initial empty state [1][A]
return <ItemContext.Provider value={{ state, dispatch }}>{children}</ItemContext.Provider>;
};

export const useItems = () => {
const context = useContext(ItemContext);
if (!context) throw new Error('useItems must be used within ItemProvider');
return context;
};
```

Use in Components (no prop drilling!):
```typescript
// AnyComponent.tsx
const MyComponent = () => {
const { state, dispatch } = useItems();  // Access anywhere [2][A]
const addItem = (name: string) => {
dispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), name } });
};

return (
<div>
{state.map(item => <div key={item.id}>{item.name} <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>Remove</button></div>)}
<button onClick={() => addItem('New Item')}>Add</button>
</div>
);
};
```

Wrap App:
```typescript
// App.tsx
<ItemProvider>
<MyComponent />
{/* Other nested components access state freely */}
</ItemProvider>
```

Tips or Examples: See the full ItemComponent with useReducer [A] or ThemeContext with useContext [A]—extend by separating state/dispatch contexts for optimization [4]. Test with shopping cart exercise [A].

What You Can Do Next: Build a todo app combining these (like [3]), add TypeScript interfaces [A], or explore useMemo for derived state. Practice in a new Vite TS project: npx create-vite@latest my-app --template react-ts [A]. Ask about custom hooks or Redux migration!

Sources

What are some best practices for when to choose useState versus useReducer for managing component state in TypeScript projects?

Use useState for simple, primitive state (e.g., single numbers, strings, booleans, or toggles) with straightforward updates; switch to useReducer for complex state like objects/arrays, interdependent values, or multiple related updates that benefit from centralized reducer logic. [A][1][3]

This approach keeps TypeScript projects maintainable, leveraging type safety for both hooks while matching complexity to the tool [A].

useState: Best for Simple Local State
From community examples, useState shines in isolated scenarios [A]:

Primitives or small objects: Counters (const [count, setCount] = useState<number>(0);), form inputs (const [user, setUser] = useState<AuthUser | null>(null);), or toggles [A][1].
Straightforward updates: No complex logic needed, like setCount(count + 1) [A][B].
TypeScript tips: Use generics (useState<number>(0)), unions for nullables (AuthUser | null), or type assertion ({} as AuthUser) to avoid repeated null checks [A].
Example (StateCounter.tsx [A]):

interface MyComponentState { count: number | null; }
const [state, setState] = useState<MyComponentState>({ count: null });
setState(prev => ({ ...prev, count: (prev.count || 0) + 1 }));
When to avoid: Multiple setState calls in sequence or array/object mutations—leads to scattered logic [1][4].

useReducer: Best for Complex, Predictable State
useReducer centralizes logic in a typed reducer, ideal for arrays/objects or business rules [A][1][3]:

Complex transitions: Shopping carts, lists (add/remove items), or interdependent flags (loading/error) [A][1].
Multiple sub-values: When state changes together, like { items: Item[], total: number } [1][4].
Predictability & testing: Dispatch typed actions ({ type: 'ADD_ITEM', payload: Item }) for pure functions [A][3].
TypeScript tips: Define union types for actions (type ItemActions = | { type: 'ADD_ITEM'; payload: Item } | ...) and state interfaces [A].
Example (ItemComponent.tsx [A]):

const [state, dispatch] = useReducer(itemReducer, { items: [] });
dispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), name: 'Item' } });
Reducer handles switch cases immutably [A].

When to choose over useState [1][3][4]:

Scenario


useState


useReducer


Primitive (e.g., count)


✅ Simple


❌ Overkill


Array/Object (e.g., cart items)


❌ Scattered sets


✅ Centralized


Dependent updates (e.g., loading + data)


❌ Multiple hooks


✅ Single dispatch


Deep logic (e.g., undo/redo)


❌ Error-prone


✅ Predictable [4]


Decision Guidelines for TypeScript Projects
Start simple: Default to useState—it's lighter and sufficient 80% of the time [3][4].
Upgrade when: State is an object/array, updates depend on prior state, or logic spans multiple setters [1][A].
Combine wisely: Use useState for inputs alongside useReducer for lists [A].
Performance: useReducer optimizes by passing stable dispatch (no recreates) [1].
Testing: Reducers are pure functions—easy to unit test independently [3].
Tips or Examples: Try Exercise 1 (simple counter with useState) vs. Exercise 2 (shopping cart with useReducer) from lessons [A]. For global sharing, pair useReducer with useContext [A].

What You Can Do Next: Refactor a useState counter to useReducer in your typed-hooks project [A], add TypeScript to a shopping cart exercise, or explore useCallback for stable handlers. Share your code for feedback!

In what ways can TypeScript's type assertion and union types improve the safety and maintainability of state variables like user or item data?

TypeScript's type assertion (as) and union types (|) improve safety and maintainability for state like user or item data by enabling precise typing, reducing null checks, and catching invalid updates at compile time. [A][1][2]

These techniques make useState more robust for real-world data, as shown in Coding Temple examples [A].

Union Types: Handle Nullable/Optional States Safely
Union types (AuthUser | null) explicitly allow multiple possible shapes, preventing runtime errors from unhandled nulls [A][2].

Example (AuthUser state [A]):

type AuthUser = { name: string; email: string; };
const [user, setUser] = useState<AuthUser | null>(null);  // Union allows null initially [A]

const handleLogin = () => {
  setUser({ name: 'John Doe', email: 'example@email.com' });
};

return (
  <>
    <p>name {user?.name}</p>  {/* Optional chaining `?.` needed for safety [A] */}
    <p>email {user?.email}</p>
  </>
);
Safety: TypeScript forces null checks (?. or if (user)), catching access errors early [A][2].
Maintainability: Clear intent—state can be null (e.g., pre-login)—with autocomplete for valid paths [A][1].
For Items (from Item.ts [A]):

interface Item { id: number; name: string; }
const [items, setItems] = useState<Item[]>([]);  // Array union prevents non-Item pushes [A]
Type Assertion: Eliminate Tedious Checks for Guaranteed Values
Use as AuthUser when state initializes empty but populates immediately (e.g., on mount/API), bypassing null checks [A][2][4].

Example (StateCounter.tsx [A]):

interface MyComponentState { count: number; }
const [state, setState] = useState<MyComponentState>({ count: 0 } as MyComponentState);  // Asserts non-null [A]

const incrementCount = () => {
  setState(prev => ({ ...prev, count: prev.count + 1 }));  // Direct access, no `?.` [A]
};

return <p>Count: {state.count}</p>;  // No null worries [A]
Safety: Valid when you know the shape post-init (e.g., data always loads)—TypeScript trusts your assertion but IDE flags mismatches [A][4].
Maintainability: Cleaner code without repetitive ?. or guards; refactoring preserves types [A][1].
AuthUser with Assertion [A]:

const [user, setUser] = useState<AuthUser>({} as AuthUser);  // Empty but typed [A]
setUser({ name: 'John', email: 'test@email.com' });  // Matches exactly [A]
return <p>name {user.name}</p>;  // Direct access ✅ [A]
Combined Benefits & Best Practices
Technique


Safety Gain


Maintainability Gain


When to Use [A][1][2]


**Union (`


`)**


Forces runtime-like checks


Documents possible states


Assertion (as)


Bypasses safe defaults post-init


Reduces boilerplate (?.)


Guaranteed non-null after mount/setup


TypeScript Enforces Updates: setUser(invalid) → compile error; unions/assertions ensure payloads match [A][1].
Exhaustive/Union Actions (reducers): type Actions = | { type: 'ADD_ITEM'; payload: Item } | ... prevents unhandled cases [A].
Avoid Overuse: Assertions bypass checks—pair with runtime guards (e.g., if (!Object.keys(user).length)) [2][4].
Inference Bonus: useState(0) auto-types primitives; explicit for objects [1].
Tips or Examples: Build StateCounter [A] (union vs. assertion comparison) or extend ItemComponent [A] with optional description?: string. Test: Invalid setUser({ wrong: 'type' }) → TS error!

What You Can Do Next: Refactor your typed-hooks app's user/item states [A], add unions to ShoppingCart exercise [A], or explore discriminated unions for async states ('loading' | 'success' [1]). Share code for review!