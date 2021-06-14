import React from "react";
import RowsItem from "./RowsItem"

function NewTable() {
    const users = [
        {id:5, name:"Anya", email: "aaa@gmail.com", age: 18},
        {id:6,name:"Misha",  email: "mmm@gmail.com", age: 42},
        {id:7,name:"Boris", email: "bbb@gmail.com", age: 19},
        {id:8,name:"Lesya", email: "lll@gmail.com", age: 10},
        {id:9,name:"Masha", email: "mash@gmail.com", age: 14}
    ]
    return <table>
        <tbody>
            {users.map(user => (
                <RowsItem  key={user.id} user={user}></RowsItem>
            ))}
        </tbody>
    </table>
}

export default NewTable;