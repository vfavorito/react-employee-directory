import React, { Component } from "react";
import Table from "../Table/table";
import Search from "../Search/search";
import Sort from "../Sort/sort"
import API from "../../utils/API"

class Container extends Component {
    state = {
        initemployees: [],
        employees: [],
        lastName: "",
        firstName: ""
    }
    componentDidMount() {
        API.search()
            .then(res =>
                this.setState({
                    employees: res.data.results,
                    initemployees:res.data.results
                })
            )
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
            employees: this.state.employees.filter(employee => employee.name.last.toLowerCase().includes(this.state.lastName.toLowerCase()))
        })
    };

    handleFirstNameSearch = event => {
        event.preventDefault();
        this.setState({
            employees: this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.state.firstName.toLowerCase()))
        })
    };

    handleSort = event => {
        const sortMethod = event.target.id;
        const initemployees = this.state.initemployees;
        switch (sortMethod) {
            case "unsorted":
                console.log("initemployees",initemployees);
                console.log("employees",this.state.employees);
                this.setState({
                    employees: this.state.initemployees
                });
                break;
            case "firstNameSorted":
                console.log("initemployees",initemployees);
                console.log("employees",this.state.employees);
                this.setState({
                    employees: this.state.employees.sort(function (a, b) {
                        if (a.name.first < b.name.first) { return -1; }
                        if (a.name.first > b.name.first) { return 1; }
                        return 0;
                    })
                });
                break;
            case "lastNameSorted":
                this.setState({
                    employees: this.state.employees.sort(function (a, b) {
                        if (a.name.last < b.name.last) { return -1; }
                        if (a.name.last > b.name.last) { return 1; }
                        return 0;
                    })
                });
                break;
            default:
                this.setState({
                    employees: this.state.initemployees
                });
        }
    }
    render() {
        return (
            <>
                <h1>Employee Directory</h1>
                <Search
                    handleInputChange={this.handleInputChange}
                    handleLastNameSearch={this.handleLastNameSearch}
                    handleFirstNameSearch={this.handleFirstNameSearch}
                />
                <Sort handleSort={this.handleSort} />
                <Table
                    employees={this.state.employees}
                />
            </>
        )
    }
};

export default Container;