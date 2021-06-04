import React from 'react';
import MovieList from './MovieList';
import Navi from './Navi';
import SearchBar from './SearchBar';
import axios from "axios";
require("dotenv").config();




class App extends React.Component {
    state = {
        movies: [],
        searchQuery: "",
        favMovies: [],
        bridgeMovies : [],
        buttonControl: "Add to Favourite",
    }

    /*     async componentDidMount() {
            const baseURL = "http://localhost:3001/movies";
            const response = await fetch(baseURL);
            const data = await response.json();
            this.setState({movies : data})
        } */

    async componentDidMount() {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1%C2%B4%29%3B`);
        this.setState({movies : response.data.results})
    }


    //FETCH API
/*     deleteMovie = async (movie) => {
        const baseURL = `http://localhost:3001/movies${movie.id}`;
        await fetch(baseURL,{
            method : "DELETE"
        })
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
            //    this.setState({
              //      movies : newMovieList
            //    }) 

        this.setState(state => ({
            movies: newMovieList
        }))
    } */

    // AXIOS API
/*     deleteMovie = async (movie) => {
        
        axios.delete(`http://localhost:3001/movies${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
            //    this.setState({
              //      movies : newMovieList
            //    }) 

        this.setState(state => ({
            movies: newMovieList
        }))
    } */

    addMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id === movie.id
        )
        this.setState(state => ({
            favMovies: newMovieList.concat(this.state.favMovies)
        }))
        movie.id === 0? this.setState(state => ({ buttonControl: "Favourite"})): this.setState(state => ({ buttonControl: "Favouritesaaa"}))


    }


    filterFav = () => {
        this.setState(state => ({
            bridgeMovies: this.state.movies,
            movies: this.state.favMovies
        }))
    }

    notFilterFav = () => {
        this.setState(state => ({
            movies: this.state.bridgeMovies
        }))
    }

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }


    render() {
        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <Navi filterFavProps = {this.filterFav} notFilterFavProps = {this.notFilterFav} />
                        <SearchBar searchMovieProps={this.searchMovie} />
                    </div>
                </div>
                <div className="container">
                    <div className="col-sm-12">
                        <MovieList
                            movies={filteredMovies}
                            addMovieProps={this.addMovie}
                            buttonControl = {this.state.buttonControl}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
