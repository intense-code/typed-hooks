// App.tsx

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StateCounter from './components/StateCounter';
import ItemComponent from './components/ItemComponent';
import {useState} from 'react'
import ThemeContext from './components/ThemeContext';
import ThemeConsumer from './components/ThemeConsumer';
/* added code starts */
import { Container } from 'react-bootstrap';
import CounterCallbackComponent from './components/CounterCallbackComponent';
/* added code stops */
import CounterMultiply from './components/CounterMultiply';
import ShoppingCart from './components/ShoppingCart';
function App() {

  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  {/* added code starts */}
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  {/* added code stops  */}

  return (
    <div className={theme}>
      <StateCounter />      
      <ItemComponent />      
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeConsumer />
      </ThemeContext.Provider>

      {/* added code starts */}
      <Container>
        <h1>Counter callback</h1>
        <p>Count: {count}</p>
        <CounterCallbackComponent onIncrement={handleIncrement} onDecrement={handleDecrement} />
        <CounterMultiply />
        <ShoppingCart />
      </Container>
      {/* added code stops  */}
    </div>  
  );
}

export default App;