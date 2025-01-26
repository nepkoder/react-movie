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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/movie-details/:id",
    element: <MovieDetails />,
  },
  {
    path: "*",
    element: <NotFound />, // Catch-all for unmatched routes
  }
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;