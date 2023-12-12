import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <h1>Your favorite pasta</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
