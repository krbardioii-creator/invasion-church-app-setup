
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Give from './pages/Give';
import Connect from './pages/Connect';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/give" element={<Give />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;