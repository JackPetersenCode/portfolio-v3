import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout.js';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Projects" element={<Projects />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;