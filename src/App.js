import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Orange from './pages/Orange';
import Red from './pages/Red';
import Green from './pages/Green';
import Purple from './pages/Purple';

// Documentation for react router: https://reactrouter.com/en/v6.3.0/getting-started/installation
/**
 * - Create two new components Green and Purple. All you need to have in the component is the name of the component.
 * - Refere Existing color components under src/public.
 * - Once components are created import both Green and Purple components here.
 */

function App() {
  return (
    <div>
      <h1>Welcome to color router app</h1>
      <nav className="navbar navbar-default navbar-static-top">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <Link className="nav-link" to="orange">
              Orange
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="red">
              Red
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="purple">
              Purple
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="green">
              Green
            </Link>
          </li>
        </ul>
      </nav>

      <div className="routes-wrapper">
        <Routes>
          <Route path="orange" element={<Orange />} />
          <Route path="red" element={<Red />} />
          <Route path="green" element={<Green />} />
          <Route path="purple" element={<Purple />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
