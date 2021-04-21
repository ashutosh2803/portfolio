import './App.css';
import { About } from './components/About/About';
import { Opening } from './components/animation/Opening';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="contactWrapper">
      <Opening />
      <About/>
      <Blog />
      <Contact/>
    </div>
  );
}

export default App;
