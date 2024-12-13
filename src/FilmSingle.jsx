import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FilmSingle() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/Film/${id}`)
      .then(response => setFilm(response.data))
      .catch(error => console.error('Error fetching film:', error));
  }, [id]);

  if (!film) return <p>Loading...</p>;

  return (
    <div>
      <h1>{film.nev}</h1>
      <img
        src={film.kepneve}
        alt={film.nev}
        className="img-fluid mb-4"
      />
      <p><strong>Kiadás éve:</strong> {film.kiadasEve}</p>
      <p><strong>Értékelés:</strong> {film.ertekeles}</p>
      
    </div>
  );
}

export default FilmSingle;
