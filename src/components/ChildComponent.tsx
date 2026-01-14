//Child.tsx

import React from 'react';

interface ChildProps {
  onClick: (message: string) => void;
}

const ChildComponent: React.FC<ChildProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick('Hello from child!');
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

export default ChildComponent;