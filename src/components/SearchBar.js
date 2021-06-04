import React, { Component } from 'react'

export default class SearchBar extends Component {

    formSumbit = (event) =>{
        event.preventDefault();
    }
    render() {
        return (
            <div className="row">
                <div className="d-flex justify-content-center" style={{marginTop:"20px",marginBottom:"20px"}}>
                    <form className="form-inline col-8" onSubmit={this.formSumbit}>
                        <input onChange = {this.props.searchMovieProps} className="form-control col-5" type="text" placeholder="Search To Movie" aria-label="Search"></input>
                    </form>
                </div>
            </div>
        )
    }
}
