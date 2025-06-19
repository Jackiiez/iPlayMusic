import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import "../style/albums.scss";

function Featuredalbums() {
       const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/releases.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching cinemas:', error));
    }, []);

    return (
        <div className="comming-soon-container">
        <div className='content-div'>
            <h2>Featured Albums</h2>
            <p>see more</p>
        </div>
            <div className="movies-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/`}>
                             <img  src={movie.picture} alt={`${movie.name} Picture`} />
                        </Link>
                        <div className="movie-info">
                            <h3>{movie.name}</h3>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Featuredalbums;