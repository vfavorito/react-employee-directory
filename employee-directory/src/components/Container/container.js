import React from "react";
import Table from "../Table/table";


function Container (props){
    return(
        <>
        <h1>Employee Directory</h1>
        <Table employees={props.employees}></Table>
        </>
    )
};

export default Container;