import React, { Component } from "react";
import Table from "../Table/table";
import Search from "../Search/search";
// import Sort from "../Sort/sort"

class Container extends Component {

    state = {
        employees: this.props.employees,
        lastName: "",
        firstName: ""
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name
        this.setState({
            [name]: value
        });
    };

    handleLastNameSearch = event => {
        event.preventDefault();
        this.setState({
            employees: this.state.employees.filter(employee => employee.lastName.toLowerCase().includes(this.state.lastName.toLowerCase()))
        })
    };

    handleFirstNameSearch = event => {
        event.preventDefault();
        this.setState({
            employees: this.state.employees.filter(employee => employee.firstName.toLowerCase().includes(this.state.firstName.toLowerCase()))
        })
    };

    render() {
        return (
            <>
                <h1>Employee Directory</h1>
                <Search
                    handleInputChange={this.handleInputChange}
                    handleLastNameSearch={this.handleLastNameSearch}
                    handleFirstNameSearch={this.handleFirstNameSearch}
                />
                <Table
                    employees={this.state.employees}
                />
            </>
        )
    }
};

export default Container;