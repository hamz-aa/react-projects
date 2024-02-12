import './App.css';
import { Count } from './components/Count';
import { Date } from './components/Date';
import { Steps } from './components/Steps';

function App() {
  return (
    <div className="App">
      <Steps />
      <Count />
      <Date />
    </div>
  );
}

export default App;
