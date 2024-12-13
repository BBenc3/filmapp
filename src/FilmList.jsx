import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FilmList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Film')
      .then(response => setFilms(response.data))
      .catch(error => console.error('Error fetching films:', error));
  }, []);

  return (
    <div className="row">
      {films.map(film => (
        <div key={film.id} className="col-md-4">
          <div className="card mb-4">
            <img
              src={film.kepneve}
              className="card-img-top"
              alt={film.nev}
            />
            <div className="card-body">
              <h5 className="card-title">{film.nev}</h5>
              <p className="card-text">Kiadás éve: {film.kiadasEve}</p>
              <p className="card-text">Értékelés: {film.ertekeles}</p>
              <Link to={`/film/${film.id}`} className="btn btn-primary">
                Részletek
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilmList;
