import './App.css';
import { Opening } from './components/animation/Opening';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="contactWrapper">
      <Opening />
      <Navbar />
      <Contact/>
    </div>
  );
}

export default App;
