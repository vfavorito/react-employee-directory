import React from "react";

function Search(props) {
    return (
        <div>
            <form className="form-inline">
                <p>Last Name:</p>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={props.handleInputChange} name="lastName" placeholder="Last Name"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={props.handleLastNameSearch}>Search</button>
            </form>
            <form className="form-inline">
                <p>First Name:</p>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" onChange={props.handleInputChange} name="firstName" placeholder="First Name"></input>
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={props.handleFirstNameSearch}>Search</button>
            </form>
        </div>
    )
}

export default Search;