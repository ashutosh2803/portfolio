import './App.css';
import { Opening } from './components/animation/Opening';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="contactWrapper">
      <Opening />
      <Navbar />
      <Footer/>
    </div>
  );
}

export default App;
