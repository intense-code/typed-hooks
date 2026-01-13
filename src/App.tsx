// App.tsx

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StateCounter from './components/StateCounter';
/* added code starts */
import ItemComponent from './components/ItemComponent';
/* added code stops */

function App() {
  return (
    <div>
      <StateCounter />
      {/* added code starts */}
      <ItemComponent />
      {/* added code stops  */}
    </div>  
  );
}

export default App;