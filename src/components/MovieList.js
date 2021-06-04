import React, { Component } from 'react'

export default class MovieList extends Component {

    /*     function deleteClick() {
            console.log("sa");
        } */
    render() {
        return (
            <div className="row">
                {this.props.movies.map((movie) => (
                    <div className="col-lg-4 mb-5" key={movie.id}>
                        <div className="card shadow-sm h-100">
                            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" onClick={() => { this.props.addMovieProps(movie) }} className="btn btn-danger">{this.props.buttonControl}</button>
                                    <h4><span className="badge bg-info text-4">{movie.vote_average}</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

