import About from './Components/About';
import Book from './Components/Book';
import Car from './Components/Car';
import Car2 from './Components/Car2';
import Car3 from './Components/Car3';
import Car4 from './Components/Car4';
import Car5 from './Components/Car5';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { Routes,Route } from 'react-router';
import '../src/Components/main.css';

function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cars" element={<Car />} />
  <Route path="/car2" element={<Car2 />} />
  <Route path="/car3" element={<Car3 />} />
  <Route path="/car4" element={<Car4 />} />
  <Route path="/car5" element={<Car5 />} />
  <Route path="/book" element={<Book />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
    </>
  )
}

export default App
