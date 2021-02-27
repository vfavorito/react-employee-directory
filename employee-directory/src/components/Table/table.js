import React from "react";


function Table(props) {

    return (
        <table className="table">
            <thead>
                <tr className="tableHead">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee =>
                    <tr key={employee.id.value}>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.phone}</td>
                    </tr>)}
            </tbody>
        </table>
    );

}

export default Table;