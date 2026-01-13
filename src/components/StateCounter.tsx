//StateCounter.tsx
import React, { useState } from 'react';

// Define the type for the state
interface MyComponentState {
  count: number | null; // Setting count as number or null
}

// Functional component with TypeScript and useState
const StateCounter: React.FC = () => {
  // Using useState without type assertion
  const [state1, setState1] = useState<MyComponentState>({ count: null });

  // Using useState with type assertion
  const [state2, setState2] = useState<MyComponentState>({ count: 0 } as MyComponentState);

  // Function to update the count in state1
  const incrementCount1 = () => {
    setState1((prevState) => ({
      ...prevState,
      count: (prevState.count || 0) + 1,
    }));
  };

  // Function to update the count in state2
  const incrementCount2 = () => {
    setState2((prevState) => ({
      ...prevState,
      count: (prevState.count || 0) + 1,
    }));
  };

  return (
    <div>
      {/* State 1 */}
      <p>Count in State 1: {state1.count === null ? 'null' : state1.count}</p>
      <button onClick={incrementCount1}>Increment State 1</button>

      {/* State 2 */}
      <p>Count in State 2: {state2.count}</p>
      <button onClick={incrementCount2}>Increment State 2</button>
    </div>
  );
};

export default StateCounter;