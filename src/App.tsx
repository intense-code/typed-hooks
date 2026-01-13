// App.tsx

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StateCounter from './components/StateCounter';
import ItemComponent from './components/ItemComponent';
/* added code starts */
import {useState} from 'react'
import ThemeContext from './components/ThemeContext';
import ThemeConsumer from './components/ThemeConsumer';
/* added code stops */

function App() {
  {/* added code starts */}
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  {/* added code stops  */}

  return (
    <div>
      <StateCounter />      
      <ItemComponent />
      {/* added code starts */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeConsumer />
      </ThemeContext.Provider>
      {/* added code stops  */}
    </div>  
  );
}

export default App;