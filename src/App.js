import './App.css';
import { About } from './components/About/About';
import { Opening } from './components/animation/Opening';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Opening />
      <Navbar/>
      <About />
      <Projects/>
      <Blog />
      <Contact/>
    </div>
  );
}

export default App;
