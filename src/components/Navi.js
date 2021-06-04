import React, { Component } from 'react'

export default class Navi extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark container">
                    <div className="container-fluid text-danger">
                        <h4 className="col-9">Cosmos.Dev Movie App</h4>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-3" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-3">
                                    <h6 onClick={() => {this.props.filterFavProps()}} className="text-white btn">My Favourite List</h6>
                                </li>
                                <li className="nav-item mx-3">
                                <h6 onClick={() => {this.props.notFilterFavProps()}} className="text-white btn">Movie List</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
