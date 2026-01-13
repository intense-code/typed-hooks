// Parent.tsx

import React from 'react';
import ChildComponent from './ChildComponent'

const ParentComponent: React.FC = () => {
  const handleChildClick = (message: string) => {
    console.log(`Message from child: ${message}`);
  };

  return (
    <ChildComponent onClick={handleChildClick} />
  );
};
export default ParentComponent;