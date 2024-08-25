import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Events';
import Event1 from './pages/Event1';
import Event2 from './pages/Event2';
import About from './pages/About';  
import Contact from './pages/Contact';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/Event1" element={<Event1 />} />
        <Route path="/Event2" element={<Event2 />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
