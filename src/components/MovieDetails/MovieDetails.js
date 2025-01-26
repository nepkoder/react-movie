import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import './movie.css'
import Home from '../Home/Home';
import { API_KEY, API_URL, IMAGE_URL } from '../../utils/constants';

const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        // fetch movie details
        const fetchMovieDetails = async () => {
            const response = await axios(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
            setMovie(response.data);
        }
        fetchMovieDetails() // calling the function
    }, [id])

    return (
        <NavBar>
            {
                movie ?
                    <div>
                        {/* Navigation */}
                        <div className="rmdb-navigation">
                            <div className="rmdb-navigation-content">
                                <Link to="/">
                                    <p>Home</p>
                                    <p>/</p>
                                    <p>{movie ? movie.title : ''}</p>
                                </Link>
                            </div>
                        </div>
                        {/* Movie Info */}
                        <div className="rmdb-movieinfo">
                            <div className="rmdb-movieinfo-content">
                                <div className="rmdb-movieinfo-thumb">
                                    <div className="rmdb-moviethumb">
                                        <img
                                            src={IMAGE_URL + movie.poster_path}
                                            alt=""
                                            className="moviethumb"
                                        />
                                    </div>
                                </div>
                                <div className="rmdb-movieinfo-text">
                                    <h1>{movie.title}</h1>
                                    <h3>{movie.genres[0].name}</h3>
                                    <p>
                                        {movie.overview}
                                    </p>
                                    <h3>IMDB RANKING</h3>
                                    <div className="rmdb-rating">
                                        <meter
                                            min={0}
                                            max={100}
                                            optimum={100}
                                            low={40}
                                            high={70}
                                            value={movie.vote_average}
                                        />
                                        <p className="rmdb-score">{movie.vote_average}</p>
                                    </div>
                                    <h3>DIReCTORS</h3>
                                    <p className="rmdb-director">Barry Jenkins</p>
                                </div>
                            </div>
                        </div>

                    <Home/>

                    </div>
                    :
                    null
            }

        </NavBar>
    );
};

export default MovieDetails;