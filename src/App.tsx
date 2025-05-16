import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Forms from './components/Forms';


const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/contact', element: <Contact />},
  {path: '/about', element: <About />},
  {path: '/sponsors', element: <Sponsors />},
  {path: '/forms', element: <Forms />},
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
