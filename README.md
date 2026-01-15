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