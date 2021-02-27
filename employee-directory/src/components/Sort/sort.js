import React from "react";

function Sort(props) {
    return (
        <div className="sort">
            <div className="row">
                <h2 className="col-md-12">Sort Directory By:</h2>
            </div>
            <div className="row">
                <div className="btn-group-vertical col-md-12" data-toggle="buttons">
                    <label className="form-check-label" htmlFor="firstNameSorted" >
                        <input className="toggle" type="radio" name="flexRadio" id="firstNameSorted" onClick={props.handleSort}></input>
                    First Name Alphabetically
                    </label>
                    <label className="form-check-label" htmlFor="lastNameSorted" >
                        <input className="toggle" type="radio" name="flexRadio" id="lastNameSorted" onClick={props.handleSort}></input>
                    Last Name Alphabetically
                    </label>
                </div>
            </div>
        </div>
    )
}
export default Sort