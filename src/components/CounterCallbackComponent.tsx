//CounterCallbackComponent.tsx

interface CounterProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterCallbackComponent: React.FC<CounterProps> = ({ onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default CounterCallbackComponent;