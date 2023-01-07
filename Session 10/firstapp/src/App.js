import './App.css';
import BlogCards from './components/BlogCards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className='container' style={{marginTop: '5rem'}}>Latest Blogs!</h1>
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      <BlogCards />
      
      <Footer />
    </div>
  );
}

export default App;
