import './App.css';
import { useRef } from 'react';

//hooks
import useOnScreen from './hooks/useOnScreen';

import ScrollComponent from './components/ScrollComponent';

function App() {
  return (
    <div className="App">
      <ScrollComponent />
    </div>
  );
}

export default App;
