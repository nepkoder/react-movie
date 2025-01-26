import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import { createBrowserRouter, RouterProvider,HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MovieDetails from './components/MovieDetails/MovieDetails';
import NotFound from './components/NotFound/NotFound';
import {ThemeProvider} from './provider/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for unmatched routes */}
      </Routes>
    </HashRouter>
    </ThemeProvider>

  );
}

export default App;
