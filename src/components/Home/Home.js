import React, { useState, useEffect, useContext } from 'react';
import './home.css';
import axios from 'axios';
import LoadMore from '../LoadMore/LoadMore';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_URL } from '../../utils/constants';
import {ThemeContext} from '../../provider/ThemeProvider';
const Home = () => {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const {theme, toggleTheme} = useContext(ThemeContext);

    const fetchMovieData = async () => {

        let url = API_URL + '/movie/popular';
        if (search !== '') {
            url = `${API_URL}/search/movie`
        }
        const result = await axios.get(url, {
            params: {
                api_key: API_KEY,
                page: page,
                query: search
            }
        })
        if (search !== '') {
            setMovies([...result.data.results])
        } else
            setMovies([...movies, ...result.data.results])
    }

    useEffect(() => {
        fetchMovieData()
    }, [])

    useEffect(() => {
        fetchMovieData()
    }, [search])

    const onLoadMoreClick = () => {
        setPage(page => page + 1)
        fetchMovieData()
    }

    const onSearchText = (data) => {
        setSearch(data)
        // fetchMovieData()
    }

    const onMovieClick = (movie) => {
        navigate(`/movie-details/${movie.id}`)
    }

    return (
        <>
            <NavBar>

                <>
                    <SearchBar onTextChange={onSearchText} />
                    <div className='m_container' style={{backgroundColor: theme === 'dark' ? 'black' : 'white'}} >
                        {
                            movies.map((movie) => {
                                return <div onClick={(ev) => onMovieClick(movie)} className='m_item' key={movie.id}>
                                    <img src={IMAGE_URL + movie.poster_path} />
                                    {/* <br />
                            {movie.title}

                            <br />
                            <span>Release Date: {movie.release_date}</span> */}
                                </div>
                            })
                        }
                    </div>
                    <LoadMore onLoadMoreClick={onLoadMoreClick} />
                    <div className='theme_button'>
                            <button onClick={toggleTheme}>Toggle Theme</button>
                    </div>
                </>

            </NavBar>

        </>
    );
};

export default Home;