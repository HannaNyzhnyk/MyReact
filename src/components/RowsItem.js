import React, { useReducer } from "react";
import ButtonTable from "./ButtonTable"


function RowsItem({user}) {
    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td><ButtonTable key={user.id} user={user}></ButtonTable></td>
        </tr>
    )

}

export default RowsItem;