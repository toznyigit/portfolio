import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/portfolio/' element={<Home />} />
            <Route path='/portfolio/experience/' element={<Experience />} />
            <Route path='/portfolio/projects/' element={<Projects />} />
            <Route path='/portfolio/project/:id/' element={<ProjectDisplay />} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
