// CounterMultiply.tsx
import { useState } from "react";


const CounterMultiply:React.FC = () =>{
    const [count,setCount] = useState<number>(0)

const onIncrement = ()=>{
    setCount(count+1);
}
const onDecrement = ()=>{
    setCount(count-1);
}
const onMultiply = ()=>{
    setCount(count*10);
}
// JSX for each button containing the onClick functions

    return (
        <div className="Excercise1">
            <p>
                Count: {count}
            </p>
            <button onClick={onIncrement}>Increment +1</button>
            <button onClick={onDecrement}>Decrement -1</button>
            <button onClick={onMultiply}>Multiply by 10</button>
        </div>
    );
};
export default CounterMultiply