import Card from './components/Card';
import './App.css';
import { useState } from 'react';

function App() {

  const [dark, setDark] = useState(false)


  return (
    <div className="App">
      
    <Card />
    </div>
  );
}

export default App;
