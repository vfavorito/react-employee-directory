import React from "react";

function Sort(props) {
    return (
        <>
            <h2>The Sort Box</h2>
            <div className="btn-group" id="petSelect" data-toggle="buttons">
               
                    <input className="toggle" type="radio" name="flexRadio" id="unsorted" onClick={props.handleSort}></input>
                    <label className="form-check-label" >Unsorted</label>
                
                
                    <input className="toggle" type="radio" name="flexRadio" id="firstNameSorted" onClick={props.handleSort}></input>
                    <label className="form-check-label" >First Name Alphabetical</label>

                
                
                    <input className="toggle" type="radio" name="flexRadio" id="lastNameSorted" onClick={props.handleSort}></input>
                    <label className="form-check-label" >Last Name Alphbetical</label>
                
            </div>
        </>
    )
}
export default Sort