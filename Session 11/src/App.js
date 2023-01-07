import './App.css';
import Blog from './components/Blog';
import BlogCards from './components/BlogCards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
