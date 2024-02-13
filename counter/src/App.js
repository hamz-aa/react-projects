import { useState } from 'react';
import './App.css';
import { Count } from './components/Count';
import { Steps } from './components/Steps';
import { MyDate } from './components/MyDate';

function App() {
  const [steps, setSteps] = useState(1);

  return (
    <div className="App" style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <Steps steps={steps} setSteps={setSteps} />
      <Count steps={steps} />
      <MyDate />
    </div>
  );
}

export default App;
