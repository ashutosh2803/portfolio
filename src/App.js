import './App.css';
import { About } from './components/About/About';
import { Opening } from './components/animation/Opening';
import { Blog } from './components/Blog/Blog';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="contactWrapper">
      <Opening />
      <Navbar />
      <About/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
