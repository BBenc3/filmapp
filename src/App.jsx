import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import FilmList from './FilmList';
import FilmSingle from './FilmSingle';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <NavLink className="navbar-brand" to="/">FilmApp</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Filmek Listája</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/film/:id" element={<FilmSingle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
